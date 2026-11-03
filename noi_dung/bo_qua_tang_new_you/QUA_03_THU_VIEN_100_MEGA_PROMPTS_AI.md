# QUÀ TẶNG #03: THƯ VIỆN 100+ MEGA PROMPTS AI CHUYÊN SÂU DẠY HỌC (FULL 100 PROMPTS)
## TÁC GIẢ & BIÊN SOẠN HỆ THỐNG: THẦY HUỲNH TRƯỜNG THANH TÂM
### ĐỊNH GIÁ NIÊM YẾT: 5.000.000 VNĐ (TẶNG MIỄN PHÍ 0Đ TRONG GÓI TRUYỀN NGHỀ)

---

* [Quay lại Chỉ Mục Bộ Quà Tặng](./00_CHI_MUC_BO_QUA_TANG.md)
* **Hình thức bàn giao:** Workspace Notion Database bản quyền + File Markdown Toàn Văn (Copy-Paste chạy ngay trên ChatGPT, Claude, Gemini).
* **Thời điểm mở khóa:** Bài 2 — Mô-đun Công Nghệ AI (Tháng thứ 2).
* **Nguyên tắc Ranh giới Chuyên môn:** Toàn bộ 100 câu lệnh AI dưới đây được **Thầy Huỳnh Trường Thanh Tâm** thiết kế theo chuẩn **Khung Prompt C.R.E.F.O** (Context – Role – Explicit Task – Format – Output Constraints). Phần kiến thức tiếng Anh bên trong ngoặc vuông `[CHỦ ĐỀ / CẤU TRÚC / TỪ VỰNG CÔ MY DUYỆT]` là biến số đầu vào lấy từ giáo trình chuẩn của **Cô Sophie Diễm My**.

---

## 1. SƠ ĐỒ KIẾN TRÚC 5 NHÓM 100 MEGA PROMPTS SƯ PHẠM THỰC CHIẾN

