import { CommunityPostCard } from "./CommunityPostCard";

/**
 * Placeholder: feed section wrapping a list of community post cards.
 */
export function PostFeedSection() {
  return (
    <section aria-label="Post feed" className="space-y-6">
      <CommunityPostCard />
      <CommunityPostCard />
    </section>
  );
}
