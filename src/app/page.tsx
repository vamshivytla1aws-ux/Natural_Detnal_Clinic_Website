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
import { MobileActionBar } from "@/components/ui/MobileActionBar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <HeroSection />
      <PhilosophySection />
      <TrustStrip />
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
