import {
  UserProfileCard,
  CommunitySidebarNav,
  CreatePostInput,
  PostFeedSection,
  TrendingDiscussionsWidget,
  LiveSessionsWidget,
} from "@/features/community/components";
import type { Metadata } from "next";
import { publicPageMetadata } from "@/lib/publicPageMetadata";

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Community",
    description:
      "Connect with the Yoga With Doctor community — discussions, live sessions, and shared wellness journeys.",
    path: "/community",
  });
}

export default function CommunityPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left column: profile + community nav */}
        <aside
          className="hidden space-y-6 lg:block lg:col-span-3"
          aria-label="Community sidebar"
        >
          <UserProfileCard />
          <CommunitySidebarNav />
        </aside>

        {/* Center column: create post + feed */}
        <section
          className="col-span-1 space-y-6 lg:col-span-6"
          aria-label="Community feed"
        >
          <CreatePostInput />
          <PostFeedSection />
        </section>

        {/* Right column: widgets */}
        <aside
          className="hidden space-y-6 lg:block lg:col-span-3"
          aria-label="Community widgets"
        >
          <TrendingDiscussionsWidget />
          <LiveSessionsWidget />
        </aside>
      </div>
    </div>
  );
}
