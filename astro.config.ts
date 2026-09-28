import { defineConfig, envField, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

// .env files are not loaded here, so the host sets SITE_URL; the fallback is the planned Vercel project.
const site = process.env.SITE_URL ?? "https://silicon-warin.vercel.app";

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
      PUBLIC_LINE_URL: envField.string({ context: "client", access: "public", optional: true, url: true }),
      PUBLIC_CONTACT_EMAIL: envField.string({ context: "client", access: "public", optional: true }),
      PUBLIC_AVAILABILITY: envField.enum({
        context: "client",
        access: "public",
        values: ["available", "booked"],
        default: "available",
      }),
    },
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Instrument Sans",
      cssVariable: "--face-instrument",
      weights: [400, 500, 600],
      styles: ["normal"],
      fallbacks: ["system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "IBM Plex Sans Thai",
      cssVariable: "--face-plex-thai",
      weights: [400, 600],
      styles: ["normal"],
      subsets: ["thai"],
      fallbacks: ["system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Newsreader",
      cssVariable: "--face-newsreader",
      weights: [400],
      styles: ["italic"],
      fallbacks: ["serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--face-jetbrains",
      weights: [400, 500],
      styles: ["normal"],
      fallbacks: ["monospace"],
    },
  ],
});
