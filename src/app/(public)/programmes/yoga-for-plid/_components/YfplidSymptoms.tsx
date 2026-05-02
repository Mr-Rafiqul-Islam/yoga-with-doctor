import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const SYMPTOMS = [
  { icon: "personal_injury" as const, title: "Lower Back Pain" },
  { icon: "bolt" as const, title: "Nerve Pain" },
  { icon: "moped" as const, title: "Leg Numbness" },
  { icon: "directions_walk" as const, title: "Limited Mobility" },
];

export function YfplidSymptoms() {
  return (
    <ScrollReveal className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="yfplid-text-h2 text-[color:var(--yfplid-primary)]">
            Are You Living With These Symptoms?
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {SYMPTOMS.map(({ icon, title }) => (
            <div
              key={title}
              className="space-y-4 rounded-2xl bg-white p-8 text-center yfplid-shadow-soft"
            >
              <span className="material-symbols-outlined text-4xl text-[color:var(--yfplid-primary)]" aria-hidden>
                {icon}
              </span>
              <h3 className="yfplid-text-h3">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
