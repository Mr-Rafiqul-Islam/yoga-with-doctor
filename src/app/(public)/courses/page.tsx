"use client";

import {
  Breadcrumbs,
  CoursesPageContent,
} from "@/features/courses/components";
import { dummyCourses } from "@/features/courses/data/dummyCourses";
import type { CourseWithMeta } from "@/types/course";
import type { LevelOption } from "@/features/courses/components";
import { useGetCoursesQuery, type Course } from "@/slices/courses";
import { useMemo } from "react";

const FALLBACK_INSTRUCTOR_AVATAR =
  dummyCourses[0]?.instructorAvatarSrc ??
  "https://via.placeholder.com/64x64.png?text=Instructor";

const FALLBACK_PRICE = "$29.00";
const FALLBACK_DURATION = "30 min";
const FALLBACK_RATING = "4.9";
const FALLBACK_GOALS = [
  "Back Pain",
  "Stress Relief",
  "Flexibility",
  "Weight Loss",
  "Sleep",
];

function mapLevel(level: string | null): LevelOption {
  const normalized = (level ?? "").toLowerCase();
  if (normalized === "beginner") return "beginner";
  if (normalized === "intermediate") return "intermediate";
  if (normalized === "advanced") return "advanced";
  return "beginner";
}

function mapCourseToCourseWithMeta(
  course: Course,
  index: number
): CourseWithMeta {
  const productPrice = course.productData?.price ?? null;
  const productCurrency = course.productData?.currency ?? null;

  const isFreeAccess =
    course.access === "FREE" || course.access === "PUBLIC";

  const price =
    productPrice != null && productCurrency
      ? `${productCurrency} ${productPrice.toFixed(2)}`
      : isFreeAccess
        ? "Free"
        : FALLBACK_PRICE;

  const level = mapLevel(course.level);
  const goal =
    FALLBACK_GOALS[index % FALLBACK_GOALS.length] ?? FALLBACK_GOALS[0];

  return {
    // Card display props
    title: course.title,
    bannerImage:
      course.bannerUrl ??
      course.bannerImage ??
      dummyCourses[index % dummyCourses.length]?.bannerImage ??
      "https://via.placeholder.com/640x360.png?text=Course",
    imageAlt: course.title,
    category: (course.level ?? "Wellness").toUpperCase(),
    instructorName: course.instructorName ?? "Yoga with Doctor",
    instructorAvatarSrc: FALLBACK_INSTRUCTOR_AVATAR,
    price,
    originalPrice:
      course.access === "PAID" ? dummyCourses[0]?.originalPrice : undefined,
    isEnrolled: !!course.hasAccess,
    slug: course.slug,
    href: `/courses/${course.slug}`,
    imageBadge: course.isPremium ? "BESTSELLER" : undefined,
    showBookmark: true,
    duration: FALLBACK_DURATION,
    rating: FALLBACK_RATING,

    // Filter/sort metadata
    level,
    goals: [goal],
  };
}

export default function CoursesPage() {
  const { data, isLoading, isError } = useGetCoursesQuery({
    page: 1,
    limit: 50,
  });

  const courses: CourseWithMeta[] = useMemo(() => {
    if (!data?.data?.courses || data.data.courses.length === 0) {
      return dummyCourses;
    }

    return data.data.courses.map(mapCourseToCourseWithMeta);
  }, [data]);

  const searchQuery = "Yoga";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/", icon: "home" },
          { label: "Courses", href: null },
        ]}
      />

      <CoursesPageContent
        courses={courses}
        searchQuery={searchQuery}
      />

      {isError && (
        <p className="mt-4 text-sm text-red-600">
          Unable to load courses from server. Showing demo content.
        </p>
      )}
    </div>
  );
}
