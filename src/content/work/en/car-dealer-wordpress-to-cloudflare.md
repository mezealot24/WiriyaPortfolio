---
# [PENDING PERMISSION] Keep in sync with th/car-dealer-wordpress-to-cloudflare.md.
title: From a hacked WordPress site to 1,756 clicks a week
summary: I rebuilt a car dealer's website on Cloudflare Workers and fixed its meta and structure from Search Console data. One model page gained 88% more clicks.
client: Car dealer (anonymous until permission is granted)
clientVisibility: pending
industry: Car dealer
tags: [Website, SEO, Cloudflare, Backoffice]
services: [Website, SEO, Web app]
role: Solo developer
date: 2026-11-18
stack:
  - group: Website
    items: [Cloudflare Workers]
  - group: Back office
    items: [Next.js 16, TanStack Table, Drizzle, Neon Postgres, Better-auth]
metrics:
  - key: clicks-week
    label: clicks per week from Google Search
    value: 1756
    source: Google Search Console
  - key: avg-position
    label: average position
    value: 5.6
    decimals: 1
    source: Google Search Console
  - key: wow
    label: clicks week over week (WoW)
    value: 17
    prefix: "+"
    suffix: "%"
    source: Google Search Console
  - key: model-page
    label: clicks on one model page after fixing title/meta
    stripLabel: model-page clicks after meta fix
    value: 88
    prefix: "+"
    suffix: "%"
    source: Google Search Console
    accent: true
  - key: visits-day
    label: visits per day
    stripLabel: visits per day (78% from Google)
    value: 1360
    prefix: "~"
    source: Client's site analytics (source to be confirmed)
  - key: organic-share
    label: share of visits from Google
    stripLabel: visits from Google
    value: 78
    suffix: "%"
    source: Client's site analytics (source to be confirmed)
proof: [clicks-week, avg-position, visits-day]
highlight: [model-page, wow, organic-share]
chart:
  unit: clicks / week
  marker: Moved to Cloudflare
  alt: Illustrative trend of clicks rising after the migration (not real data)
relatedPackage: growth-ai-search
featured: true
seo:
  title: "1,756 clicks a week: a car dealer website case study – Silicon Warin"
  description: The problem, approach and results of moving a car dealer's website to Cloudflare Workers, with Search Console figures and the team's back office.
---

## Problem

The dealer's old WordPress site had been hacked, was slow and hard to maintain. That cost trust, and risked losing customers searching for cars on Google.

## Approach

- **Rebuilt static-first on Cloudflare Workers** instead of patching WordPress, with no plugins to keep updating
- **Structured pages and URLs by search intent**
- **Fixed titles, meta and headings from Search Console data**, not guesswork
- **Made the car model pages clear**

## Stack and deliverables

### Part A: website + SEO

- A new dealer website on Cloudflare Workers
- URL structure, headings and meta based on Search Console data
- Model pages with rewritten titles and meta

### Part B: back office

An ERP the dealer's team uses to manage internal data, built with Next.js 16, TanStack Table, Drizzle, Neon Postgres and Better-auth.
