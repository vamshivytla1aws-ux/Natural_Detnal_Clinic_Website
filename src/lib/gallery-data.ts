export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "clinic" | "doctor" | "treatment" | "reception" | "results" | "camps";
  width: number;
  height: number;
  featured?: boolean;
}

export const GALLERY_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "clinic", label: "Clinic" },
  { id: "doctor", label: "Doctor" },
  { id: "treatment", label: "Treatment" },
  { id: "reception", label: "Reception" },
  { id: "camps", label: "Dental Camps" },
  { id: "results", label: "Results" },
] as const;

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "clinic-exterior-real",
    src: "/images/gallery/clinic-exterior-real.jpg",
    alt: "Natural Dental Clinic exterior in Ramachandrapuram, Hyderabad",
    category: "clinic",
    width: 768,
    height: 1024,
    featured: true,
  },
  {
    id: "reception-real",
    src: "/images/gallery/reception-real.jpg",
    alt: "Natural Dental Clinic reception area in Ramachandrapuram",
    category: "reception",
    width: 768,
    height: 1024,
    featured: true,
  },
  {
    id: "clinic-logo-wall",
    src: "/images/gallery/clinic-logo-wall.jpg",
    alt: "Natural Dental Clinic signage and interior wall",
    category: "clinic",
    width: 768,
    height: 1024,
    featured: true,
  },
  {
    id: "treatment-room",
    src: "/images/gallery/treatment-room.jpg",
    alt: "Dental treatment room at Natural Dental Clinic, Ramachandrapuram",
    category: "treatment",
    width: 768,
    height: 1024,
    featured: true,
  },
  {
    id: "clinic-exterior-day",
    src: "/images/gallery/clinic-exterior-day.jpg",
    alt: "Natural Dental Clinic daytime exterior view in Ramachandrapuram",
    category: "clinic",
    width: 768,
    height: 1024,
  },
  {
    id: "clinic-exterior-night",
    src: "/images/gallery/clinic-exterior-night.jpg",
    alt: "Natural Dental Clinic evening exterior in Sai Nagar Colony, Ramachandrapuram",
    category: "clinic",
    width: 768,
    height: 1024,
  },
  {
    id: "doctor-portrait",
    src: "/images/gallery/doctor-portrait.jpg",
    alt: "Dr. Vandana Vytla, Dental Surgeon at Natural Dental Clinic",
    category: "doctor",
    width: 768,
    height: 1024,
  },
  {
    id: "reception-desk",
    src: "/images/gallery/reception-desk.jpg",
    alt: "Reception desk at Natural Dental Clinic",
    category: "reception",
    width: 768,
    height: 1024,
  },
];
