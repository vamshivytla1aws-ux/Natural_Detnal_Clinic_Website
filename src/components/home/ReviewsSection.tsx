"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FEATURED_REVIEWS, GOOGLE_BUSINESS } from "@/lib/reviews-data";

export default function ReviewsSection() {
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding bg-ivory-100">
      <div className="container-premium text-center">
        
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: `opacity 0.8s ${EASE}, transform 0.8s ${EASE}`,
          }}
          className="mb-16"
        >
          <span className="eyebrow mx-auto justify-center mb-6">Patient Stories</span>
          
          <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] text-forest-600 leading-tight">
            Kind words from our patients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16 text-left">
          {FEATURED_REVIEWS.map((review, i) => (
            <div
              key={review.id}
              className="bg-white rounded-[24px] p-8 shadow-sm border border-ivory-300 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-premium group flex flex-col h-full"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.8s ${EASE} ${0.1 + i * 0.1}s, transform 0.8s ${EASE} ${0.1 + i * 0.1}s, box-shadow 0.5s ease`,
              }}
            >
              <div className="font-serif text-[4rem] text-champagne-400 leading-none h-10 opacity-40 group-hover:text-champagne-500 transition-colors">
                &ldquo;
              </div>
              <p className="font-sans text-[0.9375rem] text-charcoal-600 leading-relaxed mb-8 flex-grow line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                {review.text}
              </p>
              
              <div className="border-t border-ivory-300 pt-5 mt-auto">
                <p className="font-semibold text-charcoal-700 text-sm mb-1">{review.author}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[0.75rem] text-charcoal-400">Google Review</span>
                  <a
                    href={review.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[0.75rem] font-semibold text-sage-600 group-hover:text-forest-600 transition-colors"
                  >
                    Read More 
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: `opacity 0.8s ${EASE} 0.5s, transform 0.8s ${EASE} 0.5s`,
          }}
        >
          <Link href="/reviews" className="btn-secondary">
            View All {GOOGLE_BUSINESS.reviewCount} Reviews
          </Link>
        </div>

      </div>
    </section>
  );
}
