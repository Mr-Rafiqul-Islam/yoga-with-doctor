import type { ArticleDetails, FeaturedArticle } from "@/features/articles/data/dummyArticles";
import type { Article } from "@/slices/articles";
import {
  DEFAULT_AUTHOR_FOR_MAP,
  YWD_TEAM_AUTHOR,
  fallbackFeaturedArticle,
} from "@/features/articles/lib/articleDefaults";
import { formatTimeAgo } from "@/utils/formatTimeAgo";

/** API may send rich HTML in `content` or in `description`. */
export function bodyHtmlFromArticle(article: {
  description: string | null;
  content?: string | null;
}): string {
  const fromContent = article.content?.trim() ?? "";
  if (fromContent) return fromContent;

  const desc = article.description?.trim() ?? "";
  if (!desc) return "";

  const looksLikeHtml = /<\s*[/a-z!]/i.test(desc);
  if (looksLikeHtml) return desc;

  return desc ? `<p>${desc}</p>` : "";
}

export function mapToArticleDetails(article: {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  content?: string | null;
  category: string | null;
  image: string | null;
  authorName: string | null;
  access: string;
}): ArticleDetails {
  return {
    slug: article.slug,
    image: article.image || fallbackFeaturedArticle.image,
    imageAlt: article.title || "Article cover image",
    badge: article.access === "PREMIUM" ? "PREMIUM" : "FREE",
    readTime: "5 min read",
    category: article.category || "General",
    title: article.title,
    description: article.description || "",
    author: {
      ...DEFAULT_AUTHOR_FOR_MAP,
      name: article.authorName || YWD_TEAM_AUTHOR.name,
    },
    actionLabel: "Read More",
    href: `/articles/${article.slug}`,
    tags: [],
    detailsContent: bodyHtmlFromArticle(article) || "<p></p>",
  };
}

export function mapApiArticleToCard(article: {
  title: string;
  slug: string;
  description: string | null;
  category: string | null;
  image: string | null;
  authorName: string | null;
  access: string;
  createdAt: string;
}): ArticleDetails {
  return {
    slug: article.slug,
    image: article.image || fallbackFeaturedArticle.image,
    imageAlt: article.title || "Article cover image",
    badge: article.access === "PREMIUM" ? "PREMIUM" : "FREE",
    category: article.category || "General",
    title: article.title,
    description: article.description || "",
    timeAgo: formatTimeAgo(article.createdAt),
    author: {
      ...DEFAULT_AUTHOR_FOR_MAP,
      name: article.authorName || DEFAULT_AUTHOR_FOR_MAP.name,
    },
    actionLabel: "Read More",
    href: `/articles/${article.slug}`,
    tags: [],
    detailsContent: "",
  };
}

export function mapToFeaturedArticle(article: {
  title: string;
  slug: string;
  description: string | null;
  category: string | null;
  image: string | null;
  authorName: string | null;
}): FeaturedArticle {
  return {
    slug: article.slug,
    image: article.image || fallbackFeaturedArticle.image,
    imageAlt: article.title || "Featured article image",
    category: article.category || "General",
    readTime: "5 min read",
    title: article.title,
    description: article.description || "",
    author: {
      ...YWD_TEAM_AUTHOR,
      name: article.authorName || YWD_TEAM_AUTHOR.name,
    },
    tags: [],
    href: `/articles/${article.slug}`,
    detailsContent: "",
  };
}

function normalizeCategory(c: string | null | undefined): string {
  return (c ?? "").trim().toLowerCase();
}

/**
 * Picks up to `limit` related cards: same category first (by `createdAt` desc), then the rest.
 */
export function selectRelatedArticleCards(
  currentSlug: string,
  currentCategory: string | null,
  listArticles: Article[],
  limit = 3,
): ArticleDetails[] {
  const others = listArticles.filter((a) => a.slug !== currentSlug);
  if (others.length === 0) return [];

  const cat = normalizeCategory(currentCategory);
  const byDate = (a: Article, b: Article) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();

  const sameCat =
    cat.length > 0
      ? others.filter((a) => normalizeCategory(a.category) === cat).sort(byDate)
      : [];

  const sameIds = new Set(sameCat.map((a) => a.id));
  const rest = others.filter((a) => !sameIds.has(a.id)).sort(byDate);

  const ordered = [...sameCat, ...rest];
  return ordered.slice(0, limit).map(mapApiArticleToCard);
}
