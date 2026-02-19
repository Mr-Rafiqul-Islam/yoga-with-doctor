import { NotFoundView } from "@/components/ui/NotFoundView";

export const metadata = {
  title: "Page Not Found",
  description: "We couldn't find anything here yet. Explore home or other pages.",
};

/**
 * Rendered when notFound() is called from any route (e.g. articles/[slug], courses/[slug], videos/[slug]).
 * Next.js uses the nearest not-found.tsx up the tree; this app-level file covers all routes.
 */
export default function NotFound() {
  return <NotFoundView />;
}
