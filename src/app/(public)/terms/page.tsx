import { MaintenanceView } from "@/components/ui/MaintenanceView";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <MaintenanceView showEstimatedReturn={false}  />
    </div>
  );
}
