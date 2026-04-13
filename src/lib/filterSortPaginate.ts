import type { CourseFilters } from "@/features/courses/components";
import type { CourseWithMeta } from "@/types/course";

/** Parse price string (e.g. "$24.00") to number. Returns 0 if invalid or missing. */
export function parsePrice(price: string | undefined): number {
  if (price == null || typeof price !== "string") return 0;
  const num = parseFloat(price.replace(/[^0-9.]/g, ""));
  return Number.isFinite(num) ? num : 0;
}

/** Parse rating string (e.g. "4.9") to number. Returns 0 if invalid or missing. */
export function parseRating(rating: string | null | undefined): number {
  if (rating == null || typeof rating !== "string") return 0;
  const num = parseFloat(rating.trim());
  return Number.isFinite(num) && num >= 0 ? num : 0;
}

/**
 * Filter courses by level and goals.
 * - Empty levels = no level filter (show all).
 * - Empty goals = no goal filter (show all).
 * - Course must match at least one selected level and at least one selected goal when filters are non-empty.
 */
export function filterCourses(
  courses: CourseWithMeta[],
  filters: CourseFilters
): CourseWithMeta[] {
  if (!Array.isArray(courses) || courses.length === 0) return [];

  const { levels, goals } = filters;

  return courses.filter((course) => {
    const levelMatch =
      levels.length === 0 || (course.level != null && levels.includes(course.level));
    const goalMatch =
      goals.length === 0 ||
      (Array.isArray(course.goals) &&
        course.goals.some((g) => goals.includes(g)));
    return levelMatch && goalMatch;
  });
}

export type SortValue = "newest" | "popular" | "price-asc" | "price-desc";

/**
 * Sort courses. Does not mutate the input array.
 * - newest: preserve original order (first in list = newest).
 * - popular: by rating descending (missing rating = 0).
 * - price-asc / price-desc: by parsed price (missing = 0).
 */
export function sortCourses(
  courses: CourseWithMeta[],
  sortValue: string
): CourseWithMeta[] {
  if (!Array.isArray(courses) || courses.length === 0) return [];

  const copy = [...courses];

  switch (sortValue) {
    case "newest":
      return copy;
    case "popular":
      return copy.sort((a, b) => parseRating(b.rating) - parseRating(a.rating));
    case "price-asc":
      return copy.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    case "price-desc":
      return copy.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    default:
      return copy;
  }
}

const DEFAULT_PAGE_SIZE = 6;

/**
 * Slice courses for the given page. Page is 1-based.
 * Returns { items, totalPages, totalCount }.
 * Edge: pageSize <= 0 treated as DEFAULT_PAGE_SIZE. page < 1 treated as 1.
 */
export function paginateCourses(
  courses: CourseWithMeta[],
  page: number,
  pageSize: number = DEFAULT_PAGE_SIZE
): {
  items: CourseWithMeta[];
  totalPages: number;
  totalCount: number;
} {
  if (!Array.isArray(courses)) {
    return { items: [], totalPages: 0, totalCount: 0 };
  }

  const size = pageSize > 0 ? pageSize : DEFAULT_PAGE_SIZE;
  const totalCount = courses.length;
  const totalPages = totalCount === 0 ? 0 : Math.max(1, Math.ceil(totalCount / size));
  const safePage = Math.max(1, Math.min(page, totalPages));
  const start = (safePage - 1) * size;
  const items = courses.slice(start, start + size);

  return { items, totalPages, totalCount };
}

export { DEFAULT_PAGE_SIZE };
