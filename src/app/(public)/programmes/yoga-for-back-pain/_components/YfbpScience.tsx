import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const CARDS = [
  {
    title: "The Problem: Compression",
    body: "Modern life forces us into forward-leaning positions that crush the intervertebral discs, leading to inflammation and nerve pressure.",
  },
  {
    title: "The Solution: Traction",
    body: "Our yoga protocol uses gravity and specific isometric holds to create space between vertebrae, allowing hydration to return to the discs.",
  },
] as const;

export function YfbpScience() {
  return (
    <ScrollReveal className="bg-slate-900 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl space-y-12 text-center">
        <h2 className="yfbp-text-headline-lg">The Science of Spine Alignment</h2>
        <div className="grid gap-8 text-left md:grid-cols-2">
          {CARDS.map(({ title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6"
            >
              <p className="mb-4 text-[var(--yfbp-primary-fixed)] yfbp-text-body-lg">{title}</p>
              <p className="text-slate-400 yfbp-text-body-md">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
