"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  OrderSummaryCard,
  PaymentMethodsSection,
  PricingPageHeader,
  PricingPlansGrid,
} from "@/features/pricing/components";
import {
  PLANS,
  type PaymentMethod,
  type PlanType,
} from "@/features/pricing/data/pricingPlans";

export function PricingPageContent() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("yearly");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("credit_card");

  const selectedPlanData = PLANS[selectedPlan];
  const discount =
    selectedPlan === "yearly"
      ? (selectedPlanData.originalPrice ?? 0) - selectedPlanData.price
      : 0;
  const tax = 0;
  const total = selectedPlanData.price + (selectedPlanData.price * tax / 100) - discount;

  const handleSubscribe = () => {
    router.push(`/checkout/review?plan=${selectedPlan}`);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background transition-colors duration-300">
      <main className="container mx-auto flex-grow max-w-7xl px-4 py-8">
        <PricingPageHeader />
        <PricingPlansGrid
          selectedPlan={selectedPlan}
          onSelectPlan={setSelectedPlan}
        />

        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-12">
          <PaymentMethodsSection
            paymentMethod={paymentMethod}
            onPaymentMethodChange={setPaymentMethod}
          />
          <OrderSummaryCard
            subtotal={selectedPlanData.price}
            tax={tax}
            discount={discount}
            total={total}
            planName={selectedPlanData.name}
            onSubscribe={handleSubscribe}
          />
        </div>
      </main>
    </div>
  );
}
