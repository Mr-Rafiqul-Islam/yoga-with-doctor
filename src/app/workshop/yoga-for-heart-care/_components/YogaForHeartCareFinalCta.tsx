import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YogaForHeartCareFinalCta() {
  return (
    <ScrollReveal className="bg-[var(--color-primary)] px-6 py-20 text-center text-white" as="section">
      <div className="mx-auto max-w-4xl space-y-8">
        <h2 className="text-[40px] font-bold leading-[1.2] tracking-[-0.02em]">Your Heart Deserves This Care</h2>
        <p className="mx-auto max-w-2xl text-lg leading-[1.6] opacity-90">
          Don&apos;t wait for another warning sign. Start your journey toward a calmer, stronger heart today.
        </p>
        <a
          className="inline-block rounded-full bg-white px-12 py-5 text-xl font-semibold leading-[1.4] text-[var(--color-primary)] shadow-xl transition-all hover:scale-105"
          href="#register"
        >
          Reserve My Spot
        </a>
      </div>
    </ScrollReveal>
  );
}
