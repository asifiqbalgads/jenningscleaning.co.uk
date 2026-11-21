# Jennings Cleaning — homepage concept

A static, mobile-first redesign concept for [Jennings Cleaning](https://jenningscleaning.co.uk/), a window and exterior cleaning business serving South East Kent. The site is a single homepage and requires no build step, backend, database, or JavaScript framework.

## Run locally

Open `index.html` in a browser, or serve the repository root with any static server, for example:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`. All styles, scripts, fonts and images use relative paths and work from a GitHub Pages project subdirectory. The `<meta name="robots" content="noindex, nofollow">` directive intentionally keeps this demo out of search results.

## GitHub Pages

In **Settings → Pages**, select **Deploy from a branch**, choose the branch containing this project, and choose **/ (root)**. The `.nojekyll` file lets Pages serve the static files directly. Changing the Pages source replaces the currently published Pages site, so confirm the intended branch before changing it. GitHub's build/deployment status determines when the published URL is actually available.

## Project structure

- `index.html` — semantic homepage and content
- `css/style.css` — mobile-first styles and responsive layouts
- `js/script.js` — accessible mobile-menu behaviour and footer year
- `assets/logo/` — original Jennings Cleaning wordmark
- `assets/images/` — optimised local images
- `assets/icons/` — SVG favicon; other icons are inline SVG
- `assets/fonts/` — locally hosted Manrope and DM Serif Display, with their SIL Open Font Licences
- `.nojekyll` — static GitHub Pages compatibility

## Content and imagery

Business details, contact numbers, service descriptions, service areas, founding date and the Folkestone customer quote were taken from the [original Jennings Cleaning website](https://jenningscleaning.co.uk/), including its [about](https://jenningscleaning.co.uk/about.htm), [service plans](https://jenningscleaning.co.uk/service-plans.htm) and [testimonials](https://jenningscleaning.co.uk/testimonials.htm) pages. The original wordmark and Folkestone Creative Quarter photograph are locally stored from that site; their rights remain with their respective owners. The hero and three service images are AI-generated, illustrative concepts, not photographs of actual Jennings Cleaning customers or projects. The site labels them accordingly.

Quote buttons link to the business’s existing enquiry page, and telephone links use its published numbers. This project contains no contact form or simulated submission. External business links are subject to the availability of the original website.

## Quality checks

The homepage was checked in headless Chromium at 360, 390, 430, 768, 1024, 1280 and 1440 pixels, including the mobile menu, FAQ toggles, local assets, in-page links and a project-subdirectory URL. Automated axe checks at mobile and desktop sizes reported no WCAG 2 A/AA or 2.1 A/AA violations; this is not a substitute for a full accessibility audit. The original site’s enquiry form and telephone service were not submitted or dialled during testing.
