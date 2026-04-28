import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YogaForMigraineAgitation() {
  return (
    <ScrollReveal className="bg-surface-container-lowest py-20">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:px-12">
        <Image
          className="h-auto w-full rounded-2xl shadow-lg"
          width={1200}
          height={900}
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="A person holding their head in pain"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuButscuAFylTT3NM2BYFIf6hMjbX_G7Eb6rWXACsH3lz9wsaBb4aN5BEbgs_oPvyLdSA0mjoRLLPq0bD-zq3Uj7KUjI0mlJ5BqrkQgSJru8QnqhywSl2T8EZt62XNe3MMZqOvCzOrlxHGwF1FAuXKz7hcwbMbCOjn5vZrERHMylTRVV-lbtRiW_yVxrwvqQhXQLXQuBUwUYEdcamRuFX3xWVded83i2FZj2xnc34mL8HhoXACZ7gC_5oCFoK-eF2dc5cNljoAiEI8ZE"
        />
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-on-surface md:text-4xl">
            Migraine Steals Your Life’s Best Moments
          </h2>
          <p className="text-lg leading-relaxed text-secondary">
            It&apos;s the birthdays you missed, the projects you couldn&apos;t finish, and the constant
            fear of when the next attack will strike. You aren&apos;t just losing hours; you&apos;re losing
            your sense of self to a cycle of medication and recovery.
          </p>
          <p className="border-l-4 border-primary pl-6 text-lg italic leading-relaxed text-secondary">
            &quot;I felt like a ghost in my own family, waiting for the aura to fade so I could finally
            participate in life again.&quot;
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

