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
  const [paymentError, setPaymentError] = useState<string | null>(null);

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
    setPaymentError(null);
    try {
      // Step 1: Create checkout (same as mobile app)
      const checkoutResult = await createCheckout({ productId }).unwrap();
      const purchaseIdFromCheckout = checkoutResult?.data?.purchaseId;
      if (!purchaseIdFromCheckout) {
        setPaymentError("Invalid response from checkout. Please try again.");
        return;
      }
      // Step 2: Init SSL payment and redirect to gateway (same as mobile app)
      const paymentResult = await initSslPayment({
        purchaseId: purchaseIdFromCheckout,
      }).unwrap();
      const gatewayUrlFromResponse = paymentResult?.data?.gatewayUrl;
      if (gatewayUrlFromResponse) {
        window.location.href = gatewayUrlFromResponse;
        return;
      }
      setPaymentError("Payment gateway URL not received. Please try again.");
    } catch (error: unknown) {
      const message =
        (error as { data?: { message?: string } })?.data?.message ||
        "Failed to initialize payment. Please try again.";
      setPaymentError(message);
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
            {paymentError && (
              <div
                className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-800 dark:bg-red-950/30 dark:text-red-200"
                role="alert"
              >
                <p className="font-medium">Payment error</p>
                <p className="mt-1">{paymentError}</p>
                <p className="mt-2 text-xs opacity-90">
                  Ensure .env has NEXT_PUBLIC_API_BASE_URL pointing to your backend, not the Next.js app.
                </p>
              </div>
            )}
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
