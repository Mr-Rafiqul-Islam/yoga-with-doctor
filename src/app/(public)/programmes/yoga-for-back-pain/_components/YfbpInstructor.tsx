import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const DOC_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCI11VnJvxG324QL4LBnnGFW6i1hwDd5Rus2QzEW-Vn8EYuHBMfpZn5FPSm6MTiwmn3Q3jMJb2mDm9PbVnqnqBCCSPSbCDE1kK8mtwhd_3EBtRHUR1BUXKmRg2FpYXNBsCPptxR1LEa7yiyU1e7nxB712MPOgd6l2S0sp6fQbuq9RNoopQU43Sem9isrk4jfcpDYxVyHGW1EUHIa_2zdd4bnljRpsPR8yND9-OfjfkE9o63isBjcT-IBE0_iL_e3QkAMZtgp9Ne06FW";

export function YfbpInstructor() {
  return (
    <ScrollReveal className="bg-[var(--yfbp-surface-container-lowest)] px-6 py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row">
        <div className="w-full shrink-0 md:w-1/3">
          <Image
            src={DOC_IMG}
            alt="Dr. Aris Thorne — board-certified orthopedic specialist"
            width={480}
            height={480}
            className="rounded-3xl shadow-xl grayscale transition-all duration-500 hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="w-full space-y-6 md:w-2/3">
          <h2 className="text-slate-900 yfbp-text-display-xl">Meet Your Instructor</h2>
          <p className="italic text-[var(--yfbp-primary)] yfbp-text-headline-md">
            &quot;I spent 15 years prescribing pills before I realized movement was the true
            medicine.&quot;
          </p>
          <p className="leading-relaxed text-[var(--yfbp-on-surface-variant)] yfbp-text-body-md">
            Dr. Aris Thorne is a Board-Certified Orthopedic Specialist who rehabilitated his own
            career-ending lumbar injury through a customized yoga protocol. He has since helped over
            10,000 patients avoid unnecessary surgeries using the BackGrowth Method.
          </p>
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="yfbp-text-label-bold">20+ Years</span>
              <span className="text-xs uppercase tracking-widest text-[var(--yfbp-on-surface-variant)]">
                Experience
              </span>
            </div>
            <div
              className="h-10 w-px shrink-0 bg-[var(--yfbp-surface-container-highest)]"
              aria-hidden
            />
            <div className="flex flex-col">
              <span className="yfbp-text-label-bold">Board Certified</span>
              <span className="text-xs uppercase tracking-widest text-[var(--yfbp-on-surface-variant)]">
                Medical License
              </span>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
