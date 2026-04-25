import {
  HeroSection,
  FreeVideosPageContent,
  // PremiumAccessCTASection,
} from "@/features/videos/free/components";
import type { Metadata } from "next";
import { publicPageMetadata } from "@/lib/publicPageMetadata";

/**
 * Free Wellness Library page (`/videos` — free library).
 * Server component; filter + grid + load more live in FreeVideosPageContent (client).
 */
export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Free Wellness Videos",
    description:
      "Watch free doctor-led yoga classes — mobility, recovery, and mindfulness. Filter by category and level.",
    path: "/videos",
  });
}

export default function FreeVideosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <HeroSection />
      <FreeVideosPageContent />
      {/* <PremiumAccessCTASection /> */}
    </div>
  );
}
