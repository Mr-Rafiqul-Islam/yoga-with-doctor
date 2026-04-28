import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const BENEFITS = [
  {
    id: "sleep",
    icon: "bed",
    title: "Better Sleep",
    body: "Learn restorative postures that prime your brain for deep, healing sleep cycles.",
  },
  {
    id: "stress",
    icon: "spa",
    title: "Stress Control",
    body: "Master breathing techniques that shut down the 'fight or flight' migraine trigger.",
  },
  {
    id: "pain",
    icon: "health_and_safety",
    title: "Pain Reduction",
    body: "Reduce attack intensity and frequency through neurological desensitization.",
  },
] as const;

export function YogaForMigraineBenefits() {
  return (
    <ScrollReveal className="bg-white py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {BENEFITS.map((b) => (
            <div
              key={b.id}
              className="rounded-2xl border border-primary/10 bg-surface-container-low p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                <span className="material-symbols-outlined">{b.icon}</span>
              </div>
              <h3 className="mb-3 text-2xl font-semibold leading-snug">{b.title}</h3>
              <p className="text-base leading-relaxed text-secondary">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

