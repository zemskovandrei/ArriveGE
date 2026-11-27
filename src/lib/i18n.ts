/**
 * Language helpers. English lives at the root, Russian under /ru/.
 * A page gets hreflang links and a language switcher only if it exists in both languages.
 */
export type Lang = "en" | "ru";

/** Slugs that have a Russian version under /ru/<slug>/ ("" = home page). */
export const ruSlugs = [
  "",
  "flights-to-georgia",
  "esim-georgia",
  "tbilisi-airport-transfer",
  "tbilisi-hotels",
  "batumi-hotels",
  "kazbegi-day-trip",
  "kakheti-wine-tour",
] as const;

function cleanSlug(pathname: string): string {
  return pathname.replace(/^\/+|\/+$/g, "");
}

/** Detect language and the language-neutral slug from a URL pathname. */
export function parsePath(pathname: string): { lang: Lang; slug: string } {
  const clean = cleanSlug(pathname);
  if (clean === "ru" || clean.startsWith("ru/")) {
    return { lang: "ru", slug: clean.replace(/^ru\/?/, "") };
  }
  return { lang: "en", slug: clean };
}

export function hasRu(slug: string): boolean {
  return (ruSlugs as readonly string[]).includes(cleanSlug(slug));
}

/** Site-relative URL for a slug in a language, with trailing slash. */
export function localePath(lang: Lang, slug = ""): string {
  const clean = cleanSlug(slug);
  const prefix = lang === "ru" ? "/ru/" : "/";
  return clean ? `${prefix}${clean}/` : prefix;
}
