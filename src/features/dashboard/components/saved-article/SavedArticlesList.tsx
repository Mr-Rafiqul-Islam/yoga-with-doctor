import type { SavedArticle } from "@/features/dashboard/data/savedArticlesData";
import { removeSavedArticleBySlug } from "@/lib/savedArticlesStorage";
import { SavedArticleListItem } from "./SavedArticleListItem";

type SavedArticlesListProps = {
  articles: SavedArticle[];
  userId: string;
};

export function SavedArticlesList({ articles, userId }: SavedArticlesListProps) {
  return (
    <main>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2" role="list">
        {articles.map((article) => (
          <SavedArticleListItem
            key={article.slug}
            article={article}
            onRemove={() => removeSavedArticleBySlug(userId, article.slug)}
          />
        ))}
      </ul>
    </main>
  );
}

