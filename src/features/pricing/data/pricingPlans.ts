export type PlanType = "monthly" | "yearly" | "lifetime";
export type PaymentMethod = "credit_card" | "apple_pay" | "google_pay";

export type PlanFeature = string | { text: string; included: boolean };

export type Plan = {
  name: string;
  price: number;
  originalPrice?: number;
  period: string;
  description: string;
  features: PlanFeature[];
  badge: string | null;
  selected?: boolean;
};

export const PLANS: Record<PlanType, Plan> = {
  monthly: {
    name: "Monthly",
    price: 19.99,
    period: "/mo",
    description: "Flexible, cancel anytime",
    features: [
      "Access to basic courses",
      "No commitment required",
      { text: "No offline downloads", included: false },
      { text: "Standard support", included: false },
    ],
    badge: null,
  },
  yearly: {
    name: "Yearly Access",
    price: 199.99,
    originalPrice: 239.88,
    period: "",
    description: "Pay once, enjoy forever",
    features: [
      "Save 17% vs monthly",
      "Premium Collection Access",
      "Offline downloads enabled",
      "Priority support",
    ],
    badge: "Best Value",
    selected: true,
  },
  lifetime: {
    name: "Lifetime",
    price: 499.0,
    period: "once",
    description: "One-time payment",
    features: [
      "Everything in Yearly",
      "Lifetime app updates",
      "1-on-1 Medical Consult",
      "VIP Community Access",
    ],
    badge: "Elite",
  },
} as const;

export function getFeatureDisplay(feature: PlanFeature): { text: string; included: boolean } {
  if (typeof feature === "string") return { text: feature, included: true };
  return { text: feature.text, included: feature.included !== false };
}
