"use client";

import { useEffect, useRef, useState } from "react";
import { CLINIC } from "@/lib/config";

export default function LocationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const EASE = "cubic-bezier(0.22,1,0.36,1)";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding bg-ivory-100 border-t border-ivory-300">
      <div className="container-premium">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: `opacity 0.8s ${EASE}, transform 0.8s ${EASE}`,
            }}
          >
            <span className="eyebrow">07 / Visit Us</span>
            <h2 className="heading-xl mb-8">Natural Dental Clinic</h2>
            
            <div className="space-y-6 font-sans text-[1.0625rem] text-charcoal-500 leading-relaxed mb-10">
              <p>
                {CLINIC.address.line1}<br />
                {CLINIC.address.line2}<br />
                {CLINIC.address.line3}<br />
                {CLINIC.address.city}, {CLINIC.address.state} {CLINIC.address.pincode}
              </p>
              
              <p>
                <strong className="font-semibold text-charcoal-700">Clinic Hours</strong><br />
                {CLINIC.hours.schedule[0].day}: {CLINIC.hours.schedule[0].morning}, {CLINIC.hours.schedule[0].evening}<br />
                {CLINIC.hours.schedule[1].day}: {CLINIC.hours.schedule[1].morning}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={CLINIC.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get Directions
              </a>
              <a
                href={CLINIC.contact.phoneHref}
                className="btn-secondary"
              >
                Call Clinic
              </a>
            </div>
          </div>

          {/* Map Frame */}
          <div
            className="relative h-[450px] lg:h-[550px] rounded-[24px] overflow-hidden shadow-lg border border-ivory-300 group"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: `opacity 0.8s ${EASE} 0.15s, transform 0.8s ${EASE} 0.15s`,
            }}
          >
            {/* The iframe map */}
            <iframe
              src={CLINIC.address.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%) contrast(90%)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
              className="transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
            ></iframe>

            {/* Floating Map Card */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-5 rounded-[16px] shadow-premium border border-ivory-300 max-w-[240px]">
              <p className="font-serif text-lg text-forest-600 leading-tight mb-1">
                Natural Dental Clinic
              </p>
              <p className="font-sans text-xs text-charcoal-400 mb-3">
                {CLINIC.address.city}
              </p>
              <a
                href={CLINIC.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-sans text-[0.8125rem] font-semibold text-sage-600 hover:text-forest-600 transition-colors"
              >
                Get Directions
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="translate-y-[0.5px]">
                  <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
