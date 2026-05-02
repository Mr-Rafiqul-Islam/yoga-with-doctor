import Image from "next/image";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

import { YftSectionHeader } from "./YftSectionHeader";

type BentoVariant = "wideVideo" | "mint" | "gray" | "wideNutrition";

type BentoItem = {
  variant: BentoVariant;
  num: string;
  title: string;
  body: string;
  value: string;
  valueClassName: string;
  imageSrc?: string;
  imageAlt?: string;
  imageGrid?: { src: string; alt: string }[];
};

const MODULES: BentoItem[] = [
  {
    variant: "wideVideo",
    num: "1",
    title: "30-Day Guided Video Program",
    body: "Daily therapeutic yoga sessions tailored to thyroid sub-types. Each session is low-impact but high-biological-reward.",
    value: "Value: $297",
    valueClassName: "font-bold text-[color:var(--color-primary)]",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqz1YwdSnO6ZkADwL2sEqAbncZvYjMhT6UEe8IMD8wMop6oRWNN_kjKm9PqoTZuBFJgHOne09LaLR1VJrRIGjgKO7fMAYRx46_WlxGrD0rAeXorFa6qeLHfExIoLjcPoJ-jAyz9GikPqJ85RoBYTIR6m2VaUfyJQ5RKKdkrHx7UPIif-xyICt8AiYywikqJsbJoh82lgKbm1J9sSGwHtYxhOt1XFQM5R8CHnx_f3qYXxOdl9rsh88jIui3GZn_07BM6oJVvsmjRflA",
    imageAlt: "Tablet displaying yoga course video in a clean minimalist living room",
  },
  {
    variant: "mint",
    num: "2",
    title: "Hormone Lifestyle Blueprint",
    body: "A step-by-step roadmap to environment, sleep, and activity synchronization.",
    value: "Value: $147",
    valueClassName: "text-lg font-bold",
  },
  {
    variant: "gray",
    num: "3",
    title: "Rapid Energy Reset",
    body: "Micro-routines for when you need a natural energy boost without caffeine.",
    value: "Value: $97",
    valueClassName: "font-bold text-[color:var(--color-primary)]",
  },
  {
    variant: "wideNutrition",
    num: "4",
    title: "Anti-Inflammatory Nutrition",
    body: "Thyroid-supportive meal frameworks designed by clinical nutritionists.",
    value: "Value: $197",
    valueClassName: "font-bold text-[color:var(--color-secondary-fixed-dim)]",
    imageGrid: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx1alOUCFC6Ql5w0kMKBNm6U90NaMD6v15rWWK1MGbCjNEBYOoFMbLmRq2VskD6rYjWE-xiPF5pJ_X4Y0ZsB5yW1NJvsDpMlqrjGK6LxzImyvhrHriU1c1CGDuo3qvEdZvkdjedFL6b97MsTl7LFhxGMAb6cC7bC6l3RQ5x2Ar1h9Hvrt-CMPNU4cEZzVcABM1D4MzQA-d2oPdRItqZ0F5ED28YsLA6qY6fihNNNNkK5j97mSu9QqllbOW2aBzxLDalOag4pfT-IE1",
        alt: "Healthy green salad with avocado and seeds",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0VciryipUzTIR7HTi2g3_QWib-ySzuJUUyTkWtoJ-dBA6niq2hQ0JXrQDPNxT_wwVXo5FhoFEt1kU5i8jDFC94v3ZOTar341iPyUz4NNQF66T0P712Ar-iLSLjWMnOlMNcdYobRXObp-APamVYhgiCnUYRs7-pi98p5hsDJ_tUu1vFe1V6TJAvbU9oQMlf4SKCJmYf_MLt1RoYT7npb5h33pl0TZ0jmplT-etExQ4V2PbT454rAyJdni0TehFt__0yHgG7ejqLMRb",
        alt: "Clean healthy meal prep containers",
      },
    ],
  },
];

function BentoCard({ item }: { item: BentoItem }) {
  if (item.variant === "wideVideo") {
    return (
      <div className="flex flex-col items-center gap-10 rounded-3xl bg-[color:var(--color-surface-container)] p-10 lg:col-span-2 md:flex-row">
        <div className="flex-1 space-y-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-primary)] font-bold text-[color:var(--color-on-primary)]">
            {item.num}
          </div>
          <h3 className="yft-text-h2">{item.title}</h3>
          <p className="yft-text-body-md text-[color:var(--color-on-surface-variant)]">{item.body}</p>
          <span className={item.valueClassName}>{item.value}</span>
        </div>
        <div className="flex-1">
          {item.imageSrc && item.imageAlt ? (
            <Image
              alt={item.imageAlt}
              className="rounded-xl shadow-xl"
              height={400}
              src={item.imageSrc}
              width={600}
            />
          ) : null}
        </div>
      </div>
    );
  }

  if (item.variant === "mint") {
    return (
      <div className="space-y-6 rounded-3xl bg-[color:var(--color-secondary-fixed)] p-10 text-[color:var(--color-on-secondary-fixed)]">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-on-secondary-fixed)] font-bold text-[color:var(--color-secondary-fixed)]">
          {item.num}
        </div>
        <h3 className="yft-text-h2 leading-tight">{item.title}</h3>
        <p className="yft-text-body-md opacity-80">{item.body}</p>
        <span className={item.valueClassName}>{item.value}</span>
      </div>
    );
  }

  if (item.variant === "gray") {
    return (
      <div className="space-y-6 rounded-3xl border border-[color:var(--color-primary)]/10 bg-[color:var(--color-surface-container-high)] p-10">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-primary-container)] font-bold text-white">
          {item.num}
        </div>
        <h3 className="yft-text-h3">{item.title}</h3>
        <p className="yft-text-body-md text-[color:var(--color-on-surface-variant)]">{item.body}</p>
        <span className={item.valueClassName}>{item.value}</span>
      </div>
    );
  }

  /* wideNutrition */
  return (
    <div className="flex flex-col items-center gap-10 rounded-3xl bg-[color:var(--color-inverse-surface)] p-10 text-[color:var(--color-inverse-on-surface)] lg:col-span-2 md:flex-row">
      <div className="flex-1 space-y-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-primary)] font-bold text-[color:var(--color-on-primary)]">
          {item.num}
        </div>
        <h3 className="yft-text-h2">{item.title}</h3>
        <p className="yft-text-body-md opacity-70">{item.body}</p>
        <span className={item.valueClassName}>{item.value}</span>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-2">
        {item.imageGrid?.map((img) => (
          <Image
            key={img.src}
            alt={img.alt}
            className="h-32 w-full rounded-lg object-cover"
            height={128}
            src={img.src}
            width={400}
          />
        ))}
      </div>
    </div>
  );
}

export function YftProtocol() {
  return (
    <ScrollReveal className="bg-[color:var(--color-surface-container-lowest)] px-8 py-32" delay={0.15} id="method">
      <div className="mx-auto max-w-7xl">
        <YftSectionHeader
          className="mb-20"
          subtitle="A comprehensive 5-pillar approach to hormonal restoration."
          title="The Thyroid Yoga Protocol"
          titleClassName="text-[color:var(--color-primary)]"
        />
        <div className="mb-20 grid gap-8 lg:grid-cols-3">
          {MODULES.map((m) => (
            <BentoCard key={`${m.num}-${m.variant}`} item={m} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
