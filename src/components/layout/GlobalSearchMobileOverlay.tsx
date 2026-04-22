"use client";

import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

import {
  useAppSelector,
  useAppDispatch,
  setGlobalSearchQuery,
  setGlobalSearchOpen,
  clearGlobalSearch,
} from "@/stores";
import { GlobalSearchResultsContent } from "@/components/layout/GlobalSearchResultsContent";

/**
 * Full-viewport search UI for &lt; lg. Hidden at lg+ via class so store-driven isOpen
 * does not double up with the inline header search. Portaled to document.body.
 */
export function GlobalSearchMobileOverlay() {
  const dispatch = useAppDispatch();
  const {
    query: searchQuery,
    isOpen: searchOpen,
    loading: searchLoading,
    error: searchError,
    results: searchResults,
  } = useAppSelector((s) => s.globalSearch);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!searchOpen) return;
    const mq = window.matchMedia("(min-width: 1024px)");
    const syncBody = () => {
      document.body.style.overflow = mq.matches ? "" : "hidden";
    };
    syncBody();
    mq.addEventListener("change", syncBody);
    return () => {
      mq.removeEventListener("change", syncBody);
      document.body.style.overflow = "";
    };
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    if (window.matchMedia("(min-width: 1024px)").matches) return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => inputRef.current?.focus());
    });
    return () => cancelAnimationFrame(id);
  }, [searchOpen]);

  if (!searchOpen) return null;
  if (typeof document === "undefined") return null;

  const onQueryChange = (v: string) => {
    dispatch(setGlobalSearchQuery(v));
    if (v.trim().length >= 1) {
      dispatch(setGlobalSearchOpen(true));
    }
  };

  const content = (
    <div
      className="fixed inset-0 z-[100] flex min-h-0 flex-col bg-surface lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Search videos, courses, and articles"
    >
      <div className="flex shrink-0 items-center gap-3 border-b border-border px-4 py-3 dark:border-gray-700">
        <button
          type="button"
          onClick={() => dispatch(setGlobalSearchOpen(false))}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-radius-sm text-muted transition-colors hover:bg-secondary hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Close search"
        >
          <span className="material-icons-outlined text-2xl" aria-hidden>
            close
          </span>
        </button>
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-radius-full bg-background px-4 py-2">
          <span className="material-icons-outlined shrink-0 text-lg text-muted" aria-hidden>
            search
          </span>
          <input
            ref={inputRef}
            type="search"
            placeholder="Search videos, courses..."
            className="w-full min-w-0 border-none bg-transparent text-body-md text-foreground placeholder:text-muted focus:outline-none focus:ring-0"
            aria-label="Search videos and courses"
            autoComplete="off"
            value={searchQuery}
            onChange={(e) => onQueryChange(e.target.value)}
          />
        </div>
      </div>
      <div
        className="min-h-0 flex-1 overflow-y-auto overscroll-contain py-2"
        id="header-global-search-results-mobile"
        role="region"
        aria-label="Search results"
      >
        <GlobalSearchResultsContent
          searchQuery={searchQuery}
          searchLoading={searchLoading}
          searchError={searchError}
          searchResults={searchResults}
          onResultNavigate={() => dispatch(clearGlobalSearch())}
        />
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
