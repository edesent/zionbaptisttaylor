import type { MetadataRoute } from "next";

// Tells search engines they may crawl the whole site and where the sitemap is.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.ziontaylor.org/sitemap.xml",
    host: "https://www.ziontaylor.org",
  };
}
