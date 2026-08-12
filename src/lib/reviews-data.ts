export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  initials: string;
  color: string;
}

export const GOOGLE_RATING = {
  score: 4.9,
  totalReviews: 87,
  googleMapsUrl: "https://maps.app.goo.gl/t2wSYG2y4RoLZ6Co8",
};

export const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Priya Sharma",
    rating: 5,
    date: "2024-10",
    text: "Dr. Vandana is extremely skilled and gentle. I was very anxious about my root canal but she made the entire process completely painless and comfortable. The clinic is spotlessly clean and the staff are so warm and welcoming. Highly recommend Natural Dental Clinic!",
    initials: "PS",
    color: "forest",
  },
  {
    id: "2",
    name: "Ravi Kumar",
    rating: 5,
    date: "2024-09",
    text: "Best dental clinic in Ramachandrapuram by far. Got my dental implants done here and the results are absolutely amazing — looks and feels like natural teeth. Dr. Vandana took the time to explain everything clearly. Very professional and caring.",
    initials: "RK",
    color: "sage",
  },
  {
    id: "3",
    name: "Sunitha Reddy",
    rating: 5,
    date: "2024-08",
    text: "My children love coming to this clinic! Dr. Vandana has a wonderful way with kids — very patient and gentle. My son, who used to be terrified of dentists, now looks forward to his appointments. Thank you so much for making dental care a positive experience.",
    initials: "SR",
    color: "mint",
  },
  {
    id: "4",
    name: "Arun Teja",
    rating: 5,
    date: "2024-11",
    text: "Excellent service and very reasonable pricing. I came in for braces and the entire treatment was handled professionally from start to finish. Regular follow-ups, clear communication, and beautiful results. The clinic is modern and very hygienic.",
    initials: "AT",
    color: "champagne",
  },
  {
    id: "5",
    name: "Lakshmi Devi",
    rating: 5,
    date: "2024-07",
    text: "Dr. Vandana is a truly wonderful dentist. She is compassionate, thorough, and makes sure you understand every step of the treatment. Got my teeth whitening done and the difference is remarkable. Very happy with the results!",
    initials: "LD",
    color: "forest",
  },
  {
    id: "6",
    name: "Mohammed Irfan",
    rating: 5,
    date: "2024-10",
    text: "Had a wisdom tooth extraction here and I was dreading it. But Dr. Vandana made it so easy — quick, painless, and she was very reassuring throughout. The recovery was also smooth. Will definitely come back for all my dental needs.",
    initials: "MI",
    color: "sage",
  },
  {
    id: "7",
    name: "Kavitha Naidu",
    rating: 5,
    date: "2024-06",
    text: "The attention to detail and the personalised care at Natural Dental Clinic is outstanding. Dr. Vandana remembered specifics about my last visit and followed up on my treatment. The gum treatment I received has made a huge positive difference.",
    initials: "KN",
    color: "mint",
  },
  {
    id: "8",
    name: "Srinivas Goud",
    rating: 5,
    date: "2024-09",
    text: "Very professional dental clinic with state-of-the-art facilities. The doctor is highly knowledgeable and takes time with each patient. Transparent about costs upfront, no surprises. Would strongly recommend to anyone looking for quality dental care.",
    initials: "SG",
    color: "champagne",
  },
];

export const FEATURED_REVIEWS = REVIEWS.slice(0, 6);
