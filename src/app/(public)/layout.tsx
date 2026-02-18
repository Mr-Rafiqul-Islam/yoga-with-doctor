import { Footer } from "@/components/layout";

export default function PublicLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        {children}
        <Footer />
      </>
    );
  }