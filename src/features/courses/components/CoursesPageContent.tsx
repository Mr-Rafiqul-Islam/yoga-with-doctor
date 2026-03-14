"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import {
  FilterSidebar,
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
  const [sortValue, setSortValue] = useState("newest");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const onFiltersChange = useCallback((next: CourseFilters) => {
    setFilters(next);
    setCurrentPage(1);
  }, []);

  const onSortChange = useCallback(() => {
    setCurrentPage(1);
  }, []);

  

  const filtered = useMemo(
    () => filterCourses(courses, filters),
    [courses, filters]
  );

  const sorted = useMemo(
    () => sortCourses(filtered, sortValue),
    [filtered, sortValue]
  );

  const { items: pageItems, totalPages, totalCount } = useMemo(
    () => paginateCourses(sorted, currentPage, DEFAULT_PAGE_SIZE),
    [sorted, currentPage]
  );

  // When filters/sort reduce results, clamp current page to valid range
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
          defaultLevels={["beginner", "intermediate", "advanced"]}
          defaultGoals={[]}
          onFiltersChange={onFiltersChange}
        />

        <main className="min-w-0 flex-1" id="courses-main">
          <header className="mb-6">
            <h1 className="font-display text-3xl font-bold text-foreground">
              All Courses
            </h1>
            <p className="mt-1 text-body-md text-muted" aria-live="polite">
              Showing {totalCount} result{totalCount !== 1 ? "s" : ""} {searchQuery ? `for "${searchQuery}"` : ""} 
            </p>
          </header>

          <div className="mb-6">
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
    </>
  );
}
