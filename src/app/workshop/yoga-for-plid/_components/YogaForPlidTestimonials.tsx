import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const TESTIMONIALS = [
  {
    id: "t1",
    quote:
      '"I was scheduled for surgery in 3 months. After 4 weeks of these yoga techniques, my MRI showed significant improvement and my surgeon cancelled the procedure!"',
    name: "John D., 45",
    role: "IT Professional",
  },
  {
    id: "t2",
    quote:
      '"The numbness in my left leg was constant. Dr. Mitchell\'s method changed everything. I can finally walk my dog for an hour without any pain."',
    name: "Maria S., 38",
    role: "Mother of Two",
  },
  {
    id: "t3",
    quote:
      '"I never thought yoga could be so clinical. This isn\'t just stretching; it\'s a science-backed recovery system that actually works for chronic back issues."',
    name: "Robert K., 52",
    role: "Business Owner",
  },
] as const;

export function YogaForPlidTestimonials() {
  return (
    <ScrollReveal className="px-8 py-20" as="section" id="testimonials">
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
          Success Stories
        </h2>
        <p className="text-[var(--color-on-surface-variant)]">Real people, real results, zero surgery.</p>
      </div>

      <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="relative rounded-2xl bg-[var(--color-surface-container-highest)] p-8">
            <span className="material-symbols-outlined absolute right-4 top-4 text-6xl text-[rgb(var(--color-primary-container-rgb)/0.20)]">
              format_quote
            </span>
            <p className="relative z-10 mb-6 text-[var(--color-on-surface)]">{t.quote}</p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-slate-200" />
              <div>
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-xs text-[var(--color-on-surface-variant)]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}

