"use client";

import {
  Breadcrumbs,
  CoursesPageContent,
} from "@/features/courses/components";
import { dummyCourses } from "@/features/courses/data/dummyCourses";
import type { CourseWithMeta } from "@/types/course";
import type { LevelOption } from "@/features/courses/components";
import {
  useGetAllTypeCoursesQuery,
  type AllTypeCourseItem,
} from "@/slices/courses";
import { useMemo } from "react";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { formatCheckoutPrice } from "@/features/checkout/data/checkoutReviewData";
import { pickPrimaryCategory } from "@/lib/pickPrimaryCategory";

const FALLBACK_INSTRUCTOR_AVATAR =
  "https://drshahalam.com/wp-content/uploads/2026/02/Dr-Shah-Alam-Website-About.jpeg";

const FALLBACK_PRICE = "$29.00";
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

function mapAllTypeCourseToCourseWithMeta(
  course: AllTypeCourseItem,
  index: number
): CourseWithMeta {
  const firstProduct = course.products?.[0];
  const productPrice = firstProduct?.price ?? null;
  const productCurrency = firstProduct?.currency ?? null;

  const isFreeAccess =
    course.access === "FREE" || course.access === "PUBLIC";

  const price =
    productPrice != null && productCurrency
      ? `${productCurrency} ${productPrice.toFixed(2)}`
      : isFreeAccess
        ? "Free"
        : FALLBACK_PRICE;

  const level = mapLevel(course.level);
  const primaryCategory = pickPrimaryCategory(course.category);
  const goal =
    primaryCategory ??
    FALLBACK_GOALS[index % FALLBACK_GOALS.length] ??
    FALLBACK_GOALS[0];
    const STATIC_DISCOUNT_PERCENT = 20;
    const STATIC_ORIGINAL_PRICE = (productPrice! * STATIC_DISCOUNT_PERCENT) / 100 + productPrice!;

  return {
    // Card display props
    title: course.title,
    bannerImage:
      course.bannerUrl ??
      dummyCourses[index % dummyCourses.length]?.bannerImage ??
      "https://via.placeholder.com/640x360.png?text=Course",
    imageAlt: course.title,
    category: (goal ?? "Wellness"),
    instructorName: course.instructorName ?? "Yoga with Doctor",
    instructorAvatarSrc: FALLBACK_INSTRUCTOR_AVATAR,
    price,
    originalPrice:
      course.access === "PAID" ? formatCheckoutPrice(STATIC_ORIGINAL_PRICE, productCurrency ?? "BDT") : undefined,
    courseId: course.id,
    access: course.access,
    slug: course.slug,
    href: `/courses/${course.slug}`,
    imageBadge: course.access === "PAID" ? "BESTSELLER" : undefined,
    premiumBadge: course.access === "PREMIUM",
    rating: course.avgRating != 0 ? course.avgRating?.toFixed(1) : null,
    ratingCount: course.ratingCount ?? 0,
    // Filter/sort metadata
    level,
    goals: [goal],
  };
}

export default function CoursesPage() {
  const { data, isError,isLoading } = useGetAllTypeCoursesQuery();

  const courses: CourseWithMeta[] = useMemo(() => {

    return data?.data?.courses.filter((item) => item.access !== "PREMIUM").map(mapAllTypeCourseToCourseWithMeta) ?? [];
  }, [data]);

  const searchQuery = "";
  if(isLoading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <LoadingScreen message="Loading courses" />
      </div>
    );
  }

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
