import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Explicitly welcome major search engine and AI search bots
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Applebot",
          "Applebot-Extended",
          "Bravebot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "GPTBot",
          "ClaudeBot",
          "Claude-Web",
          "PerplexityBot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://sppmt.org/sitemap.xml",
    host: "https://sppmt.org",
  };
}
