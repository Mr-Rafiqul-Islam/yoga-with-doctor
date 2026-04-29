import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { IMG } from "./regular-yoga-programme-assets";

const items = [
  {
    icon: "heart_broken" as const,
    title: "Emotional Exhaustion",
    body: "The constant background noise of pain drains your patience and joy for family and friends.",
  },
  {
    icon: "event_busy" as const,
    title: "Stolen Opportunities",
    body: "Saying 'no' to vacations, sports, or even picking up your children because your back might 'go out'.",
  },
  {
    icon: "pill" as const,
    title: "Chemical Band-aids",
    body: "Relying on painkillers that mask the symptoms while the underlying condition continues to degrade.",
  },
];

export function RegularYogaProgrammeProblem() {
  return (
    <ScrollReveal className="bg-surface md:py-24 py-16 lg:py-32" id="pain">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div className="lg:space-y-8 space-y-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold leading-tight text-center md:text-left lg:text-5xl">
              The Hidden Cost of <span className="text-error">Living in Pain</span>
            </h2>
            <p className="text-center mx-auto lg:mx-0 md:text-left text-base md:text-lg italic leading-relaxed text-on-surface-variant">
              &ldquo;It starts with a twinge. Then a tingle down the leg. Before you know it,
              you&apos;re missing out on the moments that matter most.&rdquo;
            </p>
            <ul className="lg:space-y-6 space-y-4">
              {items.map((item) => (
                <li className="flex items-start gap-4" key={item.title}>
                  <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-error-container">
                    <span className="material-symbols-outlined text-on-error-container">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg lg:text-xl font-bold">{item.title}</h4>
                    <p className="text-on-surface-variant">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-0 lg:pt-12">
              <div className="h-64 overflow-hidden rounded-lg shadow-lg">
                <Image
                  alt="Person holding lower back in discomfort"
                  className="h-full w-full object-cover"
                  height={400}
                  src={IMG.problem1}
                  width={400}
                />
              </div>
              <div className="h-48 overflow-hidden rounded-lg shadow-lg">
                <Image
                  alt="Medical professional with spinal model"
                  className="h-full w-full object-cover"
                  height={300}
                  src={IMG.problem2}
                  width={400}
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-48 overflow-hidden rounded-lg shadow-lg">
                <Image
                  alt="Person at desk with back pain"
                  className="h-full w-full object-cover"
                  height={300}
                  src={IMG.problem3}
                  width={400}
                />
              </div>
              <div className="h-64 overflow-hidden rounded-lg shadow-lg">
                <Image
                  alt="Anatomical vertebrae detail"
                  className="h-full w-full object-cover"
                  height={400}
                  src={IMG.problem4}
                  width={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
