import Link from "next/link";
import { notFound } from "next/navigation";
import { getFreeVideoBySlug } from "@/features/videos/free/data/freeVideosData";
import { getFreeVideoDetailsBySlug } from "@/features/videos/free/data/freeVideoDetailsData";
import { FreeVideoDetailsContent } from "@/features/videos/free/components/FreeVideoDetailsContent";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const video = getFreeVideoBySlug(slug);
  if (!video?.title) return { title: "Video" };
  return {
    title: video.title,
    description: video.description ?? undefined,
  };
}

export default async function FreeVideoDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const video = getFreeVideoBySlug(slug);
  if (!video) notFound();
  const details = getFreeVideoDetailsBySlug(slug);
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Link
          href="/videos/free"
          className="inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          <span className="material-icons-outlined text-lg">arrow_back</span>
          Back to Free Videos
        </Link>
      </div>
      <FreeVideoDetailsContent video={video} details={details} />
    </div>
  );
}
