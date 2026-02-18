import {
  ArticlesPageContent,
} from "@/features/articles/components";
import { featuredArticle, dummyArticleCards } from "@/features/articles/data/dummyArticles";

export default function ArticlesPage() {
  const withoutFeaturedArticle = dummyArticleCards.filter(article => article.slug !== featuredArticle.slug);
  return (
    <main className="mx-auto w-full max-w-7xl flex-grow px-4 py-10 sm:px-6 lg:px-8">
      <ArticlesPageContent
        featuredArticle={featuredArticle}
        articles={withoutFeaturedArticle}
      />
    </main>
  );
}
