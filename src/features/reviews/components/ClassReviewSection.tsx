"use client";

import { useEffect, useMemo, useState } from "react";
import { useAppSelector } from "@/stores";
import {
  useGetClassReviewsQuery,
  useGetMyClassReviewQuery,
  useUpsertClassReviewMutation,
} from "@/slices/classes";
import { useLazyGetMyEnrollmentsQuery } from "@/slices/enrollment";
import { ReviewList } from "./ReviewList";

interface ClassReviewSectionProps {
  slug: string;
}

export function ClassReviewSection({ slug }: ClassReviewSectionProps) {
  const isAuthenticated = useAppSelector((s) => s.auth.isAuthenticated);
  const [page, setPage] = useState(1);

  const [fetchEnrollments, { data: enrollmentsData }] =
    useLazyGetMyEnrollmentsQuery();

  useEffect(() => {
    if (!isAuthenticated || !slug) return;
    void fetchEnrollments({ type: "class", page: 1, limit: 100 });
  }, [fetchEnrollments, isAuthenticated, slug]);

  const isEnrolled = useMemo(() => {
    if (!isAuthenticated) return false;
    return (enrollmentsData?.data ?? []).some(
      (e) => e.type === "class" && e.class?.slug === slug,
    );
  }, [isAuthenticated, enrollmentsData, slug]);

  const { data: reviewsData, isLoading: isLoadingReviews } =
    useGetClassReviewsQuery({ slug, page, limit: 10 });

  const { data: myReviewData } = useGetMyClassReviewQuery(slug, {
    skip: !isAuthenticated,
  });

  const [upsertReview, { isLoading: isSubmitting }] =
    useUpsertClassReviewMutation();

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
  const stats = reviewsData?.data?.classStats ?? { avgRating: null, ratingCount: 0 };
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
      isSubmitting={isSubmitting}
      courseId={""}
      isEnrolled={isEnrolled}
      onSubmit={handleSubmit}
      pagination={pagination}
      onPageChange={setPage}
    />
  );
}
