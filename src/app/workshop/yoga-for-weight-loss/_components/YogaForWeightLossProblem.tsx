import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const PROBLEMS = [
  {
    id: "belly",
    icon: "emergency_home",
    iconClass: "text-red-500",
    title: "Stubborn Belly Fat",
    body: "The hardest area to target that won't budge even with strict calorie counting.",
  },
  {
    id: "energy",
    icon: "battery_alert",
    iconClass: "text-orange-500",
    title: "Constant Low Energy",
    body: "Feeling drained by 3 PM and lacking the motivation to hit the gym.",
  },
  {
    id: "diets",
    icon: "cancel",
    iconClass: "text-[var(--color-primary)]",
    title: "Failed Fad Diets",
    body: "Cycling through restrictive plans that leave you hungry and frustrated.",
  },
] as const;

export function YogaForWeightLossProblem() {
  return (
    <ScrollReveal className="bg-[var(--color-surface)] py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[var(--color-on-background)] md:text-4xl">
            Exhausted from the struggle?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--color-on-surface-variant)]">
            Traditional fitness can feel like an uphill battle. If you&apos;re facing these,
            you&apos;re not alone.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-6">
          {PROBLEMS.map((p) => (
            <div
              key={p.id}
              className="premium-shadow rounded-2xl border border-gray-100 bg-white p-8"
            >
              <span className={`material-symbols-outlined mb-4 block text-4xl ${p.iconClass}`}>
                {p.icon}
              </span>
              <h3 className="mb-2 text-xl font-semibold text-[var(--color-on-background)]">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-on-surface-variant)]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

