import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const FEATURES = [
  {
    icon: "psychology" as const,
    title: "Yoga Poses",
    description: "Specific sequences to release tension in the cervical spine and shoulders.",
    hoverScale: true,
  },
  {
    icon: "air" as const,
    title: "Nervous System Reset",
    description:
      "Vagus nerve stimulation techniques to lower the body's pain sensitivity threshold.",
    showConnector: true,
    hoverScale: false,
  },
  {
    icon: "balance" as const,
    title: "Lifestyle Alignment",
    description:
      "Identifying and neutralizing environmental triggers before they turn into attacks.",
    hoverScale: true,
  },
];

export function YfmScience() {
  return (
    <ScrollReveal
      as="section"
      id="mechanism"
      className="relative overflow-hidden bg-[color:var(--yfm-surface-container-high)] py-24"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="yfm-text-h2 mb-6 text-[color:var(--yfm-primary)]">
          The Science of Relief
        </h2>
        <p className="yfm-text-body-lg mx-auto mb-16 max-w-2xl text-[color:var(--yfm-secondary)]">
          We don&apos;t just stretch muscles. We reset your Over-Active Nervous System.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="relative">
              <div className={`relative ${f.hoverScale ? "group" : ""}`}>
                <div
                  className={`relative z-10 mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-[color:var(--yfm-primary)] text-white shadow-xl ${
                    f.hoverScale ? "transition-transform group-hover:scale-110" : ""
                  }`}
                >
                  <span className="material-symbols-outlined text-3xl" aria-hidden>
                    {f.icon}
                  </span>
                </div>
                {"showConnector" in f && f.showConnector ? (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-10 z-0 hidden w-[calc(200%+4rem)] -translate-x-1/2 border-t-2 border-dashed border-teal-200 md:block"
                  />
                ) : null}
              </div>
              <h4 className="mb-2 font-bold text-[color:var(--yfm-on-surface)]">{f.title}</h4>
              <p className="text-sm text-[color:var(--yfm-secondary)]">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
