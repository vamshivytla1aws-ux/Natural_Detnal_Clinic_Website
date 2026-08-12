"use client";

import Link from "next/link";
import { CLINIC } from "@/lib/config";
import { useEffect, useRef, useState } from "react";

export default function FinalCTA() {
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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative section-padding overflow-hidden"
      style={{ background: "#12372A" }} // Deep forest
    >
      {/* Abstract curves / background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full mix-blend-screen opacity-10"
          style={{ background: "radial-gradient(circle, #C5A66A 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full mix-blend-screen opacity-5"
          style={{ background: "radial-gradient(circle, #97A98F 0%, transparent 70%)", transform: "translate(-20%, 20%)" }}
        />
      </div>

      <div className="container-premium relative z-10 text-center">
        <div
          className="max-w-3xl mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: `opacity 0.9s ${EASE}, transform 0.9s ${EASE}`,
          }}
        >
          {/* Tiny champagne accent dot */}
          <div className="w-1.5 h-1.5 rounded-full bg-champagne-400 mx-auto mb-8" />

          <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] text-ivory-100 leading-[1.05] mb-6">
            Your smile deserves <br/>
            <span style={{ fontStyle: "italic", color: "#97A98F" }}>thoughtful</span> care.
          </h2>

          <p className="font-sans text-[1.125rem] text-sage-200/80 mb-12 max-w-xl mx-auto">
            Book an appointment at Natural Dental Clinic for an evaluation and personalised treatment discussion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary"
              style={{ background: "#FAF8F2", color: "#12372A" }}
            >
              Book Appointment
            </Link>
            <a
              href={CLINIC.contact.phoneHref}
              className="btn-secondary"
              style={{ borderColor: "rgba(250,248,242,0.3)", color: "#FAF8F2" }}
            >
              Call Clinic
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
