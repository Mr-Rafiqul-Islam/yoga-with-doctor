import { dummyArticleCards } from "@/features/articles/data/dummyArticles";
import type { ArticleDetails } from "@/features/articles/data/dummyArticles";

export type SavedArticleStatus = "saved" | "finished";

export type SavedArticle = ArticleDetails & {
  status?: SavedArticleStatus;
};

export const SAVED_ARTICLES: SavedArticle[] = [
  {
    ...dummyArticleCards[0],
    status: "saved",
  },
  {
    ...dummyArticleCards[1],
    status: "saved",
  },
  {
    ...dummyArticleCards[2],
    status: "saved",
  },
  {
    ...dummyArticleCards[3],
    status: "saved",
  },
  {
    ...dummyArticleCards[4],
    status: "saved",
  },
  {
    ...dummyArticleCards[5],
    status: "finished",
  },
  {
    ...dummyArticleCards[6],
    status: "saved",
  },
];

