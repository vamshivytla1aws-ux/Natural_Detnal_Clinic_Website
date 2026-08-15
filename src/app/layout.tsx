import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/ui/MobileActionBar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CLINIC } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(CLINIC.seo.siteUrl),
  title: {
    default: CLINIC.seo.defaultTitle,
    template: CLINIC.seo.titleTemplate,
  },
  description: CLINIC.seo.defaultDescription,
  keywords: [...CLINIC.seo.keywords],
  authors: [{ name: CLINIC.name }],
  creator: CLINIC.name,
  publisher: CLINIC.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: CLINIC.seo.siteUrl,
    siteName: CLINIC.name,
    title: CLINIC.seo.defaultTitle,
    description: CLINIC.seo.defaultDescription,
    images: [
      {
        url: CLINIC.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${CLINIC.name} — Dental Clinic in Ramachandrapuram, Hyderabad`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: CLINIC.seo.defaultTitle,
    description: CLINIC.seo.defaultDescription,
    images: [CLINIC.seo.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  category: "healthcare",
};

export const viewport: Viewport = {
  themeColor: "#FAF8F3",
  colorScheme: "light",
};

import { Cormorant_Garamond, Manrope } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${cormorant.variable} ${manrope.variable}`}>
      <body className="bg-ivory-100 text-charcoal-700 antialiased font-sans flex flex-col min-h-screen">
        <ScrollProgress />
        <Header />
        <main className="flex-grow pb-24 lg:pb-0">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
