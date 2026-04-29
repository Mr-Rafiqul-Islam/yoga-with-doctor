import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const AUTH_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDKOk_YCitXb2IpxsR7PNnaswjKL5u5dW1cBeC7Q8bQHt_XqbfNJc6GymsoArlpPLhgYhfn5ElzsY5f1M4S032XUW9UDySvPd6fh1pVAXCRU1N9nUUu-WsNhnVBAmgugqNdNVEKkjg0n6RO8GCTNBRHP_Wnx6QEGN_GmPeka7OLIiQBTR1FoESGpvpIMoeO46rkjke8h4Hactr3JoP5TwCDPjtmYP4P-2yZg3xcnW1QihaIwBmQHcbS0Ud_WtjMldkSIomVBEges7SE";

const CREDENTIALS = [
  { icon: "verified" as const, label: "MD Certified" },
  { icon: "workspace_premium" as const, label: "Yoga Alliance" },
] as const;

const FEATURED_LOGOS = ["HEALTHLINE", "WEB MD", "FORBES"] as const;

export function YogaForHeartCareAuthority() {
  return (
    <ScrollReveal className="bg-teal-900 px-6 py-20 text-white" as="section">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="relative h-[420px] w-full overflow-hidden rounded-2xl shadow-2xl md:h-[480px]">
            <Image
              src={AUTH_IMAGE}
              alt="Professional female doctor in medical attire in a clinical office"
              fill
              className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="order-1 space-y-8 md:order-2">
          <h2 className="text-[32px] font-semibold leading-[1.3] text-[var(--color-primary-fixed)]">
            Guided by Clinical Experts
          </h2>
          <p className="text-lg leading-[1.6] opacity-90">
            Dr. Sarah Chen, a board-certified cardiologist and RYT-500 yoga instructor, bridges the gap between
            modern medicine and ancient wisdom. Her protocols are used by over 15,000 patients globally.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {CREDENTIALS.map((c) => (
              <div key={c.label} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[var(--color-primary-fixed)]">{c.icon}</span>
                <span className="font-semibold">{c.label}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-sm opacity-70">AS FEATURED IN:</p>
            <div className="mt-4 flex flex-wrap gap-8 opacity-50 grayscale">
              {FEATURED_LOGOS.map((name) => (
                <span key={name} className="text-xl font-extrabold">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
