import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "./locales";

export type Section = "services" | "work" | "blog";
type Entry<C extends Section> = CollectionEntry<C>;

/** "th/backoffice-system" -> "backoffice-system". */
export const slugOf = (id: string): string => id.slice(id.indexOf("/") + 1);

const localeOf = (id: string): string => id.slice(0, id.indexOf("/"));

// Drafts show in `astro dev` and are dropped from production builds and the sitemap.
const visible = (entry: { data: { draft: boolean } }): boolean => import.meta.env.DEV || !entry.data.draft;

export async function entriesFor<C extends Section>(collection: C, locale: Locale): Promise<Array<Entry<C>>> {
  const all = (await getCollection(collection)) as Array<Entry<C>>;
  return all.filter((entry) => localeOf(entry.id) === locale && visible(entry));
}

export async function servicesFor(locale: Locale): Promise<Array<Entry<"services">>> {
  const list = await entriesFor("services", locale);
  return list.sort((a, b) => a.data.order - b.data.order);
}

export async function workFor(locale: Locale): Promise<Array<Entry<"work">>> {
  const list = await entriesFor("work", locale);
  return list.sort((a, b) => b.data.year - a.data.year || a.data.title.localeCompare(b.data.title));
}

export async function postsFor(locale: Locale): Promise<Array<Entry<"blog">>> {
  const list = await entriesFor("blog", locale);
  return list.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

/** Whether a visible translation of this slug exists in the other locale. */
export async function hasTranslation(collection: Section, locale: Locale, slug: string): Promise<boolean> {
  const list = await entriesFor(collection, locale);
  return list.some((entry) => slugOf(entry.id) === slug);
}

/** getStaticPaths helper: one route per visible entry of a locale. */
export async function pathsFor<C extends Section>(collection: C, locale: Locale) {
  const list = await entriesFor(collection, locale);
  return list.map((entry) => ({ params: { slug: slugOf(entry.id) }, props: { entry } }));
}
