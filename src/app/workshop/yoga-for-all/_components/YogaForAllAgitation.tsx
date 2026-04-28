import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const WARNINGS = [
  { id: "mood", text: "Mood swings and decreased patience with loved ones" },
  { id: "work", text: "Declining productivity and focus at work" },
  { id: "risk", text: "Increased risk of long-term physical ailments" },
] as const;

export function YogaForAllAgitation() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-dim)] py-24" as="section">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="flex flex-col items-center gap-16 md:flex-row">
          <div className="md:w-1/2">
            <Image
              alt="Stressed Professional"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCek7pXgCkhrZc8TxY-DarpCVyenhcP3P8rC-BGXqd-fsSLZzZp0uCtZ20db34BPlQuabXkevhVIWDZDKvud9nb-ZxvDfug7yltSETK5YwBkD5aPUZmitXjGLOR2iaueS0EeQZ799Y_AORIeBot6fp0x0Ezmi2wqfPjpGD8bUMWBqEXaW5K1ITNAW6J0necf6zfBJL_wXpFcafzWWr0POkiip21fzl6OHmsaqmyF3bITJM3D4Vg8fXzH26qsTf1syzQFJlKBDYS7IQt"
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full rounded-2xl object-cover grayscale"
            />
          </div>

          <div className="space-y-6 md:w-1/2">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              The Hidden Cost of Ignoring Your Health
            </h2>
            <p className="text-lg leading-relaxed text-[var(--color-on-surface-variant)]">
              Left unchecked, these small daily annoyances turn into long-term struggles. Poor sleep
              affects your work, stiffness leads to chronic pain, and stress damages your
              relationships.
            </p>

            <ul className="space-y-4">
              {WARNINGS.map((w) => (
                <li key={w.id} className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-[var(--color-error)]">
                    warning
                  </span>
                  <span>{w.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

