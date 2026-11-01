/**
 * ==============================================================================
 * NEW YOU TEACHER ACADEMY — HỆ THỐNG TỰ ĐỘNG HÓA VẬN HÀNH & THU HỌC PHÍ 24/7
 * ==============================================================================
 * Tác giả & Kiến trúc sư: Thầy Huỳnh Trường Thanh Tâm (Hyrta)
 * Mục đích: 
 *   1. Tiếp nhận Webhook từ SePay khi có biến động số dư ngân hàng qua VietQR.
 *   2. Tiếp nhận đăng ký thông tin học viên (Leads) từ Landing Page / Google Form.
 *   3. Ghi nhận dữ liệu tức thì vào Google Sheets CRM theo phân luồng thông minh.
 *   4. Bắn thông báo nổ đơn realtime về Telegram Bot của Ban Quản Trị.
 * 
 * HƯỚNG DẪN CÀI ĐẶT 3 BƯỚC:
 *   Bước 1: Mở Google Sheets CRM -> Tiện ích mở rộng -> Apps Script -> Dán toàn bộ mã này.
 *   Bước 2: Điền TELEGRAM_BOT_TOKEN và TELEGRAM_CHAT_ID ở mục CẤU HÌNH bên dưới.
 *   Bước 3: Nhấn Triển khai (Deploy) -> Tùy chọn triển khai mới -> Ứng dụng web (Web App)
 *           - Thực thi dưới quyền: Tôi (Me)
 *           - Ai có quyền truy cập: Bất kỳ ai (Anyone)
 *           -> Sao chép URL Web App thu được và dán vào SePay Webhook & Landing Page.
 * ==============================================================================
 */

// -----------------------------------------------------------------------------
// 1. CẤU HÌNH HỆ THỐNG (VUI LÒNG ĐIỀN THÔNG TIN CỦA ANH/CHỊ)
// -----------------------------------------------------------------------------
const CONFIG = {
  // Token Telegram Bot tạo từ @BotFather
  TELEGRAM_BOT_TOKEN: "YOUR_TELEGRAM_BOT_TOKEN_HERE", 
  
  // Chat ID nhóm Telegram nhận thông báo nổ đơn (Lấy từ @userinfobot hoặc thêm bot vào nhóm)
  TELEGRAM_CHAT_ID: "YOUR_TELEGRAM_CHAT_ID_HERE",
  
  // Tên các trang tính trong Google Sheets CRM
  SHEET_PAYMENT: "LICH_SU_THANH_TOAN",
  SHEET_LEADS: "DANG_KY_WEB",
  SHEET_TRACK_A: "DANH_SACH_LOP_TRACK_A",
  SHEET_TRACK_B: "DANH_SACH_LOP_TRACK_B"
};

// -----------------------------------------------------------------------------
// 2. HÀM XỬ LÝ POST REQUEST (WEBHOOK SEPAY & FORM LANDING PAGE)
// -----------------------------------------------------------------------------
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000); // Khóa 10s tránh xung đột ghi dữ liệu đồng thời

  try {
    let postData;
    
    // Parse dữ liệu gửi lên (Hỗ trợ cả JSON body và Form Data)
    if (e.postData && e.postData.contents) {
      try {
        postData = JSON.parse(e.postData.contents);
      } catch (err) {
        postData = e.parameter || {};
      }
    } else {
      postData = e.parameter || {};
    }

    // NHÁNH 1: DỮ LIỆU TỪ SEPAY WEBHOOK (THANH TOÁN HỌC PHÍ / ĐẶT CỌC)
    if (postData.transferAmount !== undefined || postData.amount_in !== undefined || postData.gateway) {
      return handleSepayWebhook(postData);
    }

    // NHÁNH 2: DỮ LIỆU TỪ FORM ĐĂNG KÝ LANDING PAGE (LEADS)
    if (postData.hoTen || postData.sdt || postData.loai === "lead_web") {
      return handleLeadSubmission(postData);
    }

    // Mặc định phản hồi thành công
    return createJsonResponse({ status: "success", message: "Data received", data: postData });

  } catch (error) {
    Logger.log("Lỗi xử lý doPost: " + error.toString());
    return createJsonResponse({ status: "error", message: error.toString() });
  } finally {
    lock.releaseLock();
  }
}

