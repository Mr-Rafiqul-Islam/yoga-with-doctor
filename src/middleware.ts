import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { REFRESH_COOKIE_NAME } from "@/utils/tokenStore";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const hasSession = request.cookies.has(REFRESH_COOKIE_NAME);

  // Protect dashboard and checkout: no refresh cookie → redirect to login
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/checkout")) {
    if (!hasSession) {
      const loginUrl = new URL("/auth/login", request.url);
      loginUrl.searchParams.set("returnTo", pathname);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  // Protect auth routes: has session → redirect to dashboard
  if (pathname.startsWith("/auth")) {
    if (hasSession) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/checkout/:path*", "/auth/:path*"],
};
