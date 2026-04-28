import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const BADGES = [
  { id: "exp", label: "15+ Years Exp" },
  { id: "harvard", label: "Harvard Med Certified" },
  { id: "spine", label: "Spine Care Specialist" },
] as const;

export function YogaForPlidAuthority() {
  return (
    <ScrollReveal
      className="bg-[rgb(var(--color-secondary-container-rgb)/0.30)] px-8 py-20"
      as="section"
      id="authority"
    >
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
          Meet Your Lead Instructor
        </h2>
        <p className="text-[var(--color-on-surface-variant)]">
          Guided by clinical expertise and years of specialized spine care experience.
        </p>
      </div>

      <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-12 rounded-2xl border border-[rgb(var(--color-outline-variant-rgb)/0.30)] bg-white p-8 shadow-lg md:flex-row md:p-12">
        <div className="h-48 w-48 flex-shrink-0 overflow-hidden rounded-full border-4 border-[var(--color-primary)]">
          <Image
            alt="Dr. Sarah Mitchell"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCWjWpQzOiLEyVsS58uxaLI0kuugbyq-VP6VeW4WGhlkhFIzC8XuBkXb5sD96MRePHSiechp9jOFSGjbzs9fKbETncrsvLTDa3RxWqKunrVpP3hqXmkf1SpTSgdi10zYvtNw01lI9D9PoWDb8GCyXF8y8A9K7U2cnzR1DmQGdoWCWo86hBXQtToiFmGMDFhC2Sa9vq0Q-9ccIkSJ6SqyiXmXZce5FF13tKULsm1_9DPUg6u18IdoC0KhknnVHMAMV4W94tYNxvlz5l"
            width={400}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-[var(--color-primary)]">
            Dr. Sarah Mitchell, DPT, RYT-500
          </h3>
          <p className="text-base font-medium">Doctor of Physical Therapy &amp; Senior Yoga Specialist</p>
          <p className="italic text-[var(--color-on-surface-variant)]">
            &quot;I have helped over 5,000 patients regain their mobility and escape the surgery loop
            using evidence-based yoga therapy.&quot;
          </p>

          <div className="flex flex-wrap gap-3">
            {BADGES.map((b) => (
              <span
                key={b.id}
                className="rounded-full bg-[rgb(var(--color-primary-rgb)/0.10)] px-4 py-1 text-xs font-bold text-[var(--color-primary)]"
              >
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

