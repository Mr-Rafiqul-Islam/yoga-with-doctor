import { notFound } from "next/navigation";
import {
  getArticleCardBySlug,
  getArticleDetailsBySlug,
  getRelatedArticles,
} from "@/features/articles/data/dummyArticles";
import { ArticleDetailsView } from "@/features/articles/components/ArticleDetailsView";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ArticleDetailsPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleCardBySlug(slug);
  console.log(article);

  if (!article) {
    notFound();
  }

  // const relatedArticles = getRelatedArticles(article.relatedArticleSlugs);

  return <ArticleDetailsView article={article}  />;
}
