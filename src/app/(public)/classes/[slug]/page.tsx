import { redirect } from "next/navigation";

/**
 * Alias for free class (video) detail — canonical route lives at /videos/free/[slug].
 */
export default async function ClassDetailAliasPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!slug) redirect("/videos");
  redirect(`/videos/free/${slug}`);
}
