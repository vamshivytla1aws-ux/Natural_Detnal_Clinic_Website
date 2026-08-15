'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from '@/lib/gallery-data';
import { X } from 'lucide-react';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const filteredImages =
    activeCategory === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <div className="bg-forest-600 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-premium text-center">
          <span className="section-label text-champagne-400 justify-center mb-4 block">Our Space</span>
          <h1 className="heading-display text-white mb-4">Clinic Gallery</h1>
          <p className="text-ivory-100 font-sans max-w-2xl mx-auto text-lg">
            Take a closer look at our clinic, treatment space, equipment, and the people who welcome you at Natural Dental Clinic.
          </p>
        </div>
      </div>

      <section className="section-padding bg-ivory-100 min-h-screen">
        <div className="container-premium">

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {GALLERY_CATEGORIES.map((category) => (
              <button
                key={category.id}
                id={`gallery-filter-${category.id}`}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full font-sans text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-forest-600 text-white shadow-premium'
                    : 'bg-white text-forest-600 hover:bg-sage-50 border border-ivory-300 hover:border-sage-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gray-200 shadow-card hover:shadow-card-hover transition-all duration-400"
                style={{ aspectRatio: image.width && image.height ? `${image.width}/${image.height}` : '4/3' }}
                onClick={() => setSelectedImage({ src: image.src, alt: image.alt })}
                role="button"
                tabIndex={0}
                aria-label={`View: ${image.alt}`}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedImage({ src: image.src, alt: image.alt })}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {image.badge && (
                  <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-forest-600/90 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-white shadow-sm backdrop-blur-md">
                    {image.badge}
                  </span>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-700/80 via-forest-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                  <p className="text-white font-sans text-sm font-medium leading-tight">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.some((image) => image.category === 'results') && (
            <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-6 text-charcoal-400">
              Clinical photographs are shown for general illustration. Treatment suitability and outcomes vary between patients and cannot be guaranteed.
            </p>
          )}

          {filteredImages.length === 0 && (
            <div className="text-center py-20 text-charcoal-400 font-sans">
              <p className="text-lg">No images found for this category.</p>
              <button
                onClick={() => setActiveCategory('all')}
                className="btn-primary mt-4"
              >
                View All
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-charcoal-900/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>
          <div
            className="relative w-full max-w-5xl max-h-[85vh]"
            style={{ aspectRatio: '16/9' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          <p className="absolute bottom-6 left-0 right-0 text-center text-white/70 text-sm font-sans px-4">
            {selectedImage.alt}
          </p>
        </div>
      )}
    </>
  );
}
