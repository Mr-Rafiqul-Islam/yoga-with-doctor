"use client";

import { useState, useEffect } from "react";
import type {
  ArticleFiltersState,
  ArticleBadgeFilter,
} from "@/lib/filterSortArticles";
import { Modal } from "../../../components/Modal";

export type { ArticleFiltersState, ArticleBadgeFilter } from "@/lib/filterSortArticles";

type FilterPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  initialFilters: ArticleFiltersState;
  onApply: (filters: ArticleFiltersState) => void;
  categoryOptions?: string[];
};

function formatCategoryLabel(value: string): string {
  return value
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function FilterPopup({
  isOpen,
  onClose,
  initialFilters,
  onApply,
  categoryOptions = [],
}: FilterPopupProps) {
  const [categories, setCategories] = useState<string[]>(initialFilters.categories);
  const [badge, setBadge] = useState<ArticleBadgeFilter>(initialFilters.badge);

  useEffect(() => {
    if (isOpen) {
      setCategories(initialFilters.categories);
      setBadge(initialFilters.badge);
    }
  }, [isOpen, initialFilters.categories, initialFilters.badge]);

  const handleCategoryToggle = (cat: string) => {
    setCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleApply = () => {
    onApply({ categories, badge });
    onClose();
  };

  const handleClear = () => {
    setCategories([]);
    setBadge("all");
    onApply({ categories: [], badge: "all" });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Filter articles">
      <div className="space-y-6">
        <div>
          <h3 className="mb-3 text-body-md font-semibold text-foreground">
            Category
          </h3>
          <div className="flex flex-wrap gap-2">
            {categoryOptions.map((cat) => (
              <label
                key={cat}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 transition-colors has-[:checked]:border-primary has-[:checked]:bg-sage-light dark:has-[:checked]:bg-sage-dark dark:border-gray-700"
              >
                <input
                  type="checkbox"
                  checked={categories.includes(cat)}
                  onChange={() => handleCategoryToggle(cat)}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-body-md text-foreground">
                  {formatCategoryLabel(cat)}
                </span>
              </label>
            ))}
          </div>
          <p className="mt-2 text-caption text-muted">
            Leave all unchecked to show all categories.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-body-md font-semibold text-foreground">
            Type
          </h3>
          <div className="flex gap-2">
            {(["all", "FREE", "PREMIUM"] as const).map((option) => (
              <label
                key={option}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 transition-colors has-[:checked]:border-primary has-[:checked]:bg-sage-light dark:has-[:checked]:bg-sage-dark dark:border-gray-700"
              >
                <input
                  type="radio"
                  name="badge-filter"
                  value={option}
                  checked={badge === option}
                  onChange={() => setBadge(option)}
                  className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-body-md text-foreground capitalize">
                  {option}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex gap-3 border-t border-border pt-4 dark:border-gray-700">
          <button
            type="button"
            onClick={handleClear}
            className="flex-1 rounded-lg border border-border bg-surface py-2.5 text-body-md font-medium text-foreground transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary dark:hover:bg-gray-800"
          >
            Clear all
          </button>
          <button
            type="button"
            onClick={handleApply}
            className="flex-1 rounded-lg bg-primary py-2.5 text-body-md font-medium text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Apply
          </button>
        </div>
      </div>
    </Modal>
  );
}
