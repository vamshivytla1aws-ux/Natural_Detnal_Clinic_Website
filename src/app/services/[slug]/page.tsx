import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { SERVICES, getServiceBySlug } from "@/lib/services-data";
import { CLINIC } from "@/lib/config";
import { ClinicActions } from "@/components/ui/ClinicActions";
import { ServiceIcon } from "@/components/shared/ServiceIcon";

export function generateStaticParams() {
  return SERVICES.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Treatment Not Found" };

  const titles: Record<string, string> = {
    "root-canal-treatment": "Root Canal Treatment in Ramachandrapuram",
    "dental-implants": "Dental Implants in Ramachandrapuram",
    "braces-orthodontics": "Braces Treatment in Ramachandrapuram",
    "teeth-whitening": "Teeth Whitening in Ramachandrapuram",
    "wisdom-tooth-removal": "Wisdom Tooth Removal in Ramachandrapuram",
    "pediatric-dentistry": "Children's Dental Care in Ramachandrapuram",
    "gum-treatment": "Gum Treatment in Ramachandrapuram",
    "crowns-bridges": "Crowns & Bridges in Ramachandrapuram",
    "general-dentistry": "Dental Check-up & General Dentistry in Ramachandrapuram",
  };

  return {
    title: titles[service.slug] ?? `${service.title} in Ramachandrapuram`,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${CLINIC.name}`,
      description: service.description,
      url: `${CLINIC.seo.siteUrl}/services/${service.slug}`,
      type: "website",
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const relatedServices = service.relatedSlugs
    .map((slug) => SERVICES.find((item) => item.slug === slug))
    .filter((item): item is (typeof SERVICES)[number] => Boolean(item));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.description,
    procedureType: "Therapeutic",
    provider: {
      "@type": "Dentist",
      name: CLINIC.name,
      url: CLINIC.seo.siteUrl,
      telephone: CLINIC.contact.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${CLINIC.address.line1}, ${CLINIC.address.landmark}, ${CLINIC.address.locality}`,
        addressLocality: CLINIC.address.cityArea,
        addressRegion: CLINIC.address.state,
        postalCode: CLINIC.address.postalCode,
        addressCountry: "IN",
      },
    },
    areaServed: "Ramachandrapuram, Hyderabad",
    url: `${CLINIC.seo.siteUrl}/services/${service.slug}`,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: CLINIC.seo.siteUrl },
      { "@type": "ListItem", position: 2, name: "Dental Treatments", item: `${CLINIC.seo.siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${CLINIC.seo.siteUrl}/services/${service.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative overflow-hidden bg-forest-600 pb-20 pt-36 text-white lg:pb-28 lg:pt-44">
        <div className="absolute -right-32 top-8 h-80 w-80 rounded-full border border-champagne-300/20" />
        <div className="container-premium relative z-10">
          <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-sm text-sage-200">
            <Link href="/" className="hover:text-white">Home</Link><ChevronRight size={14} />
            <Link href="/services" className="hover:text-white">Treatments</Link><ChevronRight size={14} />
            <span className="text-white">{service.shortTitle}</span>
          </nav>
          <div className="grid gap-12 lg:grid-cols-[1fr_.58fr] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-champagne-300"><ServiceIcon name={service.icon} size={27} strokeWidth={1.5} /></span>
                <span className="text-xs font-bold uppercase tracking-[.16em] text-champagne-300">{service.category}</span>
              </div>
              <h1 className="heading-display max-w-4xl text-white">{service.title}</h1>
              <p className="mt-6 max-w-2xl font-serif text-2xl leading-snug text-sage-100 md:text-3xl">{service.tagline}</p>
            </div>
            <div className="rounded-[26px] border border-white/15 bg-white/10 p-6 backdrop-blur-md lg:p-8">
              <p className="text-sm leading-7 text-sage-100">Every treatment begins with an examination. We will explain whether this option is suitable for you before any treatment is planned.</p>
              <Link href="/contact" className="btn-white mt-6 w-full">Book a Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-premium grid gap-14 lg:grid-cols-[1.05fr_.75fr] lg:gap-20">
          <div>
            <span className="eyebrow">Understanding the treatment</span>
            <h2 className="heading-lg mb-7">A clear overview</h2>
            <p className="text-lg leading-8 text-charcoal-500">{service.overview}</p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3 rounded-2xl bg-sage-50 p-4 text-sm leading-6 text-charcoal-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage-600" />{benefit}
                </div>
              ))}
            </div>
          </div>
          <aside className="premium-panel h-fit p-7 lg:sticky lg:top-32 lg:p-8">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-sage-600">When to seek an evaluation</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-forest-600">Common signs</h2>
            <ul className="mt-7 space-y-4">
              {service.symptoms.map((symptom) => (
                <li key={symptom} className="flex gap-3 border-b border-ivory-300 pb-4 text-sm leading-6 text-charcoal-600 last:border-0 last:pb-0"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne-400" />{symptom}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section-padding border-y border-ivory-300 bg-ivory-200/55">
        <div className="container-premium">
          <div className="mb-14 max-w-2xl"><span className="eyebrow">What to expect</span><h2 className="heading-lg">Your care journey</h2></div>
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {service.process.map((item, index) => (
              <li key={item.step} className="premium-panel p-7">
                <span className="font-serif text-3xl text-champagne-400">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-forest-600">{item.step}</h3>
                <p className="mt-3 text-sm leading-7 text-charcoal-500">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-premium grid gap-12 lg:grid-cols-[.62fr_1fr] lg:gap-20">
          <div><span className="eyebrow">Questions, answered</span><h2 className="heading-lg">Frequently asked questions</h2><p className="mt-5 text-charcoal-500">These answers are general guidance. Your dentist will advise you based on an examination.</p></div>
          <div className="space-y-3">
            {service.faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-ivory-300 bg-ivory-100 px-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-semibold text-charcoal-700">{faq.question}<span className="text-xl font-light text-sage-600 transition-transform group-open:rotate-45">+</span></summary>
                <p className="border-t border-ivory-300 pb-6 pt-4 text-[.95rem] leading-7 text-charcoal-500">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-600 py-20 text-white">
        <div className="container-premium grid gap-10 lg:grid-cols-[1fr_.72fr] lg:items-center">
          <div><span className="section-label text-champagne-300">Plan your visit</span><h2 className="heading-lg mt-4 max-w-2xl text-white">Talk through your options with clarity.</h2><p className="mt-5 max-w-2xl leading-7 text-sage-100">{service.localCta}</p></div>
          <div className="rounded-[26px] bg-white p-6 text-charcoal-700 shadow-xl md:p-8"><ClinicActions variant="grid" treatmentName={service.title} showBook showCall showWhatsApp showDirections /></div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="section-padding bg-ivory-100">
          <div className="container-premium">
            <div className="mb-10 flex items-end justify-between gap-6"><div><span className="eyebrow">Continue exploring</span><h2 className="heading-lg">Related treatments</h2></div><Link href="/services" className="hidden items-center text-sm font-semibold text-forest-600 sm:flex">All treatments <ArrowRight className="ml-2 h-4 w-4" /></Link></div>
            <div className="grid gap-5 md:grid-cols-3">
              {relatedServices.map((related) => (
                <Link key={related.slug} href={`/services/${related.slug}`} className="group premium-panel p-7">
                  <ServiceIcon name={related.icon} className="h-6 w-6 text-sage-600" strokeWidth={1.5} />
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-forest-600">{related.title}</h3>
                  <span className="mt-6 flex items-center text-sm font-semibold text-forest-600">Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              ))}
            </div>
            <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-6 text-charcoal-400">Treatment suitability, duration, and outcomes vary with individual clinical conditions. A dental examination is required before treatment is recommended.</p>
          </div>
        </section>
      )}
    </>
  );
}
