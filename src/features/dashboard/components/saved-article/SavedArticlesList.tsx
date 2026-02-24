import type { SavedArticle } from "@/features/dashboard/data/savedArticlesData";
import { SavedArticleListItem } from "./SavedArticleListItem";

type SavedArticlesListProps = {
  articles: SavedArticle[];
};

export function SavedArticlesList({ articles }: SavedArticlesListProps) {
  return (
    <main>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2" role="list">
        {articles.map((article) => (
          <SavedArticleListItem key={article.slug} article={article} />
        ))}
      </ul>
    </main>
  );
}

