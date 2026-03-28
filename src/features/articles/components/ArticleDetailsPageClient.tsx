"use client";

import { LoadingScreen } from "@/components/ui/LoadingScreen";
import {  useGetArticleBySlugPublicQuery } from "@/slices/articles";
import {
  featuredArticle as fallbackFeaturedArticle,
  getRelatedArticles,
  type ArticleAuthor,
  type ArticleDetails,
} from "@/features/articles/data/dummyArticles";
import { ArticleDetailsView } from "./ArticleDetailsView";

type ArticleDetailsPageClientProps = {
  slug: string;
};

const fallbackAuthor: ArticleAuthor = {
  name: "YWD Team",
  title: "Yoga Wellness Writer",
  avatarSrc: fallbackFeaturedArticle.author.avatarSrc,
  bioSnippet: "",
  fullBio: "",
  profileLink: "#",
};

function mapToArticleDetails(article: {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  content?: string | null;
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
    readTime: "5 min read",
    category: article.category || "General",
    title: article.title,
    description: article.description || "",
    author: {
      ...fallbackFeaturedArticle.author,
      name: article.authorName || fallbackAuthor.name,
    },
    actionLabel: "Read More",
    href: `/articles/${article.slug}`,
    tags: [],
    detailsContent: article.content || `<p>${article.description || ""}</p>`,
  };
}

export function ArticleDetailsPageClient({ slug }: ArticleDetailsPageClientProps) {
  const { data, isLoading, isError } = useGetArticleBySlugPublicQuery(slug);
  const apiArticle = data?.data?.article;

  if (isLoading && !data) {
    return <LoadingScreen message="Loading article..." />;
  }

  if (isError || !apiArticle) {
    return (
      <p className="mx-auto w-full max-w-7xl px-4 py-10 text-body-md text-destructive sm:px-6 lg:px-8">
        Failed to load article. Please try again.
      </p>
    );
  }

  const article = mapToArticleDetails(apiArticle);
  const relatedArticles = getRelatedArticles(slug);

  return (
    <ArticleDetailsView
      article={article}
      relatedArticles={relatedArticles}
      articleApiId={apiArticle.id}
    />
  );
}
