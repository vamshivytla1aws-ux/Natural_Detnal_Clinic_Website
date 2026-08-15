import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Natural Dental Clinic",
    short_name: "Natural Dental",
    description: "Patient-focused dental care in Ramachandrapuram, Hyderabad.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F3",
    theme_color: "#12372A",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
