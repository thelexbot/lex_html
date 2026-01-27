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
      className="relative py-8 md:py-16 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/0 to-transparent pointer-events-none" />

      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-primary/12 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="container relative mx-auto px-4 md:px-6 z-20">
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
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-30 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-30 pointer-events-none" />

          <div
            className="flex gap-8 py-4"
            role="list"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ animation: "scroll 30s linear infinite" }}
          >
            {duplicatedReviews.map((review, index) => (
              <div
                role="listitem"
                key={`${review.id}-${index}`}
                className="
                  shrink-0
                  w-85 md:w-90
                  flex flex-col justify-between
                  min-h-[450px]
                  p-8 md:p-10   
                  rounded-[1.2rem]
    transition-all duration-500
    group
    relative           
              bg-[rgba(255,255,255,0.18)]
backdrop-blur-2xl
backdrop-saturate-110

border border-white/20
shadow-[0_8px_24px_rgba(0,0,0,0.08)]

before:absolute
before:inset-0
before:rounded-[1.2rem]
before:border
before:border-white/30
before:pointer-events-none

hover:-translate-y-2
hover:bg-[rgba(255,255,255,0.22)]

dark:bg-[rgba(255,255,255,0.06)]
dark:border-white/10
dark:before:border-white/10
dark:shadow-[0_8px_24px_rgba(0,0,0,0.5)]

                "
              >
                <blockquote className="text-lg md:text-xl font-medium leading-relaxed text-foreground/80 italic">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-foreground/5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary border border-primary/20 font-bold">
                    {review.author.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-foreground text-base">
                      {review.author}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
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
