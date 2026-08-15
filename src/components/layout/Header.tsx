"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CLINIC } from "@/lib/config";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Doctor", href: "/doctor" },
    { label: "Treatments", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Reviews", href: "/reviews" },
    { label: "Dental Guides", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium ${
        isScrolled ? "pointer-events-none pt-4 px-4 lg:pt-6 lg:px-8" : ""
      }`}>
        <div className={`mx-auto w-full transition-all duration-500 ease-premium ${
          isScrolled 
            ? "pointer-events-auto max-w-[1440px] bg-ivory-100/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-ivory-300/80 rounded-2xl py-3.5 px-6 lg:px-10" 
            : "bg-ivory-100/95 backdrop-blur-md border-b border-ivory-300 py-6"
        }`}>
          <div className={isScrolled ? "flex items-center justify-between w-full" : "container-premium flex items-center justify-between"}>
            
            <Link href="/" className="flex flex-col relative z-50 group">
              <span className="font-serif text-[1.375rem] font-bold text-forest-600 tracking-wide leading-none transition-transform duration-300 group-hover:scale-[1.02]">
                NATURAL DENTAL CLINIC
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className="relative group font-sans text-[0.9375rem] font-medium text-charcoal-600 transition-colors hover:text-forest-600 py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-forest-600/80 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </Link>
              ))}
              <Link href="/contact" className="btn-primary ml-4 py-2.5 px-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                Book Appointment
              </Link>
            </nav>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden text-forest-600 p-2 -mr-2 relative z-50 pointer-events-auto"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-ivory-100 z-40 lg:hidden flex flex-col transition-transform duration-500 ease-premium ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex-1 overflow-y-auto px-6 pt-32 pb-10">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="font-serif text-[2.5rem] text-forest-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="mt-12 pt-8 border-t border-ivory-300">
            <Link 
              href="/contact" 
              className="btn-primary w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
