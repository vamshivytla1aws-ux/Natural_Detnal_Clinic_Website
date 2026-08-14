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
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "bg-ivory-100/95 backdrop-blur-md shadow-sm border-b border-ivory-300 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-premium flex items-center justify-between">
        
        <Link href="/" className="flex flex-col relative z-50">
          <span className="font-serif text-[1.375rem] font-bold text-forest-600 tracking-wide leading-none">
            NATURAL DENTAL CLINIC
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <Link 
              key={link.href} 
              href={link.href}
              className="font-sans text-[0.9375rem] font-medium text-charcoal-600 hover:text-forest-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary ml-4 py-2.5 px-6">
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-forest-600 p-2 -mr-2 relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

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
              className="btn-primary w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
