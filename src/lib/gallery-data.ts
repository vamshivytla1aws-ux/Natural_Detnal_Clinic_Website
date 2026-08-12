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
    id: "dental-camp-banner",
    src: "/images/gallery/dental-camp-banner.jpg",
    alt: "Free Dental Checkup Camp Banner",
    category: "camps",
    width: 1024,
    height: 768,
  },
  {
    id: "dental-camp-outdoor",
    src: "/images/gallery/dental-camp-outdoor.jpg",
    alt: "Outdoor Free Dental Checkup Camp",
    category: "camps",
    width: 1024,
    height: 768,
  },
  {
    id: "invisalign-presentation",
    src: "/images/gallery/invisalign-presentation.jpg",
    alt: "Doctor presenting Invisalign to patient",
    category: "doctor",
    width: 768,
    height: 1024,
  },
  {
    id: "teeth-cleaning-results",
    src: "/images/gallery/teeth-cleaning-results.jpg",
    alt: "Before and After Teeth Cleaning Results",
    category: "results",
    width: 1024,
    height: 1024,
  },
];
