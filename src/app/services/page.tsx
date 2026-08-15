import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2, MessageCircle } from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import { CLINIC } from "@/lib/config";
import { ServiceIcon } from "@/components/shared/ServiceIcon";

export const metadata: Metadata = {
  title: "Dental Treatments in Ramachandrapuram",
  description: "Explore dental treatments available at Natural Dental Clinic in Ramachandrapuram, Hyderabad, including root canal treatment, dental implants, braces, whitening and preventive dental care.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-600 pb-24 pt-40 text-white lg:pb-28 lg:pt-48">
        <div className="absolute -right-40 -top-56 h-[36rem] w-[36rem] rounded-full border border-white/10" />
        <div className="absolute -right-20 -top-36 h-[24rem] w-[24rem] rounded-full border border-champagne-300/20" />
        <div className="container-premium relative z-10">
          <div className="max-w-4xl">
            <span className="section-label mb-6 text-champagne-300">Our treatments</span>
            <h1 className="heading-display max-w-3xl text-white">Care designed around your needs.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-sage-100 md:text-xl">
              From preventive check-ups to restorative and cosmetic care, every recommendation begins with a careful examination and a clear conversation.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-white"><Calendar className="mr-2 h-4 w-4" />Book a Consultation</Link>
              <a href={`${CLINIC.contact.whatsappHref}?text=${encodeURIComponent("Hello Natural Dental Clinic, I would like to ask about a dental treatment.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-[10px] border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-forest-600">
                <MessageCircle className="mr-2 h-4 w-4" />WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory-100">
        <div className="container-premium">
          <div className="mb-14 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <span className="eyebrow">Explore care</span>
              <h2 className="heading-lg">Treatment options, clearly explained.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-charcoal-500 lg:justify-self-end">
              Suitability, timing, and outcomes vary for every patient. Choose a treatment to understand common indications, the usual process, and questions to discuss during your visit.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group premium-panel flex min-h-[22rem] flex-col p-7 hover:-translate-y-1 hover:border-champagne-300 hover:shadow-premium-hover md:p-8">
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-100 text-forest-600 transition-colors group-hover:bg-forest-600 group-hover:text-white">
                    <ServiceIcon name={service.icon} size={24} strokeWidth={1.5} />
                  </span>
                  <span className="font-serif text-lg text-champagne-400">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <p className="mt-8 text-[.68rem] font-bold uppercase tracking-[.16em] text-sage-600">{service.category}</p>
                <h2 className="mt-2 font-serif text-[1.75rem] font-semibold leading-tight text-forest-600">{service.title}</h2>
                <p className="mt-4 line-clamp-4 text-[.95rem] leading-7 text-charcoal-500">{service.description}</p>
                <span className="mt-auto flex items-center border-t border-ivory-300 pt-6 text-sm font-semibold text-forest-600">
                  Explore treatment <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container-premium">
          <div className="premium-panel grid gap-10 overflow-hidden p-8 md:p-12 lg:grid-cols-[1fr_.8fr] lg:p-16">
            <div>
              <span className="eyebrow">Your first visit</span>
              <h2 className="heading-lg max-w-xl">A recommendation starts with understanding you.</h2>
            </div>
            <div className="space-y-4 self-center">
              {["A careful clinical examination", "A clear explanation of suitable options", "Time to ask questions before deciding"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-charcoal-600"><CheckCircle2 className="h-5 w-5 shrink-0 text-sage-600" /><span>{item}</span></div>
              ))}
              <Link href="/contact" className="btn-primary mt-4">Plan Your Visit</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
