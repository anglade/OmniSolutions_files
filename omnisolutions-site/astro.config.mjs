import { defineConfig } from 'astro/config';

// ---------------------------------------------------------------------------
// DEPLOY NOTES
//
// Default settings below work for Vercel, Netlify, Cloudflare Pages, or any
// custom domain (the site is served from the root, e.g. omnisolutions.com).
//
// If you deploy to GitHub Pages as a PROJECT site, the URL is
//   https://<username>.github.io/<repo>/
// and you must tell Astro about that subpath. Uncomment and edit:
//
//   site: 'https://<username>.github.io',
//   base: '/omnisolutions',
//
// All internal links in this project use withBase() (see src/lib/url.ts),
// so setting `base` here is all you need — links will adjust automatically.
// ---------------------------------------------------------------------------

export default defineConfig({
  site: 'https://omnisolutions.example.com',
  // base: '/omnisolutions',
});
