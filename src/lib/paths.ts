/** Prefix internal paths with Astro `base` (needed for GitHub Pages). */
export function path(to = ""): string {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const clean = to.replace(/^\/+|\/+$/g, "");
  if (!clean) return base;
  return `${base}${clean}/`;
}
