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
    alt: "Natural Dental Clinic Exterior - Main Entrance",
    category: "clinic",
    width: 768,
    height: 1024,
    featured: true,
  },
  {
    id: "reception-real",
    src: "/images/gallery/reception-real.jpg",
    alt: "Welcoming Reception Area",
    category: "reception",
    width: 768,
    height: 1024,
    featured: true,
  },
  {
    id: "clinic-logo-wall",
    src: "/images/gallery/clinic-logo-wall.jpg",
    alt: "Clinic Logo and Aesthetic Wall",
    category: "clinic",
    width: 768,
    height: 1024,
    featured: true,
  },
  {
    id: "treatment-room",
    src: "/images/gallery/treatment-room.jpg",
    alt: "Modern Dental Treatment Chair and Equipment",
    category: "treatment",
    width: 768,
    height: 1024,
    featured: true,
  },
  {
    id: "clinic-exterior-day",
    src: "/images/gallery/clinic-exterior-day.jpg",
    alt: "Natural Dental Clinic Exterior - Day View",
    category: "clinic",
    width: 768,
    height: 1024,
  },
  {
    id: "clinic-exterior-night",
    src: "/images/gallery/clinic-exterior-night.jpg",
    alt: "Natural Dental Clinic Exterior - Night View",
    category: "clinic",
    width: 768,
    height: 1024,
  },
  {
    id: "doctor-portrait",
    src: "/images/gallery/doctor-portrait.jpg",
    alt: "Portrait of Dr. Vandana Vytla",
    category: "doctor",
    width: 768,
    height: 1024,
  },
  {
    id: "reception-desk",
    src: "/images/gallery/reception-desk.jpg",
    alt: "Clinic Reception Desk",
    category: "reception",
    width: 768,
    height: 1024,
  },
];
