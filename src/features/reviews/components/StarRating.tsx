"use client";

import { useState } from "react";

interface StarRatingProps {
  value: number;
  onChange?: (value: number) => void;
  size?: "sm" | "md" | "lg";
  readonly?: boolean;
}

const SIZE_CLASS = {
  sm: "text-sm",
  md: "text-lg",
  lg: "text-2xl",
} as const;

export function StarRating({
  value,
  onChange,
  size = "md",
  readonly = false,
}: StarRatingProps) {
  const [hoverValue, setHoverValue] = useState(0);
  const interactive = !readonly && !!onChange;
  const displayValue = interactive && hoverValue > 0 ? hoverValue : value;

  return (
    <div
      className={`inline-flex items-center gap-0.5 ${interactive ? "cursor-pointer" : ""}`}
      onMouseLeave={() => interactive && setHoverValue(0)}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = displayValue >= star;
        const halfFilled = !filled && displayValue >= star - 0.5;

        return (
          <span
            key={star}
            className={`material-icons-outlined select-none ${SIZE_CLASS[size]} ${
              filled || halfFilled
                ? "text-amber-500"
                : "text-gray-300 dark:text-gray-600"
            } ${interactive ? "transition-colors hover:text-amber-400" : ""}`}
            onClick={() => interactive && onChange(star)}
            onMouseEnter={() => interactive && setHoverValue(star)}
            role={interactive ? "button" : undefined}
            aria-label={interactive ? `Rate ${star} star${star > 1 ? "s" : ""}` : undefined}
          >
            {filled ? "star" : halfFilled ? "star_half" : "star_border"}
          </span>
        );
      })}
    </div>
  );
}
