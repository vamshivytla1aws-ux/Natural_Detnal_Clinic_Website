import Link from "next/link";
import { CLINIC } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-forest-600 text-ivory-100 pt-24 pb-12 border-t border-forest-500">
      <div className="container-premium">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-1">
            <h2 className="font-serif text-[2rem] text-white leading-tight mb-4">
              {CLINIC.name}
            </h2>
            <p className="font-sans text-sage-200 leading-relaxed max-w-sm">
              Thoughtful dental care <br className="hidden lg:block" />
              in Ramachandrapuram.
            </p>
          </div>

          <div>
            <h3 className="font-sans font-bold text-[0.875rem] tracking-wider uppercase text-champagne-400 mb-6">
              Clinic
            </h3>
            <ul className="space-y-4 font-sans text-sage-100">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/doctor" className="hover:text-white transition-colors">The Doctor</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors">Reviews</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Dental Care Guides</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-bold text-[0.875rem] tracking-wider uppercase text-champagne-400 mb-6">
              Contact
            </h3>
            <div className="space-y-4 font-sans text-sm md:text-[0.9375rem] text-forest-50/80">
            {CLINIC.displayHours.schedule.map((item) => (
              <div key={item.day} className="flex justify-between items-start border-b border-white/10 pb-3 last:border-0 last:pb-0">
                  <span className="font-medium">{item.day}</span>
                  <div className="text-right">
                    <div>{item.morning}</div>
                    {item.evening !== 'Closed' && <div>{item.evening}</div>}
                  </div>
              </div>
            ))}
            </div>
            <ul className="mt-6 space-y-4 font-sans text-sage-100">
              <li>
                <a href={CLINIC.contact.phoneHref} className="hover:text-white transition-colors">
                  {CLINIC.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={CLINIC.contact.whatsappHref} className="hover:text-white transition-colors">
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href={CLINIC.contact.emailHref} className="hover:text-white transition-colors">
                  Email Clinic
                </a>
              </li>
              <li className="pt-2">
                <Link href="/contact" className="text-white hover:text-champagne-400 font-semibold transition-colors">
                  Book Appointment →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-bold text-[0.875rem] tracking-wider uppercase text-champagne-400 mb-6">
              Visit
            </h3>
            <address className="font-sans text-sage-100 not-italic leading-relaxed mb-4">
              {CLINIC.address.line1}, {CLINIC.address.landmark}<br />
              {CLINIC.address.locality}<br />
              {CLINIC.address.cityArea}, {CLINIC.address.city}<br />
              {CLINIC.address.state} — {CLINIC.address.postalCode}
            </address>
            <p>
              <a href={CLINIC.address.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-champagne-400 font-semibold transition-colors">
                Get Directions →
              </a>
            </p>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-forest-500/50 font-sans text-[0.875rem] text-sage-200">
          <p>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
