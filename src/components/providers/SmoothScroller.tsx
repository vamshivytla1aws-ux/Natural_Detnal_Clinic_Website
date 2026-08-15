"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroller({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Skip on touch devices — preserve native momentum scrolling
    if (window.matchMedia("(pointer: coarse)").matches) return;
    // Skip when user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => 1 - Math.pow(1 - t, 3), // cubic ease-out — less floaty
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
