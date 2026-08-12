export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  initials: string;
  color: string;
}

// Google Reviews configuration
// googleRating and googleReviewCount: set to null when unverified — UI will adapt gracefully
export const GOOGLE_RATING = {
  score: null as number | null,           // Set to verified score when confirmed (e.g. 4.9)
  totalReviews: null as number | null,    // Set to verified count when confirmed (e.g. 87)
  googleMapsUrl: "https://maps.app.goo.gl/t2wSYG2y4RoLZ6Co8",
  writeReviewUrl: "https://maps.app.goo.gl/t2wSYG2y4RoLZ6Co8",
};

// REVIEWS: Only add verified, approved patient testimonials here.
// All previously generated/placeholder reviews have been removed.
// To add a real review: obtain written consent from the patient, then add it with verified: true.
export const REVIEWS: Review[] = [];

export const FEATURED_REVIEWS = REVIEWS.slice(0, 6);
