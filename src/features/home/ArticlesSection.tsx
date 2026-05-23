"use client";

import Link from "next/link";
import { useMemo } from "react";
import {
  ArticleCard,
  ArticleCardSkeleton,
} from "@/features/articles/components/ArticleCard";
import { mapApiArticleToCard } from "@/features/articles/lib/mapApiArticle";
import { useGetArticlesQuery } from "@/slices/articles";

const PAGE_SIZE = 4;

export function ArticlesSection() {
  const { data, isLoading, isFetching } = useGetArticlesQuery({
    page: 1,
    limit: PAGE_SIZE,
  });

  const articles = useMemo(() => {
    const list = data?.data?.articles ?? [];
    return list.map(mapApiArticleToCard);
  }, [data?.data?.articles]);

  const showSkeleton = isLoading || isFetching;

  return (
    <section
      className="mx-auto mb-24 max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="home-articles-heading"
    >
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2
            id="home-articles-heading"
            className="font-anek-bangla text-3xl font-bold text-foreground dark:text-white"
          >
           Health & Wellness Articles
          </h2>
          <p className="mt-2 text-sm text-muted dark:text-gray-400">
          Evidence-based articles on healing, prevention, nutrition, movement, and healthy living.
          </p>
        </div>
        <Link
          href="/articles"
          className="shrink-0 rounded-radius-sm text-sm font-medium text-primary transition-colors hover:text-primary-variant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:text-primary"
        >
          View all
        </Link>
      </div>

      {showSkeleton ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: PAGE_SIZE }).map((_, i) => (
            <ArticleCardSkeleton key={i} />
          ))}
        </div>
      ) : articles.length === 0 ? (
        <p className="py-8 text-center text-body-md text-muted">
          No articles to show right now. Check back soon.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </section>
  );
}
