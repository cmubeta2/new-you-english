# NEW YOU TEACHER ACADEMY — HỆ THỐNG ĐÀO TẠO & ĐIỀU HÀNH 12 THÁNG
## TRUNG TÂM TÀI LIỆU TOÀN DỰ ÁN (PHIÊN BẢN v1.8.0)

---

> [!NOTE]
> Đây là thư mục lưu trữ toàn diện tất cả các tài liệu chiến lược, giáo trình huấn luyện, bộ quà tặng độc bản, và mã nguồn tự động hóa của dự án **New You Teacher Academy**.
>
> 📌 **Hai tài liệu điều hành quan trọng nhất:**
> 1. [BẢN KẾ HOẠCH TỔNG THỂ TOÀN DỰ ÁN](./KE_HOACH_TONG_THE_NEW_YOU_ENGLISH_ACADEMY.md): Nắm trọn bức tranh kiến trúc, ranh giới sư phạm, lộ trình triển khai và hệ sinh thái tự động hóa.
> 2. [BẢN KIỂM TOÁN TÀI NGUYÊN & KẾ HOẠCH BỔ SUNG NỘI DUNG](./KE_HOACH_KIEM_TOAN_VA_BO_SUNG_NOI_DUNG.md): Kết quả rà soát chi tiết từng trang .md và kế hoạch hành động 5 gói công việc để lấp đầy 100% nội dung toàn văn.

---

## 1. CẤU TRÚC CÁC THƯ MỤC TRONG DỰ ÁN

```
D:\Hyrta-One\cmubeta2\My Drive\SHIN\New You English Academy\
├── KE_HOACH_TONG_THE_NEW_YOU_ENGLISH_ACADEMY.md # BẢN KẾ HOẠCH TỔNG THỂ TOÀN BỘ DỰ ÁN
├── KE_HOACH_KIEM_TOAN_VA_BO_SUNG_NOI_DUNG.md    # BẢN KIỂM TOÁN & KẾ HOẠCH BỔ SUNG 100% NỘI DUNG
├── README.md                                    # File hướng dẫn điều hành trung tâm
├── CHANGELOG.md                                 # Nhật ký thay đổi từ v1.7.0 đến v1.8.0
├── UPDATE.md                                    # Kế hoạch nâng cấp và các phiên bản tiếp theo
├── GIAO_TRINH_AI_VIDEO_SALES_THAY_TAM.md        # Bản hợp nhất toàn bộ giáo trình Thầy Tâm
├── BO_QUA_TANG_TRUYEN_NGHE_NEW_YOU.md           # Bản hợp nhất toàn bộ 9 quà tặng độc bản
│
├── 01_KhungChuongTrinh_Goc/                     # Tài liệu khung chương trình & góp ý ban đầu
│   └── 31-10-26-KHUNG_CHUONG_TRINH_TRUYEN_NGHE_DAO_TAO_CHINH_THUC.md
│
├── 02_GiaoTrinh_ThayTam/                        # Giáo trình thực chiến phân rã thành từng học phần
│   ├── 00_CHI_MUC_TONG_QUAN.md                  # Chỉ mục tổng quan, kiềng 3 chân, roadmap
│   ├── 00_HUONG_DAN_BAN_GIAO_HOC_THUAT_CO_MY.md # Hướng dẫn bàn giao & ma trận slot chuyên môn
│   ├── 00_PHIEU_DUYET_HOC_THUAT_MAU_CO_MY.md    # Phiếu duyệt học thuật mẫu cho Cô My (DoD)
│   ├── 01_HOC_PHAN_1_CONG_NGHE_AI.md            # AI, Mega Prompting, Slide tương tác, Custom GPTs
│   ├── 02_HOC_PHAN_2_VIDEO_NGAN_TRIEU_VIEW.md   # Video ngắn bắt trend, Hook 3s, CapCut, 20 video
│   ├── 03_HOC_PHAN_3_PHEU_TUYEN_SINH_VA_TU_DONG_HOA.md # Phễu bán hàng, Zalo 5 bước, Demo 45p, SePay
│   ├── 04_RUBRIC_DANH_GIA_VA_PHU_LUC.md         # Rubric 100 điểm & 10 câu bẻ gãy từ chối
│   └── tai_nguyen_ky_thuat/                     # Bộ tài nguyên kỹ thuật tự động hóa CRM 0đ
│       ├── Code_Google_Apps_Script_Webhook_SePay_Telegram.gs # Mã nguồn Router 3 luồng
│       └── HUONG_DAN_CAI_DAT_GOOGLE_SHEETS_CRM.md # Cẩm nang cài đặt 5 Sheet CRM
│
└── 03_BoQuaTang_NewYou/                         # Bộ 9 quà tặng độc bản trị giá 42tr (tặng 0đ)
    ├── 00_CHI_MUC_BO_QUA_TANG.md                # Chỉ mục bộ quà tặng, định giá, cách nhận
    ├── QUA_01_52_VIDEO_MASTER_IPA.md            # 52 Video Master phát âm IPA Cô My (3.5tr)
    ├── QUA_02_SACH_VA_EBOOK_NEW_YOU.md          # Sách in mạ vàng có chữ ký & Ebook (500k)
    ├── QUA_03_THU_VIEN_100_MEGA_PROMPTS_AI.md   # Thư viện 100+ Mega Prompts AI (5tr)
    ├── QUA_04_CHATBOT_AI_TRO_GIANG_CUSTOM_GPTS.md # Bot AI trợ giảng riêng 24/7 (8tr)
    ├── QUA_05_KHO_30_KICH_BAN_VIDEO_TRIEU_VIEW.md # Toàn văn 30 kịch bản video 5 trụ cột (6tr)
    ├── QUA_06_BO_SALES_SCRIPTS_ZALO_VA_ZOOM_DEMO.md # Sales Scripts Zalo & 15 Slide Demo Zoom (7tr)
    ├── QUA_07_BAN_QUYEN_SOP_VAN_HANH_60_LOP.md  # 6 Bộ SOP vận hành lớp học chuẩn mực (10tr)
    ├── QUA_08_THE_HOI_VIEN_TRON_DOI_LOE_CLUB.md # Thẻ số hóa & đặc quyền CLB LOÉ (2tr)
    ├── QUA_09_LEAD_MAGNET_STUDIO_KIT.md         # Ebook đổi tên tác giả, Flashcards, Form khảo sát (5tr)
    └── LICH_TRINH_SAN_XUAT_VA_MO_KHOA.md        # Lộ trình mở khóa quà tặng 12 tháng
```

