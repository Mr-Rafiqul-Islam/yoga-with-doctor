import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const STATS = [
  { id: "exp", value: "15+", label: "Years Exp" },
  { id: "students", value: "50k+", label: "Students" },
  { id: "best", value: "3x", label: "Bestseller" },
] as const;

export function YogaForWeightLossAuthority() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container-low)] py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Image
          alt="Professional yoga instructor smiling"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgOJ0A6zSq7ES7FQOzwfpuBWJciQN2nh1vh9_q1wsq_EWm84hM6MoIN64-mu9MDpMbr3EJ3EF-bkUpBOSjz58e6pYyulcg8jd-G6a_L9SSF_AGBtxURzzdZ-oR4uH9yFpl0VhQlVl2OLCEptrE9Owap5CSTwkryiBq9RFbSyO7hEZ0rkn2n9l-5gBASxEpoaDH_WeIuAc8YlB3pziiKdGUtUsn6CCRrd-ifKnju7IGHE16jcA4y0uDCGOPY7jKqd0dpq7seqTEzIeW"
          width={256}
          height={256}
          sizes="128px"
          className="mx-auto mb-6 h-32 w-32 rounded-full border-4 border-white object-cover shadow-xl"
        />
        <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
          Meet Your Guide: Sarah Jenkins
        </h2>
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
          E-RYT 500 &amp; Nutritional Specialist
        </p>
        <p className="mb-10 text-lg italic leading-relaxed text-[var(--color-on-surface-variant)]">
          &quot;I spent 10 years struggling with weight fluctuations and chronic fatigue until I
          discovered the power of Metabolic Yoga. My mission is to help 1 million women reclaim their
          health without the &apos;no pain, no gain&apos; mentality.&quot;
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {STATS.map((s) => (
            <div key={s.id} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[var(--color-secondary)]">{s.value}</span>
              <span className="text-xs font-bold uppercase tracking-tighter opacity-60">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

