"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SUBTOTAL = 49.0;
const TAX_RATE = 0.08;
const TAX = Math.round(SUBTOTAL * TAX_RATE * 100) / 100;
const DISCOUNT = 0;

export function CheckoutReviewContent() {
  const router = useRouter();
  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(DISCOUNT);

  const handleApplyPromo = () => {
    // Placeholder: could validate and apply discount
    setDiscountApplied(0);
  };

  const totalWithDiscount = SUBTOTAL + TAX - discountApplied;

  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
      {/* Nav */}
      <nav className="flex w-full max-w-7xl items-center justify-between px-6 py-6 mx-auto">
        <button
          type="button"
          onClick={() => router.back()}
          className="rounded-full p-2 text-muted transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="Go back"
        >
          <span className="material-icons-outlined">arrow_back</span>
        </button>
        <h1 className="font-display text-2xl font-bold text-foreground">Checkout</h1>
        <div className="w-10" aria-hidden />
      </nav>

      <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left: Order Summary */}
          <div className="space-y-8 lg:col-span-7">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
              Order Summary
            </h2>
            <div className="flex flex-col gap-6 rounded-lg bg-surface p-6 shadow-soft transition-colors dark:bg-surface-dark sm:flex-row">
              <div className="relative h-32 w-full flex-shrink-0 overflow-hidden rounded-2xl bg-[#8AB5A8] sm:w-32">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/20 to-transparent" />
                <span className="material-icons-outlined absolute inset-0 flex items-center justify-center text-5xl text-white opacity-90 drop-shadow-sm">
                  spa
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <span className="mb-2 inline-block rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary dark:bg-green-900/30">
                    Course
                  </span>
                  <h3 className="font-display text-2xl font-semibold leading-tight text-foreground mb-1 dark:text-white">
                    Restorative Yoga for Anxiety Relief
                  </h3>
                  <p className="text-sm text-muted mb-3">Dr. Sarah Jenkins • 8 Modules</p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">$49.00</span>
                  <button
                    type="button"
                    className="text-sm text-muted underline decoration-gray-300 underline-offset-4 transition-colors hover:text-red-500 dark:hover:text-red-400"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-base font-medium text-foreground">Promo Code</h3>
              <div className="relative flex items-center">
                <span className="material-icons-outlined absolute left-4 text-xl text-muted">
                  local_offer
                </span>
                <input
                  type="text"
                  placeholder="Enter code here"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full rounded-2xl border-0 bg-white py-4 pl-12 pr-28 text-foreground shadow-sm placeholder-gray-400 transition-all focus:ring-2 focus:ring-primary dark:bg-surface-dark dark:text-white"
                />
                <button
                  type="button"
                  onClick={handleApplyPromo}
                  className="absolute right-2 rounded-xl bg-[#0F172A] px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-primary"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Right: Order Total */}
          <div className="space-y-6 lg:col-span-5 lg:sticky lg:top-8">
            <div className="rounded-lg bg-surface p-8 shadow-soft transition-colors dark:bg-surface-dark">
              <div className="mb-8 space-y-4">
                <div className="flex items-center justify-between text-muted">
                  <span>Subtotal</span>
                  <span className="font-medium text-foreground">${SUBTOTAL.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-muted">
                  <span>Tax (8%)</span>
                  <span className="font-medium text-foreground">${TAX.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-primary">
                  <span>Discount</span>
                  <span className="font-medium">- ${discountApplied.toFixed(2)}</span>
                </div>
              </div>
              <div className="mb-8 border-t border-gray-100 pt-6 dark:border-gray-700">
                <div className="flex items-end justify-between">
                  <span className="font-display text-xl font-bold text-foreground">Total</span>
                  <span className="font-display text-4xl font-bold text-foreground">
                    ${totalWithDiscount.toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="mb-6 flex items-center justify-center gap-2 text-xs text-muted">
                <span className="material-icons-outlined text-sm">lock</span>
                <span>Payments are secure and encrypted</span>
              </div>
              <Link
                href="/checkout/payment"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-lg font-medium text-white shadow-lg transition-all hover:shadow-xl hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Proceed to Payment
                <span className="material-icons-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="flex justify-center gap-4 opacity-50 grayscale transition-all duration-500 hover:grayscale-0">
              <div className="flex h-8 w-12 items-center justify-center rounded bg-gray-200 text-[10px] font-bold text-gray-500 dark:bg-gray-700">
                VISA
              </div>
              <div className="flex h-8 w-12 items-center justify-center rounded bg-gray-200 text-[10px] font-bold text-gray-500 dark:bg-gray-700">
                MC
              </div>
              <div className="flex h-8 w-12 items-center justify-center rounded bg-gray-200 text-[10px] font-bold text-gray-500 dark:bg-gray-700">
                AMEX
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto py-8 text-center text-sm text-muted">
        <p>© {new Date().getFullYear()} Yoga With Doctor. All rights reserved.</p>
      </footer>
    </div>
  );
}
