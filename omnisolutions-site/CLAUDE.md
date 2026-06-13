# Working in this repo (for Claude Code / Cursor)

This is an Astro static site for OmniSolutions. It hosts a marketing shell plus
a growing set of free tools for contractors and other owner-led businesses.

## Conventions

- **Static only.** No server, no database. Tools run entirely in the browser.
  Persist user data with `localStorage` (never assume a backend).
- **Links.** Always build internal links with `withBase()` from `src/lib/url.ts`
  so the site works at the root or under a subpath.
- **Brand.** Use the CSS variables in `src/styles/tokens.css` (`--os-blue`,
  `--os-ink`, `--os-display`, etc.). Fonts are Archivo (display), IBM Plex Sans
  (body), IBM Plex Mono (data/numbers).
- **Marketing pages** use `BaseLayout.astro` (full header/footer).
  **Tool pages** use `ToolLayout.astro` (slim breadcrumb + footer) so the tool
  is the focus.
- Keep accessibility basics: visible focus, reduced-motion respected, works on
  mobile.

## Recipe: add a new free tool

1. **Register it** in `src/data/tools.ts` — add a `Tool` entry with a unique
   `slug`. The directory pages pick it up automatically.
2. **Create the page** at `src/pages/contractor/tools/<slug>.astro` using
   `ToolLayout`:

   ```astro
   ---
   import ToolLayout from '../../../layouts/ToolLayout.astro';
   ---
   <ToolLayout title="My Tool — OmniSolutions" description="One sentence.">
     <style is:global> /* tool styles */ </style>
     <!-- tool markup -->
     <script is:inline> /* tool logic; use localStorage for persistence */ </script>
   </ToolLayout>
   ```

   Use `<script is:inline>` for self-contained vanilla-JS tools so Astro doesn't
   transform the code.
3. **Set status** to `'live'` in the registry when it's ready (`'coming-soon'`
   renders a non-clickable card).
4. `npm run build` to confirm it compiles.

## Tool design pattern (what makes these work)

Each tool should: solve a problem an owner would normally pay for, give a clear
"here's your number" payoff, and end with an honest pointer toward the
underlying system problem plus an email capture. Keep the value real and the
pitch soft.
