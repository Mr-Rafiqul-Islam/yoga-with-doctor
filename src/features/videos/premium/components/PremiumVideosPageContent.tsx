"use client";

import { useMemo, useState, useCallback } from "react";
import {
  PREMIUM_VIDEOS,
  PREMIUM_FILTER_TABS,
  type PremiumCategory,
} from "../data/premiumVideosData";
import { PremiumVideoCard } from "./PremiumVideoCard";

export function PremiumVideosPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"" | PremiumCategory>("");

  const filteredVideos = useMemo(() => {
    let list = PREMIUM_VIDEOS;
    if (activeFilter) {
      list = list.filter((v) => v.category === activeFilter);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter(
        (v) =>
          v.title.toLowerCase().includes(q) || v.subtitle.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeFilter, searchQuery]);

  const handleTabClick = useCallback((value: "" | PremiumCategory) => {
    setActiveFilter(value);
  }, []);

  return (
    <main className="min-h-screen flex-grow px-4 py-8 sm:px-6 lg:px-8">
      {/* Search */}
      <div className="relative mx-auto mb-8 max-w-2xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <span className="material-icons-outlined text-muted">search</span>
        </div>
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search premium videos..."
          className="block w-full rounded-xl border border-border bg-surface py-3 pl-11 pr-4 text-foreground placeholder-muted transition-shadow focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-gray-700 dark:bg-[#1E1E1E] dark:text-white dark:placeholder-gray-400 dark:focus:border-accent dark:focus:ring-accent/50"
          aria-label="Search premium videos"
        />
      </div>

      {/* Filter tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {PREMIUM_FILTER_TABS.map((tab) => (
          <button
            key={tab.value || "all"}
            type="button"
            onClick={() => handleTabClick(tab.value)}
            className={`rounded-full px-6 py-2 font-medium transition-colors ${
              activeFilter === tab.value
                ? "bg-primary text-white shadow-lg shadow-primary/20 hover:opacity-90 dark:shadow-primary/20"
                : "border border-border bg-surface text-muted hover:bg-secondary dark:border-gray-700 dark:bg-[#1E1E1E] dark:text-gray-300 dark:hover:bg-gray-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Video grid */}
      <div className="mx-auto max-w-7xl">
        {filteredVideos.length === 0 ? (
          <p className="py-12 text-center text-muted">
            No premium videos match your search or filter.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredVideos.map((video) => (
              <PremiumVideoCard key={video.id} video={video} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
