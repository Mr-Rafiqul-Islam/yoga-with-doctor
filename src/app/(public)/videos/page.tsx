import {
  HeroSection,
  FreeVideosPageContent,
  // PremiumAccessCTASection,
} from "@/features/videos/free/components";

/**
 * Free Wellness Library page (/videos/free).
 * Server component; filter + grid + load more live in FreeVideosPageContent (client).
 */
export default function FreeVideosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <HeroSection />
      <FreeVideosPageContent />
      {/* <PremiumAccessCTASection /> */}
    </div>
  );
}
