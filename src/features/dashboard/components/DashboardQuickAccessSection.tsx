 "use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { QuickAccessItem } from "@/features/dashboard/data/dashboardData";
import { useAppSelector } from "@/stores";
import {
  SAVED_ARTICLES_CHANGED_EVENT,
  savedArticlesFromStorage,
} from "@/lib/savedArticlesStorage";

type DashboardQuickAccessSectionProps = {
  items: QuickAccessItem[];
};

export function DashboardQuickAccessSection({
  items,
}: DashboardQuickAccessSectionProps) {
  const userId = useAppSelector((s) => s.auth.user?.id ?? null);
  const [savedCount, setSavedCount] = useState<number>(0);

  const refreshSavedCount = useCallback(() => {
    if (!userId) {
      setSavedCount(0);
      return;
    }
    setSavedCount(savedArticlesFromStorage(userId).length);
  }, [userId]);

  useEffect(() => {
    refreshSavedCount();
  }, [refreshSavedCount]);

  useEffect(() => {
    const handler = () => refreshSavedCount();
    window.addEventListener(SAVED_ARTICLES_CHANGED_EVENT, handler);
    return () => window.removeEventListener(SAVED_ARTICLES_CHANGED_EVENT, handler);
  }, [refreshSavedCount]);

  const computedItems = useMemo(() => {
    return items.map((item) => {
      const isSavedArticlesTile =
        item.href === "/dashboard/library/saved-articles" ||
        item.href.includes("/dashboard/library/saved-articles");

      if (!isSavedArticlesTile) return item;

      return userId
        ? {
            ...item,
            count: `${savedCount} Saved`,
          }
        : {
            ...item,
            count: undefined,
          };
    });
  }, [items, savedCount, userId]);

  return (
    <section>
      <h2 className="mb-6 font-display text-2xl font-bold text-foreground">
        Quick Access
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {computedItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-2xl border border-border bg-surface p-4 text-center shadow-elevation-sm transition-shadow hover:shadow-elevation-md"
          >
            <span
              className={`material-icons-outlined mb-2 block text-2xl ${item.color}`}
              aria-hidden
            >
              {item.icon}
            </span>
            <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary">
              {item.label}
            </h3>
            {item.count && (
              <p className="text-body-md text-muted">{item.count}</p>
            )}
            {item.action && (
              <p className="text-body-md text-primary">{item.action}</p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
