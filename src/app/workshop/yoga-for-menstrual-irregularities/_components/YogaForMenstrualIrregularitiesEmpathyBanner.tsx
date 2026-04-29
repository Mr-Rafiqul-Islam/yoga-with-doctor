import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YogaForMenstrualIrregularitiesEmpathyBanner() {
  return (
    <ScrollReveal className="bg-[var(--color-primary)] py-32 text-[var(--color-on-primary)]" as="section">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="material-symbols-outlined mb-8 block text-5xl">favorite</span>
        <h2 className="mi-font-display mb-8 text-3xl font-semibold md:text-4xl lg:text-5xl">
          You are not failing your body.
        </h2>
        <p className="mb-12 text-lg leading-relaxed opacity-90 md:text-xl">
          It&apos;s okay to feel frustrated. It&apos;s okay to feel like you&apos;ve tried everything. We believe in a
          sanctuary where you can reconnect with your body&apos;s wisdom without judgment. Your journey to balance
          starts with a single, gentle breath.
        </p>
        <div className="inline-flex items-center gap-4 rounded-full border border-white/20 bg-white/10 px-8 py-4">
          <span className="material-symbols-outlined">lightbulb</span>
          <span className="text-sm font-semibold md:text-base">
            There is a science-backed, gentle way forward.
          </span>
        </div>
      </div>
    </ScrollReveal>
  );
}
