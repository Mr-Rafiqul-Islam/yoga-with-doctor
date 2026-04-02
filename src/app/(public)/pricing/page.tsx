import { MaintenanceView } from "@/components/ui/MaintenanceView";
import { PricingPageContent } from "@/features/pricing";

export const metadata = {
  title: "Premium Pricing Plans",
  description:
    "Unlock unlimited access to all courses, premium videos, and meditation guides. Choose the plan that fits your wellness journey.",
};

/**
 * Premium pricing page. Public route (no auth required to view, but checkout requires login).
 */
export default function PricingPage() {
  return (
  <PricingPageContent />
  // <MaintenanceView />
);
}
