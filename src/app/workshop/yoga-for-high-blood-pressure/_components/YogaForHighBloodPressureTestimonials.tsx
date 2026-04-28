import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { TESTIMONIALS, TESTIMONIALS_TITLE } from "../_data/yogaForHighBloodPressure";

const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"] as const;

export function YogaForHighBloodPressureTestimonials() {
  return (
    <ScrollReveal className="bg-[#f8fafc] px-6 py-16" as="section" id="results">
      <div className="mx-auto mb-16 max-w-[1200px] text-center">
        <h2 className="text-[32px] font-semibold leading-[1.3] text-[var(--color-on-surface)]">
          {TESTIMONIALS_TITLE}
        </h2>
      </div>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="hbp-shadow-soft rounded-3xl bg-white p-8">
            <div className="mb-4 flex gap-1 text-[var(--color-primary)]">
              {STAR_KEYS.map((sk) => (
                <span key={sk} className="material-symbols-outlined material-symbols-outlined--fill">
                  star
                </span>
              ))}
            </div>
            <p className="mb-6 italic text-[var(--color-secondary)]">{t.quote}</p>
            <div className="flex items-center gap-4">
              <div className={`h-12 w-12 shrink-0 rounded-full ${t.avatarClass}`} />
              <div>
                <p className="font-bold text-[var(--color-on-surface)]">{t.name}</p>
                <p className="text-xs uppercase text-[var(--color-secondary)]">{t.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
