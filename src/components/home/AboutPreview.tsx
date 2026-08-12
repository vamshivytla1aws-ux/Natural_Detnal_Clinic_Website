"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function AboutPreview() {
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

  const features = [
    "Gentle & compassionate care",
    "Modern dental techniques",
    "Natural-first philosophy",
    "Patient comfort priority"
  ];

  return (
    <section ref={ref} className="section-padding bg-ivory-100 overflow-hidden">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <span className="section-label">Our Philosophy</span>
            <h2 className="heading-xl text-forest-600 mb-6">
              Dentistry with a <span className="text-sage-500">Natural Touch</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              At Natural Dental Clinic, we believe in preserving your natural smile while providing the highest standard of modern dental care. Our approach combines advanced clinical expertise with a soothing environment to make your visits as comfortable as possible.
            </p>
            
            <ul className="space-y-4 mb-10">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-6 h-6 text-sage-500 flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <Link href="/about" className="btn-primary inline-block">
              Discover Our Approach
            </Link>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative rounded-3xl overflow-hidden aspect-square shadow-xl">
              <Image
                src="/images/clinic/clinic-exterior.jpg"
                alt="Natural Dental Clinic"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Accent box */}
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-lg max-w-[250px] z-10 hidden md:block border-t-4 border-sage-500">
              <p className="font-serif text-2xl text-forest-600 mb-2">Dedicated to your smile</p>
              <p className="text-sm text-gray-500 font-sans">Committed to excellence in every treatment we provide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
