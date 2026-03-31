import { Review } from "@/types/review";
import { useState } from "react";
import { StarRating } from "./StarRating";

export function ReviewForm({
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