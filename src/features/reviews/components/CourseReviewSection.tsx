"use client";

import { useState } from "react";
import { useAppSelector } from "@/stores";
import {
  useGetCourseReviewsQuery,
  useGetMyCourseReviewQuery,
  useUpsertCourseReviewMutation,
} from "@/slices/courses";
import { ReviewList } from "./ReviewList";

interface CourseReviewSectionProps {
  slug: string;
  isEnrolled: boolean;
}

export function CourseReviewSection({ slug, isEnrolled }: CourseReviewSectionProps) {
  const isAuthenticated = useAppSelector((s) => s.auth.isAuthenticated);
  const [page, setPage] = useState(1);

  const { data: reviewsData, isLoading: isLoadingReviews } =
    useGetCourseReviewsQuery({ slug, page, limit: 10 });

  const { data: myReviewData } = useGetMyCourseReviewQuery(slug, {
    skip: !isAuthenticated,
  });

  const [upsertReview, { isLoading: isSubmitting }] =
    useUpsertCourseReviewMutation();

  const handleSubmit = async (rating: number, review: string) => {
    try {
      await upsertReview({ slug, rating, review: review || undefined }).unwrap();
    } catch {
      // API errors will be visible via the mutation state
    }
  };

  if (isLoadingReviews) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-20 animate-pulse rounded-xl bg-muted/50" />
        ))}
      </div>
    );
  }

  const reviews = reviewsData?.data?.reviews ?? [];
  const stats = reviewsData?.data?.courseStats ?? { avgRating: null, ratingCount: 0 };
  const pagination = reviewsData?.data?.pagination ?? {
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 1,
  };

  return (
    <ReviewList
      reviews={reviews}
      stats={stats}
      myReview={myReviewData?.data?.review ?? null}
      isAuthenticated={isAuthenticated}
      isEnrolled={isEnrolled}
      isSubmitting={isSubmitting}
      onSubmit={handleSubmit}
      pagination={pagination}
      onPageChange={setPage}
    />
  );
}
