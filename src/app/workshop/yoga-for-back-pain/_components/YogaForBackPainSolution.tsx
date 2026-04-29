import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const methods = [
  {
    icon: "rebase",
    title: "Decompression",
    body: "Gentle traction techniques that create space between vertebrae and reduce nerve pressure.",
  },
  {
    icon: "bolt",
    title: "Stabilization",
    body: "Activating deep spinal support muscles that function as your natural internal corset.",
  },
  {
    icon: "psychology",
    title: "Neural Reset",
    body: "Breath-synchronized movement that calms the nervous system and reduces pain reactivity.",
  },
];

export function YogaForBackPainSolution() {
  return (
    <ScrollReveal id="science" className="overflow-hidden bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--color-primary)] md:text-4xl">
            The Science of Flow-State Recovery
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--color-on-surface-variant)]">
            Unlike generic stretching, this workshop uses neuro-muscular re-education to restore mobility and reduce
            chronic pain patterns.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {methods.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)] p-8"
            >
              <span className="material-symbols-outlined mb-6 text-4xl text-[var(--color-primary-container)]">
                {item.icon}
              </span>
              <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>
              <p className="text-[var(--color-on-surface-variant)]">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
