"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { CLINIC } from "@/lib/config";
import { SERVICES } from "@/lib/services-data";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/doctor", label: "Doctor" },
  {
    href: "/services",
    label: "Treatments",
    children: SERVICES.slice(0, 8).map((s) => ({
      href: `/services/${s.slug}`,
      label: s.shortTitle,
    })),
  },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isLight = !scrolled;

  return (
    <>
      <header
        role="banner"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease, padding 0.4s ease",
          background: scrolled
            ? "rgba(250, 248, 242, 0.94)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(226,222,206,0.7)" : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 24px rgba(18,55,42,0.07)" : "none",
          paddingTop: scrolled ? "14px" : "20px",
          paddingBottom: scrolled ? "14px" : "20px",
        }}
      >
        <div className="container-premium flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label={`${CLINIC.name} — Home`}
          >
            <div className="relative w-9 h-9 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt={`${CLINIC.name} Logo`}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-serif text-[15px] tracking-wide transition-colors duration-300"
                style={{ color: isLight ? "white" : "#12372A" }}
              >
                Natural Dental
              </span>
              <span
                className="text-[9px] tracking-[0.18em] uppercase font-sans font-medium transition-colors duration-300"
                style={{ color: isLight ? "rgba(197,166,106,0.9)" : "#C5A66A" }}
              >
                Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.href} className="relative group">
                  <button
                    className="nav-link px-3 py-2 flex items-center gap-1"
                    style={{ color: isLight ? "rgba(255,255,255,0.85)" : "#252824" }}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <svg
                      width="10" height="10" viewBox="0 0 10 10" fill="none"
                      className="transition-transform duration-300 group-hover:rotate-180 opacity-60"
                    >
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                  {/* Dropdown */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div
                      className="rounded-[16px] p-2 w-52"
                      style={{
                        background: "rgba(250,248,242,0.97)",
                        backdropFilter: "blur(16px)",
                        border: "1px solid rgba(226,222,206,0.8)",
                        boxShadow: "0 16px 48px rgba(18,55,42,0.12)"
                      }}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-2 px-3 py-2 rounded-[10px] text-[13px] font-sans font-medium transition-colors duration-200 hover:bg-ivory-200"
                          style={{ color: "#252824" }}
                        >
                          <span
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: "#C5A66A" }}
                          />
                          {child.label}
                        </Link>
                      ))}
                      <div className="border-t border-ivory-300 mt-1 pt-1">
                        <Link
                          href="/services"
                          className="flex items-center gap-2 px-3 py-2 rounded-[10px] text-[13px] font-semibold transition-colors duration-200 hover:bg-ivory-200"
                          style={{ color: "#12372A" }}
                        >
                          All Treatments →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link px-3 py-2 transition-colors duration-200 ${
                    (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)))
                      ? "active"
                      : ""
                  }`}
                  style={{ color: isLight ? "rgba(255,255,255,0.85)" : "#252824" }}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={CLINIC.contact.phoneHref}
              className="flex items-center gap-1.5 text-[13px] font-medium transition-colors duration-200"
              style={{ color: isLight ? "rgba(255,255,255,0.7)" : "#6F746D" }}
              aria-label="Call clinic"
            >
              <Phone size={13} />
              {CLINIC.contact.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="btn-primary text-[13px]"
              style={isLight ? {
                background: "rgba(250,248,242,0.15)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "10px",
              } : {}}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-[8px] transition-colors duration-200"
            style={{ color: isLight ? "white" : "#12372A" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-40 lg:hidden"
        style={{
          pointerEvents: menuOpen ? "auto" : "none",
          opacity: menuOpen ? 1 : 0,
          transition: "opacity 0.35s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(18,55,42,0.5)", backdropFilter: "blur(4px)" }}
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className="absolute top-0 right-0 h-full w-[300px] flex flex-col"
          style={{
            background: "#FAF8F2",
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* Drawer header */}
          <div
            className="flex items-center justify-between px-6 py-5"
            style={{ borderBottom: "1px solid rgba(226,222,206,0.7)" }}
          >
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8">
                <Image src="/images/logo.png" alt={CLINIC.name} fill className="object-contain" />
              </div>
              <span className="font-serif text-[15px]" style={{ color: "#12372A" }}>
                Natural Dental Clinic
              </span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-1.5 rounded-[8px] transition-colors"
              style={{ color: "#6F746D" }}
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto" aria-label="Mobile navigation">
            <div className="space-y-0.5">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center px-4 py-3.5 rounded-[12px] font-sans font-medium text-[15px] transition-colors duration-200"
                  style={{
                    color: pathname === link.href ? "#12372A" : "#252824",
                    background: pathname === link.href ? "rgba(18,55,42,0.06)" : "transparent",
                    transitionDelay: menuOpen ? `${i * 40}ms` : "0ms",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Bottom CTAs */}
          <div className="px-4 pb-8 space-y-3" style={{ borderTop: "1px solid rgba(226,222,206,0.7)", paddingTop: "20px" }}>
            <Link href="/contact" className="btn-primary w-full text-center">
              Book Appointment
            </Link>
            <a
              href={CLINIC.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full text-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
