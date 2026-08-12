import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CLINIC } from '@/lib/config';

export const metadata: Metadata = {
  title: `Dr. Vandana Vytla | ${CLINIC.name}`,
  description: 'Meet Dr. Vandana Vytla, lead dentist at Natural Dental Clinic. Dedicated to providing compassionate, comprehensive, and advanced dental care.',
};

const EXPERTISE = [
  'Root Canal Treatment',
  'Dental Implants',
  'Orthodontics (Braces)',
  'Teeth Whitening',
  'Pediatric Dentistry',
  'Gum Disease Treatment',
  'Crowns & Bridges',
  'Painless Extractions'
];

export default function DoctorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            "name": "Dr. Vandana Vytla",
            "jobTitle": "Lead Dentist",
            "image": "/images/doctor/doctor-main.jpg",
            "worksFor": {
              "@type": "MedicalClinic",
              "name": CLINIC.name
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
              <h1 className="heading-display mb-4">Dr. Vandana Vytla</h1>
              <h2 className="text-xl md:text-2xl font-sans text-mint-400 mb-6 font-medium">
                BDS, Dental Surgeon
              </h2>
              <p className="text-lg text-ivory-100 font-sans max-w-2xl leading-relaxed mb-8">
                Dedicated to transforming smiles and improving lives through gentle, precision-based dentistry in a relaxing environment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Consult Dr. Vandana
                </Link>
                <a href={CLINIC.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                <Image
                  src="/images/doctor/doctor-main.jpg"
                  alt="Dr. Vandana Vytla"
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

      {/* Profile & Expertise */}
      <section className="section-padding bg-ivory-100">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="heading-xl text-forest-600 mb-6">Professional Profile</h2>
              <div className="space-y-4 text-gray-700 font-sans leading-relaxed text-lg">
                <p>
                  Dr. Vandana Vytla is a highly skilled dental surgeon known for her gentle touch and comprehensive approach to oral health. With a deep understanding that visiting the dentist can be intimidating, she has dedicated her career to creating a stress-free, painless experience for every patient.
                </p>
                <p>
                  She believes in a conservative approach to dentistry—preserving as much natural tooth structure as possible while utilizing the latest advancements in dental technology to ensure optimal results.
                </p>
                <p>
                  Dr. Vandana takes the time to listen to her patients, thoroughly explaining treatment options and collaborating with them to design personalized care plans that meet their clinical needs and aesthetic goals.
                </p>
              </div>

              <div className="mt-12">
                <h3 className="heading-lg text-forest-600 mb-6">Patient-Centered Approach</h3>
                <div className="bg-white p-8 rounded-xl border border-sage-500/20 shadow-sm">
                  <p className="italic font-serif text-xl text-gray-600 mb-4">
                    "My goal is not just to treat teeth, but to treat the person. I want every patient who walks out of our clinic to feel confident, healthy, and completely at ease with their dental care."
                  </p>
                  <span className="font-sans font-semibold text-forest-600">— Dr. Vandana Vytla</span>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 sticky top-24">
                <h3 className="font-serif text-2xl text-forest-600 mb-6 border-b border-gray-100 pb-4">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {EXPERTISE.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="bg-sage-500/10 text-forest-600 px-4 py-2 rounded-full text-sm font-sans font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="font-serif text-2xl text-forest-600 mb-4">Credentials</h3>
                  <ul className="space-y-3 font-sans text-gray-600">
                    <li className="flex items-start">
                      <span className="text-champagne-400 mr-2">✓</span>
                      Bachelor of Dental Surgery (BDS)
                    </li>
                    <li className="flex items-start">
                      <span className="text-champagne-400 mr-2">✓</span>
                      Registered Dental Surgeon
                    </li>
                    <li className="flex items-start">
                      <span className="text-champagne-400 mr-2">✓</span>
                      Certified in Advanced Endodontics
                    </li>
                  </ul>
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
            Experience gentle, expert dental care with Dr. Vandana Vytla. Book your appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
