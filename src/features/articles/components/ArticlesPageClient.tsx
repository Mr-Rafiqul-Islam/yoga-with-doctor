"use client";

import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { useGetArticlesQuery } from "@/slices/articles";
import { ArticlesPageContent } from "./ArticlesPageContent";
import {
  mapApiArticleToCard,
  mapToFeaturedArticle,
} from "@/features/articles/lib/mapApiArticle";

const PAGE_SIZE = 10;

export function ArticlesPageClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = useGetArticlesQuery({
    page: currentPage,
    limit: PAGE_SIZE,
  });

  const apiArticles = data?.data?.articles ?? [];
  const totalPages = data?.data?.pagination?.totalPages ?? 0;

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const featuredArticle =
    apiArticles.length > 0 ? mapToFeaturedArticle(apiArticles[0]) : null;
  const articles =
    apiArticles.length > 1
      ? apiArticles.slice(1).map(mapApiArticleToCard)
      : [];

  if (isLoading && !data) {
    return (
      <section className="mx-auto w-full max-w-7xl flex-grow px-4 py-10 sm:px-6 lg:px-8">
        <LoadingScreen message="Loading articles..." />
      </section>
    );
  }

  if (isError) {
    return (
      <section className="mx-auto w-full max-w-7xl flex-grow px-4 py-10 sm:px-6 lg:px-8 min-h-[400px]">
        <p className="text-md text-red-500">
          Unable to load articles from server or no articles has been published yet.
        </p>
      </section>
    );
  }

  return (
    <ArticlesPageContent
      featuredArticle={featuredArticle}
      articles={articles}
      pagination={{
        totalPages,
        currentPage,
        onPageChange: setCurrentPage,
      }}
    />
  );
}
