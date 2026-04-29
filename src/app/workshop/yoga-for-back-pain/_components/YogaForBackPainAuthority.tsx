import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const credentials = [
  { icon: "verified_user", label: "PT BOARD CERTIFIED" },
  { icon: "school", label: "YOGA ALLIANCE" },
];

export function YogaForBackPainAuthority() {
  return (
    <ScrollReveal id="about" className="bg-[var(--color-surface-container-highest)] px-6 py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row">
        <div className="w-full md:w-1/3">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl border-8 border-white shadow-xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRWUlfNdGmXIewVvNFCFIsFET5uG7fyFPqRHN80f1u6FyvCibZbvAu_kXV-oD6iIXddKJIqzYcNN1IMFCKWGomAgt074POdARjFGe8VE9neS20gCj7_8zeQb1jNnDglVKMqU81nTWRqNmZp-F5IN67r-w6iwjMp5cypBJtRhEnqoS22ded7LPR6YRw39bOwKfFSocXKDJ8titnOPialLCTY_DDF5Y35WfmadLzS0sjv7oNnE940q33QiO2vVtY5jrmrhTLWPjSMURW"
              alt="Dr Elena Vance portrait"
              width={700}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">Meet Dr. Elena Vance</h2>
          <p className="mb-6 font-bold text-[var(--color-primary)]">Doctor of Physical Therapy &amp; E-RYT 500</p>
          <div className="space-y-4 text-[var(--color-on-surface-variant)]">
            <p>
              With over 15 years of clinical experience, Dr. Vance has helped over 12,000 people avoid spinal surgery
              through her SpineFlow protocol.
            </p>
            <p>
              Her approach is built for real people who need practical, safe results instead of extreme flexibility.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-8 opacity-80">
            {credentials.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="text-xs font-bold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
