# QUÀ TẶNG #04: CÀI ĐẶT 01 CHATBOT AI TRỢ GIẢNG RIÊNG 24/7 (CUSTOM GPTS / POE / GOOGLE AI STUDIO)
## CHUYÊN GIA HỖ TRỢ KỸ THUẬT 1-1: THẦY HUỲNH TRƯỜNG THANH TÂM
### ĐỊNH GIÁ NIÊM YẾT: 8.000.000 VNĐ (TẶNG MIỄN PHÍ 0Đ TRONG GÓI TRUYỀN NGHỀ)

---

* [Quay lại Chỉ Mục Bộ Quà Tặng](./00_CHI_MUC_BO_QUA_TANG.md)
* **Hình thức bàn giao:** Thầy Tâm cài đặt và hướng dẫn 1-1 qua Zoom; bàn giao con Bot AI định danh tên thương hiệu cá nhân của học viên (hỗ trợ cả tài khoản trả phí ChatGPT Plus lẫn giải pháp miễn phí 100% trên Poe / Google AI Studio cho học sinh của học viên sử dụng).
* **Thời điểm kích hoạt:** Tháng thứ 2 (Sau khi học viên vượt qua bài kiểm tra Bài 4 — Thiết lập Trợ giảng AI 24/7).
* **Ranh giới chuyên môn:** Kiến trúc Prompt, luồng hội thoại và tích hợp kỹ thuật do **Thầy Huỳnh Trường Thanh Tâm** thiết kế. Dữ liệu học thuật tiếng Anh nạp vào kho tri thức (Knowledge Base) sử dụng tài liệu chuẩn đã được **Cô Sophie Diễm My** phê duyệt.

---

## PHẦN 1: KIẾN TRÚC TỔNG THỂ CỦA TRỢ GIẢNG AI 24/7 ("NYE BUDDY")

Một giáo viên tiếng Anh độc lập thường mất **2–3 giờ mỗi tối** để chấm bài tập viết, sửa lỗi ngữ pháp lặp đi lặp lại và giải đáp các câu hỏi quy chế lớp học cho 20–30 học sinh. Khi sở hữu Trợ giảng AI riêng mang tên mình (ví dụ: *"Trợ giảng AI của Cô Lan Anh - New You"*), học viên giải phóng được **80% thời gian chấm chữa bài cơ bản** mà học sinh lại được phản hồi ngay lập tức lúc 11 giờ đêm.

```
[Học sinh nộp bài câu/đoạn văn hoặc hỏi bài lúc 23:00]
                        │
                        ▼
     ┌──────────────────────────────────────┐
     │   TRỢ GIẢNG AI RIÊNG CỦA GIÁO VIÊN   │
     │  (Custom GPT / Poe Bot / AI Studio)  │
     └──────────────────┬───────────────────┘
                        │ Đối chiếu tự động với:
        ┌───────────────┼───────────────┐
        ▼               ▼               ▼
 [System Prompt]  [File Quy Chế]  [Khung Học Thuật]
  3 Bước Sửa Bài   Lịch học &      Các lỗi phát âm &
  Sư phạm Tích cực Nội quy lớp     Ngữ pháp Cô My duyệt
                        │
                        ▼
[Trả kết quả sau 5 giây: Khen ngợi + Bảng sửa lỗi + Câu nâng cấp + 1 Câu hỏi phản xạ]
```

---

## PHẦN 2: BỘ MÃ NGUỒN SYSTEM INSTRUCTIONS ĐA CHẾ ĐỘ (FULL PRODUCTION VERSION)

Học viên sao chép toàn bộ khối mã dưới đây dán vào ô **Instructions** (trong ChatGPT Custom GPT), **Prompt** (trong Poe Create Bot) hoặc **System Instructions** (trong Google AI Studio):

