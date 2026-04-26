import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const steps = [
  {
    n: "01",
    title: "Decompression",
    body: "Targeted spinal traction movements to create space between vertebrae, allowing the prolapsed disc to recede naturally.",
  },
  {
    n: "02",
    title: "Realignment",
    body: "Correction of pelvic tilt and spinal curvature through prescriptive yoga postures adapted for clinical safety.",
  },
  {
    n: "03",
    title: "Stabilization",
    body: "Strengthening the deep core \"corset\" muscles that act as a natural brace for your spine to prevent future injury.",
  },
];

export function PlidEpiduralMechanism() {
  return (
    <ScrollReveal className="relative bg-surface-container-low py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <h2 className="mb-6 font-headline text-3xl md:text-4xl font-bold lg:text-5xl">
            Why Surgery Isn&apos;t Always the Answer
          </h2>
          <p className="mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-on-surface-variant">
            Invasive procedures often treat the symptom, not the structural imbalance. Our 3-step
            healing system focuses on{" "}
            <span className="font-bold text-primary">Decompression, Realignment, and Stabilization</span>
            .
          </p>
        </div>
        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="absolute left-0 top-1/2 hidden h-0.5 w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-primary-container/30 to-transparent md:block" />
          {steps.map((s) => (
            <div
              className="relative z-10 rounded-xl border-b-4 border-primary/20 bg-surface-container-lowest lg:p-10 p-6 shadow-sm"
              key={s.n}
            >
              <div className="mb-6 lg:text-6xl text-5xl font-bold text-primary opacity-20">{s.n}</div>
              <h3 className="mb-4 lg:text-2xl text-xl font-bold">{s.title}</h3>
              <p className="lg:text-base text-sm leading-relaxed text-on-surface-variant">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
