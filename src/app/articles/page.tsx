import {
  ArticlesPageContent,
} from "@/features/articles/components";
import { featuredArticle, dummyArticleCards } from "@/features/articles/data/dummyArticles";

export default function ArticlesPage() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-grow px-4 py-10 sm:px-6 lg:px-8">
      <ArticlesPageContent
        featuredArticle={featuredArticle}
        articles={dummyArticleCards}
      />
    </main>
  );
}
