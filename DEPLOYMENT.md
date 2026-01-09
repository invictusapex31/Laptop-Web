# Framex - Deployment Guide

## Production Build Complete ✅

Your Framex laptop customization platform is now built and ready for deployment!

## Build Information

- **Build Tool**: Vite 5.4.21
- **Build Size**: 
  - HTML: 0.79 kB (gzipped: 0.44 kB)
  - CSS: 15.37 kB (gzipped: 3.68 kB)
  - JavaScript: 1,211.25 kB (gzipped: 348.41 kB)
- **Build Location**: `dist/` folder

## Deployment Options

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages
1. Go to your repository settings
2. Navigate to Pages
3. Select "GitHub Actions" as source
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Option 4: Static Hosting (Any Provider)
Simply upload the contents of the `dist/` folder to any static hosting service:
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Cloudflare Pages

## Local Preview

To preview the production build locally:
```bash
npm run preview
```

## Features Included

✅ Homepage with hero section and component showcase
✅ User authentication (login/signup)
✅ 3D laptop configurator with interactive controls
✅ Component selection system (Display, CPU, RAM, Storage, Battery, Ports, Colors)
✅ AI assistant with voice and text commands
✅ Real-time price calculator
✅ Configuration summary and specs viewer
✅ Fully responsive design (mobile, tablet, desktop)
✅ Premium dark theme with Framework-inspired aesthetics

## Tech Stack

- React 18
- Three.js & React Three Fiber
- Tailwind CSS
- Framer Motion
- React Router
- Vite

## Performance Notes

The JavaScript bundle is large (1.2MB) due to Three.js. Consider these optimizations for production:

1. **Code Splitting**: Lazy load the 3D components
2. **CDN**: Use a CDN for faster global delivery
3. **Compression**: Enable Brotli compression on your server
4. **Caching**: Set long cache times for static assets

## Environment Variables

No environment variables required for basic functionality. 

For AI features (future enhancement):
- `VITE_GEMINI_API_KEY` - Google Gemini API key

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 14+, Chrome Android

## Repository

GitHub: https://github.com/invictusapex31/Laptop-Web.git

## Support

For issues or questions, create an issue on GitHub.

---

**Built with ❤️ using Framex Platform**
