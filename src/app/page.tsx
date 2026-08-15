import HeroSection from "@/components/home/HeroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import TrustStrip from "@/components/home/TrustStrip";
import DoctorHighlight from "@/components/home/DoctorHighlight";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GalleryPreview from "@/components/home/GalleryPreview";
import ReviewsSection from "@/components/home/ReviewsSection";
import LocationSection from "@/components/home/LocationSection";
import FinalCTA from "@/components/home/FinalCTA";
import BlogPreview from "@/components/home/BlogPreview";
import { Metadata } from "next";
import { CLINIC } from "@/lib/config";

export const metadata: Metadata = {
  title: { absolute: CLINIC.seo.defaultTitle },
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
    "description": CLINIC.description,
    "url": CLINIC.seo.siteUrl,
    "telephone": CLINIC.contact.phone,
    "email": CLINIC.contact.email,
    "image": `${CLINIC.seo.siteUrl}/images/gallery/clinic-exterior-real.jpg`,
    "hasMap": CLINIC.address.googleMapsUrl,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${CLINIC.address.line1}, ${CLINIC.address.landmark}, ${CLINIC.address.locality}`,
      "addressLocality": CLINIC.address.cityArea,
      "addressRegion": CLINIC.address.state,
      "postalCode": CLINIC.address.postalCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.5023,
      "longitude": 78.2974
    },
    "areaServed": [
      { "@type": "City", "name": "Ramachandrapuram" },
      { "@type": "City", "name": "BHEL" },
      { "@type": "City", "name": "LIG" },
      { "@type": "City", "name": "Ashok Nagar" },
      { "@type": "City", "name": "Beeramguda" },
      { "@type": "City", "name": "Ameenpur" },
      { "@type": "City", "name": "Lingampally" },
      { "@type": "City", "name": "Chandanagar" },
      { "@type": "City", "name": "Miyapur" },
      { "@type": "City", "name": "Patancheru" },
      { "@type": "City", "name": "Sangareddy" }
    ],
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
      <HeroSection />
      <TrustStrip />
      <PhilosophySection />
      <DoctorHighlight />
      <ServicesPreview />
      <WhyChooseUs />
      <GalleryPreview />
      <ReviewsSection />
      <BlogPreview />
      <LocationSection />
      <FinalCTA />
    </>
  );
}