// -----------------------------------------------------------------------------
// 3. XỬ LÝ BIẾN ĐỘNG SỐ DƯ TỪ SEPAY WEBHOOK
// -----------------------------------------------------------------------------
function handleSepayWebhook(data) {
  const amount = data.transferAmount || data.amount_in || 0;
  const content = (data.content || data.transaction_content || "").trim();
  const bank = data.gateway || data.bank_brand_name || "Ngân hàng";
  const refCode = data.referenceCode || data.id || "N/A";
  const transDate = data.transactionDate || Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy HH:mm:ss");

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(CONFIG.SHEET_PAYMENT);
  
  // Tự động tạo Sheet nếu chưa có
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_PAYMENT);
    sheet.appendRow(["Thời Gian", "Mã Giao Dịch", "Ngân Hàng", "Số Tiền", "Nội Dung Chuyển Khoản", "Trạng Thái"]);
    sheet.getRange("A1:F1").setFontWeight("bold").setBackground("#fef3c7");
  }

  // Ghi dòng giao dịch mới
  sheet.appendRow([transDate, refCode, bank, amount, content, "Thành công (Đã khớp SePay)"]);

  // Định dạng số tiền VNĐ đẹp mắt
  const formattedAmount = Number(amount).toLocaleString("vi-VN") + " VNĐ";

  // Soạn tin nhắn Telegram siêu đẹp thông báo ban quản trị
  const msgTelegram = 
    `🔔 <b>TING TING! NỔ ĐƠN HỌC VIÊN MỚI!</b> 🔔\n\n` +
    `💰 <b>Số tiền:</b> <code>${formattedAmount}</code>\n` +
    `🏦 <b>Ngân hàng:</b> ${bank}\n` +
    `📝 <b>Nội dung:</b> <code>${content}</code>\n` +
    `🔖 <b>Mã GD:</b> ${refCode}\n` +
    `⏰ <b>Thời gian:</b> ${transDate}\n\n` +
    `🎯 <i>Hệ thống tự động New You Teacher Academy đã ghi nhận vào CRM. Chúc mừng Thầy Cô!</i>`;

  sendTelegramMessage(msgTelegram);

  return createJsonResponse({ status: "success", message: "Sepay webhook processed successfully" });
}

// -----------------------------------------------------------------------------
// 4. XỬ LÝ FORM ĐĂNG KÝ HỌC VIÊN MỚI (LEADS)
// -----------------------------------------------------------------------------
function handleLeadSubmission(data) {
  const hoTen = (data.hoTen || data.name || "Chưa cung cấp").trim();
  const sdt = (data.sdt || data.phone || "").trim();
  const email = (data.email || "N/A").trim();
  const ghiChu = data.ghiChu || data.note || "Đăng ký từ Landing Page";
  const nguon = data.nguon || data.source || "Website";
  const thoiGian = Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy HH:mm:ss");

  // Phân luồng thông minh dựa trên kết quả khảo sát
  let track = "Track B (Nền tảng A0-A2)";
  if (data.trinhDo === "B1+" || (data.mucTieu && data.mucTieu.indexOf("Dạy học") !== -1)) {
    track = "Track A (Đào tạo Nghề B1+)";
  }

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(CONFIG.SHEET_LEADS);

  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_LEADS);
    sheet.appendRow(["Thời Gian", "Họ Và Tên", "Số Điện Thoại", "Email", "Phân Luồng Dự Kiến", "Nguồn", "Ghi Chú", "Trạng Thái"]);
    sheet.getRange("A1:H1").setFontWeight("bold").setBackground("#e0e7ff");
  }

  sheet.appendRow([thoiGian, hoTen, sdt, email, track, nguon, ghiChu, "Mới tiếp nhận"]);

  // Bắn tin nhắn Telegram thông báo có Lead mới
  const msgTelegram = 
    `📥 <b>CÓ HỌC VIÊN ĐĂNG KÝ MỚI!</b> 📥\n\n` +
    `👤 <b>Họ tên:</b> ${hoTen}\n` +
    `📞 <b>SĐT / Zalo:</b> <code>${sdt}</code>\n` +
    `📧 <b>Email:</b> ${email}\n` +
    `🎓 <b>Phân luồng:</b> <b>${track}</b>\n` +
    `🌐 <b>Nguồn:</b> ${nguon}\n` +
    `💬 <b>Ghi chú:</b> ${ghiChu}\n` +
    `⏰ <b>Thời gian:</b> ${thoiGian}\n\n` +
    `⚡ <i>Tư vấn viên vui lòng liên hệ hỗ trợ trong vòng 15 phút!</i>`;

  sendTelegramMessage(msgTelegram);

  return createJsonResponse({ status: "success", message: "Lead captured successfully" });
}

// -----------------------------------------------------------------------------
// 5. HÀM GỬI TIN NHẮN TELEGRAM BOT (HTML MODE)
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
// 6. HEALTH CHECK (HỖ TRỢ TRUY CẬP TRÌNH DUYỆT GET REQUEST)
// -----------------------------------------------------------------------------
function doGet(e) {
  return createJsonResponse({
    status: "ok",
    service: "New You Teacher Academy - Webhook & CRM Automation Gateway",
    author: "Thầy Huỳnh Trường Thanh Tâm (Hyrta)",
    version: "1.7.7",
    timestamp: new Date().toISOString()
  });
}

// Hàm hỗ trợ xuất JSON có CORS Header
function createJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// -----------------------------------------------------------------------------
// 7. HÀM TEST THỬ TELEGRAM BOT TRỰC TIẾP TỪ APPS SCRIPT
// -----------------------------------------------------------------------------
function testSendTelegram() {
  const msg = "🚀 <b>TEST KẾT NỐI HỆ THỐNG THÀNH CÔNG!</b>\n\nTelegram Bot đã kết nối hoàn hảo với Google Sheets CRM của New You Teacher Academy.";
  sendTelegramMessage(msg);
}