---

## 2. BAN GIẢNG HUẤN KIỀNG 3 CHÂN
1. **Cô Sophie Diễm My:** Giám đốc Học thuật, Founder New You English, Cử nhân Giỏi NNA ĐH Sài Gòn, NVSP Cambridge TKT, 8+ năm kinh nghiệm quản lý 60+ lớp học. Toàn quyền độc quyền chuyên môn tiếng Anh & ngữ âm 44 âm IPA.
2. **Thầy Huỳnh Trường Thanh Tâm (Hyrta / Sếp):** Kiến trúc sư Hệ thống & Tăng trưởng Số, Chuyên gia AI thực chiến, Kỹ thuật Video Giữ chân (Retention Rate), Phễu Tuyển sinh Zalo & Tự động hóa Vận hành 0đ (VietQR SePay + Telegram Bot + Google Sheets CRM).
3. **Bạn Trí Nguyễn:** Project Manager & Chuyên gia Giám sát Chuẩn đầu ra (QA), điều phối học vụ, kiểm tra tiêu chí nghiệm thu (DoD).

---

## 3. HẠ TẦNG KỸ THUẬT & TRANG ĐÍCH (LIVE PRODUCTION)
* **Trang chủ Tuyển Sinh (SEO Onpage & Schema.org Course):** [https://cmubeta2.github.io/new-you-english/](https://cmubeta2.github.io/new-you-english/)
* **Cổng Đặt Cọc VietQR Động:** [https://cmubeta2.github.io/new-you-english/vip/](https://cmubeta2.github.io/new-you-english/vip/)
* **Cổng Khảo Sát Phỏng Vấn 1-1:** [https://cmubeta2.github.io/new-you-english/xac-nhan/](https://cmubeta2.github.io/new-you-english/xac-nhan/)
* **Cổng Vào Phòng Học Trực Tuyến:** [https://cmubeta2.github.io/new-you-english/vao/](https://cmubeta2.github.io/new-you-english/vao/)

---

*Hệ thống được vận hành và bảo trì tự động định kỳ bởi Shin.*
