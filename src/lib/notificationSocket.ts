/**
 * Notification service origin for Socket.io (client website).
 * Set NEXT_PUBLIC_NOTIFICATION_SERVICE_URL (e.g. http://localhost:5005) or it falls back to API base.
 */
function getNotificationBaseUrl(): string {
  const service = process.env.NEXT_PUBLIC_NOTIFICATION_SERVICE_URL as string | undefined;
  const base = process.env.NEXT_PUBLIC_API_BASE_URL as string | undefined;
  const raw = service ?? base ?? "";
  try {
    return new URL(raw).origin;
  } catch {
    return raw;
  }
}

const baseUrl = getNotificationBaseUrl();

export function getNotificationServiceOrigin(): string {
  return baseUrl;
}

/** Payload shape for Socket.io events `notification:new` and `notification:sent` */
export interface NotificationRealtimePayload {
  userId: string;
  channel: string;
  event: string;
  jobId?: string;
  payload?: {
    title?: string;
    message?: string;
    deepLink?: string;
    mediaAssetId?: string;
    muxPlaybackId?: string;
    [key: string]: unknown;
  };
}
