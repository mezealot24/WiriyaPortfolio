import type { Locale } from "./locales";
import { en } from "./ui/en";
import { th, type UiKey } from "./ui/th";

const dictionaries: Record<Locale, Record<UiKey, string>> = { th, en };

/** Returns a translator bound to one locale. */
export const useTranslations = (locale: Locale) => (key: UiKey): string => dictionaries[locale][key];

export type Translate = ReturnType<typeof useTranslations>;

const dateFormats: Record<Locale, Intl.DateTimeFormat> = {
  th: new Intl.DateTimeFormat("th-TH", { dateStyle: "long" }),
  en: new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }),
};

export const formatDate = (locale: Locale, date: Date): string => dateFormats[locale].format(date);
