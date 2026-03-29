"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";
import type { ContinueLearningCourse } from "@/features/dashboard/data/dashboardData";
import { useLazyGetMyEnrollmentsQuery } from "@/slices/enrollment";
import { DashboardContinueLearningCard } from "./DashboardContinueLearningCard";

export function DashboardContinueLearningSection() {
  const [fetchEnrollments, { data, isFetching, isLoading, isError }] =
    useLazyGetMyEnrollmentsQuery();

  useEffect(() => {
    // Fetch only course enrollments for the current user
    fetchEnrollments({ type: "course", page: 1, limit: 20 });
  }, [fetchEnrollments]);

  const courses: ContinueLearningCourse[] = useMemo(() => {
    if (!data?.data) return [];

    return data.data
      .filter((enrollment) => enrollment.course)
      .map((enrollment) => {
        const course = enrollment.course!;

        const bannerImage =
          (course as any).bannerImage ??
          (course as any).bannerUrl ??
          "/images/placeholders/course-banner.jpg";

        const slug = course.slug ?? undefined;

        const mapped: ContinueLearningCourse = {
          title: course.title,
          bannerImage,
          imageAlt: course.title,
          category: "Course",
          instructorName: "Dr. Shah Alam",
          instructorAvatarSrc:
            "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=80",
          price: "Included in your access",
          originalPrice: undefined,
          isEnrolled: true,
          courseId: course.id,
          access: (course as any).access ?? "PUBLIC",
          href: slug ? `/courses/${slug}` : undefined,
          slug,
          imageBadge: undefined,
          premiumBadge: (course as any).access === "PREMIUM",
          rating: undefined,

          level: ((course as any).level ?? "BEGINNER") as any,
          goals: [],

          progress: 0,
          timeLeft: undefined,
          badge: undefined,
        };

        return mapped;
      });
  }, [data]);

  const isLoadingState = isLoading || isFetching;

  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold text-foreground">
          Continue Learning
        </h2>
        <Link
          href="/dashboard/my-courses"
          className="text-body-md font-semibold text-primary hover:underline"
        >
          View All
        </Link>
      </div>

      {isLoadingState && (
        <p className="text-sm text-muted">Loading your courses...</p>
      )}

      {isError && !isLoadingState && (
        <p className="text-sm text-red-500">
          We couldn&apos;t load your enrolled courses. Please try again later.
        </p>
      )}

      {!isLoadingState && !isError && courses.length === 0 && (
        <p className="text-sm text-muted">
          You haven&apos;t enrolled in any courses yet. Start your first course
          to see it here.
        </p>
      )}

      {!isLoadingState && !isError && courses.length > 0 && (
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {courses.map((course) => (
            <DashboardContinueLearningCard key={course.slug} course={course} />
          ))}
        </div>
      )}
    </section>
  );
}
