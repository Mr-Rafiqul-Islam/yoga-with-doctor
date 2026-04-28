import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const MYTHS = [
  {
    id: "flexible",
    title: "“I’m not flexible enough for yoga.”",
    body: "Yoga care isn’t about touching your toes—it’s about safe movement, breath, and nervous-system balance.",
  },
  {
    id: "stretching",
    title: "“Yoga is just stretching.”",
    body: "Therapeutic yoga can influence stress physiology and recovery—key factors in metabolic health.",
  },
  {
    id: "medsOnly",
    title: "“Medication is the only way.”",
    body: "Medication can be necessary. Yoga care is complementary support to help you build stronger regulation habits with your doctor.",
  },
] as const;

export function YogaCareDiabetesMythBuster() {
  return (
    <ScrollReveal className="bg-[rgb(232_108_110/0.05)] py-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 md:px-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Myths That Hold You Back
          </h2>
          <ul className="space-y-5">
            {MYTHS.map((m) => (
              <li key={m.id} className="flex items-start gap-3">
                <span className="material-symbols-outlined material-symbols-outlined--fill text-[var(--color-tertiary)]">
                  cancel
                </span>
                <p className="leading-relaxed text-[var(--color-secondary)]">
                  <strong className="text-[var(--color-on-background)]">{m.title}</strong>{" "}
                  {m.body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-shadow rounded-2xl border-l-8 border-[var(--color-primary)] bg-white p-10">
          <p className="text-lg italic leading-relaxed text-[var(--color-secondary)]">
            “The biggest myth is that your quality of life must decline. With the right support, you
            can feel steady, strong, and confident again.”
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

