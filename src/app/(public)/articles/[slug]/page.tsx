import { ArticleDetailsPageClient } from "@/features/articles/components";
import {
  fetchAllArticleSlugs,
  fetchArticlesPage,
  fetchPublicArticleBySlug,
} from "@/features/articles/lib/articlePublicApi";
import {
  mapToArticleDetails,
  selectRelatedArticleCards,
} from "@/features/articles/lib/mapApiArticle";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { dynamicPageMetadata } from "@/lib/publicPageMetadata";

type Props = {
  params: Promise<{ slug: string }>;
};

/** ISR: refetch from your API at most this often (seconds). Must match fetch in articlePublicApi. */
export const revalidate = 60;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!slug) return { title: "Article" };
  try {
    const article = await fetchPublicArticleBySlug(slug);
    if (article?.title) {
      const description = article.description
        ? String(article.description)
            .replace(/<[^>]*>/g, " ")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, 160)
        : undefined;
      return dynamicPageMetadata({
        title: article.title,
        ...(description && { description }),
        path: `/articles/${slug}`,
      });
    }
  } catch {
    // ignore
  }
  return { title: "Article" };
}

export async function generateStaticParams() {
  return fetchAllArticleSlugs(500);
}

export default async function ArticleDetailsPage({ params }: Props) {
  const { slug } = await params;
  if (!slug) {
    notFound();
  }

  const [apiArticle, list] = await Promise.all([
    fetchPublicArticleBySlug(slug),
    fetchArticlesPage({ page: 1, limit: 50 }),
  ]);

  if (!apiArticle) {
    notFound();
  }

  const article = mapToArticleDetails(apiArticle);
  const relatedArticles = selectRelatedArticleCards(
    apiArticle.slug,
    apiArticle.category,
    list,
    3,
  );

  return (
    <ArticleDetailsPageClient
      article={article}
      relatedArticles={relatedArticles}
      articleApiId={apiArticle.id}
    />
  );
}
