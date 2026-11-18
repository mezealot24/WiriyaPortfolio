---
# [PENDING PERMISSION] The whole case is unapproved. Every metric renders with a "รออนุญาตจากลูกค้า" badge.
# TODO(owner): before removing the badges — (1) written permission from the client (LINE is fine),
# (2) the period of each figure, (3) keep Search Console screenshots as evidence,
# (4) agree how much of the ERP may be described. Then set clientVisibility and each metric's period.
title: จากเว็บ WordPress ที่โดนแฮ็ก สู่ 1,756 clicks ต่อสัปดาห์
titleHtml: จากเว็บ WordPress ที่<span class="nb">โดนแฮ็ก</span> สู่ <span class="nb">1,756 clicks</span> <span class="nb">ต่อสัปดาห์</span>
summary: สร้างเว็บดีลเลอร์รถยนต์ใหม่บน Cloudflare Workers แก้ meta และ structure ตามข้อมูล Search Console หน้ารุ่นรถหนึ่งหน้าได้ clicks เพิ่ม 88%
client: ดีลเลอร์รถยนต์ (ไม่ระบุชื่อจนกว่าจะได้รับอนุญาต)
clientVisibility: pending
industry: ดีลเลอร์รถยนต์
tags: [Website, SEO, Cloudflare, Backoffice]
services: [Website, SEO, Web app]
role: Solo developer
date: 2026-11-18
stack:
  # TODO(owner): add the web framework actually used for the dealer site (open question in site-structure.md §8.4).
  - group: เว็บ
    items: [Cloudflare Workers]
  - group: ระบบหลังบ้าน
    items: [Next.js 16, TanStack Table, Drizzle, Neon Postgres, Better-auth]
metrics:
  - key: clicks-week
    label: clicks ต่อสัปดาห์ จาก Google Search
    value: 1756
    source: Google Search Console
  - key: avg-position
    label: average position
    value: 5.6
    decimals: 1
    source: Google Search Console
  - key: wow
    label: clicks สัปดาห์ต่อสัปดาห์ (WoW)
    value: 17
    prefix: "+"
    suffix: "%"
    source: Google Search Console
  - key: model-page
    label: clicks หน้ารุ่นรถหนึ่งหน้า หลังแก้ title/meta
    stripLabel: clicks หน้ารุ่นรถ หลังแก้ meta
    value: 88
    prefix: "+"
    suffix: "%"
    source: Google Search Console
    accent: true
  # TODO(owner): visits are not a Search Console metric; confirm where these two figures come from.
  - key: visits-day
    label: visits ต่อวัน
    stripLabel: visits ต่อวัน (78% <span class="nb">มาจาก</span> Google)
    value: 1360
    prefix: "~"
    source: ข้อมูล analytics ของเว็บลูกค้า (รอยืนยันแหล่ง)
  - key: organic-share
    label: สัดส่วน visits ที่มาจาก Google
    stripLabel: visits <span class="nb">มาจาก</span> Google
    value: 78
    suffix: "%"
    source: ข้อมูล analytics ของเว็บลูกค้า (รอยืนยันแหล่ง)
proof: [clicks-week, avg-position, visits-day]
highlight: [model-page, wow, organic-share]
chart:
  unit: clicks / week
  marker: ย้ายขึ้น Cloudflare
  alt: ภาพประกอบแนวโน้ม clicks ที่เพิ่มขึ้นหลังย้ายเว็บ (ไม่ใช่ข้อมูลจริง)
relatedPackage: growth-ai-search
featured: true
seo:
  title: "1,756 clicks ต่อสัปดาห์: เคสทำเว็บดีลเลอร์รถยนต์ – Silicon Warin"
  description: ปัญหา แนวทาง และผลลัพธ์ของการย้ายเว็บดีลเลอร์รถยนต์ขึ้น Cloudflare Workers พร้อมตัวเลขจาก Search Console และระบบหลังบ้านของทีม
---

## ปัญหา

เว็บ WordPress เดิมของดีลเลอร์โดนแฮ็ก ช้า และดูแลยาก ทำให้เสียทั้งความน่าเชื่อถือ และเสี่ยงเสียลูกค้าที่ค้นหารถบน Google

## แนวทาง

- **สร้างใหม่บน Cloudflare Workers แบบ static-first** แทนการซ่อม WordPress ต่อ ไม่ต้องพึ่ง plugin ที่ต้องคอยอัปเดต
- **จัดโครงหน้าและ URL ตาม intent** ของคนที่ค้นหารถ
- **แก้ title/meta และ heading จากข้อมูล Search Console** ไม่ใช่จากการเดา
- **ทำหน้ารุ่นรถให้ชัดเจน**

## Stack และสิ่งที่ส่งมอบ

### ตอน A: เว็บ + SEO

- เว็บดีลเลอร์ใหม่บน Cloudflare Workers
- โครง URL, heading และ meta ที่วางตามข้อมูล Search Console
- หน้ารุ่นรถที่แก้ title/meta ใหม่

### ตอน B: ระบบหลังบ้าน

ระบบ ERP ให้ทีมดีลเลอร์ใช้จัดการข้อมูลภายใน สร้างด้วย Next.js 16, TanStack Table, Drizzle, Neon Postgres และ Better-auth
