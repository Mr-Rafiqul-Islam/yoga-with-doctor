import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const struggles = [
  {
    title: "Missed Moments",
    body: "Missing out on time with your kids or grandkids because you are afraid your back will go out.",
  },
  {
    title: "Constant Distraction",
    body: "The dull ache at your desk kills productivity and leaves you exhausted by afternoon.",
  },
  {
    title: "Fear of the Future",
    body: "Worrying that this pain is your new normal and may eventually lead to surgery.",
  },
];

export function YogaForBackPainAgitation() {
  return (
    <ScrollReveal className="px-6 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <div>
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">When normal life becomes a struggle</h2>
          <div className="space-y-6">
            {struggles.map((item) => (
              <article key={item.title} className="flex gap-4">
                <span className="material-symbols-outlined mt-1 text-[var(--color-error)]">block</span>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-1 text-[var(--color-on-surface-variant)]">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtO1plsYHZuO3QOReORHmBoYu2TfSb23PYLma6ClWxEL82MNss-CIM1h7qrwDjynIuvT3Kgrtxw9LWAnsEAXzCNttku0xvh60qCReds1gw_LHc-ViKG1pf-fn3rjbEytWky70JnF4byZKJeQwjMDWDHBvZBuy5mvFlhBipVnLDPBQKeSn_qUECI2MuXDKSF7zrFy0xuEPlEWlO1_JiInKKedQV_x69d0aSTOm-zYvVUrI7N2DTs-nNd3wBdl1aIoOPhQd5cDf2ZO0m"
            alt="Person struggling with lower back pain in home office"
            width={900}
            height={700}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/65 to-transparent p-7">
            <p className="italic text-white">
              "I felt like I was 80 years old in a 40-year-old body. I needed a real solution."
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
