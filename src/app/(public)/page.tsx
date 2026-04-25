import {
  HeroSection,
  MedicalInsightSection,
  // TrendingTagsSection,
  FreeVideosSection,
  ArticlesSection,
  // PremiumCollectionSection,
  TrendingCoursesSection,
} from "@/features/home";
import type { Metadata } from "next";
import { publicPageMetadata } from "@/lib/publicPageMetadata";

export async function generateMetadata(): Promise<Metadata> {
  const base = publicPageMetadata({
    title: "Yoga With Doctor",
    description:
      "Doctor-led yoga, evidence-based courses, free classes, and articles for recovery, spine health, and mindful movement.",
    path: "/",
  });
  return {
    ...base,
    title: { absolute: "Yoga With Doctor" },
  };
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <MedicalInsightSection />
      {/* <TrendingTagsSection /> */}
      <FreeVideosSection />
      {/* <PremiumCollectionSection /> */}
      <TrendingCoursesSection />
      <ArticlesSection />
    </>
  );
}
