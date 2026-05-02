import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const STRUGGLES = [
  {
    icon: "chair_alt",
    iconWrap: "bg-red-100",
    iconColorClass: "text-red-600",
    title: "Sitting Discomfort",
    description: "Stabbing pain after only 30 minutes at your desk or driving.",
  },
  {
    icon: "bedtime",
    iconWrap: "bg-orange-100",
    iconColorClass: "text-orange-600",
    title: "Restless Nights",
    description:
      'Tossing and turning, unable to find a position that doesn\'t throb.',
  },
  {
    icon: "accessibility_new",
    iconWrap: "bg-purple-100",
    iconColorClass: "text-purple-600",
    title: "Morning Stiffness",
    description: "Waking up feeling 20 years older than you actually are.",
  },
] as const;

export function YfbpStruggling() {
  return (
    <ScrollReveal
      id="benefits"
      className="bg-[var(--yfbp-surface-container-low)] px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 space-y-1 text-center md:space-y-1">
          <h2 className="text-slate-900 yfbp-text-headline-lg">
            Are You Struggling With This?
          </h2>
          <p className="text-[var(--yfbp-on-surface-variant)] yfbp-text-body-lg">
            Pain isn&apos;t just physical; it&apos;s a barrier to your best life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {STRUGGLES.map(({ icon, iconWrap, iconColorClass, title, description }) => (
            <div
              key={title}
              className="yfbp-glass-card space-y-3 rounded-3xl p-12 transition-transform hover:-translate-y-2 md:space-y-3 md:p-12"
            >
              <div
                className={`flex size-12 items-center justify-center rounded-2xl ${iconWrap}`}
              >
                <span className={`material-symbols-outlined ${iconColorClass}`} aria-hidden>
                  {icon}
                </span>
              </div>
              <h3 className="text-slate-900 yfbp-text-headline-md">{title}</h3>
              <p className="text-[var(--yfbp-on-surface-variant)] yfbp-text-body-md">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
