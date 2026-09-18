# The Performance Lab

A modern sports performance website built with React and CSS, inspired by professional sports science and performance training platforms.

The project focuses on creating a premium, animation-driven user experience with scroll interactions, parallax effects, responsive layouts, and modern UI design.

## 🚀 Live Demo

[View Live Demo](YOUR_LIVE_DEMO_URL)

## 🛠️ Tech Stack

- React.js
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3
- CSS Animations
- Responsive Design

## ✨ Features

- Modern and clean sports performance UI
- Fully responsive design
- Fixed navigation bar
- Scroll-based navbar styling
- Smooth scrolling
- Scroll-based animations
- Parallax effects
- Animated statistics section
- Performance in Motion section
- Image animations and transitions
- Hover effects
- Interactive CTA buttons
- Newsletter section
- Modern footer layout
- Component-based React architecture
- Lazy loading with React `lazy()`
- Code splitting with `Suspense`
- Optimized WebP images
- Production performance optimization

## ⚡ Performance Optimization

The project includes several performance-focused optimizations:

- React component lazy loading
- Code splitting using `React.lazy()`
- `Suspense` for lazy-loaded components
- WebP image optimization
- Image compression and resizing
- `loading="lazy"` for non-critical images
- `decoding="async"` for images
- Production build optimization with Vite


## 🖼️ Image Optimization

The project uses `sharp` to resize and compress WebP images.

Run the image optimization script with:
node script/optimize-images.cjs


### Lighthouse Performance

The production build was tested using Lighthouse.

- Performance: **100**
- Accessibility: **92**
- Best Practices: **100**
- SEO: **83**

> Lighthouse results may vary depending on browser, device, network conditions, and test environment.

## 📂 Project Structure


The-Performance-Lab/
│
├── public/
│   └── favicon.svg
│
├── script/
│   ├── optimize-images.cjs
│   └── optimize-runner.cjs
│
├── src/
│   │
│   ├── assets/
│   │   ├── images
│   │   └── logos
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── PartnerSection.jsx
│   │   ├── SmartSection.jsx
│   │   ├── ScienceSection.jsx
│   │   ├── Stats.jsx
│   │   ├── PerformanceMotion.jsx
│   │   ├── FinalCTA.jsx
│   │   └── Footer.jsx
│   │
│   ├── styles/
│   │   ├── Navbar.css
│   │   ├── HeroSection.css
│   │   ├── PartnerSection.css
│   │   ├── SmartSection.css
│   │   ├── ScienceSection.css
│   │   ├── Stats.css
│   │   ├── PerformanceMotion.css
│   │   ├── FinalCTA.css
│   │   └── Footer.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js


### Lekin ek correction

Agar tumhara matlab hai **"CJS ko Tech Stack mein bhi mention kare?"**, to nahi. `CommonJS` yahan project ki main application technology nahi hai. `.cjs` sirf Node.js scripts ko CommonJS format mein run karne ke liye use hua hai.

README mein ise **Image Optimization / Development Scripts** section mein mention karna technically correct hai.

Aur haan, `script` singular hi rakhna, kyunki tumhare project mein folder:
