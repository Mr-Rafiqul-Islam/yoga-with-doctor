"use client";

import { useCallback, useMemo, useState } from "react";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { filterVideos } from "@/utils/filterVideos";
import { FilterAndSearchSection } from "./FilterAndSearchSection";
import { VideoGridSection } from "./VideoGridSection";
import { useGetClassesQuery } from "@/services/classApi";
import { classItemToVideoCard } from "../utils/classToVideoCard";
import { formatLevelWithHyphenToSpace } from "../utils/formatLevel";

const PAGE_SIZE = 4;

export function FreeVideosPageContent() {
  const [searchValue, setSearchValue] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [durationFilter, setDurationFilter] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Fetch free/public classes from your API
  const { data, isLoading, isFetching } = useGetClassesQuery({
    page: 1,
    limit: 10,
    access: "PUBLIC", // did not work now need to fix it
  });

  // Map API classes -> VideoCardProps (includes muxPlaybackId)
  const videosFromApi = useMemo(
    () => (data?.data?.classes ?? []).filter((item) => item.access === "PUBLIC").map(classItemToVideoCard), // make it filter by access in future remove this filter
    [data?.data?.classes]
  );
  
// categorylist from api
const categoryOptions = useMemo(() => {
  const unique = new Set(
    (data?.data?.classes ?? [])
      .map((item) => item.category?.[0])
      .filter(Boolean)
      .map((cat) => formatLevelWithHyphenToSpace(cat as string))
  );

  return Array.from(unique).map((value) => ({
    value,
    label: value.toUpperCase(),
  }));
}, [data?.data?.classes]);


  // Apply existing search, category, and duration filters on the client
  const filterParams = useMemo(
    () => ({
      searchQuery: searchValue,
      categoryFilter,
      durationFilter,
    }),
    [searchValue, categoryFilter, durationFilter]
  );

  const filteredVideos = useMemo(
    () => filterVideos(videosFromApi, filterParams),
    [videosFromApi, filterParams]
  );

  const displayedVideos = useMemo(
    () => filteredVideos.slice(0, visibleCount),
    [filteredVideos, visibleCount]
  );

  const hasMore = visibleCount < filteredVideos.length;
  const showShowLess = visibleCount > PAGE_SIZE;
  const hasNoResults =
    !isLoading && !isFetching && filteredVideos.length === 0;

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) =>
      Math.min(prev + PAGE_SIZE, filteredVideos.length)
    );
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

  if (isLoading && !data) {
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
        categoryOptions={categoryOptions}
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
          isLoading={isLoading && !data}
          isLoadingMore={isFetching && !!data}
        />
      )}
    </>
  );
}