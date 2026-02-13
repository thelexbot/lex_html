"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Phone,
  Mail,
  Headphones,
  X,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

const ContactFab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    {
      id: 1,
      label: "WhatsApp",
      icon: <MessageSquare size={20} />,
      bg: "bg-[#4ADE80]",
      text: "text-black",
      href: "https://wa.me/917982092862?text=Hi%20I%20need%20more%20information%20about%20LEX",
    },
    {
      id: 2,
      label: "Call Us",
      icon: <Phone size={20} />,
      bg: "bg-[var(--color-foreground)]",
      text: "text-[var(--color-background)]",
      href: "tel:+917982092872",
    },
    {
      id: 3,
      label: "Email",
      icon: <Mail size={20} />,
      bg: "bg-[#EF4444]",
      text: "text-white",
      href: "mailto:Prabhjot@thelexbot.com",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="flex flex-col items-end gap-3 mb-2"
          >
            {menuItems.map((item) => (
              <motion.a
                key={item.id}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${item.bg} ${item.text} flex items-center gap-2 px-4 py-2 rounded-full shadow-lg`}
              >
                {item.icon}
                <span className="font-medium text-sm">{item.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-12 h-12 bg-[var(--color-foreground)] text-[var(--color-background)] rounded-full flex items-center justify-center shadow-2xl overflow-hidden shrink-0 border border-white/10 cursor-pointer"
        animate={
          isReady && !isOpen
            ? {
                scale: [1, 1.1, 1],
                y: [0, -4, 0],
              }
            : { scale: 1, y: 0 }
        }
        transition={
          isReady && !isOpen
            ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.2 }
        }
      >
        {isReady && !isOpen && (
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-150%", skewX: -20 }}
            animate={{ x: "150%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
          />
        )}

        {isReady && !isOpen && (
          <motion.span
            className="absolute inset-0 rounded-full ring-4 ring-white/10"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}

        <div className="relative z-10">
          {isOpen ? <X size={28} /> : <Headphones size={28} />}
        </div>
      </motion.button>
    </div>
  );
};

export default ContactFab;
