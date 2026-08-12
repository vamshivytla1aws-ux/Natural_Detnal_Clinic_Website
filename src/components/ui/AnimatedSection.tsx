"use client";

import { useEffect, useRef, ReactNode } from "react";
import { clsx } from "clsx";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
  once?: boolean;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    // Set initial state
    el.style.opacity = "0";
    el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;

    switch (direction) {
      case "up":
        el.style.transform = "translateY(28px)";
        break;
      case "left":
        el.style.transform = "translateX(-28px)";
        break;
      case "right":
        el.style.transform = "translateX(28px)";
        break;
      case "fade":
        el.style.transform = "none";
        break;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.style.opacity = "0";
          switch (direction) {
            case "up":
              el.style.transform = "translateY(28px)";
              break;
            case "left":
              el.style.transform = "translateX(-28px)";
              break;
            case "right":
              el.style.transform = "translateX(28px)";
              break;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay, direction, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface StaggeredChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: "up" | "left" | "right" | "fade";
}

export function StaggeredChildren({
  children,
  className,
  staggerDelay = 100,
  direction = "up",
}: StaggeredChildrenProps) {
  return (
    <div className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <AnimatedSection
              key={i}
              delay={i * staggerDelay}
              direction={direction}
            >
              {child}
            </AnimatedSection>
          ))
        : children}
    </div>
  );
}
