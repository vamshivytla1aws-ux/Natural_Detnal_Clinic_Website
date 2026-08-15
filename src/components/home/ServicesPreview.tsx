"use client";

import Link from "next/link";
import { SERVICES } from "@/lib/services-data";
import { ArrowRight } from "lucide-react";
import { ServiceIcon } from "@/components/shared/ServiceIcon";

export default function ServicesPreview() {
  const previewServices = SERVICES.slice(0, 6);

  return (
    <section className="section-padding bg-white">
      <div className="container-premium">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow mx-auto justify-center mb-4">Our Treatments</span>
          <h2 className="heading-xl mb-6">Comprehensive Dental Care</h2>
          <p className="text-charcoal-500 text-lg">
            Dental treatments available at Natural Dental Clinic in Ramachandrapuram, Hyderabad — from routine check-ups and preventive care to root canals, implants, braces, and children&apos;s dentistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {previewServices.map((service) => {
            return (
              <div 
                key={service.slug} 
                className="group relative bg-white rounded-card p-8 border border-ivory-300 shadow-card transition-all duration-500 ease-premium hover:shadow-card-hover hover:border-champagne-200 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sage-100 text-forest-600 flex items-center justify-center mb-6 transition-transform duration-500 ease-premium group-hover:scale-110 group-hover:bg-sage-200">
                    <ServiceIcon name={service.icon} size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="heading-md text-forest-600 mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-charcoal-500 font-sans text-[0.9375rem] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-4 border-t border-ivory-200">
                  <Link 
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-[0.875rem] font-semibold text-sage-600 group-hover:text-forest-600 transition-colors duration-300"
                  >
                    About {service.shortTitle}
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/services" className="btn-secondary">
            View All Treatments
          </Link>
        </div>
        
      </div>
    </section>
  );
}
