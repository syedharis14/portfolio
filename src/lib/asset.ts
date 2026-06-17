/**
 * Prefix a /public asset path with the deployment base path.
 * Plain <a href> / <img src> are NOT auto-prefixed by Next (unlike <Link>),
 * so static files (resume.pdf, images) must be wrapped with this on GitHub Pages.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${basePath}${path}`;
