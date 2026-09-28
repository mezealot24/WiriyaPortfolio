import { PUBLIC_AVAILABILITY, PUBLIC_CONTACT_EMAIL, PUBLIC_LINE_URL } from "astro:env/client";
import { localePath, type Locale } from "./i18n/locales";

export const brand = {
  name: "Silicon Warin",
  byline: "Silicon Warin by QQ",
  github: "https://github.com/mezealot24",
} as const;

export const availability = PUBLIC_AVAILABILITY;
export const contactEmail = PUBLIC_CONTACT_EMAIL;
export const lineUrl = PUBLIC_LINE_URL;

/** Where a "Message on LINE" button goes: the LINE link once it exists, the contact page until then. */
export const lineHref = (locale: Locale): string => lineUrl ?? localePath(locale, "contact");
