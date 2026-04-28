import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const STARS = ["s0", "s1", "s2", "s3", "s4"] as const;

const TESTIMONIALS = [
  {
    id: "robert",
    quote:
      "“The breathing + post‑meal routine made my days feel calmer. I finally stopped chasing random hacks and followed a simple plan.”",
    name: "Robert M.",
    meta: "Workshop participant",
  },
  {
    id: "sarah",
    quote:
      "“The stress‑sugar explanation was eye‑opening. I understand my body better and feel more in control.”",
    name: "Sarah L.",
    meta: "Workshop participant",
  },
] as const;

export function YogaCareDiabetesSocialProof() {
  return (
    <ScrollReveal className="py-24" id="results">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <h2 className="mb-16 text-center text-3xl font-semibold tracking-tight md:text-4xl">
          Real People, Real Results
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl border border-[var(--color-outline-variant)] bg-[var(--color-surface)] p-10"
            >
              <div className="mb-6 flex gap-1 text-[var(--color-tertiary-container)]">
                {STARS.map((s) => (
                  <span
                    key={s}
                    className="material-symbols-outlined material-symbols-outlined--fill"
                  >
                    star
                  </span>
                ))}
              </div>

              <p className="mb-8 text-lg leading-relaxed text-[var(--color-on-background)]">
                {t.quote}
              </p>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[rgb(0_0_0/0.10)]" />
                <div>
                  <p className="font-bold text-[var(--color-on-background)]">{t.name}</p>
                  <p className="text-xs text-[var(--color-secondary)]">{t.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

