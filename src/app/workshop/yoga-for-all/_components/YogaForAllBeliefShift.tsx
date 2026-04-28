import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const MYTHS = [
  {
    id: "flexibility",
    title: "\"I'm not flexible enough\"",
    description:
      "Yoga isn't for flexible people. It's for people who want to become flexible. We start exactly where you are today.",
  },
  {
    id: "time",
    title: "\"I don't have enough time\"",
    description:
      "Our workshop shows you how to get results in just 15 minutes. You'll actually gain time back through increased energy.",
  },
] as const;

export function YogaForAllBeliefShift() {
  return (
    <ScrollReveal className="bg-white py-24" as="section">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[var(--color-inverse-surface,_#2b322d)] p-12 text-[var(--color-inverse-on-surface,_#ecf3eb)]">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <span className="material-symbols-outlined text-[120px]">lightbulb</span>
          </div>

          <h2 className="relative z-10 mb-12 text-3xl font-semibold tracking-tight md:text-4xl">
            Think You Can&apos;t Do Yoga?
          </h2>

          <div className="relative z-10 grid gap-12 md:grid-cols-2">
            {MYTHS.map((m) => (
              <div key={m.id} className="space-y-4">
                <h4 className="flex items-center gap-2 font-bold text-[var(--color-primary-fixed-dim)]">
                  <span className="material-symbols-outlined">close</span>
                  {m.title}
                </h4>
                <p className="opacity-80">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

