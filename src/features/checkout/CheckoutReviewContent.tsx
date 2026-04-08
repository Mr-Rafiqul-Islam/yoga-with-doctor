"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";

import {
  CheckoutReviewNav,
  OrderSummarySection,
  OrderTotalCard,
  PaymentMethodBadges,
  PaymentProviderSelect,
  PromoCodeInput,
} from "@/features/checkout/components";
import {
  CHECKOUT_REVIEW,
  DEFAULT_ORDER_ITEM,
} from "@/features/checkout/data/checkoutReviewData";
import { useGetCourseBySlugQuery } from "@/slices/courses";
import {
  useStartCheckoutMutation,
  useInitializePaymentMutation,
  useStartPaymentAttemptMutation,
  setPaymentContext,
  StartPaymentAttemptResponse,
  type PaymentProvider,
} from "@/slices/payment";

export function CheckoutReviewContent() {
  const searchParams = useSearchParams();
  const courseSlug = searchParams.get("courseSlug") || "";
  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(
    CHECKOUT_REVIEW.defaultDiscount
  );
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [paymentProvider, setPaymentProvider] = useState<PaymentProvider>("SSL");

  const dispatch = useDispatch();
  const { data: courseResponse } = useGetCourseBySlugQuery(courseSlug, {
    skip: !courseSlug,
  });
  const [startCheckout, { isLoading: isStartingCheckout }] =
    useStartCheckoutMutation();
  const [initializePayment, { isLoading: isInitializingPayment }] =
    useInitializePaymentMutation();
  const [startPaymentAttempt, { isLoading: isStartingAttempt }] =
    useStartPaymentAttemptMutation();

  const isProceeding =
    isStartingCheckout || isInitializingPayment || isStartingAttempt;

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
  const tax = Math.round(subtotal * 0 * 100) / 100;

  const handleApplyPromo = () => {
    setDiscountApplied(0);
  };
  const totalWithDiscount = subtotal + tax - discountApplied;

  const course = courseResponse?.data?.course;

  const handleProceedToPayment = async () => {
    if (!productId) return;
    setPaymentError(null);
    try {
      const origin =
        typeof window !== "undefined" && window.location.origin
          ? window.location.origin
          : "";

      const globalCheckout = await startCheckout({
        productId,
        siteRef: "YWD",
        meta: {
          platform: "WEB",
          clientType: "BROWSER",
          appId: "ywd-web",
          returnMode: "REDIRECT",
          deepLink: null,
          successUrl: `${origin}/checkout/success`,
          failUrl: `${origin}/checkout/failed`,
          cancelUrl: `${origin}/checkout/review`,
        },
      }).unwrap();

      const newPurchaseId = globalCheckout.data.purchaseId;
      if (!newPurchaseId) {
        setPaymentError("Invalid response from checkout. Please try again.");
        return;
      }

      const amountForInit =
        typeof course?.productData?.price === "number"
          ? totalWithDiscount
          : 0;
      const initPayment = await initializePayment({
        amount: amountForInit,
        currency: course?.productData?.currency || "BDT",
        metaData: { purchaseId: newPurchaseId },
        provider: paymentProvider,
        projectKey: "YWD",
        siteRef: "YWD",
      }).unwrap();

      const initData = initPayment?.data as
        | {
            transactionId?: string;
            id?: string;
            redirectUrl?: string;
            paymentUrl?: string;
          }
        | undefined;
      const transactionId = initData?.transactionId ?? initData?.id ?? null;

      if (newPurchaseId || transactionId) {
        dispatch(
          setPaymentContext({
            purchaseId: newPurchaseId,
            transactionId: transactionId ?? undefined,
          })
        );
      }
      let startAttemptData: StartPaymentAttemptResponse | undefined;
      if (transactionId) {
        const amountForAttempt =
          typeof course?.productData?.price === "number"
            ? totalWithDiscount
            : 0;
        try {
          startAttemptData = await startPaymentAttempt({
            transactionId,
            amount: amountForAttempt,
            currency: course?.productData?.currency || "BDT",
            metaData: { purchaseId: newPurchaseId },
            provider: paymentProvider,
            siteRef: "YWD",
          }).unwrap();
        } catch {
          // Non-blocking; backend may still have attempt record
        }
      }
      const redirectUrl =
        startAttemptData?.data?.data?.checkoutUrl ??
        startAttemptData?.data?.data?.gatewayUrl ??
        null;

      if (redirectUrl) {
        window.location.href = redirectUrl;
        return;
      }
      setPaymentError("Payment gateway URL not received. Please try again.");
    } catch (error: unknown) {
      const message =
        (error as { data?: { message?: string } })?.data?.message ||
        "Failed to initialize payment. Please try again.!";
      setPaymentError(message);
    }
  };


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
              </div>
            )}
            <PaymentProviderSelect
              value={paymentProvider}
              onChange={setPaymentProvider}
              disabled={isProceeding}
            />
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
