"use client";

import { Phone, MessageCircle, MapPin } from "lucide-react";
import { CLINIC } from "@/lib/config";
import { useEffect, useState } from "react";

export function MobileActionBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after slight scroll to not clash with hero CTAs immediately
    const onScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden pb-safe"
      style={{
        background: "rgba(250, 248, 242, 0.96)", // ivory-100
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(226, 222, 206, 0.7)",
        boxShadow: "0 -4px 20px rgba(18, 55, 42, 0.05)",
        transform: isVisible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <div className="flex items-center justify-between px-2 py-2">
        <a
          href={CLINIC.contact.phoneHref}
          className="flex flex-col items-center justify-center flex-1 py-1 gap-1"
          style={{ color: "#12372A" }}
        >
          <Phone size={20} strokeWidth={1.5} />
          <span className="font-sans text-[0.625rem] font-medium tracking-wide uppercase">Call</span>
        </a>
        
        <div className="w-[1px] h-8 bg-[#E8E2D4]" />
        
        <a
          href={CLINIC.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center flex-1 py-1 gap-1"
          style={{ color: "#12372A" }}
        >
          <MessageCircle size={20} strokeWidth={1.5} />
          <span className="font-sans text-[0.625rem] font-medium tracking-wide uppercase">WhatsApp</span>
        </a>
        
        <div className="w-[1px] h-8 bg-[#E8E2D4]" />
        
        <a
          href={CLINIC.address.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center flex-1 py-1 gap-1"
          style={{ color: "#12372A" }}
        >
          <MapPin size={20} strokeWidth={1.5} />
          <span className="font-sans text-[0.625rem] font-medium tracking-wide uppercase">Directions</span>
        </a>
      </div>
    </div>
  );
}
