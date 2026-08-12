import Link from "next/link";
import { CLINIC } from "@/lib/config";
import { PhoneCall } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-forest-600 text-center relative overflow-hidden">
      
      {/* Extremely subtle faint organic line art (abstract background) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-champagne-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-champagne-400 opacity-50" />
      </div>

      <div className="container-premium relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-[2.5rem] md:text-[4rem] text-ivory-100 leading-tight mb-8">
            Your smile deserves thoughtful care.
          </h2>
          <p className="font-sans text-[1.125rem] text-sage-200 leading-relaxed mb-10 max-w-2xl mx-auto">
            Visit Natural Dental Clinic in Ramachandrapuram for personalized dental care in a calm and welcoming environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-btn bg-white text-forest-600 font-sans text-[1rem] font-bold transition-all duration-300 hover:bg-ivory-200"
            >
              Book Appointment
            </Link>
            <a 
              href={CLINIC.contact.phoneHref} 
              className="inline-flex items-center justify-center px-8 py-4 rounded-btn bg-transparent text-white font-sans text-[1rem] font-bold border border-white/30 transition-all duration-300 hover:bg-white hover:text-forest-600 hover:border-white"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              Call Clinic
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
