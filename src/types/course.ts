import type { CourseCatalogCardProps } from "@/features/courses/components";
import type { LevelOption } from "@/features/courses/components";

/** Course with filter/sort metadata. Used for filtering; display uses CourseCatalogCardProps. */
export type CourseWithMeta = CourseCatalogCardProps & {
  level: LevelOption;
  goals: string[];
};
