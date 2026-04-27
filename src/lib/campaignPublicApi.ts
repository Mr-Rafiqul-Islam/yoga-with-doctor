const API_REVALIDATE = 60 as const;

function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.API_BASE_URL ?? "";
}

const nextFetch: RequestInit = { next: { revalidate: API_REVALIDATE } };

export type CampaignItemSummary = {
  id?: string;
  title?: string;
  slug?: string;
  price?: unknown;
  amount?: unknown;
  salePrice?: unknown;
  offerPrice?: unknown;
  product?: {
    id?: string;
    title?: string;
    currency?: string;
    price?: unknown;
    course?: { bannerUrl?: string | null; title?: string; slug?: string } | null;
  } | null;
  productData?: { price?: unknown } | null;
  children?: Array<{
    id?: string;
    title?: string;
    price?: unknown;
    compareAtPrice?: unknown;
    currency?: string;
    isDefaultSelected?: boolean;
    isRequired?: boolean;
    course?: { bannerUrl?: string | null; title?: string; slug?: string } | null;
  }> | null;
  [key: string]: unknown;
};

type CampaignItemApiResponse = {
  success?: boolean;
  data?: { campaignItem?: CampaignItemSummary };
};

export function resolvePriceTakaFromCampaignItem(input: unknown): number | null {
  const candidates: unknown[] = [];
  if (input && typeof input === "object") {
    const obj = input as Record<string, unknown>;
    candidates.push(
      obj.offerPrice,
      obj.salePrice,
      obj.price,
      obj.amount,
      (obj.product as Record<string, unknown> | undefined)?.price,
      (obj.productData as Record<string, unknown> | undefined)?.price,
    );
  }
  for (const v of candidates) {
    if (typeof v === "number" && Number.isFinite(v) && v > 0) return Math.round(v);
    if (typeof v === "string") {
      const n = Number(v);
      if (Number.isFinite(n) && n > 0) return Math.round(n);
    }
  }
  return null;
}

/**
 * Public campaign item by slug.
 * Returns `null` if missing, non-OK, or misconfigured base URL.
 */
export async function fetchCampaignItemBySlug(
  slug: string,
): Promise<CampaignItemSummary | null> {
  const base = getBaseUrl();
  if (!base || !slug) return null;

  const url = `${base}/api/v1/client/campaigns/${encodeURIComponent(slug)}`;
  try {
    const res = await fetch(url, nextFetch);
    if (!res.ok) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          `[campaignPublicApi] fetchCampaignItemBySlug failed: ${res.status} ${res.statusText} (${url})`,
        );
      }
      return null;
    }
    const json = (await res.json()) as CampaignItemApiResponse;
    return json?.data?.campaignItem ?? null;
  } catch {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `[campaignPublicApi] fetchCampaignItemBySlug threw (url=${url})`,
      );
    }
    return null;
  }
}

export { API_REVALIDATE, getBaseUrl };
