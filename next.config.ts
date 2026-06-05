import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This project has its own lockfile; pin the workspace root so Next doesn't
  // walk up to the parent directory's lockfile.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
