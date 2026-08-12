"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CLINIC } from "@/lib/config";
import { ArrowUpRight, Phone } from "lucide-react";

const EASE = "cubic-bezier(0.22,1,0.36,1)";

function FadeIn({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.85s ${EASE}, transform 0.85s ${EASE}`,
      }}
    >
      {children}
    </div>
  );
}

export default function HeroSection() {
  const imgRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallaxY = scrollY * 0.12;

  return (
    <section
      className="relative overflow-hidden grain-overlay"
      style={{
        minHeight: "100svh",
        background: "#FAF8F2",
        paddingTop: "80px",
      }}
    >
      {/* Subtle radial sage bloom */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "60vw",
          height: "60vw",
          maxWidth: "900px",
          maxHeight: "900px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(151,169,143,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Subtle bottom left bloom */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "0",
          left: "-10%",
          width: "50vw",
          height: "50vw",
          maxWidth: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(197,166,106,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-premium relative z-10">
        <div
          className="grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_540px] gap-12 xl:gap-20 items-center"
          style={{ minHeight: "calc(100svh - 80px)", paddingTop: "4rem", paddingBottom: "5rem" }}
        >
          {/* ── LEFT: CONTENT ── */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Eyebrow */}
            <FadeIn delay={0}>
              <span className="eyebrow">Natural Dental Clinic · Ramachandrapuram</span>
            </FadeIn>

            {/* Headline */}
            <FadeIn delay={150} y={32}>
              <h1
                className="font-serif"
                style={{
                  fontSize: "clamp(3rem, 6.5vw, 5.25rem)",
                  lineHeight: "1.04",
                  letterSpacing: "-0.028em",
                  color: "#12372A",
                  marginBottom: "1.75rem",
                }}
              >
                Dental care,<br />
                <span style={{ fontStyle: "italic", color: "#97A98F" }}>thoughtfully</span><br />
                designed for you.
              </h1>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={310} y={20}>
              <p
                className="font-sans"
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: "1.75",
                  color: "#6F746D",
                  maxWidth: "460px",
                  marginBottom: "2.5rem",
                }}
              >
                Gentle, personalised dental care in Ramachandrapuram, Hyderabad. Dr. Vandana Vytla focuses on patient comfort and clear communication.
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={450}>
              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/contact" className="btn-primary flex items-center gap-2">
                  Book Appointment
                  <ArrowUpRight size={15} />
                </Link>
                <a href={CLINIC.contact.phoneHref} className="btn-secondary flex items-center gap-2">
                  <Phone size={14} />
                  {CLINIC.contact.phoneDisplay}
                </a>
              </div>
            </FadeIn>

            {/* Doctor strip */}
            <FadeIn delay={600} y={12}>
              <div
                className="flex items-center gap-4"
                style={{
                  paddingTop: "1.5rem",
                  borderTop: "1px solid rgba(226,222,206,0.8)",
                }}
              >
                <div
                  className="relative flex-shrink-0"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid rgba(197,166,106,0.4)",
                  }}
                >
                  <Image
                    src="/images/doctor/doctor-main.jpg"
                    alt="Dr. Vandana Vytla"
                    fill
                    className="object-cover object-top"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p
                    className="font-serif"
                    style={{ fontSize: "1rem", color: "#12372A", lineHeight: 1.3 }}
                  >
                    {CLINIC.doctor.name}
                  </p>
                  <p
                    className="font-sans"
                    style={{ fontSize: "0.75rem", color: "#6F746D", letterSpacing: "0.05em", marginTop: "2px" }}
                  >
                    {CLINIC.doctor.title} · Reg No: {CLINIC.doctor.regNo}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ── RIGHT: DOCTOR PORTRAIT ── */}
          <div
            ref={imgRef}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <FadeIn delay={700} y={40} className="relative w-full max-w-[420px] lg:max-w-none">
              {/* Decorative circle behind */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "-8%",
                  right: "-8%",
                  width: "88%",
                  height: "88%",
                  borderRadius: "50%",
                  border: "1px solid rgba(151,169,143,0.25)",
                  pointerEvents: "none",
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "-14%",
                  right: "-14%",
                  width: "80%",
                  height: "80%",
                  borderRadius: "50%",
                  border: "1px solid rgba(197,166,106,0.12)",
                  pointerEvents: "none",
                }}
              />

              {/* Portrait */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "115%",
                  borderRadius: "55% 45% 60% 40% / 50% 55% 45% 50%",
                  overflow: "hidden",
                  boxShadow: "0 32px 80px rgba(18,55,42,0.15), 0 8px 24px rgba(18,55,42,0.08)",
                  transform: `translateY(${-parallaxY * 0.5}px)`,
                  transition: "transform 0.1s linear",
                }}
              >
                <Image
                  src="/images/doctor/doctor-main.jpg"
                  alt="Dr. Vandana Vytla — Dental Surgeon at Natural Dental Clinic"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 420px, 540px"
                />
                {/* Subtle sage glow overlay */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(18,55,42,0.08) 0%, transparent 60%)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Floating reg card */}
              <div
                style={{
                  position: "absolute",
                  bottom: "8%",
                  left: "-12%",
                  background: "rgba(250,248,242,0.95)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(226,222,206,0.8)",
                  borderRadius: "14px",
                  padding: "14px 18px",
                  boxShadow: "0 8px 32px rgba(18,55,42,0.1)",
                  minWidth: "160px",
                }}
              >
                <p
                  className="font-sans"
                  style={{ fontSize: "0.6875rem", color: "#97A98F", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "4px" }}
                >
                  Registered Surgeon
                </p>
                <p
                  className="font-serif"
                  style={{ fontSize: "0.9375rem", color: "#12372A" }}
                >
                  Reg No: {CLINIC.doctor.regNo}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        aria-hidden="true"
        style={{ opacity: 0.4 }}
      >
        <span
          className="font-sans"
          style={{ fontSize: "0.625rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#6F746D" }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, #C5A66A, transparent)",
            animation: "fadeIn 2s ease infinite alternate",
          }}
        />
      </div>
    </section>
  );
}
