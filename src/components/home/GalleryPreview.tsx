"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ZoomIn } from "lucide-react";

export default function GalleryPreview() {
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

  const images = [
    { src: "/images/clinic/clinic-exterior.jpg", alt: "Clinic Exterior", span: "col-span-1 row-span-1" },
    { src: "/images/clinic/reception.jpg", alt: "Reception Area", span: "col-span-1 md:col-span-2 row-span-1" },
    { src: "/images/doctor/doctor-main.jpg", alt: "Dr. Vandana Consulting", span: "col-span-1 md:col-span-2 row-span-1" },
    { src: "/images/clinic/treatment-room.jpg", alt: "Modern Treatment Room", span: "col-span-1 row-span-1" },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container-premium">
        <div className={`flex flex-col md:flex-row justify-between items-end gap-6 mb-12 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div>
            <span className="section-label">Tour Our Clinic</span>
            <h2 className="heading-xl text-forest-600">A Calming Environment</h2>
          </div>
          <Link href="/gallery" className="text-sage-500 font-medium hover:text-forest-600 transition-colors">
            View Full Gallery &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-2xl overflow-hidden group ${img.span} transform transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-forest-600/0 group-hover:bg-forest-600/70 transition-colors duration-300 flex items-center justify-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <ZoomIn className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white font-medium">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
