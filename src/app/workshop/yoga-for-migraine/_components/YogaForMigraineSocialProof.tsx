import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const TESTIMONIALS = [
  {
    id: "emma",
    quote:
      '"I haven\'t had a major attack in 3 months. This workshop literally gave me my career back."',
    name: "Emma R.",
    role: "Graphic Designer",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_3hW5hXHrTZqJ7hycoyfB2Lg_ezPqNR87QvvsCr3jvFYrPNoPekZkudA8CM5pE_To9wkXtUEQb3QtHG-ktbxMrTJUsm8-S3tIa3bOz5L5cdQ7SPuzJwXljemj-LSqZNbQ7nlHKFpazUZbupMIsauI6vYevxQYDdLeN7_BiDkLF7-juSuXw6zy50x8vFVEnDSP5AHoH5Hn9z3Syyc0fASUqcYsi3jCil9HAH3LO3x0BhDVATTnEcL-1laxIs5PIdlXuBcKMWoZtTCf",
  },
  {
    id: "david",
    quote:
      '"The breathing techniques worked during my last aura. It never progressed to full pain. Miraculous."',
    name: "David K.",
    role: "Software Engineer",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC48tm92tRYcx5IZur_G8kysIWnUz5F8ssWshr4eyeLB1xkrwyMKHmo1sPQGA5Ko7stoOOO42JmWg9RPm98xoCz4Pn4mI_719OTtBQd8c3VzVF90YnopxhTIsypnCCqSl_z6dwtZHDwrbAEaNs7IyrtbwQDNYxdkt_ph-ahbLskUbCRiIqvvdSlxXJiozPDOzlK8We-8UozPvtuCWmiNZGc3YBEloNdBkIHii7QrCfJdVLfYzu3H3OiWKGhyG1QzNcx_mvevKuMcX1O",
  },
  {
    id: "sarah",
    quote:
      "\"Finally, someone who understands the clinical side of migraine. This isn't just stretching.\"",
    name: "Sarah M.",
    role: "Healthcare Admin",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWN1MtmoVhCypiizqzjsRvnNuydPCbQ2i_EqkoKFDqrLJZqPYMtl7gXMOVgL-KlGUh8HM_2AA1p5n1G-BJhhwJb-nCaqjtKVHM1kKu0eJnI0h5boU-4c_VWjinTNQ7LldawdbLFSYwaf25yMePhjs9RvzVdRuMW7vBD5GWj07fk7UyDBl6sQoK9ci2a_F4m4PtM2b-9nDGQxcdzDxI_2tbCkbI-Sd4zXoYfGzZeGaAihFYP83skzAFXLDt8mg5n15a8MLoogkvDaz4",
  },
] as const;

function Stars() {
  return (
    <div className="mb-4 flex text-primary" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={`star-${i + 1}`}
          className="material-symbols-outlined--fill material-symbols-outlined"
        >
          star
        </span>
      ))}
    </div>
  );
}

export function YogaForMigraineSocialProof() {
  return (
    <ScrollReveal className="bg-white py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <h2 className="mb-16 text-center text-3xl font-semibold leading-tight md:text-4xl">
          Join Thousands of Pain-Free Graduates
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="rounded-2xl bg-surface-container p-8 shadow-sm">
              <Stars />
              <p className="mb-6 text-base leading-relaxed text-on-surface">{t.quote}</p>
              <div className="flex items-center gap-4">
                <Image
                  className="h-10 w-10 rounded-full object-cover"
                  width={40}
                  height={40}
                  sizes="40px"
                  alt=""
                  src={t.img}
                />
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-xs text-secondary">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

