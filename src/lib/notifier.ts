export type ToastVariant = "success" | "info" | "error";

export type ToastPayload = {
  variant: ToastVariant;
  title: string;
  message?: string;
  durationMs?: number;
};

const TOAST_EVENT = "ywd:toast";

function createToastId(): string {
  // crypto.randomUUID is not guaranteed in older environments.
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `toast_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export function notifyToast(payload: ToastPayload) {
  if (typeof window === "undefined") return;
  const id = createToastId();
  window.dispatchEvent(
    new CustomEvent<ToastPayload & { id: string }>(TOAST_EVENT, {
      detail: { ...payload, id },
    })
  );
}

export function getToastEventName() {
  return TOAST_EVENT;
}

