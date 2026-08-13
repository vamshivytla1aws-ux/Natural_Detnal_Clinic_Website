import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Natural Dental Clinic Gallery | Ramachandrapuram",
  description: "View Natural Dental Clinic in Ramachandrapuram, including clinic interiors, treatment areas and clinic photographs.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
