import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const testimonials = [
  {
    quote:
      "After 10 years of chronic sciatica, I was skeptical. Two weeks into this routine and I am hiking again.",
    name: "Mark T.",
    role: "Software Engineer",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVAm3jBVWxI-GrgOzJBl2F-FgTefi4ylC_E_ZfQTKOb6jKOL_mLV7R1Vxljzk1fnHVOMeEQ_zckPhtDed69uAbuAP-G6g2ZuUGebe6F7Jc43FKEW93ORmpmptXju-xx2UXOgisXeD4GLyNrcZ24WG6FRJmyeKTPKWwSDEmda4mWC3t2MwKz_Iuj7f5PCwv0VfbTXiXDPBjJuwtYxfR_Mv_lsY9Rlf28ubzZ0P5IWR3H9mO8ev1ro1kqkMwWdK826Ifl78ruWA795Ng",
  },
  {
    quote: "The pain first-aid movements are magic. I can now stop flare-ups in minutes instead of days.",
    name: "Sarah L.",
    role: "Teacher",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyD1yzL-i5to9lJF0fmWBOCe2-OmoK3D47aaFRzJqtA6DLQ9yCDaOb0t8GwoIxx-b04HUhN9PQ317M_mrZnZGyfB6KmSFfWtZAC6k_znVKPQ0sSRgHtxarn99Rbc9ldTN8bfwJD3Zcwb4nCRa6BvdUtOEUBFLl1Kn4LOKg8F438_Ce5ROlwbNUsmIR52-bukQMwK1h5QtLPhLn2I6srEGRMWuREEouzmgxL7M5vk-IHl7KB0oDyg4ai1ptPHVStG5u_Rj5l2Asq-K9",
  },
  {
    quote: "No fluff, just science-backed movement that works. Best free workshop I have attended.",
    name: "David R.",
    role: "Retired General Contractor",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1PStKpkSy2e_cOuM2UhNIkWViAhnQ5cygufcIBV76JxHWIIa49J8IBgTqKMFrWeIUUobqEthdjRqLR6v4dbLhBJFgA6fyXaLNT6U95N4O92cGA2dy28ME2kHc-ryTY6Fp5fM8brL7ZDPq17HtUA5QlJIaH9m1NhC2srX3rRLTkN2WJMknGsxuRKmSEuaOlmqQL_gXMVgE2xaCEORtexBX2PG_AmPb272fT5isd1X5FMrELEI_-vnKDaqtdG9CtizRwuEQAV_3fWPi",
  },
];

export function YogaForBackPainTestimonials() {
  return (
    <ScrollReveal id="success" className="bg-[rgb(var(--color-secondary-container-rgb)/0.2)] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">Real Stories of Recovery</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-2xl border border-[rgb(0_109_61/0.15)] bg-white p-8 shadow-sm">
              <div className="mb-4 flex gap-1 text-[var(--color-action-orange)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={`${item.name}-${i}`} className="material-symbols-outlined material-symbols-outlined--fill">
                    star
                  </span>
                ))}
              </div>
              <p className="mb-6 italic">{`"${item.quote}"`}</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-slate-200">
                  <Image src={item.image} alt={item.name} width={48} height={48} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-xs text-[var(--color-on-surface-variant)]">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
