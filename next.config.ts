import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This project has its own lockfile; pin the workspace root so Next doesn't
  // walk up to the parent directory's lockfile.
  turbopack: {
    root: __dirname,
  },

  // Permanent (308) redirects from the church's old WordPress URLs to the new
  // pages, so existing links/bookmarks keep working once the domain is pointed
  // here. 308 is the method-preserving permanent redirect (the modern 301) and
  // is treated the same as 301 by search engines.
  async redirects() {
    return [
      { source: "/about-2", destination: "/about", permanent: true },
      {
        source: "/about-2/meet-our-pastor",
        destination: "/about/pastor",
        permanent: true,
      },
      {
        source: "/about-2/meet-our-elders",
        destination: "/about/leadership",
        permanent: true,
      },
      {
        source: "/about-2/zions-statement-of-faith-2",
        destination: "/beliefs",
        permanent: true,
      },
      {
        source: "/about-2/zions-church-covenant",
        destination: "/covenant",
        permanent: true,
      },
      {
        source: "/about-2/teaching-on-the-church-covenant",
        destination: "/covenant/teaching",
        permanent: true,
      },
      {
        source: "/about-2/frequently-asked-questions",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/about-2/how-do-i-become-a-member-at-zion",
        destination: "/membership",
        permanent: true,
      },
      {
        source: "/how-can-i-know-i-am-a-christian",
        destination: "/gospel",
        permanent: true,
      },
      // /welcome was an empty WordPress placeholder — send it to the homepage.
      { source: "/welcome", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
