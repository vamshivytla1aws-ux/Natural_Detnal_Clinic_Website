"use client";

import Image from "next/image";
import Link from "next/link";

export default function GalleryPreview() {
  const previewImages = [
    { src: "/images/clinic/reception.jpg", alt: "Natural Dental Clinic Reception", span: "md:col-span-2 md:row-span-2" },
    { src: "/images/clinic/treatment-room.jpg", alt: "Treatment Room", span: "md:col-span-1 md:row-span-1" },
    { src: "/images/gallery/reception-desk.jpg", alt: "Reception desk at Natural Dental Clinic", span: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-premium">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="eyebrow mb-4">Our Clinic</span>
            <h2 className="heading-lg text-forest-600 mb-4">
              A calm environment <br className="hidden lg:block"/>
              for your care.
            </h2>
            <p className="text-charcoal-500 font-sans text-lg">
              We have designed our clinic to feel welcoming and professional, equipped with modern technology.
            </p>
          </div>
          <Link href="/gallery" className="btn-secondary hidden md:inline-flex">
            View Full Gallery
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4 mb-8 md:mb-0">
          {previewImages.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-[20px] overflow-hidden group shadow-sm bg-ivory-100 ${img.span}`}
            >
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-forest-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/gallery" className="btn-secondary w-full">
            View Full Gallery
          </Link>
        </div>

      </div>
    </section>
  );
}
