"use client";

import { useState, useMemo } from "react";
import { Pagination } from "@/features/courses/components";
import {
  ArticlesPageHeader,
  FeaturedArticleSection,
  ArticleGridSection,
  FilterPopup,
  SortPopup,
  type ArticleFiltersState,
} from "@/features/articles/components";
import {
  filterArticles,
  sortArticles,
  type ArticleSortValue,
} from "@/lib/filterSortArticles";
import type { FeaturedArticle } from "@/features/articles/data/dummyArticles";
import type { ArticleDetails } from "@/features/articles/data/dummyArticles";

type ArticlesPageContentProps = {
  featuredArticle: FeaturedArticle;
  articles: ArticleDetails[];
  pagination?: {
    totalPages: number;
    currentPage?: number;
    onPageChange?: (page: number) => void;
  };
};

export function ArticlesPageContent({
  featuredArticle,
  articles,
  pagination,
}: ArticlesPageContentProps) {
  const [filterPopupOpen, setFilterPopupOpen] = useState(false);
  const [sortPopupOpen, setSortPopupOpen] = useState(false);
  const [filters, setFilters] = useState<ArticleFiltersState>({
    categories: [],
    badge: "all",
  });
  const [sortValue, setSortValue] = useState<ArticleSortValue>("newest");

  const filtered = useMemo(
    () => filterArticles(articles, filters),
    [articles, filters]
  );
  const filteredAndSorted = useMemo(
    () => sortArticles(filtered, sortValue),
    [filtered, sortValue]
  );
  const categoryOptions = useMemo(() => {
    const categories = new Set<string>();
    for (const article of articles) {
      if (article.category?.trim()) {
        categories.add(article.category.trim());
      }
    }
    return Array.from(categories);
  }, [articles]);

  return (
    <>
      <ArticlesPageHeader
        onFilterClick={() => setFilterPopupOpen(true)}
        onSortClick={() => setSortPopupOpen(true)}
      />

      <FeaturedArticleSection article={featuredArticle} />

      <ArticleGridSection articles={filteredAndSorted} />

      {pagination?.totalPages ? (
        <Pagination
          totalPages={pagination.totalPages}
          currentPage={pagination.currentPage}
          onPageChange={pagination.onPageChange}
          className="mt-16"
        />
      ) : null}

      <FilterPopup
        isOpen={filterPopupOpen}
        onClose={() => setFilterPopupOpen(false)}
        initialFilters={filters}
        onApply={(next) => setFilters(next)}
        categoryOptions={categoryOptions}
      />

      <SortPopup
        isOpen={sortPopupOpen}
        onClose={() => setSortPopupOpen(false)}
        currentSort={sortValue}
        onApply={(next) => setSortValue(next)}
      />
    </>
  );
}
