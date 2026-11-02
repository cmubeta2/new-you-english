/**
 * ==============================================================================
 * NEW YOU TEACHER ACADEMY — HỆ THỐNG TỰ ĐỘNG HÓA VẬN HÀNH & THU HỌC PHÍ 24/7
 * ==============================================================================
 * Tác giả & Kiến trúc sư: Thầy Huỳnh Trường Thanh Tâm (Hyrta)
 * Phiên bản: v1.7.8 (Nâng cấp toàn diện xử lý 3 luồng dữ liệu)
 * Mục đích: 
 *   1. Tiếp nhận Webhook từ SePay khi học viên quét mã VietQR ngân hàng.
 *   2. Tiếp nhận đăng ký đặt cọc / báo chuyển khoản từ trang VIP (vip/index.html).
 *   3. Tiếp nhận hồ sơ khảo sát phỏng vấn 1-1 chuyên sâu từ trang Xác nhận (xac-nhan/index.html).
 *   4. Ghi nhận dữ liệu tức thì vào Google Sheets CRM theo phân luồng thông minh.
 *   5. Bắn thông báo nổ đơn & hồ sơ ứng viên realtime về Telegram Bot của Ban Giảng Huấn.
 * 
 * HƯỚNG DẪN CÀI ĐẶT 3 BƯỚC:
 *   Bước 1: Mở Google Sheets CRM -> Tiện ích mở rộng -> Apps Script -> Dán toàn bộ mã này.
 *   Bước 2: Điền TELEGRAM_BOT_TOKEN và TELEGRAM_CHAT_ID ở mục CONFIG bên dưới.
 *   Bước 3: Nhấn Triển khai (Deploy) -> Tùy chọn triển khai mới -> Ứng dụng web (Web App)
 *           - Thực thi dưới quyền: Tôi (Me)
 *           - Ai có quyền truy cập: Bất kỳ ai (Anyone)
 *           -> Sao chép URL Web App thu được (kết thúc bằng /exec) và dán vào:
 *              + SePay Webhook URL trên my.sepay.vn
 *              + Biến Apps Script URL trên Landing Page / File cấu hình Web.
 * ==============================================================================
 */

// -----------------------------------------------------------------------------
// 1. CẤU HÌNH HỆ THỐNG
// -----------------------------------------------------------------------------
const CONFIG = {
  // Token Telegram Bot tạo từ @BotFather
  TELEGRAM_BOT_TOKEN: "YOUR_TELEGRAM_BOT_TOKEN_HERE", 
  
  // Chat ID nhóm Telegram nhận thông báo (lấy từ @userinfobot hoặc thêm bot vào nhóm)
  TELEGRAM_CHAT_ID: "YOUR_TELEGRAM_CHAT_ID_HERE",
  
  // Tên các trang tính trong Google Sheets CRM
  SHEET_PAYMENT: "LICH_SU_THANH_TOAN",
  SHEET_LEADS: "DANG_KY_WEB",
  SHEET_SURVEY: "KHAO_SAT_PHONG_VAN",
  SHEET_TRACK_A: "DANH_SACH_LOP_TRACK_A",
  SHEET_TRACK_B: "DANH_SACH_LOP_TRACK_B"
};

