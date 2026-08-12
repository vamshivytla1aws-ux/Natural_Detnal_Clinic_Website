import type { Metadata } from "next";
import { CLINIC } from "@/lib/config";
import { JsonLd } from "@/components/shared/JsonLd";
import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import AboutPreview from "@/components/home/AboutPreview";
import DoctorHighlight from "@/components/home/DoctorHighlight";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ReviewsSection from "@/components/home/ReviewsSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import LocationSection from "@/components/home/LocationSection";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: CLINIC.seo.defaultTitle,
  description: CLINIC.seo.defaultDescription,
  alternates: { canonical: CLINIC.seo.siteUrl },
  openGraph: {
    title: CLINIC.seo.defaultTitle,
    description: CLINIC.seo.defaultDescription,
    url: CLINIC.seo.siteUrl,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd type="Organization" />
      <JsonLd type="WebSite" />
      <HeroSection />
      <TrustStrip />
      <AboutPreview />
      <DoctorHighlight />
      <ServicesPreview />
      <WhyChooseUs />
      <ReviewsSection />
      <GalleryPreview />
      <LocationSection />
      <FinalCTA />
    </>
  );
}
