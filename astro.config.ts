import { defineConfig, envField, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

// .env files are not loaded here, so the host sets SITE_URL; the fallback is the production domain.
const site = process.env.SITE_URL ?? "https://siliconwarin.com";

// unicode-range values copied from the @fontsource CSS files.
const THAI_RANGE = "U+02D7,U+0303,U+0331,U+0E01-0E5B,U+200C-200D,U+25CC";
const LATIN_RANGE =
  "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";
const plexThai = (subset: "thai" | "latin", weight: number) =>
  `./node_modules/@fontsource/ibm-plex-sans-thai/files/ibm-plex-sans-thai-${subset}-${weight}-normal.woff2`;
const plexMono = (weight: number) => `./node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-${weight}-normal.woff2`;
type LocalVariant = { weight: number; style: "normal"; src: [string]; unicodeRange: [string] };

export default defineConfig({
  site,
  trailingSlash: "always",
  i18n: {
    defaultLocale: "th",
    locales: ["th", "en"],
    routing: { prefixDefaultLocale: false },
  },
  redirects: {
    "/project": "/work/",
    "/resume": "/about/",
    // The blog moved to /insights/ in the redesign.
    "/blog": "/insights/",
    "/en/blog": "/en/insights/",
    // Old service and case-study slugs from the first draft of the site.
    "/services/company-website": "/services/",
    "/services/erp-for-sme": "/services/",
    "/services/backoffice-system": "/services/",
    "/en/services/company-website": "/en/services/",
    "/en/services/erp-for-sme": "/en/services/",
    "/en/services/backoffice-system": "/en/services/",
    "/work/dealership-backoffice": "/work/car-dealer-wordpress-to-cloudflare/",
  },
  // An inline PostCSS config stops Vite searching parent folders, where the old Next.js checkout keeps a Tailwind config.
  vite: { css: { postcss: {} } },
  integrations: [
    sitemap({
      i18n: { defaultLocale: "th", locales: { th: "th", en: "en" } },
    }),
  ],
  env: {
    schema: {
      // TODO(owner): set once the LINE OA exists, e.g. https://line.me/R/ti/p/@yourid
      PUBLIC_LINE_URL: envField.string({ context: "client", access: "public", optional: true, url: true }),
      // TODO(owner): the LINE OA basic ID without "@". Enables pre-filled package messages (oaMessage deep link).
      PUBLIC_LINE_ID: envField.string({ context: "client", access: "public", optional: true }),
      // TODO(owner): brand email on the final domain, e.g. hello@siliconwarin.com
      PUBLIC_CONTACT_EMAIL: envField.string({ context: "client", access: "public", optional: true }),
      PUBLIC_AVAILABILITY: envField.enum({
        context: "client",
        access: "public",
        values: ["available", "booked"],
        default: "available",
      }),
    },
  },
  // Self-hosted woff2 files from the installed @fontsource packages (no font CDN, no network at build time).
  // Thai and Latin are separate files split by unicode-range, so Latin-only text never downloads Thai glyphs.
  fonts: [
    {
      provider: fontProviders.local(),
      name: "IBM Plex Sans Thai",
      cssVariable: "--face-sans",
      fallbacks: ["Noto Sans Thai", "Leelawadee UI", "Thonburi", "system-ui", "sans-serif"],
      options: {
        variants: ([400, 500, 600] as const).flatMap((weight) => [
          { weight, style: "normal", src: [plexThai("thai", weight)], unicodeRange: [THAI_RANGE] },
          { weight, style: "normal", src: [plexThai("latin", weight)], unicodeRange: [LATIN_RANGE] },
        ]) as [LocalVariant, ...LocalVariant[]],
      },
    },
    {
      // Latin only: numerals, prices and mono eyebrows. IBM Plex Mono has no Thai glyphs.
      provider: fontProviders.local(),
      name: "IBM Plex Mono",
      cssVariable: "--face-mono",
      fallbacks: ["ui-monospace", "monospace"],
      options: {
        variants: [
          { weight: 400, style: "normal", src: [plexMono(400)], unicodeRange: [LATIN_RANGE] },
          { weight: 500, style: "normal", src: [plexMono(500)], unicodeRange: [LATIN_RANGE] },
        ],
      },
    },
  ],
});