```
┌──────────────────────────────────────────────────────────────────────────────┐
│           THƯ VIỆN 100 MEGA PROMPTS AI CHO GIÁO VIÊN NEW YOU ENGLISH         │
├──────────────────────────────────────────────────────────────────────────────┤
│ NHÓM 1 (P01 - P20): Thiết kế Kế hoạch Bài dạy (Lesson Plans: PPP/TTT/TBL/ESA)│
│ NHÓM 2 (P21 - P45): Sản xuất Ngữ liệu Đọc - Nghe - Hội thoại Chuẩn CEFR A1-C1│
│ NHÓM 3 (P46 - P65): Tạo Ngân hàng Bài tập, Đề kiểm tra & Chữa lỗi Ngữ pháp   │
│ NHÓM 4 (P66 - P85): Câu hỏi Bẫy tư duy CCQs, ICQs, Games & Role-play         │
│ NHÓM 5 (P86 - P100): Tự động hóa Slide Gamma, Quizizz, Anki & Quản lý Lớp    │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Quy Tắc Vàng Khi Sử Dụng Thư Viện 100 Prompts:
1. **Bước 1 — Khởi tạo Hệ thống (System Context):** Dán **Khung Thiết Lập Vai Trò Chung** bên dưới vào đầu cuộc trò chuyện với AI.
2. **Bước 2 — Chọn Mã Lệnh (`P01` -> `P100`):** Copy câu lệnh tương ứng, thay thế phần trong ngoặc vuông `[...]` bằng bài học thực tế của lớp và bấm Enter.

```markdown
# KHUNG THIẾT LẬP VAI TRÒ CHUNG (DÁN ĐẦU PHIÊN CHAT VỚI AI)
Bạn là Chuyên gia Thiết kế Học liệu & Sư phạm Tiếng Anh Quốc tế (CELTA/TESOL Master Trainer) làm việc tại Học viện New You English Academy. 
Nguyên tắc bất di bất dịch:
1. Mọi nội dung tiếng Anh xuất ra phải tự nhiên (idiomatic), chuẩn xác theo khung tham chiếu châu Âu CEFR mà tôi yêu cầu.
2. Giải thích cho học viên Việt Nam phải ngắn gọn, trực diện, theo phương pháp Quy nạp (Inductive: đưa ngữ cảnh/ví dụ trước -> rút ra quy tắc sau).
3. Luôn trình bày kết quả dưới dạng Bảng Markdown hoặc Danh sách phân tầng rõ ràng để tôi copy vào giáo án ngay.
```

---

## NHÓM 1: THIẾT KẾ KẾ HOẠCH BÀI DẠY CHUẨN QUỐC TẾ — LESSON PLANS (P01 – P20)

*(Mọi thông số `[CHỦ ĐỀ / CẤU TRÚC / TỪ VỰNG]` đều sử dụng danh mục học thuật đã được Cô Sophie Diễm My phê duyệt).*

### 1.1. Ba Prompt Mẫu Toàn Văn Chuẩn C.R.E.F.O (Full Template)

#### [P01] Thiết kế Giáo án 90 Phút theo Mô hình PPP (Presentation – Practice – Production)
```text
[CONTEXT]: Tôi đang dạy lớp tiếng Anh giao tiếp trình độ [CEFR A1/A2/B1] cho đối tượng [Người đi làm / Sinh viên], sĩ số [10-15] học viên qua Zoom.
[ROLE]: Đóng vai Chuyên gia Huấn luyện Giáo viên CELTA.
[TASK]: Thiết kế giáo án chi tiết 90 phút theo mô hình PPP cho bài học: [SLOT CHUYÊN MÔN - ĐIỀN CHỦ ĐỀ/CẤU TRÚC CÔ MY DUYỆT].
[FORMAT]: Trình bày thành Bảng 5 cột: (1) Giai đoạn & Thời lượng (Warm-up 10p, Presentation 20p, Controlled Practice 20p, Freer Practice/Production 30p, Wrap-up 10p) | (2) Mục tiêu từng bước | (3) Hoạt động của Giáo viên (Lời dẫn mẫu) | (4) Hoạt động của Học viên | (5) Phân bổ thời gian nói (TTT vs STT - đảm bảo STT >= 70% ở phần Production).
[CONSTRAINTS]: Tuyệt đối không giảng lý thuyết chay quá 10 phút liên tục; phải lồng ghép ví dụ thực tế trước khi chốt công thức.
```

#### [P02] Thiết kế Giáo án Ngữ pháp Quy nạp theo Mô hình TTT (Test – Teach – Test)
```text
[CONTEXT]: Học viên của tôi đã biết sơ qua về [SLOT CHUYÊN MÔN - ĐIỀN CHỦ ĐỀ NGỮ PHÁP CÔ MY DUYỆT] nhưng luôn dùng sai khi nói thực tế.
[ROLE]: Chuyên gia Sư phạm Ngữ pháp Quy nạp (Inductive Grammar Specialist).
[TASK]: Thiết kế bài dạy 60 phút theo mô hình TTT (Test 1 -> Teach -> Test 2):
1. Test 1 (15p - Chẩn đoán): 1 hoạt động tình huống để học viên tự bộc lộ lỗi sai thường gặp mà không biết mình đang bị kiểm tra.
2. Teach (15p - Khắc phục trọng tâm): Chỉ dạy đúng điểm học viên vừa vấp bằng bảng đối chiếu Câu Sai vs Câu Đúng và câu hỏi gợi mở quy nạp.
3. Test 2 (30p - Thực hành mở rộng): Hoạt động giao tiếp áp dụng ngay cấu trúc vừa sửa vào bối cảnh đời sống.
```

#### [P03] Thiết kế Giáo án Dạy qua Nhiệm vụ Thực tế — TBL (Task-Based Learning)
```text
[CONTEXT]: Lớp học tiếng Anh thực chiến trình độ [CEFR A2/B1] cần rèn phản xạ giải quyết vấn đề.
[TASK]: Thiết kế bài dạy 75 phút theo phương pháp Task-Based Learning (Pre-task -> Task Cycle -> Language Focus) cho nhiệm vụ: [SLOT CHUYÊN MÔN - ĐIỀN NHIỆM VỤ GIAO TIẾP CÔ MY DUYỆT, VD: Lên kế hoạch chuyến công tác / Giải quyết khiếu nại khách hàng].
[FORMAT]: Chi tiết từng bước chuẩn bị từ vựng, chia nhóm Breakout Rooms trên Zoom, tiêu chí báo cáo kết quả của từng nhóm và bảng tổng kết lỗi ngôn ngữ cuối giờ.
```

### 1.2. Bảng Tra Cứu Nhanh Các Prompt Thiết Kế Giáo Án Chuyên Biệt (P04 – P20)

| Mã | Tên Mục Tiêu Sư Phạm | Cú Pháp Lệnh Dán Vào AI (Copy & Điền `[SLOT CHUYÊN MÔN CÔ MY DUYỆT]`) |
| :--- | :--- | :--- |
| **P04** | Giáo án Mô hình ESA (Engage – Study – Activate) | `"Thiết kế giáo án 60 phút theo mô hình Boomerang ESA (Engage -> Activate 1 -> Study -> Activate 2) cho chủ đề [SLOT CHUYÊN MÔN], giúp học viên kích hoạt cảm xúc ngay 5 phút đầu giờ."` |
| **P05** | Giáo án Chuyên đề Phát âm & Khẩu hình 45 phút | `"Thiết kế kịch bản dạy 45 phút cho cặp âm [SLOT 2 ÂM IPA CÔ MY DUYỆT] gồm 4 bước: Nhận diện tai nghe (Minimal Pairs) -> Đặt vị trí lưỡi/môi -> Đọc từ/cụm từ -> Đọc câu xoắn lưỡi (Tongue Twisters) và hội thoại ngắn."` |
| **P06** | Giáo án Dạy Từ vựng theo Cụm (Lexical Approach) | `"Soạn giáo án dạy 10 cụm từ (Collocations/Chunks) thuộc chủ đề [SLOT CHUYÊN MÔN] theo Lexical Approach: Không dạy từ đơn lẻ, đặt vào 3 tình huống đối thoại ngắn và bài tập ghép cụm."` |
| **P07** | Giáo án Lớp 1-1 Cá nhân hóa VIP (60 phút) | `"Thiết kế giáo án 60 phút kèm 1-1 cho học viên làm nghề [Ngành nghề học viên] cần học chủ đề [SLOT CHUYÊN MÔN]. Tối ưu 80% thời lượng để học viên thực hành nói và được sửa lỗi trực tiếp."` |
| **P08** | Giáo án Dạy Nghe Chủ động (Bottom-up & Top-down) | `"Thiết kế giáo án dạy kỹ năng Nghe 60 phút cho bài nghe chủ đề [SLOT CHUYÊN MÔN] gồm: Pre-listening (kích hoạt từ vựng, đoán ý), While-listening (nghe ý chính + nghe bắt từ khóa/nối âm), Post-listening (nhại giọng Shadowing & thảo luận)."` |
| **P09** | Giáo án Dạy Phản xạ Nói cho Người Mất gốc (A0-A1) | `"Soạn giáo án 60 phút cho người mất gốc hoàn toàn với mục tiêu cuối buổi nói trôi chảy được 5 câu về [SLOT CHUYÊN MÔN] bằng kỹ thuật Giàn giáo (Scaffolding: Từ khóa -> Cụm từ -> Câu có khung -> Tự nói không nhìn chữ)."` |
| **P10** | Giáo án Lớp học Đảo ngược (Flipped Classroom) | `"Thiết kế quy trình Lớp học đảo ngược cho bài [SLOT CHUYÊN MÔN]: (1) Nhiệm vụ tự học 15 phút trước giờ lên lớp qua video/tài liệu, (2) 3 câu hỏi kiểm tra đầu giờ trên Zoom, (3) 60 phút trên lớp chỉ tập trung luyện nói và sửa khẩu hình."` |
| **P11** | Giáo án Ôn tập Tổng hợp Cuối tháng (Review & Consolidation) | `"Thiết kế buổi học ôn tập 90 phút tổng hợp 4 bài học trong tháng gồm: [Liệt kê 4 SLOT CHUYÊN MÔN]. Chia làm 4 trạm thử thách đồng đội (Station Rotation) tính điểm thi đua trên Zoom."` |
| **P12** | Giáo án Dạy Viết Email / Tin nhắn Công sở (Genre Approach) | `"Soạn giáo án 60 phút dạy viết [Email xin nghỉ phép / Báo cáo tiến độ / Hồi âm khách hàng] trình độ [A2/B1]: Phân tích mẫu chuẩn -> Rút ra bộ khung câu (Useful Phrases) -> Thực hành viết nhanh trong 10 phút -> Chữa bài chéo."` |
| **P13** | Giáo án Luyện Ngữ điệu & Nhịp điệu Câu (Sentence Stress & Intonation) | `"Thiết kế bài dạy 45 phút giúp học viên bỏ thói quen nói tiếng Anh ngang phè như đọc kinh trong chủ đề [SLOT CHUYÊN MÔN]. Tập trung vào Content Words vs Function Words và ngữ điệu lên/xuống cuối câu."` |
| **P14** | Giáo án Luyện Nối âm & Nuốt âm Thực tế (Connected Speech) | `"Thiết kế giáo án 45 phút hướng dẫn học viên nhận diện và thực hành quy tắc nối âm [Phụ âm - Nguyên âm / Âm chặn] trong 10 câu giao tiếp thông dụng nhất của chủ đề [SLOT CHUYÊN MÔN]."` |
| **P15** | Giáo án Khắc phục Lớp học Đa trình độ (Mixed-Ability Class) | `"Trong cùng một lớp Zoom 12 người có cả học viên A1 yếu và A2 khá. Hãy thiết kế hoạt động phân hóa 3 cấp độ (Tiered Activities: Mức Cơ bản - Mức Chuẩn - Mức Mở rộng) cho cùng một chủ đề [SLOT CHUYÊN MÔN]."` |
| **P16** | Giáo án Buổi Học Đầu Tiên Phá Băng (First Lesson Onboarding) | `"Thiết kế kịch bản 90 phút cho Buổi khai giảng đầu tiên của khoá học: 20p làm quen & cam kết kỷ luật -> 30p chẩn đoán phát âm/phản xạ tự nhiên -> 30p dạy 1 thắng lợi nhỏ (Quick Win) về [SLOT CHUYÊN MÔN] -> 10p hướng dẫn cách nộp bài tập."` |
| **P17** | Giáo án Dạy Kể chuyện Cá nhân (Storytelling Workshop) | `"Thiết kế bài dạy 60 phút hướng dẫn học viên kể lại một câu chuyện có thật về [SLOT CHUYÊN MÔN] theo cấu trúc 5 bước: Bối cảnh -> Vấn đề phát sinh -> Hành động -> Kết quả -> Bài học rút ra, kèm từ nối cảm xúc."` |
| **P18** | Giáo án Luyện Tranh biện Nhẹ nhàng (Friendly Mini-Debate) | `"Soạn giáo án 60 phút tổ chức buổi tranh biện thân thiện cho trình độ [B1] với chủ đề [SLOT CHUYÊN MÔN]: Cung cấp 5 mẫu câu đồng tình/phản bác lịch sự, chia 2 phe chuẩn bị luận điểm trong 10 phút và đối đáp có bấm giờ."` |
| **P19** | Giáo án Dạy Thuyết trình Ngắn 3 Phút (Mini-Presentation) | `"Thiết kế bài học 60 phút giúp học viên làm chủ bài thuyết trình 3 phút về [SLOT CHUYÊN MÔN] theo công thức: Hook mở đầu (30s) -> 3 Ý chính dùng quy tắc số 3 (90s) -> Kết luận & Kêu gọi hành động (30s)."` |
| **P20** | Giáo án Dạy Thử Tuyển Sinh 45 Phút (High-Converting Demo Lesson) | `"Thiết kế giáo án buổi Dạy thử 45 phút trên Zoom về [SLOT CHUYÊN MÔN CÔ MY DUYỆT] sao cho học viên mới trải nghiệm sự thay đổi phát âm/phản xạ ngay tại chỗ sau 20 phút đầu và khao khát đăng ký học tiếp."` |

---

## NHÓM 2: SẢN XUẤT NGỮ LIỆU ĐỌC – NGHE – HỘI THOẠI CHUẨN CEFR (P21 – P45)

### 2.1. Ba Prompt Mẫu Toàn Văn Chuẩn C.R.E.F.O

#### [P21] Tạo Bài Đọc Hiểu Phân Hóa 3 Cấp Độ Cùng Một Chủ Đề (Differentiated Reading Passages)
```text
[ROLE]: Chuyên gia Biên soạn Học liệu Khảo thí Cambridge.
[TASK]: Viết 1 bài đọc ngắn (khoảng 150-180 từ) về chủ đề: [SLOT CHUYÊN MÔN CÔ MY DUYỆT], có lồng ghép tự nhiên danh sách từ vựng/cấu trúc sau: [Điền 5-8 từ/cấu trúc].
[FORMAT]: Xuất ra 3 phiên bản song song của cùng một câu chuyện:
1. Phiên bản A1 (Beginner): Câu đơn ngắn gọn, từ vựng thuộc Oxford 1000, thì cơ bản.
2. Phiên bản A2-B1 (Pre-Intermediate/Intermediate): Câu ghép, từ nối tự nhiên, từ vựng Oxford 3000.
3. Phiên bản B2 (Upper-Intermediate): Sử dụng Collocations đắt giá, mệnh đề quan hệ và cấu trúc nhấn mạnh.
Cuối bài trích xuất Bảng 8 cụm từ hay nhất kèm phiên âm IPA và nghĩa tiếng Việt theo ngữ cảnh.
```

#### [P22] Sáng Tác Kịch Bản Hội Thoại Đời Thực Đầy Đủ Đánh Dấu Ngữ Điệu (Annotated Natural Dialogue)
```text
[TASK]: Viết một đoạn hội thoại tự nhiên (12–16 lượt lời) giữa 2 nhân vật [Mô tả 2 nhân vật, VD: Đồng nghiệp Việt Nam và Sếp người Úc] trong tình huống [SLOT CHUYÊN MÔN CÔ MY DUYỆT].
[FORMAT]:
1. Lời thoại tiếng Anh tự nhiên (tuyệt đối không viết kiểu sách giáo khoa cứng nhắc), trong đó IN ĐẬM các từ nhận trọng âm câu (Sentence Stress), dùng dấu nối `‿` cho các chỗ nối âm (Linking), và dùng mũi tên `↗` `↘` cuối câu để chỉ ngữ điệu.
2. Bản dịch nghĩa tiếng Việt tự nhiên tương ứng từng câu.
3. Giải thích 5 cụm từ giao tiếp thông dụng (Everyday Chunks) xuất hiện trong hội thoại.
```

#### [P23] Chuyển Đổi Bài Báo / Tin Tức Thời Sự Thành Bài Học Tiếng Anh 15 Phút
```text
[TASK]: Dưới đây là nội dung một tin tức/bài viết thực tế: [Dán văn bản hoặc tóm tắt sự kiện].
Hãy biên tập lại thành 1 tờ Học liệu (1-Page Worksheet) cho học viên trình độ [A2/B1] gồm:
1. Tóm tắt tin tức trong 100 từ bằng tiếng Anh dễ hiểu, hấp dẫn.
2. 5 từ vựng/cụm từ đắt giá nhất trong bài (kèm IPA, loại từ, nghĩa Việt và 1 câu ví dụ mới).
3. 3 câu hỏi thảo luận mở (Discussion Questions) liên hệ trực tiếp đến công việc và cuộc sống của người Việt Nam.
```

### 2.2. Bảng Tra Cứu Nhanh Các Prompt Sản Xuất Ngữ Liệu CEFR (P24 – P45)

| Mã | Loại Ngữ Liệu Cần Tạo | Cú Pháp Lệnh Dán Vào AI (Copy & Điền `[SLOT CHUYÊN MÔN CÔ MY DUYỆT]`) |
| :--- | :--- | :--- |
| **P24** | Kịch bản Audio Nghe Chép Chính Tả (Dictation Script) | `"Viết đoạn văn 80 từ trình độ [A1/A2] về [SLOT CHUYÊN MÔN] chứa nhiều âm đuôi (/s/, /z/, /t/, /d/) và nối âm cơ bản để làm bài tập Nghe chép chính tả. Xuất kèm bản đầy đủ và bản đục lỗ 15 từ khóa."` |
| **P25** | Bộ 20 Câu Luyện Nhại Giọng (Shadowing Sentences) | `"Tạo 20 câu giao tiếp ngắn gọn (8-12 từ/câu) tăng dần độ khó về chủ đề [SLOT CHUYÊN MÔN] để học viên luyện Shadowing. Đánh dấu nhịp ngắt nghỉ (Thought Groups) bằng dấu gạch chéo / và từ nhấn mạnh bằng chữ IN HOA."` |
| **P26** | Kịch bản Podcast Độc thoại 2 Phút (Monologue) | `"Viết kịch bản Podcast độc thoại 2 phút (khoảng 220 từ) với giọng văn truyền cảm hứng, gần gũi về chủ đề [SLOT CHUYÊN MÔN], sử dụng các câu hỏi tu từ giữ chân người nghe."` |
| **P27** | Bảng Đối chiếu Tiếng Anh Sách Vở vs Tiếng Anh Bản Xứ | `"Lập bảng 15 câu về chủ đề [SLOT CHUYÊN MÔN] gồm 4 cột: (1) Ý người Việt muốn nói | (2) Câu dịch từng từ cứng nhắc hay gặp (Vietlish) | (3) Câu người bản xứ thực sự dùng (Natural English) | (4) Ghi chú sắc thái lịch sự/thân mật."` |
| **P28** | Bộ 15 Cặp Từ Tối Thiểu Luyện Nghe Phát Âm (Minimal Pairs) | `"Tạo bảng 15 cặp từ tối thiểu (Minimal Pairs) phân biệt 2 âm [SLOT 2 ÂM IPA CÔ MY DUYỆT] gồm: Cặp từ đơn -> Phiên âm IPA -> Nghĩa Việt -> 10 câu đặt cả 2 từ vào cùng một ngữ cảnh vui nhộn để luyện đọc."` |
| **P29** | Câu chuyện Chứa 100% Từ Vựng Mục Tiêu (Target Vocab Story) | `"Viết một câu chuyện ngắn hài hước, dễ nhớ (120 từ) sử dụng trọn vẹn 10 từ vựng sau: [SLOT 10 TỪ VỰNG CÔ MY DUYỆT]. In đậm các từ đó và thêm bản dịch tiếng Việt bên dưới."` |
| **P30** | Bộ 5 Mẫu Email Công Sở Đa Sắc Thái | `"Viết 5 mẫu Email ngắn gọn về tình huống [SLOT CHUYÊN MÔN] ở 3 mức độ: (1) Thân mật gửi đồng nghiệp thân, (2) Chuẩn mực gửi đối tác/khách hàng, (3) Trang trọng gửi Ban giám đốc."` |
| **P31** | Ngữ liệu Luyện Đọc Lướt & Đọc Quét (Skimming & Scanning) | `"Thiết kế 1 trang thông tin thực tế (Lịch trình hội thảo / Thực đơn nhà hàng / Thông báo tuyển dụng / Email nội bộ) về [SLOT CHUYÊN MÔN] kèm 3 câu hỏi Skimming (tìm ý chính trong 30s) và 5 câu hỏi Scanning (tìm số liệu/tên riêng trong 60s)."` |
| **P32** | Bộ 10 Câu Xoắn Lưỡi Luyện Khẩu Hình (Tongue Twisters) | `"Sáng tác 10 câu Tongue Twisters (từ dễ 5 từ đến khó 12 từ) tập trung dày đặc vào âm [SLOT ÂM IPA CÔ MY DUYỆT], có nghĩa hợp lý và vui nhộn để lớp học thi đọc nhanh."` |
| **P33** | Bảng Gia Đình Từ & Từ LoạiỨng Dụng (Word Family Matrix) | `"Với 10 từ gốc thuộc chủ đề [SLOT CHUYÊN MÔN], hãy lập bảng Word Family (Danh từ - Động từ - Tính từ - Trạng từ), chỉ chọn những dạng từ phổ biến nhất trong giao tiếp kèm câu ví dụ thực tế."` |
| **P34** | Bộ 15 Cụm Động Từ Thông Dụng Theo Ngữ Cảnh (Phrasal Verbs) | `"Chọn 15 Phrasal Verbs thiết thực nhất khi nói về [SLOT CHUYÊN MÔN]. Trình bày thành bảng: Cụm từ | Nghĩa dễ nhớ | Câu ví dụ trong công việc/đời sống | Từ đồng nghĩa trang trọng hơn."` |
| **P35** | Kịch bản Điện thoại / Họp Zoom Công sở (Call Scripts) | `"Viết kịch bản cuộc gọi điện thoại / họp Zoom 3 phút xử lý tình huống [SLOT CHUYÊN MÔN], kèm hộp công cụ 10 mẫu câu cứu cánh khi nghe không rõ đối phương nói gì."` |
| **P36** | Bộ 12 Thành Ngữ Đời Sống Dễ Dùng (Everyday Idioms) | `"Chọn 12 Idioms phổ biến nhất mà người Mỹ/Anh dùng hàng ngày liên quan đến [SLOT CHUYÊN MÔN]. Giải thích nguồn gốc ngắn gọn để dễ nhớ và đặt vào đoạn đối thoại 2 câu."` |
| **P37** | Văn bản Luyện Đọc To Chấm Khẩu Hình (Read-Aloud Assessment Text) | `"Viết một đoạn văn chuẩn mực 100 từ trình độ [A2/B1] về [SLOT CHUYÊN MÔN], tích hợp đầy đủ các hiện tượng phát âm: âm đuôi -s/-ed, nối âm, trọng âm từ 3 âm tiết để dùng làm bài thi đọc cuối tháng."` |
| **P38** | Bảng Ngữ Cảnh Hóa Ngữ Pháp (Contextualized Grammar Chart) | `"Thay vì cho công thức khô khan, hãy viết 1 đoạn nhật ký/tin nhắn thực tế 100 từ làm nổi bật sự khác nhau giữa [Cấu trúc A] và [Cấu trúc B] trong chủ đề [SLOT CHUYÊN MÔN]."` |
| **P39** | Bộ 20 Collocations Động từ + Danh từ Đắt Giá | `"Liệt kê 20 cụm kết hợp từ (Verb + Noun / Adjective + Noun Collocations) tự nhiên nhất cho chủ đề [SLOT CHUYÊN MÔN], chỉ rõ lỗi ghép từ sai mà người Việt hay dịch word-by-word."` |
| **P40** | Kịch bản Phỏng vấn Xin việc & Đàm phán Lương | `"Soạn bộ 8 câu hỏi phỏng vấn tiếng Anh thực tế cho vị trí [Ngành nghề] kèm câu trả lời mẫu theo cấu trúc STAR (Situation - Task - Action - Result) ở trình độ [A2/B1]."` |
| **P41** | Bộ Ngữ liệu Tiếng Anh Du lịch & Sân bay Sinh tồn | `"Tạo cẩm nang 25 câu đối thoại sinh tồn ngắn gọn nhất tại [Sân bay / Hải quan / Khách sạn / Nhà hàng] kèm câu trả lời thường gặp của nhân viên bản xứ để học viên nghe hiểu ngay."` |
| **P42** | Bài Đọc So Sánh Văn Hóa Việt Nam & Quốc Tế | `"Viết bài đọc 150 từ trình độ [B1] so sánh thú vị giữa thói quen của người Việt Nam và người phương Tây về chủ đề [SLOT CHUYÊN MÔN], giúp học viên có chất liệu trò chuyện khi đi Săn Tây."` |
| **P43** | Bộ 15 Mẫu Câu Chuyển Ý & Kéo Dài Thời Gian Suy Nghĩ (Fillers & Connectors) | `"Tổng hợp 15 cụm từ tự nhiên giúp học viên không bị 'ờ, à' chết lặng khi đang tìm từ nói về [SLOT CHUYÊN MÔN], phân loại theo: Mở đầu, Đang suy nghĩ, Đổi ý, Chốt lại."` |
| **P44** | Biến Bài Học Khô Khan Thành Truyện Tranh Hội Thoại (Comic Strip Script) | `"Chia nội dung bài học [SLOT CHUYÊN MÔN] thành kịch bản 6 khung tranh (6 Panels): Mô tả hình ảnh minh họa từng khung và lời thoại ngắn dưới 15 từ mỗi bóng thoại để thiết kế trên Canva."` |
| **P45** | Chuẩn Hóa Độ Khó Văn Bản Theo Thang Đo CEFR (Text Level Adapting) | `"Đoạn văn tiếng Anh dưới đây đang quá khó với học viên của tôi: [Dán văn bản]. Hãy hạ cấp độ xuống chuẩn [CEFR A1/A2], giữ nguyên thông điệp chính nhưng thay thế từ khó và tách các câu dài thành câu ngắn dưới 12 từ."` |

---

## NHÓM 3: NGÂN HÀNG BÀI TẬP, ĐỀ KIỂM TRA & CHỮA LỖI NGỮ PHÁP (P46 – P65)

### 3.1. Hai Prompt Mẫu Toàn Văn Chuẩn C.R.E.F.O

#### [P46] Tạo Đề Kiểm Tra Trắc Nghiệm 20 Câu Có Giải Thích Sư Phạm Từng Đáp Án Nhiễu
```text
[TASK]: Tạo bài kiểm tra 20 câu trắc nghiệm (Multiple Choice: A, B, C, D) đánh giá kiến thức bài học: [SLOT CHUYÊN MÔN CÔ MY DUYỆT] ở trình độ [A1/A2/B1].
[REQUIREMENTS]:
- Các phương án nhiễu (Distractors) phải được thiết kế dựa trên những lỗi tư duy tiếng Việt điển hình (như quên chia động từ, nhầm giới từ, dịch word-by-word).
- Định dạng xuất ra: Bảng Markdown 8 cột: `STT` | `Câu hỏi (dùng _____ cho chỗ trống)` | `A` | `B` | `C` | `D` | `Đáp án đúng` | `Giải thích chi tiết bằng tiếng Việt tại sao đáp án đó đúng và các câu kia bẫy ở đâu`.
```

#### [P47] Tạo Bài Tập "Bác Sĩ Ngữ Pháp" Tìm & Sửa 15 Lỗi Sai Kinh Điển Của Người Việt
```text
[TASK]: Thiết kế bài tập "Find and Fix the Vietlish Mistakes" gồm 15 câu về chủ đề [SLOT CHUYÊN MÔN CÔ MY DUYỆT].
Mỗi câu chứa đúng 1 hoặc 2 lỗi sai mà người Việt học tiếng Anh hay mắc nhất (ví dụ: thừa 'to be', thiếu âm cuối số nhiều, dùng sai tính từ đuôi -ed/-ing, dịch ghép từ tiếng Việt).
[FORMAT]:
- Phần 1: Đề bài 15 câu dành cho học viên (có gợi ý nhẹ vị trí cần chú ý).
- Phần 2: Đáp án chi tiết cho giáo viên dưới dạng bảng: `Câu sai` | `Câu sửa chuẩn` | `Bắt bệnh nguyên nhân lỗi do đâu`.
```

### 3.2. Bảng Tra Cứu Nhanh Các Prompt Tạo Bài Tập & Khảo Thí (P48 – P65)

| Mã | Loại Bài Tập / Đề Thi | Cú Pháp Lệnh Dán Vào AI (Copy & Điền `[SLOT CHUYÊN MÔN CÔ MY DUYỆT]`) |
| :--- | :--- | :--- |
| **P48** | Bài tập Điền từ vào Đoạn văn theo Ngữ cảnh (Cloze Test) | `"Viết đoạn văn 120 từ về [SLOT CHUYÊN MÔN], đục lỗ 10 vị trí kiểm tra từ vựng và giới từ. Cung cấp hộp từ gợi ý (Word Bank) có 13 từ (gồm 3 từ gây nhiễu) và bảng đáp án giải thích."` |
| **P49** | Bài tập Viết lại Câu Không đổi nghĩa (Sentence Transformation) | `"Tạo 15 câu bài tập viết lại câu sao cho nghĩa không đổi, tập trung rèn cấu trúc [SLOT CẤU TRÚC CÔ MY DUYỆT], kèm từ khóa gợi ý trong ngoặc và đáp án chi tiết."` |
| **P50** | Bài tập Sắp xếp Từ xáo trộn thành Câu hoàn chỉnh (Unscramble Sentences) | `"Tạo 15 câu giao tiếp chuẩn về [SLOT CHUYÊN MÔN] rồi đảo lộn thứ tự các từ/cụm từ (dùng dấu /) để học viên trình độ [A1/A2] luyện tư duy trật tự từ tiếng Anh. Kèm đáp án cuối bài."` |
| **P51** | Bài tập Nối Cụm từ 2 Cột (Matching Collocations & Responses) | `"Tạo bài tập ghép nối 2 cột (Cột A: 12 câu hỏi/vế đầu -> Cột B: 12 câu phản hồi/vế sau bị xáo trộn) cho chủ đề [SLOT CHUYÊN MÔN]."` |
| **P52** | Bài tập Dịch Ngược Việt – Anh Có Khung Gợi Ý (Guided Translation) | `"Tạo 12 câu tiếng Việt thực tế về [SLOT CHUYÊN MÔN] để học viên dịch sang tiếng Anh. Mỗi câu cung cấp sẵn 2 cụm từ gợi ý (Hints) trong ngoặc để học viên không bị bí từ, kèm 2 phương án đáp án chuẩn."` |
| **P53** | Đề Kiểm tra Phân loại Đầu vào 15 Phút (Placement Test Generator) | `"Thiết kế bài kiểm tra đầu vào nhanh gồm 20 câu tăng dần từ A1 đến B2 (Ngữ pháp thực hành, Từ vựng ngữ cảnh, Tình huống phản xạ) và 3 câu hỏi phỏng vấn nói để xếp lớp chính xác."` |
| **P54** | Bài tập Phân biệt Từ theo Trọng âm & Phát âm (Pronunciation Quiz) | `"Tạo 15 câu trắc nghiệm chọn từ có phần gạch chân phát âm khác hoặc có vị trí trọng âm khác với 3 từ còn lại, sử dụng các từ vựng thuộc bài [SLOT CHUYÊN MÔN]. Kèm phiên âm IPA đầy đủ cho cả 60 từ."` |
| **P55** | Phiếu Bài tập Về nhà 15 Phút Mỗi Ngày (Daily Micro-Homework) | `"Chia nội dung bài học [SLOT CHUYÊN MÔN] thành chuỗi Bài tập về nhà siêu ngắn cho 5 ngày trong tuần (Thứ 2 đến Thứ 6), mỗi ngày học viên chỉ mất đúng 10-15 phút làm trên điện thoại là xong."` |
| **P56** | Rubric Chấm điểm Bài nói & Nhận xét Cá nhân hóa | `"Thiết kế bảng tiêu chí chấm điểm (Scoring Rubric) thang 10 cho bài thi Nói chủ đề [SLOT CHUYÊN MÔN] gồm 4 tiêu chí: Khẩu hình & Phát âm IPA (3đ), Độ trôi chảy (2.5đ), Từ vựng & Cấu trúc (2.5đ), Tương tác tự nhiên (2đ), kèm 5 mẫu lời phê khích lệ."` |
| **P57** | Bài tập Hoàn thành Hội thoại bỏ trống (Dialogue Completion) | `"Viết một cuộc hội thoại 10 lượt lời về [SLOT CHUYÊN MÔN], ẩn đi 5 câu trả lời của nhân vật B và cung cấp 5 gợi ý tình huống bằng tiếng Việt để học viên tự đóng vai nói/viết câu trả lời."` |
| **P58** | Bài tập Chọn Từ Đúng Theo Ngữ Cảnh (Confusing Words Quiz) | `"Tạo 15 câu bài tập phân biệt các cặp từ dễ nhầm lẫn trong chủ đề [SLOT CHUYÊN MÔN] (ví dụ: say/tell, make/do, borrow/lend, hear/listen), giải thích mẹo nhớ nhanh trong 1 dòng."` |
| **P59** | Bài tập Mở rộng Câu từ Câu Đơn sang Câu Ghép (Sentence Expanding) | `"Đưa ra 10 câu đơn cụt ngủn trình độ A1 về [SLOT CHUYÊN MÔN]. Hướng dẫn học viên từng bước thêm tính từ, trạng từ chỉ mức độ và mệnh đề lý do/thời gian để biến thành câu B1 tự nhiên."` |
| **P60** | Bộ 10 Tình huống Xử lý Phản xạ Tức thì (Situational Prompts) | `"Tạo 10 tình huống đời thực bất ngờ liên quan đến [SLOT CHUYÊN MÔN] (Ví dụ: 'Bạn đang họp Zoom thì mạng bị lag không nghe rõ sếp nói gì, bạn sẽ mở mic nói câu gì ngay lúc đó?') kèm 3 cách trả lời từ dễ đến nâng cao."` |
| **P61** | Đề Thi Cuối Khóa Toàn Diện 4 Kỹ Năng (Final Assessment Pack) | `"Thiết kế đề thi cuối khóa 60 phút tổng hợp các chủ đề [Liệt kê SLOT CHUYÊN MÔN] gồm: Phần 1 Nghe hiểu (10đ), Phần 2 Từ vựng & Phản xạ tình huống (10đ), Phần 3 Đọc & Viết ngắn (10đ), Phần 4 Phỏng vấn 1-1 (20đ)."` |
| **P62** | Bài tập Biến đổi Câu Khẳng định – Phủ định – Nghi vấn Nhanh | `"Tạo bảng luyện phản xạ 3 chiều (Khẳng định [+] -> Phủ định [-] -> Câu hỏi Yes/No & Wh- [?]) với 10 câu gốc thuộc chủ đề [SLOT CHUYÊN MÔN] để học viên đọc to bấm giờ trong 2 phút."` |
| **P63** | Bài tập Điền Giới từ theo Cụm Cố định (Preposition Mastery) | `"Soạn 20 câu ngắn thực tế kiểm tra cách dùng giới từ (in/on/at/for/with/to/about) đi kèm các động từ và tính từ trong bài [SLOT CHUYÊN MÔN], nhóm lại thành công thức mẹo nhớ cuối bài."` |
| **P64** | Máy Chấm Bài & Viết Nhận Xét Tự Động Hàng Loạt Cho Giáo Viên | `"Dưới đây là bài nộp của 5 học viên trong lớp tôi: [Dán bài học viên]. Hãy chấm từng bài theo cấu trúc: 1 Lời khen điểm tốt -> Bảng sửa lỗi sai -> Điểm số trên thang 10 -> 1 Lời nhắn động viên mang giọng văn ấm áp của giáo viên."` |
| **P65** | Tạo Phiếu Tự Đánh Giá Tiến Bộ Cuối Tuần (Student Self-Reflection Checklist) | `"Thiết kế phiếu 'Can-Do Statements' gồm 8 mục tiêu cụ thể của bài [SLOT CHUYÊN MÔN] để học viên tự tích chọn mức độ làm chủ (Đã tự tin làm được / Cần luyện thêm / Cần thầy cô giảng lại) vào cuối tuần."` |

---

## NHÓM 4: CÂU HỎI BẪY TƯ DUY CCQs, ICQs, GAMES & ROLE-PLAY (P66 – P85)

### 4.1. Hai Prompt Mẫu Toàn Văn Chuẩn C.R.E.F.O

#### [P66] Tạo Bộ Câu Hỏi Kiểm Tra Khái Niệm (CCQs – Concept Checking Questions) Chuẩn CELTA
```text
[CONTEXT]: Trong phương pháp sư phạm quốc tế, giáo viên tuyệt đối không hỏi "Do you understand?" (Các bạn có hiểu không?) vì học sinh sẽ gật đầu dù chưa hiểu.
[TASK]: Tôi đang dạy điểm ngữ pháp / từ vựng: [SLOT CHUYÊN MÔN CÔ MY DUYỆT].
Hãy thiết kế cho tôi:
1. Bản chất cốt lõi (Core Concept) của kiến thức này tóm tắt trong 3 gạch đầu dòng ngắn gọn.
2. Bộ 6 câu hỏi CCQs siêu ngắn (chỉ dùng từ vựng dưới A2, câu hỏi Yes/No, câu hỏi lựa chọn A hay B, hoặc câu hỏi 50/50) kèm câu trả lời chuẩn của học viên để chứng minh học viên đã nắm chắc 100% bản chất và không bị nhầm với cấu trúc khác.
3. 1 đường biểu diễn thời gian (Timeline ASCII) hoặc hình ảnh ẩn dụ trực quan để vẽ lên bảng Zoom.
```

#### [P67] Tạo Kịch Bản Nhập Vai Có Xung Đột Thú Vị (Conflict-Driven Role-Play Cards)
```text
[TASK]: Các hoạt động đóng vai thông thường rất nhanh chán nếu 2 học viên chỉ hỏi đáp suông. Hãy thiết kế 3 cặp Thẻ Nhập Vai (Role-Play Cards: Role A vs Role B) cho chủ đề [SLOT CHUYÊN MÔN CÔ MY DUYỆT] có cài cắm một "mâu thuẫn/thử thách nhỏ" buộc hai bên phải thương lượng hoặc thuyết phục nhau.
[FORMAT]: Mỗi thẻ gồm:
- Bối cảnh & Vai trò của bạn.
- Mục tiêu bí mật bạn phải đạt được trong cuộc trò chuyện 3 phút này.
- 4 cụm từ khóa bắt buộc phải sử dụng khéo léo trong khi nói.
```

### 4.2. Bảng Tra Cứu Nhanh Các Prompt CCQs, ICQs & Hoạt Động Tương Tác Lớp Học (P68 – P85)

| Mã | Mục Tiêu Tương Tác Lớp Học | Cú Pháp Lệnh Dán Vào AI (Copy & Điền `[SLOT CHUYÊN MÔN CÔ MY DUYỆT]`) |
| :--- | :--- | :--- |
| **P68** | Bộ Câu hỏi Kiểm tra Hướng dẫn (ICQs – Instruction Checking Questions) | `"Tôi chuẩn bị cho lớp làm hoạt động [Mô tả trò chơi/bài tập nhóm trên Zoom]. Hãy viết lời hướng dẫn ngắn gọn nhất (dưới 4 câu) và 4 câu hỏi ICQs để kiểm tra xem học viên đã rõ luật chơi, thời gian và nhiệm vụ trước khi vào Breakout Rooms chưa."` |
| **P69** | 5 Trò Chơi Khởi Động 5 Phút Đầu Giờ Trên Zoom (No-Prep Zoom Warmers) | `"Đề xuất 5 trò chơi khởi động kéo dài đúng 5 phút trên Zoom không cần chuẩn bị slide phức tạp để ôn lại từ vựng bài cũ về [SLOT CHUYÊN MÔN] và làm nóng không khí lớp học buổi tối."` |
| **P70** | Trò chơi "2 Sự Thật 1 Lời Nói Dối" (Two Truths and a Lie) | `"Thiết kế hoạt động '2 Truths and 1 Lie' áp dụng cấu trúc [SLOT CẤU TRÚC CÔ MY DUYỆT]: Đưa ra 3 câu mẫu thú vị của giáo viên và khung câu hỏi chất vấn (Follow-up Questions) để cả lớp bắt bài nhau."` |
| **P71** | Hoạt động "Tìm Người Có Cùng Điểm Chung" (Find Someone Who - Zoom Edition) | `"Thiết kế phiếu khảo sát 'Find Someone Who...' gồm 10 mục xoay quanh chủ đề [SLOT CHUYÊN MÔN], kèm câu hỏi tiếng Anh mẫu mà học viên phải dùng khi phỏng vấn bạn học trong phòng Zoom."` |
| **P72** | Trò chơi Đoán Từ Cấm (Taboo / Hot Seat Vocabulary Game) | `"Tạo 15 thẻ từ cho trò chơi Taboo ôn tập chủ đề [SLOT CHUYÊN MÔN]: Mỗi thẻ gồm 1 Từ khóa mục tiêu và 3 Từ cấm không được phép nhắc tới khi miêu tả bằng tiếng Anh cho đồng đội đoán."` |
| **P73** | Hoạt động Khoảng Trống Thông Tin (Information Gap Activity) | `"Thiết kế bài tập Information Gap cho cặp học viên A và B về [SLOT CHUYÊN MÔN]: Bảng thông tin của A bị khuyết các ô mà B có và ngược lại, buộc 2 người phải đặt câu hỏi tiếng Anh để điền kín bảng."` |
| **P74** | Trò chơi Đấu Giá Câu Đúng – Sai (Grammar Auction Game) | `"Tạo danh sách 12 câu tiếng Anh về [SLOT CHUYÊN MÔN] (gồm 6 câu chuẩn xác tuyệt đối và 6 câu có lỗi sai tinh vi) để tổ chức trò chơi Đấu giá Ngữ pháp trên lớp với ngân sách giả định $1,000 mỗi đội."` |
| **P75** | Hoạt động Giải Quyết Tình Huống Tiến Thoái Lưỡng Nan (Moral/Work Dilemma) | `"Viết 3 tình huống khó xử nhưng thực tế nơi công sở/đời sống liên quan đến [SLOT CHUYÊN MÔN], kèm 3 phương án hành động để các nhóm thảo luận, chọn phương án tối ưu và bảo vệ quan điểm."` |
| **P76** | Trò chơi Nối Tiếp Câu Chuyện (Chain Story / Snowball Speaking) | `"Tạo câu mở đầu hấp dẫn và danh sách 15 từ khóa/từ nối thuộc bài [SLOT CHUYÊN MÔN] để cả lớp chơi trò kể chuyện nối tiếp: Mỗi học viên nói thêm 1 câu có chứa từ khóa được giao."` |
| **P77** | Kỹ thuật Gợi mở Khi Học viên Bí từ (Eliciting & Prompting Techniques) | `"Khi dạy bài [SLOT CHUYÊN MÔN], nếu học viên ấp úng không nhớ ra từ hoặc cấu trúc, hãy viết cho tôi 10 cách đặt câu hỏi gợi mở (Eliciting Questions) và ví dụ đối lập thay vì đọc luôn đáp án cho học viên."` |
| **P78** | Kịch bản Phỏng Vấn Người Nổi Tiếng / Chuyên Gia (Press Conference Role-Play) | `"Thiết kế hoạt động Họp báo xoay quanh chủ đề [SLOT CHUYÊN MÔN]: 3 học viên đóng vai chuyên gia/nhân vật chính, các học viên còn lại đóng vai phóng viên đặt các câu hỏi sắc bén từ bộ khung gợi ý."` |
| **P79** | Hoạt động Xếp Hạng Ưu Tiên & Đạt Đồng Thuận (Ranking & Consensus Task) | `"Đưa ra danh sách 8 yếu tố/lựa chọn trong chủ đề [SLOT CHUYÊN MÔN]. Yêu cầu nhóm học viên thảo luận bằng tiếng Anh để chọn ra Top 3 quan trọng nhất và trình bày lý do bằng bộ mẫu câu thuyết phục."` |
| **P80** | Trò chơi "Ai Là Triệu Phú / Jeopardy" Ôn Tập Bài Học | `"Tạo bộ 15 câu hỏi phân 3 cấp độ điểm (100 điểm - Dễ, 200 điểm - Trung bình, 300 điểm - Thử thách) về bài [SLOT CHUYÊN MÔN] để tổ chức mini-game đồng đội cuối giờ học."` |
| **P81** | Kịch bản Sửa Lỗi Tinh Tế Không Làm Ngắt Mạch Nói (Delayed Error Correction) | `"Hướng dẫn tôi cách ghi chép lỗi phát âm và ngữ pháp khi học viên đang nói về [SLOT CHUYÊN MÔN] và kịch bản 5 phút cuối hoạt động đưa các lỗi ẩn danh đó lên màn hình để cả lớp cùng hào hứng sửa."` |
| **P82** | Hoạt động "Speed Dating" Đổi Cặp Luyện Phản Xạ Liên Tục | `"Thiết kế bộ 6 câu hỏi ngắn đắt giá về [SLOT CHUYÊN MÔN] cho hoạt động Speed Speaking trên Zoom: Cứ mỗi 3 phút đổi cặp Breakout Room một lần để học viên lặp lại cấu trúc với 4 người bạn khác nhau, tăng độ trôi chảy gấp 3 lần."` |
| **P83** | Mẹo Hình Tượng Hóa Từ Vựng Khó Nhớ (Mnemonics & Visual Hooks) | `"Với 10 từ vựng khó nhớ sau trong bài [SLOT CHUYÊN MÔN], hãy sáng tạo cách liên tưởng âm thanh hài hước (Sound-alike Mnemonics) hoặc hình ảnh ấn tượng để học viên người Việt nghe 1 lần nhớ suốt đời."` |
| **P84** | Hoạt động Phản Biện "Đóng Vai Luật Sư Của Quỷ" (Devil's Advocate Prompts) | `"Với 5 quan điểm phổ biến trong chủ đề [SLOT CHUYÊN MÔN], hãy viết các câu hỏi phản biện sắc sảo nhưng lịch sự để giáo viên kích thích học viên trình độ B1+ nói sâu hơn và dài hơn."` |
| **P85** | Kịch bản Tổng Kết 5 Phút Cuối Giờ Tạo Cảm Giác Thành Tựu (High-Energy Wrap-Up) | `"Thiết kế kịch bản 5 phút cuối buổi học [SLOT CHUYÊN MÔN] gồm: Thử thách 'Exit Ticket' (Mỗi học viên nói 1 câu chuẩn mới được rời phòng Zoom) và lời tổng kết truyền lửa cho buổi học sau."` |

---

## NHÓM 5: TỰ ĐỘNG HÓA SLIDE GAMMA, QUIZIZZ, ANKI & VẬN HÀNH LỚP (P86 – P100)

### 5.1. Hai Prompt Mẫu Toàn Văn Chuẩn C.R.E.F.O

#### [P86] Tạo Dàn Bài Markdown Dán Trực Tiếp Vào Gamma.app Xuất Ra 12 Slide Bài Giảng Trong 60 Giây
```text
[TASK]: Tôi muốn dùng công cụ AI Gamma.app để tạo bộ Slide bài giảng chuyên nghiệp cho bài: [SLOT CHUYÊN MÔN CÔ MY DUYỆT].
Hãy xuất nội dung dưới dạng Markdown chuẩn với ký hiệu `---` ngăn cách giữa 12 trang Slide theo đúng cấu trúc:
- Slide 1: Tiêu đề bài học hấp dẫn + Mục tiêu đầu ra thực tế (Learning Outcomes).
- Slide 2: Tình huống khởi động (Warm-up Hook) kèm 2 câu hỏi thảo luận.
- Slide 3 & 4: Ngữ cảnh thực tế (Hội thoại ngắn có đánh dấu từ khóa).
- Slide 5 & 6: Bóc tách Từ vựng / Cấu trúc cốt lõi (Bảng đối chiếu ngắn gọn + Phiên âm IPA).
- Slide 7: Các lỗi người Việt hay mắc nhất và cách sửa khẩu hình/tư duy.
- Slide 8 & 9: Bài tập kiểm tra nhanh tại lớp (Controlled Practice).
- Slide 10: Nhiệm vụ thực hành nói theo cặp (Role-play / Speaking Task).
- Slide 11: Tóm tắt 3 điểm cốt lõi (Key Takeaways).
- Slide 12: Bài tập về nhà 15 phút & Lời nhắn truyền cảm hứng.
[CONSTRAINTS]: Mỗi slide chỉ viết tối đa 4-5 gạch đầu dòng cô đọng để lên hình đẹp, thoáng mắt, không bị tràn chữ.
```

#### [P87] Xuất Bảng Dữ Liệu CSV Chuẩn Để Nhập Hàng Loạt Vào Anki / Quizlet Tạo Flashcards Tự Động
```text
[TASK]: Từ danh sách từ vựng/cấu trúc của bài học [SLOT CHUYÊN MÔN CÔ MY DUYỆT], hãy tạo bảng dữ liệu chuẩn định dạng CSV (ngăn cách bằng dấu chấm phẩy `;`) gồm 20 dòng để tôi import thẳng vào phần mềm thẻ nhớ Anki hoặc Quizlet.
[FORMAT]:
- Cột 1 (Mặt trước - Front): `[Từ/Cụm từ tiếng Anh] + [Phiên âm IPA] + [Loại từ] + Câu ví dụ khuyết từ đó (dùng [...])`
- Cột 2 (Mặt sau - Back): `[Nghĩa tiếng Việt ngắn gọn] + [Câu ví dụ hoàn chỉnh] + [Lưu ý phát âm/cách dùng]`
Xuất toàn bộ trong một khối code `csv` duy nhất để tôi copy lưu thành file `.csv`.
```

### 5.2. Bảng Tra Cứu Nhanh Các Prompt Tự Động Hóa Công Cụ & Quản Trị Lớp Học (P88 – P100)

| Mã | Công Cụ / Tác Vụ Tự Động Hóa | Cú Pháp Lệnh Dán Vào AI (Copy & Điền Thông Tin Thực Tế) |
| :--- | :--- | :--- |
| **P88** | Xuất File Excel/CSV Nhập Đề Thi Lên Quizizz / Kahoot | `"Tạo 15 câu hỏi trắc nghiệm ôn bài [SLOT CHUYÊN MÔN] theo đúng định dạng bảng nhập liệu của Quizizz/Kahoot gồm các cột: Question Text | Question Type (Multiple Choice) | Option 1 | Option 2 | Option 3 | Option 4 | Correct Answer (1-4) | Time in seconds (20)."` |
| **P89** | Tạo Bảng Dữ Liệu Canva Bulk Create Thiết Kế 30 Thẻ Từ Vựng Hàng Loạt | `"Tạo bảng dữ liệu 30 dòng về chủ đề [SLOT CHUYÊN MÔN] gồm 4 cột: (1) STT | (2) Cụm từ tiếng Anh ngắn dưới 5 từ | (3) Phiên âm IPA & Nghĩa Việt | (4) Câu ví dụ dưới 10 từ, để tôi nạp vào tính năng Bulk Create trên Canva xuất ra 30 ảnh thẻ học trong 1 phút."` |
| **P90** | Tự Động Tóm Tắt Bản Ghi Phụ Đề Buổi Học Zoom Thành Note Ôn Tập | `"Dưới đây là bản chép lời (Transcript) hoặc ghi chú thô của buổi dạy Zoom hôm nay: [Dán nội dung]. Hãy biên tập thành Bản Tóm Tắt Buổi Học (Class Recap Note) thật đẹp, rõ ràng để gửi vào nhóm Zalo lớp gồm: (1) Tuyên dương tinh thần lớp, (2) 10 từ/câu đắt giá nhất vừa học, (3) Các lỗi phát âm cả lớp cần lưu ý, (4) Nhiệm vụ bài tập về nhà."` |
| **P91** | Chuỗi Tin Nhắn Zalo Nhắc Nộp Bài Tập Tinh Tế (Không Gây Áp Lực) | `"Viết 5 mẫu tin nhắn Zalo ngắn gọn, hài hước và tràn đầy năng lượng tích cực để giáo viên gửi vào nhóm lớp nhắc học viên nộp bài tập quay video phát âm bài [SLOT CHUYÊN MÔN] đúng hạn 18h00."` |
| **P92** | Soạn Báo Cáo Tiến Độ Học Tập Cá Nhân Hàng Tháng Gửi Học Viên / Phụ Huynh | `"Dựa trên các thông số của học viên [Tên học viên]: Số buổi đi học [X/12], Tỷ lệ làm bài tập [Y%], Điểm mạnh [Mô tả], Điểm cần cải thiện [Mô tả]. Hãy viết một bức thư đánh giá tiến độ tháng chuyên nghiệp, ấm áp và đề xuất lộ trình bứt phá cho tháng tiếp theo."` |
| **P93** | Thiết Kế Lộ Trình Học Cá Nhân Hóa 30 Ngày (30-Day Study Planner) | `"Thiết kế bảng Kế hoạch Tự học 30 ngày (mỗi ngày 20 phút) cho học viên trình độ [A1/A2] muốn đạt mục tiêu [Mục tiêu cụ thể], phân bổ rõ từng ngày học gì, nghe gì, nói gì và cột tích chọn hoàn thành."` |
| **P94** | Tạo Mindmap Sơ Đồ Tư Duy Từ Vựng Dạng Mermaid / Markdown | `"Tạo sơ đồ tư duy (Mindmap) dạng mã Mermaid.js và dạng cây thư mục Markdown phân nhánh chủ đề [SLOT CHUYÊN MÔN] thành 4 nhánh con, mỗi nhánh 5 cụm từ thiết yếu kèm nghĩa tiếng Việt."` |
| **P95** | Chuyển Hóa 1 Bài Giảng Trên Lớp Thành 3 Kịch Bản Video Ngắn TikTok/Reels | `"Từ điểm kiến thức hay nhất trong buổi học hôm nay là [SLOT CHUYÊN MÔN], hãy chuyển thể thành 3 kịch bản video ngắn 45 giây theo công thức Hook (3s) -> Nỗi đau phát âm/giao tiếp sai (10s) -> Cách sửa chuẩn New You (25s) -> CTA nhận tài liệu (7s)."` |
| **P96** | Viết Bài Đăng Facebook Kể Chuyện Thành Quả Học Viên (Case Study Storytelling) | `"Học viên của tôi tên là [Tên], trước đây [Nỗi đau ban đầu], sau [Số tuần] học bài [SLOT CHUYÊN MÔN] nay đã [Kết quả đạt được]. Hãy viết 1 bài đăng Facebook kể chuyện chân thực, xúc động theo cấu trúc Before - After - Bridge để truyền cảm hứng tuyển sinh."` |
| **P97** | Thiết Kế Phiếu Khảo Sát Chất Lượng Giữa Khóa & Xin Feedback Thật | `"Soạn bảng khảo sát ngắn gồm 5 câu hỏi đánh giá chất lượng lớp học giữa khóa sao cho vừa phát hiện sớm những khó khăn của học viên để hỗ trợ kịp thời, vừa khéo léo thu thập được những lời chứng thực (Testimonials) chất lượng cao."` |
| **P98** | Kịch Bản Tin Nhắn Chăm Sóc Học Viên Đang Có Dấu Hiệu Nghỉ Học / Chững Lại | `"Một học viên trong lớp tôi đã vắng mặt 2 buổi và chưa nộp bài tập vì bận công việc và hơi nản. Hãy viết 3 mẫu tin nhắn hỏi thăm riêng tư 1-1 qua Zalo thật tâm lý, tháo gỡ áp lực và đưa ra giải pháp học bù 15 phút siêu gọn để kéo học viên quay lại đường đua."` |
| **P99** | Kịch Bản Giới Thiệu Khóa Học Nâng Cao Tiếp Theo (Upsell / Re-enrollment Script) | `"Khi lớp học hiện tại đi đến tuần thứ 10/12, hãy viết kịch bản 10 phút chia sẻ cuối giờ và tin nhắn gửi riêng giúp 80% học viên hào hứng đăng ký tiếp tục lên Cấp độ tiếp theo của lộ trình mà không cảm thấy bị chèo kéo bán hàng."` |
| **P100** | Prompt "Siêu Kiến Trúc Sư" Tự Sinh Prompt Mới Cho Mọi Tình Huống Sư Phạm | `"Tôi là giáo viên tiếng Anh đang gặp bài toán sư phạm sau: [Mô tả yêu cầu của bạn]. Hãy đóng vai Kỹ sư Prompt Sư phạm (Pedagogical Prompt Engineer), đặt cho tôi 3 câu hỏi làm rõ bối cảnh, sau đó viết giúp tôi 1 câu lệnh Mega Prompt hoàn chỉnh theo chuẩn C.R.E.F.O để giải quyết triệt để bài toán này."` |

---

*Bản quyền thuộc Hệ sinh thái Đào tạo Giáo viên New You English Academy — Bàn giao nguyên bản cho Học viên Truyền Nghề.*
