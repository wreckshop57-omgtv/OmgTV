# OMGTV — Premium Streaming Landing Page

## Original Problem Statement
Premium single-page landing page for OMGTV streaming service. Black background with Matrix-style neon green (#00FF66) accents, modern streaming aesthetic, premium/high-converting. Sections: Hero (logo + "Everything You Watch. One Service." + Get Started/View Plans CTAs + Matrix digital rain), Features (8 glassmorphism cards), Pricing (Quarterly $130/3mo "Most Popular" + Annual $480/yr), Why Choose OMGTV (6 benefits), 3 Testimonials, FAQ (5), Contact ("Ready to Start Watching?" + Join on Telegram), floating Telegram button, sticky mobile Get Started. No mention of IPTV.

## Architecture
- Frontend-only static React (CRA + craco) + Tailwind CSS. No backend / DB (static landing page per user choice).
- Custom HTML5 Canvas Matrix rain animation (`components/MatrixRain.jsx`).
- Sections under `components/landing/`, composed in `pages/LandingPage.jsx`.
- Fonts: Azeret Mono (display) + Outfit (body). Theme colors in `tailwind.config.js` (`omg.green`, `omg.void`).
- Shared config in `lib/site.js` (TELEGRAM_URL placeholder `https://t.me/omgtv`).
- SEO: meta tags, Open Graph, Twitter cards, favicon in `public/index.html`.

## User Choices
- Telegram placeholder: https://t.me/omgtv
- Get Started → Telegram (new tab); View Plans → scroll to Pricing
- React + Tailwind (not Next.js); static page only

## Implemented (2026-06-20)
- Full responsive landing page: Navbar, Hero (Matrix rain + glowing logo), Features (8 bento cards), Pricing (highlighted Quarterly), Why Choose (6), Testimonials (3), FAQ accordion (5), Contact, Footer, floating Telegram + sticky mobile CTA.
- All interactive elements have data-testid. Frontend tested at 100% (iteration_1).
- Fixed env webpack-dev-server v5 compatibility (patched react-scripts devServer config).

## Notable
- Logo served from `/omgtv-logo.png`.

## Backlog / Next
- P2: Optional lead-capture form saving to backend (deferred — user chose static).
- P2: Replace placeholder Telegram URL with real handle.
- P2: Add subtle scroll-reveal animations to lower sections.
