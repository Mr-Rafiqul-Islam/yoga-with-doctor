import { ArticleDetailsPageClient } from "@/features/articles/components";

type Props = {
  params: { slug: string };
};

export default function ArticleDetailsPage({ params }: Props) {
  return <ArticleDetailsPageClient slug={params.slug} />;
}
