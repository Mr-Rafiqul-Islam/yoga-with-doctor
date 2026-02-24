import { PLANS, type PlanType } from "@/features/pricing/data/pricingPlans";
import { PricingPlanCard } from "./PricingPlanCard";

type PricingPlansGridProps = {
  selectedPlan: PlanType;
  onSelectPlan: (plan: PlanType) => void;
};

export function PricingPlansGrid({
  selectedPlan,
  onSelectPlan,
}: PricingPlansGridProps) {
  return (
    <div className="mb-16 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
      <PricingPlanCard
        plan={PLANS.monthly}
        isSelected={selectedPlan === "monthly"}
        orderClassName="order-2 lg:order-1"
        onSelect={() => onSelectPlan("monthly")}
      />
      <PricingPlanCard
        plan={PLANS.yearly}
        isSelected={selectedPlan === "yearly"}
        isFeatured
        onSelect={() => onSelectPlan("yearly")}
      />
      <PricingPlanCard
        plan={PLANS.lifetime}
        isSelected={selectedPlan === "lifetime"}
        orderClassName="order-3"
        onSelect={() => onSelectPlan("lifetime")}
      />
    </div>
  );
}
