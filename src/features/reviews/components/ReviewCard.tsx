import { Review } from "@/types/review";
import Image from "next/image";
import { StarRating } from "./StarRating";

export function ReviewCard({ review }: { review: Review }) {
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
