"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
  Lock,
  Mail,
  RedoDotIcon,
  Scale,
  Twitter,
  X,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { RedditIcon } from "@/app/icons/redditIcon/redditIcon";

const footerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const items = ["Features", "Use Cases", "Testimonials", "Pricing"] as const;

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61572522484734",
  },
  { icon: Instagram, href: "https://www.instagram.com/lex_legalexp" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/lexlegalexp" },
  { icon: RedditIcon, href: "https://www.reddit.com/r/thelex/" },
  { icon: X, href: "https://x.com/Lex_legalexp" },
];

const legalLinks = [
  {
    icon: Mail,
    label: "Message on WhatsApp",
    isWhatsapp: true,
  },
  {
    icon: Lock,
    href: "/privacy-policy",
    label: "Privacy Policy",
  },
  {
    icon: Scale,
    href: "/terms-of-service",
    label: "Terms of Service",
  },
  {
    icon: Copyright,
    href: "#",
    label: "Copyright",
    isStatic: true,
  },
];

const Footer = () => {
  const [showCopyright, setShowCopyright] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (showCopyright) {
      const timer = setTimeout(() => setShowCopyright(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showCopyright]);

  const handleProductClick = (item: (typeof items)[number]) => {
    if (item === "Pricing") {
      router.push("/pricing");
      return;
    }

    if (item === "Features") {
      if (pathname === "/") {
        const el = document.getElementById("features");
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/#features");
      }
      return;
    }

    if (item === "Use Cases") {
      if (pathname === "/") {
        const el = document.getElementById("use-cases");
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/#use-cases");
      }
    }

    if (item === "Testimonials") {
      if (pathname === "/") {
        const el = document.getElementById("testimonials");
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/#testimonials");
      }
    }
  };

  const handleLegalClick = (item: string) => {
    if (item === "Privacy Policy") {
      router.push("/privacy-policy");
    } else if (item === "Terms of Service") {
      router.push("/terms-of-service");
    }
  };

  const handleCompanyClick = (item: string) => {
    if (item === "Contact") {
      window.open(
        "https://wa.me/917982092862?text=Hi%2C%20I%E2%80%99d%20like%20to%20get%20more%20information%20about%20your%20services.",
        "_blank",
      );
    }
  };

  return (
    <motion.footer
      aria-label="Site footer"
      className="border-t border-foreground/10 bg-background"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 py-10 md:px-6 md:py-14 font-medium">
        {/* <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Scale className="h-5 w-5 text-primary" />
              <span>Paraplex</span>
            </div>
            <p className="text-base text-muted-foreground max-w-xs">
              AI-powered legal research platform for modern legal professionals.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="mb-4 text-base font-semibold">Product</h4>
            <ul className="space-y-2 text-base">
              {items?.map((item) => (
                <li key={item}>
                  <motion.button
                    type="button"
                    whileHover={{ x: 4 }}
                    className="text-left
  text-muted-foreground
  hover:text-foreground
  focus:outline-none
  focus-visible:ring-2
  focus-visible:ring-primary/50
  focus-visible:ring-offset-2
  transition-colors cursor-pointer"
                    onClick={() => handleProductClick(item)}
                  >
                    {item}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="mb-4 text-base font-semibold">Company</h4>
            <ul className="space-y-2 text-base">
              {["About Us", "Contact"].map((item) => (
                <li key={item}>
                  <motion.button
                    type="button"
                    whileHover={{ x: 4 }}
                    className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => handleCompanyClick(item)}
                  >
                    {item}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="mb-4 text-base font-semibold">Legal</h4>
            <ul className="space-y-2 text-base">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <motion.button
                    type="button"
                    whileHover={{ x: 4 }}
                    className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => {
                      handleLegalClick(item);
                    }}
                  >
                    {item}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div> */}

        {/* <motion.div
          variants={itemVariants}
          className="my-10 border-t border-foreground/10"
        /> */}

        <motion.div
          variants={itemVariants}
          className="text-center text-base text-muted-foreground font-medium items-center justify-center flex flex-col space-y-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-6 md:gap-x-4">
            <div className="flex items-center gap-1 md:gap-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-all p-2.5 hover:bg-muted rounded-xl active:scale-95"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">Social link</span>
                  </Link>
                );
              })}
            </div>
            <Link href="https://app.thelexbot.com/auth/signup" target="_blank">
              <span className="hidden sm:block mx-2 select-none">|</span>
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2">
              {legalLinks.map((legal, index) => {
                const Icon = legal.icon;

                if (legal.isStatic) {
                  return (
                    <div key={`legal-${index}`} className="flex items-center">
                      <button
                        type="button"
                        onClick={() => setShowCopyright(!showCopyright)}
                        className={`transition-colors p-2.5 rounded-xl hover:bg-muted ${
                          showCopyright
                            ? "text-primary bg-primary/5"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                        aria-label={legal.label}
                      >
                        <Icon className="h-5 w-5" />
                      </button>

                      <AnimatePresence mode="wait">
                        {showCopyright && (
                          <motion.span
                            initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                            animate={{
                              opacity: 1,
                              width: "auto",
                              marginLeft: 8,
                            }}
                            exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                            className="overflow-hidden whitespace-nowrap text-xs md:text-sm font-semibold text-foreground"
                          >
                            © 2026 Paraplex.
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <button
                    key={`legal-${index}`}
                    onClick={() => {
                      if (legal.isWhatsapp) {
                        window.open(
                          "https://wa.me/917982092862?text=Hi",
                          "_blank",
                        );
                      } else {
                        router.push(legal.href!);
                      }
                    }}
                    className="text-muted-foreground hover:text-foreground transition-all p-2.5 hover:bg-muted rounded-xl active:scale-95"
                    aria-label={legal.label}
                  >
                    <Icon className="h-5 w-5" />
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
