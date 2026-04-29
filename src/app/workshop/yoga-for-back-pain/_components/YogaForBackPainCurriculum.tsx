import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const modules = [
  {
    number: "01",
    title: "Posture Audit",
    body: "Identify the 3 hidden posture killers that drive your pain profile.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGN9HsiXbyRJS-U39SI_wEnJqUdZb2gMnj3AsWjw1J3gkE_rjCgOFfpLbzqWwgIoAm_wKYhflzgZdNs0OT4D6tbrRap4ykcs2yz9Ry-EWiI5kuOn1nbj6ldS1prL30Vprgesri9N0--1haFbkeB9gjdg_tbqsfNsuNEJ7kvc04_1pf1k2BSh36mee5fdRN-g-FN1XxpVElcP5MhhanQxz2xQs2De3faKbSjlgef9ZaL_emaTa4yZl9y5pfBatDmASjUtYUEypESLwF",
  },
  {
    number: "02",
    title: "The Spinal Flow",
    body: "A 12-minute sequence to decompress the lumbar spine with no tools.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABSsnSYeRhOxcReLx71xg_9hVBvdNiEn9w_V5cpNvfmzDV4Ld-zfO05aGEHHHxpo3X6jWEUZCB08Q0IfXG73EagBdiL7IzhzoEoWBTzj3yDRH8NmkNu8HTfEsTv0_nXre-g36QJAq_5RWqrTzhMdA55y4uElmvPLLibaxC1ErHg-XI798v1X5qUgajifcZU8Vv0Ws7eIpwnB2P-AK8U1vJTAZDxrgeXL7ryetW1kJeZ6f-y0InyAUuZlz2rIwXOFLL7t4CQ-ihx7P0",
  },
  {
    number: "03",
    title: "Pain Management",
    body: "Quick first-aid movements to calm flare-ups before they escalate.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlnANzYVkuXE90dJCr8qTm1TQ2g-J7KLeYQi1mHbWmDioYuoMw9I7NLwCbFzayxW3vyEzwAk4W6P7Bx-twOGAvDsgm1u8AJcF_TZhOAzUAdlx4-V5j-s7oTXROVj4A9tTtlE5WEHKOPw3aYCNlcLOXRVwad2TKgYz6ac8UB0vIMA7fme9qxyLaxXbRVF_J1oXIhPFCDBwFPiAxDvPAUpezS1q5Mba5XO7U_HY-d52zQF3G00erJ7crKfxWi_7M3r0KN8ALRS-zOdqj",
  },
  {
    number: "04",
    title: "Sustainability",
    body: "Integrate these habits into a busy routine so pain stays away.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVSpV_YE0s59_w0LYTYLm73pd_vv6zZyFwiwe_rZhRWyT2PwfvHWmnu3bkXzcmWB4eRhAyGAtAaFrGB3BZebJnJTK5rNJCkSz-XMTZVAtHYYkoyszy79WjbnxbYijLPLv0aumGpu-GwEYz7ApGngtEXZmueNUt_WA-eY64tPF9dwFRDsQ-ioDSDk-tOScN_K-u209sQQFmguc5hsHjv3ikfrb_R0FYuOsoE1rAEvI48H9V0TsfFdE9ZmZnKL-U_ntONQalYJA2Ps4q",
  },
];

export function YogaForBackPainCurriculum() {
  return (
    <ScrollReveal id="programs" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">Workshop Curriculum</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {modules.map((item) => (
          <article
            key={item.number}
            className="group overflow-hidden rounded-3xl border-2 border-[var(--color-surface-container-high)] bg-white p-1 transition hover:border-[var(--color-primary)]"
          >
            <div className="mb-4 aspect-video overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={280}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <span className="text-xs font-bold uppercase text-[var(--color-primary)]">Module {item.number}</span>
              <h3 className="mb-2 mt-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-[var(--color-on-surface-variant)]">{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </ScrollReveal>
  );
}
