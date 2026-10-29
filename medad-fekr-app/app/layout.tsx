import type { Metadata, Viewport } from "next";
import { SerwistProvider } from "./serwist";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "مداد فکر",
  title: "مداد فکر",
  description: "تجربه‌های نوشتن برای دیدن و پرورش فکر",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "مداد فکر",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <SerwistProvider swUrl="/sw.js">{children}</SerwistProvider>
      </body>
    </html>
  );
}
