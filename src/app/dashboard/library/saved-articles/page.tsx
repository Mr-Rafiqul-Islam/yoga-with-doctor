import {
  SavedArticlesHeader,
  SavedArticlesList,
  SavedArticlesLoadMoreSection,
  // SavedArticlesPremiumCard,
} from "@/features/dashboard/components/saved-article";
import { SAVED_ARTICLES } from "@/features/dashboard/data/savedArticlesData";

export default function SavedArticlesPage() {
  return (
    <div className="space-y-6">
      {/* <SavedArticlesPremiumCard /> */}
      <SavedArticlesHeader />
      <SavedArticlesList articles={SAVED_ARTICLES} />
      <SavedArticlesLoadMoreSection />
    </div>
  );
}
