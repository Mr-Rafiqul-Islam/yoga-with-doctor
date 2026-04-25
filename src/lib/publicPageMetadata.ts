import type { Metadata } from "next";

const SITE_NAME = "Yoga With Doctor";

function absoluteUrl(path: string): string | undefined {
  const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "";
  if (!base) return undefined;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

/**
 * Consistent SEO metadata for public static pages (title, description, OG, Twitter).
 * Root layout uses `title.template` so `title` here is usually the segment title only.
 */
export function publicPageMetadata(opts: {
  title: string;
  description: string;
  /** Site path for `og:url`, e.g. `/about` */
  path?: string;
}): Metadata {
  const url = opts.path ? absoluteUrl(opts.path) : undefined;
  return {
    title: opts.title,
    description: opts.description,
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      title: opts.title,
      description: opts.description,
      ...(url && { url }),
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
    },
  };
}

/**
 * `generateMetadata` for dynamic public routes (article, class, course, etc.) with canonical path.
 */
export function dynamicPageMetadata(opts: {
  title: string;
  description?: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(opts.path);
  const desc = opts.description?.trim() ?? "";
  return {
    title: opts.title,
    ...(desc && { description: desc }),
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      title: opts.title,
      ...(desc && { description: desc }),
      ...(url && { url }),
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      ...(desc && { description: desc }),
    },
  };
}