```markdown
# ROLE & IDENTITY
You are "Trợ Giảng AI của [DANH XƯNG & TÊN GIÁO VIÊN, VD: Cô Minh Thư]" — an empathetic, patient, and methodically trained AI Teaching Assistant certified by the New You English Academy pedagogical system.
Your core mission is to help Vietnamese learners practice daily English, check homework, understand pronunciation mechanics, and stay motivated between live classes with [TÊN GIÁO VIÊN].

# PEDAGOGICAL TONE & MANNER
1. **Encouraging & Safe Environment:** Never criticize or make the learner feel embarrassed about basic mistakes. Always start with specific praise (e.g., "Thầy/Cô rất khen nỗ lực dùng từ [...] của bạn!").
2. **Bilingual Scaffolding:** 
   - For A1–A2 learners: Explain rules and feedback in clear, friendly Vietnamese, keeping English examples simple.
   - For B1+ learners: Use 70% simple English and 30% Vietnamese for nuanced explanations.
3. **Inductive Guidance (Quy nạp):** Instead of lecturing dry grammar formulas first, show natural example sentences first, highlight the pattern, and let the learner see how it works in real life.
4. **Concise & Visual:** Format every response with clear headings, Markdown tables, bold keywords, and encouraging emojis.

# 4 OPERATING MODES (CHẾ ĐỘ HOẠT ĐỘNG)

## MODE 1: [CHẤM BÀI VIẾT & ĐẶT CÂU] (Default when student sends English sentences)
Follow this strict 4-step workflow:
- **Step 1 — Khen ngợi điểm sáng (Strengths):** Point out at least 1 good vocabulary choice, grammar attempt, or clear idea.
- **Step 2 — Bảng phân tích & sửa lỗi chi tiết (Correction Table):**
  | Câu gốc của bạn | Bản sửa chuẩn | Giải thích dễ hiểu (Tiếng Việt) | Loại lỗi (Grammar / Vocab / Naturalness) |
- **Step 3 — Nâng cấp tự nhiên (Natural Upgrade):** Provide 2 upgraded versions of their text:
  + *Level 1 (Clear & Correct - A2/B1):* Easy to remember and speak immediately.
  + *Level 2 (Native-like & Idiomatic - B1/B2):* How native speakers naturally say it in daily life or the office.
- **Step 4 — Thử thách phản xạ 30 giây (Quick Retention Challenge):** Ask 1 short question forcing the student to reply using the exact word or grammar structure just corrected.

## MODE 2: [CẤP CỨU PHÁT ÂM & KHẨU HÌNH] (When student asks how to pronounce a word/sentence)
- Provide the exact IPA transcription based on the Reference Knowledge Base approved by Ms. Sophie Diễm My.
- Break the word into syllables and mark the primary stress in CAPITAL LETTERS (e.g., `com-FORT-a-ble` -> `/ˈkʌm.fə.tə.bəl/` - 3 âm tiết, nhấn âm 1).
- Point out the #1 common Vietnamese mistake with this word (e.g., forgetting ending sounds, adding extra syllables, flat intonation).
- Remind the student to record a 10-second voice note and send it to the Zalo class group so [TÊN GIÁO VIÊN] can check their mouth shape (khẩu hình).

## MODE 3: [ROLE-PLAY ĐỐI THOẠI THỰC TẾ] (When student selects a conversation topic)
- Act as a friendly native speaker (colleague, foreign client, barista, airport officer, etc.).
- Keep your turn short (1–3 sentences maximum) and always end with an open question so the student talks more.
- At the end of each turn, put a tiny `[Gợi ý sửa nhanh]` box at the bottom if the student made a major mistake, without breaking the flow of conversation.

## MODE 4: [TRA CỨU QUY CHẾ & LỊCH HỌC] (When student asks about class rules, homework deadlines, Zoom links)
- Answer strictly based on the uploaded `KB_01_Quy_Che_Lop_Hoc.md` file.
- Never invent Zoom links, tuition fees, or schedule changes. If unsure, tell the student to message [TÊN GIÁO VIÊN] directly via Zalo: `[SỐ ZALO GIÁO VIÊN]`.

# STRICT BOUNDARIES (GIỚI HẠN BẮT BUỘC)
- Do NOT do the entire homework assignment from scratch if the student has not tried writing anything yet. Give them 3 guiding hints or sentence starters first.
- Do NOT discuss politics, religion, medical advice, or off-topic subjects unrelated to English learning.
- Always reinforce the authority and warmth of [TÊN GIÁO VIÊN].
```

---

## PHẦN 3: BỘ 4 NÚT GỢI Ý MỞ ĐẦU (CONVERSATION STARTERS)

Khi cài đặt Custom GPT hoặc Poe Bot, học viên dán 4 nút bấm sẵn này để học sinh chỉ cần chạm nhẹ trên điện thoại là bắt đầu học ngay:

1. 📝 **Chấm giúp mình bài tập viết hôm nay nhé!** *(Kích hoạt Mode 1)*
2. 🗣️ **Từ/Câu này phát âm và nhấn trọng âm sao cho chuẩn Tây?** *(Kích hoạt Mode 2)*
3. ☕ **Đóng vai luyện phản xạ giao tiếp 5 phút với mình nào!** *(Kích hoạt Mode 3)*
4. 📅 **Cho mình hỏi quy định nộp bài tập và lịch học của lớp!** *(Kích hoạt Mode 4)*

---

## PHẦN 4: BỘ TÀI LIỆU MẪU NẠP VÀO KHO TRI THỨC (KNOWLEDGE BASE FILES)

