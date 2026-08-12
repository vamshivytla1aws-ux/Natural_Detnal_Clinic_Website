"use client";

import Link from "next/link";
import { CLINIC } from "@/lib/config";
import { PhoneCall, Calendar, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function FinalCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-forest-600 relative overflow-hidden text-center">
      {/* Decorative bg */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-sage-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-champagne-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

      <div className="container-premium relative z-10">
        <div className={`max-w-3xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Ready for a Healthier Smile?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
            Take the first step towards perfect oral health. Schedule your consultation with Dr. Vandana today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-white w-full sm:w-auto flex items-center justify-center gap-2 text-lg px-8 py-4">
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
            
            <a href={CLINIC.contact.phoneHref} className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 w-full sm:w-auto flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-full font-medium transition-all duration-300">
              <PhoneCall className="w-5 h-5" />
              Call {CLINIC.contact.phoneDisplay}
            </a>

            <a href={CLINIC.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full sm:w-auto flex items-center justify-center gap-2 text-lg px-8 py-4">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
