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
import type { ArticleCardItem } from "@/features/articles/data/dummyArticles";

type ArticlesPageContentProps = {
  featuredArticle: FeaturedArticle;
  articles: ArticleCardItem[];
};

export function ArticlesPageContent({
  featuredArticle,
  articles,
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

  return (
    <>
      <ArticlesPageHeader
        onFilterClick={() => setFilterPopupOpen(true)}
        onSortClick={() => setSortPopupOpen(true)}
      />

      <FeaturedArticleSection article={featuredArticle} />

      <ArticleGridSection articles={filteredAndSorted} />

      <Pagination totalPages={3} className="mt-16" />

      <FilterPopup
        isOpen={filterPopupOpen}
        onClose={() => setFilterPopupOpen(false)}
        initialFilters={filters}
        onApply={(next) => setFilters(next)}
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
