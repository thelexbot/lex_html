import React from "react";

interface ReviewCardProps {
  quote: string;
  author: string;
  title: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ quote, author, title }) => {
  return (
    <div
      className="
    relative
    w-full
    sm:max-w-72
    rounded-xl
    bg-background
    p-5
    border border-foreground/10
   shadow-xl
hover:shadow-2xl
    transition-shadow
  "
    >
      <div className="flex flex-col gap-3">
        <p className="text-sm text-foreground line-clamp-3">“{quote}”</p>

        <div>
          <p className="text-sm font-semibold text-foreground">{author}</p>
          <p className="text-xs text-muted-foreground">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
