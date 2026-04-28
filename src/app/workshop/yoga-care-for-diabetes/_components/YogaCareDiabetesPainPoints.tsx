import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const PAIN_POINTS = [
  {
    id: "spikes",
    icon: "trending_up",
    iconWrapClass: "bg-[rgb(255_218_214)] text-[rgb(186_26_26)]",
    title: "Unpredictable Sugar Spikes",
    body: "You try to be careful, yet readings still jump—leaving you anxious and frustrated.",
  },
  {
    id: "fatigue",
    icon: "battery_very_low",
    iconWrapClass: "bg-[rgb(255_218_214)] text-[rgb(186_26_26)]",
    title: "Persistent Fatigue",
    body: "Low energy, brain fog, and that mid‑day crash that makes everything harder.",
  },
  {
    id: "dependency",
    icon: "pill",
    iconWrapClass: "bg-[rgb(255_218_214)] text-[rgb(186_26_26)]",
    title: "Medication Dependency",
    body: "More pills, more side effects—yet you still don’t feel truly in control.",
  },
] as const;

export function YogaCareDiabetesPainPoints() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container-low)] py-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PAIN_POINTS.map((p) => (
            <div key={p.id} className="flex items-start gap-4 rounded-xl bg-white p-6">
              <div className={`rounded-lg p-3 ${p.iconWrapClass}`}>
                <span className="material-symbols-outlined">{p.icon}</span>
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-[var(--color-on-surface)]">
                  {p.title}
                </h3>
                <p className="text-sm text-[var(--color-secondary)]">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

