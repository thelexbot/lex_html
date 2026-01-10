"use client";

import React from "react";

const reviewsData = [
  {
    id: 1,
    quote:
      "Paraplex has transformed how our team conducts legal research. The semantic search is incredibly accurate and saves us hours every week.",
    author: "Priya Sharma",
    title: "Senior Partner, Corporate Law Firm",
  },
  {
    id: 2,
    quote:
      "As a law student, this tool helped me prepare for moot courts and understand complex judgments effortlessly. It's a fantastic learning aid.",
    author: "Arjun Mehta",
    title: "Law Student, NLU",
  },
  {
    id: 3,
    quote:
      "The AI-generated summaries are a game-changer. They are concise, accurate, and essential for any busy legal professional.",
    author: "Justice Ramesh Kumar",
    title: "Former High Court Judge",
  },
  {
    id: 4,
    quote:
      "Finding relevant precedents used to take days. With Paraplex's advanced understanding, it's now a matter of minutes.",
    author: "Anil Verma",
    title: "Litigation Lawyer, Supreme Court",
  },
  {
    id: 5,
    quote:
      "The ability to analyze opposing counsel's arguments and find weaknesses instantly gives us a significant strategic advantage.",
    author: "Kavita Reddy",
    title: "Senior Advocate",
  },
  {
    id: 6,
    quote:
      "I rely on it daily to stay updated on regulatory changes. The personalized alerts are timely and highly relevant to my practice area.",
    author: "Sanjay Gupta",
    title: "General Counsel, Tech Corp",
  },
];

const Reviews = () => {
  const duplicatedReviews = [...reviewsData, ...reviewsData];
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.animationPlayState = "paused";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.animationPlayState = "running";
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Paraplex",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: reviewsData.length,
    },
    review: reviewsData.map((r) => ({
      "@type": "Review",
      reviewBody: r.quote,
      author: {
        "@type": "Person",
        name: r.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    })),
  };

  return (
    <section
      id="testimonials"
      className="py-8 md:py-16 overflow-hidden bg-background"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            What People Are Saying
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Trusted by legal professionals across India for its accuracy and
            efficiency.
          </p>
        </div>

        <div className="relative overflow-hidden w-full">
          <div
            className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />

          <div
            className="flex gap-6 w-max"
            role="list"
            aria-label="Customer testimonials"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              animation: "scroll 80s linear infinite",
            }}
          >
            {duplicatedReviews.map((review, index) => (
              <div
                role="listitem"
                key={`${review.id}-${index}`}
                className="
                  shrink-0
                  w-80 md:w-90
                  flex flex-col justify-between
                  h:95 h-100
                  min-h-105
                  p-8 md:p-10
                  bg-foreground/5
                  rounded-xl
                  hover:bg-secondary
                  transition-colors duration-300
                  shadow-sm dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]
                "
              >
                <blockquote className="text-lg md:text-xl font-medium leading-snug text-muted-foreground tracking-wide">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4 mt-8 pt-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-background shadow-sm border border-border/50">
                    <span className="text-lg font-bold text-primary">
                      {review.author.trim().charAt(0).toUpperCase()}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="font-semibold text-foreground">
                      {review.author}
                    </span>
                    <span className="text-sm text-muted-foreground line-clamp-1">
                      {review.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
