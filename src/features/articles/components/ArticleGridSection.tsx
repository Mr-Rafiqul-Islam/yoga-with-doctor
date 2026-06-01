import type { ArticleDetails } from "@/features/articles/data/dummyArticles";
import { ArticleCard } from "./ArticleCard";

type ArticleGridSectionProps = {
  articles: ArticleDetails[];
};

/**
 * Responsive grid of article cards (1 / 2 / 3 columns).
 */
export function ArticleGridSection({ articles }: ArticleGridSectionProps) {
  if (articles.length === 0) {
    return (
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" aria-label="Article listings">
        <p className="col-span-full py-32 text-center text-body-md text-muted">
          No articles found.
        </p>
      </section>
    );
  }

  return (
    <section
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      aria-label="Article listings"
    >
      {articles.map((article, index) => (
        <ArticleCard key={`${article.title}-${index}`} article={article} />
      ))}
    </section>
  );
}
