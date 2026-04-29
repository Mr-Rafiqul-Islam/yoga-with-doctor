import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const CHECKS = [
  {
    id: "cortisol",
    title: "Lower Cortisol",
    body: "Switch your body from fat-storage mode to fat-burning mode.",
  },
  {
    id: "metabolism",
    title: "Boost Metabolism",
    body: "Deep tissue activation that keeps you burning calories for 24 hours.",
  },
  {
    id: "mindful",
    title: "Mindful Connection",
    body: "Stop emotional eating by reconnecting with your body's true hunger cues.",
  },
] as const;

const IMAGES = [
  {
    id: "img1",
    alt: "Woman doing a dynamic yoga stretch in bright studio",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-fTXJXml-YgTlL2v3nHTH6PD4AYATC5GbqWCZitrlalfmbMdh9_6g2ax2ec77h7WiNaA6V6tdB8XlaylgwebXDiNka_gd6J6wP8eDRmMoXWfNVbyd1-RmAv4NvuVDeKHEy9ujNdiatypB3nJNNK4Bnx1As7pfKTUdsLpIdi4EJOpgyw5wE2BK8_jAPwL_UowLW4Pt_h1gI-5Qo3_PlNto87-6IgYkxg3qShAzunR_11tdqdxK8_2T7WomRJkw338vA_4TMKpR7yW8",
    className: "mt-8",
  },
  {
    id: "img2",
    alt: "Close up of hands doing a yoga mudra during meditation",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAor6RNeW3UVQKylDlamGpzbJH5TXa7zl7nQ7ptHPF-IPire_IOQc2dieJLZL_DpH90GtiKYfsLC_sc1vc0kgYlcaNoqYMOCRBVvC-f0F1Xs68ucZPWfflSEk_fVBIrjTNBYNgCLoh_tDbF7VTujdFBgJe7xCLdyywqFTAWWKRf8ctRoCnfJM0Gu8c5g9g-tsa6gSOkhnlQeQn3PjhkYrU8rJLP2-wqflcRJYaTDcJtuN5OADQI8Oypd4cBtgs9fmddSZcXHzFBHo2O",
    className: "",
  },
] as const;

export function YogaForWeightLossSolution() {
  return (
    <ScrollReveal className="py-20" id="method">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            {IMAGES.map((img) => (
              <Image
                key={img.id}
                alt={img.alt}
                src={img.src}
                width={900}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`aspect-square rounded-2xl object-cover shadow-lg ${img.className}`}
              />
            ))}
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl">
              The Metabolic Flow Solution
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-[var(--color-on-surface-variant)]">
              YogaFlow isn&apos;t just about flexibility. It&apos;s a scientifically designed method
              that
              combines <span className="font-bold">Dynamic Breathwork</span> with{" "}
              <span className="font-bold">Muscle-Toning Asanas</span>.
            </p>
            <ul className="space-y-4">
              {CHECKS.map((c) => (
                <li key={c.id} className="flex items-start gap-3">
                  <span className="material-symbols-outlined material-symbols-outlined--fill text-[var(--color-primary)]">
                    check_circle
                  </span>
                  <div>
                    <span className="text-[18px] font-semibold text-[var(--color-on-background)]">
                      {c.title}
                    </span>
                    <p className="text-sm text-[var(--color-on-surface-variant)]">{c.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

