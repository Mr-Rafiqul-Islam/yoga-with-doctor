export type DeviceInfo = {
  deviceId: string
  persistentId: string
  userAgent: string
  platform: string
  language: string
  timezone: string
  screen: string
  cpu: number | null
  memory: number | null
}

const DEVICE_STORAGE_KEY = "app_device_id"

/**
 * generate random persistent id
 */
function generatePersistentId() {
  return crypto.randomUUID()
}

/**
 * get or create persistent id
 */
function getPersistentId() {
  if (typeof window === "undefined") return ""

  let id = localStorage.getItem(DEVICE_STORAGE_KEY)

  if (!id) {
    id = generatePersistentId()
    localStorage.setItem(DEVICE_STORAGE_KEY, id)
  }

  return id
}

/**
 * collect browser fingerprint
 */
function collectFingerprint() {
  if (typeof window === "undefined") return ""

  const nav = navigator

  const data = [
    nav.userAgent,
    nav.platform,
    nav.language,
    Intl.DateTimeFormat().resolvedOptions().timeZone,
    window.screen.width,
    window.screen.height,
    window.devicePixelRatio,
    nav.hardwareConcurrency,
    (nav as any).deviceMemory ?? "",
  ]

  return data.join("|")
}

/**
 * SHA256 hash
 */
async function sha256(text: string) {
  const data = new TextEncoder().encode(text)
  const hash = await crypto.subtle.digest("SHA-256", data)
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

/**
 * main function
 */
export async function getDeviceId(): Promise<string> {
  if (typeof window === "undefined") return "";

  const persistentId = getPersistentId()
  const fingerprint = collectFingerprint()

  const deviceId = await sha256(persistentId + "|" + fingerprint)

  return deviceId;
}