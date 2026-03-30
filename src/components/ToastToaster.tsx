"use client";

import { useEffect, useMemo, useState } from "react";
import type { ToastPayload } from "@/lib/notifier";
import { getToastEventName } from "@/lib/notifier";

type ToastItem = ToastPayload & { id: string };

export function ToastToaster() {
  const eventName = useMemo(() => getToastEventName(), []);
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    const handler = (event: Event) => {
      const ce = event as CustomEvent<ToastItem>;
      const toast = ce.detail;
      if (!toast?.id) return;

      setToasts((prev) => {
        // Replace if id already exists.
        const exists = prev.some((t) => t.id === toast.id);
        if (exists) return prev;
        return [toast, ...prev].slice(0, 4);
      });

      const duration = toast.durationMs ?? 3200;
      window.setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, duration);
    };

    window.addEventListener(eventName, handler as EventListener);
    return () => window.removeEventListener(eventName, handler as EventListener);
  }, [eventName]);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed right-4 top-[90px] z-[100] flex w-[320px] max-w-[calc(100vw-2rem)] flex-col gap-3">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          role="status"
          className={[
            "rounded-2xl border bg-surface px-4 py-3 shadow-elevation-md",
            toast.variant === "success" &&
              "border-emerald-200/70 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30",
            toast.variant === "error" &&
              "border-red-200/70 bg-red-50 dark:border-red-900/70 dark:bg-red-950/20",
            toast.variant === "info" &&
              "border-blue-200/70 bg-blue-50 dark:border-blue-900/70 dark:bg-blue-950/25",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="font-display text-sm font-bold text-foreground">
                {toast.title}
              </p>
              {toast.message && (
                <p className="mt-1 line-clamp-2 text-body-md text-muted">
                  {toast.message}
                </p>
              )}
            </div>
            <div
              className={[
                "mt-0.5 h-2 w-2 rounded-full",
                toast.variant === "success" && "bg-emerald-500",
                toast.variant === "error" && "bg-red-500",
                toast.variant === "info" && "bg-blue-500",
              ]
                .filter(Boolean)
                .join(" ")}
              aria-hidden
            />
          </div>
        </div>
      ))}
    </div>
  );
}

