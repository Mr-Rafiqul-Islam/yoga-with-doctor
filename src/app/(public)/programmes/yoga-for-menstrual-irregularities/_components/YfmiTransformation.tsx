import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const BEFORE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDt7nEogY9vyWyKW3gX6roib7w70WNOZw7Zxa-9sJrWffdx-kMXilVjdvgYo6GZdMHgGOycbEpC-i34Gm3PaCoqFFsN6B9RgWWcy6AKwBqTBCpHCXlbqPNknCfY3wJlrh5BESPUFqO3pPln_l0p7u2R-9MywpX4-UtPPmBXwYwFo1o_Fqgzczz5GxxazxuP9bsaQ7w_5SUU7tQ7157yjBfwl-QYWClgdPh8HAjqu1UCly64OIXd9kmbpuyZRC4tdhpnW3aNBVaV7jyx";
const AFTER_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBpqdOD0we69gMWboT-zbfVpJh0PWvil_et9PDvGyUsbTflghYj4COFF-gixooJMGZ7byDYimsWyJ1kf-AY7eiWFEcfMDXUHI8Uh64-HbWMuQrTF1C8WZ9WIyrlQEczTVyY3K2ES-qBCaBQ5b4cSUlflI5FZoySLzjMMi7eZxnEnoagWAtboeiPEvYC75az0fzcmYgvxNo7_E9phHsaICYhnak_cdYp49mRx7cPFKpB4fXcQFzuvcD19PqkSZsQ2qb6R9eoaktA8heT";

type Benefit = { title: string; body: string };

const BENEFITS: Benefit[] = [
  {
    title: "Predictable Cycles",
    body: "Wake up knowing exactly where you are in your cycle without anxiety.",
  },
  {
    title: "Emotional Stability",
    body: "Balanced hormones mean fewer mood crashes and more consistent energy.",
  },
  {
    title: "Deep Body Confidence",
    body: "Learn the language of your body and how to respond to its needs.",
  },
];

export function YfmiTransformation() {
  return (
    <ScrollReveal className="mx-auto mb-12 max-w-7xl px-6 md:px-12" delay={0.08}>
      <div className="grid items-center gap-12 rounded-[32px] bg-[color:var(--yfmi-surface-container-lowest)] p-8 shadow-xl md:p-16 lg:grid-cols-2">
        <div>
          <h2 className="yfmi-headline-lg mb-6">
            Imagine a month where you feel <span className="italic text-[color:var(--yfmi-primary)]">completely in tune</span>.
          </h2>
          <ul className="space-y-6">
            {BENEFITS.map((b) => (
              <li key={b.title} className="flex items-start gap-4">
                <span className="material-symbols-outlined shrink-0 text-[color:var(--yfmi-tertiary)]">check_circle</span>
                <div>
                  <p className="font-bold">{b.title}</p>
                  <p className="text-sm text-[color:var(--yfmi-on-surface-variant)]">{b.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[color:var(--yfmi-surface-container)] p-4">
              <p className="absolute top-4 left-4 z-10 rounded-full bg-[color:rgb(255_255_255/0.8)] px-3 py-1 text-[10px] font-bold">
                BEFORE
              </p>
              <Image
                alt="Before: stressed and tired"
                className="size-full object-cover opacity-60 grayscale"
                height={400}
                sizes="40vw"
                src={BEFORE_IMG}
                width={320}
              />
            </div>
            <p className="yfmi-label-sm text-center text-[color:var(--yfmi-on-surface-variant)]">Confused & Exhausted</p>
          </div>
          <div className="space-y-4 pt-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-4 border-[color:rgb(93_74_197/0.2)] bg-[color:var(--yfmi-primary-fixed-dim)] p-4">
              <p className="absolute top-4 left-4 z-10 rounded-full bg-[color:var(--yfmi-primary)] px-3 py-1 text-[10px] font-bold text-white">
                AFTER
              </p>
              <Image alt="After: balanced and empowered" className="size-full object-cover" height={400} sizes="40vw" src={AFTER_IMG} width={320} />
            </div>
            <p className="yfmi-label-sm text-center font-bold text-[color:var(--yfmi-primary)]">
              Balanced & Empowered
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
