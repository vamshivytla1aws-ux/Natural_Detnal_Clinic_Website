import { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES, SERVICE_CATEGORIES } from '@/lib/services-data';
import { CheckCircle, ArrowRight, Phone, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dental Treatments in Ramachandrapuram | Natural Dental Clinic',
  description: 'Explore dental treatments available at Natural Dental Clinic in Ramachandrapuram, Hyderabad, including root canal treatment, dental implants, braces, whitening and preventive dental care.',
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-emerald-900 text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-overlay filter blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-800/50 border border-emerald-700 text-emerald-100 text-sm font-medium mb-6">
            Comprehensive Care
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Dental Treatments
          </h1>
          <p className="text-lg md:text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            From routine check-ups to advanced restorative treatments, we provide high-quality, comfortable dental care to keep your smile healthy and beautiful.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold transition-colors duration-200 w-full sm:w-auto"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Link>
            <a 
              href="tel:+1234567890" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-800/50 hover:bg-emerald-800 border border-emerald-700 text-white font-medium transition-colors duration-200 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Optional Category Filter Visual Only - In a real app we might use state to filter, but here we just list all */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            <div className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-medium text-sm cursor-pointer shadow-sm">
              All Services
            </div>
            {SERVICE_CATEGORIES.map((category) => (
              <div 
                key={category} 
                className="px-4 py-2 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50 font-medium text-sm cursor-pointer transition-colors"
              >
                {category}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div 
                key={service.slug} 
                className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl border border-neutral-100 overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-3xl shadow-sm border border-emerald-100 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs font-semibold uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-6 flex-1">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.benefits.slice(0, 3).map((benefit, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 shrink-0" />
                        <span className="text-sm text-neutral-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={`/services/${service.slug}`}
                    className="mt-auto inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div className="h-1.5 w-full bg-gradient-to-r from-emerald-400 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-50 py-20 border-t border-emerald-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Ready to improve your oral health?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Schedule a consultation with our experienced dental team today. We'll assess your needs and create a personalised treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            >
              Book an Appointment
            </Link>
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-700 font-semibold shadow-sm transition-all duration-200"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
