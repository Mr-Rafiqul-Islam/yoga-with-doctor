import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const BENEFITS = [
  {
    id: "energy",
    icon: "bolt",
    iconWrapClass: "bg-[rgb(var(--color-primary-rgb)/0.1)] text-[var(--color-primary)]",
    title: "High Energy",
    body: "Wake up feeling vibrant and ready to take on the day with sustained energy.",
  },
  {
    id: "heart",
    icon: "pulse_alert",
    iconWrapClass: "bg-[rgb(148_74_0/0.1)] text-[var(--color-secondary)]",
    title: "Healthy Heart",
    body: "Improve cardiovascular health through controlled, rhythmic movement.",
  },
  {
    id: "stress",
    icon: "psychology",
    iconWrapClass: "bg-blue-100 text-blue-600",
    title: "Stress Relief",
    body: "Lower your cortisol levels and find peace in a chaotic world.",
  },
  {
    id: "confidence",
    icon: "self_care",
    iconWrapClass: "bg-green-100 text-green-600",
    title: "Confidence",
    body: "Feel comfortable and strong in your own skin again.",
  },
] as const;

export function YogaForWeightLossBenefits() {
  return (
    <ScrollReveal className="py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <h2 className="mb-14 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Why This Workshop is Different
        </h2>
        <div className="grid gap-6 md:grid-cols-4">
          {BENEFITS.map((b) => (
            <div
              key={b.id}
              className="premium-shadow rounded-2xl border border-gray-100 bg-white p-6"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${b.iconWrapClass}`}
              >
                <span className="material-symbols-outlined">{b.icon}</span>
              </div>
              <h3 className="mb-2 text-[18px] font-semibold text-[var(--color-on-background)]">
                {b.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-on-surface-variant)]">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

