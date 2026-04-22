import { ScrollReveal } from "./ScrollReveal";

export function SalesAuthority() {
  return (
    <ScrollReveal className="bg-surface-container-high py-24" id="drshah">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 rounded-4xl bg-surface-container-lowest p-8 shadow-xl shadow-primary/5 md:flex-row md:p-16">
          <div className="w-full md:w-2/5">
            <img
              className="w-full rounded-2xl shadow-lg"
              alt="Dr. Shah Alam"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjkfCLJ9dnqn7TvZa1H3r0lgWjKYuUYuMmHIXo8odwVD1b9kDS741wvM_5DVP-rOh8fWv_BqMA2K0AoLJMj4oLV_-O2T9LVUXzTH4YQB7TN5wFoz3A3mawMw_YdtIewl9Dsr_k1OmlxDMoXxGqkZGZQ2tNpSwLGrgcGB6Ma_qf-lr9Yk3K6LP56PUFQeFxbsJfMu2_w0mDyKXuj2Cg6TOb3BC9oFi1w7mqWb2yctlf8J6LUd5tHqf4GjiIBR-tLPYlfKhY3-FLFBw"
            />
            <div className="clinical-accent mt-8 flex justify-center text-2xl italic text-primary">
              Dr. Shah Alam
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="mb-4 text-lg font-bold uppercase tracking-widest text-primary-container">
              Meet Your Mentor
            </h2>
            <h3 className="mb-6 text-4xl font-extrabold">
              আপনার আরোগ্যের যাত্রায় অভিজ্ঞতার ছোঁয়া
            </h3>
            <div className="space-y-6 leading-relaxed text-on-surface/80">
              <p>
                ডাঃ শাহ আলম গত ১৫ বছর ধরে অর্থোপেডিক ও পিএলআইডি রোগীদের চিকিৎসায়
                নিবেদিত প্রাণ। তিনি তার দীর্ঘ ক্যারিয়ারে ৫০০০-এর বেশি রোগীকে কোনো
                প্রকার অপারেশন ছাড়াই সুস্থ করে তুলেছেন।
              </p>
              <p className="clinical-accent border-l-4 border-primary py-2 pl-6 text-xl italic">
                &quot;আমার লক্ষ্য হলো মানুষকে ব্যথামুক্ত জীবনের আনন্দ ফিরিয়ে দেওয়া,
                কোনো জটিল সার্জারি বা আজীবন ঔষধের ওপর নির্ভরশীলতা ছাড়াই।&quot;
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <li className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>{" "}
                  MBBS (DMC)
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>{" "}
                  MS (Orthopedic)
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>{" "}
                  Spinal Biomechanics Specialist
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>{" "}
                  Consultant at Dhaka Ortho
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
