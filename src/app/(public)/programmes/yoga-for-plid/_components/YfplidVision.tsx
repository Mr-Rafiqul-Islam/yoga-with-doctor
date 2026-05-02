import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const PORTRAIT_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBzhddOqYRe8-bKhU9VWJrSVREiPMW-IPbYQeW-Kd6digBDjwIfa9izpDUIce8nbCeeRKa0-lpSY1trUtcGGmUU9EvCmCDMHUalbEFS8ralAZmeAHm_SsPx_jqHX_vm0UFA3Wia5CgfF9qoGjRHA6Igt9DW8v5GG8uG2UkKtMONOFfVYat-17_0GFrEhPgS9lA7AomTG7nxtdAkpjT36W-19X2PMouE1fTj9rKOaMgeuAOXFAO5wUFXp8zA9CmTW21P9IeRNv3niMvh";

export function YfplidVision() {
  return (
    <ScrollReveal className="py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <Image
          src={PORTRAIT_IMG}
          alt="Dr. Sarah Mitchell"
          width={640}
          height={800}
          className="w-full rounded-2xl yfplid-shadow-soft"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="space-y-6">
          <h2 className="yfplid-text-h2 text-[color:var(--yfplid-primary)]">
            The Vision Behind The Method
          </h2>
          <p className="yfplid-text-body-lg">
            &ldquo;I saw too many patients being rushed into surgery for PLID when their bodies were
            capable of healing through the right biomechanical adjustments. My mission is to provide
            the bridge between clinical medicine and holistic yoga therapy.&rdquo;
          </p>
          <div className="space-y-2">
            <p className="font-bold text-[color:var(--yfplid-primary)]">
              Dr. Sarah Mitchell, MD &amp; Yoga Therapist
            </p>
            <p className="text-sm text-[color:var(--yfplid-secondary)]">
              15+ Years Specializing in Spinal Rehabilitation
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
