"use client";

import { useEffect, useRef, useState } from "react";
import { CLINIC } from "@/lib/config";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export default function LocationSection() {
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

  return (
    <section ref={ref} className="section-padding bg-ivory-100" id="location">
      <div className="container-premium">
        <div className="text-center mb-12">
          <div className="section-label justify-center">Find Us</div>
          <h2 className="heading-xl">Visit Our Clinic</h2>
          <div className="divider-gold mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">

          {/* Details */}
          <div
            className={`p-10 md:p-14 flex flex-col justify-center transition-all duration-700 transform ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-7">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-sage-500/10 rounded-full flex items-center justify-center flex-shrink-0 text-forest-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-charcoal-700 mb-1">Clinic Address</h3>
                  <p className="text-charcoal-500 text-sm leading-relaxed">
                    {CLINIC.address.line1},<br />
                    {CLINIC.address.line2},<br />
                    {CLINIC.address.line3},<br />
                    {CLINIC.address.city}, {CLINIC.address.state} {CLINIC.address.pincode}
                  </p>
                  <p className="text-xs text-sage-500 mt-1">{CLINIC.address.landmark}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-sage-500/10 rounded-full flex items-center justify-center flex-shrink-0 text-forest-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-charcoal-700 mb-1">Working Hours</h3>
                  {CLINIC.hours.schedule.map((item) => (
                    <div key={item.day} className="flex justify-between gap-4 text-sm text-charcoal-500">
                      <span className="font-medium">{item.day}:</span>
                      <span>{item.morning}{item.evening !== "Closed" ? `, ${item.evening}` : ""}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-sage-500/10 rounded-full flex items-center justify-center flex-shrink-0 text-forest-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-charcoal-700 mb-1">Phone</h3>
                  <a href={CLINIC.contact.phoneHref} className="text-sm text-charcoal-500 hover:text-forest-600 transition-colors">
                    {CLINIC.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-sage-500/10 rounded-full flex items-center justify-center flex-shrink-0 text-forest-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-charcoal-700 mb-1">Email</h3>
                  <a href={CLINIC.contact.emailHref} className="text-sm text-charcoal-500 hover:text-forest-600 transition-colors break-all">
                    {CLINIC.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <a
                href={CLINIC.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="location-directions-btn"
                className="btn-primary inline-flex items-center gap-2 w-full justify-center md:w-auto"
              >
                Get Directions
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Map */}
          <div
            className={`relative h-[400px] lg:h-auto bg-gray-200 transition-all duration-700 delay-300 transform ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <iframe
              src={CLINIC.address.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Natural Dental Clinic Location"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
