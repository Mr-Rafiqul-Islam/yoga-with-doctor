"use client";

import { useEffect, useState } from "react";
import { OfflineView } from "@/components/ui/OfflineView";

/**
 * Listens to browser online/offline and shows a full-screen overlay with OfflineView when offline.
 * Mount this once in the root layout so the offline page appears app-wide.
 */
export function OfflineDetector() {
  const [isOffline, setIsOffline] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    setIsOffline(!navigator.onLine);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [mounted]);

  if (!mounted || !isOffline) return null;

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-background"
      role="alert"
      aria-live="assertive"
      aria-label="You are offline"
    >
      <OfflineView onRetry={handleRetry} />
    </div>
  );
}
