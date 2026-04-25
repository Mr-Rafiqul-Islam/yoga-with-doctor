import type { Article } from "@/slices/articles";
import type { GetArticleBySlugResponse, GetArticlesResponse } from "@/slices/articles";

const API_REVALIDATE = 60 as const;

function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.API_BASE_URL ?? "";
}

const nextFetch: RequestInit = { next: { revalidate: API_REVALIDATE } };

/**
 * Public article by slug (same path as client RTK `getArticleBySlugPublic`).
 * Returns `null` if missing, non-OK, or misconfigured base URL.
 */
export async function fetchPublicArticleBySlug(
  slug: string,
): Promise<Article | null> {
  const base = getBaseUrl();
  if (!base || !slug) return null;
  const url = `${base}/api/v1/client/articles/free/${encodeURIComponent(slug)}`;
  try {
    const res = await fetch(url, nextFetch);
    if (!res.ok) return null;
    const json = (await res.json()) as GetArticleBySlugResponse;
    return json?.data?.article ?? null;
  } catch {
    return null;
  }
}

/** Slug list for `generateStaticParams` (paged: first page up to `limit` only). */
export async function fetchAllArticleSlugs(
  listLimit: number = 500,
): Promise<{ slug: string }[]> {
  const base = getBaseUrl();
  if (!base) return [];
  const url = `${base}/api/v1/client/articles/all?page=1&limit=${listLimit}`;
  try {
    const res = await fetch(url, nextFetch);
    if (!res.ok) return [];
    const json = (await res.json()) as GetArticlesResponse;
    const articles = json?.data?.articles;
    if (!Array.isArray(articles)) return [];
    return articles
      .filter((a) => a?.slug)
      .map((a) => ({ slug: a.slug as string }));
  } catch {
    return [];
  }
}

export type FetchArticlesPageParams = {
  page?: number;
  limit?: number;
};

export async function fetchArticlesPage(
  params: FetchArticlesPageParams = {},
): Promise<Article[]> {
  const base = getBaseUrl();
  if (!base) return [];
  const page = params.page ?? 1;
  const limit = params.limit ?? 50;
  const search = new URLSearchParams();
  search.set("page", String(page));
  search.set("limit", String(limit));
  const url = `${base}/api/v1/client/articles/all?${search.toString()}`;
  try {
    const res = await fetch(url, nextFetch);
    if (!res.ok) return [];
    const json = (await res.json()) as GetArticlesResponse;
    return json?.data?.articles ?? [];
  } catch {
    return [];
  }
}

export { API_REVALIDATE, getBaseUrl };