// -----------------------------------------------------------------------------
// 2. HÀM XỬ LÝ POST REQUEST (ROUTER 3 LUỒNG DỮ LIỆU)
// -----------------------------------------------------------------------------
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000); // Khóa 10s tránh xung đột ghi dữ liệu đồng thời

  try {
    let postData;
    
    // Parse dữ liệu gửi lên (Hỗ trợ cả JSON body thuần và URL-encoded parameter)
    if (e.postData && e.postData.contents) {
      try {
        postData = JSON.parse(e.postData.contents);
      } catch (err) {
        postData = e.parameter || {};
      }
    } else {
      postData = e.parameter || {};
    }

    // LUỒNG 1: DỮ LIỆU TỪ SEPAY WEBHOOK (BIẾN ĐỘNG SỐ DƯ TÀI KHOẢN NGÂN HÀNG)
    if (postData.transferAmount !== undefined || postData.amount_in !== undefined || postData.gateway) {
      return handleSepayWebhook(postData);
    }

    // LUỒNG 2: DỮ LIỆU PHIẾU KHẢO SÁT CHUYÊN SÂU TỪ TRANG XÁC NHẬN (xac-nhan/index.html)
    if (postData.degree || postData.programAudit || postData.obstacles) {
      return handleSurveySubmission(postData);
    }

    // LUỒNG 3: DỮ LIỆU FORM ĐĂNG KÝ LEADS / BÁO CHUYỂN KHOẢN (vip/index.html HOẶC HOME)
    if (postData.hoTen || postData.sdt || postData.phone || postData.loai === "lead_web") {
      return handleLeadSubmission(postData);
    }

    // Mặc định phản hồi thành công nếu định dạng khác
    return createJsonResponse({ ok: true, status: "success", ma: "NYE_" + Utilities.formatDate(new Date(), "GMT+7", "yyyyMMddHHmmss"), message: "Data received successfully", data: postData });

  } catch (error) {
    Logger.log("Lỗi xử lý doPost: " + error.toString());
    return createJsonResponse({ ok: false, loi: "loi", status: "error", message: error.toString() });
  } finally {
    lock.releaseLock();
  }
}

// -----------------------------------------------------------------------------
// 3. XỬ LÝ LUỒNG 1: SEPAY WEBHOOK (BIẾN ĐỘNG SỐ DƯ NGÂN HÀNG)
// -----------------------------------------------------------------------------
function handleSepayWebhook(data) {
  const amount = data.transferAmount || data.amount_in || 0;
  const content = (data.content || data.transaction_content || "").trim();
  const bank = data.gateway || data.bank_brand_name || "Ngân hàng";
  const refCode = data.referenceCode || data.id || "N/A";
  const transDate = data.transactionDate || Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy HH:mm:ss");

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(CONFIG.SHEET_PAYMENT);
  
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_PAYMENT);
    sheet.appendRow(["Thời Gian", "Mã Giao Dịch", "Ngân Hàng", "Số Tiền", "Nội Dung Chuyển Khoản", "Trạng Thái"]);
    sheet.getRange("A1:F1").setFontWeight("bold").setBackground("#fef3c7");
  }

  // Ghi nhận giao dịch
  sheet.appendRow([transDate, refCode, bank, amount, content, "Thành công (Đã khớp SePay)"]);

  const formattedAmount = Number(amount).toLocaleString("vi-VN") + " VNĐ";

  // Tin nhắn Telegram thông báo nổ đơn
  const msgTelegram = 
    `🔔 <b>TING TING! NỔ ĐƠN HỌC PHÍ / ĐẶT CỌC!</b> 🔔\n\n` +
    `💰 <b>Số tiền:</b> <code>${formattedAmount}</code>\n` +
    `🏦 <b>Ngân hàng:</b> ${bank}\n` +
    `📝 <b>Nội dung:</b> <code>${content}</code>\n` +
    `🔖 <b>Mã GD:</b> ${refCode}\n` +
    `⏰ <b>Thời gian:</b> ${transDate}\n\n` +
    `🎯 <i>Hệ thống tự động New You Teacher Academy đã ghi nhận vào CRM. Chúc mừng Thầy Cô!</i>`;

  sendTelegramMessage(msgTelegram);

  return createJsonResponse({ ok: true, status: "success", ma: refCode, message: "Sepay webhook processed successfully" });
}

