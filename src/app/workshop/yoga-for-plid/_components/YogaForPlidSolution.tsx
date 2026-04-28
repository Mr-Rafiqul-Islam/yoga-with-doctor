import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const POINTS = [
  {
    id: "realign",
    title: "Disc Re-alignment",
    body: "Gentle movements designed to reduce pressure on the nerves.",
  },
  {
    id: "core",
    title: "Core Stabilization",
    body: 'Strengthen the "natural corset" that protects your spine.',
  },
  {
    id: "inflammation",
    title: "Inflammation Reduction",
    body: "Breathwork techniques that calm the nervous system and pain signals.",
  },
] as const;

export function YogaForPlidSolution() {
  return (
    <ScrollReveal className="overflow-hidden px-8 py-20" as="section">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-16 md:flex-row">
        <div className="w-full md:w-1/2">
          <Image
            alt="Healing Yoga"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSHsAu2plklaTDJ9X9vh6Pf31lGa4UGi3bNK8z8PSECRQ7qwAU59qEmaw1PlTufDYct57Pg7OhXRNjS3-gIbwvN_w0d0OgQ-z182ITrRwChan2NS-f2w-cFjzBY60zLPCFJyByipEZUh5MrNk11phTaAdPQ0TXPulZTvSYlcEjRXuvjv1owowXZgfeIq22i6hyQ3B4La5l8CgoDefS4qVWkUpTuPYxOnS7qE63enFy4zmLpkNCz3ZlPJP0nHtJmudDc7Xi3fRqo0wR"
            width={1200}
            height={900}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full rounded-2xl object-cover shadow-xl"
          />
        </div>

        <div className="w-full space-y-8 md:w-1/2">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-primary)] md:text-4xl">
            Recovery is possible without surgery.
          </h2>
          <p className="text-lg leading-relaxed text-[var(--color-on-surface-variant)]">
            We combine clinical understanding of spinal biomechanics with ancient yoga wisdom to
            create a safe, step-by-step recovery path.
          </p>

          <ul className="space-y-4">
            {POINTS.map((p) => (
              <li key={p.id} className="flex items-start gap-4">
                <span className="material-symbols-outlined material-symbols-outlined--fill text-[var(--color-primary-container)]">
                  check_circle
                </span>
                <div>
                  <p className="font-bold text-[var(--color-on-surface)]">{p.title}</p>
                  <p className="text-sm text-[var(--color-on-surface-variant)]">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  );
}

