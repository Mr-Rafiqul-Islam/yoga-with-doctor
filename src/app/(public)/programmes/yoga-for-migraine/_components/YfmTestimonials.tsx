import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const TESTIMONIALS = [
  {
    quote:
      "\"I used to get 12-15 migraines a month. After 3 weeks of this program, I'm down to 2, and they are much milder. This changed my life.\"",
    name: "Farhana Ahmed",
    subtitle: "Mother of two, Dhaka",
  },
  {
    quote:
      "\"As a software engineer, screen time was killing me. The eye yoga and neck routines are now my daily survival kit. Highly recommend!\"",
    name: "Tanvir Rahman",
    subtitle: "Senior Developer",
  },
  {
    quote:
      "\"The breathing exercises literally stop my migraines when I feel them coming. Dr. Shah Alam is so knowledgeable and empathetic.\"",
    name: "Sumaiya K.",
    subtitle: "Banker",
  },
];

const STAR_COUNT = 5;

export function YfmTestimonials() {
  return (
    <ScrollReveal className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="yfm-text-h2 mb-16 text-center text-[color:var(--yfm-primary)]">
          Real Stories from Real People
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map(({ quote, name, subtitle }) => (
            <div
              key={name}
              className="rounded-2xl border border-teal-50 bg-[color:var(--yfm-surface-container-low)] p-8 dark:border-teal-900/40"
            >
              <div className="mb-4 flex gap-1 text-orange-400" aria-label="Five stars">
                {Array.from({ length: STAR_COUNT }, (_, i) => (
                  <span key={`star-${String(i)}`} className="material-symbols-outlined text-sm yfm-icon-fill">
                    star
                  </span>
                ))}
              </div>
              <p className="mb-6 italic text-[color:var(--yfm-secondary)]">{quote}</p>
              <div className="flex items-center gap-3">
                <div className="size-10 shrink-0 rounded-full bg-slate-200" aria-hidden />
                <div>
                  <p className="text-sm font-bold text-[color:var(--yfm-on-surface)]">{name}</p>
                  <p className="text-xs text-[color:var(--yfm-secondary)]">{subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
