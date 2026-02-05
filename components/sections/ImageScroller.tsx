"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";

type ImageScrollerProps = {
  images: { src: string; alt?: string }[];
  onIndexChange?: (index: number) => void;
};

export default function ImageScroller({
  images,
  onIndexChange,
}: ImageScrollerProps) {
  const allImages = [...images, ...images, ...images];

  const [activeIndex, setActiveIndex] = useState(images.length);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const cardWidth = 220;
  const gap = 24;
  const totalWidth = cardWidth + gap;

  useEffect(() => {
    if (onIndexChange) {
      const realIndex = activeIndex % images.length;
      onIndexChange(realIndex);
    }
  }, [activeIndex, images.length, onIndexChange]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 0.5);
      }, 20);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setProgress(0);
    setActiveIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setProgress(0);
    setActiveIndex((prev) => prev - 1);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      handleNext();
    }
  }, [progress, handleNext]);

  const handleAnimationComplete = () => {
    if (activeIndex >= images.length * 2) {
      setIsTransitioning(false);
      setActiveIndex(activeIndex - images.length);
    } else if (activeIndex < images.length) {
      setIsTransitioning(false);
      setActiveIndex(activeIndex + images.length);
    }
  };

  return (
    <section className="relative w-full h-full overflow-hidden py-4 md:py-16 px-4 bg-background min-h-100 md:min-h-160">
      <div className="relative h-full md:h-100 flex items-center overflow-visible mt-20 md:mt-36">
        <motion.div
          className="flex gap-6 items-center"
          initial={false}
          animate={{
            x: `calc(50% - ${activeIndex * totalWidth + cardWidth / 2}px)`,
          }}
          onAnimationComplete={handleAnimationComplete}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: isTransitioning ? 0.6 : 0,
          }}
        >
          {allImages.map((img, idx) => {
            const isActive = idx === activeIndex;
            return (
              <motion.div
                key={`${idx}-${img.src}`}
                animate={{
                  scale: isActive ? 1.2 : 0.85,
                  opacity: isActive ? 1 : 0.4,
                }}
                transition={{
                  duration: isTransitioning ? 0.5 : 0,
                  ease: "easeInOut",
                }}
                className="shrink-0"
              >
                <Image
                  src={img.src}
                  alt={img.alt ?? ""}
                  width={220}
                  height={300}
                  className="h-75 md:h-75 w-55 rounded-md object-cover shadow-2xl"
                  draggable={false}
                  priority={idx === activeIndex}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* <div className="max-w-6xl mx-auto flex justify-end items-center gap-3 mt-0 md:-mt-8 px-4 md:px-8">
        <button
          onClick={handlePrev}
          className="p-2.5 rounded-full border border-secondary bg-secondary text-secondary-foreground transition-all active:scale-90 hover:bg-foreground hover:text-secondary"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="relative flex items-center justify-center w-12 h-12"
        >
          <svg className="absolute w-full h-full -rotate-90">
            <circle
              cx="24"
              cy="24"
              r="21"
              stroke="var(--color-muted)"
              strokeWidth="2.5"
              fill="transparent"
            />
            <motion.circle
              cx="24"
              cy="24"
              r="21"
              stroke="var(--color-primary)"
              strokeWidth="2.5"
              fill="transparent"
              strokeDasharray="132"
              animate={{ strokeDashoffset: 132 - (132 * progress) / 100 }}
              transition={{ ease: "linear" }}
            />
          </svg>
          {isPlaying ? (
            <Pause size={16} className="text-primary fill-primary" />
          ) : (
            <Play size={16} className="text-primary fill-primary ml-1" />
          )}
        </button>

        <button
          onClick={handleNext}
          className="p-2.5 rounded-full border border-secondary bg-secondary text-secondary-foreground transition-all active:scale-90 hover:bg-foreground hover:text-secondary"
        >
          <ChevronRight size={18} />
        </button>
      </div> */}
    </section>
  );
}
