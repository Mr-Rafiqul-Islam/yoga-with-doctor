import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const BUMP_OPTIONS = [
  {
    title: "Custom Migraine Diet Plan",
    subtitle: "Reduce inflammation naturally",
    price: "৳499",
  },
  {
    title: "Recorded Session Access",
    subtitle: "Lifetime access to all videos",
    price: "৳999",
  },
];

const PAYMENT_STRIP_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDGgqch4-xXR9Ai014nIfsWh9l5c5Arb6vHLBXI-cYmt8BYEPb7tsx8upKLYyzXUgxOOMNsqTO8Fj1ikgDCxXJrzD_8jD5sptDRjFc5osTj77h_F0oyLWhyzklMnz5Yw7KsNaLjxTVvU_GX80bSUayXk5KSfpSviFg6TfgQPPjBLwYm4HHWw65Ju1UdAMQxO5caEYfoHEAgQwA8p3i78wdPmEOF3Kdv8bQR6-tXSGOOQWhkFxn18X7Gs9hnxPnxjGduU4ByOZkji7Kc";

export function YfmEnrollment() {
  return (
    <ScrollReveal
      as="section"
      id="checkout"
      className="scroll-mt-[52px] bg-[color:var(--yfm-primary)] py-24 text-[color:var(--yfm-on-primary)]"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col overflow-hidden rounded-3xl bg-white text-[color:var(--yfm-on-background)] shadow-2xl md:flex-row">
          <div className="p-12 md:w-1/2">
            <h3 className="yfm-text-h3 mb-6 text-[color:var(--yfm-on-surface)]">
              Complete Your Enrollment
            </h3>
            <div className="space-y-6">
              <div>
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-[color:var(--yfm-secondary)]"
                  htmlFor="yfm-enroll-name"
                >
                  Full Name
                </label>
                <input
                  id="yfm-enroll-name"
                  name="fullName"
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="off"
                  disabled
                  className="w-full rounded-xl border-none bg-[color:var(--yfm-surface-container)] p-4 opacity-90"
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-[color:var(--yfm-secondary)]"
                  htmlFor="yfm-enroll-phone"
                >
                  Phone Number
                </label>
                <input
                  id="yfm-enroll-phone"
                  name="phone"
                  type="tel"
                  placeholder="017XXXXXXXX"
                  autoComplete="off"
                  disabled
                  className="w-full rounded-xl border-none bg-[color:var(--yfm-surface-container)] p-4 opacity-90"
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-[color:var(--yfm-secondary)]"
                  htmlFor="yfm-enroll-email"
                >
                  Email Address
                </label>
                <input
                  id="yfm-enroll-email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  autoComplete="off"
                  disabled
                  className="w-full rounded-xl border-none bg-[color:var(--yfm-surface-container)] p-4 opacity-90"
                />
              </div>
              <div className="space-y-4 pt-4">
                <p className="text-sm font-bold text-[color:var(--yfm-on-surface)]">
                  Add Order Bumps:
                </p>
                {BUMP_OPTIONS.map((opt) => (
                  <label
                    key={opt.title}
                    className="flex cursor-default items-center gap-4 rounded-xl border border-teal-100 bg-emerald-50/50 p-4 hover:bg-emerald-50 dark:border-teal-900/40"
                  >
                    <input
                      className="size-5 rounded text-[color:var(--yfm-primary)] accent-[color:var(--yfm-primary)]"
                      type="checkbox"
                      disabled
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold">{opt.title}</p>
                      <p className="text-xs text-[color:var(--yfm-secondary)]">{opt.subtitle}</p>
                    </div>
                    <span className="font-bold text-[color:var(--yfm-primary)]">{opt.price}</span>
                  </label>
                ))}
              </div>
              <button
                type="button"
                disabled
                className="mt-8 w-full rounded-xl bg-[color:var(--yfm-tertiary)] py-5 text-lg font-bold text-white opacity-95 shadow-lg"
              >
                Start My 30-Day Journey
              </button>
              <p className="text-center text-xs text-[color:var(--yfm-secondary)]">
                This is a preview — enrollment opens soon.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center border-t border-teal-50 bg-[color:var(--yfm-surface-container-low)] p-12 text-center md:w-1/2 md:border-l md:border-teal-50 dark:border-teal-900/40">
            <div className="mb-6 rounded-full bg-white p-4 shadow-lg" aria-hidden>
              <span className="material-symbols-outlined text-5xl text-[color:var(--yfm-primary)]">
                verified_user
              </span>
            </div>
            <h4 className="mb-4 text-xl font-bold text-[color:var(--yfm-on-surface)]">
              100% Satisfaction Guarantee
            </h4>
            <p className="mb-8 max-w-sm px-4 text-sm text-[color:var(--yfm-secondary)]">
              Try the first 7 days of the program. If you&apos;re not absolutely happy with the
              results, we&apos;ll refund every cent. No hurdles, no questions.
            </p>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[color:var(--yfm-primary)]">
                <span className="material-symbols-outlined text-base" aria-hidden>
                  lock
                </span>
                Secure 256-bit Encrypted Payment
              </div>
              <Image
                src={PAYMENT_STRIP_IMG}
                alt="Payment methods"
                width={400}
                height={32}
                className="mt-4 h-8 opacity-50 grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
