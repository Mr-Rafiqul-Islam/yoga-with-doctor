import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const PORTRAIT =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCI7-H5_aAhh2YBLScAEpEdSIy2DbtvMwE0vBXvfDbk5gyXtttFpY6neYNFXZenHP_U_swR_FaC43sJdm22xHsjLfwf7x-46rY3Lbr-rvTKhFsqcYeYjefQQu7FL76SspwyVtcEJs64a9Dov5qFMzqVflNixzXKbaQiB1F-DNLBKTDqPUciD0xXeeNO7Yhk3vjujC33vWZXlpMZOqAi0Y8HCmjK9mHXT7RDGnkAG0kXpCnvOZo2qNrcqG4ypQm2JNI_B5VT8emi-gVh";

const PARAGRAPHS = [
  "I watched my own father struggle with Type 2 diabetes for decades. Despite following every prescription, he never felt \"well.\" He was surviving, but not thriving.",
  "As a medical professional, I knew there had to be a way to bridge the gap between clinical management and holistic restoration. After years of research, we developed the Metabolic Yoga System.",
  "We've since helped over 5,000 patients reduce their reliance on emergency corrections and reclaim their quality of life. This program is my life's work.",
];

export function YfdExpertStory() {
  return (
    <ScrollReveal id="science" className="mx-auto max-w-7xl px-5 py-12 md:py-16" delay={0.15}>
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Image
            src={PORTRAIT}
            alt="Professional female doctor in medical scrubs in a clinical environment"
            width={640}
            height={800}
            className="w-full rounded-3xl shadow-xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2 className="yfd-text-headline-lg mb-6 text-[color:var(--yfd-primary)]">
            &quot;Medicine is my profession, but healing is my mission.&quot;
          </h2>
          <div className="space-y-4 leading-relaxed text-[color:var(--yfd-on-surface-variant)]">
            {PARAGRAPHS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-0.5 w-16 bg-[color:var(--yfd-secondary)]" />
            <p className="font-medium italic text-[color:var(--yfd-on-surface)]" style={{ fontFamily: "var(--yfd-font-heading), Newsreader, serif" }}>
              Dr. Sarah Chen, MD, E-RYT 500
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
