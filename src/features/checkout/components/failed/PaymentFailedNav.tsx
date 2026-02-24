"use client";

import { useRouter } from "next/navigation";

export function PaymentFailedNav() {
  const router = useRouter();

  return (
    <nav className="z-10 flex w-full max-w-7xl items-center justify-between px-6 py-6 mx-auto">
      <button
        type="button"
        onClick={() => router.back()}
        className="rounded-full p-2 text-foreground transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Go back"
      >
        <span className="material-icons-outlined text-xl">arrow_back</span>
      </button>
      <div className="w-10" aria-hidden />
    </nav>
  );
}

