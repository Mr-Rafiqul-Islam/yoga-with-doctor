import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const INSTRUCTOR_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDVVSRnGnW0Y2OBgLGvN9JyLwgp6C0b4PR_GoHth73NJJOC_iW-hiEjuVIZUdrBJQacgJlOUstPVy3YAn-PEgzuhZjfiXXQrPO3jKIxku3zFZAKoRRGdAKctYyNFh28BxWkMsSrasvqLeLpAtE4vi1J-b8GrnSDVlKzA5Obq3U-M_znXIr9851Fq6qP09kxSwK6yNOwvW6DHXp_19uv_cCSrbFQzAtiJm---m52UNYVqx79zryuUcQi4eG7BncUpXQY7-q8Nwq8dHTh";

export function YfhgInstructor() {
  return (
    <ScrollReveal
      className="bg-[color:var(--color-surface-container-low)] px-[var(--yfhg-space-md)] py-[var(--yfhg-space-xl)]"
      as="section"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-[var(--yfhg-space-lg)] md:flex-row">
        <div className="md:w-1/3">
          <div className="relative">
            <div className="absolute inset-0 translate-x-2 translate-y-2 rotate-3 rounded-[40px] bg-[color:var(--color-primary)]" />
            <div className="relative z-10 overflow-hidden rounded-[40px] shadow-xl grayscale transition-all duration-500 hover:grayscale-0 aspect-[3/4] w-full">
              <Image
                alt="Instructor"
                className="object-cover"
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                src={INSTRUCTOR_SRC}
              />
            </div>
          </div>
        </div>
        <div className="md:w-2/3">
          <span className="yfhg-font-label mb-2 block font-bold uppercase text-[color:var(--color-primary)]">
            Your Head Coach
          </span>
          <h2 className="yfhg-headline-lg mb-6 text-[color:var(--color-on-background)]">Led by Dr. Elena Vance</h2>
          <p className="yfhg-body-lg mb-8 text-[color:var(--color-on-surface-variant)]">
            With over 15 years in sports medicine and corrective yoga, Dr. Vance has helped 50,000+ individuals
            worldwide optimize their physical potential. Her methodology is based on mechanical biophysics and spinal
            health.
          </p>
          <div className="grid grid-cols-2 gap-[var(--yfhg-space-md)]">
            <div>
              <p className="yfhg-display-xl font-black leading-none text-[color:var(--color-primary)]">15+</p>
              <p className="yfhg-font-label text-sm font-bold uppercase text-[color:var(--color-on-surface-variant)]">
                Years Experience
              </p>
            </div>
            <div>
              <p className="yfhg-display-xl font-black leading-none text-[color:var(--color-primary)]">50k</p>
              <p className="yfhg-font-label text-sm font-bold uppercase text-[color:var(--color-on-surface-variant)]">
                Success Metrics
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
