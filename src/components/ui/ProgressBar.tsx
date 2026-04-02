import type { ReactNode } from "react";

export interface ProgressBarProps {
  /** 0–100; width is clamped for display. */
  value: number;
  variant?: "lesson" | "compact";
  leftLabel?: ReactNode;
  rightLabel?: ReactNode;
  ariaLabel?: string;
  className?: string;
}

function clampPercent(n: number): number {
  if (Number.isNaN(n)) return 0;
  return Math.min(100, Math.max(0, Math.round(n)));
}

export function ProgressBar({
  value,
  variant = "lesson",
  leftLabel,
  rightLabel,
  ariaLabel = "Progress",
  className = "",
}: ProgressBarProps) {
  const pct = clampPercent(value);
  const showHeader = leftLabel != null || rightLabel != null;
  const gapClass = variant === "lesson" ? "space-y-2" : "space-y-1.5";

  const headerRowClass =
    variant === "lesson"
      ? "flex justify-between text-body-md font-medium"
      : "flex items-center justify-between text-caption text-muted";

  const leftTextClass =
    variant === "lesson" ? "text-foreground dark:text-gray-300" : "";

  const rightTextClass =
    variant === "lesson"
      ? "text-primary"
      : "font-semibold text-muted dark:text-gray-300";

  const trackClass =
    variant === "lesson"
      ? "h-2.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800"
      : "h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700";

  const fillClass =
    variant === "lesson"
      ? "h-full rounded-full bg-primary transition-all duration-500"
      : "h-full rounded-full bg-primary transition-all";

  return (
    <div className={[gapClass, className].filter(Boolean).join(" ")}>
      {showHeader && (
        <div className={headerRowClass}>
          {leftLabel != null ? (
            <span className={leftTextClass}>{leftLabel}</span>
          ) : (
            <span />
          )}
          {rightLabel != null ? <span className={rightTextClass}>{rightLabel}</span> : null}
        </div>
      )}
      <div className={trackClass}>
        <div
          className={fillClass}
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={ariaLabel}
        />
      </div>
    </div>
  );
}
