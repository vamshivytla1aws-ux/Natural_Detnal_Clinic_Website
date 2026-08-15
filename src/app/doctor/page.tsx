import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CLINIC } from '@/lib/config';
import { SERVICES } from '@/lib/services-data';
import { ClinicActions } from '@/components/ui/ClinicActions';

export const metadata: Metadata = {
  title: "Dr. Vandana Vytla — Dental Surgeon in Ramachandrapuram",
  description: "Meet Dr. Vandana Vytla, Dental Surgeon at Natural Dental Clinic in Ramachandrapuram, Hyderabad. Learn about her patient-focused approach to dental care.",
  alternates: {
    canonical: "/doctor",
  },
};

export default function DoctorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            "name": CLINIC.doctor.name,
            "jobTitle": CLINIC.doctor.title,
            "image": `${CLINIC.seo.siteUrl}/images/doctor/doctor-vandana.jpg`,
            "worksFor": {
              "@type": "MedicalClinic",
              "name": CLINIC.name,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": `${CLINIC.address.line1}, ${CLINIC.address.landmark}, ${CLINIC.address.locality}`,
                "addressLocality": CLINIC.address.cityArea,
                "addressRegion": CLINIC.address.state,
                "postalCode": CLINIC.address.postalCode,
                "addressCountry": "IN"
              }
            },
            "medicalSpecialty": "Dentistry"
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-forest-600 section-padding pt-32 lg:pt-40 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sage-500/10 rounded-bl-full hidden lg:block"></div>
        <div className="container-premium relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-white">
              <span className="section-label text-champagne-400 mb-4 block">Meet Your Dentist</span>
              <h1 className="heading-display mb-2">{CLINIC.doctor.name}</h1>
              <h2 className="text-xl md:text-2xl font-sans text-mint-400 mb-2 font-medium">
                {CLINIC.doctor.title}
              </h2>
              <p className="text-champagne-400/80 font-sans text-sm mb-6 tracking-wide">
                Reg No: {CLINIC.doctor.regNo}
              </p>
              <p className="text-lg text-ivory-100 font-sans max-w-2xl leading-relaxed mb-8">
                {CLINIC.doctor.bio}
              </p>
              <div className="mt-8">
                <ClinicActions 
                  variant="hero" 
                  showBook={true} 
                  showWhatsApp={true} 
                  showCall={false} 
                  showDirections={false} 
                />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                <Image
                  src="/images/doctor/doctor-vandana.jpg"
                  alt="Dr. Vandana Vytla — Dental Surgeon at Natural Dental Clinic"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Approach */}
      <section className="section-padding bg-ivory-100">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="heading-xl text-forest-600 mb-6">About Dr. Vandana Vytla</h2>
              <div className="space-y-4 text-gray-700 font-sans leading-relaxed text-lg">
                <p>
                  Dr. Vandana Vytla provides patient-focused dental care at Natural Dental Clinic in Ramachandrapuram. Her approach emphasises clear communication, careful evaluation, and personalised treatment planning to ensure each patient understands their condition and available options before any treatment begins.
                </p>
                <p>
                  The clinic environment is designed to be welcoming and unhurried, giving patients the time and space to ask questions and feel comfortable with their care decisions.
                </p>
              </div>

              <div className="mt-12">
                <h3 className="heading-lg text-forest-600 mb-6">Approach to Dental Care</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Personalised Consultation", desc: "Each patient receives individual attention and a treatment plan suited to their specific clinical needs." },
                    { title: "Clear Communication", desc: "Treatment options, steps, and costs are explained clearly before any procedure begins." },
                    { title: "Patient Comfort", desc: "The clinic prioritises a calm, comfortable environment during every visit." },
                    { title: "Preventive Focus", desc: "Emphasis on preserving natural tooth structure and maintaining long-term oral health." },
                    { title: "Hygiene Standards", desc: "Strict sterilisation and infection control protocols are maintained throughout." },
                    { title: "Appropriate Planning", desc: "Treatment is recommended only after thorough clinical evaluation of each case." },
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-5 rounded-xl border border-sage-500/20 shadow-sm">
                      <h4 className="font-serif text-forest-600 font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 sticky top-24">
                {/* Verified identity */}
                <div className="border-b border-gray-100 pb-6 mb-6">
                  <h3 className="font-serif text-2xl text-forest-600 mb-3">Verified Details</h3>
                  <ul className="space-y-3 font-sans text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-champagne-400 mt-0.5">✓</span>
                      <span>Dental Surgeon</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-champagne-400 mt-0.5">✓</span>
                      <span>Reg No: {CLINIC.doctor.regNo}</span>
                    </li>
                  </ul>
                </div>

                {/* Treatments available */}
                <h3 className="font-serif text-xl text-forest-600 mb-4">Dental treatments available at Natural Dental Clinic</h3>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.slice(0, 8).map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="bg-sage-500/10 text-forest-600 hover:bg-sage-500/20 px-3 py-1.5 rounded-full text-sm font-sans font-medium transition-colors"
                    >
                      {service.shortTitle}
                    </Link>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link href="/services" className="text-sage-500 text-sm font-medium hover:text-forest-600 transition-colors">
                    View all services →
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="font-serif text-lg text-forest-600 mb-3">Visiting the Clinic</h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed mb-3">
                    Natural Dental Clinic is located in Sai Nagar Colony, Ramachandrapuram, Hyderabad — behind South India Shopping Mall.
                  </p>
                  <Link href="/contact" className="text-sage-500 text-sm font-medium hover:text-forest-600 transition-colors">
                    Get directions & contact details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-champagne-400">
        <div className="container-premium text-center">
          <h2 className="heading-xl text-forest-600 mb-6">Schedule a Consultation</h2>
          <p className="text-forest-600/80 font-sans mb-8 max-w-2xl mx-auto">
            Book an appointment at Natural Dental Clinic for an evaluation and personalised treatment discussion.
          </p>
          <div className="max-w-2xl mx-auto mt-8">
            <ClinicActions 
              variant="grid" 
              showBook={true} 
              showCall={true} 
              showWhatsApp={true} 
              showDirections={false} 
            />
          </div>
        </div>
      </section>
    </>
  );
}
