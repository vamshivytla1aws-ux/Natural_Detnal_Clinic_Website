import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Natural Dental Clinic | Ramachandrapuram, Hyderabad",
  description: "Contact Natural Dental Clinic in Ramachandrapuram, Hyderabad. Find the clinic address, directions and contact options for dental consultations.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
