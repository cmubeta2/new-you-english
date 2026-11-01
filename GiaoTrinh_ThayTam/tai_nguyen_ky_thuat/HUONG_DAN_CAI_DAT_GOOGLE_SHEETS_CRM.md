# HƯỚNG DẪN THIẾT LẬP GOOGLE SHEETS CRM VẬN HÀNH TỰ ĐỘNG
## HỆ THỐNG ĐIỀU HÀNH 0Đ DÀNH CHO GIÁO VIÊN & SOLOPRENEUR
### THẦY HUỲNH TRƯỜNG THANH TÂM (HYRTA) — NEW YOU TEACHER ACADEMY

---

> [!TIP]
> **Triết Lý Vận Hành 0đ Của Thầy Tâm:** Không cần chi trả hàng triệu đồng mỗi tháng cho các phần mềm CRM cồng kềnh. Toàn bộ quy trình tuyển sinh, thu tiền và chăm sóc học viên có thể vận hành trơn tru, bảo mật và hoàn toàn tự động 24/7 chỉ với **Google Sheets + Google Apps Script + SePay VietQR + Telegram Bot**.

---

## 1. CẤU TRÚC 4 SHEET CHUẨN TRONG FILE MASTER CRM

Tạo một bảng tính mới trên Google Drive đặt tên: `NEW_YOU_CRM_MASTER_2026` và tạo đúng 4 tab trang tính sau:

### Sheet 1: `DANG_KY_WEB` (Tiếp nhận Leads từ Website/Landing Page)
* **Mục đích:** Lưu trữ tất cả ứng viên điền Form khảo sát phân luồng hoặc để lại SĐT trên Web.
* **Tiêu đề cột (Hàng 1 - Nền màu xanh nhạt `#e0e7ff`):**
  - **Cột A:** `Thời Gian` (Timestamp)
  - **Cột B:** `Họ Và Tên`
  - **Cột C:** `Số Điện Thoại` (Định dạng Văn bản thuần để không mất số 0 đầu)
  - **Cột D:** `Email`
  - **Cột E:** `Phân Luồng Dự Kiến` (Track A: B1+ / Track B: A0-A2)
  - **Cột F:** `Nguồn` (Facebook Ads, TikTok, Giới thiệu, Website)
  - **Cột G:** `Ghi Chú`
  - **Cột H:** `Trạng Thái` (Mới tiếp nhận / Đang tư vấn / Đã hẹn Zoom Demo / Đã chốt)

### Sheet 2: `LICH_SU_THANH_TOAN` (Ghi nhận Giao dịch SePay Realtime)
* **Mục đích:** Tự động ghi lại từng lần biến động số dư tài khoản ngân hàng khi học viên quét mã VietQR.
* **Tiêu đề cột (Hàng 1 - Nền màu vàng cam nhạt `#fef3c7`):**
  - **Cột A:** `Thời Gian GD`
  - **Cột B:** `Mã Giao Dịch` (RefCode từ ngân hàng)
  - **Cột C:** `Ngân Hàng` (MBBank, VCB,...)
  - **Cột D:** `Số Tiền (VNĐ)` (Định dạng Số tài chính `1,000,000 đ`)
  - **Cột E:** `Nội Dung Chuyển Khoản` (Ví dụ: `COC NEWYOU 0912345678`)
  - **Cột F:** `Trạng Thái` (Thành công / Cần đối soát)

### Sheet 3: `DANH_SACH_LOP_TRACK_A` (Lớp Đào Tạo Nghề Giáo Viên Tiếng Anh 12 Tháng)
* **Tiêu đề cột (Hàng 1 - Nền màu xanh ngọc `#ccfbf1`):**
  - **Cột A:** `Mã Học Viên` (Ví dụ: `NYE-TA-01`)
  - **Cột B:** `Họ Và Tên`
  - **Cột C:** `Số Điện Thoại`
  - **Cột D:** `Học Phí Cam Kết` (48.000.000 đ)
  - **Cột E:** `Đã Thanh Toán`
  - **Cột F:** `Còn Lại` (Công thức `=D2-E2`)
  - **Cột G:** `Số Buổi Đã Học`
  - **Cột H:** `Tỷ Lệ Chuyên Cần` (Công thức `=G2/TỔNG_BUỔI`)
  - **Cột I:** `Điểm Thực Hành AI & Video` (Thang 100 - Thầy Tâm chấm)
  - **Cột J:** `Điểm Khẩu Hình & Sư Phạm` (Thang 100 - Cô My chấm)
  - **Cột K:** `Đánh Giá Tốt Nghiệp`

### Sheet 4: `DANH_SACH_LOP_TRACK_B` (Lớp Chuẩn Hóa Phát Âm Nền Tảng 3 Tháng)
* **Tiêu đề cột (Hàng 1 - Nền màu tím nhạt `#f3e8ff`):**
  - **Cột A:** `Mã Học Viên` (Ví dụ: `NYE-TB-01`)
  - **Cột B:** `Họ Và Tên`
  - **Cột C:** `Số Điện Thoại`
  - **Cột D:** `Tình Trạng Nộp BTVN Video` (Đạt / Chưa đạt)
  - **Cột E:** `Đánh Giá Khẩu Hình IPA (Cô My)`
  - **Cột F:** `Cố Vấn Kèm Cặp 1:1`

