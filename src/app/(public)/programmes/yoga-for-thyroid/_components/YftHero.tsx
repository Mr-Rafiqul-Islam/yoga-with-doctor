import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const AVATARS = [
  {
    alt: "Portrait of a smiling woman who successfully balanced her thyroid",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnm8X5yAtlfgqli_D8HJZaqkacVdpqutfYNdo2fiYdC2EWMwhIGIB0sSldgKdriivi2i1UGVZn98y8VbkDIJQfRNs13RLqDMDZkhuJIeog7qn2bJO8DqCRIJlrfz2CDbEt81UyVpcTfNZFX6OqxDuptD0D6rzndezbJ7lwH_h5qXfxnzQKjTByo0IHAwrCZmlf2Us8z45sfd_bR1CXFyyGq8bWuHGm2g-qAKZBncFrhx5Ul5GMVnagJdOu9wh7sOHSGmMUfbM20KfZ",
  },
  {
    alt: "Portrait of a man who improved his energy levels",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsB2OYgpf4rv37-uSXwst5YN0FZrxeoV-dE83uTho_knLxXPTmnukW7sy4PLW5ZeFKHucRY62jVSVJMQ_0ycvj81QQFeBmyo9PqW9q7Y5Cb6rCKSYcQxuxJ6eRQgHJhv_WO5Yv9_o7hcIIXKf0t-ChR7x3_Lrt_Xfii_WAozclNF59n7gMGFNj-VP7KBLnqNOD6Px-gslO2vtiZLM-ErA849x9LPIALv-XUoKnA2olOApL5JwPlILAXIuh_NysVh4YRQPELqn-e4sI",
  },
  {
    alt: "Happy yoga practitioner portrait",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHzuyY8JFWPv2XEtp6VeIMaP8fvbMaByK9aRIZ0dtNag9_SuCbfjBLNSVOl1f4RMU6ibStzINi11S4a3lQGhjiwo_nIkLWWduSdtnTl7DtJJhehiIu0RDL7f1oOXmjbf6a9y7mJb_PCA_GcIyohMBVu-CKeT7foHXfm8DVYdijuXlPMLit1eVG9Mja6xNUdQs_k5tOi5P-l9g1pXNFSgKHfOdb0HZDvD3qyDjAY-v8jAUr4qVy4kqj8kCnQ09IjBO4sumnM3Fb3wcd",
  },
] as const;

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD-oulRIlyhH7vosUL5ZWF0oy-o0eeZ-HDpCQWsfNA4JuQGSxSWXcflhynGmruKWMJI-IINR1cp7qlFf7tsthH9rEbtFfNsQ48Xg3pbodhU0OgporbpuPPvHeSF4mB_Bqb7N_HxTdxgYdMsdb45nCkhimsKGtvgCKranakH02W-JYdgZ_k-CoWAhiwYDsME3iUAW2Azq7MngKXIS9k1yFmc6ZA2uyxu5oh3AbZ3o5zbqGnURDoHNNyq1bIeUOf3xMO6K2pdTtdsCxb7";

export function YftHero() {
  return (
    <ScrollReveal className="relative overflow-hidden px-8 pb-32 pt-20" as="header" delay={0}>
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <div className="space-y-8">
          <span className="yft-label-caps inline-block rounded-full bg-[color:var(--color-secondary-container)] px-4 py-1 text-[color:var(--color-on-secondary-container)]">
            Clinically backed protocol
          </span>
          <h1 className="yft-text-h1 text-[color:var(--color-primary)]">
            Balance Your Thyroid Naturally with Yoga
          </h1>
          <p className="yft-text-body-lg max-w-lg text-[color:var(--color-on-surface-variant)]">
            A doctor-guided system specifically engineered to support hormone balance, metabolic health,
            and sustained energy through mindful movement.
          </p>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Link
              className="yft-text-body-md flex items-center justify-center gap-2 rounded-xl bg-[color:var(--color-primary)] px-8 py-4 text-center font-bold text-[color:var(--color-on-primary)] transition-all hover:shadow-xl hover:shadow-[color:var(--color-primary)]/20"
              href="#checkout"
            >
              Start Your Healing Journey
              <span className="material-symbols-outlined" aria-hidden>
                arrow_forward
              </span>
            </Link>
            <Link
              className="yft-text-body-md rounded-xl border border-[color:var(--color-secondary)] px-8 py-4 text-center font-bold text-[color:var(--color-secondary)] transition-all hover:bg-[color:var(--color-secondary)]/5"
              href="#method"
            >
              Explore the Method
            </Link>
          </div>
          <div className="flex items-center gap-4 border-t border-[color:var(--color-outline-variant)]/30 py-6">
            <div className="flex -space-x-3">
              {AVATARS.map((a) => (
                <Image
                  key={a.src}
                  alt={a.alt}
                  className="h-10 w-10 rounded-full border-2 border-[color:var(--color-surface-container-lowest)] object-cover"
                  height={40}
                  src={a.src}
                  width={40}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-[color:var(--color-on-surface-variant)]">
              Joined by 4,200+ individuals this month
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-[color:var(--color-secondary-container)]/30 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-[color:var(--color-primary-container)]/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/50 shadow-2xl">
            <Image
              alt="Professional female doctor in clinical setting smiling warmly, representing authority and serenity"
              className="aspect-[4/5] w-full object-cover"
              height={900}
              src={HERO_IMG}
              width={720}
              priority
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-xl p-6 yft-glass-card">
              <p className="yft-text-h3 mb-1 text-[color:var(--color-primary)]">Dr. Elena Sterling</p>
              <p className="yft-label-caps mb-3 text-[color:var(--color-secondary)]">
                Endocrinology specialist &amp; yoga instructor
              </p>
              <p className="yft-text-body-md text-[color:var(--color-on-surface-variant)] leading-tight italic">
                &quot;True thyroid health isn&apos;t found in a pill alone, but in how we align our biology with
                our lifestyle.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
