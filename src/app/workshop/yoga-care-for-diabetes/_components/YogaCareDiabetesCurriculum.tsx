import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const LESSONS = [
  {
    id: "reset",
    number: "01",
    title: "The 5‑Minute Morning Reset",
    body: "A breathing pattern to help you start the day calmer and more metabolically ready.",
  },
  {
    id: "postmeal",
    number: "02",
    title: "The Post‑Meal Movement Strategy",
    body: "Simple, joint‑friendly movements to reduce spikes and support muscle glucose uptake.",
  },
  {
    id: "stressSugar",
    number: "03",
    title: "The Stress‑Sugar Connection",
    body: "Why stress can raise sugar even when you eat \"perfectly\"—and how to downshift it.",
  },
] as const;

export function YogaCareDiabetesCurriculum() {
  return (
    <ScrollReveal className="py-24">
      <div className="mx-auto max-w-[900px] px-6">
        <h2 className="mb-20 text-center text-3xl font-semibold tracking-tight md:text-4xl">
          What You&apos;ll Learn in 90 Minutes
        </h2>

        <div className="space-y-14">
          {LESSONS.map((l) => (
            <div key={l.id} className="flex items-start gap-6">
              <div className="text-5xl font-bold leading-none text-[rgb(var(--color-primary-rgb)/0.25)] md:text-6xl">
                {l.number}
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">{l.title}</h3>
                <p className="leading-relaxed text-[var(--color-secondary)]">{l.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

