"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Scale } from "lucide-react";

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

const Footer = () => {
  return (
    <motion.footer
      aria-label="Site footer"
      className="border-t border-foreground/10 bg-background mt-20"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Scale className="h-5 w-5 text-primary" />
              <span>Paraplex.ai</span>
            </div>
            <p className="text-base text-muted-foreground max-w-xs">
              AI-powered legal research platform for modern legal professionals.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="mb-4 text-base font-semibold">Product</h4>
            <ul className="space-y-2 text-base">
              {["Features", "Use Cases", "Pricing"].map((item) => (
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
  transition-colors"
                    onClick={() => {}}
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
              {["About Us", "Contact", "Careers"].map((item) => (
                <li key={item}>
                  <motion.button
                    type="button"
                    whileHover={{ x: 4 }}
                    className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => {}}
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
                    onClick={() => {}}
                  >
                    {item}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="my-10 border-t border-foreground/10"
        />

        <motion.div
          variants={itemVariants}
          className="text-center text-base text-muted-foreground"
        >
          © 2025 Paraplex.ai. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
