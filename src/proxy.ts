import { withAuth } from "next-auth/middleware";

/**
 * Match /dashboard and /checkout including their roots.
 * Unauthenticated requests redirect to /auth/login?callbackUrl=…
 */
export default withAuth({
  callbacks: {
    authorized: ({ token }) => Boolean(token?.sub),
  },
  pages: {
    signIn: "/auth/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export const config = {
  matcher: [
    // "/dashboard",
    // "/dashboard/:path*",
    // "/checkout",
    // "/checkout/:path*",
  ],
};
