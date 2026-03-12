# 🤖 Phase 1: Chuẩn hóa UI & Sửa lỗi hiển thị (UI Polish & Bug Fixes)

## 📌 Ngữ cảnh dự án (Project Context)
- **Tên dự án:** AIoT Hydroponic Strawberry Farming Dashboard
- **Tech Stack:** Next.js (TypeScript), Tailwind CSS v4, Lucide React.
- **Theme Colors:** Primary `#2D5A27`, Secondary `#72BF44`, Background `#F9FBF9`.
- **Mục tiêu Phase 1:** Sửa các lỗi layout, chuẩn hóa sự đồng đều của các thành phần (Cards, Images, Buttons) và cải thiện khả năng đọc (Readability) dựa trên bản thiết kế, KHÔNG thay đổi logic nghiệp vụ.

## 🛑 Quy tắc cốt lõi cho AI (Strict Rules)
1. **Tuân thủ cấu trúc Layout:** Giữ nguyên cấu trúc Component, chỉ cập nhật các class Tailwind.
2. **Chuẩn hóa Padding/Margin:** Sử dụng hệ thống spacing đồng nhất (ưu tiên `p-6` hoặc `p-5` cho nội dung bên trong Card). Không mix lộn xộn.
3. **Responsive First:** Mọi thay đổi phải đảm bảo không bị vỡ layout trên Mobile và Tablet.

## ✅ Danh sách nhiệm vụ cần xử lý (Task Checklist)

### 1. Chuẩn hóa Grid, Cards & Images (Quan trọng nhất - Đặc biệt ở trang AI Lab)
- [x] **Khung Hình Ảnh (Image Crop):** Ép tất cả hình ảnh trong card (ví dụ ảnh lá cây) về cùng tỷ lệ. Sử dụng `aspect-video` (hoặc chiều cao cố định `h-48`) kết hợp với `object-cover` và `w-full` để ảnh không bị méo. Thẻ wrap ảnh phải có `overflow-hidden`.
- [x] **Nút bấm thẳng hàng (Sticky Footer):** Chuyển các thẻ Card thành `flex flex-col h-full`. Bổ sung class `mt-auto` vào thẻ `div` bọc cụm nút bấm (như "View Analysis") để ép các nút luôn nằm thẳng hàng dưới đáy thẻ, bất kể nội dung bên trên dài hay ngắn.
- [ ] **Trạng thái rỗng (Empty State):** Tại thẻ không có hình ảnh (chỉ có icon), thiết lập `min-h-[192px]` (tương đương chiều cao các ảnh khác) và thêm `bg-gray-100 flex items-center justify-center` để giữ vững cấu trúc lưới (Masonry/Grid).

### 2. Sửa lỗi Typography & Kích thước hiển thị
- [ ] **Sidebar Navigation:** Cập nhật lại chiều rộng của Sidebar từ `20px` (hiện tại quá nhỏ để click) lên chuẩn `w-20` (80px) cho menu thu gọn.
- [ ] **Khung Chat Plant Doctor:** Giới hạn chiều rộng của tin nhắn AI để dễ đọc hơn. Thêm class `max-w-[75%]` hoặc `max-w-[80%]` vào các thẻ chứa bong bóng chat.
- [ ] **Độ tương phản Quick Tips:** Tăng font-weight (ví dụ `font-medium`) hoặc làm đậm màu chữ ở phần Quick Tips (nền vàng) để đảm bảo độ tương phản tốt khi xem ngoài trời.

### 3. Tối ưu Trọng lượng thị giác (Visual Weight)
- [ ] **Buttons:** Điều chỉnh lại các nút đang bị quá to hoặc full-width không cần thiết (như nút "Quick AI Scan"). Đảm bảo có padding chuẩn `px-6 py-2.5` và bo góc `rounded-xl` đồng nhất.

---
