"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

/**
 * Payment success page content. Accepts transactionId and courseId from URL query params.
 * Protected route (via checkout layout).
 */
export function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get("transactionId") || "TRX-000000";
  const courseId = searchParams.get("courseId") || "";

  // In a real app, fetch course details by courseId
  // const [courseData, setCourseData] = useState({
  //   title: "Hormonal Balance & Yoga",
  //   instructor: "Dr. Sarah Jenkins",
  //   modules: 8,
  //   price: 49.0,
  // });
  const courseData = {
    title: "Hormonal Balance & Yoga",
    instructor: "Dr. Sarah Jenkins",
    modules: 8,
    price: 49.0,
  }

  useEffect(() => {
    // TODO: Fetch course details by courseId from API
    // For now, using placeholder data
  }, [courseId]);

  const purchaseDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background transition-colors duration-300">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 bg-pattern opacity-[0.03]" />

      {/* Blur orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-blue-400/5 blur-3xl" />

      
      {/* Main */}
      <main className="relative z-10 flex flex-1 items-center justify-center p-6">
        <div className="flex w-full max-w-2xl flex-col items-center">
          {/* Success icon */}
          <div className="group relative mb-8">
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl transition-transform duration-700 group-hover:scale-110" />
            <div className="relative mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-primary/10 ring-8 ring-primary/5 shadow-glow">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-lg animate-bounce-slight">
                <span className="material-icons-outlined text-5xl font-bold text-white">check</span>
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="mb-10 space-y-4 text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground dark:text-white md:text-5xl">
              Payment Successful!
            </h1>
            <p className="mx-auto max-w-md text-lg leading-relaxed text-muted">
              You now have lifetime access to{" "}
              <br className="hidden sm:block" />
              <span className="font-semibold text-primary">{courseData.title}</span>.
            </p>
          </div>

          {/* Receipt card */}
          <div className="mb-10 w-full rounded-xl border border-gray-100 bg-surface p-8 shadow-soft transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-surface-dark">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 dark:border-gray-700">
                <span className="text-sm font-medium text-muted">Transaction ID</span>
                <span className="rounded bg-gray-50 px-3 py-1 font-mono text-sm tracking-wide text-foreground dark:bg-gray-800 dark:text-white">
                  {transactionId}
                </span>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <span className="pt-1 text-sm font-medium text-muted">Course</span>
                <div className="text-right">
                  <h3 className="font-display text-lg font-semibold text-foreground dark:text-white">
                    {courseData.title}
                  </h3>
                  <p className="text-sm text-muted">
                    {courseData.instructor} • {courseData.modules} Modules
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted">Date</span>
                <span className="font-medium text-foreground">{purchaseDate}</span>
              </div>
              <div className="mt-2 flex items-end justify-between border-t border-dashed border-gray-200 pt-4 dark:border-gray-700">
                <span className="pb-1 text-base font-medium text-muted">Total Paid</span>
                <span className="font-display text-3xl font-bold text-primary">
                  ${courseData.price.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex w-full flex-col items-center gap-4 sm:w-auto">
            <Link
              href={`/courses/${courseId || "hormonal-balance-yoga"}`}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:bg-primary-dark hover:shadow-primary/30 active:scale-95 sm:w-80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Start Learning Now
              <span className="material-icons-outlined transition-transform group-hover:translate-x-1">
                play_circle
              </span>
            </Link>
            <Link
              href="/dashboard"
              className="mt-2 flex items-center gap-1 text-sm text-muted transition-colors hover:text-primary dark:hover:text-primary"
            >
              <span className="material-icons-outlined text-sm">arrow_back</span>
              Back to Dashboard
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-muted opacity-50">
        <p>© {new Date().getFullYear()} Yoga With Doctor. All rights reserved.</p>
      </footer>
    </div>
  );
}
