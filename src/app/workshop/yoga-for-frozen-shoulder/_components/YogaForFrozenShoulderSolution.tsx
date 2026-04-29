import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const steps = [
  {
    title: "Step 1: Nerve Desensitization",
    description: "Gentle breathwork to lower pain response.",
  },
  {
    title: "Step 2: Passive Mobilization",
    description: "Supported poses that create space in the joint.",
  },
  {
    title: "Step 3: Rotational Integrity",
    description: "Targeted flows to strengthen internal rotators.",
  },
];

export function YogaForFrozenShoulderSolution() {
  return (
    <ScrollReveal id="science" className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-3xl font-semibold text-[var(--color-on-surface)] md:text-4xl">
            The ZenShoulder Clinical Yoga Method
          </h2>
          <p className="mb-8 text-lg text-[var(--color-on-surface-variant)]">
            Unlike aggressive physical therapy, our system uses micro-movements to signal safety to your nervous system, allowing the capsule to release naturally.
          </p>
          <ul className="space-y-6">
            {steps.map((step) => (
              <li key={step.title} className="flex gap-4">
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary-container)]">
                  <span className="material-symbols-outlined text-sm text-[var(--color-primary)]">check</span>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-on-surface)]">{step.title}</h3>
                  <p className="text-[var(--color-on-surface-variant)]">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE_qjz9woYezmQKTtNdXrZCzP5FwlBx08dtT0d4Eh27L5oChWHqDzRYfKqKXNM6AFyOCHo5SOCodioWUN1nYyEGaFMAq-pn-7gWOvbKK2ybpVuUMbT8_JnbM6tQ48vCqkokJbQwer6dawwa8aXes1nak2fS_0o4TOwz2CRnZfz4-MQV8zTCZDyGcgIgeRGn9I4SqFVIg9DPOQfQy9v3B2ipB9Fsb0POPrkRiXSmt7K2nCTeTcz6L0_R_1gtbjcxKKssXNSvRFIrkNn"
            alt="Guided shoulder mobility posture"
            width={720}
            height={720}
            className="w-full rounded-3xl shadow-2xl"
          />
          <aside className="absolute -bottom-6 -right-1 max-w-xs rounded-3xl border border-slate-100 bg-white p-6 shadow-xl md:-right-6">
            <div className="mb-2 flex items-center gap-2 text-[var(--color-primary)]">
              <span className="material-symbols-outlined">verified</span>
              <span className="font-bold">Clinical Grade</span>
            </div>
            <p className="text-sm italic text-[var(--color-on-surface-variant)]">
              &quot;After just 3 sessions, I could lift my arm 30 degrees higher than before. Truly life-changing.&quot;
            </p>
            <p className="mt-2 text-xs font-semibold text-[var(--color-on-surface)]">- Sarah M., 54</p>
          </aside>
        </div>
      </div>
    </ScrollReveal>
  );
}
