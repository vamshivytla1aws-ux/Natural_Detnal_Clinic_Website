"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { CLINIC } from "@/lib/config";

export default function DoctorHighlight() {
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
    <section ref={ref} className="section-padding bg-gradient-to-br from-forest-600 to-forest-700 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sage-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-mint-400/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/3"></div>

      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden border-8 border-white/10 shadow-2xl">
              <Image
                src="/images/doctor/doctor-main.jpg"
                alt="Dr. Vandana Vytla"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="text-champagne-400 font-semibold tracking-wider text-sm uppercase mb-4 block">Meet Your Doctor</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-2">
              {CLINIC.doctor.name}
            </h2>
            <p className="text-champagne-400 text-lg mb-1 font-medium">{CLINIC.doctor.title}</p>
            <p className="text-white/60 text-sm mb-6 font-sans">Reg No: {CLINIC.doctor.regNo}</p>
            
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              {CLINIC.doctor.bio}
            </p>

            <Link href="/doctor" className="btn-white inline-flex items-center gap-2">
              Read Full Profile
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
