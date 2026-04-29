"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "Is this suitable for beginners?",
    answer:
      "Yes! Every movement is designed to be gentle and adaptable. You don't need any prior yoga experience or flexibility to participate.",
  },
  {
    question: "What if I can't attend live?",
    answer:
      "A limited-time replay will be shared with all registered participants, but we recommend attending live for the Q&A with Dr. Chen.",
  },
  {
    question: "Is it safe to do yoga during my period?",
    answer:
      "Absolutely. We will discuss specific modifications for different phases of your cycle during the workshop.",
  },
];

export default function YogaForPcosFaqList() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <div className="space-y-4">
      {FAQ_ITEMS.map((item, index) => (
        <details
          key={item.question}
          className="group overflow-hidden rounded-2xl border border-[var(--color-outline-variant)] bg-[var(--color-surface-lowest)]"
          open={expandedIndex === index}
          onToggle={(e) => {
            const el = e.currentTarget;
            setExpandedIndex(el.open ? index : -1);
          }}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-semibold text-[var(--color-on-surface)] [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <span className="material-symbols-outlined transition-transform group-open:rotate-180">
              expand_more
            </span>
          </summary>
          <div className="px-6 pb-6 text-[var(--color-on-surface-variant)]">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
