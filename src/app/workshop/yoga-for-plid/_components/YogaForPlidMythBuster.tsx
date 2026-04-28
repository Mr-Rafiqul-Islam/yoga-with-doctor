import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const MYTHS = [
  {
    id: "rest",
    num: "1",
    title: 'Myth: "Complete Rest is Best"',
    body: "Fact: Inactivity actually causes the supporting muscles to atrophy, making your spine more vulnerable and the pain persistent.",
  },
  {
    id: "surgery",
    num: "2",
    title: 'Myth: "Surgery is the Only Fix"',
    body: "Fact: Studies show that for many PLID cases, conservative therapy and movement are just as effective as surgery in the long term—without the risks.",
  },
] as const;

export function YogaForPlidMythBuster() {
  return (
    <ScrollReveal className="px-8 py-20" as="section">
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
          The Truth About Back Pain
        </h2>
        <p className="text-[var(--color-on-surface-variant)]">
          Breaking the myths that keep you stuck in pain.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 md:grid-cols-4">
        {MYTHS.map((m) => (
          <div
            key={m.id}
            className="lift-hover premium-shadow rounded-2xl border border-[var(--color-outline-variant)] bg-white p-8 md:col-span-2"
          >
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffdad6] font-bold text-[var(--color-tertiary)]">
                {m.num}
              </div>
              <h3 className="text-[20px] font-semibold">{m.title}</h3>
            </div>
            <p className="text-[var(--color-on-surface-variant)]">{m.body}</p>
          </div>
        ))}

        <div className="premium-shadow rounded-2xl bg-[var(--color-primary)] p-8 text-[var(--color-on-primary)] md:col-span-4">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="max-w-xl">
              <h3 className="mb-2 text-2xl font-semibold">The Real Solution?</h3>
              <p className="opacity-90">
                Targeted, clinically-safe movement that encourages natural disc resorption and
                spinal decompression.
              </p>
            </div>
            <a
              href="#register"
              className="whitespace-nowrap rounded-full bg-white px-8 py-3 font-bold text-[var(--color-primary)]"
            >
              Learn More in Workshop
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