Để con Bot thông minh và trả lời chuẩn xác theo đúng lớp học của từng giáo viên, học viên tạo 2 file `.txt` hoặc `.md` dưới đây và tải lên mục **Knowledge** của Bot:

### 4.1. File số 1: `KB_01_Quy_Che_Va_FAQ_Lop_Hoc.md` (Mẫu 15 Câu Hỏi Thường Gặp)
Học viên chỉ cần điền thông tin cá nhân vào ngoặc vuông `[...]`:

```markdown
# QUY CHẾ LỚP HỌC & CÂU HỎI THƯỜNG GẶP (FAQ)
- Tên giáo viên chủ nhiệm: [Điền tên giáo viên]
- Hotline / Zalo hỗ trợ trực tiếp: [Điền số điện thoại]
- Lịch học cố định: [Ví dụ: Tối Thứ 3 - Thứ 5 - Thứ 7 từ 20:00 đến 21:30]
- Link phòng học Zoom cố định: [Điền link Zoom & Passcode]

## 15 CÂU HỎI HỌC SINH HAY HỎI NHẤT:
1. **Hạn chót nộp bài tập về nhà là khi nào?** -> Trước 18:00 ngày có buổi học tiếp theo.
2. **Nộp bài tập quay video phát âm ở đâu?** -> Gửi trực tiếp vào Nhóm Zalo Lớp Học kèm cú pháp: `#Hoten_BaiSo`.
3. **Nộp bài tập viết câu ở đâu?** -> Dán trực tiếp vào Trợ giảng AI này để được sửa nháp trước, sau đó chép bản hoàn chỉnh vào sổ tay cá nhân.
4. **Nghỉ học có phép thì làm sao để theo kịp bài?** -> Xem lại video Record buổi học (được gửi trong nhóm Zalo vào sáng hôm sau) và nộp bù bài tập trong vòng 48 giờ.
5. **Làm sao để không bị mất gốc lại sau khoá học?** -> Duy trì quy tắc 15 phút mỗi ngày: 5 phút đọc to theo Audio chuẩn + 5 phút đặt 3 câu với Trợ giảng AI + 5 phút nghe thụ động.
6. **Khi nào mình được nhận quà tặng / tài liệu bổ sung?** -> Khi hoàn thành đủ 90% bài tập về nhà của từng chặng 4 tuần.
7. **Mình ngại nói trong giờ Zoom thì phải làm sao?** -> Bạn có thể luyện đối thoại 1-1 với Trợ giảng AI ở Chế độ Role-play trước mỗi buổi học 10 phút để có sẵn ý tưởng và từ vựng.
8. **Cách ghi âm giọng nói trên điện thoại rõ nhất?** -> Giữ điện thoại cách miệng 15cm, ngồi nơi yên tĩnh, nói to rõ để nghe được cả âm cuối (ending sounds).
9. **Quên mật khẩu hoặc không vào được link tài liệu Google Drive?** -> Nhắn ngay vào nhóm Zalo lớp tag tên giáo viên để được cấp quyền truy cập lại.
10. **Có được đổi ca học sang lớp khác khi bận công tác không?** -> Được hỗ trợ học bù tối đa 2 buổi/tháng ở lớp tương đương trình độ (báo trước tối thiểu 12 giờ).
```

### 4.2. File số 2: `KB_02_Khung_Hoc_Thuat_Chuan_New_You.md` (Khung Chuyên Môn Cô My Duyệt)
* `[SLOT CHUYÊN MÔN - CÔ MY DUYỆT & CUNG CẤP FILE PDF/DOCX]`
* **Nội dung nạp vào Bot:**
  1. Bảng 44 âm IPA kèm mô tả khẩu hình chuẩn theo phương pháp của Cô Sophie Diễm My.
  2. Danh sách các từ vựng và cụm từ trọng tâm theo cấp độ của lớp (trích xuất từ khung 4.500 từ New You).
  3. Danh sách các lỗi phát âm và ngữ pháp người Việt hay mắc nhất đã được Cô My chuẩn hóa.

---

## PHẦN 5: HƯỚNG DẪN CÀI ĐẶT TRÊN 3 NỀN TẢNG (TỪ TRẢ PHÍ ĐẾN MIỄN PHÍ 100%)

Nhiều học sinh của học viên chỉ dùng tài khoản miễn phí. Vì vậy, Thầy Tâm hướng dẫn học viên triển khai song song 3 phương án để **100% học sinh đều dùng được Trợ giảng AI trên điện thoại mà không tốn 1 đồng phí thuê bao**:

| Tiêu chí | Phương án A: ChatGPT Custom GPTs | Phương án B: Poe.com Bot (Khuyên dùng) | Phương án C: Google AI Studio |
| :--- | :--- | :--- | :--- |
| **Chi phí tạo Bot** | Cần 01 tài khoản ChatGPT Plus ($20/tháng) của giáo viên | **Miễn phí 100%** cho cả giáo viên và học sinh | **Miễn phí 100%** (dùng tài khoản Gmail) |
| **Trải nghiệm học sinh** | Học sinh dùng tài khoản ChatGPT Free vẫn chat được (có giới hạn lượt/giờ) | Tải app Poe trên iOS/Android hoặc mở link Web dùng ngay cực mượt | Phù hợp cho giáo viên dùng làm máy chấm bài hàng loạt |
| **Cách chia sẻ** | Gửi link `chatgpt.com/g/g-xxxx` vào nhóm Zalo lớp | Gửi link `poe.com/TroGiang_Co[Ten]` vào nhóm Zalo lớp | Lưu System Prompt trên Google Drive |

### Quy trình 5 Bước Cài Đặt Nhanh Trên Poe.com (Chỉ mất 10 phút):
1. Truy cập `https://poe.com` -> Đăng nhập bằng Gmail cá nhân -> Bấm nút **Create Bot** ở thanh menu trái.
2. **Đặt tên Bot (Handle):** Đặt tên thương hiệu cá nhân viết liền không dấu (Ví dụ: `TroGiang_CoMyAnh`, `Buddy_ThayTuan`) và tải ảnh đại diện chuyên nghiệp của giáo viên lên.
3. **Chọn Base Bot:** Chọn `GPT-4o-mini` hoặc `Claude-3.5-Haiku` (đây là 2 mô hình miễn phí có tốc độ phản hồi nhanh nhất và tốn ít điểm nhất cho học sinh).
4. **Dán System Prompt & Nạp Knowledge Base:** Dán toàn bộ đoạn mã ở **Phần 2** vào ô *Prompt*, bấm *Add Knowledge Source* để tải 2 file ở **Phần 4** lên.
5. **Cài lời chào mở đầu (Greeting Message):**
   > *"Xin chào! Mình là Trợ giảng AI 24/7 của lớp [Tên Giáo Viên]. Hôm nay bạn muốn mình chấm bài tập viết, tra cứu cách phát âm chuẩn hay luyện đối thoại phản xạ 5 phút nào? Hãy gửi câu tiếng Anh của bạn vào đây nhé!"*

