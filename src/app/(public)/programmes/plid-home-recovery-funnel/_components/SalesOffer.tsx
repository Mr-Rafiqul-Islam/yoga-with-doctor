import { ScrollReveal } from "./ScrollReveal";

export function SalesOffer() {
  return (
    <ScrollReveal className="bg-primary py-24 text-on-primary" id="offer">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-4 text-lg font-bold uppercase tracking-widest text-primary-fixed-dim">
          Total Transformation
        </h2>
        <h3 className="mb-12 text-4xl font-extrabold md:text-5xl">
          আপনার আরোগ্যের ইনভেস্টমেন্ট
        </h3>
        <div className="relative rounded-3xl bg-surface-container-lowest p-8 text-on-surface shadow-2xl md:p-12">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-6 py-2 font-bold text-on-primary shadow-lg">
            Special Limited Offer
          </div>
          <div className="mb-10 space-y-4 border-b border-outline-variant/20 pb-10 text-left">
            <div className="flex items-center justify-between">
              <span className="text-lg">PLID Core Treatment Guide</span>
              <span className="font-bold">৳ ৫,০০০</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg">Custom Exercise Video Series</span>
              <span className="font-bold">৳ ৩,৫০০</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg">Spine Health Diet Plan</span>
              <span className="font-bold">৳ ১,৫০০</span>
            </div>
            <div className="flex items-center justify-between font-bold text-secondary">
              <span className="text-lg">Emergency Pain Protocol (Bonus)</span>
              <span>Free</span>
            </div>
          </div>
          <div className="mb-10 flex flex-col items-center gap-2">
            <span className="text-2xl font-bold italic text-on-surface/40 line-through">
              ৳ ১০,০০০
            </span>
            <div className="flex items-start gap-1 text-6xl font-extrabold text-primary">
              <span className="mt-2 text-3xl font-bold">৳</span> ২,৯৯৯
            </div>
            <p className="font-medium text-on-surface/60">আজকের জন্য বিশেষ ডিসকাউন্ট</p>
          </div>
          <a
            className="block w-full rounded-2xl bg-secondary py-6 text-2xl font-bold text-on-primary shadow-xl transition-all hover:scale-[1.01] active:scale-[0.98]"
            href="#checkout"
          >
            Get Instant Access Now
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}
