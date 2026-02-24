"use client";

import { useRouter } from "next/navigation";

export function CheckoutReviewNav() {
  const router = useRouter();

  return (
    <nav className="flex w-full max-w-7xl items-center justify-between px-6 py-6 mx-auto">
      <button
        type="button"
        onClick={() => router.back()}
        className="rounded-full p-2 text-muted transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
        aria-label="Go back"
      >
        <span className="material-icons-outlined" aria-hidden>
          arrow_back
        </span>
      </button>
      <h1 className="font-display text-2xl font-bold text-foreground">
        Checkout
      </h1>
      <div className="w-10" aria-hidden />
    </nav>
  );
}
