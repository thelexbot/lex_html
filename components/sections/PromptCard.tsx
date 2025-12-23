"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type PromptCardProps = {
  text: string;
};

export default function PromptCard({ text }: PromptCardProps) {
  const router = useRouter();
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [hasEverCompleted, setHasEverCompleted] = useState(false);

  useEffect(() => {
    let currentIndex = 0;

    setIsTypingComplete(false);
    setDisplayedText("");

    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTypingComplete(true);
        setHasEverCompleted(true);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="w-full">
      <div
        className="bg-background rounded-[2.25rem] p-4 md:p-6 shadow-2xl border border-foreground/10
 w-full"
      >
        <div className="flex items-center gap-3">
          <div className="flex-1 border border-secondary rounded-xl h-14 md:h-16 px-4 md:px-6 flex items-center bg-background overflow-hidden">
            <span className="text-base md:text-xl font-medium tracking-tight text-foreground line-clamp-2">
              {displayedText}

              {!isTypingComplete && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="inline-block w-0.5 h-5 md:h-6 ml-1 align-middle bg-foreground"
                />
              )}
            </span>
          </div>

          <motion.button
            className="relative h-10 md:h-11 w-10 md:w-11 bg-primary hover:opacity-90 rounded-lg flex items-center justify-center overflow-hidden shrink-0"
            animate={isTypingComplete ? { scale: [1, 1.05, 1] } : { scale: 1 }}
            transition={
              isTypingComplete
                ? {
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : undefined
            }
          >
            {isTypingComplete && (
              <motion.span
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
              />
            )}

            <ArrowRight
              className="relative z-10 w-5 md:w-6 h-5 md:h-6 text-primary-foreground"
              onClick={(e) => {
                e.stopPropagation();
                router.push("https://app.thelexbot.com");
              }}
            />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{
            opacity: hasEverCompleted ? 1 : 0,
            y: hasEverCompleted ? 0 : 8,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mt-3"
        >
          <p className="text-xs md:text-sm font-medium text-muted-foreground">
            Press Enter or click to start researching →
          </p>
        </motion.div>
      </div>
    </div>
  );
}
