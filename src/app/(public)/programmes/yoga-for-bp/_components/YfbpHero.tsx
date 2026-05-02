import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA0ozD-1sYKn7yo_zfds7Pn-psFb5E0eMcEqnlTxPWHwwd2u0XSODivpMSn3ZRUTar6Gli1O--TjO_NQfhM8ak5nAb_BJhfa8Z5Tccr7S32EMjN1uygxNH5cQs2Vr3Vb5zhpiLSCmqfZF1gJ_PLQq-uHIV0CD5iVR_ERBanU75XGPix1HHxI3i-0gu44TGV5Zq9m2nT-gFEVtOTPfxxB7_5ZjKMIUEnB2ExY2NQ0lL58Ekde6KRcNCyfT5yGISgnUc5TTSEuwUJg3JV";

const TRUST_ITEMS = [
  { icon: "verified_user" as const, label: "Safe & Beginner Friendly" },
  { icon: "medical_services" as const, label: "Doctor Endorsed" },
];

export function YfbpHero() {
  return (
    <ScrollReveal
      as="header"
      className="relative overflow-hidden px-6 pb-16 pt-[7.5rem] md:pb-32 md:pt-48"
      delay={0}
    >
      <div
        className="absolute left-1/4 top-1/4 -z-10 size-64 rounded-full bg-[color:var(--yfbp-primary-container)]/[0.10] yfbp-breath-guider"
        aria-hidden
      />
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <div className="yfbp-text-label-caps animate-pulse inline-flex items-center gap-2 rounded-full bg-[color:var(--yfbp-error-container)] px-4 py-1.5 text-[color:var(--yfbp-on-error-container)]">
            <span className="material-symbols-outlined text-[14px]">emergency</span>
            LIMITED SEATS: 14 SPOTS REMAINING
          </div>
          <h1 className="yfbp-text-h1 leading-tight text-[color:var(--yfbp-on-background)]">
            Control High Blood Pressure{" "}
            <span className="text-[color:var(--yfbp-primary)]">Naturally</span> with Yoga
          </h1>
          <p className="yfbp-text-body-lg max-w-lg text-[color:var(--yfbp-on-surface-variant)]">
            A medically-informed approach to lowering your readings, reducing stress, and reclaiming your heart
            health in just 30 days. No advanced flexibility required.
          </p>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <a
              className="flex items-center justify-center gap-3 rounded-xl bg-[color:var(--yfbp-tertiary-container)] px-10 py-5 text-center text-lg font-bold text-[color:var(--yfbp-on-tertiary)] shadow-lg transition-colors hover:bg-orange-600"
              href="#pricing"
            >
              Join Now — Just $47
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-6 pt-4">
            {TRUST_ITEMS.map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-[color:var(--yfbp-primary)]">
                <span className="material-symbols-outlined text-base yfbp-icon-fill">{icon}</span>
                <span className="text-sm font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl bg-[color:var(--yfbp-surface-container)] p-4 shadow-xl">
            <Image
              alt="Doctor profile"
              className="h-[500px] w-full rounded-xl object-cover"
              height={500}
              src={HERO_IMG}
              width={720}
              priority
            />
            <div className="absolute -bottom-6 -left-6 flex items-center gap-4 rounded-2xl border border-teal-50 bg-white p-6 shadow-xl">
              <div className="rounded-full bg-[color:var(--yfbp-primary-container)] p-3 text-[color:var(--yfbp-on-primary)]">
                <span className="material-symbols-outlined">favorite</span>
              </div>
              <div>
                <div className="text-lg font-bold text-[color:var(--yfbp-on-surface)]">120/80 mmHg</div>
                <div className="text-sm text-slate-500">Target Range Achieved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
