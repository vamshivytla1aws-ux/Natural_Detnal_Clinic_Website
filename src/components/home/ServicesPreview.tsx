"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SERVICES } from "@/lib/services-data";

export default function ServicesPreview() {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding bg-cream-200" style={{ background: "#F3EFE4" }}>
      <div className="container-premium">
        
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: `opacity 0.8s ${EASE}, transform 0.8s ${EASE}`,
          }}
        >
          <div>
            <span className="eyebrow">03 / Treatments</span>
            <h2 className="heading-xl">Boutique Dental Care</h2>
          </div>
          <Link href="/services" className="btn-ghost px-0 hover:bg-transparent hover:text-forest-500 group border-b border-transparent hover:border-forest-400 rounded-none pb-1">
            View All Treatments
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M3.33334 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 5).map((service, i) => {
            // Make the first item span 2 columns on desktop if desired, but sticking to standard grid for better responsive control
            const isFeatured = i === 0;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`service-card group flex flex-col p-8 lg:p-10 ${isFeatured ? "md:col-span-2 lg:col-span-2" : ""}`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.8s ${EASE} ${0.1 + i * 0.1}s, transform 0.8s ${EASE} ${0.1 + i * 0.1}s, box-shadow 0.4s ease, border-color 0.4s ease`,
                }}
              >
                <div className="flex justify-between items-start mb-12">
                  <span className="font-serif text-2xl text-champagne-400">
                    0{i + 1}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-ivory-300 flex items-center justify-center transition-colors duration-400 group-hover:bg-forest-600 group-hover:border-forest-600 group-hover:text-white text-forest-600">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <div className="mt-auto">
                  <p className="text-[0.6875rem] font-sans font-semibold tracking-[0.15em] uppercase text-sage-600 mb-3">
                    {service.category}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl text-forest-600 mb-3 group-hover:text-forest-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-[0.9375rem] text-charcoal-500 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
