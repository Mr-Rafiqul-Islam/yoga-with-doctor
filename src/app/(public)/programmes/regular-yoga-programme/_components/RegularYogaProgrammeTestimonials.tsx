import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { IMG } from "./regular-yoga-programme-assets";

const fillStar = { fontVariationSettings: "'FILL' 1" } as const;

const stories = [
  {
    quote:
      "I was scheduled for surgery in 3 weeks. I started Dr. Shah's protocol as a last-ditch effort. By week 2, my sciatica was 80% gone. Surgery cancelled.",
    name: "Abdul Haq",
    sub: "Recovered in 6 Weeks",
    src: IMG.story1,
  },
  {
    quote:
      "The medical explanation made me trust it. It's not just 'stretching', it's intentional movement that actually works. I can play with my grandkids again.",
    name: "Mizanur Rahman",
    sub: "Chronic PLID Sufferer",
    src: IMG.story2,
  },
  {
    quote:
      "The SOS protocol is a lifesaver. I used to be bedridden for days after a flare-up. Now I can manage it in 20 minutes and keep moving.",
    name: "Ronjit Sorkar",
    sub: "Active Lifestyle Restored",
    src: IMG.story3,
  },
];

function Stars() {
  return (
    <div className="mb-6 flex text-yellow-300">
      {Array.from({ length: 5 }).map((_, i) => (
        <span className="material-symbols-outlined" key={i} style={fillStar}>
          star
        </span>
      ))}
    </div>
  );
}

export function RegularYogaProgrammeTestimonials() {
  return (
    <ScrollReveal className="bg-surface-container-low py-24 md:py-32" id="stories">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-16 text-center font-headline text-3xl md:text-4xl font-bold">Recovery Stories</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {stories.map((s) => (
            <div className="relative rounded-xl bg-surface-container-lowest p-8 shadow-sm" key={s.name}>
              <Stars />
              <p className="mb-8 md:text-base text-sm leading-relaxed italic text-on-surface-variant">&ldquo;{s.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-secondary-fixed">
                  <Image alt="" className="object-cover" fill src={s.src} />
                </div>
                <div>
                  <p className="md:text-base text-sm font-bold">{s.name}</p>
                  <p className="md:text-base text-xs text-on-surface-variant">{s.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
