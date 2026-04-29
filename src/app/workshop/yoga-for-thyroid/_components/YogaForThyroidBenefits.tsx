import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const benefits = [
  { icon: "bolt", title: "Natural Energy", body: "Wake up feeling refreshed without needing three cups of coffee." },
  { icon: "balance", title: "Hormone Balance", body: "Support your T3 and T4 levels through targeted stimulation." },
  { icon: "psychology", title: "Stress Reduction", body: "Switch your body from fight-or-flight to deep recovery." },
  { icon: "eco", title: "Clean Lifestyle", body: "Simple habits that feel sustainable and realistic." },
];

export function YogaForThyroidBenefits() {
  return (
    <ScrollReveal id="benefits" className="bg-[var(--color-surface)] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold">What You&apos;ll Gain</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {benefits.map((item) => (
            <article key={item.title} className="rounded-2xl border-t-4 border-[var(--color-secondary-fixed)] bg-white p-6 shadow-[0_4px_24px_rgba(156,39,176,0.06)]">
              <span className="material-symbols-outlined mb-3 text-4xl text-[var(--color-secondary)]">{item.icon}</span>
              <h3 className="mb-1 text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-[var(--color-on-surface-variant)]">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
