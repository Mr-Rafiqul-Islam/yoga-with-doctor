import { ClassItem } from "@/slices/classes";

const REVALIDATE = 60 as const;

function getBaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    process.env.API_BASE_URL ??
    ""
  );
}

/** Get a free video by slug, or undefined if not found. */
export async function getFreeVideoBySlug(
  slug: string,
): Promise<ClassItem | undefined> {
  const base = getBaseUrl();
  if (!base) return undefined;
  try {
    const res = await fetch(`${base}/api/v1/client/classes/${slug}`, {
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) throw new Error("Failed to fetch services");

    const data = await res.json();

    return data.data.class;
  } catch (error) {
    console.error("Error fetching services:", error);
    return undefined;
  }
}

type ClassRow = { access?: string; slug?: string };

/**
 * Public class slugs for `generateStaticParams` on `/videos/free/[slug]`.
 * Prefer `access=PUBLIC` when the API supports it; else same unfiltered list as
 * the free videos page, filtered to `access === "PUBLIC"`.
 */
export async function getFreeVideoSlugsForStaticParams(
  listLimit: number = 500,
): Promise<{ slug: string }[]> {
  const base = getBaseUrl();
  if (!base) return [];

  const fetchPage = (withAccessPublic: boolean) => {
    const search = new URLSearchParams();
    search.set("page", "1");
    search.set("limit", String(listLimit));
    if (withAccessPublic) search.set("access", "PUBLIC");
    return fetch(`${base}/api/v1/client/classes?${search.toString()}`, {
      next: { revalidate: REVALIDATE },
    });
  };

  try {
    let res = await fetchPage(true);
    if (!res.ok) {
      res = await fetchPage(false);
    }
    if (!res.ok) return [];
    const json = await res.json();
    const classes = json?.data?.classes;
    if (!Array.isArray(classes)) return [];
    return (classes as ClassRow[])
      .filter((c) => c?.slug && c.access === "PUBLIC")
      .map((c) => ({ slug: c.slug as string }));
  } catch {
    return [];
  }
}

export { REVALIDATE as FREE_VIDEOS_REVALIDATE_SECONDS };
