"use client";

import Link from "next/link";
import { SERVICES } from "@/lib/services-data";
import { 
  Shield, 
  Star, 
  Sparkles, 
  Smile, 
  Activity, 
  Baby, 
  Heart, 
  Crown, 
  Microscope,
  ArrowRight 
} from "lucide-react";

// Helper to map string icon names to Lucide components
const IconMap: Record<string, any> = {
  Shield,
  Star,
  Sparkles,
  Smile,
  Activity,
  Baby,
  Heart,
  Crown,
  Microscope,
};

export default function ServicesPreview() {
  const previewServices = SERVICES.slice(0, 6);

  return (
    <section className="section-padding bg-white">
      <div className="container-premium">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow mx-auto justify-center mb-4">Our Treatments</span>
          <h2 className="heading-xl mb-6">Comprehensive Dental Care</h2>
          <p className="text-charcoal-500 text-lg">
            From routine checkups to advanced procedures, we offer a full spectrum of dental services designed to keep your smile healthy and beautiful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {previewServices.map((service) => {
            const IconComponent = IconMap[service.icon] || Shield;
            
            return (
              <div 
                key={service.slug} 
                className="group relative bg-ivory-100 rounded-card p-8 border border-ivory-300 transition-all duration-400 ease-premium hover:shadow-premium hover:border-sage-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sage-200 text-forest-600 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                    <IconComponent size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[1.375rem] font-serif text-forest-600 mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-charcoal-500 font-sans text-[0.9375rem] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-4 border-t border-ivory-300">
                  <Link 
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-[0.875rem] font-semibold text-sage-600 group-hover:text-forest-600 transition-colors"
                  >
                    Learn More 
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
        
      </div>
    </section>
  );
}
