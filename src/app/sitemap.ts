import type { MetadataRoute } from "next";

const BASE_URL = "https://sppmt.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/founder", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/activities", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/activities/education", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/activities/cleanliness", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/activities/livelihood", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/activities/healthcare", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/scholarship", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/donate", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/gallery", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
