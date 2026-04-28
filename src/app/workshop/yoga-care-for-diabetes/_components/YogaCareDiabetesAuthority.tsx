import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const CREDENTIALS = [
  { id: "who", icon: "award_star", label: "Evidence‑guided practice" },
  { id: "science", icon: "science", label: "Metabolic health focus" },
  { id: "group", icon: "group", label: "15k+ learners served" },
  { id: "book", icon: "book", label: "Clinician educator" },
] as const;

export function YogaCareDiabetesAuthority() {
  return (
    <ScrollReveal className="py-24">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 px-6 md:px-12 md:flex-row">
        <div className="w-full md:w-1/2">
          <Image
            alt="Doctor portrait"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjEENKymWFzXh_Mex9wp0L_7UuN841WLOaaJ4C18npvpRDeHdQB_zpMLiN4DAeFXDHiiTy4h1TGuGXt8-vO7qgHztKqrt0FvkPKu4Y5eqp8BwBoQGt1fDaEcIJ4Zrla2DDkAEQkrYkvTxVVmxNxtQgKRVfY9kVLal-MoCFh5UHPO0Vl1AEI9BnrUeUkEmbhMRy-LOeSNqcaGJsKfwmRrMoOv6CX7KqOvjrV7_n2VtI6H5xx1hmYcg1V_A7-a0jCdwnBMs10IOj2qWG"
            width={1200}
            height={900}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="card-shadow h-[450px] w-full rounded-2xl object-cover"
          />
        </div>

        <div className="w-full space-y-6 md:w-1/2">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-on-surface)] md:text-4xl">
            Meet Dr. Shah Alam
          </h2>
          <p className="text-lg leading-relaxed text-[var(--color-on-surface-variant)]">
            Founder at Yoga With Doctor. This workshop is designed to be simple, safe, and practical
            for real life—especially if you feel overwhelmed by conflicting advice.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {CREDENTIALS.map((c) => (
              <div key={c.id} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--color-primary-container)]">
                  {c.icon}
                </span>
                <span className="text-sm font-semibold text-[var(--color-on-surface)]">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

