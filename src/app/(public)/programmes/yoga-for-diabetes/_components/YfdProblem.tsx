import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const CARDS = [
  {
    icon: "heart_broken",
    title: "Health Fears",
    body: "The lurking fear of heart complications, kidney issues, or vision loss that keeps you up at night.",
    iconClass: "yfd-icon-fill text-[color:var(--yfd-error)]",
  },
  {
    icon: "energy_savings_leaf",
    title: "Chronic Fatigue",
    body: "Crashing after meals and feeling like you're running on empty, no matter how much you rest.",
    iconClass: "yfd-icon-fill text-[color:var(--yfd-error)]",
  },
  {
    icon: "restaurant_menu",
    title: "Dietary Prison",
    body: "Feeling like every meal is a calculated risk instead of a joy to be shared with family.",
    iconClass: "yfd-icon-fill text-[color:var(--yfd-error)]",
  },
] as const;

export function YfdProblem() {
  return (
    <ScrollReveal className="px-5 py-12 md:py-16 bg-[color:var(--yfd-surface-container-low)]" delay={0.05}>
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <h2 className="yfd-text-headline-lg mb-4 text-[color:var(--yfd-primary)]">The Silent Struggle Stops Today</h2>
        <p className="yfd-text-body-lg text-[color:var(--yfd-on-surface-variant)]">
          Living with diabetes is more than just checking numbers. It&apos;s the constant weight of worry.
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        {CARDS.map((c) => (
          <div
            key={c.title}
            className="yfd-shadow-soft rounded-2xl border border-slate-100 bg-white p-8"
          >
            <span className={`material-symbols-outlined mb-4 block text-4xl ${c.iconClass}`}>{c.icon}</span>
            <h3 className="yfd-text-headline-md mb-3 text-[color:var(--yfd-on-surface)]">{c.title}</h3>
            <p className="text-[color:var(--yfd-on-surface-variant)]">{c.body}</p>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
