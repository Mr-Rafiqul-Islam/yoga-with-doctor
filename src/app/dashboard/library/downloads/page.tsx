import {
  DownloadsFilterTabs,
  DownloadsGrid,
  DownloadsHeader,
  DownloadsPaginationSection,
  StorageSection,
} from "@/features/dashboard/components/downloads";
import { DOWNLOAD_ITEMS } from "@/features/dashboard/data/downloadsData";

export default function DownloadsPage() {
  return (
    <main>
      <DownloadsHeader />
      <StorageSection />
      <DownloadsFilterTabs />
      <DownloadsGrid items={DOWNLOAD_ITEMS} />
      <DownloadsPaginationSection current={6} total={12} />
    </main>
  );
}