// -----------------------------------------------------------------------------
// 4. XỬ LÝ LUỒNG 2: PHIẾU KHẢO SÁT PHỎNG VẤN 1-1 (xac-nhan/index.html)
// -----------------------------------------------------------------------------
function handleSurveySubmission(data) {
  const fullName = (data.fullName || data.hoTen || "Chưa cung cấp").trim();
  const phone = (data.phone || data.sdt || "").trim();
  const email = (data.email || "N/A").trim();
  const ticketType = data.ticketType || "VIP_99K";
  const degree = data.degree || "Chưa chọn";
  const programAudit = data.programAudit || "Chưa chọn";
  const obstacles = data.obstacles || "Không có";
  const question = data.question || "Không có";
  const timestamp = Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy HH:mm:ss");

  // Đánh giá sơ bộ phân luồng
  let suggestedTrack = "Track B (Nền tảng A0-A2)";
  if (degree.indexOf("CuNhan") !== -1 || degree.indexOf("ThacSi") !== -1 || degree.indexOf("IELTS") !== -1 || programAudit.indexOf("Nghe") !== -1) {
    suggestedTrack = "Track A (Đào tạo Nghề B1+)";
  }

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(CONFIG.SHEET_SURVEY);

  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_SURVEY);
    sheet.appendRow(["Thời Gian", "Họ Tên", "SĐT / Zalo", "Email", "Loại Vé", "Bằng Cấp / Học Lực", "Mục Tiêu Khóa Học", "Rào Cản Lớn Nhất", "Câu Hỏi Cho BG Huấn", "Phân Luồng Đề Xuất"]);
    sheet.getRange("A1:J1").setFontWeight("bold").setBackground("#fed7aa");
  }

  sheet.appendRow([timestamp, fullName, phone, email, ticketType, degree, programAudit, obstacles, question, suggestedTrack]);

  // Tin nhắn Telegram thông báo ứng viên nộp hồ sơ phỏng vấn
  const msgTelegram = 
    `📋 <b>HỒ SƠ KHẢO SÁT PHỎNG VẤN 1-1 MỚI!</b> 📋\n\n` +
    `👤 <b>Ứng viên:</b> ${fullName}\n` +
    `📞 <b>SĐT / Zalo:</b> <code>${phone}</code>\n` +
    `📧 <b>Email:</b> ${email}\n` +
    `🎓 <b>Học vấn:</b> <code>${degree}</code>\n` +
    `🎯 <b>Nhu cầu:</b> ${programAudit}\n` +
    `⚡ <b>Phân luồng sơ bộ:</b> <b>${suggestedTrack}</b>\n` +
    `🚧 <b>Rào cản:</b> <i>${obstacles}</i>\n` +
    `❓ <b>Câu hỏi gửi BG Huấn:</b> <i>${question}</i>\n` +
    `⏰ <b>Thời gian:</b> ${timestamp}\n\n` +
    `👉 <i>Thầy Tâm & Cô My vui lòng xem xét hồ sơ trước giờ phỏng vấn qua Google Meet!</i>`;

  sendTelegramMessage(msgTelegram);

  return createJsonResponse({ ok: true, status: "success", ma: "SURVEY_" + Utilities.formatDate(new Date(), "GMT+7", "yyyyMMddHHmmss"), message: "Survey profile recorded successfully" });
}

