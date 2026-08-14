import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES, getServiceBySlug } from '@/lib/services-data';
import { CLINIC } from '@/lib/config';
import { 
  CheckCircle, 
  ChevronRight, 
  Calendar, 
  Phone, 
  MessageCircle,
  Star,
  Shield,
  Clock,
  Heart,
  ArrowRight
} from 'lucide-react';

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    return { title: 'Service Not Found | Natural Dental Clinic' };
  }

  const titleMap: Record<string, string> = {
    "root-canal-treatment": "Root Canal Treatment in Ramachandrapuram | Natural Dental Clinic",
    "dental-implants": "Dental Implants in Ramachandrapuram | Natural Dental Clinic",
    "braces-orthodontics": "Braces Treatment in Ramachandrapuram | Natural Dental Clinic",
    "teeth-whitening": "Teeth Whitening in Ramachandrapuram | Natural Dental Clinic",
    "wisdom-tooth-removal": "Wisdom Tooth Removal in Ramachandrapuram | Natural Dental Clinic",
    "pediatric-dentistry": "Children's Dental Care in Ramachandrapuram | Natural Dental Clinic",
    "gum-treatment": "Gum Treatment in Ramachandrapuram | Natural Dental Clinic",
    "crowns-bridges": "Crowns & Bridges in Ramachandrapuram | Natural Dental Clinic",
    "general-dentistry": "Dental Check-up & General Dentistry in Ramachandrapuram | Natural Dental Clinic",
  };

  const descriptionMap: Record<string, string> = {
    "root-canal-treatment": "Learn about root canal treatment at Natural Dental Clinic in Ramachandrapuram, Hyderabad, including when it may be recommended, the process, and how to arrange a consultation.",
    "dental-implants": "Explore dental implant options at Natural Dental Clinic in Ramachandrapuram. Learn about suitability, the treatment process, and how to arrange an evaluation.",
    "braces-orthodontics": "Find out about braces and orthodontic treatment at Natural Dental Clinic in Ramachandrapuram, for children, teenagers, and adults.",
    "teeth-whitening": "Professional teeth whitening at Natural Dental Clinic in Ramachandrapuram. Learn about suitability, the process, and realistic expectations.",
    "wisdom-tooth-removal": "Wisdom tooth extraction at Natural Dental Clinic in Ramachandrapuram. Find out about assessment, the procedure, and aftercare.",
    "pediatric-dentistry": "Child-friendly dental care at Natural Dental Clinic in Ramachandrapuram, Hyderabad. Gentle, reassuring dental visits for children of all ages.",
    "gum-treatment": "Gum disease assessment and treatment at Natural Dental Clinic in Ramachandrapuram. Scaling, deep cleaning, and ongoing care.",
    "crowns-bridges": "Dental crowns and bridges at Natural Dental Clinic in Ramachandrapuram. Restore damaged or missing teeth with natural-looking restorations.",
    "general-dentistry": "Routine dental check-ups, cleaning, and preventive care at Natural Dental Clinic in Ramachandrapuram for patients of all ages.",
  };

  const title = titleMap[params.slug] || `${service.title} in Ramachandrapuram | Natural Dental Clinic`;
  const description = descriptionMap[params.slug] || service.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${params.slug}`,
    }
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  // Use data-driven related services
  const relatedServices = (service.relatedSlugs || [])
    .map(slug => SERVICES.find(s => s.slug === slug))
    .filter(Boolean) as typeof SERVICES;

  // Generate Schema.org JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": service.title,
    "description": service.description,
    "procedureType": "Therapeutic",
    "provider": {
      "@type": "Dentist",
      "name": "Natural Dental Clinic",
      "url": CLINIC.seo.siteUrl,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ramachandrapuram",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      }
    },
    "areaServed": "Ramachandrapuram, Hyderabad",
    "url": `${CLINIC.seo.siteUrl}/services/${service.slug}`
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": CLINIC.seo.siteUrl },
      { "@type": "ListItem", "position": 2, "name": "Dental Treatments", "item": `${CLINIC.seo.siteUrl}/services` },
      { "@type": "ListItem", "position": 3, "name": service.title, "item": `${CLINIC.seo.siteUrl}/services/${service.slug}` }
    ]
  };

  return (
    <main className="flex flex-col min-h-screen bg-neutral-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="bg-emerald-900 text-white pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-overlay filter blur-3xl -translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-emerald-100/80 text-sm mb-8 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">{service.shortTitle}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-800/80 border border-emerald-700/50 flex items-center justify-center text-4xl shadow-lg">
                {service.icon}
              </div>
              <span className="inline-block px-3 py-1 bg-emerald-800/50 border border-emerald-700 rounded-full text-emerald-100 text-sm font-semibold uppercase tracking-wider">
                {service.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 font-light">
              {service.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold transition-colors duration-200"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Symptoms */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Overview</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                {service.overview}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.benefits.slice(0, 3).map((benefit, i) => (
                  <span key={i} className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 font-medium text-sm border border-emerald-100">
                    <Heart className="w-4 h-4 mr-2" />
                    {benefit.split(' ')[0]} {benefit.split(' ')[1]}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                When Do You Need This?
              </h3>
              <ul className="space-y-4">
                {service.symptoms.map((symptom, i) => (
                  <li key={i} className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center mt-0.5 mr-3 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                    </div>
                    <span className="text-neutral-700 font-medium">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-emerald-50 border-y border-emerald-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Benefits of {service.shortTitle}
            </h2>
            <p className="text-lg text-neutral-600">
              Discover how our advanced treatment can improve your oral health, comfort, and confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 flex items-start hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 text-emerald-500 mr-4 shrink-0" />
                <p className="text-neutral-700 font-medium leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-neutral-600">
              We ensure a smooth, comfortable, and transparent experience from your first consultation to your final result.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-200 before:via-emerald-400 before:to-emerald-200">
              {service.process.map((step, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 border-4 border-white text-emerald-600 font-bold text-lg shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 z-10">
                    {i + 1}
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-auto md:ml-0 p-6 bg-white rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow group-hover:border-emerald-200">
                    <h4 className="text-xl font-bold text-neutral-900 mb-2">{step.step}</h4>
                    <p className="text-neutral-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-semibold text-lg text-neutral-800">
                  {faq.question}
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="text-neutral-600 px-6 pb-6 pt-0 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & CTA */}
      <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Natural Dental Clinic?</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Star className="w-6 h-6 text-emerald-400 mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Patient-Focused Care</h4>
                    <p className="text-emerald-100">Clear consultation, personalised treatment planning, and a comfortable clinic environment.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-emerald-400 mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Advanced Technology</h4>
                    <p className="text-emerald-100">Modern equipment for precise, comfortable treatments.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-emerald-400 mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Patient-Centric Approach</h4>
                    <p className="text-emerald-100">Your comfort and health are our top priorities.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 text-neutral-900 text-center shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Need a dental consultation?</h3>
              <p className="text-neutral-600 mb-6">
                {service.localCta}
              </p>
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/contact"
                  className="flex items-center justify-center w-full px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment Online
                </Link>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href={CLINIC.contact.phoneHref}
                    className="flex items-center justify-center px-4 py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us
                  </a>
                  <a 
                    href={CLINIC.contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold transition-colors border border-emerald-200"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-neutral-900">Related Treatments</h2>
              <Link href="/services" className="text-emerald-600 font-semibold hover:text-emerald-700 hidden sm:flex items-center">
                View All Treatments <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((related) => (
                <Link 
                  href={`/services/${related.slug}`} 
                  key={related.slug}
                  className="group block bg-neutral-50 rounded-2xl p-6 border border-neutral-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl shadow-sm mb-6 group-hover:scale-110 transition-transform">
                    {related.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                    {related.description}
                  </p>
                  <span className="inline-flex items-center text-emerald-600 font-semibold text-sm">
                    Learn about {related.shortTitle} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
            
            <div className="mt-8 text-center sm:hidden">
              <Link href="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-50 text-emerald-700 font-semibold w-full">
                View All Services
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Treatment Disclaimer */}
      <section className="py-8 bg-ivory-100 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <p className="text-center text-xs text-gray-400 font-sans leading-relaxed">
            Treatment suitability, duration and outcomes vary depending on individual clinical conditions. A dental examination is required before recommending treatment.
          </p>
        </div>
      </section>
    </main>
  );
}
