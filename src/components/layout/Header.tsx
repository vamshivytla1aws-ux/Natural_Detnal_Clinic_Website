"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CLINIC } from "@/lib/config";
import { Menu, X, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const TREATMENTS_DROPDOWN = [
  { label: "Root Canal Treatment", href: "/services/root-canal-treatment" },
  { label: "Dental Implants", href: "/services/dental-implants" },
  { label: "Braces & Orthodontics", href: "/services/braces-orthodontics" },
  { label: "Children's Dentistry", href: "/services/childrens-dentistry" },
  { label: "Wisdom Tooth Care", href: "/services/wisdom-tooth-extraction" },
  { label: "Teeth Whitening", href: "/services/teeth-whitening" },
];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Doctor", href: "/doctor" },
  { label: "Treatments", href: "/services", hasDropdown: true },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Dental Guides", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

import type { Variants } from "framer-motion";

const MOBILE_LINK_VARIANTS: { container: Variants; item: Variants } = {
  container: { hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } },
  item: {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  },
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileMenuOpen(false); }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setMobileMenuOpen(false); setDropdownOpen(false); }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  const handleDropdownMouseEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <>
      {/* === DESKTOP / SCROLL HEADER === */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all ease-premium ${
          isScrolled ? "duration-500 pt-3 px-4 lg:px-8 pointer-events-none" : "duration-300"
        }`}
      >
        <div
          className={`mx-auto w-full transition-all ease-premium ${
            isScrolled
              ? "pointer-events-auto max-w-[1380px] bg-ivory-100/93 backdrop-blur-[20px] shadow-[0_12px_50px_rgba(18,55,42,.08)] border border-ivory-300/80 rounded-[20px] py-3 px-5 lg:px-8 duration-500"
              : "bg-ivory-100/95 backdrop-blur-md border-b border-ivory-300/70 py-5 duration-300"
          }`}
        >
          <div className={isScrolled ? "flex items-center justify-between" : "container-premium flex items-center justify-between"}>

            {/* Brand Lockup */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-white border border-champagne-200 shadow-sm flex items-center justify-center overflow-hidden flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Natural Dental Clinic logo"
                  width={36}
                  height={36}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[1.25rem] font-semibold text-forest-600 leading-none tracking-[-0.01em] transition-colors duration-200 group-hover:text-forest-500">
                  Natural Dental Clinic
                </span>
                <span className="font-sans text-[0.625rem] font-semibold tracking-[0.12em] uppercase text-charcoal-400 mt-0.5">
                  Ramachandrapuram · Hyderabad
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {NAV_LINKS.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.href}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <button
                      className={`relative flex items-center gap-1 px-3 py-1.5 font-sans text-[0.875rem] font-semibold transition-colors duration-200 rounded-lg hover:bg-sage-50 ${
                        isActive(link.href) ? "text-forest-600" : "text-charcoal-600 hover:text-forest-600"
                      }`}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                      onClick={() => setDropdownOpen((v) => !v)}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                      />
                      {isActive(link.href) && (
                        <span className="absolute bottom-0.5 left-3 right-3 h-[1.5px] bg-champagne-400 rounded-full" />
                      )}
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-0 mt-2 w-60 bg-white rounded-[20px] shadow-[0_8px_30px_rgba(18,55,42,.1)] border border-ivory-300 p-2 z-50"
                          onMouseEnter={handleDropdownMouseEnter}
                          onMouseLeave={handleDropdownMouseLeave}
                        >
                          {TREATMENTS_DROPDOWN.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[0.875rem] font-medium text-charcoal-600 hover:bg-sage-50 hover:text-forest-600 transition-colors duration-150 group"
                              onClick={() => setDropdownOpen(false)}
                            >
                              {item.label}
                              <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-sage-600" />
                            </Link>
                          ))}
                          <div className="mx-3 my-1.5 h-[1px] bg-ivory-300" />
                          <Link
                            href="/services"
                            className="flex items-center justify-between px-4 py-2.5 rounded-xl text-[0.875rem] font-semibold text-forest-600 hover:bg-forest-600/5 transition-colors duration-150"
                            onClick={() => setDropdownOpen(false)}
                          >
                            View All Treatments
                            <ArrowRight size={13} className="text-forest-600" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-1.5 font-sans text-[0.875rem] font-semibold transition-colors duration-200 rounded-lg hover:bg-sage-50 whitespace-nowrap ${
                      isActive(link.href) ? "text-forest-600" : "text-charcoal-600 hover:text-forest-600"
                    }`}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span className="absolute bottom-0.5 left-3 right-3 h-[1.5px] bg-champagne-400 rounded-full" />
                    )}
                  </Link>
                )
              )}

              {/* Phone — xl only */}
              <a
                href={CLINIC.contact.phoneHref}
                className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 ml-1 text-[0.8125rem] font-semibold text-charcoal-500 hover:text-forest-600 transition-colors duration-200 rounded-lg hover:bg-sage-50 whitespace-nowrap"
                aria-label="Call the clinic"
              >
                <Phone size={14} strokeWidth={2} />
                <span className="whitespace-nowrap">{CLINIC.contact.phoneDisplay}</span>
              </a>

              {/* CTA */}
              <Link
                href="/contact"
                className="btn-primary ml-2 py-2 px-5 text-[0.875rem]"
              >
                Book Consultation
              </Link>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl text-forest-600 hover:bg-sage-50 transition-colors duration-200 pointer-events-auto"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* === MOBILE FULL-SCREEN MENU === */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 lg:hidden overflow-y-auto"
            style={{ background: "radial-gradient(ellipse at 60% 10%, rgba(152,170,145,0.12) 0%, #FAF8F3 55%)" }}
          >
            {/* Spacer for header height */}
            <div className="h-20" />

            <div className="px-6 pb-12 pt-6 flex flex-col min-h-[calc(100vh-5rem)]">

              {/* Navigation Links */}
              <motion.nav
                variants={shouldReduceMotion ? undefined : MOBILE_LINK_VARIANTS.container}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-1 mb-auto"
              >
                {NAV_LINKS.map((link) => (
                  <motion.div key={link.href} variants={shouldReduceMotion ? undefined : MOBILE_LINK_VARIANTS.item}>
                    <Link
                      href={link.href}
                      className={`block font-serif leading-tight py-3 border-b border-ivory-300/60 transition-colors duration-200 hover:text-forest-500 ${
                        isActive(link.href) ? "text-forest-600" : "text-charcoal-700"
                      }`}
                      style={{ fontSize: "clamp(1.75rem, 7vw, 2.75rem)" }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Bottom Info Block */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 pt-8 border-t border-ivory-300"
              >
                <p className="font-serif text-xl text-forest-600 mb-0.5">{CLINIC.doctor.name}</p>
                <p className="font-sans text-sm text-charcoal-400 mb-0.5">{CLINIC.doctor.title}</p>
                <p className="font-sans text-xs text-sage-600 font-bold tracking-wider uppercase mb-6">
                  Reg No: {CLINIC.doctor.regNo}
                </p>

                <div className="flex items-center gap-3 flex-wrap">
                  <a
                    href={CLINIC.contact.phoneHref}
                    className="btn-secondary py-2.5 px-5 text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Call Clinic
                  </a>
                  <Link
                    href="/contact"
                    className="btn-primary py-2.5 px-5 text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Consultation
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
