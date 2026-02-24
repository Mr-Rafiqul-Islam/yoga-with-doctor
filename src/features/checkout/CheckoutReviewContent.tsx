"use client";

import { useState } from "react";

import {
  CheckoutReviewNav,
  OrderSummarySection,
  OrderTotalCard,
  PaymentMethodBadges,
  PromoCodeInput,
} from "@/features/checkout/components";
import {
  CHECKOUT_REVIEW,
  DEFAULT_ORDER_ITEM,
  TAX,
} from "@/features/checkout/data/checkoutReviewData";

export function CheckoutReviewContent() {
  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(
    CHECKOUT_REVIEW.defaultDiscount
  );

  const handleApplyPromo = () => {
    setDiscountApplied(0);
  };

  const totalWithDiscount =
    CHECKOUT_REVIEW.subtotal + TAX - discountApplied;

  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
      <CheckoutReviewNav />

      <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            <OrderSummarySection items={[DEFAULT_ORDER_ITEM]} />
            <PromoCodeInput
              value={promoCode}
              onChange={setPromoCode}
              onApply={handleApplyPromo}
            />
          </div>

          <div className="space-y-6 lg:col-span-5 lg:sticky lg:top-8">
            <OrderTotalCard
              subtotal={CHECKOUT_REVIEW.subtotal}
              tax={TAX}
              discount={discountApplied}
              total={totalWithDiscount}
            />
            <PaymentMethodBadges />
          </div>
        </div>
      </main>
    </div>
  );
}
