import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YogaForWeightLossAgitation() {
  return (
    <ScrollReveal className="overflow-hidden bg-[var(--color-on-secondary-fixed)] py-20 text-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:px-12">
        <div className="order-2 md:order-1">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            The Weight Loss Trap is Real.
          </h2>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed opacity-85">
              Most people think the answer is{" "}
              <span className="font-bold text-[var(--color-secondary-container)]">
                &quot;doing more.&quot;
              </span>{" "}
              More cardio, more restrictions, more willpower.
            </p>
            <p className="text-lg leading-relaxed opacity-85">
              But this only leads to high cortisol—the &quot;stress hormone&quot;—which tells your body
              to{" "}
              <span className="font-bold text-[var(--color-secondary-container)]">store fat</span>,
              specifically around your midsection.
            </p>
            <div className="rounded-xl border border-white/10 bg-white/10 p-6">
              <p className="font-semibold italic opacity-90">
                &quot;I was working out 6 days a week and eating only salads, but the scale
                wouldn&apos;t move. I didn&apos;t realize my body was in survival mode.&quot;
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <Image
            alt="Frustrated person"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuArYXpeYgRsC_9L9bXczTORfw3P9t6IuWsCtaqXnIgDm3oKKhwp7ziiXUD_ChDnCPE_DRMLYoPXBRiEU5uPCq3US5SsrXV-3OsxKKobL9NpszAyImtfkSf1-wFUEBzf2bkFdiPR7PiGdrXKceareuJGjw5fhj8IzDyHiGTKTg3Wddhdynlsea_c9RHDXlfNmQE8tfNpVTXE8QJ_Pl4T5kXbsmbru1bcODG9AJA6vO6WmwUflWGx-Ok3DvuOdgK4lHPvXTR1LGVwUv71"
            width={1200}
            height={900}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-3xl shadow-2xl grayscale transition-all duration-700 hover:grayscale-0"
          />
        </div>
      </div>
    </ScrollReveal>
  );
}

