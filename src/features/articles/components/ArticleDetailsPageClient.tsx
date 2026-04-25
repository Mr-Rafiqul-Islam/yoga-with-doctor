import { ArticleDetailsView } from "./ArticleDetailsView";
import type { ArticleDetails } from "@/features/articles/data/dummyArticles";

type ArticleDetailsPageClientProps = {
  article: ArticleDetails;
  relatedArticles: ArticleDetails[];
  /** API article id — used as stable key in per-user saved library (localStorage). */
  articleApiId: string;
};

/**
 * Server-safe wrapper: passes RSC-fetched data into the client `ArticleDetailsView`.
 * No client-side article fetch; avoids duplicate requests vs generateMetadata.
 */
export function ArticleDetailsPageClient({
  article,
  relatedArticles,
  articleApiId,
}: ArticleDetailsPageClientProps) {
  return (
    <ArticleDetailsView
      article={article}
      relatedArticles={relatedArticles}
      articleApiId={articleApiId}
    />
  );
}
