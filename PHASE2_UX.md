# 🤖 Phase 2: Cải thiện UX & Thêm Animation

## 📌 Ngữ cảnh dự án (Project Context)
- **Mục tiêu Phase 2:** Thêm các tương tác vi mô (micro-interactions), hiệu ứng chuyển động mượt mà và các tín hiệu thị giác (visual cues) để website sống động, mang lại cảm giác "App-like" chuyên nghiệp.
- **Yêu cầu kỹ thuật:** Sử dụng Tailwind CSS transition/animate có sẵn. Các hiệu ứng phải mượt (`duration-300`, `ease-in-out`) và không làm giảm hiệu suất render.

## ✅ Danh sách nhiệm vụ cần xử lý (Task Checklist)

### 1. Tín hiệu Tương tác (Interactive Visual Cues)
- [ ] **Accordion & Thẻ mở rộng (Care Guide):** Thêm hiệu ứng hover đổi màu nền siêu nhẹ (`hover:bg-gray-50`) cho toàn bộ thanh tiêu đề của thẻ. Xoay icon chevron (`rotate-180`) mượt mà khi mở rộng/thu gọn.
- [ ] **Quick Question Chips (Plant Doctor):** Biến các text tĩnh "TDS bao nhiêu là tốt?" thành các nút bấm rõ ràng. Thêm viền `border border-gray-200`, nền `bg-white`, hiệu ứng `hover:border-[#72BF44] hover:shadow-sm hover:-translate-y-0.5 transition-all cursor-pointer`.
- [ ] **Hover trên Card:** Thêm hiệu ứng nổi nhẹ cho các card chẩn đoán (AI Lab): `hover:shadow-md hover:-translate-y-1 transition-all duration-300`.

### 2. Trạng thái Loading & Phản hồi (Feedback States)
- [ ] **Live Camera Feed:** Thêm hiệu ứng pulsing (nhấp nháy) cho chấm đỏ/xanh báo hiệu "LIVE". Dùng class `animate-pulse` của Tailwind.
- [ ] **Quét AI (Quick AI Scan):** Tạo hiệu ứng thanh quét (gradient sweep) chạy từ trên xuống dưới màn hình camera trong 3 giây khi nhấn nút quét.
- [ ] **Chatbot Typing Indicator:** Khi AI đang trả lời, hiển thị hiệu ứng 3 dấu chấm nhảy so le (staggered bouncing dots). Sử dụng `@keyframes` hoặc các class delay (`animation-delay-100`, `200`, `300`).

### 3. Tối ưu Trải nghiệm thị giác (Visual Experience)
- [ ] **Scroll/Tab Transitions:** Thêm hiệu ứng `fade-in` nhẹ nhàng (`animate-in fade-in duration-300`) khi người dùng chuyển đổi giữa tab "Care Guide" và "Plant Doctor".
- [ ] **Glassmorphism Enhancement:** Đảm bảo các thẻ nổi (overlay/modal) có độ trong suốt và mờ chuẩn: `bg-white/80 backdrop-blur-md border border-white/20`.

---
