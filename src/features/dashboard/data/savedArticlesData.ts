import type { ArticleDetails } from "@/features/articles/data/dummyArticles";

export type SavedArticleStatus = "saved" | "finished";

export type SavedArticle = ArticleDetails & {
  status?: SavedArticleStatus;
};
