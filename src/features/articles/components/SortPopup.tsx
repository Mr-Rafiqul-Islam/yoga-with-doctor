"use client";

import { useState, useEffect } from "react";
import type { ArticleSortValue } from "@/lib/filterSortArticles";
import { Modal } from "../../../components/Modal";

export type { ArticleSortValue } from "@/lib/filterSortArticles";

const SORT_OPTIONS: { value: ArticleSortValue; label: string }[] = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "category-asc", label: "Category A–Z" },
  { value: "category-desc", label: "Category Z–A" },
];

type SortPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  currentSort: ArticleSortValue;
  onApply: (sort: ArticleSortValue) => void;
};

export function SortPopup({
  isOpen,
  onClose,
  currentSort,
  onApply,
}: SortPopupProps) {
  const [sort, setSort] = useState<ArticleSortValue>(currentSort);

  useEffect(() => {
    if (isOpen) setSort(currentSort);
  }, [isOpen, currentSort]);

  const handleApply = () => {
    onApply(sort);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Sort articles">
      <div className="space-y-4">
        <div className="space-y-2" role="radiogroup" aria-label="Sort order">
          {SORT_OPTIONS.map((option) => (
            <label
              key={option.value}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-colors ${
                sort === option.value
                  ? "border-primary bg-sage-light dark:bg-sage-dark"
                  : "border-border bg-surface hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
              }`}
            >
              <input
                type="radio"
                name="sort-articles"
                value={option.value}
                checked={sort === option.value}
                onChange={() => setSort(option.value)}
                className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-body-md font-medium text-foreground">
                {option.label}
              </span>
            </label>
          ))}
        </div>

        <button
          type="button"
          onClick={handleApply}
          className="w-full rounded-lg bg-primary py-2.5 text-body-md font-medium text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Apply
        </button>
      </div>
    </Modal>
  );
}
