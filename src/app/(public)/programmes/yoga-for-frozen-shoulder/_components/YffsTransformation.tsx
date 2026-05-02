import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const IMG_BEFORE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAo1aD1_rJaGAzcYSLUk3W2Awhslfaxvk0FrH-dIa6WCWBqbA-O15ZMaGo4UOvq5CV5Kc4EZwgm8_5CE52shbCvUvaYhh9yHySfFVXvc7yE2rI4FbfrAgxmbJTVspKopRd0rfKfNAKE6bDEMe9CVqeFYhYDm7P0QL1BrTQVSfXTsBEyfzGb72bTs31saAjVuJF0DX20f6DooL9TN7vkTJx3AixvzRFcZCoFFSUeIbZHvqIfgh5hXRhwodV-OxksOBlNafburMIW9fFz";

const IMG_AFTER_SKY =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD-ucqcSl3iduHz0bwnsnKnpyP328_Or3f-7cO8hrtBhWskiGt8uyXBiwdXI8jJALkBECPWlw72mSer-uMJ0M1vK5qeaN2u417LBdhiG71VE-46tFvJzilzkysgo-H8VbINShrhc9Ai4NZYX8ZuqGLqt0yJlOa2Osmja1WkCa3ZQvw6mDnxToiRM_epFmjvbm-EZOw2z-_YCggRm_dRi9yYa4zm60c-eHd8yOfJvs_AYlkf5uB9K_Wq3lKmJ5hOLP-jGo65nVaddvKN";

const IMG_AFTER_WALL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCL-nsA1gH04ugVgwMMcR4uDcXsJQSo84VXGmIC3ZQbABKYmeF6oJy38aj9GAKooWNFCkyix0N1_EaSN2Ap9i77xCU_ZN_5Dbh3UEG76Bf3dVaN8jJk6RINUP9cH4HUMOePdF1vyFDlOgByO6fllL4N_nwJDwJX7BokWGTCMtV1wQ6RAGYLLid-6aHtDRxQV4TWu5zYvCGLurygTRr-mS5jU4CFJ7UQztTKvx0U4kHB30a67UR01sSUeIGSVjx3B-FW2LWRL5XU6UMF";

const CHECKLIST = [
  "Wake up feeling rested and pain-free",
  "Return to sports, gardening, and hobbies",
  "Reduce dependency on anti-inflammatories",
];

export function YffsTransformation() {
  return (
    <ScrollReveal className="mx-auto max-w-7xl px-6 py-24" delay={0.06}>
      <div className="grid items-center gap-16 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative">
                <Image
                  alt="Before: person holding shoulder in discomfort"
                  className="h-48 w-full rounded-xl object-cover opacity-60 grayscale"
                  height={192}
                  sizes="(max-width: 768px) 45vw, 25vw"
                  src={IMG_BEFORE}
                  width={320}
                />
                <span className="absolute top-2 left-2 rounded bg-[color:var(--yffs-error)] px-2 py-1 text-[10px] font-medium text-[color:var(--yffs-on-error)]">
                  BEFORE
                </span>
              </div>
              <Image
                alt="After: woman reaching arms high outdoors"
                className="h-64 w-full rounded-xl object-cover"
                height={256}
                sizes="(max-width: 768px) 45vw, 25vw"
                src={IMG_AFTER_SKY}
                width={320}
              />
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative">
                <Image
                  alt="After: successful shoulder mobility stretch"
                  className="h-64 w-full rounded-xl border-4 border-[color:var(--yffs-secondary-container)] object-cover"
                  height={256}
                  sizes="(max-width: 768px) 45vw, 25vw"
                  src={IMG_AFTER_WALL}
                  width={320}
                />
                <span className="absolute top-2 left-2 rounded bg-[color:var(--yffs-secondary)] px-2 py-1 text-[10px] font-medium text-[color:var(--yffs-on-secondary)]">
                  AFTER
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 space-y-6 md:order-2">
          <h2 className="yffs-headline-lg text-[color:var(--yffs-on-surface)]">
            Imagine Reclaiming Your Life Without Constant Ache
          </h2>
          <p className="yffs-body-lg text-[color:var(--yffs-on-surface-variant)]">
            The &quot;Clinical-Zen&quot; approach doesn&apos;t just mask the pain. It works with your body&apos;s natural
            healing response to safely lubricate the joint and lengthen the capsule.
          </p>
          <ul className="space-y-4">
            {CHECKLIST.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-1 text-[color:var(--yffs-secondary)]">
                  check_circle
                </span>
                <span className="yffs-body-md font-medium">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  );
}
