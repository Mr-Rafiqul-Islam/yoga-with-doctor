"use client";

import { notFound } from "next/navigation";
import { Breadcrumbs, CourseDetailContent } from "@/features/courses/components";
import { useGetCourseBySlugQuery } from "@/slices/courses";
import { mapCourseToCourseDetailData } from "@/lib/mapCourseToDetail";

export interface CourseDetailPageClientProps {
  slug: string;
}

export function CourseDetailPageClient({ slug }: CourseDetailPageClientProps) {
  const { data, isLoading, isError, isFetching } = useGetCourseBySlugQuery(
    slug,
    { skip: !slug }
  );

  if (!slug) notFound();

  if (isLoading || isFetching) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 h-5 w-48 animate-pulse rounded bg-muted" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="aspect-video animate-pulse rounded-2xl bg-muted" />
            <div className="h-8 w-3/4 animate-pulse rounded bg-muted" />
            <div className="h-4 w-full animate-pulse rounded bg-muted" />
            <div className="h-4 w-full animate-pulse rounded bg-muted" />
          </div>
          <div className="h-64 animate-pulse rounded-2xl bg-muted" />
        </div>
      </div>
    );
  }

  if (isError || !data?.data?.course) notFound();

  const course = data.data.course;
  const detailData = mapCourseToCourseDetailData(course);
  const isEnrolled = course.hasAccess === true;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/", icon: "home" },
          { label: "Courses", href: "/courses" },
          { label: detailData.title, href: null },
        ]}
      />
      <CourseDetailContent course={detailData} isEnrolled={isEnrolled} />
    </div>
  );
}
