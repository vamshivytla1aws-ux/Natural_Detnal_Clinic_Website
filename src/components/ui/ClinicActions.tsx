import React from 'react';
import { Phone, MessageCircle, MapPin, Calendar } from 'lucide-react';
import { CLINIC } from '@/lib/config';

interface ClinicActionsProps {
  variant?: 'row' | 'grid' | 'hero';
  treatmentName?: string;
  showCall?: boolean;
  showWhatsApp?: boolean;
  showDirections?: boolean;
  showBook?: boolean;
  className?: string;
}

export function ClinicActions({
  variant = 'grid',
  treatmentName,
  showCall = true,
  showWhatsApp = true,
  showDirections = true,
  showBook = false,
  className = '',
}: ClinicActionsProps) {
  const getWhatsAppMessage = () => {
    if (treatmentName) {
      return `Hello Natural Dental Clinic, I would like to enquire about ${treatmentName}.`;
    }
    return "Hello Natural Dental Clinic, I would like to book a dental consultation.";
  };

  const whatsappUrl = `${CLINIC.contact.whatsappHref}?text=${encodeURIComponent(getWhatsAppMessage())}`;

  if (variant === 'hero') {
    return (
      <div className={`flex flex-wrap gap-4 ${className}`}>
        {showBook && (
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-btn bg-forest-600 text-white font-sans text-[0.9375rem] font-medium transition-all duration-300 hover:bg-forest-700 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            aria-label="Book a Consultation"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book a Consultation
          </a>
        )}
        {showWhatsApp && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-btn bg-white text-forest-600 font-sans text-[0.9375rem] font-medium transition-all duration-300 shadow-sm border border-forest-100 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            aria-label="WhatsApp Natural Dental Clinic"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </a>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col space-y-4 w-full ${className}`}>
      {showBook && (
        <a 
          href="/contact"
          className="flex items-center justify-center w-full px-6 py-4 rounded-xl bg-forest-600 hover:bg-forest-700 text-white font-bold transition-colors shadow-sm hover:shadow-md"
          aria-label="Book Appointment Online"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Book Appointment Online
        </a>
      )}
      
      <div className={variant === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "flex flex-wrap gap-4"}>
        {showCall && (
          <a 
            href={CLINIC.contact.phoneHref}
            className="flex flex-1 items-center justify-center px-4 py-3 rounded-xl bg-white hover:bg-neutral-50 text-neutral-700 font-semibold transition-colors shadow-sm border border-neutral-200"
            aria-label="Call Natural Dental Clinic"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Clinic
          </a>
        )}
        
        {showWhatsApp && (
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center px-4 py-3 rounded-xl bg-sage-50 hover:bg-sage-100 text-forest-700 font-semibold transition-colors border border-sage-200 shadow-sm"
            aria-label="WhatsApp Natural Dental Clinic"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </a>
        )}

        {showDirections && (
          <a 
            href={CLINIC.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={variant === 'grid' ? "sm:col-span-2 flex items-center justify-center px-4 py-3 rounded-xl bg-white hover:bg-neutral-50 text-neutral-700 font-semibold transition-colors shadow-sm border border-neutral-200" : "flex flex-1 items-center justify-center px-4 py-3 rounded-xl bg-white hover:bg-neutral-50 text-neutral-700 font-semibold transition-colors shadow-sm border border-neutral-200"}
            aria-label="Get directions to Natural Dental Clinic"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Get Directions
          </a>
        )}
      </div>
    </div>
  );
}
