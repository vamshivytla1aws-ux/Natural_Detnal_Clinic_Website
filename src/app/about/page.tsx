import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CLINIC } from '@/lib/config';

export const metadata: Metadata = {
  title: `About Us | ${CLINIC.name}`,
  description: 'Learn about Natural Dental Clinic, our philosophy and approach to dental care in Ramachandrapuram, Hyderabad.',
};

const VALUES = [
  { title: 'Compassion', description: 'We treat every patient with empathy, understanding their unique needs and anxieties.' },
  { title: 'Excellence', description: 'We are committed to delivering the highest quality of dental care using advanced techniques.' },
  { title: 'Innovation', description: 'Our clinic is equipped with modern technology for precise and comfortable treatments.' },
  { title: 'Trust', description: 'We build lasting relationships based on transparency, honesty, and ethical practices.' },
  { title: 'Hygiene', description: 'We maintain strict sterilization protocols for your safety and peace of mind.' },
  { title: 'Personalization', description: 'Your smile is unique. We tailor every treatment plan specifically for you.' },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Dentist",
              "name": CLINIC.name,
              "image": "/images/clinic/clinic-front.jpg",
              "description": "Premium dental clinic offering compassionate and advanced dental care.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": CLINIC.address.line1,
                "addressLocality": CLINIC.address.city,
                "postalCode": CLINIC.address.pincode,
                "addressCountry": "IN"
              }
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-forest-600 text-white section-padding pt-32 lg:pt-40">
        <div className="container-premium text-center">
          <span className="section-label text-champagne-400 mb-4 block">Our Story</span>
          <h1 className="heading-display mb-6">About Natural Dental Clinic</h1>
          <p className="text-xl lg:text-2xl text-ivory-100 max-w-3xl mx-auto font-serif">
            Creating beautiful, healthy smiles through compassionate care and clinical excellence.
          </p>
        </div>
      </section>

      {/* Clinic Story */}
      <section className="section-padding bg-ivory-100">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/clinic/clinic-interior.jpg" 
                alt="Natural Dental Clinic Interior" 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="heading-xl text-forest-600 mb-6">Our Journey</h2>
              <div className="space-y-4 text-gray-700 font-sans leading-relaxed">
                <p>
                  Natural Dental Clinic was founded with a simple yet profound philosophy: to provide exceptional dental care in an environment that feels welcoming, relaxing, and entirely patient-focused. 
                </p>
                <p>
                  We understand that visiting the dentist can be a source of anxiety for many. That's why we've purposefully designed our clinic to feel less like a traditional medical facility and more like a serene retreat. From the moment you step through our doors, our priority is your comfort and well-being.
                </p>
                <p>
                  Our approach marries advanced dental technology with a gentle, personalized touch. We believe that oral health is a fundamental component of overall wellness, and we are dedicated to helping our community achieve and maintain optimal oral health for a lifetime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-premium text-center">
          <h2 className="heading-xl text-forest-600 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map((value, index) => (
              <div key={index} className="card-premium p-8 rounded-xl bg-ivory-100/50 hover:bg-ivory-100 transition-colors">
                <h3 className="heading-lg text-forest-600 mb-4">{value.title}</h3>
                <p className="text-gray-600 font-sans">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-forest-600 text-white">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="heading-xl text-white mb-4">Why Choose Natural Dental?</h2>
            <p className="text-mint-400 font-sans max-w-2xl mx-auto">
              We go above and beyond to ensure your dental experience is outstanding.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 mx-auto bg-champagne-400/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🌟</span>
              </div>
              <h4 className="font-serif text-2xl font-bold mb-3">Dedicated Care</h4>
              <p className="text-sm text-ivory-100 font-sans">Patient-focused dental care with clear communication and personalised planning.</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto bg-champagne-400/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🏥</span>
              </div>
              <h4 className="font-serif text-2xl font-bold mb-3">Modern Facility</h4>
              <p className="text-sm text-ivory-100 font-sans">State-of-the-art equipment for precise diagnostics.</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto bg-champagne-400/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">✨</span>
              </div>
              <h4 className="font-serif text-2xl font-bold mb-3">Painless Care</h4>
              <p className="text-sm text-ivory-100 font-sans">Advanced techniques for comfortable treatments.</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto bg-champagne-400/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h4 className="font-serif text-2xl font-bold mb-3">Honest Pricing</h4>
              <p className="text-sm text-ivory-100 font-sans">Transparent treatment plans with no hidden costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Preview */}
      <section className="section-padding bg-ivory-100">
        <div className="container-premium">
          <div className="bg-white rounded-3xl p-8 lg:p-16 shadow-xl border border-sage-500/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-xl text-forest-600 mb-2">Meet Our Lead Dentist</h2>
                <h3 className="text-2xl font-sans text-sage-500 mb-6">Dr. Vandana Vytla</h3>
                <p className="text-gray-600 font-sans mb-8">
                  Dr. Vandana Vytla leads Natural Dental Clinic with a commitment to patient-centred dental care. Her approach combines careful clinical assessment with genuine warmth, ensuring patients feel informed and at ease throughout their treatment.
                </p>
                <Link href="/doctor" className="btn-primary inline-flex">
                  View Full Profile
                </Link>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image 
                  src="/images/doctor/doctor-main.jpg" 
                  alt="Dr. Vandana Vytla" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-champagne-400">
        <div className="container-premium text-center">
          <h2 className="heading-xl text-forest-600 mb-6">Ready for a Healthier Smile?</h2>
          <p className="text-forest-600/80 font-sans mb-8 max-w-2xl mx-auto">
            Book your consultation today and experience the Natural Dental difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Book an Appointment
            </Link>
            <a href={CLINIC.contact.phoneHref} className="btn-white">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
