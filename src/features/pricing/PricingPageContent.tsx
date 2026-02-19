"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type PlanType = "monthly" | "yearly" | "lifetime";
type PaymentMethod = "credit_card" | "apple_pay" | "google_pay";

const PLANS = {
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

export function PricingPageContent() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("yearly");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("credit_card");

  const selectedPlanData = PLANS[selectedPlan];
  const discount = selectedPlan === "yearly" ? (selectedPlanData as typeof PLANS.yearly).originalPrice! - selectedPlanData.price : 0;
  const tax = 0;
  const total = selectedPlanData.price + tax - discount;

  const handleSubscribe = () => {
    // TODO: Navigate to checkout with selected plan
    router.push(`/checkout/review?plan=${selectedPlan}`);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background transition-colors duration-300">
      

      <main className="container mx-auto flex-grow max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <span className="material-icons-outlined text-primary text-3xl">self_improvement</span>
          </div>
          <h2 className="mb-4 font-display text-4xl font-bold text-foreground dark:text-white md:text-5xl">
            Unlock Inner Peace
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted">
            Join thousands of yogis. Get unlimited access to all courses, premium videos, and meditation guides
            designed for your wellbeing.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="mb-16 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {/* Monthly Plan */}
          <div className="relative order-2 flex h-full flex-col lg:order-1">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition hover:shadow-md dark:bg-surface-dark xl:p-8">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="mb-2 font-display text-xl font-bold xl:text-2xl">Monthly</h3>
                  <p className="text-xs text-muted xl:text-sm">Flexible, cancel anytime</p>
                </div>
                <div className="text-right">
                  <span className="block text-2xl font-bold xl:text-3xl">$19.99</span>
                  <span className="block text-xs text-muted xl:text-sm">/mo</span>
                </div>
              </div>
              <hr className="mb-6 border-border" />
              <ul className="mb-8 flex-grow space-y-4 text-sm xl:text-base">
                {PLANS.monthly.features.map((feature, idx) => {
                  const isIncluded = typeof feature === "string" || feature.included !== false;
                  const text = typeof feature === "string" ? feature : feature.text;
                  return (
                    <li key={idx} className={`flex items-center ${!isIncluded ? "opacity-50" : ""}`}>
                      <span
                        className={`material-icons-outlined mr-3 text-lg ${
                          isIncluded ? "text-gray-400 dark:text-gray-500" : "text-gray-300 dark:text-gray-600"
                        }`}
                      >
                        {isIncluded ? "check_circle" : "cancel"}
                      </span>
                      <span className="text-foreground">{text}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-auto">
                <button
                  type="button"
                  onClick={() => setSelectedPlan("monthly")}
                  className={`w-full rounded-xl border p-4 flex items-center justify-between transition ${
                    selectedPlan === "monthly"
                      ? "border-primary bg-primary/5 dark:bg-primary/10"
                      : "border-border hover:border-gray-400 dark:hover:border-gray-500"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold ${
                      selectedPlan === "monthly" ? "text-primary" : "text-muted"
                    }`}
                  >
                    Select Monthly
                  </span>
                  <span
                    className={`material-icons-outlined ${
                      selectedPlan === "monthly" ? "text-primary" : "text-gray-300 dark:text-gray-600"
                    }`}
                  >
                    {selectedPlan === "monthly" ? "radio_button_checked" : "radio_button_unchecked"}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Yearly Plan (Featured) */}
          <div className="group relative order-1 z-10 -mt-4 mb-4 lg:-mt-6 lg:mb-0">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-yellow-200 to-yellow-100 blur opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200 dark:from-yellow-900/30 dark:to-yellow-800/20" />
            <div className="relative flex h-full flex-col origin-top transform rounded-2xl border-2 border-transparent bg-surface p-6 shadow-glow-gold dark:bg-surface-dark lg:scale-105 xl:p-8">
              <div className="absolute top-0 right-0 -translate-y-2 translate-x-2">
                <span className="rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-md">
                  Best Value
                </span>
              </div>
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="mb-2 font-display text-xl font-bold xl:text-2xl">Yearly Access</h3>
                  <p className="text-xs text-muted xl:text-sm">Pay once, enjoy forever</p>
                </div>
                <div className="text-right">
                  <span className="block text-2xl font-bold xl:text-3xl">$199.99</span>
                  <span className="block text-xs font-medium text-primary line-through xl:text-sm">
                    $239.88
                  </span>
                </div>
              </div>
              <hr className="mb-6 border-border" />
              <ul className="mb-8 flex-grow space-y-4 text-sm xl:text-base">
                {PLANS.yearly.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="material-icons-outlined mr-3 text-lg text-primary">check_circle</span>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <button
                  type="button"
                  onClick={() => setSelectedPlan("yearly")}
                  className="w-full rounded-xl border-2 border-primary bg-primary/5 p-4 flex items-center justify-between dark:bg-primary/10"
                >
                  <span className="text-sm font-semibold text-primary">Selected Plan</span>
                  <span className="material-icons-outlined text-primary">radio_button_checked</span>
                </button>
              </div>
            </div>
          </div>

          {/* Lifetime Plan */}
          <div className="relative order-3 flex h-full flex-col">
            <div className="relative flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition hover:shadow-md dark:bg-surface-dark xl:p-8">
              <div className="absolute top-0 right-0 -translate-y-2 translate-x-2">
                <span className="rounded-full bg-gray-800 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-md dark:bg-gray-600">
                  Elite
                </span>
              </div>
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="mb-2 font-display text-xl font-bold xl:text-2xl">Lifetime</h3>
                  <p className="text-xs text-muted xl:text-sm">One-time payment</p>
                </div>
                <div className="text-right">
                  <span className="block text-2xl font-bold xl:text-3xl">$499.00</span>
                  <span className="block text-xs text-muted xl:text-sm">once</span>
                </div>
              </div>
              <hr className="mb-6 border-border" />
              <ul className="mb-8 flex-grow space-y-4 text-sm xl:text-base">
                {PLANS.lifetime.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="material-icons-outlined mr-3 text-lg text-primary">check_circle</span>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <button
                  type="button"
                  onClick={() => setSelectedPlan("lifetime")}
                  className={`w-full rounded-xl border p-4 flex items-center justify-between transition ${
                    selectedPlan === "lifetime"
                      ? "border-primary bg-primary/5 dark:bg-primary/10"
                      : "border-border hover:border-gray-400 dark:hover:border-gray-500"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold ${
                      selectedPlan === "lifetime" ? "text-primary" : "text-muted"
                    }`}
                  >
                    Select Lifetime
                  </span>
                  <span
                    className={`material-icons-outlined ${
                      selectedPlan === "lifetime" ? "text-primary" : "text-gray-300 dark:text-gray-600"
                    }`}
                  >
                    {selectedPlan === "lifetime" ? "radio_button_checked" : "radio_button_unchecked"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method & Order Summary */}
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Payment Methods */}
          <div className="md:col-span-7 lg:col-span-8">
            <h3 className="mb-6 font-display text-2xl font-bold text-foreground">Select Payment Method</h3>
            <div className="space-y-4">
              <label
                className={`flex cursor-pointer items-center justify-between rounded-xl border-2 p-4 transition-all shadow-sm ${
                  paymentMethod === "credit_card"
                    ? "border-primary bg-primary/5 dark:bg-primary/10"
                    : "border-border bg-surface hover:bg-gray-50 dark:bg-surface-dark dark:hover:bg-gray-800"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-12 items-center justify-center rounded border border-gray-200 bg-white text-gray-600 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300">
                    <span className="material-icons-outlined text-lg">credit_card</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Credit Card</p>
                    <p className="text-xs text-muted">Visa, Mastercard, Amex</p>
                  </div>
                </div>
                <input
                  type="radio"
                  name="payment"
                  value="credit_card"
                  checked={paymentMethod === "credit_card"}
                  onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                  className="h-5 w-5 border-gray-300 text-primary focus:ring-primary"
                />
              </label>
              <label
                className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-all shadow-sm ${
                  paymentMethod === "apple_pay"
                    ? "border-primary bg-primary/5 dark:bg-primary/10"
                    : "border-border bg-surface hover:bg-gray-50 dark:bg-surface-dark dark:hover:bg-gray-800"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-12 items-center justify-center rounded bg-black text-white">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M17.388 12.87c.025-2.094 1.705-3.1 1.782-3.14-0.97-1.424-2.48-1.616-3.02-1.637-1.282-.132-2.508.762-3.158.762-.656 0-1.66-.743-2.73-.722-1.406.02-2.71.826-3.437 2.097-1.465 2.556-.376 6.315 1.047 8.396.696 1.02 1.524 2.162 2.614 2.122 1.046-.042 1.44-.68 2.707-.68 1.263 0 1.623.68 2.727.658 1.13-.023 1.846-1.028 2.536-2.048.795-1.173 1.12-2.31 1.136-2.37-.024-.01-2.182-.847-2.204-3.358m-1.57-7.854c.575-.705.962-1.678.857-2.652-.828.034-1.83.56-2.424 1.26-.532.617-.996 1.62-.87 2.63.924.073 1.868-.466 2.437-1.238" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Apple Pay</p>
                    <p className="text-xs text-muted">Fast & Secure</p>
                  </div>
                </div>
                <input
                  type="radio"
                  name="payment"
                  value="apple_pay"
                  checked={paymentMethod === "apple_pay"}
                  onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                  className="h-5 w-5 border-gray-300 text-primary focus:ring-primary bg-surface dark:bg-surface-dark"
                />
              </label>
              <label
                className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-all shadow-sm ${
                  paymentMethod === "google_pay"
                    ? "border-primary bg-primary/5 dark:bg-primary/10"
                    : "border-border bg-surface hover:bg-gray-50 dark:bg-surface-dark dark:hover:bg-gray-800"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-12 items-center justify-center rounded border border-gray-200 bg-white">
                    <svg className="h-4 w-4" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Google Pay</p>
                    <p className="text-xs text-muted">Fast & Secure</p>
                  </div>
                </div>
                <input
                  type="radio"
                  name="payment"
                  value="google_pay"
                  checked={paymentMethod === "google_pay"}
                  onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                  className="h-5 w-5 border-gray-300 text-primary focus:ring-primary bg-surface dark:bg-surface-dark"
                />
              </label>
            </div>
            <div className="mt-6 flex items-center gap-6 text-xs text-muted">
              <div className="flex items-center gap-2">
                <span className="material-icons-outlined text-sm">lock</span>
                <span>SSL Secure Payment</span>
              </div>
              <div className="h-4 border-l border-gray-300 dark:border-gray-600" />
              <div className="flex items-center gap-2">
                <span className="material-icons-outlined text-sm">verified_user</span>
                <span>Money Back Guarantee</span>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="sticky top-8 mt-8 md:col-span-5 lg:col-span-4 md:mt-0">
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm dark:bg-surface-dark">
              <h3 className="mb-6 font-display text-xl font-bold">Order Summary</h3>
              <div className="mb-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">Subtotal</span>
                  <span className="font-medium">${selectedPlanData.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Tax (0%)</span>
                  <span className="font-medium">$0.00</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-primary">
                    <span>Discount ({selectedPlanData.name})</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
              </div>
              <hr className="mb-6 border-border" />
              <div className="mb-8 flex items-end justify-between">
                <span className="text-lg font-bold">Total to pay</span>
                <span className="text-2xl font-bold">${total.toFixed(2)}</span>
              </div>
              <button
                type="button"
                onClick={handleSubscribe}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-bold text-white shadow-lg shadow-primary/30 transition transform active:scale-[0.98] hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <span className="material-icons-outlined text-xl">lock</span>
                Subscribe Now
              </button>
              <p className="mt-4 text-center text-xs leading-relaxed text-muted">
                By subscribing, you agree to our{" "}
                <Link href="/terms" className="underline hover:text-primary">
                  Terms of Service
                </Link>
                . Subscription auto-renews annually. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
}
