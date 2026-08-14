"use client";

import { useState, useMemo } from "react";
import { CLINIC } from "@/lib/config";
import { 
  GOOGLE_BUSINESS, 
  WRITTEN_REVIEWS, 
  getUniqueTags, 
  TOTAL_REVIEWS_COUNT,
  WRITTEN_REVIEWS_COUNT
} from "@/lib/reviews-data";
import { ReviewCard } from "@/components/shared/ReviewCard";
import { Search } from "lucide-react";
import { ClinicActions } from "@/components/ui/ClinicActions";

export default function ReviewsPage() {
  const [activeTag, setActiveTag] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const allTags = getUniqueTags();

  // Dynamic filtering and search
  const filteredReviews = useMemo(() => {
    return WRITTEN_REVIEWS.filter(review => {
      const matchesTag = activeTag === "All" || review.tags.includes(activeTag);
      
      const query = searchQuery.toLowerCase();
      const matchesSearch = query === "" || 
        review.author.toLowerCase().includes(query) ||
        (review.text && review.text.toLowerCase().includes(query)) ||
        review.tags.some(tag => tag.toLowerCase().includes(query));

      return matchesTag && matchesSearch;
    });
  }, [activeTag, searchQuery]);

  // Calculate dynamic tag counts based on current search query (or just overall written reviews)
  // We'll calculate them based on ALL written reviews to keep the filter chips stable
  const getTagCount = (tag: string) => {
    return WRITTEN_REVIEWS.filter(r => r.tags.includes(tag)).length;
  };

  return (
    <div className="bg-ivory-100 min-h-screen pt-32 pb-24">
      <div className="container-premium">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="eyebrow mx-auto justify-center mb-6">Patient Stories</span>
          <h1 className="heading-display mb-6">Experiences shared by our patients.</h1>
          <p className="font-sans text-[1.125rem] text-charcoal-500 mb-4 max-w-2xl mx-auto">
            Read genuine Google reviews shared by patients of Natural Dental Clinic in Ramachandrapuram. Feedback includes experiences related to treatment comfort, children&apos;s dental care, clear explanations, affordability and the clinic environment.
          </p>
          <p className="font-sans text-[0.9375rem] text-charcoal-400 mb-8 max-w-xl mx-auto">
            All reviews are from verified Google patients and are displayed without modification.
          </p>
        </div>

        {/* Premium Review Summary Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-[24px] p-6 md:p-10 shadow-sm border border-ivory-300 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <svg width="42" height="42" viewBox="0 0 24 24" aria-label="Google" role="img" className="flex-shrink-0">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div>
              {GOOGLE_BUSINESS.rating !== null ? (
                <div className="flex items-center gap-3">
                  <span className="font-serif text-[2.5rem] text-forest-600 leading-none">{GOOGLE_BUSINESS.rating}</span>
                  <div className="flex flex-col">
                    <span className="font-sans text-[0.875rem] font-bold text-charcoal-700">{GOOGLE_BUSINESS.reviewCount} Google Reviews</span>
                    <span className="font-sans text-[0.8125rem] text-charcoal-400">Verified patient experiences</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col">
                  <span className="font-serif text-[2rem] text-forest-600 leading-none mb-1">{GOOGLE_BUSINESS.reviewCount} Google Reviews</span>
                  <span className="font-sans text-[0.875rem] text-charcoal-500">Real patient experiences shared on Google.</span>
                </div>
              )}
            </div>
          </div>
          <a
            href={GOOGLE_BUSINESS.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary whitespace-nowrap"
          >
            View on Google ↗
          </a>
        </div>

        {/* Filters and Search Bar */}
        <div className="mb-12 space-y-6">
          {/* Search */}
          <div className="relative max-w-md mx-auto md:mx-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-300" size={18} />
            <input
              type="text"
              placeholder="Search patient reviews..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-ivory-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-sage-400 transition-all font-sans text-[0.9375rem] text-charcoal-700 placeholder:text-charcoal-300"
            />
          </div>

          {/* Filter Chips */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-5 px-5 sm:mx-0 sm:px-0 flex-wrap sm:flex-nowrap md:flex-wrap">
            <button
              onClick={() => setActiveTag("All")}
              className={`flex-shrink-0 px-5 py-2 rounded-full font-sans text-[0.875rem] font-medium transition-all ${
                activeTag === "All"
                  ? "bg-forest-600 text-white shadow-md"
                  : "bg-white text-charcoal-600 border border-ivory-300 hover:border-sage-400 hover:text-forest-600"
              }`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-sans text-[0.875rem] transition-all flex items-center gap-2 ${
                  activeTag === tag
                    ? "bg-forest-600 text-white shadow-md font-medium"
                    : "bg-white text-charcoal-600 border border-ivory-300 hover:border-sage-400 hover:text-forest-600"
                }`}
              >
                {tag}
                <span className={`text-[0.6875rem] px-1.5 rounded-full ${activeTag === tag ? 'bg-white/20' : 'bg-ivory-200 text-charcoal-400'}`}>
                  {getTagCount(tag)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        {filteredReviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {filteredReviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[24px] border border-ivory-300">
            <p className="font-serif text-[1.5rem] text-forest-600 mb-2">No reviews found</p>
            <p className="font-sans text-charcoal-500">Try adjusting your search or filters.</p>
            <button
              onClick={() => { setActiveTag("All"); setSearchQuery(""); }}
              className="mt-6 btn-ghost"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Subtle statement about rating-only reviews */}
        <div className="mt-16 text-center">
          <p className="font-sans text-[0.875rem] text-charcoal-400">
            Showing {filteredReviews.length} of {WRITTEN_REVIEWS_COUNT} written reviews. <br className="sm:hidden" />
            Natural Dental Clinic currently has {TOTAL_REVIEWS_COUNT} Google reviewer entries, including {TOTAL_REVIEWS_COUNT - WRITTEN_REVIEWS_COUNT} without written comments.
          </p>
        </div>

        {/* Consultation CTA */}
        <div className="mt-16 bg-white rounded-[24px] border border-ivory-300 p-8 md:p-12 max-w-4xl mx-auto text-center shadow-sm">
          <h2 className="font-serif text-[2rem] text-forest-600 mb-4">Need a dental consultation?</h2>
          <p className="font-sans text-charcoal-500 mb-8 max-w-xl mx-auto">
            Book an appointment for a clinical evaluation and personalised treatment guidance.
          </p>
          <ClinicActions 
            variant="grid" 
            showBook={true} 
            showCall={true} 
            showWhatsApp={true} 
            showDirections={true} 
          />
        </div>

        {/* Bottom CTA (Write Review) */}
        <div className="mt-12 max-w-3xl mx-auto text-center bg-forest-600 rounded-[32px] p-10 md:p-16 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full mix-blend-screen opacity-10" style={{ background: "radial-gradient(circle, #C5A66A 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
          </div>
          
          <div className="relative z-10">
            <h2 className="font-serif text-[2.5rem] text-ivory-100 leading-tight mb-4">
              Visited Natural Dental Clinic?
            </h2>
            <p className="font-sans text-[1.0625rem] text-sage-200 mb-10">
              We appreciate patients sharing their experience. Your feedback helps us continue providing thoughtful care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={GOOGLE_BUSINESS.writeReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ background: "#FAF8F2", color: "#12372A" }}
              >
                Write a Google Review
              </a>
              <a
                href={GOOGLE_BUSINESS.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ borderColor: "rgba(250,248,242,0.3)", color: "#FAF8F2" }}
              >
                Read All Reviews on Google
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
