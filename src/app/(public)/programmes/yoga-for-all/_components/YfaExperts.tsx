import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const EXPERTS = [
  {
    name: "Dr. Elena Rossi",
    role: "Cardiovascular Specialist",
    quote:
      "The breathing protocols in this course are exactly what I recommend to my patients managing hypertension. It's scientifically sound and safely paced.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPlwKEKMwmQi9hsDATcX21qTuZbqnWqZLCuAniHlKPV7hxF2xwLoZ6F_VXw1sImbVBHP8kfrmTxnzBHwDNI-NAnaajzgqfcWkAVdsGy5vhuhxXNHeelixI9MCai4DE0dyuxn3aLvW_RWfPuvDkAL7yNyGbIXHzFVZu2aAWJ_SrCS-fdElHFYPerv-Eh5pJZnlM3AfwGed155BYmkvPRjNbI8rN2WW7S70DuT9Fg-SOh3djC1mp6kLPI-RZt0oY9pV8g9heOOWJKcex",
  },
  {
    name: "Maya Chen",
    role: "Lead Curriculum Designer",
    quote:
      "I've spent 15 years simplifying yoga so that it's accessible to everyone. This program is my life's work refined into 30 days.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL1IfB7rLt3Ixuce2s2I7_CW0XGw8sk2277ijJXxndNHqEyf50t3-En24HOM7-cBg5z22kumZTcniQ-SFymWuIF6zGdKgHH5KUq2oF1161G6BRelt4OM18VoyMlotReppBD3idmBCgrhNCjpOEqB1cpjd7VYFDV3aRRKuVsepd1dCndfQdp7aUlt73qioUP2raEEdAqDKUWRnnbo2bk44TDsiOPcrHQ0hbUhLbH1Y7bLmOm6EAXl_F73pwcxZ1fT7jnAaPJcEiX6p",
  },
];

const TESTIMONIALS = [
  {
    body: "I never thought I could do yoga. I'm 65 and stiff as a board. But these videos are so gentle, I'm actually touching my toes for the first time in years!",
    by: "Robert D.",
  },
  {
    body: "The 15-minute format is a lifesaver. I do it before work and I notice my stress levels are so much lower throughout the day.",
    by: "Sarah L.",
  },
];

export function YfaExperts() {
  return (
    <ScrollReveal className="px-6 py-16" delay={0.02} id="reviews">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <div>
          <h2 className="yfa-text-h2 mb-8 text-[color:var(--yfa-primary)]">
            Guided by Experts, Trusted by Thousands
          </h2>
          <div className="space-y-8">
            {EXPERTS.map(({ name, role, quote, img }) => (
              <div key={name} className="flex gap-6">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
                  <Image alt={name} className="h-full w-full object-cover" height={80} src={img} width={80} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[color:var(--yfa-on-surface)]">{name}</h4>
                  <p className="mb-2 text-sm text-[color:var(--yfa-primary)]">{role}</p>
                  <p className="text-[color:var(--yfa-secondary)] italic">&quot;{quote}&quot;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] bg-[color:var(--yfa-surface-container)] p-10">
          <div className="mb-6 flex items-center gap-1 text-[color:var(--yfa-tertiary)]">
            {["s1", "s2", "s3", "s4", "s5"].map((k) => (
              <span key={k} className="material-symbols-outlined yfa-icon-fill">
                star
              </span>
            ))}
            <span className="ml-2 font-bold text-[color:var(--yfa-on-surface)]">4.9/5 Average Rating</span>
          </div>
          <div className="space-y-6">
            {TESTIMONIALS.map(({ body, by }) => (
              <div key={by} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="mb-4 text-[color:var(--yfa-on-surface)]">&quot;{body}&quot;</p>
                <p className="text-sm font-bold">— {by}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
