"use client";

import { useEffect, useRef } from "react";
import { io, type Socket } from "socket.io-client";
import {
  getNotificationServiceOrigin,
  type NotificationRealtimePayload,
} from "@/lib/notificationSocket";

/**
 * Connects to the notification service Socket.io server (namespace /notifications)
 * with auth: { userId }. Listens for notification:new and notification:sent.
 * Use when the client is logged in (userId is defined).
 * Set NEXT_PUBLIC_NOTIFICATION_SERVICE_URL (e.g. http://localhost:5005) or it uses API base.
 */
export function useNotificationSocket(userId: string | undefined) {
  const socketRef = useRef<Socket | null>(null);
  const errorLoggedRef = useRef(false);

  useEffect(() => {
    if (!userId) return;

    const url = getNotificationServiceOrigin();
    if (!url) return;

    const socketUrl = url.replace(/\/$/, "") + "/notifications";

    const socket = io(socketUrl, {
      path: "/socket.io",
      auth: { userId },
      transports: ["websocket", "polling"],
      reconnectionAttempts: 3,
      reconnectionDelay: 2000,
    });

    socketRef.current = socket;

    socket.on("connect_error", (err) => {
      if (!errorLoggedRef.current) {
        errorLoggedRef.current = true;
        console.warn(
          "[useNotificationSocket] Realtime unavailable:",
          socketUrl,
          "—",
          err.message
        );
      }
    });

    socket.on("connect", () => {
      // Optional: invalidate notification queries here if you add a notification API
    });

    socket.on(
      "notification:new",
      (data: NotificationRealtimePayload) => {
        const title = data?.payload?.title ?? "New notification";
        const message = data?.payload?.message;
        if (message) {
          console.info("[Notification]", `${title}: ${message}`);
        } else {
          console.info("[Notification]", title);
        }
        // Optional: dispatch invalidation or show in-app toast when you add notification API/UI
      }
    );

    socket.on("notification:sent", () => {
      // Optional: invalidate notification list when you add a notification API
    });

    return () => {
      socket.off("connect_error");
      socket.off("connect");
      socket.off("notification:new");
      socket.off("notification:sent");
      socket.disconnect();
      socketRef.current = null;
    };
  }, [userId]);
}
