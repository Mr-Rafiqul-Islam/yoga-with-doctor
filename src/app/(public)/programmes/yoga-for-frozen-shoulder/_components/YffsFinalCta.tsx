import Link from "next/link";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YffsFinalCta() {
  return (
    <ScrollReveal
      as="section"
      className="bg-white py-32 text-center"
      delay={0.2}
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="yffs-headline-display mb-6 text-[color:var(--yffs-on-surface)]">Your Future Self is Waiting</h2>
        <p className="yffs-body-lg mb-12 text-[color:var(--yffs-on-surface-variant)] italic">
          &quot;The best time to start was when the pain first began. The second best time is right now. Don&apos;t let
          another month of stiffness pass you by.&quot;
        </p>
        <Link
          className="inline-block rounded-full bg-[color:var(--yffs-primary)] px-12 py-5 text-xl font-bold text-[color:var(--yffs-on-primary)] shadow-lg transition-transform hover:scale-105"
          href="#join"
        >
          Get Started for Just $47
        </Link>
      </div>
    </ScrollReveal>
  );
}
