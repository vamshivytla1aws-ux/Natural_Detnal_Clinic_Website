// Central clinic configuration — update this file to change business details sitewide

export const CLINIC = {
  name: "Natural Dental Clinic",
  shortName: "NDC",
  tagline: "Your Smile, Our Care",
  description:
    "Premium dental care in Ramachandrapuram, Hyderabad. Expert treatments delivered with compassion, precision, and a natural approach to oral health.",
  doctor: {
    name: "Dr. Vandana Vytla",
    title: "Dental Surgeon",
    regNo: "A-6112",
    bio: "Dr. Vandana Vytla is a compassionate and highly skilled Dental Surgeon with a patient-first philosophy. She combines modern dental techniques with a gentle approach, ensuring every patient feels comfortable and cared for. Her commitment to continuous learning keeps the clinic at the forefront of dental innovation.",
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
    line2: "Backside South India Shopping Mall",
    line3: "Sai Nagar Colony, Ramachandrapuram",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "502032",
    country: "India",
    full: "H No 4, 46/10/9/A, Road, Backside South India Shopping Mall, Sai Nagar Colony, Ramachandrapuram, Hyderabad, Telangana 502032",
    landmark: "Behind South India Shopping Mall, Near Bharat Petrol Pump, R.C.Puram",
    googleMapsUrl: "https://maps.app.goo.gl/t2wSYG2y4RoLZ6Co8",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.0!2d78.4!3d17.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNatural+Dental+Clinic!5e0!3m2!1sen!2sin!4v1",
  },
  hours: {
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
    siteUrl: "https://naturaldentalclinic.in",
    defaultTitle: "Natural Dental Clinic — Premium Dental Care in Hyderabad",
    titleTemplate: "%s | Natural Dental Clinic, Hyderabad",
    defaultDescription:
      "Natural Dental Clinic in Ramachandrapuram, Hyderabad offers expert dental care including root canal, implants, braces, teeth whitening & more. Dr. Vandana Vytla, Dental Surgeon. Call +91 8121860609.",
    keywords: [
      "dental clinic Hyderabad",
      "dentist Ramachandrapuram",
      "Natural Dental Clinic",
      "Dr Vandana Vytla",
      "root canal Hyderabad",
      "dental implants Hyderabad",
      "best dentist RC Puram",
    ],
    ogImage: "/og-image.jpg",
  },
} as const;

export type ClinicConfig = typeof CLINIC;
