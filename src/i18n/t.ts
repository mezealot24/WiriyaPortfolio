import type { Locale } from "./locales";
import { en } from "./ui/en";
import { th, type Copy } from "./ui/th";

const dictionaries: Record<Locale, Copy> = { th, en };

/** All copy for one locale. */
export const copyFor = (locale: Locale): Copy => dictionaries[locale];

export type { Copy };

const dateFormats: Record<Locale, Intl.DateTimeFormat> = {
  th: new Intl.DateTimeFormat("th-TH", { dateStyle: "long" }),
  en: new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }),
};

export const formatDate = (locale: Locale, date: Date): string => dateFormats[locale].format(date);

/** Numbers are always Latin digits with thousands separators (they render in IBM Plex Mono). */
export const formatNumber = (value: number, decimals = 0): string =>
  value.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
