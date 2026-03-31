"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Review, ReviewStats } from "@/types/review";
import { StarRating } from "./StarRating";

interface ReviewListProps {
  reviews: Review[];
  stats: ReviewStats;
  myReview: Review | null;
  isAuthenticated: boolean;
  isEnrolled: boolean;
  isSubmitting: boolean;
  onSubmit: (rating: number, review: string) => void;
  pagination: { page: number; limit: number; total: number; totalPages: number };
  onPageChange: (page: number) => void;
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex gap-4 rounded-xl border border-border bg-surface p-4 dark:border-gray-800 dark:bg-surface">
      <div className="shrink-0">
        {review.user.profilePicture ? (
          <Image
            src={review.user.profilePicture}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
            {review.user.name?.charAt(0)?.toUpperCase() ?? "U"}
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-foreground dark:text-white">
            {review.user.name}
          </span>
          <StarRating value={review.rating} size="sm" readonly />
          <span className="text-xs text-muted">
            {new Date(review.createdAt).toLocaleDateString()}
          </span>
        </div>
        {review.review && (
          <p className="mt-1 text-sm leading-relaxed text-muted dark:text-gray-300">
            {review.review}
          </p>
        )}
      </div>
    </div>
  );
}

function ReviewForm({
  existingReview,
  isSubmitting,
  onSubmit,
}: {
  existingReview: Review | null;
  isSubmitting: boolean;
  onSubmit: (rating: number, review: string) => void;
}) {
  const [rating, setRating] = useState(existingReview?.rating ?? 0);
  const [text, setText] = useState(existingReview?.review ?? "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating < 1) return;
    onSubmit(rating, text);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-border bg-surface p-5 dark:border-gray-800 dark:bg-surface">
      <h4 className="text-sm font-semibold text-foreground dark:text-white">
        {existingReview ? "Update your review" : "Write a review"}
      </h4>

      {existingReview && existingReview.status !== "APPROVED" && (
        <div
          className={`rounded-lg px-3 py-2 text-xs font-medium ${
            existingReview.status === "PENDING"
              ? "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300"
              : "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300"
          }`}
        >
          {existingReview.status === "PENDING"
            ? "Your review is pending approval by an admin."
            : "Your review was not approved. You can edit and resubmit."}
        </div>
      )}

      <div>
        <label className="mb-1 block text-xs text-muted">Your rating</label>
        <StarRating value={rating} onChange={setRating} size="lg" />
      </div>

      <div>
        <label htmlFor="review-text" className="mb-1 block text-xs text-muted">
          Your review (optional)
        </label>
        <textarea
          id="review-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={2000}
          rows={3}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          placeholder="Share your experience..."
        />
        <div className="mt-1 text-right text-xs text-muted">{text.length}/2000</div>
      </div>

      <button
        type="submit"
        disabled={rating < 1 || isSubmitting}
        className="rounded-lg bg-primary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting
          ? "Submitting..."
          : existingReview
            ? "Update Review"
            : "Submit Review"}
      </button>
    </form>
  );
}

export function ReviewList({
  reviews,
  stats,
  myReview,
  isAuthenticated,
  isEnrolled,
  isSubmitting,
  onSubmit,
  pagination,
  onPageChange,
}: ReviewListProps) {
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
              {stats.ratingCount} {stats.ratingCount === 1 ? "review" : "reviews"}
            </p>
          </div>
        </div>
      </div>

      {/* Submission form / auth gate */}
      {isAuthenticated && isEnrolled ? (
        <ReviewForm
          existingReview={myReview}
          isSubmitting={isSubmitting}
          onSubmit={onSubmit}
        />
      ) : !isAuthenticated ? (
        <div className="rounded-xl border border-border bg-surface p-5 text-center dark:border-gray-800 dark:bg-surface">
          <p className="text-sm text-muted">
            <Link href="/auth/login" className="font-medium text-primary hover:underline">
              Log in
            </Link>{" "}
            to leave a review.
          </p>
        </div>
      ) : !isEnrolled ? (
        <div className="rounded-xl border border-border bg-surface p-5 text-center dark:border-gray-800 dark:bg-surface">
          <p className="text-sm text-muted">Enroll in this content to leave a review.</p>
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
        <p className="py-4 text-center text-sm text-muted">No reviews yet. Be the first!</p>
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
