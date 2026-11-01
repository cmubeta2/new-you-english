# QUÀ TẶNG #07: BẢN QUYỀN TOÀN DIỆN BỘ SOP VẬN HÀNH 60+ LỚP HỌC ONLINE
## HỆ THỐNG QUY TRÌNH CHUẨN ĐÚC KẾT QUA 1.000+ HỌC VIÊN TỐT NGHIỆP
### THIẾT KẾ HỆ THỐNG: THẦY HUỲNH TRƯỜNG THANH TÂM
### ĐẢM BẢO CHẤT LƯỢNG (QA): BẠN TRÍ NGUYỄN
### ĐỊNH GIÁ NIÊM YẾT: 10.000.000 VNĐ (TẶNG MIỄN PHÍ 0Đ BATCH 1)

---

* [Quay lại Chỉ Mục Bộ Quà Tặng](./00_CHI_MUC_BO_QUA_TANG.md)

> [!NOTE]
> Bộ SOP này là "xương sống vận hành" giúp một người giáo viên tự do (Solopreneur Educator) có thể quản trị đồng thời từ 3 đến 5 lớp học (30 - 50 học sinh) một cách trơn tru, không bỏ sót học viên, giữ tỷ lệ chuyên cần $\ge 95\%$ và tỷ lệ tái tục/giới thiệu học viên mới $\ge 40\%$.

---

