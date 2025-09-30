# Zenttech Coffee - Landing Page

Landing page cho cửa hàng cà phê Zenttech Coffee với thiết kế vintage và phong cách hoài cổ. Dự án được xây dựng với React + Vite và Tailwind CSS, mang đến trải nghiệm web hiện đại với giao diện cổ điển.

## 🎨 Thiết kế

- **Phong cách**: Vintage, hoài cổ, ấm áp
- **Màu chủ đạo**: Xanh lá vintage (#4A5D23) với tone beige (#F5F1E8)
- **Font chữ**: Playfair Display và Cormorant Garamond
- **Responsive**: Tối ưu cho mọi thiết bị
- **Color Scheme**: Đơn giản với vintage-green và warm-beige

## 🚀 Công nghệ sử dụng

- **React 18** - Framework JavaScript
- **Vite** - Build tool nhanh và hiện đại
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Swiper.js** - Slider/carousel library
- **React Icons** - Icon library chuyên nghiệp
- **ES6 Modules** - Cú pháp module hiện đại

## 📦 Cài đặt và chạy dự án

1. **Cài đặt dependencies:**

   ```bash
   npm install
   ```

2. **Chạy development server:**

   ```bash
   npm run dev
   ```

3. **Build cho production:**

   ```bash
   npm run build
   ```

4. **Preview build:**
   ```bash
   npm run preview
   ```

## 🏗️ Cấu trúc dự án

```
Zent-theme-Cafe/
├── public/
│   ├── coffee-icon.svg     # Favicon tùy chỉnh
│   └── site.webmanifest    # PWA manifest
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Header với logo và navigation
│   │   ├── Hero.jsx        # Hero section với Swiper slider
│   │   ├── Menu.jsx        # Section thực đơn cà phê
│   │   ├── About.jsx       # Section giới thiệu thương hiệu
│   │   ├── Gallery.jsx     # Bộ sưu tập hình ảnh
│   │   ├── Footer.jsx      # Footer với thông tin liên hệ
│   │   └── ScrollToTop.jsx # Auto scroll to top component
│   ├── pages/
│   │   ├── VisitPage.jsx   # Trang "Đến thăm quán"
│   │   ├── StoryPage.jsx   # Trang "Khám phá câu chuyện"
│   │   └── TastePage.jsx   # Trang "Thưởng thức ngay"
│   ├── App.jsx             # Component chính với routing
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles và Tailwind
├── .gitignore             # Git ignore file
├── index.html             # HTML template với SEO meta tags
├── package.json           # Dependencies và scripts
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── README.md              # Documentation
```

## ✨ Tính năng

### 🎨 **UI/UX:**

- ✅ Responsive design cho mọi thiết bị
- ✅ Vintage styling với Tailwind CSS
- ✅ Smooth scrolling navigation
- ✅ Hover effects và animations
- ✅ Mobile-friendly navigation
- ✅ Auto scroll to top khi chuyển trang

### 🖼️ **Media & Content:**

- ✅ Hero slider với Swiper.js (4 slides)
- ✅ Auto-play carousel với custom navigation
- ✅ Modal gallery với hình ảnh
- ✅ Professional icons với React Icons
- ✅ Custom pagination và navigation

### 🚀 **Performance & SEO:**

- ✅ SEO-friendly structure với meta tags
- ✅ Open Graph và Twitter Cards
- ✅ PWA support với web manifest
- ✅ Custom favicon (coffee icon)
- ✅ Optimized fonts loading
- ✅ Theme color cho mobile browsers

### 🧭 **Navigation:**

- ✅ Multi-page routing với React Router
- ✅ 4 trang riêng biệt với nội dung chuyên sâu
- ✅ Active navigation states
- ✅ Smooth page transitions

## 🎯 Pages & Sections

### 📄 **Trang chủ (/):**

1. **Header**: Logo, navigation menu
2. **Hero Slider**: 4 slides với nội dung khác nhau:
   - Slide 1: "Hương vị của ký ức" - Giới thiệu chính
   - Slide 2: "Truyền thống 70 năm" - Câu chuyện thương hiệu
   - Slide 3: "Hạt cà phê tươi" - Chất lượng nguyên liệu
   - Slide 4: "Không gian ấm cúng" - Trải nghiệm quán
3. **Menu**: Danh sách các món cà phê nổi bật
4. **About**: Câu chuyện thương hiệu
5. **Gallery**: Bộ sưu tập hình ảnh
6. **Footer**: Thông tin liên hệ, social media

### 🏪 **Trang Đến thăm quán (/visit):**

- Thông tin liên hệ chi tiết
- Bản đồ vị trí
- Giờ mở cửa
- Tiện ích tại quán
- Gallery không gian quán

### 📖 **Trang Khám phá câu chuyện (/story):**

- Timeline lịch sử 70 năm
- Giá trị cốt lõi
- Hành trình phát triển
- Câu chuyện thương hiệu

### ☕ **Trang Thưởng thức ngay (/taste):**

- Menu cà phê đầy đủ với filter
- Rating và thời gian pha chế
- Ưu đãi đặc biệt
- Đặt hàng online

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Màu sắc

### **Color Palette:**

- `vintage-green`: #4A5D23 (Màu chính - xanh lá vintage)
- `warm-beige`: #F5F1E8 (Màu nền - beige ấm áp)
- `light-brown`: #D4C4A8 (Màu phụ - nâu nhạt)
- `coffee-brown`: #8B4513 (Màu accent - nâu cà phê)

### **Usage:**

- **Text chính**: `text-vintage-green`
- **Text phụ**: `text-warm-beige` hoặc `text-warm-beige/90`
- **Background**: `bg-warm-beige` hoặc `bg-vintage-green`
- **Hover effects**: `hover:text-vintage-green/70` hoặc `hover:bg-warm-beige/90`
- **Opacity variants**: `/20`, `/30`, `/50`, `/70`, `/80`, `/90`

## 📝 Ghi chú

- Tất cả văn bản đều bằng tiếng Việt
- Sử dụng hình ảnh từ Unsplash
- Font chữ được load từ Google Fonts
- Animations được tối ưu cho performance
- Color scheme đã được đơn giản hóa chỉ dùng vintage-green và warm-beige
- Favicon tùy chỉnh với thiết kế tách cà phê
- SEO optimized với meta tags đầy đủ
- PWA ready với web manifest

## 🔧 Development

### **Scripts:**

```bash
npm run dev      # Development server (port 3030)
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Lint code
```

### **Port Configuration:**

- Development server chạy trên port **3030**
- Tự động mở browser khi start

---

**Zenttech Coffee** - Hương vị của ký ức trong từng tách cà phê ☕

_Dự án được xây dựng với ❤️ bằng React + Vite + Tailwind CSS_
