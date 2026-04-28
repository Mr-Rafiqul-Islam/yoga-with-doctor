import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const BENEFITS = [
  {
    id: "control",
    title: "Steadier Readings",
    body: "Learn a routine that supports stable energy and fewer sugar swings through stress-aware movement.",
  },
  {
    id: "energy",
    title: "More Daily Energy",
    body: "Reduce the crash cycle by improving breathing efficiency, sleep quality, and recovery.",
  },
  {
    id: "confidence",
    title: "More Confidence",
    body: "A clear roadmap you can discuss with your doctor—so you feel in control, not confused.",
  },
] as const;

export function YogaCareDiabetesBenefits() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container)] py-24">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Life After The Workshop
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {BENEFITS.map((b) => (
            <div
              key={b.id}
              className="card-shadow group relative overflow-hidden rounded-2xl bg-white p-10"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[rgb(var(--color-primary-rgb)/0.05)] transition-transform duration-300 group-hover:scale-110" />
              <h3 className="mb-4 text-xl font-semibold text-[var(--color-primary)]">
                {b.title}
              </h3>
              <p className="leading-relaxed text-[var(--color-secondary)]">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

