"use client";

import { useCallback, useEffect, useState } from "react";
import { Modal } from "@/components/Modal";
import Link from "next/link";
import type { ArticleDetails } from "@/features/articles/data/dummyArticles";
import { useAppSelector } from "@/stores/hooks";
import type { StoredSavedArticleRow } from "@/lib/savedArticlesStorage";
import {
  SAVED_ARTICLES_CHANGED_EVENT,
  articleDetailsToStoredRow,
  isArticleSaved,
  toggleSavedArticle,
} from "@/lib/savedArticlesStorage";
import { notifyToast } from "@/lib/notifier";

type ArticleBookmarkButtonProps = {
  article: ArticleDetails;
  articleApiId: string;
  variant: "sidebar" | "mobile";
};

export function ArticleBookmarkButton({
  article,
  articleApiId,
  variant,
}: ArticleBookmarkButtonProps) {
  const user = useAppSelector((s) => s.auth.user);
  const isAuthenticated = useAppSelector((s) => s.auth.isAuthenticated);
  const userId = user?.id ?? null;

  const [saved, setSaved] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const syncSaved = useCallback(() => {
    if (!userId || !articleApiId) {
      setSaved(false);
      return;
    }
    setSaved(isArticleSaved(userId, articleApiId));
  }, [articleApiId, userId]);

  useEffect(() => {
    syncSaved();
  }, [syncSaved]);

  useEffect(() => {
    const handler = () => syncSaved();
    window.addEventListener(SAVED_ARTICLES_CHANGED_EVENT, handler);
    return () =>
      window.removeEventListener(SAVED_ARTICLES_CHANGED_EVENT, handler);
  }, [syncSaved]);

  const handleBookmarkClick = useCallback(() => {
    if (!isAuthenticated || !userId) {
      notifyToast({
        variant: "info",
        title: "Login required",
        message: "Please log in to save articles to your library.",
      });
      setShowLoginModal(true);
      return;
    }

    const row = articleDetailsToStoredRow(article, articleApiId) as Omit<
      StoredSavedArticleRow,
      "savedAt"
    >;
    const nextSaved = toggleSavedArticle(userId, row);
    setSaved(nextSaved);

    notifyToast({
      variant: "success",
      title: nextSaved ? "Saved" : "Removed",
      message: nextSaved
        ? "Added to your Library Page in dashboard."
        : "Removed from your Library Page in dashboard.",
    });
  }, [article, articleApiId, isAuthenticated, userId]);

  const buttonClassName =
    variant === "mobile"
      ? `absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface transition-colors lg:hidden ${
          saved
            ? "border-blue-200 !bg-blue-50 !text-blue-600 hover:border-blue-400 hover:bg-blue-100 hover:text-blue-800 dark:border-blue-700/60 dark:bg-blue-950/40 dark:text-blue-400 dark:hover:border-blue-500 dark:hover:bg-blue-900/55 dark:hover:text-blue-200"
            : "border-border text-muted hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-700 dark:hover:border-blue-200"
        }`
      : `flex h-10 w-10 items-center justify-center rounded-full border bg-surface text-muted transition-colors dark:bg-gray-800 dark:border-gray-700 ${
          saved
            ? "border-blue-200 !bg-blue-50 !text-blue-600 hover:border-blue-400 hover:bg-blue-100 hover:text-blue-800 dark:border-blue-700/60 dark:bg-blue-950/40 dark:text-blue-400 dark:hover:border-blue-500 dark:hover:bg-blue-900/55 dark:hover:text-blue-200"
            : "border-border text-muted hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-700 dark:hover:border-blue-200"
        }`;

  return (
    <>
      <button
        type="button"
        onClick={handleBookmarkClick}
        aria-label={saved ? "Remove from saved articles" : "Save article"}
        aria-pressed={saved}
        className={buttonClassName}
      >
        <span className="material-icons-outlined text-sm">
          {saved ? "bookmark" : "bookmark_border"}
        </span>
      </button>

      <Modal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        title="Login required"
      >
        <p className="mb-6 text-muted">
          Please log in to save articles to your library.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => setShowLoginModal(false)}
            className="order-2 rounded-lg border border-border px-4 py-2 text-body-md font-medium text-foreground transition-colors hover:bg-gray-100 sm:order-1 dark:hover:bg-gray-800"
          >
            Cancel
          </button>
          <Link
            href="/auth/login"
            onClick={() => setShowLoginModal(false)}
            className="order-1 inline-flex justify-center rounded-lg bg-primary px-4 py-2 text-body-md font-medium text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:order-2"
          >
            Go to Login
          </Link>
        </div>
      </Modal>
    </>
  );
}
