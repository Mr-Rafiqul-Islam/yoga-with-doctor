import { AuthLayoutConditional } from "./AuthLayoutConditional";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthLayoutConditional>{children}</AuthLayoutConditional>;
}
