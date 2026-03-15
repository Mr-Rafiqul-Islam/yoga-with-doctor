import {
  HeroSection,
  MedicalInsightSection,
  // TrendingTagsSection,
  FreeVideosSection,
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
    </>
  );
}
