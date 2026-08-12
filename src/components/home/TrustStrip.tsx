"use client";

import { useEffect, useRef, useState } from "react";

const TRUST_ITEMS = [
  { num: "01", title: "Patient-Focused", desc: "Your wellbeing guides every clinical decision." },
  { num: "02", title: "Personalised Care", desc: "Treatment plans designed for your individual needs." },
  { num: "03", title: "Hygiene Focused", desc: "Strict sterilisation and infection control protocols." },
  { num: "04", title: "Clear Guidance", desc: "Every step explained before treatment begins." },
];

export default function TrustStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const EASE = "cubic-bezier(0.22,1,0.36,1)";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="section-padding-sm"
      style={{ background: "#FAF8F2", borderTop: "1px solid rgba(226,222,206,0.6)" }}
    >
      <div className="container-premium">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {TRUST_ITEMS.map((item, i) => (
            <div
              key={i}
              className="relative group"
              style={{
                padding: "2rem 2.5rem",
                borderRight: i < 3 ? "1px solid rgba(226,222,206,0.7)" : "none",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.7s ${EASE} ${i * 0.08}s, transform 0.7s ${EASE} ${i * 0.08}s`,
              }}
            >
              <p
                className="font-sans"
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#C5A66A",
                  marginBottom: "0.875rem",
                  transition: "color 0.3s ease",
                }}
              >
                {item.num}
              </p>
              <h3
                className="font-serif"
                style={{ fontSize: "1.125rem", color: "#12372A", marginBottom: "0.5rem" }}
              >
                {item.title}
              </h3>
              <p
                className="font-sans"
                style={{ fontSize: "0.875rem", color: "#6F746D", lineHeight: "1.65" }}
              >
                {item.desc}
              </p>
              {/* Bottom accent line on hover */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "2.5rem",
                  height: "1px",
                  width: "0%",
                  background: "#C5A66A",
                  transition: "width 0.4s cubic-bezier(0.22,1,0.36,1)",
                }}
                className="group-hover:!w-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
