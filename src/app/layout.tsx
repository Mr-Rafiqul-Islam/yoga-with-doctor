import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import { QueryProvider } from "@/lib/query";
import { ReduxProvider } from "@/stores";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Yoga With Doctor",
    template: "%s | Yoga With Doctor",
  },
  description: "",
  keywords: [],
  authors: [],
  openGraph: {
    title: "",
    description: "",
    url: "",
    siteName: "Yoga With Doctor",
    locale: "en",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  var key = 'ywd-theme';
  var stored = localStorage.getItem(key);
  var dark;
  if (stored === 'dark') dark = true;
  else if (stored === 'light') dark = false;
  else {
    dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    localStorage.setItem(key, dark ? 'dark' : 'light');
  }
  document.documentElement.classList.toggle('dark', dark);
})();
            `.trim(),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <ReduxProvider>
          <QueryProvider>
            <a
              href="#main-content"
              className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:block focus:h-auto focus:w-auto focus:overflow-visible focus:rounded-radius-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-body-md focus:font-semibold focus:text-white focus:outline-none focus:[clip:auto] focus:m-0 focus:whitespace-normal"
            >
              Skip to main content
            </a>
            <Header />
            <main id="main-content" className="flex-1" role="main">
              {children}
            </main>
            <Footer />
          </QueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
