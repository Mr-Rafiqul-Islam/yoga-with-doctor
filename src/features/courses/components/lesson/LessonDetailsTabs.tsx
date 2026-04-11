"use client";

import { useState } from "react";

export type LessonTabId = "overview" | "resources" | "discussion";

const TABS: { id: LessonTabId; label: string; icon: string }[] = [
  { id: "overview", label: "Overview", icon: "info" },
  { id: "resources", label: "Resources", icon: "folder" },
  { id: "discussion", label: "Discussion", icon: "forum" },
];

export interface LessonDetailsTabsProps {
  overviewContent: React.ReactNode;
  resourcesContent: React.ReactNode;
  discussionContent: React.ReactNode;
}

export function LessonDetailsTabs({
  overviewContent,
  resourcesContent,
  discussionContent,
}: LessonDetailsTabsProps) {
  const [activeTab, setActiveTab] = useState<LessonTabId>("overview");

  const contentMap: Record<LessonTabId, React.ReactNode> = {
    overview: overviewContent,
    resources: resourcesContent,
    discussion: discussionContent,
  };

  return (
    <div className="space-y-6">
      <nav aria-label="Lesson details tabs" className="border-b border-border dark:border-gray-700">
        <ul className="-mb-px flex space-x-8 overflow-x-auto" role="tablist">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <li key={tab.id}>
                <button
                  type="button"
                  id={`tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 whitespace-nowrap border-b-2 py-4 px-1 text-body-md font-medium transition-colors ${
                    isActive
                      ? "border-primary text-primary"
                      : "border-transparent text-muted hover:border-gray-300 hover:text-foreground dark:hover:text-gray-300"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                  role="tab"
                >
                  <span className="material-icons-outlined text-lg" aria-hidden>
                    {tab.icon}
                  </span>
                  {tab.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`}>
        {contentMap[activeTab]}
      </div>
    </div>
  );
}
