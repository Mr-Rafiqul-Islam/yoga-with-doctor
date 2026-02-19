"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { FREE_VIDEOS } from "../data/freeVideosData";
import { filterVideos } from "@/utils/filterVideos";
import { FilterAndSearchSection } from "./FilterAndSearchSection";
import { VideoGridSection } from "./VideoGridSection";

const PAGE_SIZE = 6;
const INITIAL_LOAD_MS = 700;

/**
 * Client wrapper for the Free Videos page: filter state + load more + initial skeleton.
 * Renders FilterAndSearchSection (controlled) and VideoGridSection with filtered list.
 */
export function FreeVideosPageContent() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [durationFilter, setDurationFilter] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    const t = setTimeout(() => setIsInitialLoading(false), INITIAL_LOAD_MS);
    return () => clearTimeout(t);
  }, []);

  const filterParams = useMemo(
    () => ({
      searchQuery: searchValue,
      categoryFilter,
      durationFilter,
    }),
    [searchValue, categoryFilter, durationFilter]
  );

  const filteredVideos = useMemo(
    () => filterVideos(FREE_VIDEOS, filterParams),
    [filterParams]
  );

  const displayedVideos = useMemo(
    () => filteredVideos.slice(0, visibleCount),
    [filteredVideos, visibleCount]
  );

  const hasMore = visibleCount < filteredVideos.length;
  const showShowLess = visibleCount > PAGE_SIZE;
  const hasNoResults = !isInitialLoading && filteredVideos.length === 0;

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, filteredVideos.length));
  }, [filteredVideos.length]);

  const handleSearchChange = useCallback((value: string) => {
    setSearchValue(value);
    setVisibleCount(PAGE_SIZE);
  }, []);

  const handleCategoryChange = useCallback((value: string) => {
    setCategoryFilter(value);
    setVisibleCount(PAGE_SIZE);
  }, []);

  const handleDurationChange = useCallback((value: string) => {
    setDurationFilter(value);
    setVisibleCount(PAGE_SIZE);
  }, []);

  const handleShowLess = useCallback(() => {
    setVisibleCount(PAGE_SIZE);
  }, []);

  if (isInitialLoading) {
    return (
      <LoadingScreen
        className="min-h-[60vh]"
        message="Preparing your wellness journey"
      />
    );
  }

  return (
    <>
      <FilterAndSearchSection
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        categoryFilter={categoryFilter}
        onCategoryChange={handleCategoryChange}
        durationFilter={durationFilter}
        onDurationChange={handleDurationChange}
      />
      {hasNoResults ? (
        <section
          className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8"
          aria-label="No results"
        >
          <p className="text-body-lg text-muted">
            No videos to show. Try adjusting your search or filters.
          </p>
        </section>
      ) : (
        <VideoGridSection
          videos={displayedVideos}
          onLoadMore={handleLoadMore}
          hasMore={hasMore}
          showShowLess={showShowLess}
          onShowLess={handleShowLess}
        />
      )}
    </>
  );
}
