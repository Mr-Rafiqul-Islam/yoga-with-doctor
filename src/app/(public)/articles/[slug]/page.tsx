import { notFound } from "next/navigation";
import {
  getArticleDetailsBySlug,
  getRelatedArticles,
} from "@/features/articles/data/dummyArticles";
import { ArticleDetailsView } from "@/features/articles/components/ArticleDetailsView";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ArticleDetailsPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleDetailsBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug);

  return <ArticleDetailsView article={article} relatedArticles={relatedArticles} />;
}
