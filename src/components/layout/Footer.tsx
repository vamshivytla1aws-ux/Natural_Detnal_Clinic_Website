import Link from "next/link";
import { CLINIC } from "@/lib/config";

const FOOTER_TREATMENTS = [
  { label: "Root Canal Treatment", href: "/services/root-canal-treatment" },
  { label: "Dental Implants", href: "/services/dental-implants" },
  { label: "Braces & Orthodontics", href: "/services/braces-orthodontics" },
  { label: "Children's Dentistry", href: "/services/pediatric-dentistry" },
  { label: "Teeth Whitening", href: "/services/teeth-whitening" },
  { label: "Wisdom Tooth Care", href: "/services/wisdom-tooth-removal" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-600 text-ivory-100 pt-20 pb-10 border-t border-forest-500">
      <div className="container-premium">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-[2.25rem] text-white leading-tight mb-3">
              {CLINIC.name}
            </h2>
            <p className="font-sans text-sage-300 leading-relaxed max-w-sm mb-2">
              Thoughtful dental care<br className="hidden lg:block" /> in Ramachandrapuram.
            </p>
            <p className="font-sans text-[0.8125rem] text-sage-400">
              {CLINIC.doctor.name} — {CLINIC.doctor.title}
            </p>
          </div>

          {/* Clinic Links */}
          <div>
            <h3 className="font-sans font-bold text-[0.8125rem] tracking-wider uppercase text-champagne-400 mb-5">
              Clinic
            </h3>
            <ul className="space-y-3 font-sans text-[0.9375rem] text-sage-100">
              <li><Link href="/" className="hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link href="/doctor" className="hover:text-white transition-colors duration-200">The Doctor</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors duration-200">Gallery</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors duration-200">Reviews</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors duration-200">Dental Care Guides</Link></li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="font-sans font-bold text-[0.8125rem] tracking-wider uppercase text-champagne-400 mb-5">
              Treatments
            </h3>
            <ul className="space-y-3 font-sans text-[0.9375rem] text-sage-100">
              {FOOTER_TREATMENTS.map((t) => (
                <li key={t.href}>
                  <Link href={t.href} className="hover:text-white transition-colors duration-200">{t.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans font-bold text-[0.8125rem] tracking-wider uppercase text-champagne-400 mb-5">
              Contact & Hours
            </h3>
            <div className="space-y-3 font-sans text-sm text-forest-50/80 mb-5">
              {CLINIC.displayHours.schedule.map((item) => (
                <div key={item.day} className="flex justify-between items-start border-b border-white/10 pb-2.5 last:border-0 last:pb-0">
                  <span className="font-medium whitespace-nowrap pr-4">{item.day}</span>
                  <div className="text-right text-xs">
                    <div>{item.morning}</div>
                    {item.evening !== 'Closed' && <div>{item.evening}</div>}
                  </div>
                </div>
              ))}
            </div>
            <ul className="space-y-3 font-sans text-[0.9375rem] text-sage-100">
              <li>
                <a href={CLINIC.contact.phoneHref} className="hover:text-white transition-colors duration-200">
                  {CLINIC.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={CLINIC.contact.whatsappHref} className="hover:text-white transition-colors duration-200">
                  WhatsApp Us
                </a>
              </li>
              <li className="pt-1">
                <Link href="/contact" className="text-champagne-300 hover:text-champagne-200 font-semibold transition-colors duration-200">
                  Book Consultation →
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-forest-500/50 font-sans text-[0.8125rem] text-sage-300">
          <p>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
