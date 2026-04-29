import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const BULLETS = [
  "Lower stress-induced hormonal spikes",
  "Improve pelvic blood circulation",
  "Gentle movements suitable for all levels",
];

export default function YogaForPcosSolution() {
  return (
    <ScrollReveal
      className="relative overflow-hidden bg-[var(--color-primary)] py-[var(--pcos-section-y)] text-[var(--color-on-primary)]"
      as="section"
    >
      <div className="pcos-solution-pattern pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="font-headline-lg">
            A rhythmic, restorative sanctuary for your soul.
          </h2>
          <p className="text-body-lg opacity-90">
            Our Yoga For PCOS system isn&apos;t about high-intensity fitness. It&apos;s a rhythmic,
            restorative practice that focuses on lowering cortisol, stimulating the endocrine system,
            and harmonizing your natural cycles.
          </p>
          <ul className="space-y-4">
            {BULLETS.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="material-symbols-outlined shrink-0 text-[var(--color-tertiary-fixed)]">
                  check_circle
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
          <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC01S9uhVaUtaK-McnKWFg6StXhzb2xnyL0TE8hiT4gtrtrez9x7MhlzeUADzGo3jvatMuRJKOpkr7OR2y4VgO_Yx9deV-byU9jNE1zChgHGg3c4hvtjR8WjT9b0O_M7i9Yta9wLO51wy_wFYRmfyw1rzs9MlJHPKrjH-EKtUwb3YHNMXDHRpjlQQUnZGgtbIEi28VvSwfDKsNazfrExtBIS3XqQsBSSNFBRcyHqUdKi-XtR5r351nae2jBZ9jkbp6f53ueZGMVkkK3"
              alt="Meditation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <p className="text-center font-medium">
            Join us for a 90-minute immersion into hormonal harmony.
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
