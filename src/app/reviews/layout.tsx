import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Patient Reviews — Ramachandrapuram",
  description: "Read genuine patient experiences shared about Natural Dental Clinic in Ramachandrapuram, Hyderabad.",
  alternates: {
    canonical: "/reviews",
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
