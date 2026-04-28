import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const FAQS = [
  {
    id: "safe",
    q: "Is this safe for chronic sufferers?",
    a: "Yes. Every movement is designed to be low-impact and neurologically soothing. We recommend consulting with your physician, but our protocols are designed for active pain scenarios.",
  },
  {
    id: "equipment",
    q: "Do I need any special equipment?",
    a: "No yoga blocks or mats required. You can even participate while sitting in a comfortable chair or lying in bed if you are currently experiencing an attack.",
  },
  {
    id: "recording",
    q: "Will there be a recording?",
    a: "Replays are sent to registered attendees only for 48 hours following the live session. However, we highly recommend attending live for the Q&A.",
  },
] as const;

export function YogaForMigraineFaq() {
  return (
    <ScrollReveal className="bg-white py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <h2 className="mb-16 text-center text-3xl font-semibold leading-tight md:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-3xl space-y-4">
          {FAQS.map((f) => (
            <details
              key={f.id}
              className="group cursor-pointer rounded-xl border border-outline-variant bg-surface-container p-6"
            >
              <summary className="flex list-none items-center justify-between text-lg font-bold">
                {f.q}
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-secondary">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

