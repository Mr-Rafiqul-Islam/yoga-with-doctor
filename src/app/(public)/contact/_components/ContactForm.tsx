const inputClass =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground shadow-sm placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200";

const labelClass = "ml-1 text-sm font-medium text-muted";

const SUBJECT_OPTIONS = [
  { value: "General Inquiry", label: "General Inquiry" },
  { value: "Technical Support", label: "Technical Support" },
  { value: "Collaboration", label: "Collaboration" },
] as const;

type ContactFormProps = {
  action: (formData: FormData) => Promise<void>;
};

export function ContactForm({ action }: ContactFormProps) {
  return (
    <div className="rounded-3xl border border-border bg-surface p-6 shadow-soft dark:bg-surface-dark md:p-10">
      <form action={action} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className={labelClass}>
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Jane Doe"
              required
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className={labelClass}>
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="jane@example.com"
              required
              className={inputClass}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className={labelClass}>
            Subject
          </label>
          <div className="relative">
            <select
              id="subject"
              name="subject"
              className={`${inputClass} cursor-pointer appearance-none`}
            >
              {SUBJECT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <span
              className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-muted"
              aria-hidden
            >
              <span className="material-icons-outlined text-sm">
                expand_more
              </span>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your wellness goals..."
            required
            rows={6}
            className={`${inputClass} min-h-[160px] resize-none`}
          />
        </div>

        <button
          type="submit"
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 font-medium text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <span>Send Message</span>
          <span className="material-icons-outlined text-[18px]" aria-hidden>
            send
          </span>
        </button>
        <p className="mt-2 text-center text-xs text-muted">
          We respect your privacy. Your information is strictly confidential.
        </p>
      </form>
    </div>
  );
}
