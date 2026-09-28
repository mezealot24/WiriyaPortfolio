import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Entry ids are "<locale>/<slug>", e.g. "th/backoffice-system". The same slug in the other folder is the translation.

const seo = z.object({
  title: z.string().min(10).max(70),
  description: z.string().min(50).max(160),
});

const services = defineCollection({
  loader: glob({ base: "./src/content/services", pattern: "{th,en}/*.md" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    keyword: z.string(),
    order: z.number().int(),
    deliverables: z.array(z.string()).min(1),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    seo,
    draft: z.boolean().default(false),
  }),
});

const work = defineCollection({
  loader: glob({ base: "./src/content/work", pattern: "{th,en}/*.md" }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        summary: z.string(),
        industry: z.string(),
        year: z.number().int().min(2015).max(2100),
        role: z.string(),
        stack: z.array(z.string()).min(1),
        service: z.string().optional(),
        anonymized: z.boolean().default(true),
        clientName: z.string().optional(),
        liveUrl: z.url().optional(),
        repoUrl: z.url().optional(),
        cover: image().optional(),
        coverAlt: z.string().optional(),
        seo,
        draft: z.boolean().default(false),
      })
      .superRefine((entry, ctx) => {
        // A client's name must never reach the repository before the client agrees.
        if (entry.anonymized) {
          for (const key of ["clientName", "liveUrl", "repoUrl"] as const) {
            if (entry[key] !== undefined) {
              ctx.addIssue({ code: "custom", path: [key], message: `${key} is not allowed while anonymized is true` });
            }
          }
          if (entry.cover !== undefined) {
            ctx.addIssue({ code: "custom", path: ["cover"], message: "an anonymized case study has no screenshot" });
          }
        }
        if (entry.cover !== undefined && !entry.coverAlt) {
          ctx.addIssue({ code: "custom", path: ["coverAlt"], message: "cover requires coverAlt" });
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
    relatedService: z.string().optional(),
    seo,
    draft: z.boolean().default(false),
  }),
});

export const collections = { services, work, blog };
