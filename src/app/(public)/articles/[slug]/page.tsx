import { ArticleDetailsPageClient } from "@/features/articles/components";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ArticleDetailsPage({ params }: Props) {
  const { slug } = await params;
  return <ArticleDetailsPageClient slug={slug} />;
}
