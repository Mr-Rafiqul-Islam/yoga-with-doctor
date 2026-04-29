import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const myths = [
  {
    myth: `Myth: "I'll have to take medicine forever and nothing else matters."`,
    fact: "While medicine is crucial, yoga and lifestyle can significantly improve symptom management.",
  },
  {
    myth: `Myth: "I'm too tired to exercise."`,
    fact: "This workshop focuses on restorative flows that build energy instead of draining it.",
  },
];

export function YogaForThyroidMythBuster() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container-low)] px-6 py-20">
      <div className="glass-card mx-auto max-w-4xl rounded-3xl p-10">
        <h2 className="mb-10 text-center text-4xl font-bold">Breaking The Myths</h2>
        <div className="space-y-5">
          {myths.map((item) => (
            <article key={item.myth} className="rounded-xl border-l-4 border-[var(--color-error)] bg-white/50 p-5">
              <p className="mb-1 font-bold text-[var(--color-error)]">{item.myth}</p>
              <p className="text-[var(--color-on-surface-variant)]">
                <strong>Fact:</strong> {item.fact}
              </p>
            </article>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
