import type { NextConfig } from "next";

/**
 * Static export so the site can be served from GitHub Pages.
 * In CI (GITHUB_PAGES=true) we serve from a project subpath (/portfolio);
 * locally we serve from the root so `next dev` / `next build` just work.
 */
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "portfolio";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isPages ? `/${repo}` : undefined,
  // expose the base path to the client so plain <a>/<img> asset URLs resolve
  env: { NEXT_PUBLIC_BASE_PATH: isPages ? `/${repo}` : "" },
};

export default nextConfig;
