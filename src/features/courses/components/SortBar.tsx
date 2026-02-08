"use client";

import { useState, useId } from "react";

export type SortOption = {
  value: string;
  label: string;
};

export type ViewMode = "grid" | "list";

const DEFAULT_SORT_OPTIONS: SortOption[] = [
  { value: "newest", label: "Newest" },
  { value: "popular", label: "Popular" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

export type SortBarProps = {
  /** Available sort options. Default: Newest, Popular, Price Low/High. */
  sortOptions?: SortOption[];
  /** Current sort value (controlled). If omitted, uses internal state. */
  sortValue?: string;
  /** Called when sort selection changes. */
  onSortChange?: (value: string) => void;
  /** Current view mode (controlled). If omitted, uses internal state. */
  viewMode?: ViewMode;
  /** Called when view mode changes. */
  onViewChange?: (mode: ViewMode) => void;
  /** Optional class for the root wrapper. */
  className?: string;
};

export function SortBar({
  sortOptions = DEFAULT_SORT_OPTIONS,
  sortValue: controlledSortValue,
  onSortChange,
  viewMode: controlledViewMode,
  onViewChange,
  className = "",
}: SortBarProps) {
  const [internalSort, setInternalSort] = useState(
    controlledSortValue ?? sortOptions[0]?.value ?? "newest"
  );
  const [internalView, setInternalView] = useState<ViewMode>(
    controlledViewMode ?? "grid"
  );

  const sortValue = controlledSortValue ?? internalSort;
  const viewMode = controlledViewMode ?? internalView;

  const handleSortChange = (value: string) => {
    if (controlledSortValue == null) setInternalSort(value);
    onSortChange?.(value);
  };

  const handleViewChange = (mode: ViewMode) => {
    if (controlledViewMode == null) setInternalView(mode);
    onViewChange?.(mode);
  };

  const sortId = useId();

  return (
    <div
      role="group"
      aria-label="Sort and view options"
      className={[
        "flex flex-wrap items-center justify-end gap-3 sm:gap-3",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-center gap-3">
        <label
          htmlFor={sortId}
          className="text-body-md font-medium text-muted shrink-0"
        >
          Sort by:
        </label>
        <div className="relative shrink-0">
          <select
            id={sortId}
            value={sortValue}
            onChange={(e) => handleSortChange(e.target.value)}
            aria-label="Sort courses by"
            className="min-w-[140px] appearance-none rounded-xl border border-border bg-surface py-2 pl-4 pr-10 text-body-md text-foreground shadow-elevation-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer dark:border-gray-700"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <span
            className="material-icons-outlined pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-lg text-muted"
            aria-hidden
          >
            expand_more
          </span>
        </div>
      </div>

      <div
        className="hidden rounded-xl border border-border bg-surface p-1 shadow-elevation-sm md:flex dark:border-gray-700"
        role="group"
        aria-label="View mode"
      >
        <button
          type="button"
          onClick={() => handleViewChange("grid")}
          aria-pressed={viewMode === "grid"}
          aria-label="Grid view"
          className={
            viewMode === "grid"
              ? "rounded-lg bg-gray-100 p-1.5 text-primary shadow-elevation-sm transition-colors dark:bg-gray-700 dark:text-primary"
              : "rounded-lg p-1.5 text-muted transition-colors hover:text-foreground dark:hover:text-gray-300"
          }
        >
          <span className="material-icons-outlined text-lg">grid_view</span>
        </button>
        <button
          type="button"
          onClick={() => handleViewChange("list")}
          aria-pressed={viewMode === "list"}
          aria-label="List view"
          className={
            viewMode === "list"
              ? "rounded-lg bg-gray-100 p-1.5 text-primary shadow-elevation-sm transition-colors dark:bg-gray-700 dark:text-primary"
              : "rounded-lg p-1.5 text-muted transition-colors hover:text-foreground dark:hover:text-gray-300"
          }
        >
          <span className="material-icons-outlined text-lg">view_list</span>
        </button>
      </div>
    </div>
  );
}
