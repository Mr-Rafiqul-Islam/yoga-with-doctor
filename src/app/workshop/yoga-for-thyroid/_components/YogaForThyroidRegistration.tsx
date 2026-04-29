import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const fields = [
  { label: "Your Name", type: "text", placeholder: "Sarah Doe" },
  { label: "WhatsApp Number", type: "tel", placeholder: "+1 (555) 000-0000" },
  { label: "Email Address", type: "email", placeholder: "sarah@example.com" },
];

const offers = [
  { title: "Thyroid Support Yoga Routine Video", price: "Only $9", body: "Lifetime Access" },
  { title: "Diet & Lifestyle Guide (PDF)", price: "Only $7", body: "7-Day Meal Plan" },
];

const timeParts = [
  { value: "12", unit: "Hours" },
  { value: "45", unit: "Mins" },
  { value: "08", unit: "Secs" },
];

export function YogaForThyroidRegistration() {
  return (
    <ScrollReveal id="register" className="relative overflow-hidden bg-[var(--color-primary-container)] px-6 py-20 text-[var(--color-on-primary-container)]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-[var(--color-secondary-container)] blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div className="space-y-6 text-white">
          <h2 className="text-4xl font-bold">Reserve Your Free Spot Now</h2>
          <p className="text-lg opacity-90">Limited to 100 participants per session so all questions can be answered.</p>
          <div className="flex items-center gap-6 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
            {timeParts.map((part) => (
              <div key={part.unit} className="text-center">
                <span className="block text-2xl font-bold">{part.value}</span>
                <span className="text-xs uppercase">{part.unit}</span>
              </div>
            ))}
            <div className="ml-auto flex items-center gap-1">
              <span className="material-symbols-outlined text-[var(--color-secondary-fixed)]">group</span>
              <span className="font-bold">14 Seats Left</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8 text-[var(--color-on-surface)] shadow-2xl">
          <div className="space-y-4">
            {fields.map((field) => (
              <div key={field.label}>
                <label className="mb-1 block text-sm font-semibold">{field.label}</label>
                <input
                  type={field.type}
                  readOnly
                  placeholder={field.placeholder}
                  className="h-12 w-full rounded-lg bg-[var(--color-surface-container-low)] px-4 outline-none ring-[var(--color-secondary)] focus:ring-2"
                />
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-[color:rgb(103_93_106/0.2)] bg-[var(--color-tertiary-fixed)] p-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-tertiary-container)]">
              Exclusive One-Time Offers
            </p>
            <div className="space-y-3">
              {offers.map((offer) => (
                <label key={offer.title} className="flex items-center gap-3 rounded-lg bg-white p-3">
                  <input type="checkbox" readOnly className="h-5 w-5 rounded" />
                  <div className="flex-1">
                    <p className="font-bold">{offer.title}</p>
                    <p className="text-xs text-[var(--color-on-surface-variant)]">
                      {offer.body} - {offer.price}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>
          <button type="button" className="mt-6 w-full rounded-lg bg-[var(--color-primary)] py-4 text-lg font-bold text-white transition hover:brightness-110">
            Reserve My Free Seat
          </button>
        </div>
      </div>
    </ScrollReveal>
  );
}
