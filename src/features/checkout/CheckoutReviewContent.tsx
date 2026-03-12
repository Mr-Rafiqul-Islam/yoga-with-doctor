"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

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
} from "@/features/checkout/data/checkoutReviewData";
import {
  useGetCourseBySlugQuery,
  useCreateCheckoutMutation,
  useInitSslPaymentMutation,
} from "@/slices/courses";

export function CheckoutReviewContent() {
  const searchParams = useSearchParams();
  const courseSlug = searchParams.get("courseSlug") || "";
  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(
    CHECKOUT_REVIEW.defaultDiscount
  );

  const { data: courseResponse } = useGetCourseBySlugQuery(courseSlug, {
    skip: !courseSlug,
  });
  const [createCheckout, { isLoading: isCreatingCheckout }] =
    useCreateCheckoutMutation();
  const [initSslPayment, { isLoading: isInitializingPayment }] =
    useInitSslPaymentMutation();

  const isProceeding =
    isCreatingCheckout || isInitializingPayment;

  const orderItem = useMemo(() => {
    const course = courseResponse?.data?.course;
    if (!course) return DEFAULT_ORDER_ITEM;

    const sectionCount = course.sections?.length ?? course._count?.sections ?? 0;
    const subtitle = `${course.instructorName ?? "Yoga with Doctor"}${sectionCount > 0 ? ` • ${sectionCount} Modules` : ""}`;

    const rawPrice = course.productData?.price;
    const price =
      typeof rawPrice === "number"
        ? rawPrice
        : course.access === "FREE" || course.access === "PUBLIC"
          ? 0
          : CHECKOUT_REVIEW.subtotal;

    // Add bannerUrl and productData to the orderItem object.
    const currency = course.productData?.currency ?? "BDT";

    return {
      badge: "Course",
      title: course.title,
      subtitle,
      price,
      currency,
      bannerUrl: course.bannerUrl ?? course.bannerImage ?? null,
    };
  }, [courseResponse]);

  const productId = courseResponse?.data?.course?.productData?.id ?? null;
  const currency = courseResponse?.data?.course?.productData?.currency ?? "BDT";

  const subtotal = orderItem.price;
  const tax = Math.round(subtotal * CHECKOUT_REVIEW.taxRate * 100) / 100;

  const handleApplyPromo = () => {
    setDiscountApplied(0);
  };

  const handleProceedToPayment = async () => {
    if (!productId) return;
    try {
      const checkoutResult = await createCheckout({ productId }).unwrap();
      const purchaseId = checkoutResult?.data?.purchaseId;
      if (!purchaseId) return;
      const paymentResult = await initSslPayment({ purchaseId }).unwrap();
      const gatewayUrl = paymentResult?.data?.gatewayUrl;
      if (gatewayUrl) {
        window.location.href = gatewayUrl;
      }
    } catch {
      // Error handled by RTK Query / could show toast
    }
  };

  const totalWithDiscount = subtotal + tax - discountApplied;

  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
      <CheckoutReviewNav />

      <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            <OrderSummarySection items={[orderItem]} />
            <PromoCodeInput
              value={promoCode}
              onChange={setPromoCode}
              onApply={handleApplyPromo}
            />
          </div>

          <div className="space-y-6 lg:col-span-5 lg:sticky lg:top-8">
            <OrderTotalCard
              subtotal={subtotal}
              tax={tax}
              discount={discountApplied}
              total={totalWithDiscount}
              currency={currency}
              productId={productId}
              onProceedToPayment={handleProceedToPayment}
              isProceeding={isProceeding}
            />
            <PaymentMethodBadges />
          </div>
        </div>
      </main>
    </div>
  );
}
