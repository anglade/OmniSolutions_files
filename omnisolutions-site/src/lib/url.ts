// Prefixes internal paths with Astro's configured base path.
// Use for every internal link so the site works at root ("/") or a
// subpath ("/omnisolutions") without changing any link.
const BASE = import.meta.env.BASE_URL; // always ends with "/"

export function withBase(path = '/') {
  const clean = path.replace(/^\/+/, '');
  return BASE.endsWith('/') ? BASE + clean : BASE + '/' + clean;
}
