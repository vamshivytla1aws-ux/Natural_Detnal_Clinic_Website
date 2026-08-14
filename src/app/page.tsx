import HeroSection from "@/components/home/HeroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import DoctorHighlight from "@/components/home/DoctorHighlight";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GalleryPreview from "@/components/home/GalleryPreview";
import ReviewsSection from "@/components/home/ReviewsSection";
import LocationSection from "@/components/home/LocationSection";
import FinalCTA from "@/components/home/FinalCTA";
import { MobileActionBar } from "@/components/ui/MobileActionBar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Metadata } from "next";
import { CLINIC } from "@/lib/config";

export const metadata: Metadata = {
  title: CLINIC.seo.defaultTitle,
  description: CLINIC.seo.defaultDescription,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": CLINIC.name,
    "url": CLINIC.seo.siteUrl,
    "telephone": CLINIC.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${CLINIC.address.line1}, ${CLINIC.address.landmark}, ${CLINIC.address.locality}`,
      "addressLocality": CLINIC.address.cityArea,
      "addressRegion": CLINIC.address.state,
      "postalCode": CLINIC.address.postalCode,
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "14:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "17:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "10:00",
        "closes": "14:00"
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }} />
      <ScrollProgress />
      <HeroSection />
      <PhilosophySection />
      <DoctorHighlight />
      <ServicesPreview />
      <WhyChooseUs />
      <GalleryPreview />
      <ReviewsSection />
      <LocationSection />
      <FinalCTA />
      <MobileActionBar />
    </>
  );
}
