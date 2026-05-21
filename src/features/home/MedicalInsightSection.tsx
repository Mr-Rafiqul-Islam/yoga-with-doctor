"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useGetArticlesQuery } from "@/slices/articles";

const FALLBACK_TITLE = "Today's Medical Insight";
const FALLBACK_SUBTITLE =
  'Deep breathing activates the parasympathetic nervous system, reducing cortisol levels by up to 20% in just 5 minutes. Try our "MindClarity" flow today.';
const FALLBACK_HREF = "/articles";

/** Matches `ArticlesSection` query so RTK Query serves one cached request on the home page. */
const FEATURED_ARTICLE_QUERY = { page: 1, limit: 4 } as const;

function resolveFeaturedSubtitle(article: {
  subTitle: string | null;
  description: string | null;
}): string {
  const subTitle = article.subTitle?.trim();
  if (subTitle) return subTitle;

  const description = article.description?.trim();
  if (description) return description;

  return FALLBACK_SUBTITLE;
}

export function MedicalInsightSection() {
  const { data } = useGetArticlesQuery(FEATURED_ARTICLE_QUERY);

  const featured = useMemo(() => {
    const article = data?.data?.articles?.[0];
    if (!article?.title?.trim()) return null;

    return {
      title: article.title.trim(),
      subtitle: resolveFeaturedSubtitle(article),
      href: `/articles/${article.slug}`,
    };
  }, [data?.data?.articles]);

  const title = featured?.title ?? FALLBACK_TITLE;
  const subtitle = featured?.subtitle ?? FALLBACK_SUBTITLE;
  const href = FALLBACK_HREF;

  return (
    <section
      className="relative z-20 mx-auto -mt-8 mb-16 max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="medical-insight-heading"
    >
      <div className="flex flex-col items-center gap-6 rounded-xl border border-primary/20 bg-sage-light p-6 shadow-soft dark:border-white/10 dark:bg-sage-dark sm:p-10 md:flex-row">
        <div className="flex-shrink-0">
          <div
            className="flex h-14 w-14 xl:h-16 xl:w-16 items-center justify-center rounded-full bg-white text-primary shadow-sm dark:text-primary-on-dark"
            aria-hidden
          >
            <span className="material-icons-outlined text-lg md:text-xl xl:text-2xl">
              menu_book
            </span>
          </div>
        </div>
        <div className="flex-grow text-center md:text-left">
          <h2
            id="medical-insight-heading"
            className="font-display text-lg font-bold text-gray-900 dark:text-sage-dark-title"
          >
            {title}
          </h2>
          <p className="mt-1 max-w-2xl line-clamp-3 text-gray-600 dark:text-sage-dark-desc">
            {subtitle}
          </p>
        </div>
        <div className="flex flex-shrink-0">
          <Link
            href={href}
            className="inline-flex items-center font-semibold text-primary transition-colors hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:text-primary-on-dark dark:hover:text-primary rounded-radius-sm"
          >
            Read Article
            <span className="material-icons-outlined ml-1 text-sm" aria-hidden>
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
