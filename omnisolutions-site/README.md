# OmniSolutions — Site

Marketing site + free tools for OmniSolutions, built with [Astro](https://astro.build).
Static output — deploys free on Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

The first live tool is the **Cash Flow Forecaster** at
`/contractor/tools/cash-flow-forecaster`.

---

## Run it locally

You need [Node.js](https://nodejs.org) 18.20+ (20+ recommended).

```bash
npm install      # one time
npm run dev      # start the dev server (usually http://localhost:4321)
```

Other commands:

```bash
npm run build    # build the static site into dist/
npm run preview  # preview the built site locally
```

---

## Project structure

```
src/
  pages/
    index.astro                          → /                       (home)
    contractor/
      index.astro                        → /contractor             (contractor hub)
      tools/
        index.astro                      → /contractor/tools       (tools directory)
        cash-flow-forecaster.astro       → /contractor/tools/cash-flow-forecaster
  layouts/
    BaseLayout.astro                     header + footer shell for marketing pages
    ToolLayout.astro                     slim shell (breadcrumb + footer) for tool pages
  components/
    SiteHeader.astro / SiteFooter.astro
    ToolCard.astro                       card used in the tools directory
  data/
    tools.ts                             the tool registry (single source of truth)
  styles/
    tokens.css                           brand colors + fonts
    global.css                           base styles for marketing pages
  lib/
    url.ts                               withBase() helper for links
public/
  favicon.svg
```

---

## Deploying

### Vercel / Netlify / Cloudflare Pages (recommended)
Connect the GitHub repo. Build command `npm run build`, output directory `dist`.
No config changes needed — the site serves from the root.

### GitHub Pages (project site)
If the URL will be `https://<username>.github.io/<repo>/`, open
`astro.config.mjs` and uncomment/edit:

```js
site: 'https://<username>.github.io',
base: '/<repo>',
```

Every internal link uses `withBase()`, so setting `base` is all that's needed.

---

## The email capture is not wired yet

On the Cash Flow Forecaster, the **"Email me this forecast"** button is a
front-end stub. Find the line marked `// DEMO STUB` in
`src/pages/contractor/tools/cash-flow-forecaster.astro` and POST the email to a
Mailchimp or Zapier endpoint to capture leads and send the PDF.
The **Print / save as PDF** button already works.

---

## Adding a new tool

See `CLAUDE.md` — it's a short, repeatable recipe.
