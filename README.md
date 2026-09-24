# Alphacent Inc

A simple, professional website for Alphacent Inc — a tech services company based in San Francisco. We build websites, set up custom domains and business email, configure Google Business Profiles, and provide ongoing tech support for small businesses.

## About

Alphacent Inc helps small businesses and startups get online with proper websites, professional email, custom domains, and Google Business Profiles. We focus on straightforward, honest tech services without the fluff.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
alphacent/
├── public/           # Static assets served at root
│   ├── favicon.svg
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── legal.css     # Styles for legal pages
│   ├── privacy.html  # Privacy Policy
│   ├── terms.html    # Terms & Conditions
│   ├── cookies.html  # Cookie Policy
│   └── refund.html   # Refund Policy
├── src/
│   ├── components/   # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Process.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── CookieConsent.jsx
│   ├── App.jsx       # Main app component
│   ├── App.css       # Global styles
│   ├── index.css     # Tailwind CSS entry point
│   └── index.jsx     # React entry point
├── index.html        # HTML entry point
├── vite.config.mjs   # Vite configuration
├── postcss.config.js # PostCSS configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## Features

- Clean, professional design focused on readability
- Responsive layout that works on all devices
- Smooth scrolling navigation (react-scroll)
- Cookie consent banner with localStorage persistence
- Legal pages (Privacy, Terms, Cookies, Refund Policy)
- Accessibility-focused: semantic HTML, focus outlines, label associations
- No third-party tracking scripts
- No fake reviews or stats — just straightforward business info

## Tech Stack

- **React 19** — UI framework
- **Vite 8** — Build tool with fast hot reload
- **Tailwind CSS v4** — Styling via @tailwindcss/postcss
- **react-scroll** — Smooth anchor navigation
- **PostCSS 8** — CSS processing

## Legal & Privacy

- Cookie consent banner (respects user choice via localStorage)
- Only functional cookies (no analytics or advertising)
- No third-party tracking scripts
- Privacy policy explains exactly what data is collected
- Terms & Conditions cover project workflow and payment terms
- Refund policy is transparent about deposits and cancellations

## License

© 2024 Alphacent Inc. All rights reserved.
