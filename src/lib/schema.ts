import { brand } from "@/site";
import { localePath, type Locale } from "@/i18n/locales";

// schema.org objects. The owner's legal name never appears here; the provider is the brand.

type Json = Record<string, unknown>;

const abs = (site: URL, path: string): string => new URL(path, site).href;

export const businessId = (site: URL): string => `${abs(site, "/")}#business`;

export const professionalService = (site: URL, locale: Locale, description: string): Json => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": businessId(site),
  name: brand.name,
  description,
  url: abs(site, localePath(locale)),
  areaServed: { "@type": "Country", name: "Thailand" },
  address: { "@type": "PostalAddress", addressRegion: "Samut Prakan", addressCountry: "TH" },
  knowsLanguage: ["th", "en"],
  sameAs: [brand.github],
});

export const webSite = (site: URL, locale: Locale): Json => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: brand.name,
  url: abs(site, localePath(locale)),
  inLanguage: locale,
  publisher: { "@id": businessId(site) },
});

export const breadcrumbs = (site: URL, items: ReadonlyArray<{ name: string; path: string }>): Json => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: abs(site, item.path),
  })),
});

export const service = (site: URL, locale: Locale, path: string, name: string, description: string): Json => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url: abs(site, path),
  inLanguage: locale,
  provider: { "@id": businessId(site) },
  areaServed: { "@type": "Country", name: "Thailand" },
});

export const article = (
  site: URL,
  locale: Locale,
  kind: "Article" | "BlogPosting",
  path: string,
  headline: string,
  description: string,
  published?: Date,
  modified?: Date,
): Json => ({
  "@context": "https://schema.org",
  "@type": kind,
  headline,
  description,
  url: abs(site, path),
  mainEntityOfPage: abs(site, path),
  inLanguage: locale,
  author: { "@id": businessId(site) },
  publisher: { "@id": businessId(site) },
  ...(published ? { datePublished: published.toISOString() } : {}),
  ...(modified ?? published ? { dateModified: (modified ?? published)?.toISOString() } : {}),
});
