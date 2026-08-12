"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CLINIC } from "@/lib/config";
import { PhoneCall, MapPin, ChevronRight, Shield, Zap, Heart, Star } from "lucide-react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] bg-forest-600 overflow-hidden flex flex-col justify-center section-padding">
      {/* Background gradients and shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-600 via-forest-600 to-forest-700 z-0"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sage-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-mint-400/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block py-1 px-3 rounded-full bg-sage-500/20 text-champagne-400 text-sm font-semibold tracking-wider mb-6 border border-champagne-400/20">
              NATURAL DENTAL CLINIC
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6">
              Your Smile Deserves <br />
              <span className="text-champagne-400">Expert Care</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-sans mb-8 max-w-xl leading-relaxed">
              Experience gentle, natural-first dentistry with Dr. Vandana Vytla. Combining advanced technology with a compassionate approach for your entire family.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/contact" className="btn-primary flex items-center gap-2">
                Book Appointment
                <ChevronRight className="w-4 h-4" />
              </Link>
              <a href={CLINIC.contact.phoneHref} className="btn-white flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                Call Now
              </a>
              <a href={CLINIC.address.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full font-medium transition-all duration-300 text-white hover:bg-white/10 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-sage-500/20 flex items-center justify-center text-champagne-400">
                  <Star className="w-5 h-5" />
                </div>
                <span className="text-sm text-white/90 font-medium">10+ Years<br/>Experience</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-sage-500/20 flex items-center justify-center text-champagne-400">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-sm text-white/90 font-medium">500+ Happy<br/>Patients</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-sage-500/20 flex items-center justify-center text-champagne-400">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-sm text-white/90 font-medium">Advanced<br/>Technology</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-sage-500/20 flex items-center justify-center text-champagne-400">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-sm text-white/90 font-medium">Hygienic<br/>& Safe</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-1000 delay-300 transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl border border-white/10 z-10">
              <Image 
                src="/images/doctor/doctor-main.jpg" 
                alt="Dr. Vandana Vytla" 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-600/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-serif text-2xl mb-1">Dr. Vandana Vytla</p>
                <p className="text-champagne-400 text-sm font-medium">Lead Dental Surgeon</p>
              </div>
            </div>
            {/* Decorative element behind image */}
            <div className="absolute -inset-4 border border-champagne-400/30 rounded-[2.5rem] z-0 translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
