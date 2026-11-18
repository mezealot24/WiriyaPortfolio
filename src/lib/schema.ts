import { brand, contactEmail, lineUrl } from "@/site";
import { localePath, type Locale } from "@/i18n/locales";

// schema.org objects. The provider is the brand; the person is "Wiriya", as on the site.

type Json = Record<string, unknown>;

const abs = (site: URL, path: string): string => new URL(path, site).href;

export const businessId = (site: URL): string => `${abs(site, "/")}#business`;
export const personId = (site: URL): string => `${abs(site, "/")}#person`;

const sameAs = (): string[] => [brand.github, ...(lineUrl ? [lineUrl] : [])];

export const professionalService = (site: URL, locale: Locale, description: string): Json => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": businessId(site),
  name: brand.name,
  description,
  url: abs(site, localePath(locale)),
  founder: { "@id": personId(site) },
  areaServed: { "@type": "Country", name: "Thailand" },
  address: { "@type": "PostalAddress", addressRegion: "Samut Prakan", addressCountry: "TH" },
  knowsLanguage: ["th", "en"],
  sameAs: sameAs(),
  ...(contactEmail
    ? { contactPoint: { "@type": "ContactPoint", contactType: "customer service", email: contactEmail, availableLanguage: ["th", "en"] } }
    : {}),
});

export const person = (site: URL, locale: Locale): Json => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId(site),
  name: brand.owner,
  jobTitle: "Freelance developer",
  url: abs(site, localePath(locale, "about")),
  worksFor: { "@id": businessId(site) },
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

/** A typed page node: AboutPage, ContactPage, CollectionPage, WebPage. */
export const page = (site: URL, locale: Locale, type: string, path: string, name: string, description: string): Json => ({
  "@context": "https://schema.org",
  "@type": type,
  name,
  description,
  url: abs(site, path),
  inLanguage: locale,
  isPartOf: { "@type": "WebSite", url: abs(site, localePath(locale)) },
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

export const faqPage = (items: ReadonlyArray<{ q: string; a: string }>): Json => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
});

export const packageCatalog = (
  site: URL,
  locale: Locale,
  path: string,
  name: string,
  packages: ReadonlyArray<{ slug: string; name: string; description: string; priceFrom: number }>,
): Json => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  url: abs(site, path),
  inLanguage: locale,
  provider: { "@id": businessId(site) },
  areaServed: { "@type": "Country", name: "Thailand" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name,
    itemListElement: packages.map((p) => ({
      "@type": "Offer",
      name: p.name,
      description: p.description,
      url: abs(site, `${path}#${p.slug}`),
      priceSpecification: { "@type": "PriceSpecification", minPrice: p.priceFrom, priceCurrency: "THB" },
    })),
  },
});

export const freeService = (site: URL, locale: Locale, path: string, name: string, description: string): Json => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url: abs(site, path),
  inLanguage: locale,
  provider: { "@id": businessId(site) },
  offers: { "@type": "Offer", price: 0, priceCurrency: "THB" },
});

export const itemList = (site: URL, items: ReadonlyArray<{ name: string; path: string }>): Json => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    url: abs(site, item.path),
  })),
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
  author: { "@id": personId(site) },
  publisher: { "@id": businessId(site) },
  ...(published ? { datePublished: published.toISOString() } : {}),
  ...((modified ?? published) ? { dateModified: (modified ?? published)?.toISOString() } : {}),
});
