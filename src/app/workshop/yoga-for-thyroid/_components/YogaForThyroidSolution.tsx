import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const points = [
  "Gentle glandular stimulation through specific asanas",
  "Pranayama techniques to reduce cortisol",
  "A mindful approach to holistic lifestyle changes",
];

export function YogaForThyroidSolution() {
  return (
    <ScrollReveal className="bg-gradient-to-b from-white to-[var(--color-surface-container-low)] px-6 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div className="relative min-h-[360px] overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd8RnhdlhGTTTw-9vqhYg5hWMBfYvss-1d6l1ycxkIAn1c2vORsd0h5tFL3j0woQWkxd0ddLsDKOON3bIEC0nTsIzfsSKYzg2rN1HQ6sVy6HwazMfEh3FQ2RnUdGmHCLEslDAgEiIut1FY-_YBYyhouhvZLeofgzfjCsu67S-TRsrBlEjRer-g2GwSEji3ByjgpFoqtYSiOwWD1JeQ5fPc_08Nd0xOglybCvl3jiJAyJyUmYnBh_gVnJcKDBuseQRdL8rHzJ_b1_87"
            alt="Meditative yoga pose"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-[var(--color-secondary)]">Recovery is possible with awareness</h2>
          <p className="text-lg text-[var(--color-on-surface)]">
            Introducing the <strong>Thyroid-Specific Yoga Management System</strong>.
          </p>
          <ul className="space-y-3">
            {points.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[var(--color-secondary)]">check_circle</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  );
}
