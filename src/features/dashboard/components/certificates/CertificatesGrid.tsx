import type { Certificate } from "@/features/dashboard/data/certificatesData";
import { CertificateCard } from "./CertificateCard";

type CertificatesGridProps = {
  certificates: Certificate[];
};

export function CertificatesGrid({ certificates }: CertificatesGridProps) {
  return (
    <section>
      <ul
        className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        role="list"
      >
        {certificates.map((certificate) => (
          <li key={certificate.id}>
            <CertificateCard certificate={certificate} />
          </li>
        ))}
      </ul>
    </section>
  );
}

