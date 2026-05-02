import Link from "next/link";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const LINE_ITEMS = [
  { icon: "video_library" as const, title: "30-Day Clinical Yoga Therapy Program", value: "$497 Value" },
  { icon: "timer" as const, title: "10-Minute Daily Mobility Routine", value: "$197 Value" },
  { icon: "health_and_safety" as const, title: "Acute Pain Relief Cheat Sheet", value: "$97 Value" },
  { icon: "groups" as const, title: "Private Support Community Access", value: "$160 Value" },
];

export function YffsOfferStack() {
  return (
    <ScrollReveal
      as="section"
      className="bg-[color:var(--yffs-surface-container)] py-24"
      delay={0.12}
      id="program"
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <h2 className="yffs-headline-lg">Everything You Get When You Join Today</h2>
        </div>
        <div className="space-y-4">
          {LINE_ITEMS.map(({ icon, title, value }, i) => (
            <ScrollReveal
              key={title}
              as="div"
              className="flex items-center justify-between rounded-2xl bg-white p-6 shadow-sm"
              delay={0.13 + i * 0.02}
            >
              <div className="flex min-w-0 items-center gap-4">
                <span className="material-symbols-outlined shrink-0 rounded-lg bg-[color:rgb(0_71_141/0.1)] p-2 text-[color:var(--yffs-primary)]">
                  {icon}
                </span>
                <span className="font-bold">{title}</span>
              </div>
              <span className="shrink-0 pl-2 font-medium text-slate-400">{value}</span>
            </ScrollReveal>
          ))}
          <div className="mt-12 rounded-3xl border-2 border-[color:var(--yffs-primary)] bg-white p-8 text-center shadow-xl">
            <p className="text-xl text-slate-500 line-through">Total Value: $951</p>
            <h3 className="yffs-headline-display my-2 text-[color:var(--yffs-primary)]">Today Only: $47</h3>
            <p className="mb-6 text-sm font-bold tracking-widest text-[color:var(--yffs-secondary)] uppercase">
              Saving you over $900
            </p>
            <Link
              className="block w-full rounded-2xl bg-[color:var(--yffs-primary)] py-5 text-xl font-bold text-[color:var(--yffs-on-primary)] transition-transform hover:scale-[1.02]"
              href="#join"
            >
              Enroll Now - Get Instant Access
            </Link>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
