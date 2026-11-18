import { PUBLIC_AVAILABILITY, PUBLIC_CONTACT_EMAIL, PUBLIC_LINE_ID, PUBLIC_LINE_URL } from "astro:env/client";
import { localePath, type Locale } from "./i18n/locales";

export const brand = {
  name: "Silicon Warin",
  byline: "Silicon Warin by Wiriya",
  owner: "Wiriya",
  github: "https://github.com/mezealot24",
} as const;

export const availability = PUBLIC_AVAILABILITY;
export const contactEmail = PUBLIC_CONTACT_EMAIL;

const lineId = PUBLIC_LINE_ID?.replace(/^@/, "");
/** The LINE add-friend link, from PUBLIC_LINE_URL or PUBLIC_LINE_ID. Undefined until the LINE OA exists. */
export const lineUrl: string | undefined = PUBLIC_LINE_URL ?? (lineId ? `https://line.me/R/ti/p/@${lineId}` : undefined);

/**
 * Where a LINE button goes. With a message and a LINE ID it opens a chat with the text pre-filled;
 * otherwise the add-friend link; until the LINE OA exists, the contact page.
 */
export const lineHref = (locale: Locale, message?: string): string => {
  if (message && lineId) return `https://line.me/R/oaMessage/@${lineId}/?${encodeURIComponent(message)}`;
  return lineUrl ?? localePath(locale, "contact");
};
