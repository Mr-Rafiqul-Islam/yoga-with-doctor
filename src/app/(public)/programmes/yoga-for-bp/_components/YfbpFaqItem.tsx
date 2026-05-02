"use client";

import { useEffect, useRef } from "react";

type YfbpFaqItemProps = {
  answer: string;
  defaultOpen?: boolean;
  question: string;
};

/** Client-only so first item can start open (`defaultOpen`) without conflicting with native toggle. */
export function YfbpFaqItem({ question, answer, defaultOpen = false }: YfbpFaqItemProps) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (!defaultOpen) return;
    const el = ref.current;
    if (el) el.open = true;
  }, [defaultOpen]);

  return (
    <details ref={ref} className="group rounded-2xl border border-teal-50 bg-white shadow-sm">
      <summary className="yfbp-faq-summary flex cursor-pointer items-center justify-between p-6 font-bold text-lg text-[color:var(--yfbp-on-background)]">
        {question}
        <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
      </summary>
      <div className="px-6 pb-6 text-[color:var(--yfbp-on-surface-variant)]">{answer}</div>
    </details>
  );
}
