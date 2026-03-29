"use client";

import { useCallback, useMemo, useState } from "react";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { filterVideos } from "@/utils/filterVideos";
import { FilterAndSearchSection } from "./FilterAndSearchSection";
import { VideoGridSection } from "./VideoGridSection";
import { useGetClassesQuery } from "@/slices/classes";
import { classItemToVideoCard } from "../utils/classToVideoCard";
import { formatLevelWithHyphenToSpace } from "../utils/formatLevel";
import { Pagination } from "@/features/courses/components";

const PAGE_SIZE = 6;

export function FreeVideosPageContent() {
  const [searchValue, setSearchValue] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [durationFilter, setDurationFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch free/public classes with server-side pagination
  const { data, isLoading, isFetching } = useGetClassesQuery({
    page: currentPage,
    limit: PAGE_SIZE,
  });

  // Map API classes -> VideoCardProps (includes muxPlaybackId)
  const videosFromApi = useMemo(
    () => (data?.data?.classes ?? []).filter((item) => item.access === "PUBLIC").map(classItemToVideoCard),
    [data?.data?.classes]
  );

  const pagination = data?.data?.pagination; // if premium classes are included, the total pages will be incorrect so we need to filter them out in future
  const totalPages = pagination?.totalPages ?? 0;

  const categoryOptions = useMemo(() => {
    const unique = new Set(
      (data?.data?.classes ?? []).filter((item) => item.access === "PUBLIC")
        .map((item) => item.category?.[0])
        .filter(Boolean)
        .map((cat) => formatLevelWithHyphenToSpace(cat as string))
    );
    return Array.from(unique).map((value) => ({
      value,
      label: value.toUpperCase(),
    }));
  }, [data?.data?.classes]);


  // Apply search and duration filters on the current page (category is server-side)
  const filterParams = useMemo(
    () => ({
      searchQuery: searchValue,
      categoryFilter,
      durationFilter,
    }),
    [searchValue, categoryFilter, durationFilter]
  );

  const displayedVideos = useMemo(
    () => filterVideos(videosFromApi, filterParams),
    [videosFromApi, filterParams]
  );

  const hasNoResults =
    !isLoading && !isFetching && displayedVideos.length === 0;

  const handleSearchChange = useCallback((value: string) => {
    setSearchValue(value);
    setCurrentPage(1);
  }, []);

  const handleCategoryChange = useCallback((value: string) => {
    setCategoryFilter(value);
    setCurrentPage(1);
  }, []);

  const handleDurationChange = useCallback((value: string) => {
    setDurationFilter(value);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
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
        <>
          <VideoGridSection
            videos={displayedVideos}
            isLoading={isLoading && !data}
          />
          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              className="mt-10"
            />
          )}
        </>
      )}
    </>
  );
}