import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const TESTIMONIALS = [
  {
    id: "t1",
    quote:
      "\"I used to have constant lower back pain from my IT job. After Sarah's workshop, I finally have a routine that actually works and only takes 10 mins.\"",
    name: "James R., Software Engineer",
  },
  {
    id: "t2",
    quote:
      "\"Finally, a yoga class that doesn't feel intimidating. I feel so much more energized in the mornings now. Highly recommend!\"",
    name: "Elena M., Teacher",
  },
  {
    id: "t3",
    quote:
      "\"The clinical focus really clicked for me. It’s not just 'stretching'—it's systematic healing. My stress levels have plummeted.\"",
    name: "Dr. Amit S., General Practitioner",
  },
] as const;

const STARS = [0, 1, 2, 3, 4] as const;

export function YogaForAllTestimonials() {
  return (
    <ScrollReveal className="bg-[var(--color-surface)] py-24" as="section">
      <div className="mx-auto max-w-[1280px] px-8">
        <h2 className="mb-16 text-center text-3xl font-semibold tracking-tight md:text-4xl">
          Results From Real People
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="rounded-2xl bg-white p-8 italic shadow-sm">
              <div className="mb-4 flex text-[#FFD700]">
                {STARS.map((i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              {t.quote}
              <div className="mt-6 flex items-center gap-3 font-bold not-italic">
                <div className="h-10 w-10 rounded-full bg-[var(--color-secondary-container)]" />
                {t.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

