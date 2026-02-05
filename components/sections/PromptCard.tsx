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
    <div className="w-full h-full">
      <div className="bg-background/80 rounded-[1.5rem] md:rounded-[2.25rem] p-2 md:p-6 shadow-2xl border border-foreground/10 w-full h-full">
        <div className="flex items-center gap-3">
          <div className="flex-1 border border-secondary rounded-xl h-14 md:h-16 px-2 ml-2 md:px-6 flex items-center bg-background overflow-hidden">
            <span className="text-[10px] md:text-xl font-medium tracking-tight text-foreground md:whitespace-normal md:line-clamp-2">
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
            className="relative h-11 w-11 md:h-12 md:w-12 rounded-xl 
             bg-primary text-primary-foreground 
             flex items-center justify-center 
             overflow-hidden shrink-0"
            animate={
              isTypingComplete
                ? {
                    scale: [1, 1.12, 1],
                    y: [0, -2, 0],
                  }
                : { scale: 1, y: 0 }
            }
            transition={
              isTypingComplete
                ? {
                    duration: 1.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : undefined
            }
          >
            {isTypingComplete && (
              <motion.span
                className="absolute inset-0 rounded-xl ring-2 ring-primary/10"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{
                  duration: 1.0,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}

            {isTypingComplete && (
              <motion.span
                className="absolute inset-0 bg-linear-to-r 
                 from-transparent via-white/40 to-transparent"
                initial={{ x: "-120%" }}
                animate={{ x: "120%" }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}

            <ArrowRight
              className="relative z-10 w-6 h-6"
              onClick={(e) => {
                e.stopPropagation();
                router.push("https://app.thelexbot.com/auth/signup");
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
          className="text-center mt-1 md:mt-3"
        >
          <p className="text-[10px] md:text-sm font-medium text-muted-foreground">
            Click to start your research →
          </p>
        </motion.div>
      </div>
    </div>
  );
}
