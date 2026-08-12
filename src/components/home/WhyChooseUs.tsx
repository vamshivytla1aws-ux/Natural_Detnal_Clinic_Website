"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const REASONS = [
  {
    title: "Gentle, Patient-Focused Care",
    desc: "We prioritise your comfort, using modern techniques to make treatments as comfortable as possible.",
  },
  {
    title: "Personalised Treatment Planning",
    desc: "Careful diagnosis and clear communication before any procedure begins. We tailor care to you.",
  },
  {
    title: "Hygiene-Focused Clinical Environment",
    desc: "Strict adherence to sterilisation and infection control protocols for your absolute safety.",
  },
  {
    title: "Clear Communication",
    desc: "Transparent discussions about options, costs, and expected outcomes without pressure.",
  },
];

export default function WhyChooseUs() {
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
      <div className="container-premium max-w-5xl">
        
        <div
          className="mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: `opacity 0.8s ${EASE}, transform 0.8s ${EASE}`,
          }}
        >
          <span className="eyebrow">04 / Our Clinic</span>
          <h2 className="heading-xl">Why Choose Us</h2>
        </div>

        <div className="flex flex-col">
          {REASONS.map((reason, i) => (
            <div
              key={i}
              className="group relative flex flex-col md:flex-row md:items-center py-8 border-b border-ivory-300 cursor-default"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.7s ${EASE} ${0.1 + i * 0.1}s, transform 0.7s ${EASE} ${0.1 + i * 0.1}s`,
              }}
            >
              <div className="w-16 md:w-24 mb-4 md:mb-0 shrink-0">
                <span className="font-serif text-xl md:text-2xl text-champagne-400 group-hover:text-forest-600 transition-colors duration-400">
                  0{i + 1}
                </span>
              </div>
              <div className="flex-grow md:pr-12">
                <h3 className="font-serif text-[1.35rem] md:text-2xl text-forest-600 mb-2 transition-transform duration-500 ease-out group-hover:translate-x-2">
                  {reason.title}
                </h3>
                <p className="font-sans text-[0.9375rem] text-charcoal-400 leading-relaxed max-w-2xl transition-transform duration-500 ease-out group-hover:translate-x-2">
                  {reason.desc}
                </p>
              </div>
              
              {/* Expanding line on hover */}
              <div className="absolute bottom-[-1px] left-0 h-[1px] bg-forest-600 w-0 group-hover:w-full transition-all duration-700 ease-premium" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
