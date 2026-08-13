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
      "streetAddress": `${CLINIC.address.line1}, ${CLINIC.address.line2}, ${CLINIC.address.line3}`,
      "addressLocality": CLINIC.address.city,
      "addressRegion": CLINIC.address.state,
      "postalCode": CLINIC.address.pincode,
      "addressCountry": CLINIC.address.country
    },
    "openingHoursSpecification": CLINIC.hours.schedule.map(schedule => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": schedule.day.includes("–") 
        ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] 
        : ["Sunday"],
      "opens": schedule.morning.split(" ")[0],
      "closes": schedule.evening === "Closed" ? schedule.morning.split(" – ")[1].split(" ")[0] : schedule.evening.split(" – ")[1].split(" ")[0]
    }))
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
