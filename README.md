# Shemirat Enayim (Protection for the Eyes)

A comprehensive resource website providing guides and information for internet safety and digital protection.

## About

Shemirat Enayim is a static site built to help parents, religious organizations, and individuals protect their networks and devices from inappropriate content. The site provides detailed guides, tutorials, and resources for implementing various levels of content filtering and internet safety measures.

## Features

- **40+ Comprehensive Guides** covering DNS filtering, parental controls, device management, and more
- **Audience-Specific Resources** tailored for parents, organizations, and individuals
- **Search Functionality** with keyboard shortcuts (Cmd/Ctrl+K)
- **Dark Mode Support** with high contrast accessibility option
- **Mobile-First Responsive Design**
- **Print-Friendly Pages** for offline reference
- **Performance Optimized** with Core Web Vitals in "Good" range
- **Privacy-Respecting Analytics** (Plausible integration ready)
- **Progressive Enhancement** - works without JavaScript

## Project Structure

```
/
├── public/           # Static assets (favicon, robots.txt, etc.)
├── src/
│   ├── assets/       # Images and styles
│   ├── components/   # Reusable Astro components
│   │   ├── ui/       # UI components (Button, Card, etc.)
│   │   └── widgets/  # Page sections (Header, Footer, etc.)
│   ├── layouts/      # Page layouts
│   ├── pages/        # File-based routing
│   │   ├── guides/   # Individual guide pages
│   │   └── ...
│   ├── config.yaml   # Site configuration
│   └── navigation.ts # Navigation structure
├── ANALYTICS_SETUP.md  # Analytics configuration guide
├── CLAUDE.md           # Development guidance for Claude Code
└── plan.md             # Development roadmap
```

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, pnpm, or bun package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/joedanz/Shemirat-Enayim.git
cd shemiratenayim

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun run dev
```

The site will be available at `http://localhost:4321`

### Commands

| Command           | Action                                |
| :---------------- | :------------------------------------ |
| `npm install`     | Install dependencies                  |
| `npm run dev`     | Start dev server at `localhost:4321`  |
| `npm run build`   | Build production site to `./dist/`    |
| `npm run preview` | Preview production build locally      |
| `npm run check`   | Run Astro check, ESLint, and Prettier |
| `npm run fix`     | Auto-fix ESLint and Prettier issues   |

## Technology Stack

- **Framework:** [Astro 5.0](https://astro.build/)
- **Styling:** CSS Variables with scoped styles
- **Search:** Fuse.js (lazy-loaded)
- **Icons:** Custom SVG icon system
- **Build:** esbuild with minification
- **Analytics:** Ready for Plausible Analytics integration
- **Error Monitoring:** Ready for Sentry integration

## Configuration

Basic site configuration is in `src/config.yaml`:

```yaml
site:
  name: 'Shemirat Einayim'
  site: 'https://your-domain.com'
  base: '/'
  trailingSlash: false

metadata:
  title:
    default: 'Shemirat Einayim'
    template: '%s — Shemirat Einayim'
  description: 'Comprehensive guides for internet safety and digital protection'
```

## Deployment

The site is ready to deploy to any static hosting provider:

### Netlify

```bash
npm run build
# Upload dist/ folder or connect GitHub repository
```

### Vercel

```bash
npm run build
# Upload dist/ folder or connect GitHub repository
```

See `netlify.toml` and `vercel.json` for platform-specific configurations.

## Analytics Setup

The site includes integration points for privacy-respecting analytics. See [ANALYTICS_SETUP.md](./ANALYTICS_SETUP.md) for detailed instructions on:

- Setting up Plausible Analytics
- Configuring Sentry error monitoring
- Environment variable configuration
- Custom event tracking

## Contributing

Contributions are welcome! Feel free to:

- Open issues for bugs or feature requests
- Submit pull requests for improvements
- Suggest new guides or content topics
- Report broken links or outdated information

## Development Notes

- Guide pages use the `GuideLayout` with automatic table of contents
- Navigation is centralized in `src/navigation.ts`
- Search indexes are built automatically from page content
- All pages are statically generated at build time

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

**Note:** This site provides general guidance and information. Always verify current best practices and consult with technical professionals for your specific security needs.
