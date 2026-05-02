"use client";

import { useEffect, useRef } from "react";

type YfaFaqItemProps = {
  answer: string;
  defaultOpen?: boolean;
  question: string;
};

export function YfaFaqItem({ question, answer, defaultOpen = false }: YfaFaqItemProps) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (!defaultOpen) return;
    const el = ref.current;
    if (el) el.open = true;
  }, [defaultOpen]);

  return (
    <details ref={ref} className="group overflow-hidden rounded-2xl border border-teal-50 bg-white shadow-sm">
      <summary className="yfa-faq-summary flex cursor-pointer items-center justify-between p-6 font-bold text-[color:var(--yfa-on-background)]">
        {question}
        <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
      </summary>
      <div className="px-6 pb-6 text-[color:var(--yfa-secondary)]">{answer}</div>
    </details>
  );
}
