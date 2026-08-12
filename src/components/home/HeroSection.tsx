"use client";

import Image from "next/image";
import Link from "next/link";
import { CLINIC } from "@/lib/config";
import { PhoneCall } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-ivory-100 overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-start animate-fade-up">
            <span className="eyebrow mb-6">
              {CLINIC.name}
            </span>
            
            <h1 className="heading-display text-forest-600 mb-6">
              Thoughtful Dental Care <br />
              <span className="text-sage-500">for Every Smile.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-charcoal-500 font-sans mb-8 max-w-xl leading-relaxed">
              Gentle, personalized dental care in Ramachandrapuram, Hyderabad. We focus on comfort, clear communication, and your long-term oral health.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10 w-full sm:w-auto">
              <Link href="/contact" className="btn-primary">
                Book Appointment
              </Link>
              <a href={CLINIC.contact.phoneHref} className="btn-secondary flex items-center gap-2 justify-center">
                <PhoneCall className="w-4 h-4" />
                Call Clinic
              </a>
            </div>
            
            {/* Trust Principles replacing the unverified stats */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-8 border-t border-ivory-300 w-full">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-champagne-400" />
                <span className="text-sm text-charcoal-600 font-medium">Patient-Focused Care</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-champagne-400" />
                <span className="text-sm text-charcoal-600 font-medium">Modern Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-champagne-400" />
                <span className="text-sm text-charcoal-600 font-medium">Hygiene-Focused</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-champagne-400" />
                <span className="text-sm text-charcoal-600 font-medium">Clear Guidance</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto lg:mr-0 rounded-image overflow-hidden shadow-lg border-4 border-white group">
              <Image 
                src="/images/doctor/doctor-main.jpg" 
                alt={`Dr. ${CLINIC.doctor.name}`} 
                fill 
                className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Doctor Nameplate */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/50">
                <p className="font-serif text-xl text-forest-600 font-bold mb-0.5">
                  {CLINIC.doctor.name}
                </p>
                <div className="flex justify-between items-end">
                  <p className="font-sans text-sm text-charcoal-500 font-medium">
                    {CLINIC.doctor.title}
                  </p>
                  <p className="font-sans text-[0.6875rem] text-sage-600 font-bold tracking-wider">
                    REG: {CLINIC.doctor.regNo}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Subtle background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sage-100 rounded-full mix-blend-multiply opacity-50 blur-3xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