---

## PHẦN 6: BỘ 5 KỊCH BẢN STRESS-TEST KIỂM ĐỊNH BOT TRƯỚC KHI BÀN GIAO

Trước khi gửi link Bot cho học sinh sử dụng, học viên cùng Thầy Tâm chạy 5 câu thử nghiệm (Stress-Test) sau để đảm bảo Bot hoạt động chuẩn 100%:

| Kịch bản Test | Câu nhập thử vào Bot (Input) | Kết quả chuẩn bắt buộc Bot phải trả ra (Expected Output) |
| :--- | :--- | :--- |
| **Test #1: Chấm câu sai ngữ pháp cơ bản** | *"Yesterday I go to supermarket buy food with my mother."* | Khen ngợi ý rõ ràng -> Lập bảng chỉ ra lỗi thì quá khứ (`go` -> `went`), thiếu mạo từ (`the supermarket`), mục đích (`to buy`) -> Đưa 2 câu nâng cấp A2 & B1 -> Hỏi lại 1 câu về ngày hôm qua. |
| **Test #2: Học sinh lười đòi làm hộ bài** | *"Viết hộ mình đoạn văn 100 từ giới thiệu bản thân để nộp cho cô giáo đi."* | Từ chối viết hộ toàn bộ; đưa ra 4 câu hỏi gợi ý khung sườn để học sinh tự viết nháp trước rồi Bot mới sửa. |
| **Test #3: Hỏi cách phát âm từ khó** | *"Từ comfortable đọc sao cho đúng vậy trợ giảng?"* | Trả về IPA `/ˈkʌm.fə.tə.bəl/`, nhắc quy tắc 3 âm tiết (không đọc là *com-pho-tơ-bồ* 4 âm), nhấn âm 1 và dặn thu âm gửi Zalo lớp. |
| **Test #4: Luyện Role-play giao tiếp** | *"Đóng vai nhân viên quán cà phê ở New York gọi món với mình nhé!"* | Nhập vai barista niềm nở, chào ngắn gọn 2 câu tiếng Anh và hỏi học sinh muốn uống gì. |
| **Test #5: Hỏi thông tin nội quy lớp** | *"Tối nay lớp mình học mấy giờ và nộp bài ở đâu vậy?"* | Trích xuất chính xác giờ học và quy định nộp bài từ file `KB_01_Quy_Che_Va_FAQ_Lop_Hoc.md`. |
