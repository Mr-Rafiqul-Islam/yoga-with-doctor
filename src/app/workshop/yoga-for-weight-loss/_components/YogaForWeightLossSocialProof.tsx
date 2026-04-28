import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

type Transformation = {
  id: string;
  beforeAlt: string;
  afterAlt: string;
  beforeSrc: string;
  afterSrc: string;
  nameLine: string;
  quote: string;
};

const STARS = ["s0", "s1", "s2", "s3", "s4"] as const;

const TRANSFORMATIONS: Transformation[] = [
  {
    id: "emma",
    beforeAlt: "Before yoga transformation photo of a woman",
    afterAlt: "After yoga transformation photo of a fit smiling woman",
    beforeSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDj05m5WjrBMxinAbwGNRN9eM4UDv3RhTiLrFmzxPgNUdIP7uBP_P0nrVLAs-UH9YgNwzDSph7fyRI3WSwwW7gm8Y0J7rKyFF0wz6oe5vixArOY0o-3qsR_dm_DRRJ8rxdw_AdlBYr1PmVIkyEZOtIk-HYDMW0bXgeIhkgivsbX_uQhhLVQdoygf17jeJkUxoZiOfFUCVDqM0mXVgywrncjiW6WI7TRswTn2C4VZ2ZqUvIEP-Ew9zF8-vL6ykdrmwttz8nnrqog9swJ",
    afterSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPmr8ppyRYf5Gv4J5Cx2WePExQ9Iq5Dj0SAAoW1XD2mjLNNf8-AQsWlmIVIni_Ha6GL_F7JpsfmwDL-fyAWKY-6zrL9RrWGPiQyyvA6LNOqYosQbsNf_-LLoUcDQuSbiAFSamSHEOhOrat7PjXsUOcQTvfq36rmXMuQjlxVyTbkBhdHugq7P-HN-vA67t4kDx5dtdpycwr2Gb6N_sghpMYRyXu_clQKShI4KbJ0J_34opsku9-cTBuACfPr2deroTgEuI_6DThXYb0",
    nameLine: "Emma, 34 - Lost 12lbs in 6 weeks",
    quote:
      "\"The focus on cortisol was the missing link for me. I finally stopped obsessing and started seeing results.\"",
  },
  {
    id: "david",
    beforeAlt: "Before workout transformation",
    afterAlt: "After workout transformation",
    beforeSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5HR2bDYkLKdJ1KZpjRNPADz7YtjeBr3w973gQTLMZkA2GVjByo8c4RjuFsOiPIGj1GDeMKyI9Ih5CzJrWJC3dAUPTw-E76A2t1Gn9A_JjeVomzJ7FRt9rDPAExfgxFKpaEfb-CrVfqWZENvrNN2cvt094llc1MiZnIZ_jS6PcxtSRxQw86-mWQ9lMKwcHF3TBZ4LlyTz1pbNxeG6vEd4KLGiNX_wlTWcX0lrsMdM6sCHYf9ilSShhfOhu9Uhq41cdZy4g3J9M30IL",
    afterSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBySqGfbJe498OfR6wdsFD8-ZKYmaeWUHpr9MiQ5KLXPlN4TitekQNzThj8vp0nXKHpTZd-_AUTgp_4iLUt-emrNOYKy-9q_qXFj905Z4lJlwculWDlVRwJ4PPiihma1i72umQ9yxPE89nx7miAMc2AOGRfYz51HRoYLCjykm-fiAy0yZuFY2oKBV1RwCHnwjqvzaFt-NsD-QbjMNkAAZoRtqVfJ7PLTUh_aE8dpDzU7FOSArMXFuMajl8msvKcJ5e_lhTdzN9Qn45S",
    nameLine: "David, 42 - Lost 18lbs in 2 months",
    quote:
      "\"I never thought yoga could be this intense. My energy levels are through the roof and I sleep so much better.\"",
  },
  {
    id: "jessica",
    beforeAlt: "Before lifestyle change",
    afterAlt: "After lifestyle change",
    beforeSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7LVPJoyncfIY1Fwp_2o-mWSKjiqDuXhiZ-j7zZxobzOYoJPry1ZEq3wubn5MyER0ynDABNFfVozdQ0giWAEQMSSn_GL9kK0bM8UZLzN-UCpDb3NC649LwVuB3ByICNrqKQ-J_h9RG4qlyiiqi8h08ET758FKfLUMBPIkaCEeK4cNQ3HgT5_8WzuWLnQNyvxN-DFkSJBo77jF-d7jjYyngHCwAjwuE1l68RarYvPu1EytTNMw2r62rE_nVMVMn5SBxgcJ45iuTw20N",
    afterSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdFWYjGQVBt0rZ6tuV-mw5FHgWqAzcsmLEZRUfdZZJPc-LCdiXHPvJkjy7JPq1ZRfrXq2N3ck_atOYlNQzerz_eJ6Po19vo-puLjjXjZyF0_NAWp7AqC-kvhReBDboT6b-MIKIVXvSLnNAGlB0-jdfpuuKp4pLP--IrsvOOhi4ZXrIWsSuD5ZfvOBZDfR1ADGfjC-OWI6XfVgwkQUv893WpqZiiOqc_b0p9kkPhcA1IFD8MFJBwjbgW7NQmdoa4KhSOmxszWeKmZo-",
    nameLine: "Jessica, 29 - Dropped 2 Dress Sizes",
    quote:
      "\"The workshop gave me a roadmap I could actually follow. No more guessing games or impossible gym sessions.\"",
  },
];

export function YogaForWeightLossSocialProof() {
  return (
    <ScrollReveal className="py-20" id="results">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <h2 className="mb-14 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Real Transformations
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {TRANSFORMATIONS.map((t) => (
            <div
              key={t.id}
              className="lift-hover overflow-hidden rounded-3xl bg-white shadow-lg transition-transform duration-300"
            >
              <div className="grid grid-cols-2">
                <Image
                  alt={t.beforeAlt}
                  src={t.beforeSrc}
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="h-40 w-full object-cover"
                />
                <Image
                  alt={t.afterAlt}
                  src={t.afterSrc}
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="h-40 w-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="mb-2 flex gap-1 text-[var(--color-secondary)]">
                  {STARS.map((s) => (
                    <span
                      key={s}
                      className="material-symbols-outlined material-symbols-outlined--fill text-sm"
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="mb-2 text-sm font-semibold text-[var(--color-on-background)]">
                  {t.nameLine}
                </p>
                <p className="text-sm leading-relaxed text-[var(--color-on-surface-variant)]">
                  {t.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

