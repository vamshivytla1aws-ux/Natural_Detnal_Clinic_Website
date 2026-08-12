// JSON-LD Structured Data for SEO
import { CLINIC } from "@/lib/config";

interface JsonLdProps {
  type: "Organization" | "Dentist" | "FAQPage" | "BreadcrumbList" | "WebSite" | "Service";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: Record<string, any>;
}

export function JsonLd({ type, data }: JsonLdProps) {
  let schema = {};

  switch (type) {
    case "Organization":
      schema = {
        "@context": "https://schema.org",
        "@type": ["Dentist", "MedicalBusiness"],
        name: CLINIC.name,
        description: CLINIC.seo.defaultDescription,
        url: CLINIC.seo.siteUrl,
        logo: `${CLINIC.seo.siteUrl}/images/logo.png`,
        image: `${CLINIC.seo.siteUrl}/og-image.jpg`,
        telephone: CLINIC.contact.phone,
        email: CLINIC.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${CLINIC.address.line1}, ${CLINIC.address.line2}`,
          addressLocality: "Ramachandrapuram",
          addressRegion: CLINIC.address.state,
          postalCode: CLINIC.address.pincode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "17.5",
          longitude: "78.4",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "10:00",
            closes: "14:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "17:00",
            closes: "21:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday"],
            opens: "10:00",
            closes: "14:00",
          },
        ],
        hasMap: CLINIC.address.googleMapsUrl,
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Card",
        priceRange: "₹₹",
        medicalSpecialty: "Dentistry",
        employee: {
          "@type": "Physician",
          name: CLINIC.doctor.name,
          jobTitle: CLINIC.doctor.title,
          medicalSpecialty: "Dentistry",
        },
        sameAs: [CLINIC.address.googleMapsUrl],
      };
      break;

    case "WebSite":
      schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: CLINIC.name,
        url: CLINIC.seo.siteUrl,
        description: CLINIC.seo.defaultDescription,
        potentialAction: {
          "@type": "SearchAction",
          target: `${CLINIC.seo.siteUrl}/services?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      };
      break;

    case "FAQPage":
      schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data?.faqs?.map(
          (faq: { question: string; answer: string }) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })
        ),
      };
      break;

    case "BreadcrumbList":
      schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: data?.items?.map(
          (item: { name: string; url: string }, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })
        ),
      };
      break;

    case "Service":
      schema = {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        name: data?.name,
        description: data?.description,
        procedureType: "Therapeutic",
        followup: "Follow-up appointments recommended",
        provider: {
          "@type": "Dentist",
          name: CLINIC.name,
          url: CLINIC.seo.siteUrl,
        },
      };
      break;

    default:
      schema = { "@context": "https://schema.org", ...data };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
