import type { APIRoute } from "astro";

// TODO(owner): confirm the AI-crawler policy (site-structure.md §5.1). Everything is allowed for now.
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL("sitemap-index.xml", site ?? "https://siliconwarin.com").href;
  const ai = ["GPTBot", "Google-Extended", "PerplexityBot", "ClaudeBot"];
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    ...ai.flatMap((bot) => [`User-agent: ${bot}`, "Allow: /", ""]),
    `Sitemap: ${sitemap}`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
