import type { APIRoute } from "astro";
import { packagesFor, slugOf, workFor } from "@/i18n/content";
import { formatNumber } from "@/i18n/t";

// A plain-text summary for AI crawlers (llms.txt). Not an official standard; cheap to keep.
export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL("https://siliconwarin.com");
  const url = (path: string) => new URL(path, base).href;
  const packages = await packagesFor("th");
  const work = await workFor("th");
  const body = [
    "# Silicon Warin",
    "",
    "> Silicon Warin by Wiriya: a solo developer in Thailand building fast SEO websites (AEO/GEO-ready), LINE OA integrations and back-office systems for Thai SMEs. Thai first; English at /en/.",
    "",
    "## Packages (starting prices, THB, excluding VAT)",
    ...packages.map((p) => `- [${p.data.name}](${url(`/services/#${slugOf(p.id)}`)}): ${p.data.tagline}. From ${formatNumber(p.data.priceFrom)} THB, ${p.data.duration}.`),
    "",
    "## Work",
    ...work.map((w) => `- [${w.data.title}](${url(`/work/${slugOf(w.id)}/`)}): ${w.data.summary} (figures awaiting client permission)`),
    "",
    "## Pages",
    `- [About](${url("/about/")})`,
    `- [Free website audit](${url("/audit/")})`,
    `- [Contact](${url("/contact/")})`,
    `- [English site](${url("/en/")})`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
