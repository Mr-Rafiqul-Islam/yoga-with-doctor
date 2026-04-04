import type { ArticleDetails } from "@/features/articles/data/dummyArticles";
import type { SavedArticle } from "@/features/dashboard/data/savedArticlesData";

const STORAGE_PREFIX = "ywd-saved-articles";

export const SAVED_ARTICLES_CHANGED_EVENT = "ywd-saved-articles-changed";

export type StoredSavedArticleRow = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  category: string;
  badge: "FREE" | "PREMIUM";
  readTime?: string;
  authorName: string;
  authorTitle: string;
  authorAvatarSrc: string;
  authorBioSnippet: string;
  authorFullBio: string;
  authorProfileLink: string;
  href: string;
  savedAt: string;
};

function storageKey(userId: string): string {
  return `${STORAGE_PREFIX}:${userId}`;
}

function isStoredRow(value: unknown): value is StoredSavedArticleRow {
  if (value == null || typeof value !== "object") return false;
  const row = value as Record<string, unknown>;
  return (
    typeof row.id === "string" &&
    typeof row.slug === "string" &&
    typeof row.title === "string" &&
    typeof row.href === "string"
  );
}

export function readSavedArticleRows(userId: string): StoredSavedArticleRow[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(storageKey(userId));
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isStoredRow);
  } catch {
    return [];
  }
}

export function writeSavedArticleRows(
  userId: string,
  rows: StoredSavedArticleRow[]
): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(storageKey(userId), JSON.stringify(rows));
}

export function dispatchSavedArticlesChanged(userId: string): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent(SAVED_ARTICLES_CHANGED_EVENT, { detail: { userId } })
  );
}

export function isArticleSaved(userId: string, articleId: string): boolean {
  return readSavedArticleRows(userId).some((r) => r.id === articleId);
}

export function removeSavedArticleBySlug(
  userId: string,
  slug: string
): void {
  const rows = readSavedArticleRows(userId);
  const next = rows.filter((r) => r.slug !== slug);
  if (next.length === rows.length) return;
  writeSavedArticleRows(userId, next);
  dispatchSavedArticlesChanged(userId);
}

export function toggleSavedArticle(
  userId: string,
  row: Omit<StoredSavedArticleRow, "savedAt">
): boolean {
  const rows = readSavedArticleRows(userId);
  const idx = rows.findIndex((r) => r.id === row.id);
  if (idx >= 0) {
    rows.splice(idx, 1);
    writeSavedArticleRows(userId, rows);
    dispatchSavedArticlesChanged(userId);
    return false;
  }
  rows.unshift({
    ...row,
    savedAt: new Date().toISOString(),
  });
  writeSavedArticleRows(userId, rows);
  dispatchSavedArticlesChanged(userId);
  return true;
}

export function articleDetailsToStoredRow(
  article: ArticleDetails,
  articleApiId: string
): Omit<StoredSavedArticleRow, "savedAt"> {
  const badge = article.badge ?? "FREE";
  return {
    id: articleApiId,
    slug: article.slug,
    title: article.title,
    description: article.description,
    image: article.image,
    imageAlt: article.imageAlt,
    category: article.category,
    badge: badge === "PREMIUM" ? "PREMIUM" : "FREE",
    readTime: article.readTime,
    authorName: article.author.name,
    authorTitle: article.author.title,
    authorAvatarSrc: article.author.avatarSrc,
    authorBioSnippet: article.author.bioSnippet,
    authorFullBio: article.author.fullBio,
    authorProfileLink: article.author.profileLink,
    href: article.href,
  };
}

export function storedRowToSavedArticle(row: StoredSavedArticleRow): SavedArticle {
  return {
    slug: row.slug,
    image: row.image,
    imageAlt: row.imageAlt,
    badge: row.badge,
    readTime: row.readTime,
    category: row.category,
    title: row.title,
    description: row.description,
    author: {
      name: row.authorName,
      title: row.authorTitle,
      avatarSrc: row.authorAvatarSrc,
      bioSnippet: row.authorBioSnippet,
      fullBio: row.authorFullBio,
      profileLink: row.authorProfileLink,
    },
    actionLabel: "Read More",
    href: row.href,
    tags: [],
    detailsContent: "",
    status: "saved",
  };
}

export function savedArticlesFromStorage(userId: string): SavedArticle[] {
  return readSavedArticleRows(userId).map(storedRowToSavedArticle);
}
