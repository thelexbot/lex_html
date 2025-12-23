"use client";

import { UploadCloud, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: LucideIcon;
  mediaSrc: string;
  mediaType?: "video" | "image" | "youtube";
  alignRight?: boolean;
}

export default function FeatureSection({
  icon: Icon = UploadCloud,
  title,
  subtitle,
  description,
  mediaType = "image",
  mediaSrc,
  alignRight = false,
}: FeatureSectionProps) {
  return (
    <section
      className="relative w-full py-12 sm:py-16 lg:py-20 xl:py-24"
      aria-labelledby={title.replace(/\s+/g, "-").toLowerCase()}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`grid items-center gap-14 ${
            alignRight ? "lg:grid-cols-[65%_35%]" : "lg:grid-cols-[35%_65%]"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`flex flex-col gap-3 ${
              alignRight ? "lg:order-last" : ""
            }`}
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-sm">
              <Icon className="h-6 w-6 md:h-7 md:w-7" />
            </div>

            <header className="space-y-2">
              <h2
                id={title.replace(/\s+/g, "-").toLowerCase()}
                className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
              >
                {title}
              </h2>

              {subtitle && (
                <p className="text-base font-medium tracking-tight lg:text-xl">
                  {subtitle}
                </p>
              )}

              {description && (
                <p className="max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
                  {description}
                </p>
              )}
            </header>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="w-full"
          >
            <div className="relative aspect-16/10 overflow-hidden rounded-xl border border-foreground/10 bg-background/60 backdrop-blur-xl shadow-xl">
              {mediaType === "youtube" ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={mediaSrc}
                  title={title}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : mediaType === "video" ? (
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                >
                  <source src={mediaSrc} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={mediaSrc}
                  alt={`${title} illustration`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
