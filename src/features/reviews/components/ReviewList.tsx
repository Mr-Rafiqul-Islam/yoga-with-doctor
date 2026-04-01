"use client";

import Link from "next/link";
import type { Review, ReviewStats } from "@/types/review";
import { StarRating } from "./StarRating";
import { useAppSelector } from "@/stores";
import { useCheckCourseAccessQuery } from "@/slices/courses";
import { ReviewCard } from "./ReviewCard";
import { ReviewForm } from "./ReviewForm";

interface ReviewListProps {
  reviews: Review[];
  stats: ReviewStats;
  myReview: Review | null;
  isAuthenticated: boolean;
  courseId: string;
  isSubmitting: boolean;
  isEnrolled?: boolean;
  onSubmit: (rating: number, review: string) => void;
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  onPageChange: (page: number) => void;
}

export function ReviewList({
  reviews,
  stats,
  myReview,
  isAuthenticated,
  courseId,
  isEnrolled,
  isSubmitting,
  onSubmit,
  pagination,
  onPageChange,
}: ReviewListProps) {
  const { unlockedCourseIds } = useAppSelector((state) => state.entitlements);

  const { data: accessData } = useCheckCourseAccessQuery(courseId ?? "", {
    skip: !courseId || !isAuthenticated,
  });
  const hasAccessFromApi = accessData?.data?.hasAccess ?? false;
  const isUnlocked = !!courseId && unlockedCourseIds.includes(courseId);
  const effectiveEnrolled = isAuthenticated && (hasAccessFromApi || isUnlocked);
  const canPostReview =
    isAuthenticated &&
    (courseId ? effectiveEnrolled : Boolean(isEnrolled));

  return (
    <div className="space-y-6">
      {/* Rating summary */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-foreground dark:text-white">
            {stats.avgRating != null ? stats.avgRating.toFixed(1) : "0.0"}
          </span>
          <div>
            <StarRating value={stats.avgRating ?? 0} size="sm" readonly />
            <p className="text-xs text-muted">
              {stats.ratingCount}{" "}
              {stats.ratingCount === 1 ? "review" : "reviews"}
            </p>
          </div>
        </div>
      </div>

      {/* Submission form / auth gate */}
      {canPostReview ? (
        <ReviewForm
          existingReview={myReview}
          isSubmitting={isSubmitting}
          onSubmit={onSubmit}
        />
      ) : !isAuthenticated ? (
        <div className="rounded-xl border border-border bg-surface p-5 text-center dark:border-gray-800 dark:bg-surface">
          <p className="text-sm text-muted">
            <Link
              href="/auth/login"
              className="font-medium text-primary hover:underline"
            >
              Log in
            </Link>{" "}
            to leave a review.
          </p>
        </div>
      ) : !canPostReview ? (
        <div className="rounded-xl border border-border bg-surface p-5 text-center dark:border-gray-800 dark:bg-surface">
          <p className="text-sm text-muted">
            Enroll in this content to leave a review.
          </p>
        </div>
      ) : null}

      {/* Review list */}
      {reviews.length > 0 ? (
        <div className="space-y-4">
          {reviews.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>
      ) : (
        <p className="py-4 text-center text-sm text-muted">
          No reviews yet. Be the first!
        </p>
      )}

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            type="button"
            disabled={pagination.page <= 1}
            onClick={() => onPageChange(pagination.page - 1)}
            className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            Previous
          </button>
          <span className="text-xs text-muted">
            Page {pagination.page} of {pagination.totalPages}
          </span>
          <button
            type="button"
            disabled={pagination.page >= pagination.totalPages}
            onClick={() => onPageChange(pagination.page + 1)}
            className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
