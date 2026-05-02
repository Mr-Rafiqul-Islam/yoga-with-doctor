import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const CARDS = [
  {
    title: "The Vagus Nerve Connection",
    body:
      "Thyroid function is deeply tied to the Parasympathetic Nervous System. Through specific pranayama (breath) and inverted asanas, we stimulate the vagus nerve and improve blood flow to the thyroid gland, facilitating optimal hormone signaling.",
  },
  {
    title: "Cortisol & T3 Conversion",
    body:
      "Chronic stress spikes cortisol, which inhibits the conversion of T4 to active T3. Our yoga sequences are designed to lower systemic inflammation and cortisol, allowing your body's natural thyroid chemistry to thrive.",
  },
] as const;

export function YftScience() {
  return (
    <ScrollReveal
      className="bg-[color:var(--color-primary-container)] px-8 py-24 text-white"
      delay={0.12}
      id="science"
    >
      <div className="mx-auto max-w-5xl space-y-12 text-center">
        <h2 className="yft-text-h2 text-white">The Science of Somatic Endocrine Support</h2>
        <div className="grid gap-12 text-left md:grid-cols-2">
          {CARDS.map((card) => (
            <div key={card.title} className="yft-glass-card yft-glass-card--on-dark rounded-2xl p-8">
              <h3 className="yft-text-h3 mb-4 text-[color:var(--color-secondary-fixed)]">{card.title}</h3>
              <p className="yft-text-body-md text-white/80">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
