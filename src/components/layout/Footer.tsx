"use client";

import Link from "next/link";
import { CLINIC } from "@/lib/config";
import { SERVICES } from "@/lib/services-data";

export function Footer() {
  return (
    <footer className="bg-forest-600 text-ivory-100 pt-20 pb-8 border-t border-forest-500">
      <div className="container-premium">
        
        {/* Top: Large Brand Name */}
        <div className="mb-16">
          <h2 className="font-serif text-[2.5rem] md:text-[4rem] text-white leading-none mb-4">
            {CLINIC.name}
          </h2>
          <p className="font-sans text-lg text-sage-200">
            Thoughtful dental care <br className="hidden md:block" />
            in Ramachandrapuram.
          </p>
        </div>

        {/* Middle: Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          
          <div>
            <h3 className="font-sans font-semibold text-[0.8125rem] tracking-wider uppercase text-champagne-400 mb-6">
              Clinic
            </h3>
            <ul className="space-y-4 font-sans text-[0.9375rem] text-sage-100">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/doctor" className="hover:text-white transition-colors">The Doctor</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors">Reviews</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-semibold text-[0.8125rem] tracking-wider uppercase text-champagne-400 mb-6">
              Treatments
            </h3>
            <ul className="space-y-4 font-sans text-[0.9375rem] text-sage-100">
              {SERVICES.slice(0, 5).map(service => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="hover:text-white transition-colors">
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
              <li><Link href="/services" className="hover:text-white transition-colors italic">View All →</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-semibold text-[0.8125rem] tracking-wider uppercase text-champagne-400 mb-6">
              Contact
            </h3>
            <ul className="space-y-4 font-sans text-[0.9375rem] text-sage-100">
              <li>
                <a href={CLINIC.contact.phoneHref} className="hover:text-white transition-colors">
                  {CLINIC.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={CLINIC.contact.whatsappHref} className="hover:text-white transition-colors">
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href={CLINIC.contact.emailHref} className="hover:text-white transition-colors">
                  Email Clinic
                </a>
              </li>
              <li className="pt-2">
                <Link href="/contact" className="text-white hover:text-champagne-400 transition-colors">
                  Book Appointment →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-semibold text-[0.8125rem] tracking-wider uppercase text-champagne-400 mb-6">
              Visit
            </h3>
            <address className="font-sans text-[0.9375rem] text-sage-100 not-italic space-y-4">
              <p>
                {CLINIC.address.line1}<br />
                {CLINIC.address.line2}<br />
                {CLINIC.address.line3}<br />
                {CLINIC.address.city}, {CLINIC.address.state} {CLINIC.address.pincode}
              </p>
              <p>
                <a href={CLINIC.address.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-champagne-400 transition-colors">
                  Get Directions →
                </a>
              </p>
            </address>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-forest-500 font-sans text-[0.8125rem] text-sage-200">
          <p>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
