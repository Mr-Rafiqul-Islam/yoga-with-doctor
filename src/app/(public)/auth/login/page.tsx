import { LoginPageContent } from "@/features/auth/components";

export const metadata = {
  title: "Login",
  description: "Sign in to your Yoga With Doctor account",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-[650px] flex-1 items-center justify-center p-6 lg:p-12">
      <LoginPageContent />
    </main>
  );
}
