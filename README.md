# Personal Glass Portfolio

Website ReactJS + Vite, mobile-first, Glassmorphism, hai trang `/` và `/portfolio`.

## Yêu cầu
- Node.js 18 trở lên (khuyên dùng Node.js 20+)

## Chạy local
```bash
npm install
npm run dev
```
Mở địa chỉ Vite hiển thị trong terminal (thường là http://localhost:5173).

## Build
```bash
npm run build
npm run preview
```

## Chỉnh nội dung
- `src/data/profile.js`: tên, mô tả, mạng xã hội, kỹ năng, kinh nghiệm, dự án.
- Đặt ảnh đại diện trong `public/avatar.jpg`, rồi đổi `avatar: '/avatar.jpg'` trong `profile.js`.
- `src/context/ThemeContext.jsx`: 5 bảng màu và màu mặc định.
- `src/styles.css`: giao diện, hiệu ứng và responsive.

## Deploy
Vercel: Import Git repository → framework Vite → build command `npm run build` → output `dist`.
Netlify: build command `npm run build`, publish directory `dist`. Cấu hình SPA fallback đã có tại `public/_redirects`.

Lưu ý: các URL `example.com` và link mạng xã hội hiện là dữ liệu mẫu, hãy thay bằng URL thực tế.
