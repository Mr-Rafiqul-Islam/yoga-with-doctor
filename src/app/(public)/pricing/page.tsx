import { MaintenanceView } from "@/components/ui/MaintenanceView";
// import { PricingPageContent } from "@/features/pricing";
import type { Metadata } from "next";
import { publicPageMetadata } from "@/lib/publicPageMetadata";

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Pricing",
    description:
      "Unlock unlimited access to courses, premium videos, and guided programs. Choose the plan that fits your wellness journey.",
    path: "/pricing",
  });
}

/**
 * Premium pricing page. Public route (no auth required to view, but checkout requires login).
 */
export default function PricingPage() {
  return (
  // <PricingPageContent />
  <MaintenanceView />
);
}
