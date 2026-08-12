import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
  alternates: {
    canonical: CLINIC.seo.siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ivory-100 text-charcoal-700 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
