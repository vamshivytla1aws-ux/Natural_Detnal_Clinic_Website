export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "clinic" | "doctor" | "treatment" | "details" | "reception" | "results" | "camps";
  width: number;
  height: number;
  featured?: boolean;
  badge?: "Before" | "After" | "Before & After" | "Dental Camp";
}

export const GALLERY_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "clinic", label: "Clinic" },
  { id: "doctor", label: "Doctor & Team" },
  { id: "reception", label: "Reception" },
  { id: "treatment", label: "Treatment Space" },
  { id: "results", label: "Before & After" },
  { id: "camps", label: "Dental Camps" },
  { id: "details", label: "Clinic Details" },
] as const;

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "clinic-interior-wide",
    src: "/images/gallery/clinic-interior-wide.jpg",
    alt: "Wide interior view of Natural Dental Clinic in Ramachandrapuram",
    category: "clinic",
    width: 1800,
    height: 1350,
    featured: true,
  },
  {
    id: "doctor-vandana",
    src: "/images/doctor/doctor-vandana.jpg",
    alt: "Dr. Vandana Vytla, Dental Surgeon at Natural Dental Clinic",
    category: "doctor",
    width: 1350,
    height: 1800,
    featured: true,
  },
  {
    id: "clinic-entrance-new",
    src: "/images/gallery/clinic-entrance-new.jpg",
    alt: "Full entrance and signage of Natural Dental Clinic in Ramachandrapuram",
    category: "clinic",
    width: 1448,
    height: 1086,
    featured: true,
  },
  {
    id: "doctor-team",
    src: "/images/gallery/doctor-team.jpg",
    alt: "Dr. Vandana Vytla with a clinic team member",
    category: "doctor",
    width: 960,
    height: 1280,
    featured: true,
  },
  {
    id: "treatment-chair",
    src: "/images/gallery/treatment-chair.jpg",
    alt: "Dental treatment chair at Natural Dental Clinic",
    category: "treatment",
    width: 1350,
    height: 1800,
  },
  {
    id: "sterilisation-equipment",
    src: "/images/gallery/sterilisation-equipment.jpg",
    alt: "Sterilisation and clinical equipment at Natural Dental Clinic",
    category: "treatment",
    width: 1800,
    height: 1350,
  },
  {
    id: "branded-door",
    src: "/images/gallery/branded-door.jpg",
    alt: "Branded entrance door at Natural Dental Clinic",
    category: "details",
    width: 1091,
    height: 1800,
  },
  {
    id: "clinic-certificates",
    src: "/images/gallery/clinic-certificates.jpg",
    alt: "Clinic registration and professional certificate displayed at Natural Dental Clinic",
    category: "details",
    width: 1350,
    height: 1800,
  },
  {
    id: "clinic-wall-art",
    src: "/images/gallery/clinic-wall-art.jpg",
    alt: "Dental health wall art inside Natural Dental Clinic",
    category: "details",
    width: 1350,
    height: 1800,
  },
  {
    id: "reception-room-new",
    src: "/images/gallery/reception-room-new.jpg",
    alt: "Reception and waiting area at Natural Dental Clinic",
    category: "reception",
    width: 720,
    height: 1280,
  },
  {
    id: "doctor-with-patient",
    src: "/images/gallery/doctor-with-patient.jpg",
    alt: "Dr. Vandana Vytla with a patient at Natural Dental Clinic",
    category: "doctor",
    width: 960,
    height: 1280,
  },
  {
    id: "treatment-before",
    src: "/images/gallery/treatment-before.jpg",
    alt: "Clinical photograph before dental treatment",
    category: "results",
    width: 1200,
    height: 1600,
    badge: "Before",
  },
  {
    id: "treatment-after",
    src: "/images/gallery/treatment-after.jpg",
    alt: "Clinical photograph after dental treatment",
    category: "results",
    width: 1200,
    height: 1600,
    badge: "After",
  },
  {
    id: "treatment-before-after",
    src: "/images/gallery/treatment-before-after.jpg",
    alt: "Before-and-after dental treatment comparison",
    category: "results",
    width: 1600,
    height: 1600,
    badge: "Before & After",
  },
  {
    id: "dental-camp-care",
    src: "/images/gallery/dental-camp-care.jpg",
    alt: "Natural Dental Clinic team providing check-ups at a community dental camp",
    category: "camps",
    width: 1800,
    height: 1350,
    badge: "Dental Camp",
  },
  {
    id: "dental-camp-entrance",
    src: "/images/gallery/dental-camp-entrance.jpg",
    alt: "Natural Dental Clinic community dental camp entrance",
    category: "camps",
    width: 1800,
    height: 1350,
    badge: "Dental Camp",
  },
];
