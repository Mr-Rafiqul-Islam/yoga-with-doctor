import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const STEPS = [
  {
    n: "01",
    title: "Disc Decompression",
    body: `Your spine contains 23 discs. When compressed, you lose height. Specific yoga poses create "negative pressure" to rehydrate and expand these discs.`,
  },
  {
    n: "02",
    title: "Growth Hormone Activation",
    body: "Deep-sleep inducing yoga routines trigger the pituitary gland, optimizing your body's natural growth hormone production cycle.",
  },
  {
    n: "03",
    title: "Cartilage Expansion",
    body: "Strengthening the core and lower back allows the cartilage in the spinal column to thicken, providing permanent height maintenance.",
  },
] as const;

const STATS = [
  { label: "Spinal Length", value: "+3.2cm" },
  { label: "Core Stability", value: "94%" },
] as const;

export function YfhgScience() {
  return (
    <ScrollReveal
      className="scroll-mt-28 bg-[color:var(--color-on-background)] px-[var(--yfhg-space-md)] py-[var(--yfhg-space-xl)] text-white"
      id="science"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-[var(--yfhg-space-xl)] text-center">
          <h2 className="yfhg-display-xl mb-6">The Science of Height Optimization</h2>
          <p className="yfhg-body-lg mx-auto max-w-2xl text-slate-400">
            Gravity is your enemy. AuraHeight yoga is your secret weapon to reverse spinal compression.
          </p>
        </div>
        <div className="grid items-center gap-[var(--yfhg-space-lg)] md:grid-cols-2">
          <div className="space-y-8">
            {STEPS.map((step) => (
              <div key={step.n} className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[color:var(--color-primary-container)] font-bold text-[color:var(--color-primary-container)]">
                  {step.n}
                </div>
                <div>
                  <h3 className="yfhg-headline-md mb-2">{step.title}</h3>
                  <p className="text-slate-400">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative rounded-3xl border border-slate-800 bg-slate-900 p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage: "radial-gradient(#4caf50 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative z-10 flex flex-col items-center">
              <span className="material-symbols-outlined animate-pulse text-[120px] text-[color:var(--color-primary-container)]">
                accessibility_new
              </span>
              <div className="mt-8 grid w-full grid-cols-2 gap-6">
                {STATS.map((s) => (
                  <div key={s.label} className="rounded-xl border border-slate-700 bg-slate-800/50 p-4">
                    <p className="yfhg-font-label mb-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                      {s.label}
                    </p>
                    <p className="text-2xl font-bold">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
