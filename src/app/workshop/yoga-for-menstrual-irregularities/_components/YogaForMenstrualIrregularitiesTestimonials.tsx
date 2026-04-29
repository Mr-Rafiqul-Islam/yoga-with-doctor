import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const testimonials = [
  {
    quote:
      "After 6 months of no period, just two weeks of the LunaFlow morning routine brought back my cycle. I feel like myself again.",
    name: "Maya R.",
    role: "Graphic Designer",
    avatarClass: "bg-[var(--color-tertiary-fixed)]",
  },
  {
    quote:
      "The science-first approach really spoke to me. I finally understand the 'why' behind what my body was doing.",
    name: "Elena K.",
    role: "Research Scientist",
    avatarClass: "bg-[var(--color-secondary-fixed)]",
  },
  {
    quote:
      "It’s not just about the yoga; it’s the sense of community and support. I no longer feel alone in this journey.",
    name: "Sophie L.",
    role: "Educator",
    avatarClass: "bg-[var(--color-primary-fixed)]",
  },
];

export function YogaForMenstrualIrregularitiesTestimonials() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container-high)] pb-32 pt-10" as="section" id="reviews">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl bg-white p-8 text-[var(--color-on-surface-variant)] mi-soft-shadow"
            >
              <span className="material-symbols-outlined absolute -left-2 -top-4 text-6xl text-[var(--color-primary)]/10">
                format_quote
              </span>
              <p className="mb-6 pt-2 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 not-italic">
                <div className={`h-10 w-10 shrink-0 rounded-full ${t.avatarClass}`} aria-hidden />
                <div>
                  <p className="text-sm font-bold text-[var(--color-on-surface)]">{t.name}</p>
                  <p className="text-xs text-[var(--color-on-surface-variant)]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
