import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const CREDENTIALS = [
  { id: "harvard", top: "Harvard Medical", bottom: "Affiliate" },
  { id: "board", top: "Board Certified", bottom: "Yoga Therapist" },
] as const;

export function YogaForMigraineAuthority() {
  return (
    <ScrollReveal className="bg-surface-bright py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 px-6 md:flex-row lg:px-12">
        <div className="relative h-56 w-56 flex-shrink-0 md:h-64 md:w-64">
          <Image
            className="h-full w-full rounded-full border-8 border-white object-cover shadow-xl"
            width={512}
            height={512}
            sizes="256px"
            alt="Clinical expert doctor portrait"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi-azVxRNmMgHUBNXnV1qVkVJCnVIscsq6SJUaWwijuFwo0WU4ShZf6c9EEqEZJGWBv2LUvf5NSZo8aotn5FEERvo8VwLF_4tGsFlZipFvOedxPwK53sm1kHUnx5DKCxCkTfSTJsqO4RSkWn6uloKpyqCgXUZ4lglB3PAx7zPl4_g4bcxqSHKbsD3x8HRG9CrV7DMQ27_BXvg6rIFctG334abwRJROHGTTdu9uEkhltanTfaT6GI3RzeapDbjFWD73JXfexM61VRK9"
          />
          <div className="absolute bottom-2 right-2 rounded-full bg-[#00A86B] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
            Verified Expert
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-3xl font-semibold leading-tight md:text-4xl">
            Dr. Sarah Elena, PhD
          </h2>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Clinical Neuroscientist &amp; Yoga Therapist
          </p>
          <p className="mb-6 text-lg leading-relaxed text-secondary">
            With over 15 years of clinical research in neurology and integrative medicine, Dr. Elena
            has helped over 10,000 patients reduce migraine frequency by 70% using non-pharmacological
            interventions.
          </p>
          <div className="flex flex-wrap gap-4">
            {CREDENTIALS.map((c) => (
              <div
                key={c.id}
                className="rounded-lg border border-outline-variant bg-white px-4 py-2 shadow-sm"
              >
                <span className="block text-xs text-secondary">{c.top}</span>
                <span className="font-bold">{c.bottom}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

