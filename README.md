# Dasher Website

This repository contains the source code for the [official Dasher website](https://dasher.at).
NB: We hold this on astro-build - the original one is on hugo-build

## Technology Stack

- **Astro** - Modern static site generator
- **TypeScript** - Type-safe development
- **MDX** - Markdown + React components for content
- **GitHub Pages** - Static hosting
- **GitHub Actions** - CI/CD pipeline

## Getting Started

### Prerequisites

1. [Node.js](https://nodejs.org/) (v20 or later recommended)
2. [Git](https://git-scm.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/dasher-project/dasher-web.git
cd dasher-web

# Install dependencies
npm install
```

### Running Locally

```bash
# Start the development server
npm run dev
```

Visit `http://localhost:4321` in your browser.

### Building for Production

```bash
# Build the site
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
.
├── astro.config.mjs       # Astro configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── public/                # Static assets (images, videos, downloads)
│   ├── download/          # Alphabet XML files and training texts
│   ├── locales/           # Legacy mirrored locale HTML content
│   ├── images/            # Images and banners
│   ├── videos/            # Demo videos
│   └── logo.svg           # Dasher logo
├── static/                # Legacy mirrored site subtree (old dasher pages)
│   └── dasher/            # Historical pages/assets preserved from original site
├── src/
│   ├── layouts/           # Layout components
│   │   ├── BaseLayout.astro      # Main site layout
│   │   └── DocsLayout.astro      # Documentation layout with sidebar
│   ├── pages/             # Page routes
│   │   ├── index.astro           # Homepage
│   │   ├── docs/                # Documentation pages
│   │   ├── blog/                # Blog posts
│   │   ├── community.astro      # Community page
│   │   ├── about.astro          # About page
│   │   └── demonstrations.astro  # Demos page
│   ├── styles/            # CSS styles
│   │   ├── design-tokens.css    # CSS variables (colors, fonts, spacing)
│   │   └── global.css           # Global styles
│   └── utils/             # Utility scripts
│       └── nav.ts                # Documentation navigation
├── .github/workflows/     # GitHub Actions CI/CD
│   ├── build.yml          # Lint and build
│   └── deploy.yml         # Deploy to GitHub Pages
└── eslint.config.mjs      # ESLint configuration
```

## Updating Content

### Adding Documentation Pages

Documentation pages are created as `.astro` files in `src/pages/docs/`. The current structure uses Astro components for flexibility, but content and design are mixed.

**Example: Creating a new doc page**

```astro
---
import DocsLayout from '../../../layouts/DocsLayout.astro';
---

<DocsLayout title="Page Title - Dasher">
  <h1>Page Title</h1>

  <p>Your content here...</p>
</DocsLayout>
```

### Navigation

To add a page to the documentation sidebar, edit `src/utils/nav.ts`:

```typescript
{
  title: 'My Section',
  href: '/docs/my-section/',
  children: [
    { title: 'My Page', href: '/docs/my-section/my-page/' },
  ],
}
```

### Downloadable Resources

Alphabet XML files and training texts are stored in `public/download/`:

- `/public/download/alphabets/` - 144 alphabet XML files
- `/public/download/training.html` - Training text downloads

### Legacy Mirror Content

This repository includes mirrored legacy content from the original Dasher site for preservation and reference.

- `public/download/` contains downloadable resources served at `/download/...` (alphabets, training corpora, legacy platform downloads).
- `public/locales/` contains locale-specific legacy HTML pages served at `/locales/...`.
- `static/dasher/` contains a broader historical mirror of old Dasher pages and assets.

These directories are not identical. They overlap in historical material but serve different URL trees and use different folder layouts.

When updating modern site content, prefer editing `src/` and current assets in `public/images` or `public/videos`. Avoid reformatting mirrored legacy HTML unless intentionally curating those archives.

### Images and Videos

- Place images in `public/images/`
- Place videos in `public/videos/`
- Reference them as `/images/filename.png` or `/videos/filename.mp4`

## Scripts

| Command                | Description               |
| ---------------------- | ------------------------- |
| `npm run dev`          | Start development server  |
| `npm run build`        | Build for production      |
| `npm run preview`      | Preview production build  |
| `npm run lint`         | Run ESLint                |
| `npm run format`       | Format code with Prettier |
| `npm run format:check` | Check formatting          |

## Deployment

The site is automatically deployed to GitHub Pages on push to the `astro-build` branch via GitHub Actions.

**Deployment workflow:**

1. Push to `astro-build` branch
2. GitHub Actions runs `build.yml` (lint + build)
3. If successful, `deploy.yml` publishes to GitHub Pages
4. Site is live at https://dasher.at

## Design System

The site uses a custom design system with CSS custom properties:

**Colors:**

- `--color-deep-ink: #27537B` - Primary text and headings
- `--color-horizon-mint: #A8D0CB` - Accents and highlights
- `--color-focus-yellow: #F4E47E` - Callouts and emphasis
- `--color-target-coral: #D96A6A` - CTAs and hover states
- `--color-canvas-white: #F8F9FA` - Backgrounds

**Typography:**

- `--font-ui: 'Inter'` - UI text
- `--font-display: 'Outfit'` - Headings

See `src/styles/design-tokens.css` for all design tokens.

## Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a branch for your changes
3. Make your changes
4. Run `npm run lint` and `npm run format:check`
5. Submit a pull request

## License

This website is licensed under GPL-3.0.

## Links

- **Main Project:** https://github.com/dasher-project/dasher
- **Dasher Documentation:** https://dasher.at/docs/
- **Community:** https://matrix.to/#/#dasher:matrix.org
- **Issue Tracker:** https://github.com/dasher-project/dasher/issues
