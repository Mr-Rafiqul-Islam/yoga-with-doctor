"use client";

import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { useGetArticlesQuery } from "@/slices/articles";
import {
  featuredArticle as fallbackFeaturedArticle,
  type ArticleAuthor,
  type ArticleDetails,
  type FeaturedArticle,
} from "@/features/articles/data/dummyArticles";
import { ArticlesPageContent } from "./ArticlesPageContent";

const PAGE_SIZE = 10;

const fallbackAuthor: ArticleAuthor = {
  name: "YWD Team",
  title: "Yoga Wellness Writer",
  avatarSrc: fallbackFeaturedArticle.author.avatarSrc,
  bioSnippet: "",
  fullBio: "",
  profileLink: "#",
};

function mapToArticleDetails(article: {
  title: string;
  slug: string;
  description: string | null;
  category: string | null;
  image: string | null;
  authorName: string | null;
  access: string;
}): ArticleDetails {
  return {
    slug: article.slug,
    image: article.image || fallbackFeaturedArticle.image,
    imageAlt: article.title || "Article cover image",
    badge: article.access === "PREMIUM" ? "PREMIUM" : "FREE",
    category: article.category || "General",
    title: article.title,
    description: article.description || "",
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

function mapToFeaturedArticle(article: {
  title: string;
  slug: string;
  description: string | null;
  category: string | null;
  image: string | null;
  authorName: string | null;
}): FeaturedArticle {
  return {
    slug: article.slug,
    image: article.image || fallbackFeaturedArticle.image,
    imageAlt: article.title || "Featured article image",
    category: article.category || "General",
    readTime: "5 min read",
    title: article.title,
    description: article.description || "",
    author: {
      ...fallbackAuthor,
      name: article.authorName || fallbackAuthor.name,
    },
    tags: [],
    href: `/articles/${article.slug}`,
    detailsContent: "",
  };
}

export function ArticlesPageClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = useGetArticlesQuery({
    page: currentPage,
    limit: PAGE_SIZE,
  });

  const apiArticles = data?.data?.articles ?? [];
  const totalPages = data?.data?.pagination?.totalPages ?? 0;

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const featuredArticle =
    apiArticles.length > 0
      ? mapToFeaturedArticle(apiArticles[0])
      : fallbackFeaturedArticle;
  const articles =
    apiArticles.length > 1
      ? apiArticles.slice(1).map(mapToArticleDetails)
      : [];

  if (isLoading && !data) {
    return <LoadingScreen message="Loading articles..." />;
  }

  if (isError) {
    return (
      <p className="text-body-md text-destructive">
        Failed to load articles. Please try again.
      </p>
    );
  }

  return (
    <ArticlesPageContent
      featuredArticle={featuredArticle}
      articles={articles}
      pagination={{
        totalPages,
        currentPage,
        onPageChange: setCurrentPage,
      }}
    />
  );
}
