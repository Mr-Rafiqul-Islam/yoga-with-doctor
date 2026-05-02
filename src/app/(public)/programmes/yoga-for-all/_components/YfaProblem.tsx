import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const PROBLEMS = [
  {
    icon: "battery_low" as const,
    title: "Constant Fatigue",
    body: "Waking up tired despite a full night's sleep? Your nervous system is likely stuck in 'fight or flight' mode.",
  },
  {
    icon: "psychology" as const,
    title: "Mental Fog",
    body: "The inability to focus or quiet your mind at night is a hallmark of unregulated stress and tension.",
  },
  {
    icon: "physical_therapy" as const,
    title: "Physical Rigidity",
    body: "Difficulty bending over or persistent shoulder tension isn't just \"age\"—it's a lack of functional movement.",
  },
];

export function YfaProblem() {
  return (
    <ScrollReveal className="bg-[color:var(--yfa-surface-container-low)] px-6 py-16">
      <div className="mx-auto mb-16 max-w-7xl text-center">
        <h2 className="yfa-text-h2 mb-4 text-[color:var(--yfa-on-surface)]">Is Modern Life Taking Its Toll?</h2>
        <p className="yfa-text-body-lg mx-auto max-w-2xl text-[color:var(--yfa-secondary)]">
          Chronic stress and physical stiffness aren&apos;t just uncomfortable—they&apos;re warnings from your body.
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        {PROBLEMS.map(({ icon, title, body }) => (
          <div
            key={title}
            className="rounded-[2rem] border border-teal-50 bg-white p-10 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="material-symbols-outlined mb-6 text-4xl text-[color:var(--yfa-primary)]">{icon}</span>
            <h3 className="yfa-text-h3 mb-4 text-[color:var(--yfa-on-surface)]">{title}</h3>
            <p className="text-[color:var(--yfa-secondary)]">{body}</p>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
