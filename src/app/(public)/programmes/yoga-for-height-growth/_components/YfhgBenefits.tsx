import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const CHECKLIST = [
  "Instantly gain 1-2 inches through posture correction",
  "Decompress intervertebral discs for long-term health",
  "Radiate authority with an open, athletic stance",
] as const;

const IMG_CONFIDENT =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD2lW2eeZAp6SIO1hzyI6y3dyYCmcZtfYQvgIgYPK2DxLLZ9Bp9ip_QBqNAS8ZTvxXHq5CshjP7DcsJgjlsynvdA8p7hqudDygK9z-dsKuqndsoGPlHjydFlTPPbFja8jSj-7qptb6KASGBRTCJV0Xyt7ycSKFAKRyI5xoh3CGMwIsraLcRd9nNg-_UOr0DWO2UZ9_fgIzPRz7cF0npRpwZkUx7Hj1DxJ9GQcpROA7IhrOkBW6-Ic8kMxII4B1W5tMuFFy6cX-Ly94I";

const IMG_TRAINING =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB0_7xLSo0dan6WSVw-zh-j-jDpldzRkNQ7RE7BYACXJ6VsrimAG2wsun1LWuWVYcr7yfz-V0-Vi6hdTxGGWjUnGgazg_KvXrm1CeCPiOdxd8PY0WKcoH7wxRnbPn1nT1snKekDuQ9CjrImz8tLrDvNXrN67dR_L2S42gBXHZ8EI83xm3jr1g5hRqQpDpf4gu3BJeHYhueNtPjJ8yIhbwYjIlp4eD8YMUXJQufzH74koKjL-3HoCZtCcOHgNKV4t2hTBFm5o5ivayf-";

export function YfhgBenefits() {
  return (
    <ScrollReveal className="scroll-mt-28 overflow-hidden px-[var(--yfhg-space-md)] py-[var(--yfhg-space-xl)]" id="results">
      <div className="mx-auto grid max-w-7xl items-center gap-[var(--yfhg-space-lg)] md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-square w-full">
                <Image alt="Confident person" className="object-cover" fill sizes="(max-width:768px) 45vw, 380px" src={IMG_CONFIDENT} />
              </div>
              <div className="rounded-2xl bg-[color:var(--color-secondary-container)] p-6 text-white">
                <h4 className="yfhg-headline-md leading-tight">Walk into any room with presence.</h4>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl bg-[color:var(--color-primary)] p-6 text-white">
                <h4 className="yfhg-headline-md leading-tight">Optimized potential.</h4>
              </div>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg">
                <Image alt="Training" className="object-cover" fill sizes="(max-width:768px) 45vw, 380px" src={IMG_TRAINING} />
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="yfhg-display-xl mb-6 text-[color:var(--color-on-background)]">
            Stand Taller, Feel More Confident
          </h2>
          <p className="yfhg-body-lg mb-8 text-[color:var(--color-on-surface-variant)]">
            Imagine a version of you that doesn&apos;t just &quot;wish&quot; to be taller, but actively claims every
            millimeter of their natural potential through decompression and structural alignment.
          </p>
          <ul className="mb-10 space-y-4">
            {CHECKLIST.map((text) => (
              <li key={text} className="flex items-start gap-3">
                <span className="material-symbols-outlined shrink-0 text-[color:var(--color-primary)] material-symbols-outlined--fill">
                  check_circle
                </span>
                <span className="yfhg-body-md">{text}</span>
              </li>
            ))}
          </ul>
          <Link
            className="yfhg-font-label inline-block rounded-xl bg-[color:var(--color-primary)] px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-[color:var(--color-on-primary-container)]"
            href="#checkout"
          >
            Start My Transformation
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );
}
