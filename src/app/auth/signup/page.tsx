import { RegisterPageContent } from "@/features/auth/components";

export const metadata = {
  title: "Sign Up",
  description: "Create your Yoga With Doctor account",
};

export default function SignupPage() {
  return (
    <main className="flex min-h-[650px] flex-1 items-center justify-center p-6 lg:p-12">
      <RegisterPageContent />
    </main>
  );
}
