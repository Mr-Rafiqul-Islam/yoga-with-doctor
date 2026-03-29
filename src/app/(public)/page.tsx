import {
  HeroSection,
  MedicalInsightSection,
  // TrendingTagsSection,
  FreeVideosSection,
  ArticlesSection,
  // PremiumCollectionSection,
  TrendingCoursesSection,
} from "@/features/home";

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
