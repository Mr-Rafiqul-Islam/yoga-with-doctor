"use client";

import { useId, useState } from "react";

export const DURATION_OPTIONS = [
  { value: "", label: "Duration" },
  { value: "short", label: "5–10 mins" },
  { value: "medium", label: "15–30 mins" },
  { value: "long", label: "45+ mins" },
] as const;

export interface FilterAndSearchSectionProps {
  /** Controlled search value */
  searchValue?: string;
  /** Called when search input changes */
  onSearchChange?: (value: string) => void;
  /** Controlled category filter (value from CATEGORY_OPTIONS) */
  categoryFilter?: string;
  /** Called when category selection changes */
  onCategoryChange?: (value: string) => void;
  /** Controlled duration filter (value from DURATION_OPTIONS) */
  durationFilter?: string;
  /** Called when duration selection changes */
  onDurationChange?: (value: string) => void;
  categoryOptions: { value: string; label: string }[];
}

/**
 * Search and filters bar for the Free Wellness Library.
 * Can be controlled (pass value + onChange) for use with parent filter state.
 */
export function FilterAndSearchSection({
  searchValue: controlledSearch,
  onSearchChange,
  categoryFilter = "",
  onCategoryChange,
  durationFilter = "",
  onDurationChange,
  categoryOptions,
}: FilterAndSearchSectionProps) {
  const searchId = useId();
  const categoryId = useId();
  const durationId = useId();
  const [internalSearch, setInternalSearch] = useState("");

  const isControlled = onSearchChange !== undefined;
  const searchValue = isControlled ? (controlledSearch ?? "") : internalSearch;
  const handleSearchChange = isControlled
    ? onSearchChange
    : (v: string) => setInternalSearch(v);
    
  console.log(categoryOptions);
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8"
      aria-label="Search and filter videos"
    >
      <div className="flex flex-wrap items-center gap-3">
        {/* Search input */}
        <div className="relative flex-1 min-w-[200px] sm:min-w-[280px]">
          <label htmlFor={searchId} className="sr-only">
            Search videos
          </label>
          <span
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            aria-hidden
          >
            <span className="material-icons-outlined text-xl">search</span>
          </span>
          <input
            id={searchId}
            type="search"
            value={searchValue}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search for back pain, anxiety, sleep..."
            className="h-12 w-full rounded-xl border border-border bg-surface pl-11 pr-4 text-base text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-[#12241d]"
            autoComplete="off"
            aria-label="Search videos"
          />
        </div>

        {/* Category select */}
        <div className="relative">
          <label htmlFor={categoryId} className="sr-only">
            Filter by category
          </label>
          <select
            id={categoryId}
            value={categoryFilter}
            onChange={(e) => onCategoryChange?.(e.target.value)}
            aria-label="Filter by category"
            className="h-12 min-w-[140px] appearance-none rounded-xl border border-border bg-surface px-4 pr-10 text-body-md font-medium text-foreground outline-none transition-colors hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-[#12241d]"
          >
            <option value="">Category</option>
            {categoryOptions.map((opt) => (
              <option key={opt.value || "all"} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <span
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted"
            aria-hidden
          >
            <span className="material-icons-outlined text-xl">expand_more</span>
          </span>
        </div>

        {/* Duration select */}
        <div className="relative">
          <label htmlFor={durationId} className="sr-only">
            Filter by duration
          </label>
          <select
            id={durationId}
            value={durationFilter}
            onChange={(e) => onDurationChange?.(e.target.value)}
            aria-label="Filter by duration"
            className="h-12 min-w-[130px] appearance-none rounded-xl border border-border bg-surface px-4 pr-10 text-body-md font-medium text-foreground outline-none transition-colors hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-[#12241d]"
          >
            {DURATION_OPTIONS.map((opt) => (
              <option key={opt.value || "all"} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <span
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted"
            aria-hidden
          >
            <span className="material-icons-outlined text-xl">expand_more</span>
          </span>
        </div>

        
      </div>
    </section>
  );
}
