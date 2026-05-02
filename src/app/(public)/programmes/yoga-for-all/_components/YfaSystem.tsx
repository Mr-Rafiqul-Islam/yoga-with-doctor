import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const STEPS = [
  {
    n: 1,
    title: "Assess",
    body: "A 5-minute movement screen to find your starting point.",
    highlight: false,
  },
  {
    n: 2,
    title: "Align",
    body: "Gentle stretches to decompress the spine and neck.",
    highlight: false,
  },
  {
    n: 3,
    title: "Breathe",
    body: "Specific pranayama techniques for nervous system calm.",
    highlight: true,
  },
  {
    n: 4,
    title: "Integrate",
    body: "Daily 15-minute flows that fit into any busy schedule.",
    highlight: false,
  },
];

export function YfaSystem() {
  return (
    <ScrollReveal className="px-6 py-16" delay={0.04} id="curriculum">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="yfa-text-h2 text-[color:var(--yfa-primary)]">The Simple Daily Yoga System</h2>
          <p className="yfa-text-body-md mx-auto mt-4 max-w-2xl text-[color:var(--yfa-secondary)]">
            We&apos;ve stripped away the complexity to leave only what works for heart health and flexibility.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {STEPS.map(({ n, title, body, highlight }) => (
            <div
              key={n}
              className={`flex flex-col items-center rounded-3xl bg-[color:var(--yfa-surface-container)] p-8 text-center ${
                highlight ? "border-2 border-[color:var(--yfa-primary)]" : ""
              }`}
            >
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold shadow-sm ${
                  highlight
                    ? "bg-[color:var(--yfa-primary)] text-white"
                    : "bg-white text-[color:var(--yfa-primary)]"
                }`}
              >
                {n}
              </div>
              <h4 className="yfa-text-h3 !mb-2 !mt-0 !text-xl text-[color:var(--yfa-on-surface)]">{title}</h4>
              <p className="mt-2 text-sm text-[color:var(--yfa-secondary)]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
