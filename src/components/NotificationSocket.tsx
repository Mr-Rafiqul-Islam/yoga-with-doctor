"use client";

import { useAppSelector } from "@/stores";
import { useNotificationSocket } from "@/hooks/useNotificationSocket";

/**
 * Client-only component that connects to the notification Socket.io server
 * when the user is logged in (uses auth.user.id as userId).
 * Renders nothing; only manages the socket connection.
 */
export function NotificationSocket() {
  const userId = useAppSelector((state) => state.auth.user?.id);
  useNotificationSocket(userId);
  return null;
}
