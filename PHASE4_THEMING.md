# 🎨 Phase 4: Thiết lập Hệ thống Multi-Theme (CSS Variables & data-theme)

## 📌 Ngữ cảnh dự án (Project Context)
- **Vấn đề hiện tại:** Chế độ Dark Mode dùng class `dark:` của Tailwind đang gây lỗi nghiêm trọng về độ tương phản (chữ xanh/đen trên nền tối, card màu sáng trên nền đen).
- **Mục tiêu Phase 4:** Xóa bỏ hoàn toàn cách dùng class `dark:` thủ công. Chuyển sang kiến trúc **CSS Variables** điều khiển qua thuộc tính `data-theme` gắn trên thẻ `<html>`.
- **Yêu cầu:** Xây dựng 3 bộ theme chuẩn hóa. Các component chỉ được dùng class ngữ nghĩa (semantic classes) như `bg-background`, `bg-surface`, `text-primary`.

## 🛑 Quy tắc cốt lõi cho AI (Strict Rules)
1. **Xóa bỏ Hard-coded Colors:** AI phải quét toàn bộ dự án và xóa các class màu cứng như `bg-white`, `bg-[#F9FBF9]`, `text-[#2D5A27]`, và toàn bộ các class bắt đầu bằng `dark:`.
2. **Setup Tailwind Config:** Mở rộng `tailwind.config.ts` để map các màu (colors) tới các CSS Variables tương ứng (ví dụ: `background: 'var(--background)'`).
3. **State Management:** Xây dựng một Theme Provider (hoặc dùng `next-themes`) để lưu trạng thái theme người dùng chọn vào `localStorage`.

---

## 🎨 Bảng Mã Màu CSS Variables (Vui lòng setup vào `globals.css`)

### 1. Theme: `[data-theme="nature-light"]` (Mặc định)
Tối ưu cho việc xem ngoài trời, dưới ánh sáng tự nhiên.
- `--background`: `#F9FBF9` (Off-white pha xanh lá nhẹ)
- `--surface`: `#FFFFFF` (Trắng tinh cho thẻ Card)
- `--text-primary`: `#1F2937` (Xám đậm - Text chính)
- `--text-secondary`: `#6B7280` (Xám vừa - Text phụ/Label)
- `--border`: `#E5E7EB` (Xám nhạt - Viền thẻ)
- `--accent-primary`: `#2D5A27` (Deep Forest Green - Nút bấm chính)
- `--accent-secondary`: `#72BF44` (Leaf Green - Icon/Badge/Hover)
- `--accent-text`: `#FFFFFF` (Chữ trên nền nút bấm chính)

### 2. Theme: `[data-theme="midnight-forest"]` (Chế độ Ban đêm)
Giảm mỏi mắt trong môi trường tối, giữ độ tương phản chuẩn. Không dùng màu `#000000`.
- `--background`: `#020617` (Slate 950 - Nền tổng tối sâu)
- `--surface`: `#0F172A` (Slate 900 - Nền thẻ Card tối)
- `--text-primary`: `#F8FAFC` (Slate 50 - Trắng sáng cho tiêu đề/chỉ số)
- `--text-secondary`: `#94A3B8` (Slate 400 - Xám dịu cho Label)
- `--border`: `#1E293B` (Slate 800 - Viền thẻ tối)
- `--accent-primary`: `#10B981` (Emerald 500 - Xanh lá sáng để nổi bật trên nền tối)
- `--accent-secondary`: `#34D399` (Emerald 400 - Icon/Badge)
- `--accent-text`: `#020617` (Chữ đen/tối trên nền nút Emerald)

### 3. Theme: `[data-theme="strawberry-sunset"]` (Warm Mode)
Bảo vệ mắt khỏi ánh sáng xanh, phù hợp môi trường nhà màng dùng đèn LED (Grow Lights).
- `--background`: `#0C0A09` (Stone 950 - Nâu đen ấm)
- `--surface`: `#1C1917` (Stone 900 - Nâu xám đậm cho thẻ)
- `--text-primary`: `#FAFAF9` (Stone 50 - Trắng ngà)
- `--text-secondary`: `#A8A29E` (Stone 400 - Xám nâu)
- `--border`: `#292524` (Stone 800 - Viền thẻ)
- `--accent-primary`: `#E11D48` (Rose 600 - Đỏ dâu tây cho nút bấm chính)
- `--accent-secondary`: `#FB7185` (Rose 400 - Icon/Badge)
- `--accent-text`: `#FFFFFF` (Chữ trắng trên nền đỏ)

---

## ✅ Danh sách nhiệm vụ thực thi (Task Checklist)

### Task 1: Thiết lập Hệ thống CSS (CSS Setup)
- [ ] Khai báo biến trong `app/globals.css`. Thêm `:root` (map với nature-light) và các selector `[data-theme="..."]`.
- [ ] Cập nhật `tailwind.config.ts` phần `theme.extend.colors`. Thêm các key: `background`, `surface`, `text-primary`, `text-secondary`, `border-color`, `accent-primary`, `accent-secondary`, `accent-text`.

### Task 2: Refactor Code UI (Clean & Replace)
- [ ] Quét toàn bộ component hiện có.
- [ ] Thay thế các class tĩnh:
  - `bg-[#F9FBF9]`, `bg-white` -> `bg-background`, `bg-surface`.
  - `text-[#2D5A27]`, `text-gray-900` -> `text-primary`, `text-secondary`.
  - `border-gray-200` -> `border-border-color`.
  - Thay màu nền các nút "Quick AI Scan", "Calculate" thành `bg-accent-primary text-accent-text`.
- [ ] Rà soát biểu đồ Recharts: Cập nhật màu `stroke` và `fill` liên kết với các CSS Variable.

### Task 3: Xây dựng Theme Switcher Component
- [ ] Tạo component `ThemeSelector.tsx`.
- [ ] Thiết kế một Dropdown hoặc dãy 3 nút bấm nhỏ trong phần `Settings` hoặc Sidebar để người dùng chọn 1 trong 3 theme.
- [ ] Lưu lựa chọn vào `localStorage` và apply attribute `data-theme` vào thẻ `<html>` thông qua `useEffect` hoặc `next-themes`.

