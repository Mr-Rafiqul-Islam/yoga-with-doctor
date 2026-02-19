import { LoadingScreen } from "@/components/ui/LoadingScreen";

/**
 * Next.js app-level loading UI (shown during route transitions / suspense).
 */
export default function Loading() {
  return (
    <LoadingScreen className="min-h-[100dvh]" message="Preparing your wellness journey" />
  );
}
