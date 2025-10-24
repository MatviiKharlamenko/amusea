# AMUSEA - Bag Store Coming Soon Page

A beautiful countdown landing page for AMUSEA bag store, built with React 19, Vite, and Tailwind CSS 4.

## Features

- ⏱️ Live countdown timer (2 months until launch)
- 📧 Newsletter subscription
- 🎨 Whimsical carousel-themed design
- 📱 Fully responsive
- ✨ Smooth animations and modern UI

## Local Development

### Prerequisites

- Node.js 18+ (Note: Node 20+ recommended for latest Vite)
- npm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and visit: `http://localhost:5173`

### Build

To create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## GitHub Pages Deployment

### First-time Setup

1. Go to your GitHub repository settings
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### Deployment

The site will automatically deploy to GitHub Pages when you push to the `main` branch.

Your site will be available at: `https://[your-username].github.io/amusea/`

### Manual Deployment

If you need to trigger a manual deployment:

1. Go to the **Actions** tab in your repository
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

## Project Structure

```
amusea/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment workflow
├── public/
│   ├── logo.svg               # Brand logo
│   └── bags/                  # Product images (37 bags)
├── src/
│   ├── App.jsx                # Main countdown component
│   ├── App.css                # Custom animations
│   ├── index.css              # Tailwind imports & @theme config
│   └── main.jsx               # Entry point
├── index.html
├── vite.config.js             # Vite + Tailwind plugin configuration
├── eslint.config.js           # ESLint configuration
└── package.json
```

## Color Palette

The design uses a whimsical carousel-inspired color scheme:

- **Carousel Pink**: `#E88B8B` - Primary brand color
- **Carousel Coral**: `#EB9999` - Hover states
- **Carousel Blue**: `#E8F4F8` - Background gradient
- **Carousel Cream**: `#FAF8F5` - Background gradient

## Assets

### Product Images

All bag product images are located in `public/bags/` and can be referenced in your code using the base path:

```jsx
// Example: Display a bag image
<img src="/amusea/bags/Arabella.jpg" alt="Arabella Bag" />
```

Available bags (37 total):

- 80's Kid, Ada's Heart, Arabella, Arlette, Avedon, Ayla
- Benoîte, Bérénice, Call me Maybe, Catwalk in Progress
- Christiana, Colette, Corinne, Crane Flower, Curie
- Edith, Elodie, Emerald, Esme, Friend in Yellow
- Imogen, Iris, Jane, Lottie, Maëlle, Marigold, Marnie
- Océane, Ottilie, Pantera's heart, Pauline, Robyn
- Scarlett, Stravinsky, Sylvie, Voyager (2 versions)

### Logo

The AMUSEA logo is at `public/logo.svg` and referenced as `/amusea/logo.svg`

## Technologies

- **React 19.1** - UI framework
- **Vite 7** - Build tool
- **Tailwind CSS 4.1** - Styling (using [@tailwindcss/vite plugin](https://tailwindcss.com/docs/installation/using-vite))
- **GitHub Actions** - CI/CD
- **GitHub Pages** - Hosting

### Tech Stack Details

This project uses Tailwind CSS v4 with the official Vite plugin (`@tailwindcss/vite`), which provides:

- Zero-config setup with Vite
- Fast HMR (Hot Module Replacement)
- Custom theme variables defined using `@theme` directive in CSS
- No need for PostCSS configuration

## Customization

### Changing the Countdown Duration

Edit the `getTargetDate()` function in `src/App.jsx`:

```javascript
const getTargetDate = () => {
  const now = new Date();
  const target = new Date(now);
  target.setMonth(target.getMonth() + 2); // Change 2 to your desired months
  return target;
};
```

### Newsletter Storage

Currently, newsletter subscriptions are stored in `localStorage`. For production, integrate with your email service provider (Mailchimp, SendGrid, etc.) by modifying the `handleSubmit` function in `src/App.jsx`.

## License

Private - All Rights Reserved

## Support

For issues or questions, please contact the development team.
