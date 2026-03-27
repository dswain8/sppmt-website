import type { MetadataRoute } from "next";

const BASE_URL = "https://sppmt.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/founder", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/programs", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/gallery", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/education", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/healthcare", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/agriculture", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/civic-sense", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/employment", priority: 0.5, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
