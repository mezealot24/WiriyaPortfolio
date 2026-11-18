import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Entry ids are "<locale>/<slug>", e.g. "th/launch-site". The same slug in the other folder is the translation.

const seo = z.object({
  title: z.string().min(10).max(80),
  description: z.string().min(50).max(170),
});

/** The three packages. Home and Services both read from here, so prices cannot drift. */
const services = defineCollection({
  loader: glob({ base: "./src/content/services", pattern: "{th,en}/*.yaml" }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    order: z.number().int(),
    /** Starting price in THB. Always shown as "from"; never a bare number. */
    priceFrom: z.number().int().positive(),
    priceNote: z.string().optional(),
    duration: z.string(),
    fit: z.string(),
    /** Exactly four lines for the package card. */
    highlights: z.array(z.string()).length(4),
    includes: z.array(z.string()).min(1),
    excludes: z.array(z.string()).default([]),
    note: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const metric = z.object({
  key: z.string(),
  label: z.string(),
  /** Shorter label for the Home proof strip, when it differs. */
  stripLabel: z.string().optional(),
  value: z.number(),
  decimals: z.number().int().min(0).max(2).default(0),
  prefix: z.string().default(""),
  suffix: z.string().default(""),
  source: z.string(),
  /** Unknown periods stay empty and are shown as "to be confirmed". */
  period: z.string().optional(),
  accent: z.boolean().default(false),
});

const work = defineCollection({
  loader: glob({ base: "./src/content/work", pattern: "{th,en}/*.md" }),
  schema: z
    .object({
      title: z.string(),
      /** Optional display title with <span class="nb"> to keep a Thai word on one line. */
      titleHtml: z.string().optional(),
      /** Teaser on cards; TL;DR on the case page. */
      summary: z.string(),
      client: z.string(),
      /** pending | anonymous | named. Anything but "named" keeps the client's name, domain and screenshots out. */
      clientVisibility: z.enum(["pending", "anonymous", "named"]).default("pending"),
      clientName: z.string().optional(),
      liveUrl: z.url().optional(),
      industry: z.string(),
      tags: z.array(z.string()).min(1),
      stack: z.array(z.object({ group: z.string(), items: z.array(z.string()).min(1) })).min(1),
      services: z.array(z.string()).default([]),
      period: z.string().optional(),
      role: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      metrics: z.array(metric).min(1),
      /** Metric keys for the Home proof strip and for the case card tiles. */
      proof: z.array(z.string()).default([]),
      highlight: z.array(z.string()).default([]),
      /** Chart caption ("clicks / week") and marker label; the chart itself is an illustration until permission. */
      chart: z.object({ unit: z.string(), marker: z.string(), alt: z.string() }).optional(),
      relatedPackage: z.string().optional(),
      quote: z
        .object({
          text: z.string(),
          name: z.string(),
          role: z.string(),
          permission: z.enum(["pending", "granted"]).default("pending"),
        })
        .optional(),
      seo,
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    })
    .superRefine((entry, ctx) => {
      // A client's name must never reach the repository before the client agrees.
      if (entry.clientVisibility !== "named") {
        for (const key of ["clientName", "liveUrl"] as const) {
          if (entry[key] !== undefined) {
            ctx.addIssue({ code: "custom", path: [key], message: `${key} needs clientVisibility: named` });
          }
        }
      }
      const keys = new Set(entry.metrics.map((m) => m.key));
      for (const list of ["proof", "highlight"] as const) {
        for (const key of entry[list]) {
          if (!keys.has(key)) ctx.addIssue({ code: "custom", path: [list], message: `unknown metric key "${key}"` });
        }
      }
    }),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "{th,en}/*.md" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    seo,
    draft: z.boolean().default(false),
  }),
});

export const collections = { services, work, blog };
