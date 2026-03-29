"use client";

import Link from "next/link";
import { useMemo } from "react";
import { ArticleCard } from "@/features/articles/components/ArticleCard";
import {
  featuredArticle as fallbackFeaturedArticle,
  type ArticleAuthor,
  type ArticleDetails,
} from "@/features/articles/data/dummyArticles";
import { useGetArticlesQuery } from "@/slices/articles";
import { formatTimeAgo } from "@/utils/formatTimeAgo";

const PAGE_SIZE = 4;

const fallbackAuthor: ArticleAuthor = {
  name: "Dr Md Shah Alam",
  title: "Orthopedics Specialist, Spine Surgeion, Yoga Instructor",
  avatarSrc:
    "https://drshahalam.com/wp-content/uploads/2026/02/Dr-Shah-Alam-Website-Hero.jpeg",
  bioSnippet:
    "Specializing in the intersection of neuroscience and traditional yogic practices.",
  fullBio:
    "Specializing in the intersection of neuroscience and traditional yogic practices.",
  profileLink: "https://drshahalam.com/",
};

export function mapApiArticleToCard(article: {
  title: string;
  slug: string;
  description: string | null;
  category: string | null;
  image: string | null;
  authorName: string | null;
  access: string;
  createdAt: string;
}): ArticleDetails {
  return {
    slug: article.slug,
    image: article.image || fallbackFeaturedArticle.image,
    imageAlt: article.title || "Article cover image",
    badge: article.access === "PREMIUM" ? "PREMIUM" : "FREE",
    category: article.category || "General",
    title: article.title,
    description: article.description || "",
    timeAgo: formatTimeAgo(article.createdAt),
    author: {
      ...fallbackAuthor,
      name: article.authorName || fallbackAuthor.name,
    },
    actionLabel: "Read More",
    href: `/articles/${article.slug}`,
    tags: [],
    detailsContent: "",
  };
}

function ArticleCardSkeleton() {
  return (
    <div
      className="flex h-64 flex-row overflow-hidden rounded-2xl border border-border bg-surface shadow-elevation-sm animate-pulse"
      aria-hidden
    >
      <div className="w-1/3 shrink-0 bg-muted/40" />
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="space-y-3">
          <div className="h-3 w-24 rounded bg-muted/50" />
          <div className="h-6 w-full max-w-[90%] rounded bg-muted/50" />
          <div className="h-4 w-full rounded bg-muted/40" />
          <div className="h-4 w-[80%] rounded bg-muted/40" />
        </div>
        <div className="flex justify-between border-t border-border pt-4">
          <div className="h-3 w-28 rounded bg-muted/40" />
          <div className="h-4 w-20 rounded bg-muted/50" />
        </div>
      </div>
    </div>
  );
}

export function ArticlesSection() {
  const { data, isLoading, isFetching } = useGetArticlesQuery({
    page: 1,
    limit: PAGE_SIZE,
  });

  const articles = useMemo(() => {
    const list = data?.data?.articles ?? [];
    return list.map(mapApiArticleToCard);
  }, [data?.data?.articles]);

  const showSkeleton = isLoading || isFetching;

  return (
    <section
      className="mx-auto mb-24 max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="home-articles-heading"
    >
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2
            id="home-articles-heading"
            className="font-display text-3xl font-bold text-foreground dark:text-white"
          >
            Wellness Articles
          </h2>
          <p className="mt-2 text-sm text-muted dark:text-gray-400">
            Expert reads on yoga, recovery, and mindful living
          </p>
        </div>
        <Link
          href="/articles"
          className="shrink-0 rounded-radius-sm text-sm font-medium text-primary transition-colors hover:text-primary-variant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:text-primary"
        >
          View all
        </Link>
      </div>

      {showSkeleton ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {Array.from({ length: PAGE_SIZE }).map((_, i) => (
            <ArticleCardSkeleton key={i} />
          ))}
        </div>
      ) : articles.length === 0 ? (
        <p className="py-8 text-center text-body-md text-muted">
          No articles to show right now. Check back soon.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </section>
  );
}
