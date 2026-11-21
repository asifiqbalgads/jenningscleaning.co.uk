# Jennings Cleaning — Premium Homepage Redesign Demo

A custom-built, premium, fully responsive single-page website for **Jennings Cleaning**, a professional cleaning business serving Folkestone, Hythe, Elham and the wider South East Kent area.

Built for GitHub Pages deployment using HTML5, CSS3 and vanilla JavaScript.

## Project structure

```
index.html
assets/
├── images/          # Hero & service photography
├── icons/           # Icon assets (reserved)
└── logo/            # Jennings Cleaning wordmark logo (SVG)
css/
└── style.css        # CSS-variable driven stylesheet
js/
└── script.js        # Vanilla JavaScript (mobile nav, FAQ accordion)
.nojekyll
README.md
```

## Key design decisions (brand-authentic)

- **Brand colors** preserved from the original Jennings Cleaning identity: deep cleaning green `#0E7C4B` (primary), `#0B5A3B` (dark), amber `#F59E0B` (accent).
- **Logo** — original wordmark identity retained as an SVG logo (`assets/logo/jennings-logo.svg`).
- **Typography** — Inter, a clean professional sans-serif suited to home-service businesses.
- **Imagery** — industry-specific visuals for hero and service cards. AI-generated conceptual imagery is used where original photography was unavailable; these are **not** presented as real company projects or customer photos.
- **Sections**: hero, trust bar, introduction, core services, why choose us, featured work, work process, testimonials, service areas, FAQ, final CTA, footer.
- **Mobile-first**, responsive across 360px–1440px viewports; sticky navigation, hamburger menu, accordion FAQ.
- No backend, database or server-side dependencies. Static HTML ready for GitHub Pages.
- `noindex, nofollow` meta tag added so this demo does not compete with the original website in search results.

## Deployment

This site is GitHub Pages ready. Enable GitHub Pages in repository settings with the source set to the main branch (root folder), then the homepage loads from `index.html`.
