# KẾ HOẠCH NÂNG CẤP & PHIÊN BẢN TIẾP THEO (UPDATE.md)

---

## 1. PHIÊN BẢN HIỆN TẠI: v1.7.3 (Hoàn thành - 01/11/2026)
- **Kiến Trúc Hóa & Phân Rã Module Độc Lập:**
  * Phân rã Giáo trình Thầy Tâm thành thư mục `GiaoTrinh_ThayTam/` gồm 5 file `.md` độc lập, có file chỉ mục `00_CHI_MUC_TONG_QUAN.md`.
  * Phân rã Bộ Quà Tặng thành thư mục `BoQuaTang_NewYou/` gồm 11 file `.md` độc lập, có file chỉ mục `00_CHI_MUC_BO_QUA_TANG.md`.
  * Giải quyết triệt để vấn đề dồn quá nhiều nội dung vào 1 file, giúp học viên tra cứu nhanh, dễ bảo trì và phân quyền truy cập.
- **Hoàn thành các phiên bản trước:**
  * v1.7.2: Hoàn thiện chi tiết giáo trình Thầy Tâm, lồng ghép nội dung sư phạm và lịch trình mở khóa bộ quà tặng.
  * v1.7.1: Ban hành toàn văn Kho tài nguyên Bộ 8 Quà tặng độc bản 42 triệu.
  * v1.7.0: Khởi tạo Giáo trình Huấn luyện Thực chiến Thầy Tâm.
  * v1.6.0: Tích hợp Bộ khung học thuật Mr Trí Nguyễn, Kiềng 3 chân, Dual-Track Protocol, Lưới bảo trợ hoàn vốn 40-60tr.

---

## 2. KẾ HOẠCH PHIÊN BẢN TIẾP THEO: v1.8.0
- **Số hóa & Triển khai Hệ thống Tự Động Hóa Thực Tế:**
  * Triển khai endpoint Webhook SePay Node.js lên server Cloud/Vercel Serverless Function.
  * Kết nối trực tiếp Bot Telegram nhận thông báo nổ đơn theo mã đơn hàng `NYE_HV...`.
  * Thiết lập mẫu Google Sheets CRM tự động phân luồng ứng viên Track A / Track B từ Form khảo sát.
- **Biên tập Giáo trình Thực hành của Cô Sophie Diễm My (Phần Sư phạm & Ngữ âm):**
  * Đồng bộ giáo trình 52 video IPA Master và 100 câu NYE Classroom English.
