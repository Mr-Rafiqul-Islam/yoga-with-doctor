import type { ArticleDetails } from "@/features/articles/data/dummyArticles";

export type ArticleBadgeFilter = "all" | "FREE" | "PREMIUM";

export type ArticleFiltersState = {
  categories: string[];
  badge: ArticleBadgeFilter;
};

export type ArticleSortValue =
  | "newest"
  | "oldest"
  | "category-asc"
  | "category-desc";

/**
 * Filter articles by categories and badge.
 * Empty categories = show all categories. badge "all" = show both FREE and PREMIUM.
 */
export function filterArticles(
  articles: ArticleDetails[],
  filters: ArticleFiltersState
): ArticleDetails[] {
  const { categories, badge } = filters;
  return articles.filter((article) => {
    const categoryMatch =
      categories.length === 0 || categories.includes(article.category);
    const badgeMatch =
      badge === "all" || article.badge === badge;
    return categoryMatch && badgeMatch;
  });
}

/**
 * Sort articles. Preserves original order for "newest"; reverses for "oldest";
 * category-asc / category-desc sort by category string.
 */
export function sortArticles(
  articles: ArticleDetails[],
  sortValue: ArticleSortValue
): ArticleDetails[] {
  const copy = [...articles];
  switch (sortValue) {
    case "newest":
      return copy;
    case "oldest":
      return copy.reverse();
    case "category-asc":
      return copy.sort((a, b) => a.category.localeCompare(b.category));
    case "category-desc":
      return copy.sort((a, b) => b.category.localeCompare(a.category));
    default:
      return copy;
  }
}
