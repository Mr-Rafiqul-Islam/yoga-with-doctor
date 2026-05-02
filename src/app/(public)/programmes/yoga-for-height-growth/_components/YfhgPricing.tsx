import Link from "next/link";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const LINES = [
  { icon: "video_library", label: "30 Days Guided Yoga Program", value: "$299" },
  { icon: "calendar_today", label: "Height Improvement Routine", value: "$149" },
  { icon: "accessibility", label: "Posture Correction System", value: "$99" },
  { icon: "checklist", label: "Daily Habit Plan", value: "$49" },
  { icon: "groups", label: "VIP Support Group", value: "$255" },
] as const;

export function YfhgPricing() {
  return (
    <ScrollReveal
      className="scroll-mt-28 bg-[color:var(--color-surface-container)] px-[var(--yfhg-space-md)] py-[var(--yfhg-space-xl)]"
      id="pricing"
    >
      <div className="mx-auto max-w-4xl overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-2xl">
        <div className="bg-[color:var(--color-primary-container)] p-8 text-center text-white">
          <h2 className="yfhg-headline-lg mb-2">Your Growth Package</h2>
          <p className="yfhg-label-md uppercase tracking-wide">EVERYTHING YOU NEED TO SCALE NEW HEIGHTS</p>
        </div>
        <div className="p-8 md:p-12">
          <ul className="mb-12 space-y-6">
            {LINES.map((row, i) => (
              <li
                key={row.label}
                className={`flex items-center justify-between pb-4 ${i < LINES.length - 1 ? "border-b border-slate-100" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[color:var(--color-primary)]">{row.icon}</span>
                  <span className="yfhg-body-lg">{row.label}</span>
                </div>
                <span className="yfhg-font-label font-bold text-slate-400 line-through">{row.value}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-3xl border-2 border-dashed border-[color:var(--color-primary)] bg-[color:var(--color-surface-container-low)] p-8 text-center">
            <p className="yfhg-font-label mb-2 uppercase text-[color:var(--color-on-surface-variant)]">
              Total Value: $851
            </p>
            <div className="mb-6 flex flex-col items-center justify-center">
              <span className="yfhg-font-label text-sm font-bold uppercase tracking-widest text-[color:var(--color-tertiary-container)]">
                GET IT ALL TODAY FOR ONLY
              </span>
              <div className="text-[80px] font-black leading-none text-[color:var(--color-on-background)]">$47</div>
            </div>
            <Link
              className="yfhg-display-xl mb-4 block w-full rounded-2xl bg-[color:var(--color-tertiary-container)] py-6 text-center text-2xl font-black text-white shadow-[0_6px_0_0_#8b5000] transition-all hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#8b5000]"
              href="#checkout"
            >
              CLAIM YOUR SPOT
            </Link>
            <p className="text-sm text-[color:var(--color-on-surface-variant)]">
              One-time payment. Lifetime access.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
