"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import {
  FilterSidebar,
  CourseFilterPopup,
  SortBar,
  CourseGrid,
  Pagination,
  type CourseFilters,
  type ViewMode,
} from "@/features/courses/components";
import type { CourseWithMeta } from "@/types/course";
import {
  filterCourses,
  sortCourses,
  paginateCourses,
  DEFAULT_PAGE_SIZE,
} from "@/lib/filterSortPaginate";
import { useGetAllTypeCoursesQuery } from "@/slices/courses";
import { pickPrimaryCategory } from "@/lib/pickPrimaryCategory";

export type CoursesPageContentProps = {
  courses: CourseWithMeta[];
  searchQuery?: string;
};

export function CoursesPageContent({
  courses,
  searchQuery = "Yoga",
}: CoursesPageContentProps) {
  const [filters, setFilters] = useState<CourseFilters>({
    levels: ["beginner", "intermediate", "advanced"],
    goals: [],
  });
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortValue, setSortValue] = useState("newest");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const { data: allTypesData } = useGetAllTypeCoursesQuery();
  const goalOptions = useMemo(() => {
    const apiCourses = allTypesData?.data?.courses ?? [];
    const categories = apiCourses
      .map((c) => pickPrimaryCategory(c.category))
      .filter((c): c is string => c != null && c !== "");
    return Array.from(new Set(categories)).sort((a, b) => a.localeCompare(b));
  }, [allTypesData]);

  const onFiltersChange = useCallback((next: CourseFilters) => {
    setFilters(next);
    setCurrentPage(1);
  }, []);

  const onSortChange = useCallback(() => {
    setCurrentPage(1);
  }, []);

  const filtered = useMemo(
    () => filterCourses(courses, filters),
    [courses, filters],
  );

  const sorted = useMemo(
    () => sortCourses(filtered, sortValue),
    [filtered, sortValue],
  );

  const {
    items: pageItems,
    totalPages,
    totalCount,
  } = useMemo(
    () => paginateCourses(sorted, currentPage, DEFAULT_PAGE_SIZE),
    [sorted, currentPage],
  );

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const onPageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return (
    <>

      <div className="flex flex-col gap-8 lg:flex-row">
        <FilterSidebar
          filters={filters}
          goalOptions={goalOptions}
          onFiltersChange={onFiltersChange}
        />

        <main className="min-w-0 flex-1" id="courses-main">
          <header className="mb-6">
            <h1 className="font-display text-3xl font-bold text-foreground">
              All Courses
            </h1>
            <p className="mt-1 text-body-md text-muted" aria-live="polite">
              Showing {totalCount} result{totalCount !== 1 ? "s" : ""}{" "}
              {searchQuery ? `for "${searchQuery}"` : ""}
            </p>
          </header>

          <div className="flex flex-wrap items-center justify-between gap-y-2 mb-6">
            <button
              type="button"
              onClick={() => setFilterOpen(true)}
              className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-body-md font-medium text-foreground transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 lg:hidden dark:border-gray-700 dark:hover:bg-gray-800"
              aria-label="Filter courses"
              aria-expanded={filterOpen}
            >
              <span className="material-icons-outlined text-base" aria-hidden>
                filter_list
              </span>
              Filter
            </button>
            <SortBar
              sortValue={sortValue}
              onSortChange={(value) => {
                setSortValue(value);
                onSortChange();
              }}
              viewMode={viewMode}
              onViewChange={(mode) => setViewMode(mode)}
            />
          </div>

          <CourseGrid courses={pageItems} viewMode={viewMode} />

          {totalPages > 0 && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          )}
        </main>
      </div>

      <CourseFilterPopup
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
        filters={filters}
        goalOptions={goalOptions}
        onFiltersChange={onFiltersChange}
      />
    </>
  );
}