## MỤC LỤC 6 BỘ QUY TRÌNH CHUẨN (SOP):
* [SOP-01: File Master Google Sheets Quản Lý Lớp Học Đa Năng](#sop-01-file-master-google-sheets-quản-lý-lớp-học-đa-năng)
* [SOP-02: Quy Trình Đón Tiếp Học Viên Mới & Thư Chào Mừng (Welcome Kit)](#sop-02-quy-trình-đón-tiếp-học-viên-mới--thư-chào-mừng-welcome-kit)
* [SOP-03: Kịch Bản Chăm Sóc & Nhắc Nhở Học Viên Nghỉ Học / Trễ Hạn BTVN](#sop-03-kịch-bản-chăm-sóc--nhắc-nhở-học-viên-nghỉ-học--trễ-hạn-btvn)
* [SOP-04: Mẫu Báo Cáo Kết Quả Học Tập Định Kỳ Hàng Tháng](#sop-04-mẫu-báo-cáo-kết-quả-học-tập-định-kỳ-hàng-tháng)
* [SOP-05: Quy Trình Tổ Chức Thi Định Kỳ & Mini-Graduation Trên Zoom](#sop-05-quy-trình-tổ-chức-thi-định-kỳ--mini-graduation-trên-zoom)
* [SOP-06: Kịch Bản Xin Lời Đánh Giá (Testimonials) & Giới Thiệu Tự Nhiên](#sop-06-kịch-bản-xin-lời-đánh-giá-testimonials--giới-thiệu-tự-nhiên)

---

## SOP-01: FILE MASTER GOOGLE SHEETS QUẢN LÝ LỚP HỌC ĐA NĂNG

### Cấu Trúc Bảng Tính Gồm 4 Tab Tiêu Chuẩn:
1. **Tab 1: `DANH_SACH_LOP` (Thông Tin Cốt Lõi)**
   - Cột: STT | Mã Học Viên (HV01, HV02...) | Họ và Tên | Số Điện Thoại / Zalo | Email | Ngày Bắt Đầu | Gói Học Phí (3-6-12 tháng) | Số Tiền Đã Đóng | Tình Trạng Học Phí (Đủ / Cọc / Trả góp) | Ghi Chú Tính Cách.
2. **Tab 2: `DIEM_DANH_CHUYEN_CAN`**
   - Cột tương ứng từng buổi học (Buổi 1 đến Buổi 24).
   - Ký hiệu chuẩn hóa: `P` (Present - Có mặt), `A` (Absent - Nghỉ không phép), `E` (Excused - Nghỉ có phép), `L` (Late - Vào muộn > 15p).
   - Cột tự động tính công thức: Tỷ lệ chuyên cần = `COUNTIF(P)/TỔNG BUỔI * 100%`. Tự động bôi đỏ nếu chuyên cần $< 80\%$.
3. **Tab 3: `THEO_DOI_BTVN_VIDEO`**
   - Cột theo dõi từng tuần: Nộp đúng hạn (10 điểm), Nộp muộn (7 điểm), Chưa nộp (0 điểm).
   - Link video nộp bài (Google Drive / Zalo).
   - Đánh giá của Trợ giảng / Giáo viên: Phát âm (Thang 1-5) | Phản xạ (Thang 1-5) | Nhận xét chi tiết.
4. **Tab 4: `DASHBOARD_TIEN_DO`**
   - Biểu đồ thanh tự động thể hiện tiến độ hoàn thành khóa học của từng học sinh.

---

## SOP-02: QUY TRÌNH ĐÓN TIẾP HỌC VIÊN MỚI & THƯ CHÀO MỪNG (WELCOME KIT)

### Quy Trình 3 Bước Trong 24 Giờ Sau Khi Đóng Học Phí:
1. **Bước 1 (15 phút sau khi chuyển khoản):** Bắn tin nhắn xác nhận nhận tiền tự động kèm Mã học viên và Thư chào mừng.
2. **Bước 2 (Trong 4 giờ):** Thêm học viên vào Nhóm Zalo lớp học; phân quyền truy cập Thư mục tài liệu Google Drive và Bot AI.
3. **Bước 3 (Trong 24 giờ):** Gọi điện thoại 5 phút "Welcome Call" phá băng, dặn dò lịch học và hướng dẫn cài đặt Zoom.

### Mẫu Thư Chào Mừng (Welcome Letter) Gửi Zalo/Email:
```text
🎉 CHÀO MỪNG [TÊN HỌC VIÊN] CHÍNH THỨC GIA NHẬP ĐẠI GIA ĐÌNH NEW YOU ENGLISH! 🎉

Thầy/Cô rất vui và tự hào vì em đã quyết định đầu tư cho bản thân để bứt phá năng lực tiếng Anh trong lộ trình sắp tới.

📌 THÔNG TIN LỚP HỌC CỦA EM:
- Lớp học: [Tên Lớp, ví dụ: K01 - Bứt Phá Giao Tiếp]
- Lịch học: Tối Thứ 3 & Thứ 5 hàng tuần (20h00 - 21h30)
- Link phòng Zoom cố định: [Link Zoom của Giáo Viên] (Passcode: 123456)
- Giáo viên chủ nhiệm: [Tên Thầy/Cô] - Hotline hỗ trợ: [Số điện thoại]

🎁 HỌC LIỆU SỐ DÀNH RIÊNG CHO EM:
1. Thư mục Drive tài liệu & bài tập: [Link Drive VIP]
2. Trợ lý AI sửa bài phát âm 24/7 của lớp: [Link Custom GPTs]
3. Link tham gia nhóm Zalo nội bộ lớp: [Link Zalo Group]

Hẹn gặp em trong buổi khai giảng đầu tiên vào lúc 20h00 tối [Ngày/Tháng]. Hãy chuẩn bị một cuốn sổ tay, một chiếc tai nghe và tinh thần năng lượng nhất nhé!
```

---

## SOP-03: KỊCH BẢN CHĂM SÓC & NHẮC NHỞ HỌC VIÊN NGHỈ HỌC / TRỄ HẠN BTVN

### Nguyên Tắc Bất Biến: "Thấu Cảm Trước, Kỷ Luật Sau"
Tuyệt đối không dùng lời lẽ trách móc, phê bình gay gắt làm học viên sợ hãi hoặc xấu hổ bỏ học.

#### Tình Huống 1: Học Viên Vắng Mặt 1 Buổi Không Báo Trước
* **Thời điểm gửi:** Sáng hôm sau trước 10h00.
* **Mẫu tin nhắn:**
  > *"Chào [Tên Học Viên] ơi! Tối qua trong lớp không thấy em tham gia, Thầy/Cô và các bạn đều nhắc và lo cho em. Hôm qua công việc của em có phát sinh đột xuất hay sức khỏe có vấn đề gì không em?  
  > Thầy/Cô đã lưu lại bản ghi hình (Record) buổi học tối qua tại link này: [Link Record]. Em nhớ dành thời gian xem lại để không bị hổng kiến thức phần bẻ khớp âm nhé. Cần Thầy/Cô hỗ trợ giải đáp phần nào cứ nhắn thầy/cô ngay nhé!"*

#### Tình Huống 2: Học Viên Trễ Hạn Nộp Video BTVN 2 Ngày Liên Tiếp
* **Mẫu tin nhắn thấu cảm:**
  > *"Em ơi, Thầy/Cô biết giai đoạn này công việc đi làm cuối năm rất áp lực và mệt mỏi. Nhưng lộ trình phát âm của mình đang đi vào giai đoạn then chốt nhất, nếu dừng lại 1 tuần là cơ miệng sẽ bị cứng lại như cũ.  
  > Em không cần quay video cầu kỳ đâu, tối nay trước khi đi ngủ chỉ cần bật điện thoại đọc đúng 3 câu ngắn trong 30 giây gửi qua đây là đạt yêu cầu rồi. Cố gắng một chút vì mục tiêu của mình nhé!"*

---

## SOP-04: MẪU BÁO CÁO KẾT QUẢ HỌC TẬP ĐỊNH KỲ HÀNG THÁNG

### Định Dạng Báo Cáo Gửi Phụ Huynh / Học Viên Đi Làm (Ảnh Infographic / PDF 1 Trang):
* **Phần 1 — Chỉ số Kỷ luật:**
  - Tỷ lệ chuyên cần: `.../8 buổi (100%)`
  - Tỷ lệ hoàn thành BTVN: `.../8 bài nộp đúng hạn`
* **Phần 2 — Đánh giá Năng lực Thực tế:**
  - Ngữ âm & Phát âm: `Tiến bộ vượt bậc ở âm đuôi /s/, /t/, /d/. Đã loại bỏ hoàn toàn thói quen nuốt âm.`
  - Độ trôi chảy & Phản xạ: `Thời gian ngập ngừng khi trả lời câu hỏi giảm từ 7 giây xuống còn 2 giây.`
* **Phần 3 — Lời Nhắn Nhủ Cá Nhân Của Giáo Viên:**
  - Một điểm khen ngợi cụ thể và một mục tiêu cần chinh phục trong tháng tới.

---

## SOP-05: QUY TRÌNH TỔ CHỨC THI ĐỊNH KỲ & MINI-GRADUATION TRÊN ZOOM

### Kịch Bản Lễ Tốt Nghiệp Khóa Học (45 Phút Đầy Cảm Xúc):
1. **Phút 00 - 10:** Video tổng kết hành trình (Before & After): Chiếu lại clip ngày đầu tiên học viên nói ngọng líu ngọng lô so sánh với clip hiện tại nói trôi chảy.
2. **Phút 10 - 25:** Phần thi thử thách trực tiếp: Mỗi học viên bốc thăm 1 chủ đề nói trong 60 giây trước toàn thể lớp.
3. **Phút 25 - 35:** Trao Chứng nhận Tốt nghiệp Số Hóa (Digital Certificate) và vinh danh Học viên Xuất sắc nhất (Thưởng Thẻ LOÉ Club).
4. **Phút 35 - 45:** Chia sẻ cảm nghĩ của học viên & Giới thiệu Lộ trình Nâng cao tiếp theo (Upsell tự nhiên).

---

## SOP-06: KỊCH BẢN XIN LỜI ĐÁNH GIÁ (TESTIMONIALS) & GIỚI THIỆU TỰ NHIÊN

### Thời Điểm Vàng Để Xin Feedback:
Ngay sau buổi học có khoảnh khắc "Aha Moment" hoặc ngay sau Lễ bế giảng khi cảm xúc học viên đang thăng hoa nhất!

### Kịch Bản Nhắn Tin Xin Feedback Tự Nhiên:
> *"Em ơi, hôm nay xem lại clip tiến bộ của em từ buổi 1 đến giờ Thầy/Cô thực sự xúc động! Từ một người rất ngại mở mic, giờ em đã tự tin bắn tiếng Anh trôi chảy thế này là cả một nỗ lực phi thường.  
> Thầy/Cô đang làm một cuốn Kỷ yếu chia sẻ hành trình vượt qua nỗi sợ tiếng Anh của các bạn học trò để truyền cảm hứng cho những bạn đang mất gốc ngoài kia. Em có thể dành 2 phút viết vài dòng cảm nhận chân thực nhất về phương pháp học và sự đồng hành của lớp mình được không? Vài dòng chia sẻ của em sẽ tiếp thêm dũng khí cho rất nhiều bạn đấy!"*

---

*Toàn bộ 6 SOP trên đã được số hóa sẵn sàng trong Hệ sinh thái New You English.*
