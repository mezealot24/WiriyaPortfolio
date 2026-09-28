export const locales = ["th", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "th";

export const isLocale = (value: unknown): value is Locale =>
  typeof value === "string" && (locales as ReadonlyArray<string>).includes(value);

export const otherLocale = (locale: Locale): Locale => (locale === "th" ? "en" : "th");

/** Open Graph locale codes. */
export const ogLocale: Record<Locale, string> = { th: "th_TH", en: "en_US" };

/**
 * Site path for a locale. `path` is written without the locale prefix, e.g. "services/erp-for-sme".
 * Thai has no prefix; English lives under /en/. Every path ends in a slash (trailingSlash: "always").
 */
export const localePath = (locale: Locale, path = ""): string => {
  const clean = path.replace(/^\/+|\/+$/g, "");
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  return clean ? `${prefix}/${clean}/` : `${prefix}/`;
};
