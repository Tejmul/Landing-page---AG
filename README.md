# AssuredGig - Secure Freelance Platform

A modern, secure freelance platform built with React, TypeScript, and Vite, featuring a beautiful landing page and optimized performance.

## Features

- 🚀 Built with React 18, TypeScript, and Vite
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- ⚡ Optimized performance
- 🔒 Secure by default
- 📦 Code splitting and lazy loading
- 🎯 SEO optimized
- 📱 PWA support
- 🔄 Service Worker for offline support
- 🖼️ Optimized images with WebP and AVIF
- 🎭 Smooth animations with Framer Motion

## Performance Optimizations

- Code splitting and lazy loading of components
- Image optimization with WebP and AVIF formats
- Service Worker for offline support and caching
- PWA support for better mobile experience
- Optimized CSS with Tailwind
- Efficient animations with will-change
- Preloading of critical resources
- Deferred loading of non-critical resources
- SEO optimizations
- Proper caching headers
- Compression with gzip/brotli

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/assuredgig.git
cd assuredgig
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview the production build:
```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run optimize-images` - Optimize images
- `npm run analyze` - Analyze bundle size
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
assuredgig/
├── public/              # Static assets
│   ├── assuredgiglogo-sm.webp
│   ├── assuredgiglogo-md.webp
│   ├── assuredgiglogo-lg.webp
│   ├── manifest.json    # PWA manifest
│   ├── robots.txt      # SEO robots file
│   └── sw.js           # Service Worker
├── src/
│   ├── components/     # React components
│   ├── utils/         # Utility functions
│   ├── App.tsx        # Main App component
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── scripts/           # Build scripts
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
├── tailwind.config.js # Tailwind configuration
└── package.json       # Project dependencies
```

## Performance Best Practices

1. **Code Splitting**
   - Lazy load components
   - Split vendor chunks
   - Use dynamic imports

2. **Image Optimization**
   - Use WebP and AVIF formats
   - Implement responsive images
   - Lazy load images
   - Use proper image dimensions

3. **Caching**
   - Implement Service Worker
   - Use proper cache headers
   - Cache static assets
   - Implement stale-while-revalidate

4. **CSS Optimization**
   - Use Tailwind's purge
   - Minimize CSS
   - Defer non-critical CSS
   - Use CSS containment

5. **JavaScript Optimization**
   - Minimize bundle size
   - Use code splitting
   - Implement tree shaking
   - Use proper chunking

6. **SEO Optimization**
   - Implement proper meta tags
   - Use semantic HTML
   - Create sitemap.xml
   - Configure robots.txt

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
