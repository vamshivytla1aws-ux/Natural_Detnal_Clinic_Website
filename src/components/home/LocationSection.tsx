import { CLINIC } from "@/lib/config";
import { PhoneCall, MapPin } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="section-padding bg-ivory-100 border-t border-ivory-300">
      <div className="container-premium">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="flex flex-col items-start max-w-xl">
            <span className="eyebrow mb-4">Visit Us</span>
            
            <h2 className="heading-lg text-forest-600 mb-8">
              {CLINIC.name}
            </h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-sage-500 mt-1 flex-shrink-0" />
                <address className="not-italic font-sans text-[1.0625rem] text-charcoal-600 leading-relaxed">
                  {CLINIC.address.line1}<br />
                  {CLINIC.address.line2}<br />
                  {CLINIC.address.line3}<br />
                  {CLINIC.address.city}, {CLINIC.address.state} {CLINIC.address.pincode}
                </address>
              </div>
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
                <PhoneCall className="w-4 h-4 mr-2" />
                Call Clinic
              </a>
            </div>
          </div>

          <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-[24px] overflow-hidden shadow-sm border border-ivory-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.109315570077!2d78.2974448751676!3d17.50231908339893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb933cebe04eb5%3A0x6e902b704c7c5950!2sNatural%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1707204481234!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale-[20%] contrast-[95%]"
              title="Natural Dental Clinic Location"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
