import Link from "next/link";
import {
  getFreeVideoBySlug,
  getFreeVideoSlugsForStaticParams,
} from "@/features/videos/free/data/freeVideosData";
import { FreeVideoDetailsContainer } from "@/features/videos/free/components/FreeVideoDetailsContainer";
import type { Metadata } from "next";
import { dynamicPageMetadata } from "@/lib/publicPageMetadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** ISR: must align with `next.revalidate` on fetches in freeVideosData. */
export const revalidate = 60;

export async function generateStaticParams() {
  return getFreeVideoSlugsForStaticParams(500);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const video = await getFreeVideoBySlug(slug);
  if (!video?.title) return { title: "Video" };
  return dynamicPageMetadata({
    title: video.title,
    description: video.shortDescription,
    path: `/videos/free/${slug}`,
  });
}


export default async function FreeVideoDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Link
          href="/videos"
          className="inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          <span className="material-icons-outlined text-lg">arrow_back</span>
          Back to Free Videos
        </Link>
      </div>
      <FreeVideoDetailsContainer slug={slug} />
    </div>
  );
}
