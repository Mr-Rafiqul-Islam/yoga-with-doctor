import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const VALUE_ITEMS = [
  {
    icon: "self_improvement" as const,
    valueLabel: "$497 Value",
    title: "30 Days Live Yoga",
    description:
      "Daily guided sessions focusing on weight-specific flows and poses.",
    colSpanClass: "" as const,
  },
  {
    icon: "timer" as const,
    valueLabel: "$197 Value",
    title: "Fat Loss Routine",
    description:
      "Strategic sequences designed to keep your heart rate in the fat-burn zone.",
    colSpanClass: "",
  },
  {
    icon: "restaurant_menu" as const,
    valueLabel: "$147 Value",
    title: "Anti-Inflammatory Diet",
    description:
      "Easy-to-follow meal plans that support your yoga practice and fat loss.",
    colSpanClass: "",
  },
  {
    icon: "monitoring" as const,
    valueLabel: "$97 Value",
    title: "Tracking System",
    description:
      "Digital journal to log your progress, measurements, and energy levels.",
    colSpanClass: "",
  },
  {
    icon: "groups" as const,
    valueLabel: "$59 Value",
    title: "Private Support Group",
    description:
      "Connect with others on the same journey for 24/7 accountability.",
    colSpanClass: "md:col-span-2 lg:col-span-1",
  },
] as const;

export function YfwlValueStack() {
  return (
    <ScrollReveal
      as="section"
      id="curriculum"
      className="bg-[color:var(--yfwl-surface-container)] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="yfwl-text-h2 text-[color:var(--yfwl-on-surface)]">
            Everything You Get Today
          </h2>
          <p className="text-[color:var(--yfwl-on-surface-variant)]">
            A complete ecosystem for your total transformation.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {VALUE_ITEMS.map(
            ({
              icon,
              valueLabel,
              title,
              description,
              colSpanClass,
            }) => (
              <div
                key={title}
                className={`rounded-2xl border border-emerald-50 bg-white p-8 shadow-sm transition-shadow hover:shadow-md ${colSpanClass}`}
              >
                <div className="mb-6 flex items-start justify-between">
                  <span className="material-symbols-outlined text-4xl text-[color:var(--yfwl-primary)]" aria-hidden>
                    {icon}
                  </span>
                  <span className="font-bold text-[color:var(--yfwl-outline-variant)]">
                    {valueLabel}
                  </span>
                </div>
                <h3 className="mb-4 font-[family-name:var(--yfwl-font-heading)] text-xl font-semibold text-[color:var(--yfwl-on-surface)]">
                  {title}
                </h3>
                <p className="mb-6 text-sm text-[color:var(--yfwl-on-surface-variant)]">
                  {description}
                </p>
              </div>
            ),
          )}
        </div>
        <div className="mt-12 text-center">
          <div className="text-lg leading-none text-[color:var(--yfwl-outline)] line-through">
            Total Value: $997
          </div>
          <div className="yfwl-text-h2 mt-2 text-[color:var(--yfwl-primary)]">
            Join Today for Just $47
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
