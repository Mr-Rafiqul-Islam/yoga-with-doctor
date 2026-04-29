import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD4JQsCvTynIzJYlRRI1flGSSTJCpH3MRQo6BRER4rXhhkotBMXAhh15OCgtgvB8FYoYnwTq_EloliFBU1duNAq-qJ42im8RG-AbxO64GZleIMzaQ8X6GGukuOms6AYK66pksDvs1m-1lh0QF0IwYg2pgZUxbz6m13o5VghVdaYEd3y8HMh5A7oHZ_AdVyAZe4ZL2225ticGky8PeNXs1cBH-uMh_NtVfV9S7QNWhRX-FtYJVJl-x92Qx7rTOh0h9rkhULvAzPTVtZq";

export function YogaForHeartCareHero() {
  return (
    <ScrollReveal className="px-6 pb-20 pt-24" as="section">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <span className="inline-block rounded-full bg-[var(--color-secondary-container)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.05em] text-[var(--color-on-secondary-container)]">
            Clinically backed wellness
          </span>
          <h1 className="max-w-xl text-[40px] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--color-on-background)]">
            Take care of your heart naturally with simple daily yoga
          </h1>
          <p className="max-w-lg text-lg leading-[1.6] text-[var(--color-on-surface-variant)]">
            Discover the scientifically-proven method to lower blood pressure and reduce cardiac stress through
            rhythmic movement and breath-work.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              className="heart-care-pill-shadow inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-8 py-4 text-center text-xl font-semibold leading-[1.4] text-[var(--color-on-primary)] transition-all hover:opacity-90 active:scale-95"
              href="#register"
            >
              Join Free Workshop
            </a>
            <div className="flex items-center gap-3 px-4">
              <span
                className="material-symbols-outlined material-symbols-outlined--fill text-[var(--color-primary)]"
              >
                verified_user
              </span>
              <span className="font-semibold text-[var(--color-on-surface-variant)]">
                4.9/5 Student Rating
              </span>
            </div>
          </div>
        </div>

        <div className="group relative">
          <div className="relative aspect-video overflow-hidden rounded-xl border border-[rgb(var(--color-primary-rgb)/0.10)] bg-[var(--color-surface-container-highest)] shadow-xl">
            <Image
              src={HERO_IMAGE}
              alt="Serene woman practicing gentle heart-opening yoga in a bright studio"
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                className="flex h-20 w-20 items-center justify-center rounded-full bg-[rgb(var(--color-primary-rgb)/0.90)] text-[var(--color-on-primary)] shadow-2xl transition-transform hover:scale-110"
                aria-label="Play video"
              >
                <span className="material-symbols-outlined material-symbols-outlined--fill text-4xl">
                  play_arrow
                </span>
              </button>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-xl border border-teal-50 bg-white p-6 shadow-lg md:block">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-fixed)]">
                <span className="material-symbols-outlined text-[var(--color-primary)]">favorite</span>
              </div>
              <p className="text-sm font-semibold text-[var(--color-on-surface)]">
                &ldquo;My resting heart rate dropped 12 bpm in 30 days.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
