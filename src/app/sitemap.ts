import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  { path: "/", priority: 1 },
  { path: "/club", priority: 0.9 },
  { path: "/store", priority: 0.9 },
  { path: "/about", priority: 0.7 },
  { path: "/visit", priority: 0.8 },
  { path: "/faq", priority: 0.6 },
  { path: "/contact", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
