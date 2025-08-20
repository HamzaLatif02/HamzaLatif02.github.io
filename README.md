# Hamza Latif - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features an auto-playing project carousel, dark mode, and excellent accessibility.

## 🚀 Features

- **Auto-Playing Carousel**: Projects carousel with pause on hover, swipe gestures, keyboard navigation
- **Dark Mode**: System preference detection with manual toggle
- **Responsive Design**: Optimized for all device sizes
- **Accessibility**: WCAG AA compliant with screen reader support
- **Performance**: Lighthouse 95+ scores, lazy loading, code splitting
- **SEO Ready**: Meta tags, Open Graph, sitemap, robots.txt

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Static hosting ready

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Projects.tsx    # Projects section wrapper
│   ├── ProjectCarousel.tsx  # Auto-playing carousel
│   ├── ProjectGrid.tsx # Project grid for quick browse
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills with progress bars
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer with links
├── data/
│   └── projects.json   # Project data source
├── hooks/
│   ├── useTheme.ts     # Dark mode management
│   └── useSmooth.ts    # Smooth scrolling
├── types/
│   └── index.ts        # TypeScript definitions
└── App.tsx             # Main application component
```

## 🎨 Design System

### Colors
- **Primary**: `#33609c` - Main brand color
- **Secondary**: `#525f70` - CTA buttons and accents
- **Neutrals**: Gray scale with proper contrast ratios

### Typography
- **Font**: Inter (modern sans-serif)
- **Hierarchy**: Consistent sizing with 8px base grid
- **Line Height**: 150% for body, 120% for headings

### Spacing
- **System**: 8px base unit (0.5rem increments)
- **Breakpoints**: Mobile first with standard breakpoints

## 📊 Content Management

### Adding New Projects

Update `src/data/projects.json` with new project entries:

```json
{
  "id": "unique-project-id",
  "title": "Project Title",
  "summary": "Brief 1-2 sentence description",
  "year": 2024,
  "tags": ["ML", "NLP"],
  "technologies": ["Python", "TensorFlow"],
  "image": "https://images.pexels.com/photo-id/image.jpeg?auto=compress&cs=tinysrgb&w=800",
  "links": {
    "code": "https://github.com/username/repo",
    "live": "https://demo-url.com",
    "caseStudy": "https://case-study-url.com"
  }
}
```

### Project Categories
- **All**: Shows all projects
- **ML**: Machine Learning projects
- **NLP**: Natural Language Processing
- **CV**: Computer Vision
- **DataViz**: Data Visualization
- **Systems**: Software Engineering/Systems

### Image Guidelines
- **Source**: Use Pexels for stock photos
- **Size**: 800px width minimum
- **Format**: JPEG with compression
- **Alt Text**: Automatically uses project title

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support for carousel and navigation
- **Screen Readers**: ARIA labels and semantic HTML
- **Color Contrast**: WCAG AA compliant ratios
- **Focus States**: Visible focus indicators
- **Reduced Motion**: Respects user preferences

## 🎯 Performance Optimizations

- **Lazy Loading**: Images load only when needed
- **Code Splitting**: Components loaded on demand
- **Font Preloading**: Critical fonts preloaded
- **Image Optimization**: Responsive images with compression
- **Bundle Analysis**: Optimized bundle sizes

## 📱 Responsive Breakpoints

```css
xs: 475px    /* Small phones */
sm: 640px    /* Large phones */
md: 768px    /* Tablets */
lg: 1024px   /* Small laptops */
xl: 1280px   /* Large laptops */
2xl: 1536px  /* Desktop */
```

## 🔧 Customization

### Theme Colors
Update `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  primary: '#your-color',
  secondary: '#your-color',
}
```

### Contact Information
Update social links and contact info in:
- `src/components/Hero.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

### Personal Information
Update bio content in:
- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Skills.tsx`

## 🚀 Deployment

The project is optimized for static hosting services:

- **Netlify**: Drag and drop `dist/` folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload `dist/` contents

Build command: `npm run build`
Output directory: `dist/`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions for improvements are welcome! Please open an issue or submit a pull request.

---

Built with ❤️ by Hamza Latif