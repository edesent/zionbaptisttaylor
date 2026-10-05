import type { MetadataRoute } from "next";

const BASE = "https://www.ziontaylor.org";

// Keep in sync with metadataBase/canonical in layout.tsx.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.7 },
    { path: "/about/pastor", priority: 0.7 },
    { path: "/about/leadership", priority: 0.6 },
    { path: "/beliefs", priority: 0.8 },
    { path: "/covenant", priority: 0.6 },
    { path: "/covenant/teaching", priority: 0.5 },
    { path: "/membership", priority: 0.6 },
    { path: "/faq", priority: 0.6 },
    { path: "/gospel", priority: 0.7 },
    { path: "/missions", priority: 0.5 },
    { path: "/directions", priority: 0.6 },
    { path: "/live", priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
