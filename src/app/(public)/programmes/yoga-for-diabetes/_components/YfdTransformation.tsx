import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const BEFORE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCHq2P4Npp0nJ5oa0nDI4sT9Uc8_TTyfqXCW0Pw2OWJ3USbayzmHSRWurUBSwte7EsFQa5T6DBExskC4z0D_MAyi702-UTV0BsU500zOztDKAKyuWPliWBlIjmRRZ1D0OiBHWjHA2S0fscvqAAAgl7NanMhucX3hERJyLjTmdjTZozyebvbKf5MMfRK0IJLIMAI_TqZeI3-eHK6r-skg0W7vqv0ZkEasypku6fK4mhlqR1f6Huq3sy25kW4GGw7RrC8zKli2KXGBLCp";
const AFTER_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBo7o34VenZ0e6zvtMGk5227JiK92RM51s7KfPDeCnEo26cJgZvYcGFveXVEUzswyZGTTXXhzWZJwRZa6IOvBYlCIkzlWZQCnTbsqWwRCIuafNuRcsXe5ISnGuRA0v_3U9thmjLScUdeAtqrQkUzJcdH6aVvIyk93wRQnSHB4E1iWR40iy3j84X4GO6tTeMvAR1lsD5N1foBOuvVX-nQDiMK6hIJG9pXnppHzA6px-s9NQD0CAH3FUFdjwH68byVEbNt3crXnep7m42";

const CHECKLIST = [
  "Stable blood sugar levels through clinical movement",
  "Natural insulin sensitivity optimization",
  "Deep, restorative sleep and reduced cortisol",
] as const;

export function YfdTransformation() {
  return (
    <ScrollReveal className="px-5 py-12 md:py-16" delay={0.1}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col overflow-hidden rounded-[2.5rem] bg-[color:var(--yfd-primary)] text-white shadow-2xl md:flex-row">
          <div className="flex-1 p-10 md:p-16 lg:p-20">
            <h2 className="yfd-text-headline-xl mb-6">A New Reality is Possible</h2>
            <p className="yfd-text-body-lg mb-8 text-[color:var(--yfd-on-primary-container)]">
              Imagine waking up with stable numbers, sustained energy throughout the afternoon, and a calm mind. This
              isn&apos;t a dream—it&apos;s metabolic balance.
            </p>
            <ul className="space-y-4">
              {CHECKLIST.map((line) => (
                <li key={line} className="flex items-center gap-3">
                  <span className="material-symbols-outlined shrink-0 text-[color:var(--yfd-secondary-fixed)]">
                    check_circle
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid min-h-[280px] flex-1 grid-cols-2 md:min-h-0">
            <div className="relative overflow-hidden">
              <Image
                src={BEFORE_IMG}
                alt="Tired man slumped at a table looking exhausted and stressed"
                fill
                className="object-cover opacity-60"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-xl font-bold uppercase tracking-widest">
                Before
              </div>
            </div>
            <div className="relative overflow-hidden">
              <Image
                src={AFTER_IMG}
                alt="Woman performing yoga in a bright peaceful room"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[color:var(--yfd-secondary)]/30 text-xl font-bold uppercase tracking-widest text-[color:var(--yfd-on-primary)]">
                After
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
