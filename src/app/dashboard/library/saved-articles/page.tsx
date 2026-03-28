import {
  SavedArticlesHeader,
  SavedArticlesPageContent,
  // SavedArticlesPremiumCard,
} from "@/features/dashboard/components/saved-article";

export default function SavedArticlesPage() {
  return (
    <div className="space-y-6">
      {/* <SavedArticlesPremiumCard /> */}
      <SavedArticlesHeader />
      <SavedArticlesPageContent />
    </div>
  );
}
