import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const testimonials = [
  {
    quote: "After 3 weeks of these daily flows, my afternoon brain fog is finally gone.",
    name: "Anita R.",
    caption: "TSH improved in 3 months",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQgszPxq2BY0xA_t6SPoQHHMZOh7t4VBDGnAuR1kXujaf9PCPMdu7NMmeWbEi_n_KySGIQNzc0bxgd_4pp5Ph42R53qdgDL5gCvPMF8VMo31yRW_VOUAOJSg8u32aJjqKukgw-42RMAZuoXUttCkWgacRda2vYKLgr3Zd97VmXcfAiyrM-8wbOhF1dlpozhNk7GYgHKCaeM8U-09vET5JPI127iEMa9Z2yr1ZdfGlfrJfwNqZfqBnfg05ej5k982UsGm2tL__owgIF",
  },
  {
    quote: "The stress management techniques were a game changer. I'm finally sleeping through the night.",
    name: "Meera K.",
    caption: "Hypothyroidism Management",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAz7tPb4sf1Vxk50D712O9k97mc3t0hC43ZVn0m9-tnO-a3GT_0KFu45cwkwUqhNDXiTUx5p62YJT2Niv36NhOfWJt5GDM4lVrbUrCE15LjPkOinJhPbyMyxZNBKrlGzqFg3rQwsEAWUIgp1rpNAPpHidmQOVTH93UcIicGTZD4va4AJQV_X65gv_8bi9nOyBhZqT0_HbqIzcW3a6nSlQRnRPAVx3zpP3GC0S_oYTJ0lpkbjqruKv0-lzxguWK6tB4fHhHPCnkf4xh",
  },
  {
    quote: "The clinical explanations made so much sense. My energy levels are finally stable.",
    name: "Priya S.",
    caption: "Hashimoto's Patient",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB18D8ENJ_ODtdNM4R6RKj0HrAHPxZEFW0MpYL1nIMwinb4HnIlu39WYCyXZDpCcy2JxqmvXnhn2JxXI-9RxkRgzMIcdaV7oZSUw1azxahOt55gIy_-_9gyYjmXv3dFmbwCqPlDF_Mrk6f60Zu6y9ak2pKnBfMYZq-VpQJAL_ullLK0o0uHertz6XJSE8-B7QUph8MnBBiajR_O20qJs5tvlsbDrBy89HS7DM4-Jb3of_6iZVYKxbnAnLe6LA67VU1xumcMmOPW64NZ",
  },
];

export function YogaForThyroidTestimonials() {
  return (
    <ScrollReveal id="testimonials" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold">Real Stories of Renewal</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="relative rounded-2xl bg-[var(--color-surface)] p-6">
              <span className="material-symbols-outlined absolute right-4 top-4 text-6xl text-[color:rgb(126_0_146/0.2)]">
                format_quote
              </span>
              <p className="mb-6 italic text-[var(--color-on-surface)]">&quot;{item.quote}&quot;</p>
              <div className="flex items-center gap-3">
                <Image src={item.image} alt={item.name} width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-xs text-[var(--color-on-surface-variant)]">{item.caption}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
