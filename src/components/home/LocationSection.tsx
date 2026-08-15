import { CLINIC } from "@/lib/config";
import { PhoneCall, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

const LOCAL_FAQS = [
  {
    q: "Where is Natural Dental Clinic located?",
    a: `Natural Dental Clinic is located in Sai Nagar Colony, Ramachandrapuram, Hyderabad, behind South India Shopping Mall. The full address is: ${CLINIC.address.full}.`,
  },
  {
    q: "Is Natural Dental Clinic located in Hyderabad?",
    a: "Yes. Natural Dental Clinic is located in Ramachandrapuram (RC Puram), Hyderabad, Telangana.",
  },
  {
    q: "How do I find a dental clinic near me in Ramachandrapuram?",
    a: "Natural Dental Clinic is located in Sai Nagar Colony, Ramachandrapuram, behind South India Shopping Mall. Use the Get Directions button on this page to open the clinic location in Google Maps.",
  },
  {
    q: "What should I look for when choosing a dentist near me?",
    a: "When choosing a dental clinic, consider the clinic's location, hygiene standards, communication, range of treatments, patient reviews, and whether you feel comfortable discussing your concerns with the dentist. Natural Dental Clinic in Ramachandrapuram, Hyderabad provides patient-focused dental care, clear treatment guidance, and convenient access for nearby patients.",
  },
  {
    q: "Do patients visit Natural Dental Clinic from Beeramguda and Ameenpur?",
    a: "Yes. Natural Dental Clinic is located in Ramachandrapuram and is accessible to patients from nearby areas such as Beeramguda and Ameenpur.",
  },
  {
    q: "Is Natural Dental Clinic close to Patancheru?",
    a: "The clinic is located in Ramachandrapuram, Hyderabad, with convenient road access from Patancheru and nearby localities.",
  },
  {
    q: "Is Natural Dental Clinic accessible from Lingampally and Chandanagar?",
    a: "Yes. Natural Dental Clinic is located in Ramachandrapuram and is accessible from nearby Lingampally, Chandanagar and surrounding areas.",
  },
  {
    q: "Is the clinic convenient for patients from Miyapur?",
    a: "Natural Dental Clinic is located in Ramachandrapuram, Hyderabad. Patients from Miyapur can use the Get Directions option on the website to check the route to the clinic.",
  },
  {
    q: "Is Natural Dental Clinic accessible from Ashok Nagar?",
    a: "Yes. Patients from Ashok Nagar and nearby areas can reach Natural Dental Clinic in Ramachandrapuram for dental consultations.",
  }
];

export default function LocationSection() {
  return (
    <section className="section-padding bg-ivory-100 border-t border-ivory-300">
      <div className="container-premium">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <div className="flex flex-col items-start max-w-xl">
            <span className="eyebrow mb-4">Visit Us</span>
            
            <h2 className="heading-lg text-forest-600 mb-6">
              {CLINIC.name}
            </h2>

            <p className="font-sans text-[1.0625rem] text-charcoal-500 leading-relaxed mb-6">
              Looking for a dental clinic near you in Ramachandrapuram, Hyderabad? Natural Dental Clinic is located in Ramachandrapuram (RC Puram), Hyderabad, and is conveniently accessible for patients from nearby areas including BHEL, LIG, Ashok Nagar, Beeramguda, Ameenpur, Lingampally, Chandanagar, Miyapur and Patancheru, with patients also visiting from the surrounding Sangareddy region.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-sage-500 mt-1 flex-shrink-0" />
                <address className="not-italic font-sans text-[0.9375rem] text-charcoal-600 leading-relaxed">
                  {CLINIC.address.line1}, {CLINIC.address.landmark}<br />
                  {CLINIC.address.locality}<br />
                  {CLINIC.address.cityArea}, {CLINIC.address.city}<br />
                  {CLINIC.address.state} — {CLINIC.address.postalCode}
                </address>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-10">
              <a 
                href={CLINIC.address.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                id="location-get-directions"
                className="btn-primary"
              >
                Get Directions
              </a>
              <a 
                href={CLINIC.contact.phoneHref} 
                id="location-call-clinic"
                className="btn-secondary"
              >
                <PhoneCall className="w-4 h-4 mr-2" />
                Call Clinic
              </a>
              <a
                href={CLINIC.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                id="location-whatsapp"
                className="btn-secondary"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </div>

            {/* Local FAQs */}
            <div className="w-full border-t border-ivory-300 pt-8">
              <h3 className="font-serif text-[1.25rem] text-forest-600 mb-5">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {LOCAL_FAQS.map((faq, i) => (
                  <details key={i} className="group">
                    <summary className="flex items-center justify-between cursor-pointer list-none font-sans text-[0.9375rem] font-semibold text-charcoal-700 py-3 border-b border-ivory-300 gap-4">
                      <span>{faq.q}</span>
                      <svg
                        className="w-4 h-4 text-sage-500 flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="font-sans text-[0.9375rem] text-charcoal-500 leading-relaxed pt-3 pb-1">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-[24px] overflow-hidden shadow-sm border border-ivory-300 mb-6">
              <iframe
                src={CLINIC.address.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-[20%] contrast-[95%]"
                title="Natural Dental Clinic Location in Ramachandrapuram, Hyderabad"
              />
            </div>

            {/* Clinic hours summary */}
            <div className="bg-white rounded-[16px] border border-ivory-300 p-5 font-sans">
              <h3 className="font-serif text-forest-600 text-[1rem] font-semibold mb-3">Clinic Hours</h3>
              <div className="space-y-2 text-sm text-charcoal-600">
                {CLINIC.displayHours.schedule.map((item) => (
                  <div key={item.day} className="flex justify-between border-b border-ivory-200 pb-2 last:border-0 last:pb-0">
                    <span className="font-medium">{item.day}</span>
                    <div className="text-right text-charcoal-500">
                      <div>{item.morning}</div>
                      {item.evening !== "Closed" && <div>{item.evening}</div>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-ivory-200">
                <Link href="/contact" className="text-sage-600 text-sm font-medium hover:text-forest-600 transition-colors">
                  Book an appointment →
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
