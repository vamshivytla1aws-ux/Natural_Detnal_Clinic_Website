"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const IMAGES = [
  { src: "/images/clinic/reception.jpg", alt: "Clinic Reception", className: "col-span-2 row-span-2 aspect-[4/3]" },
  { src: "/images/clinic/treatment-room.jpg", alt: "Treatment Room", className: "col-span-1 row-span-1 aspect-square" },
  { src: "/images/clinic/equipment.jpg", alt: "Advanced Equipment", className: "col-span-1 row-span-1 aspect-square" },
];

export default function GalleryPreview() {
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
        
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: `opacity 0.8s ${EASE}, transform 0.8s ${EASE}`,
          }}
        >
          <div>
            <span className="eyebrow">05 / Our Space</span>
            <h2 className="heading-xl">Clinic Environment</h2>
          </div>
          <Link href="/gallery" className="btn-ghost px-0 hover:bg-transparent hover:text-forest-500 group border-b border-transparent hover:border-forest-400 rounded-none pb-1">
            View Full Gallery
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M3.33334 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {IMAGES.map((img, i) => (
            <Link
              key={i}
              href="/gallery"
              className={`group relative overflow-hidden rounded-[20px] ${img.className} block`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.8s ${EASE} ${0.1 + i * 0.1}s, transform 0.8s ${EASE} ${0.1 + i * 0.1}s`,
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/20 transition-colors duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <p className="font-sans text-sm font-medium text-white tracking-wide">{img.alt}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
