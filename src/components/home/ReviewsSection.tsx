"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GOOGLE_RATING, FEATURED_REVIEWS } from "@/lib/reviews-data";
import { Star, MessageSquareQuote } from "lucide-react";

export default function ReviewsSection() {
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
    <section ref={ref} className="section-padding bg-sage-500/10">
      <div className="container-premium">
        <div className={`flex flex-col md:flex-row justify-between items-end gap-8 mb-16 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-2xl">
            <span className="section-label">Patient Stories</span>
            <h2 className="heading-xl text-forest-600 mb-4">Smiles We've Transformed</h2>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it. Read what our patients have to say about their experience at Natural Dental Clinic.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 min-w-[250px]">
            <div className="text-center">
              <span className="text-4xl font-serif text-forest-600 font-bold block">{GOOGLE_RATING.score}</span>
              <div className="flex text-champagne-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div>
              <p className="font-bold text-gray-800">Google Rating</p>
              <p className="text-sm text-gray-500">Based on {GOOGLE_RATING.totalReviews}+ reviews</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {FEATURED_REVIEWS.slice(0, 3).map((review, idx) => (
            <div 
              key={review.id}
              className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative group hover:-translate-y-1 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <MessageSquareQuote className="absolute top-6 right-6 w-8 h-8 text-sage-500/20 group-hover:text-sage-500/40 transition-colors" />
              
              <div className="flex gap-1 text-champagne-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 italic line-clamp-4 relative z-10">"{review.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-forest-600 flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Link href="/reviews" className="btn-secondary inline-block">
            Read All Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
