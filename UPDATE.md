# KẾ HOẠCH NÂNG CẤP PHIÊN BẢN (UPDATE.MD) — WEB NEW YOU ENGLISH

Kế hoạch phát triển và hoàn thiện kỹ thuật cho hệ thống Website Phễu Lặn Biển New You English.

---

## 1. PHIÊN BẢN HIỆN TẠI: v1.3.1 (Đã triển khai Web thực)
- Đã đẩy lên mạng thực tế (Production) qua GitHub Pages: `https://cmubeta2.github.io/new-you-english/`
- Hoàn thành đầy đủ 11 tầng lặn biển với 6 Module chuẩn 1 năm.
- Cập nhật chính xác bảng học phí: 68tr (Tiêu chuẩn kèm Module 6) - 108tr (Chuyên nghiệp) - 139tr (VIP).
- Cọc cam kết giữ chỗ: 1 tháng học phí (9.000.000đ cho gói Chuyên nghiệp).
- Tạo bài toán hoàn vốn ROI 7.2 tháng dựa trên mức lương cam kết 15.000.000đ/tháng.

---

## 2. KẾ HOẠCH PHIÊN BẢN TIẾP THEO

### Phiên Bản v1.4.0: Tự Động Hóa Chốt Cọc & Thông Báo Đơn Hàng (Deliver Agent)
- [ ] **Tích hợp Webhook SePay:**
  - Kết nối số tài khoản ngân hàng chính thức của New You với SePay.
  - Tự động nhận diện cú pháp chuyển khoản cọc (ví dụ: `COC NEWYOU [Số điện thoại]`).
- [ ] **Bot Telegram Nổ Đơn Tức Thì:**
  - Thiết lập Bot Telegram bắn thông báo ngay khi có học viên chuyển khoản cọc thành công kèm số tiền, tên học viên và gói đăng ký.
- [ ] **Màn hình xác nhận thanh toán Realtime:**
  - Tích hợp Polling/WebSocket trên trang `/vip/` để hiển thị dấu tích xanh "Đã nhận tiền thành công" ngay khi giao dịch hoàn tất.

### Phiên Bản v1.5.0: Kết Nối Hạ Tầng Dữ Liệu Tuyển Sinh (Google Sheets & CRM)
- [ ] Triển khai Google Apps Script chính thức thay cho mã `DEMO`.
- [ ] Lưu trữ và phân loại học viên theo phễu tự động vào Google Sheets:
  - Cột Họ tên, Số điện thoại, Email, Kinh nghiệm hiện tại, Mục tiêu thu nhập, Trạng thái cọc (Chưa cọc / Đã cọc).
- [ ] Gửi email tự động xác nhận lịch phỏng vấn và gửi kèm tài liệu chuẩn bị.

### Phiên Bản v1.6.0: Tối Ưu Hóa Trải Nghiệm & Chuyển Đổi Nâng Cao
- [ ] Thay thế các hình ảnh minh họa chân dung giảng viên thật của Cô Diễm My và đội ngũ New You.
- [ ] Thêm video ngắn nhúng trực tiếp (Shorts/Reels) chia sẻ từ học viên cũ đã đạt mức lương 15tr-25tr/tháng.
- [ ] Cấu hình SEO On-page: OpenGraph metadata, Schema Structured Data cho khóa học đào tạo nghề.
