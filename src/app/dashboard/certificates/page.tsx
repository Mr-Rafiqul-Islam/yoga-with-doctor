import {
  CertificatesGrid,
  EarnedCertificatesCard,
  FilterAndSortSection,
  LoadMoreSection,
  MasteryProgressCard,
} from "@/features/dashboard/components/certificates";
import { CERTIFICATES } from "@/features/dashboard/data/certificatesData";

export default function CertificatesPage() {
  const earnedCount = CERTIFICATES.length;

  return (
    <div className="space-y-6">
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <MasteryProgressCard />
        </div>
        <div className="md:col-span-1">
          <EarnedCertificatesCard count={earnedCount} />
        </div>
      </section>

      <FilterAndSortSection />

      <CertificatesGrid certificates={CERTIFICATES} />

      <LoadMoreSection />
    </div>
  );
}
