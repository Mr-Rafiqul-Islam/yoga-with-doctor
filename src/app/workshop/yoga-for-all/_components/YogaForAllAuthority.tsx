import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const STATS = [
  { id: "years", value: "15+", label: "Years Exp." },
  { id: "students", value: "50k+", label: "Students" },
] as const;

export function YogaForAllAuthority() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container)] py-24" as="section">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl">
              Guided by Sarah Chen
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-[var(--color-on-surface-variant)]">
              &quot;I used to be where you are—exhausted and disconnected from my own body. After
              years of clinical research and holistic practice, I developed ZenFlow to make yoga
              accessible to the busiest people.&quot;
            </p>

            <div className="mb-8 flex items-center gap-8">
              {STATS.map((s, idx) => (
                <div key={s.id} className="flex items-center gap-8">
                  <div>
                    <div className="text-2xl font-semibold text-[var(--color-primary)] md:text-3xl">
                      {s.value}
                    </div>
                    <div className="text-sm uppercase text-[var(--color-on-surface-variant)]">
                      {s.label}
                    </div>
                  </div>
                  {idx === 0 ? (
                    <div className="h-12 w-px bg-[var(--color-outline-variant)]" />
                  ) : null}
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-3 rounded-xl bg-white p-4">
              <span className="material-symbols-outlined text-[var(--color-primary)]">
                award_star
              </span>
              <span className="font-medium">Certified E-RYT 500 Yoga Alliance</span>
            </div>
          </div>

          <div className="relative">
            <Image
              alt="Yoga Instructor Sarah"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhNdoJ7TaZ5ki2oBZHxUCgAsKl1XnyIdFXmt9JUNf2B8-iE6I2pxSbIPtkVLDOBA26I5BnuDXz00e9sNJczUPCleeO2fGhnuaFqu9Iqf8Dlf0vmY9BT_DMFbb9HVZx76-l6vFNgJDZB90b9UTjb-Ekj_sqU4_3u_5dCtuRXSKxLJAWhBSRqL6xASuF_VkJg7OZ25kOL4zDxGRiQMhJ9s8h52wnttwR4jROSStOd_Q85kkcDxGhmw1lUt-O14JZyao2CqnAxNicc6Dw"
              width={1200}
              height={1200}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

