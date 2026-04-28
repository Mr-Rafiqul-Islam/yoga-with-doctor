import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YogaForAllFinalCta() {
  return (
    <ScrollReveal className="bg-[var(--color-primary-container)] py-24 text-center text-white" as="section">
      <div className="mx-auto max-w-[1280px] space-y-8 px-8">
        <h2 className="text-4xl font-bold leading-[1.15] tracking-[-0.02em] md:text-5xl">
          Ready to Feel New Again?
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed opacity-90">
          Join the thousands of people who have transformed their energy and health with ZenFlow.
          Your future self will thank you.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="#register"
            className="rounded-full bg-white px-12 py-6 text-xl font-bold text-[var(--color-primary-container)] shadow-2xl transition-transform hover:scale-105 active:scale-95"
          >
            Start Your Journey Now
          </a>
          <div className="flex items-center gap-2 text-sm opacity-80">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            100% Free - No Credit Card Required
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

