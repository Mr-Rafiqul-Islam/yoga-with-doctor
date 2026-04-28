import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const PHASES = [
  {
    id: "p1",
    label: "PHASE 01",
    title: "The Breath Connection",
    description:
      "Learn the 'ZenFlow Breath'—a 3-minute technique used by neuroscientists to instantly down-regulate the nervous system and halt the stress response.",
    variant: "glass",
    colSpan: "md:col-span-2",
  },
  {
    id: "p2",
    label: "PHASE 02",
    title: "Micro-Flows",
    description:
      "Gentle, seated, or standing movements that realign your spine and open your chest.",
    variant: "primary",
    colSpan: "",
  },
  {
    id: "p3",
    label: "PHASE 03",
    title: "Total Release",
    description: "The deep restorative pose that resets your body's baseline to peace.",
    variant: "secondary",
    colSpan: "",
  },
  {
    id: "p4",
    label: "PHASE 04",
    title: "Habit Integration",
    description:
      "The exact schedule to keep your new energy levels high without sacrificing your busy routine.",
    variant: "surface",
    colSpan: "md:col-span-2",
  },
] as const;

function cardClass(variant: (typeof PHASES)[number]["variant"]) {
  switch (variant) {
    case "primary":
      return "rounded-2xl bg-[var(--color-primary-container)] p-10 text-white";
    case "secondary":
      return "rounded-2xl bg-[var(--color-secondary-container)] p-10 text-[var(--color-on-secondary-container)]";
    case "surface":
      return "rounded-2xl bg-[var(--color-surface-container-highest)] p-10";
    default:
      return "glass-card flex flex-col justify-center rounded-2xl p-10";
  }
}

function labelClass(variant: (typeof PHASES)[number]["variant"]) {
  switch (variant) {
    case "primary":
      return "text-[var(--color-primary-fixed)]";
    case "secondary":
      return "text-[var(--color-secondary)]";
    case "surface":
      return "text-[var(--color-on-surface)]";
    default:
      return "text-[var(--color-primary)]";
  }
}

function descriptionClass(variant: (typeof PHASES)[number]["variant"]) {
  switch (variant) {
    case "primary":
      return "opacity-90";
    case "secondary":
      return "text-[var(--color-on-secondary-container)]";
    default:
      return "text-[var(--color-on-surface-variant)]";
  }
}

export function YogaForAllCurriculum() {
  return (
    <ScrollReveal className="bg-[var(--color-surface)] py-24" as="section">
      <div className="mx-auto max-w-[1280px] px-8">
        <h2 className="mb-16 text-center text-3xl font-semibold tracking-tight md:text-4xl">
          Workshop Roadmap
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PHASES.map((p) => (
            <div key={p.id} className={`${p.colSpan} ${cardClass(p.variant)}`}>
              <div className={`mb-2 font-bold ${labelClass(p.variant)}`}>{p.label}</div>
              <h3 className="mb-4 text-2xl font-semibold tracking-tight">{p.title}</h3>
              <p className={descriptionClass(p.variant)}>
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

