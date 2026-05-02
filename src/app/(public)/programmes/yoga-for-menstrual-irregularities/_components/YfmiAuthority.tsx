import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const PORTRAIT =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB6Bt0MUm4ExIx8GIgcphk5OvoR6912n9UALX5bgLllLOTk6M-5Yc82RoFhMw9OUE0HyzHubGskofRfGaUuyahJtJWQatTzgwJSIa0Ti3lwoKfONyNfOEv-X_QvR8mDRTCinlmbsZtrzKZxjHcfxPA4qWL-SXZr4l5FzyINpcwQ1huyer6IHG0nTBk-de_TuFOlbqkiRDOBwu4NW_8MSdEwqw1kmeUiOlOc9f6fgETvqo6O1RtvWX4TpS_fVEBFYCv5v-2VSgEsVodE";

export function YfmiAuthority() {
  return (
    <ScrollReveal
      className="relative mb-12 overflow-hidden bg-[color:var(--yfmi-inverse-surface)] py-24 text-[color:var(--yfmi-inverse-on-surface)]"
      delay={0.06}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row md:px-12">
        <div className="md:w-1/3">
          <Image
            alt="Dr. Elena Carter"
            className="rounded-3xl border-8 border-[color:rgb(255_255_255/0.1)] shadow-2xl grayscale transition-all duration-700 hover:grayscale-0"
            height={420}
            sizes="(max-width: 768px) 100vw, 33vw"
            src={PORTRAIT}
            width={400}
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="yfmi-headline-lg mb-6">Science-Based, Heart-Led</h2>
          <p className="yfmi-body-lg mb-6 leading-relaxed opacity-90">
            &ldquo;As a physician and a woman, I saw too many patients being told their irregularities were &lsquo;just
            normal&rsquo; or given a pill to mask the symptoms. I created this program to bridge the gap between clinical
            endocrinology and the somatic wisdom of yoga.&rdquo;
          </p>
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-[color:var(--yfmi-primary-fixed-dim)]" />
            <p className="yfmi-headline-md text-xl">Dr. Elena Carter, MD &amp; Certified Yoga Therapist</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
