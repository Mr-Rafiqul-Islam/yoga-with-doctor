import { Suspense } from "react";
import { LoginPageContent } from "@/features/auth/components";
import type { Metadata } from "next";
import { publicPageMetadata } from "@/lib/publicPageMetadata";

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Login",
    description: "Sign in to your Yoga With Doctor account to access courses, saved articles, and your library.",
    path: "/auth/login",
  });
}

export default function LoginPage() {
  return (
    <main className="flex min-h-[650px] flex-1 items-center justify-center p-6 lg:p-12">
      <Suspense
        fallback={
          <div className="text-center text-muted" aria-busy>
            Loading…
          </div>
        }
      >
        <LoginPageContent />
      </Suspense>
    </main>
  );
}
