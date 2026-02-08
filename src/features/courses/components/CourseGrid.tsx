import type { ViewMode } from "./SortBar";
import type { CourseCatalogCardProps } from "./CourseCatalogCard";
import { CourseCatalogCard } from "./CourseCatalogCard";

export type CourseGridItem = CourseCatalogCardProps;

export type CourseGridProps = {
  /** List of courses to display */
  courses: CourseGridItem[];
  /** Layout: grid (multi-column) or list (single column) */
  viewMode?: ViewMode;
  /** Optional class for the section wrapper */
  className?: string;
};

export function CourseGrid({
  courses,
  viewMode = "grid",
  className = "",
}: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <section
        aria-label="Course listings"
        className={className}
      >
        <p className="py-12 text-center text-body-md text-muted">
          No courses match your filters.
        </p>
      </section>
    );
  }

  return (
    <section
      aria-label="Course listings"
      className={
        viewMode === "list"
          ? `grid grid-cols-1 gap-6 ${className}`.trim()
          : `grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 ${className}`.trim()
      }
    >
      {courses.map((course, index) => (
        <CourseCatalogCard key={`${course.title}-${index}`} {...course} />
      ))}
    </section>
  );
}
