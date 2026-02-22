"use client";

import Link from "next/link";
import { useState } from "react";

export type FaqAnswerLink = {
  href: string;
  text: string;
  /** e.g. " is an excellent starting point to learn the basics." */
  suffix: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string | { paragraphs: string[]; link?: FaqAnswerLink };
  topicId?: string;
};

export type FaqSection = {
  id: string;
  heading: string;
  items: FaqItem[];
};

export type FaqTopic = {
  id: string;
  label: string;
};

export type FaqContentProps = {
  topics: FaqTopic[];
  sections: FaqSection[];
};

export function FaqContent({ topics, sections }: FaqContentProps) {
  const [activeTopicId, setActiveTopicId] = useState<string>("all");
  const [openItemId, setOpenItemId] = useState<string | null>(
    sections[0]?.items[0]?.id ?? null
  );

  const toggleItem = (id: string) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  const filteredSections =
    activeTopicId === "all"
      ? sections
      : sections.map((section) => ({
          ...section,
          items: section.items.filter(
            (item) => item.topicId == null || item.topicId === activeTopicId
          ),
        })).filter((s) => s.items.length > 0);

  return (
    <>
      {/* Topic filters */}
      <div className="mb-10 flex flex-wrap gap-3 overflow-x-auto pb-2">
        {topics.map((topic) => (
          <button
            key={topic.id}
            type="button"
            onClick={() => setActiveTopicId(topic.id)}
            className={`whitespace-nowrap rounded-full px-6 py-2.5 font-medium shadow-sm transition-colors ${
              activeTopicId === topic.id
                ? "bg-primary text-white shadow-md hover:opacity-95"
                : "border border-border bg-surface text-muted hover:border-primary hover:text-primary dark:bg-surface-dark dark:border-border"
            }`}
          >
            {topic.label}
          </button>
        ))}
      </div>

      {/* FAQ sections */}
      <div className="space-y-10 md:space-y-16">
        {filteredSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-28"
            aria-labelledby={`faq-heading-${section.id}`}
          >
            <h2
              id={`faq-heading-${section.id}`}
              className="mb-6 ml-2 text-xs font-bold uppercase tracking-widest text-muted"
            >
              {section.heading}
            </h2>
            <ul className="space-y-4" role="list">
              {section.items.map((item) => {
                const isOpen = openItemId === item.id;
                return (
                  <li key={item.id}>
                    <div
                      className={`rounded-2xl border border-transparent bg-surface p-6 shadow-soft transition-all dark:border-gray-800 dark:bg-surface-dark md:p-8 ${
                        isOpen ? "shadow-card" : "shadow-sm hover:shadow-md"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        className="flex w-full cursor-pointer items-start justify-between gap-4 text-left"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${item.id}`}
                        id={`faq-question-${item.id}`}
                      >
                        <h3 className="font-display text-lg font-semibold text-foreground pr-8 md:text-xl">
                          {item.question}
                        </h3>
                        <span
                          className={`material-icons-round flex-shrink-0 text-primary transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden
                        >
                          expand_less
                        </span>
                      </button>
                      <div
                        id={`faq-answer-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-question-${item.id}`}
                        className={`overflow-hidden transition-all ${
                          isOpen ? "visible" : "hidden"
                        }`}
                      >
                        {isOpen && (
                          <>
                            <div className="prose prose-slate dark:prose-invert mt-4 max-w-none text-muted">
                              {(() => {
                                const ans = item.answer;
                                if (typeof ans === "string") return <p>{ans}</p>;
                                if (!ans || !Array.isArray(ans.paragraphs))
                                  return <p>{String(ans ?? "")}</p>;
                                return (
                                  <>
                                    {ans.paragraphs.map((p, i) => (
                                      <p key={i} className={i < ans.paragraphs.length - 1 ? "mb-4" : "mb-0"}>
                                        {p}
                                      </p>
                                    ))}
                                    {ans.link && (
                                      <p className="mb-0">
                                        For absolute beginners, the{" "}
                                        <Link href={ans.link.href} className="font-semibold text-primary hover:underline">
                                          {ans.link.text}
                                        </Link>
                                        {ans.link.suffix}
                                      </p>
                                    )}
                                  </>
                                );
                              })()}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