// -----------------------------------------------------------------------------
// 5. XỬ LÝ LUỒNG 3: ĐĂNG KÝ LEADS & BÁO CHUYỂN KHOẢN (vip/index.html HOẶC HOME)
// -----------------------------------------------------------------------------
function handleLeadSubmission(data) {
  const hoTen = (data.hoTen || data.fullName || data.name || "Chưa cung cấp").trim();
  const sdt = (data.sdt || data.phone || "").trim();
  const email = (data.email || "N/A").trim();
  const ghiChu = data.ghiChu || data.note || "Đăng ký từ Landing Page";
  const nguon = data.nguon || data.source || "Website";
  const maCD = data.maCD || "NEWYOU_K01";
  const thoiGian = Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy HH:mm:ss");

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(CONFIG.SHEET_LEADS);

  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_LEADS);
    sheet.appendRow(["Thời Gian", "Mã Chiến Dịch", "Họ Và Tên", "Số Điện Thoại", "Email", "Nguồn", "Ghi Chú", "Trạng Thái"]);
    sheet.getRange("A1:H1").setFontWeight("bold").setBackground("#e0e7ff");
  }

  sheet.appendRow([thoiGian, maCD, hoTen, sdt, email, nguon, ghiChu, "Chờ đối soát"]);

  const msgTelegram = 
    `📥 <b>HỌC VIÊN BÁO CHUYỂN KHOẢN / ĐĂNG KÝ MỚI!</b> 📥\n\n` +
    `👤 <b>Họ tên:</b> ${hoTen}\n` +
    `📞 <b>SĐT / Zalo:</b> <code>${sdt}</code>\n` +
    `📧 <b>Email:</b> ${email}\n` +
    `🏷️ <b>Mã CD:</b> ${maCD}\n` +
    `🌐 <b>Nguồn:</b> ${nguon}\n` +
    `💬 <b>Ghi chú:</b> <i>${ghiChu}</i>\n` +
    `⏰ <b>Thời gian:</b> ${thoiGian}\n\n` +
    `⚡ <i>Tư vấn viên vui lòng kiểm tra tài khoản ngân hàng và liên hệ xác nhận trong 15 phút!</i>`;

  sendTelegramMessage(msgTelegram);

  return createJsonResponse({ ok: true, status: "success", ma: "LEAD_" + Utilities.formatDate(new Date(), "GMT+7", "yyyyMMddHHmmss"), message: "Lead captured successfully" });
}

// -----------------------------------------------------------------------------
// 6. GỬI TIN NHẮN TELEGRAM BOT (HTML MODE)
// -----------------------------------------------------------------------------
function sendTelegramMessage(htmlContent) {
  if (!CONFIG.TELEGRAM_BOT_TOKEN || CONFIG.TELEGRAM_BOT_TOKEN.indexOf("YOUR_") !== -1) {
    Logger.log("Chưa cấu hình Telegram Bot Token!");
    return;
  }

  const url = `https://api.telegram.org/bot${CONFIG.TELEGRAM_BOT_TOKEN}/sendMessage`;
  const payload = {
    chat_id: CONFIG.TELEGRAM_CHAT_ID,
    text: htmlContent,
    parse_mode: "HTML",
    disable_web_page_preview: true
  };

  const options = {
    method: "POST",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    Logger.log("Telegram Response: " + response.getContentText());
  } catch (err) {
    Logger.log("Lỗi gửi Telegram: " + err.toString());
  }
}

// -----------------------------------------------------------------------------
// 7. HEALTH CHECK & GET REQUEST
// -----------------------------------------------------------------------------
function doGet(e) {
  return createJsonResponse({
    status: "ok",
    service: "New You Teacher Academy - Webhook & CRM Automation Gateway",
    author: "Thầy Huỳnh Trường Thanh Tâm (Hyrta)",
    version: "1.7.8",
    capabilities: ["Sepay_VietQR_Webhook", "Interview_Survey_Capture", "Lead_Management", "Telegram_Alerts"],
    timestamp: new Date().toISOString()
  });
}

// Hàm hỗ trợ xuất JSON
function createJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// -----------------------------------------------------------------------------
// 8. TEST THỬ TẤT CẢ TÍNH NĂNG TRỰC TIẾP TỪ TRÌNH SOẠN THẢO
// -----------------------------------------------------------------------------
function testSendTelegram() {
  const msg = "🚀 <b>TEST KẾT NỐI HỆ THỐNG THÀNH CÔNG!</b>\n\nTelegram Bot đã kết nối hoàn hảo với Google Sheets CRM của New You Teacher Academy (v1.7.8).";
  sendTelegramMessage(msg);
}
