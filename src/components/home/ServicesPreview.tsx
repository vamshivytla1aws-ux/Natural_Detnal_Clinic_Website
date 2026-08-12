"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SERVICES } from "@/lib/services-data";
import { ChevronRight } from "lucide-react";

export default function ServicesPreview() {
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

  const previewServices = SERVICES.slice(0, 6);

  return (
    <section ref={ref} className="section-padding bg-ivory-100">
      <div className="container-premium">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="section-label justify-center">Our Treatments</span>
          <h2 className="heading-xl text-forest-600 mb-6">Comprehensive Dental Care</h2>
          <p className="text-gray-600 text-lg">
            From routine checkups to advanced procedures, we offer a full spectrum of dental services designed to keep your smile healthy and beautiful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewServices.map((service, idx) => (
            <div 
              key={service.slug} 
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-14 h-14 bg-sage-500/10 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-sage-500/20 transition-all">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif text-forest-600 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">{service.description}</p>
              <Link 
                href={`/services/${service.slug}`}
                className="inline-flex items-center text-sage-500 font-medium group-hover:text-forest-600 transition-colors"
              >
                Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Link href="/services" className="btn-secondary inline-block">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
