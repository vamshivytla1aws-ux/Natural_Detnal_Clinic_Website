"use client";

import { useEffect, useRef, useState } from "react";

export default function PhilosophySection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const EASE = "cubic-bezier(0.22,1,0.36,1)";

  return (
    <section
      ref={ref}
      className="section-padding"
      style={{ background: "#F3EFE4" }}
    >
      <div className="container-premium">
        <div
          className="max-w-4xl"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
            transition: `opacity 0.9s ${EASE}, transform 0.9s ${EASE}`,
          }}
        >
          <span className="eyebrow">01 / Our Approach</span>

          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              lineHeight: "1.12",
              letterSpacing: "-0.02em",
              color: "#12372A",
              marginBottom: "2rem",
            }}
          >
            We believe good dentistry<br />
            begins with{" "}
            <span style={{ fontStyle: "italic", color: "#97A98F" }}>listening.</span>
          </h2>

          <div className="divider-gold" />

          <div
            className="mt-8 grid sm:grid-cols-3 gap-8 lg:gap-12"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.9s ${EASE} 0.2s, transform 0.9s ${EASE} 0.2s`,
            }}
          >
            {[
              {
                title: "Comfort First",
                text: "Every aspect of your visit is designed with your comfort in mind — from the clinic environment to how we communicate.",
              },
              {
                title: "Clear Communication",
                text: "We explain your condition, options, and treatment plan in plain language before anything begins.",
              },
              {
                title: "Personalised Planning",
                text: "Treatment is recommended only after thorough evaluation of your specific clinical needs — never as a formula.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.8s ${EASE} ${0.3 + i * 0.1}s, transform 0.8s ${EASE} ${0.3 + i * 0.1}s`,
                }}
              >
                <p
                  className="font-sans font-semibold"
                  style={{ fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#C5A66A", marginBottom: "0.75rem" }}
                >
                  0{i + 1}
                </p>
                <h3
                  className="font-serif"
                  style={{ fontSize: "1.25rem", color: "#12372A", marginBottom: "0.625rem" }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-sans"
                  style={{ fontSize: "0.9375rem", color: "#6F746D", lineHeight: "1.7" }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