---

## 2. BỘ CÔNG THỨC GOOGLE SHEETS TỰ ĐỘNG HÓA (CHỈ CẦN COPY & PASTE)

### A. Tự động tính Tổng Doanh Thu từ SePay:
Đặt tại ô bất kỳ (ví dụ ô `K1` trong Sheet `LICH_SU_THANH_TOAN`):
```excel
=SUM(D2:D)
```

### B. Tự động đếm Tổng số đơn nổ thành công:
```excel
=COUNTIF(F2:F, "*Thành công*")
```

### C. Tự động trích xuất Học viên Track A từ bảng Đăng ký:
Đặt tại ô `A2` trong Sheet `DANH_SACH_LOP_TRACK_A`:
```excel
=QUERY(DANG_KY_WEB!A2:H, "SELECT B, C, D, E WHERE E CONTAINS 'Track A' ORDER BY A DESC", 0)
```

### D. Định dạng có điều kiện Cảnh báo Chuyên cần (Conditional Formatting):
* **Vùng áp dụng:** Cột `H2:H100` trong Sheet `DANH_SACH_LOP_TRACK_A`.
* **Quy tắc định dạng:** Bé hơn (Less than) `0.8` (tức $< 80\%$).
* **Màu sắc:** Nền màu đỏ nhạt `#fee2e2`, chữ màu đỏ đậm `#991b1b`.
* **Ý nghĩa:** Khi học viên vắng mặt quá 20% số buổi, hệ thống tự động bôi đỏ để trợ lý kích hoạt ngay **SOP-03 (Nhắc BTVN & Chăm sóc thấu cảm)**.

---

## 3. QUY TRÌNH 3 BƯỚC TRIỂN KHAI APPS SCRIPT VÀO GOOGLE SHEETS

1. **Bước 1: Mở Trình biên tập Apps Script:**
   - Trên thanh menu của Google Sheets: Chọn **Tiện ích mở rộng (Extensions)** $\rightarrow$ **Apps Script**.
   - Xóa bỏ đoạn mã mặc định `myFunction()`.
   - Mở file mã nguồn: [`Code_Google_Apps_Script_Webhook_SePay_Telegram.gs`](file:///D:/Hyrta-One/cmubeta2/My%20Drive/SHIN/He%20sinh%20thai%20Shin/GiaoTrinh_ThayTam/tai_nguyen_ky_thuat/Code_Google_Apps_Script_Webhook_SePay_Telegram.gs).
   - Sao chép toàn bộ nội dung và dán vào cửa sổ Apps Script.

2. **Bước 2: Cấu hình Telegram Token:**
   - Thay thế `YOUR_TELEGRAM_BOT_TOKEN_HERE` bằng Token nhận từ `@BotFather`.
   - Thay thế `YOUR_TELEGRAM_CHAT_ID_HERE` bằng ID nhóm Telegram tiếp nhận thông báo.
   - Nhấn nút **Lưu (Save)**.
   - Chạy thử hàm `testSendTelegram` để xác nhận bot đã gửi tin nhắn thành công vào nhóm Telegram.

3. **Bước 3: Triển khai Ứng Dụng Web (Web App):**
   - Nhấn nút xanh **Triển khai (Deploy)** ở góc trên bên phải $\rightarrow$ Chọn **Tùy chọn triển khai mới (New deployment)**.
   - Loại triển khai: Chọn biểu tượng bánh răng $\rightarrow$ **Ứng dụng web (Web app)**.
   - Cấu hình:
     * *Mô tả:* `New You Webhook Gateway v1.7.7`
     * *Thực thi dưới quyền (Execute as):* **Tôi (Me)**
     * *Ai có quyền truy cập (Who has access):* **Bất kỳ ai (Anyone)** *(Quan trọng: Phải chọn Anyone để SePay và Landing page có thể gửi dữ liệu vào mà không bị chặn quyền).*
   - Nhấn **Triển khai (Deploy)** $\rightarrow$ Cấp quyền truy cập Google Account khi được hỏi.
   - Sao chép **URL Ứng dụng web (Web App URL)** kết thúc bằng `/exec`.

---

## 4. KẾT NỐI VÀO CỔNG SEPAY (TRONG 60 GIÂY)

1. Đăng nhập vào trang quản trị [https://my.sepay.vn/](https://my.sepay.vn/).
2. Vào mục **Tích hợp Webhook** $\rightarrow$ Nhấn **Thêm Webhook mới**.
3. Dán **URL Web App** vừa sao chép ở Bước 3 vào ô **Webhook URL**.
4. Chọn sự kiện: **Tất cả giao dịch biến động số dư (Ghi có / Tiền vào)**.
5. Nhấn **Lưu cấu hình**.
6. **Kiểm tra thực tế:** Chuyển thử 10.000 VNĐ vào tài khoản ngân hàng với cú pháp `COC NEWYOU TEST`. Trong vòng 2 giây, Telegram Bot sẽ nổ thông báo và Google Sheets sẽ tự động xuất hiện dòng giao dịch mới!

---

*Tài liệu kỹ thuật được xây dựng bởi Shin theo kiến trúc vận hành của Thầy Huỳnh Trường Thanh Tâm.*
