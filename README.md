# Alina Moments Photography

**Professional Photography Portfolio Website**

_Fotografie mit Herz und Gefühl_ - A stunning, modern photography portfolio website built with cutting-edge web technologies.

## ✨ Features

### Technology Stack

- **Next.js 15** with App Router and Turbopack
- **React 19** with TypeScript for type safety
- **Tailwind CSS 4** for modern styling
- **Framer Motion** for smooth animations

### Design & UX

- ✅ **Elegant Dark Theme**: Professional black background with subtle blue accents
- ✅ **Responsive Navigation**: Smooth mobile menu with hamburger animation
- ✅ **Interactive Elements**: Pink gradient hover effects on menu items
- ✅ **Optimized Performance**: Fast loading times and smooth scrolling
- ✅ **SEO Ready**: Complete metadata and Open Graph tags

### Social Media Integration

- 🌸 Instagram
- 💙 Facebook
- 🎵 TikTok
- 💚 WhatsApp (+49 173 8712387)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

1. Clone the repository (if using Git):

```bash
git clone <your-repo-url>
cd photographer-website
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
photographer-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles and theme
├── components/
│   ├── PhotographerPresentation.tsx  # Photo slider component
│   ├── Header/            # Header components
│   └── Footer.tsx         # Footer component
├── data/
│   └── slider.json        # Slider images configuration
├── lib/
│   ├── config.ts          # Site configuration
│   └── utils.ts           # Utility functions
├── public/
│   └── images/
│       ├── logo.png       # Site logo
│       └── portfolio/     # Portfolio images organized by category
│           ├── Baby 6-12/ # Baby photos (6-12 months)
│           ├── portraits/ # Portrait photography
│           └── outdoor/   # Outdoor photography
└── package.json
```

## 🎨 Customization

### Update Site Information

Edit `lib/config.ts`:

```typescript
export const siteConfig: SiteConfig = {
  name: "Your Name",
  description: "Your description",
  url: "https://yoursite.com",
  links: {
    instagram: "https://instagram.com/yourhandle",
    facebook: "https://facebook.com/yourpage",
  },
};
```

### Add Images to Slider

The homepage slider uses a JSON-based configuration system for easy content management:

1. **Add your image** to the appropriate portfolio category:
   ```
   public/images/portfolio/
   ├── Baby 6-12/       # Baby and children photos (6-12 months)
   ├── portraits/       # Portrait photography
   └── outdoor/         # Outdoor photography
   ```

2. **Update the slider configuration** in `data/slider.json`:
   ```json
   {
     "src": "/images/portfolio/portraits/photo-name.jpg",
     "title": "Your Title",
     "subtitle": "Your Subtitle"
   }
   ```

**Tips:**
- Use descriptive filenames (e.g., `baby-smiling.jpg`, `family-park.jpg`)
- Recommended image size: 1920x1080px or higher
- Optimize images before uploading (max 2MB recommended)

### Customize Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --accent: #8b7355; /* Your brand color */
  --accent-light: #c4b5a0; /* Lighter variant */
  --muted: #f5f5f5;
  --border: #e5e5e5;
}
```

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:check # Check formatting
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Deploy to Other Platforms

Build the project:

```bash
npm run build
```

The output will be in the `.next` folder. Follow your hosting provider's Next.js deployment guide.

## 📦 Key Dependencies

- **Next.js 15**: React framework with App Router
- **React 19**: Latest React with Server Components
- **TypeScript**: Type-safe development
- **Tailwind CSS 4**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **yet-another-react-lightbox**: Image lightbox
- **Lucide React**: Icon library
- **Sharp**: High-performance image processing

## 🎯 Roadmap

### Phase 1 - Content (In Progress)

- [ ] Add portfolio gallery section
- [ ] Create About page with bio
- [ ] Add Services/Packages section
- [ ] Implement contact form

### Phase 2 - Features

- [ ] Add testimonials section
- [ ] Integrate booking system
- [ ] Add blog for SEO
- [ ] Implement image lightbox gallery

### Phase 3 - Advanced

- [ ] Multi-language support (DE/EN)
- [ ] CMS integration (Sanity/Contentful)
- [ ] Analytics setup
- [ ] Performance optimization

## 📞 Contact

**Alina Moments Photography**

- 📱 WhatsApp: +49 173 8712387
- 📸 Instagram: [@alinamoments.photography](https://www.instagram.com/alinamoments.photography/)
- 👥 Facebook: [Alina Moments Photography](https://www.facebook.com/profile.php?id=61577377904490)
- 🎵 TikTok: [@alinamoments.photography](https://www.tiktok.com/@alinamoments.photography)

## 🤝 Support

For issues or questions:

- Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS docs: [tailwindcss.com](https://tailwindcss.com)

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using Next.js
