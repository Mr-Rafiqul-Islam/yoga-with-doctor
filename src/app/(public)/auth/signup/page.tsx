import { RegisterPageContent } from "@/features/auth/components";
import type { Metadata } from "next";
import { publicPageMetadata } from "@/lib/publicPageMetadata";

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Sign up",
    description: "Create your Yoga With Doctor account to start your yoga and wellness journey.",
    path: "/auth/signup",
  });
}

export default function SignupPage() {
  return (
    <main className="flex min-h-[650px] flex-1 items-center justify-center p-6 lg:p-12">
      <RegisterPageContent />
    </main>
  );
}
