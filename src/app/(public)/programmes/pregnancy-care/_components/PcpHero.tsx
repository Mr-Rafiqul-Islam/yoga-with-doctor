import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const AVATAR_SRC = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAN7IYNV2jEfqH0guxrGyYmytIlZR0KguouWfIcJFb3A6tGcEaYfOy8D5MozwNimOuOePWJAxi-LBFGgPl8o_akFx4X7991tPiukid5s8xwXyya24t0ZFDdnR1iHEz20eKZ35p7OqDRNsXzfdk2I54vVhL-1tbAZY74ZZqie60QdSr6ecIZF3iHsTFw8gNbUHJMxnM39ftB8kJo1dlKzyj2eYvaB4K-KqapXEyUlNl4J8MK14EZDjJHgC2sxPTl_uJSB0ooBpgytxp0",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDwTlDJv_BPvYhuh5U-L2X0EVp0e58XP5-hZ7qbqjgXDqgYoXktnJslZiRokmgJt7uX9rg58zfrVX0FsKYAeXROwUjBE-Ff-9BIppOYPPhlVqQ3Aphnv9wsbGsbEZ3Q9-S4rUvxKuaOT8AE57uHxQxE6rVq3mXXMFDm5uMc_xU16P6LbtLccJqoAiVY9Ydw3fLO3JVfNmYmDU0e4YGbNvdOjt6_-ttrzpA2qoGztaqy8C9BA9RkpiXUnpbU2LkrEx6LxYKN4RAKAIvN",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuByid9WhdyzfPpWyLJJ_9iV5YVgGjXBta0ugrEc9V5BPd6iY5GrpOCq_IvXWXdthFnP483RGKXR3jSjVTj3AT7Nu9f_WTrHNwjt1A1Zm8Y0YtxxidJ71uxxqa-maid9AlBkpBlMppEPklCpJd5TNbKqYyD6v3UQ8PnpUqeJAF-s9gvWnlzFx4Aon6fsg4TcdJisr7oxE9RCF2Gohw7XLnUqMIoAFXxGtLXepTQJVOrU2E_wH7mXhfv_1kdu7VwpEXCJ8FjsBxDyRuxq",
];

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC9NQljFsv12310mNuFTV1w1F3GbZ_hQIjYI_yVgPMyR6W0Hxe75ZXZLla2qMCod5K0PIoPWT97b8HbYA0DH6qZFmfOyER70jp4Ve9sl72Zxav3Kc8Utdpu93UzAUL5fs5pE5Wplb8IoVHUK-jN2BP-9qUQbrnknN99pud3XtAycu67EJG1MEcL-dEUn9HXurV-ef0iRwixDPENf3xP9B_08k2gRs2xybNLoFE1nrlS9mP84ryG-lsVYWYAt679x90iVQS71--Sd1Fl";

export function PcpHero() {
  return (
    <ScrollReveal as="section" className="mx-auto max-w-7xl px-8 py-24 md:grid md:grid-cols-2 md:items-center md:gap-16">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-secondary-container)] bg-[color:var(--color-secondary-container)]/30 px-4 py-1.5 text-[color:var(--color-secondary)]">
          <span className="material-symbols-outlined material-symbols-outlined--fill text-sm">verified_user</span>
          <span className="pcp-label-caps text-[color:var(--color-secondary)]">Physiotherapist Approved</span>
        </div>
        <h1 className="pcp-text-hero text-[color:var(--color-on-surface)] md:max-w-xl">
          Safe &amp; Gentle Yoga for a <span className="italic text-[color:var(--color-primary)]">Healthy</span> Pregnancy
        </h1>
        <p className="pcp-text-body-lg max-w-lg text-[color:var(--color-on-surface-variant)]">
          Doctor-guided yoga system designed for both mother and baby. Experience a journey of calm, strength, and
          preparation for birth.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            className="rounded-full bg-[color:var(--color-primary)] px-10 py-4 text-center font-[family-name:var(--font-body)] text-base font-medium text-[color:var(--color-on-primary)] transition-all hover:shadow-lg"
            href="#checkout"
          >
            Join Now — Secure Your Spot
          </Link>
          <div className="flex -space-x-3 items-center sm:pl-2">
            {AVATAR_SRC.map((src, i) => (
              <Image
                key={src}
                alt=""
                className="h-10 w-10 rounded-full border-2 border-[color:var(--color-surface-container-lowest)] object-cover"
                height={40}
                src={src}
                width={40}
                priority={i === 0}
              />
            ))}
            <span className="pcp-text-body-md pl-6 text-[color:var(--color-on-surface-variant)]">
              4.9/5 from 1,200+ Moms
            </span>
          </div>
        </div>
      </div>
      <div className="relative mt-12 md:mt-0">
        <div className="absolute inset-0 -z-10 rounded-full bg-[color:var(--color-primary-container)]/20 blur-[100px]" />
        <div className="rotate-2 overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl transition-transform duration-500 hover:rotate-0">
          <Image
            alt="Pregnant woman doing yoga"
            className="aspect-[4/5] w-full object-cover"
            height={750}
            src={HERO_IMG}
            width={600}
            priority
          />
        </div>
      </div>
    </ScrollReveal>
  );
}
