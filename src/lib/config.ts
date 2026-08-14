// Central clinic configuration — update this file to change business details sitewide

export const CLINIC = {
  name: "Natural Dental Clinic",
  shortName: "NDC",
  tagline: "Patient-Focused Dental Care",
  description:
    "Dental care in Ramachandrapuram, Hyderabad. Treatments delivered with care, clear communication, and a focus on patient comfort.",
  doctor: {
    name: "Dr. Vandana Vytla",
    title: "Dental Surgeon",
    regNo: "A-6112",
    bio: "Dr. Vandana Vytla provides patient-focused dental care at Natural Dental Clinic in Ramachandrapuram. Her approach emphasises clear communication, careful evaluation, personalised treatment planning and a comfortable patient experience.",
    // Fields to be filled when verified by the clinic
    qualification: null as string | null,
    experienceYears: null as number | null,
    education: null as string | null,
    languages: null as string[] | null,
    certifications: null as string[] | null,
    professionalMemberships: null as string[] | null,
    areasOfInterest: null as string[] | null,
    consultationHours: null as string | null,
  },
  contact: {
    phone: "+91 8121860609",
    whatsapp: "+91 8121860609",
    email: "naturaldentalclinics@gmail.com",
    phoneDisplay: "+91 81218 60609",
    phoneHref: "tel:+918121860609",
    whatsappHref: "https://wa.me/918121860609",
    emailHref: "mailto:naturaldentalclinics@gmail.com",
  },
  address: {
    line1: "H No 4, 46/10/9/A, Road",
    landmark: "Backside South India Shopping Mall",
    locality: "Sai Nagar Colony",
    cityArea: "Ramachandrapuram",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "502032",
    country: "India",
    full: "H No 4, 46/10/9/A, Road, Backside South India Shopping Mall, Sai Nagar Colony, Ramachandrapuram, Hyderabad, Telangana 502032",
    googleMapsUrl: "https://maps.app.goo.gl/t2wSYG2y4RoLZ6Co8",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.0!2d78.4!3d17.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNatural+Dental+Clinic!5e0!3m2!1sen!2sin!4v1",
  },
  // Verified actual clinic hours
  openingHours: {
    monday: [
      { open: "10:00", close: "14:00" },
      { open: "17:00", close: "21:00" },
    ],
    tuesday: [
      { open: "10:00", close: "14:00" },
      { open: "17:00", close: "21:00" },
    ],
    wednesday: [
      { open: "10:00", close: "14:00" },
      { open: "17:00", close: "21:00" },
    ],
    thursday: [
      { open: "10:00", close: "14:00" },
      { open: "17:00", close: "21:00" },
    ],
    friday: [
      { open: "10:00", close: "14:00" },
      { open: "17:00", close: "21:00" },
    ],
    saturday: [
      { open: "10:00", close: "14:00" },
      { open: "17:00", close: "21:00" },
    ],
    sunday: [
      { open: "10:00", close: "14:00" },
    ],
  },
  // Display strings for UI components
  displayHours: {
    weekdays: "10:00 AM – 2:00 PM & 5:00 PM – 9:00 PM",
    sunday: "10:00 AM – 2:00 PM",
    weekdaysShort: "Mon–Sat: 10AM–2PM, 5PM–9PM",
    sundayShort: "Sun: 10AM–2PM",
    schedule: [
      { day: "Monday – Saturday", morning: "10:00 AM – 2:00 PM", evening: "5:00 PM – 9:00 PM" },
      { day: "Sunday", morning: "10:00 AM – 2:00 PM", evening: "Closed" },
    ],
  },
  social: {
    google: "https://maps.app.goo.gl/t2wSYG2y4RoLZ6Co8",
    facebook: "#",
    instagram: "#",
  },
  seo: {
    siteUrl: "https://naturaldental.in",
    defaultTitle: "Natural Dental Clinic | Dentist in Ramachandrapuram, Hyderabad",
    titleTemplate: "%s | Natural Dental Clinic",
    defaultDescription:
      "Visit Natural Dental Clinic in Ramachandrapuram, Hyderabad for personalized dental care with Dr. Vandana Vytla, Dental Surgeon. Explore treatments, reviews, clinic information and directions.",
    keywords: [
      "dental clinic Hyderabad",
      "dentist Ramachandrapuram",
      "Natural Dental Clinic",
      "Dr Vandana Vytla",
      "root canal Hyderabad",
      "dental implants Hyderabad",
      "dentist RC Puram",
    ],
    ogImage: "/og-image.jpg",
  },
} as const;

export type ClinicConfig = typeof CLINIC;
