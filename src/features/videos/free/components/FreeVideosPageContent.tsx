"use client";

import { useCallback, useMemo, useState } from "react";
import { FREE_VIDEOS } from "../data/freeVideosData";
import { filterVideos } from "../utils/filterVideos";
import { FilterAndSearchSection } from "./FilterAndSearchSection";
import { VideoGridSection } from "./VideoGridSection";

const PAGE_SIZE = 6;

/**
 * Client wrapper for the Free Videos page: filter state + load more.
 * Renders FilterAndSearchSection (controlled) and VideoGridSection with filtered list.
 */
export function FreeVideosPageContent() {
  const [searchValue, setSearchValue] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [durationFilter, setDurationFilter] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

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
      <VideoGridSection
        videos={displayedVideos}
        onLoadMore={handleLoadMore}
        hasMore={hasMore}
      />
    </>
  );
}
