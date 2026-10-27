/** Prefix internal paths with Astro `base` (needed for GitHub Pages). */
export function path(to = ""): string {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const clean = to.replace(/^\/+|\/+$/g, "");
  if (!clean) return base;
  return `${base}${clean}/`;
}

/** Static file under /public (no trailing slash). */
export function asset(to: string): string {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return `${base}${to.replace(/^\//, "")}`;
}
