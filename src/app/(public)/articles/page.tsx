import { ArticlesPageClient } from "@/features/articles/components";
import type { Metadata } from "next";
import { publicPageMetadata } from "@/lib/publicPageMetadata";

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Articles",
    description:
      "Expert articles on yoga therapy, recovery, mindfulness, and spine health from Yoga With Doctor.",
    path: "/articles",
  });
}

export default function ArticlesPage() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-grow px-4 py-10 sm:px-6 lg:px-8">
      <ArticlesPageClient />
    </main>
  );
}
