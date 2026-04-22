"use client";

import { GlobalSearchResultRow } from "@/components/layout/GlobalSearchResultRow";
import {
  getArticleSearchSubtitle,
  getCourseSearchSubtitle,
} from "@/lib/globalSearchPreview";
import type { GlobalSearchData } from "@/types/globalSearch";

type Props = {
  searchQuery: string;
  searchLoading: boolean;
  searchError: string | null;
  searchResults: GlobalSearchData | null;
  onResultNavigate: () => void;
  /** Extra classes for the outer scrollable section (e.g. padding). */
  className?: string;
};

/**
 * Shared global search result states and grouped result lists.
 * Used by the desktop header dropdown and the mobile full-viewport overlay.
 */
export function GlobalSearchResultsContent({
  searchQuery,
  searchLoading,
  searchError,
  searchResults,
  onResultNavigate,
  className = "",
}: Props) {
  if (searchQuery.trim().length < 2) {
    return (
      <p className="px-4 py-3 text-body-sm text-muted">
        Type at least 2 characters to search.
      </p>
    );
  }
  if (searchLoading) {
    return <p className="px-4 py-3 text-body-sm text-muted">Searching…</p>;
  }
  if (searchError) {
    return (
      <p className="px-4 py-3 text-body-sm text-destructive" role="alert">
        {searchError}
      </p>
    );
  }
  if (
    searchResults &&
    searchResults.courses.length === 0 &&
    searchResults.classes.length === 0 &&
    (searchResults.articles?.length ?? 0) === 0
  ) {
    return <p className="px-4 py-3 text-body-sm text-muted">No results found.</p>;
  }
  if (!searchResults) {
    return null;
  }

  return (
    <div className={`space-y-4 px-2 pb-1 pt-1 ${className}`}>
      {searchResults.courses.length > 0 ? (
        <div>
          <p className="px-2 pb-2 text-caption font-semibold uppercase tracking-wide text-muted">
            Courses
          </p>
          <ul className="space-y-1">
            {searchResults.courses.map((c) => (
              <li key={c.id}>
                <GlobalSearchResultRow
                  href={`/courses/${c.slug}`}
                  title={c.title}
                  subtitle={getCourseSearchSubtitle(c)}
                  imageUrl={c.bannerUrl}
                  placeholderKind="course"
                  onNavigate={onResultNavigate}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {searchResults.classes.length > 0 ? (
        <div>
          <p className="px-2 pb-2 text-caption font-semibold uppercase tracking-wide text-muted">
            Classes
          </p>
          <ul className="space-y-1">
            {searchResults.classes.map((c) => (
              <li key={c.id}>
                <GlobalSearchResultRow
                  href={`/videos/free/${c.slug}`}
                  title={c.title}
                  subtitle={c.shortDescription?.trim() ?? null}
                  imageUrl={c.thumbnailUrl ?? c.bannerUrl ?? null}
                  placeholderKind="class"
                  onNavigate={onResultNavigate}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {(searchResults.articles?.length ?? 0) > 0 ? (
        <div>
          <p className="px-2 pb-2 text-caption font-semibold uppercase tracking-wide text-muted">
            Articles
          </p>
          <ul className="space-y-1">
            {(searchResults.articles ?? []).map((a) => (
              <li key={a.id}>
                <GlobalSearchResultRow
                  href={`/articles/${a.slug}`}
                  title={a.title}
                  subtitle={getArticleSearchSubtitle(a)}
                  imageUrl={a.image}
                  placeholderKind="article"
                  onNavigate={onResultNavigate}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
