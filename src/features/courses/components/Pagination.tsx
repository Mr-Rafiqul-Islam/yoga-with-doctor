"use client";

import { useState } from "react";

export type PaginationProps = {
  /** Total number of pages */
  totalPages: number;
  /** Current page (1-based). Omit for uncontrolled (internal state). */
  currentPage?: number;
  /** Called when user selects a page. Omit for uncontrolled. */
  onPageChange?: (page: number) => void;
  /** Optional class for the wrapper */
  className?: string;
};

/**
 * Builds an array of page numbers and "ellipsis" placeholders to display.
 * e.g. [1, 2, 3, "ellipsis", 8] or [1, "ellipsis", 4, 5, 6, "ellipsis", 8]
 */
function getPageSlots(currentPage: number, totalPages: number): (number | "ellipsis")[] {
  if (totalPages <= 0) return [];
  if (totalPages <= 6) return Array.from({ length: totalPages }, (_, i) => i + 1);

  const slots: (number | "ellipsis")[] = [];

  if (currentPage <= 3) {
    slots.push(1, 2, 3);
    if (totalPages > 4) slots.push("ellipsis", totalPages);
  } else if (currentPage >= totalPages - 2) {
    slots.push(1, "ellipsis", totalPages - 2, totalPages - 1, totalPages);
  } else {
    slots.push(1, "ellipsis", currentPage - 1, currentPage, currentPage + 1, "ellipsis", totalPages);
  }

  return slots;
}

export function Pagination({
  totalPages,
  currentPage: controlledPage,
  onPageChange,
  className = "",
}: PaginationProps) {
  const [internalPage, setInternalPage] = useState(1);
  const currentPage = controlledPage ?? internalPage;
  const setPage = (page: number) => {
    const next = Math.max(1, Math.min(totalPages, page));
    if (controlledPage == null) setInternalPage(next);
    onPageChange?.(next);
  };

  const slots = getPageSlots(currentPage, totalPages);
  const isFirst = currentPage <= 1;
  const isLast = currentPage >= totalPages;

  if (totalPages <= 0) return null;

  return (
    <div className={["mt-12 flex justify-center", className].filter(Boolean).join(" ")}>
      <nav
        aria-label="Pagination"
        className="flex flex-wrap items-center justify-center gap-2"
      >
        <button
          type="button"
          onClick={() => setPage(currentPage - 1)}
          disabled={isFirst}
          aria-label="Previous page"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          <span className="material-icons-outlined text-lg" aria-hidden>
            chevron_left
          </span>
        </button>

        {slots.map((slot, index) =>
          slot === "ellipsis" ? (
            <span
              key={`ellipsis-${index}`}
              className="px-2 text-muted"
              aria-hidden
            >
              ...
            </span>
          ) : (
            <button
              key={slot}
              type="button"
              onClick={() => setPage(slot)}
              aria-label={`Page ${slot}`}
              aria-current={currentPage === slot ? "page" : undefined}
              className={
                currentPage === slot
                  ? "flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                  : "flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface font-medium text-foreground transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-gray-700 dark:hover:bg-gray-800 dark:text-gray-300 dark:focus:ring-offset-gray-900"
              }
            >
              {slot}
            </button>
          )
        )}

        <button
          type="button"
          onClick={() => setPage(currentPage + 1)}
          disabled={isLast}
          aria-label="Next page"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          <span className="material-icons-outlined text-lg" aria-hidden>
            chevron_right
          </span>
        </button>
      </nav>
    </div>
  );
}
