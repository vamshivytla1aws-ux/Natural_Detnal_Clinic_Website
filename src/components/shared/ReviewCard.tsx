"use client";

import { useState } from "react";
import { Star, ExternalLink } from "lucide-react";
import { clsx } from "clsx";
import type { GoogleReview } from "@/lib/reviews-data";

interface ReviewCardProps {
  review: GoogleReview;
  className?: string;
}

export function ReviewCard({ review, className }: ReviewCardProps) {
  const [expanded, setExpanded] = useState(false);

  // Generate initials (e.g. "Sai Krishna Vennu" -> "SK")
  const getInitials = (name: string) => {
    const parts = name.trim().split(" ");
    if (parts.length === 0) return "U";
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const hasLongText = review.text && review.text.length > 200;
  const displayText = expanded ? review.text : review.text?.slice(0, 200) + (hasLongText ? "..." : "");

  return (
    <article
      className={clsx(
        "bg-white p-7 rounded-[20px] shadow-sm border border-ivory-300 transition-all duration-500 ease-premium hover:shadow-premium hover:-translate-y-1 hover:border-sage-300 flex flex-col h-full",
        className
      )}
      aria-label={`Review by ${review.author}`}
    >
      <div className="flex items-start justify-between mb-4">
        {/* Reviewer Info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-sage-100 text-forest-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
            {getInitials(review.author)}
          </div>
          <div>
            <h3 className="font-semibold text-charcoal-700 text-sm leading-tight">
              {review.author}
            </h3>
            {review.reviewerMeta && (
              <p className="text-charcoal-400 text-[0.6875rem] mt-0.5">
                {review.reviewerMeta}
              </p>
            )}
          </div>
        </div>

        {/* Google Icon / External Link */}
        <a
          href={review.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sage-400 hover:text-forest-500 transition-colors flex-shrink-0"
          aria-label={`View ${review.author}'s profile on Google`}
          title="Google Review"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" role="img">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        </a>
      </div>

      {/* Stars - Only render if rating is verified and not null */}
      {review.rating !== null && (
        <div className="flex gap-0.5 mb-3" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < (review.rating as number) ? "fill-champagne-400 text-champagne-400" : "fill-ivory-300 text-ivory-300"}
              aria-hidden="true"
            />
          ))}
        </div>
      )}

      {/* Review Text */}
      <div className="flex-grow">
        <p className="text-charcoal-600 text-[0.9375rem] leading-relaxed whitespace-pre-wrap">
          {displayText}
        </p>
        {hasLongText && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-forest-600 font-semibold text-sm mt-2 hover:text-forest-500 focus:outline-none focus-visible:underline"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>

      {/* Date & Tags */}
      <div className="mt-5 pt-4 border-t border-ivory-300 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {review.tags.map(tag => (
            <span key={tag} className="bg-ivory-200 text-charcoal-500 px-2 py-0.5 rounded text-[0.6875rem] uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
        {review.originalDateLabel && (
          <span className="text-charcoal-400 text-[0.75rem] italic whitespace-nowrap">
            {review.originalDateLabel}
          </span>
        )}
      </div>
    </article>
  );
}
