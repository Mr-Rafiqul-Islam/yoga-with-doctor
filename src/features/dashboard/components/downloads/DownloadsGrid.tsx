import type { DownloadItem } from "@/features/dashboard/data/downloadsData";
import { DownloadCard } from "./DownloadCard";

type DownloadsGridProps = {
  items: DownloadItem[];
};

export function DownloadsGrid({ items }: DownloadsGridProps) {
  return (
    <section>
      <ul
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        role="list"
      >
        {items.map((item) => (
          <li key={item.id}>
            <DownloadCard item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

