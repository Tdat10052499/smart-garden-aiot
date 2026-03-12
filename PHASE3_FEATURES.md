# 🚀 Phase 3: Phát triển Tính năng nâng cao & Tối ưu Trải nghiệm (Advanced Features & UX Optimization)

## 📌 Ngữ cảnh dự án (Project Context)
- **Mục tiêu Phase 3:** Nâng cấp dashboard từ mức độ "chỉ xem" (read-only) lên "tương tác hai chiều" (interactive), bổ sung các tính năng cần thiết cho môi trường vận hành nông trại thực tế (Offline state, Dark Mode, Đa ngôn ngữ, Xuất dữ liệu).
- **Yêu cầu kỹ thuật:** Sử dụng React Context hoặc thư viện quản lý state (Zustand/Redux) cho các trạng thái toàn cục (Theme, Ngôn ngữ). Cấu hình Next.js để hỗ trợ PWA (Progressive Web App).

## 🛑 Quy tắc cốt lõi cho AI (Strict Rules)
1. **Quản lý State Toàn cục:** Khi làm Dark Mode hoặc Đa ngôn ngữ, phải đảm bảo state được lưu lại vào `localStorage` hoặc cookie để không bị mất khi reload trang.
2. **Graceful Degradation:** Mọi tính năng liên quan đến fetch data (Camera, Cảm biến) phải có fallback UI (Giao diện thay thế) khi mất mạng hoặc API lỗi, tuyệt đối không để vỡ trang (white screen of death).
3. **Tailwind Dark Mode:** Sử dụng strategy `class` của Tailwind CSS cho Dark mode (dùng prefix `dark:`). Thiết lập bảng màu Dark Mode nhất quán với màu Forest Green chủ đạo.

## ✅ Danh sách nhiệm vụ cần xử lý (Task Checklist)

### 1. Nút Điều khiển IoT (Quick Actions)
- [ ] **Bảng điều khiển mini (Home Page):** Thêm một phần "Quick Controls" bên dưới các thẻ thông số cảm biến hoặc góc trên của biểu đồ.
- [ ] **Thành phần UI:** Tạo các Toggle Switch (Công tắc) cho: `Bơm dinh dưỡng (Nutrient Pump)`, `Quạt thông gió (Ventilation)`, và `Đèn LED (Grow Lights)`. 
- [ ] **Logic Tương tác:** Có trạng thái `loading` (spinner nhỏ trên nút) khi đang gửi lệnh đến ESP32, sau đó cập nhật trạng thái `success/error`.

### 2. Xử lý trạng thái Mất kết nối (Offline/Error States)
- [ ] **Camera Feed Fallback:** Khi URL stream ESP32-CAM bị lỗi, thay thế khung video bằng một Empty State UI: Nền xám/đen mờ, icon `WifiOff`, và dòng chữ *"Mất tín hiệu camera. Đang kết nối lại..."* kèm nút `Retry`.
- [ ] **Sensor Cards Offline:** Nếu dữ liệu cảm biến (TDS, Nhiệt độ) không cập nhật quá 5 phút, đổi màu icon thành xám, làm mờ chữ số hiện tại và hiển thị tag báo hiệu "Offline".

### 3. Đa ngôn ngữ (Localization - EN/VI)
- [ ] **Nút chuyển đổi (Language Toggle):** Thêm một Dropdown hoặc Toggle (EN / VN) ở Sidebar hoặc phần Header/Settings.
- [ ] **Đồng bộ nội dung:** Thiết lập cấu trúc file dictionary (json) hoặc dùng Context đơn giản để chuyển đổi các text tĩnh (như "Dashboard", "Settings", "Care Guide") sang tiếng Việt, đồng bộ với ngôn ngữ giao tiếp của Plant Doctor.

### 4. Chế độ Ban đêm (Dark Mode)
- [ ] **Cấu hình Tailwind:** Kích hoạt `darkMode: 'class'` trong `tailwind.config.ts`. (Gợi ý dùng `next-themes` để tránh lỗi hydration mismatch).
- [ ] **Bảng màu Dark (Dark Palette):** - Background chính: `dark:bg-gray-900`
  - Card Background: `dark:bg-gray-800/80`
  - Text: `dark:text-gray-100` và `dark:text-gray-300`
  - Các màu Accent (Green, Amber, Red) giữ nguyên nhưng có thể tăng sáng (lightness) để đảm bảo độ tương phản trên nền tối.

### 5. Xuất báo cáo (Data Export) & PWA
- [ ] **Nút Export (AI Lab / Home):** Thêm nút `Download Report` (dùng icon `DownloadCloud`). Tạo logic cho phép xuất dữ liệu lịch sử quét AI hoặc thông số cảm biến ra file `.CSV` cơ bản.
- [ ] **PWA Manifest:** Thêm file `manifest.json` và cấu hình các thẻ `<meta>` trong `app/layout.tsx` (như `theme-color`, `apple-mobile-web-app-capable`) để người dùng có thể "Add to Home Screen" trên điện thoại.

---
