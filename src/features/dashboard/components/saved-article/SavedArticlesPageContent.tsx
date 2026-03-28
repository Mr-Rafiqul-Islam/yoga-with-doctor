"use client";

import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "@/stores/hooks";
import {
  SAVED_ARTICLES_CHANGED_EVENT,
  savedArticlesFromStorage,
} from "@/lib/savedArticlesStorage";
import type { SavedArticle } from "@/features/dashboard/data/savedArticlesData";
import { SavedArticlesList } from "./SavedArticlesList";

export function SavedArticlesPageContent() {
  const user = useAppSelector((s) => s.auth.user);
  const userId = user?.id ?? null;
  const [articles, setArticles] = useState<SavedArticle[]>([]);

  const refresh = useCallback(() => {
    if (!userId) {
      setArticles([]);
      return;
    }
    setArticles(savedArticlesFromStorage(userId));
  }, [userId]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<{ userId?: string }>).detail;
      if (detail?.userId && detail.userId !== userId) return;
      refresh();
    };
    window.addEventListener(SAVED_ARTICLES_CHANGED_EVENT, handler);
    return () => window.removeEventListener(SAVED_ARTICLES_CHANGED_EVENT, handler);
  }, [refresh, userId]);

  if (!userId) {
    return (
        <p className="text-body-md text-muted">
          Sign in to see articles you have saved to your library.
        </p>
    );
  }

  return (<>
      {articles.length === 0 ? (
        <p className="text-body-md text-muted">
          No saved articles yet. Open an article and tap the bookmark to add it here.
        </p>
      ) : (
        <SavedArticlesList articles={articles} />
      )}
    </>
  );
}
