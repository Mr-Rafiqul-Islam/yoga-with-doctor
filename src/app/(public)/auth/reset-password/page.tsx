import { ResetPasswordForm } from "@/features/auth/components";

export const metadata = {
  title: "Reset Password",
  description: "Set a new password for your Yoga With Doctor account",
};

export default function ResetPasswordPage() {
  return (
    <main className="flex min-h-[650px] flex-1 items-center justify-center bg-gradient-to-b from-emerald-50/80 to-green-50/80 p-6 dark:from-emerald-950/30 dark:to-green-950/30 lg:p-12">
      <ResetPasswordForm />
    </main>
  );
}
