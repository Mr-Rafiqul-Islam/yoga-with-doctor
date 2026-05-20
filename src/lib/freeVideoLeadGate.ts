import { getDeviceId } from "@/utils/deviceId";

const STORAGE_KEY = "ywd_free_video_lead_gate";

interface LeadGateRecord {
  deviceId: string;
  /** Unix ms — start of the next local calendar day (gate expires when the date changes). */
  expiresAt: number;
}

export type FreeVideoLeadGateStatus = {
  passed: boolean;
};

function canUseStorage(): boolean {
  return (
    typeof window !== "undefined" && typeof window.localStorage !== "undefined"
  );
}

/** Start of the next calendar day in the user's local timezone. */
function getStartOfNextLocalDayMs(now = new Date()): number {
  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
  ).getTime();
}

function readRecord(): LeadGateRecord | null {
  if (!canUseStorage()) return null;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<LeadGateRecord>;
    if (
      typeof parsed.deviceId !== "string" ||
      !parsed.deviceId.trim() ||
      typeof parsed.expiresAt !== "number"
    ) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return {
      deviceId: parsed.deviceId,
      expiresAt: parsed.expiresAt,
    };
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

function clearRecord(): void {
  if (!canUseStorage()) return;
  window.localStorage.removeItem(STORAGE_KEY);
}

/**
 * Returns whether the unauthenticated user has already submitted the lead form
 * today (same local calendar day) on this device.
 */
export async function getFreeVideoLeadGateStatus(): Promise<FreeVideoLeadGateStatus> {
  const record = readRecord();
  if (!record) return { passed: false };

  if (Date.now() >= record.expiresAt) {
    clearRecord();
    return { passed: false };
  }

  const deviceId = await getDeviceId();
  if (!deviceId || record.deviceId !== deviceId) {
    return { passed: false };
  }

  return { passed: true };
}

/**
 * Mark the lead gate as passed for this device until local midnight (next calendar day).
 */
export async function markFreeVideoLeadGatePassed(): Promise<void> {
  if (!canUseStorage()) return;
  const deviceId = await getDeviceId();
  if (!deviceId) return;

  const record: LeadGateRecord = {
    deviceId,
    expiresAt: getStartOfNextLocalDayMs(),
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
}
