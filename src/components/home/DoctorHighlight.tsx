"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CLINIC } from "@/lib/config";

export default function DoctorHighlight() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
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

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Subtle parallax
  const parallaxY = scrollY * 0.05;

  return (
    <section ref={ref} className="section-padding bg-ivory-100 overflow-hidden">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* ── LEFT: IMAGE ── */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div
              className="relative w-full max-w-[500px]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? `translateY(${-parallaxY * 0.5}px)` : `translateY(40px)`,
                transition: `opacity 1s ${EASE}, transform 0.1s linear`,
              }}
            >
              {/* Image Frame */}
              <div
                className="relative overflow-hidden organic-frame"
                style={{
                  paddingBottom: "120%",
                  boxShadow: "0 24px 64px rgba(18,55,42,0.12)",
                }}
              >
                <Image
                  src="/images/doctor/doctor-main.jpg"
                  alt="Dr. Vandana Vytla"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,55,42,0.2)] to-transparent mix-blend-multiply" />
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 border border-champagne-400/30 rounded-full"
                style={{ zIndex: -1 }}
              />
              <div
                className="absolute top-12 -left-8 w-24 h-24 border border-sage-500/20 rounded-full"
                style={{ zIndex: -1 }}
              />
            </div>
          </div>

          {/* ── RIGHT: CONTENT ── */}
          <div className="flex flex-col order-1 lg:order-2">
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.9s ${EASE} 0.2s, transform 0.9s ${EASE} 0.2s`,
              }}
            >
              <span className="eyebrow">02 / The Doctor</span>

              <h2 className="heading-xl mb-4">
                Meet Your Dentist
              </h2>
              
              <div className="mb-6">
                <p className="font-serif text-[2rem] text-forest-600 leading-none mb-1">
                  {CLINIC.doctor.name}
                </p>
                <p className="font-sans text-[0.875rem] text-sage-600 font-medium tracking-wide uppercase">
                  {CLINIC.doctor.title} · Reg No: {CLINIC.doctor.regNo}
                </p>
              </div>

              <div className="divider-gold mb-8" />

              <p className="font-sans text-[1.0625rem] text-charcoal-500 leading-relaxed mb-10 max-w-[480px]">
                {CLINIC.doctor.bio}
              </p>

              <Link href="/doctor" className="btn-secondary group">
                Meet Dr. Vandana
                <svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
