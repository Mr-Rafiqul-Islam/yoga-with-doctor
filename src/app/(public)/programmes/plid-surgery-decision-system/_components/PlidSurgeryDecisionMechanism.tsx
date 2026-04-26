import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const SPINE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC7_FVvjJkI4nHRW_Mqa3nUW9-EUAWcfy-PByUpVtJhqaQhLgrUZEqrT2tXGkftuTdNr47XRkQoD1JCA7JVnZktLSWlVcL8T9399uJG2p4xwScmrYibzhgKUbrpp9NUiF0edyDJjkXkTXzs7f9XF7N-owNlL5-2DXhbESTMduCNYSjFK3Yqk2FI1wxqKH99iR3G_Cxim6ywh0xsj0bu9DAD1D8nWNJIb8g8PFVsEhOY_Q2n8RWH3qJc769YadB2uXYTLIVl8nhgCZk";

const POINTS = [
  {
    title: "Natural Decompression",
    description:
      "Specific postures create supportive decompression, encouraging the disc to move toward its original position.",
  },
  {
    title: "Muscular Stability",
    description:
      "Strengthen the “inner corset” of the core so the spine is protected from repeat micro‑trauma.",
  },
] as const;

export function PlidSurgeryDecisionMechanism() {
  return (
    <ScrollReveal className="relative overflow-hidden bg-surface py-20 md:py-28" id="science">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <Image
              alt="Spine model in clinical lighting"
              className="aspect-[4/5] w-full object-cover"
              height={1200}
              sizes="(max-width: 1023px) 100vw, 42vw"
              src={SPINE_IMAGE}
              width={960}
            />
          </div>
        </div>

        <div className="space-y-8 lg:col-span-7">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface md:text-5xl">
            Why Surgery Isn’t Your Only Option
          </h2>
          <p className="max-w-2xl text-lg italic leading-relaxed text-on-surface-variant md:text-xl">
            “The body has an innate capacity to heal a herniated disc if provided the correct
            mechanical environment.”
          </p>

          <div className="space-y-6">
            {POINTS.map((p) => (
              <div key={p.title} className="flex gap-5">
                <div className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary-fixed text-primary">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-bold text-on-surface">{p.title}</h3>
                  <p className="leading-relaxed text-on-surface-variant">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

