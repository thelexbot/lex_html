// components/layouts/HeroClient.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/motion/FadeUp";
import ImageScroller from "../sections/ImageScroller";
import PromptCard from "../sections/PromptCard";

const slides = [
  {
    src: "/sliderImg-1.jpg",
    promptText:
      "What constitutes ‘procedure established by law’ after Maneka Gandhi?",
  },
  {
    src: "/sliderImg-2.jpg",
    promptText:
      "What factors do courts consider while applying the ‘rarest of rare’ doctrine?",
  },
  {
    src: "/sliderImg-5.jpg",
    promptText:
      "How has judicial interpretation of Article 14 evolved across Supreme Court judgments?",
  },
  {
    src: "/sliderImg-3.jpg",
    promptText:
      "Can procedural delay invalidate execution of a death sentence?",
  },
  {
    src: "/sliderImg-4.png",
    promptText:
      "Judgments ordering medical treatment, counselling or monetary compensation for female victims in criminal",
  },
];

export default function HeroClient() {
  const [currentText, setCurrentText] = useState(slides[0].promptText);

  const handleIndexChange = (index: number) => {
    if (slides[index]) {
      setCurrentText(slides[index].promptText);
    }
  };

  return (
    <>
      <div className="relative w-full h-1/2 md:absolute md:inset-0 z-0 md:h-full">
        <ImageScroller images={slides} onIndexChange={handleIndexChange} />
      </div>

      <div className="relative z-10 w-full pointer-events-none px-4 md:mt-72 pb-12 md:pb-0">
        <FadeUp
          delay={0.1}
          className="w-full flex justify-center mb-6 md:mb-10 md:-translate-y-40"
        >
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-center leading-tight">
            <span className="text-foreground">Research</span>{" "}
            <motion.span
              className="
                bg-[linear-gradient(to_right,#3b28cc,#2563eb,#0d99ff,#3b28cc)]
                bg-size-[200%_auto]
                bg-clip-text
                text-transparent
              "
              animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              Anything
            </motion.span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.2} className="w-full flex justify-center">
          <div className="pointer-events-auto w-full max-w-4xl">
            <PromptCard text={currentText} />
          </div>
        </FadeUp>
      </div>
    </>
  );
}
