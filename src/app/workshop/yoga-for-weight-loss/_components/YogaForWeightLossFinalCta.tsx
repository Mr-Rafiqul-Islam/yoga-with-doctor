import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YogaForWeightLossFinalCta() {
  return (
    <ScrollReveal className="relative overflow-hidden bg-[var(--color-primary)] py-20 text-center text-white">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full border-[40px] border-white" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full border-[40px] border-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-12">
        <h2 className="mb-6 text-4xl font-black leading-[1.1] tracking-[-0.02em] md:text-5xl lg:text-6xl">
          Stop Waiting for a &quot;Better Time&quot;
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed opacity-90">
          Your body deserves to feel vibrant, light, and strong. Join the next 1,000+ women
          transforming their metabolism this weekend.
        </p>

        <div className="inline-block">
          <div className="relative inline-block">
            <a
              href="#register"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--color-secondary-container)] px-12 py-6 text-base font-bold text-[var(--color-on-secondary-fixed)] shadow-2xl transition-transform hover:scale-105 active:scale-[0.98]"
            >
              Register My Free Spot Now
            </a>
            <div className="absolute -right-12 -top-12 rotate-12 rounded-full bg-white p-3 text-center text-xs font-bold text-[var(--color-primary)] shadow-lg">
              Hurry! Spots <br /> Filling Fast
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

