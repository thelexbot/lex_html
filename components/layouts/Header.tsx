"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Scale, Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Features", id: "features" },
  { name: "Use cases", id: "use-cases" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Pricing", id: "pricing" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (stored === "dark" || (!stored && prefersDark)) {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);

    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 72;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/70 backdrop-blur-xl border-b border-foreground/10 shadow-[0_1px_0_rgba(255,255,255,0.05)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-baseline font-semibold text-foreground text-2xl"
          >
            <Image
              src="/logo.svg"
              alt="Paraplex logo"
              width={40}
              height={40}
              priority
              className="
      h-7 w-7
      sm:h-8 sm:w-8
      md:h-9 md:w-9
      object-contain
    "
            />
            <p className="p-0 -m-3"> araplex.ai</p>
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === "pricing") {
                      window.location.href = "/pricing";
                    } else {
                      scrollToId(item.id);
                    }
                  }}
                  onMouseEnter={() => setHoveredNav(item.id)}
                  onMouseLeave={() => setHoveredNav(null)}
                  className="relative px-2 py-2 text-sm font-medium transition-colors cursor-pointer"
                >
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      hoveredNav === item.id
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </span>

                  {hoveredNav === item.id && (
                    <motion.div
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      style={{ originX: 0.5 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                    />
                  )}
                </button>
              ))}
            </nav>

            <div className="hidden md:block h-6 w-px bg-border" />

            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="rounded-xl p-2 text-foreground hover:bg-muted transition cursor-pointer"
              >
                {dark ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>

              <a
                href="https://app.thelexbot.com/auth/login"
                className="rounded-xl text-sm md:text-base font-semibold text-foreground transition px-4 py-2.5 hover:bg-muted"
              >
                Log in
              </a>

              <Button
                className="text-sm md:text-base"
                href="https://app.thelexbot.com"
              >
                Free Access ⭐
              </Button>
            </div>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-foreground/10 bg-background overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4 text-lg font-semibold">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToId(item.id);
                    setOpen(false);
                  }}
                  className="text-left py-2 hover:text-primary transition-colors"
                >
                  {item.name}
                </button>
              ))}

              <hr className="border-foreground/10 my-2" />

              <div className="flex flex-col gap-3">
                <a
                  href="https://app.thelexbot.com/login"
                  className="rounded-xl text-md font-semibold text-foreground transition px-4 py-2.5 hover:bg-muted text-center border border-foreground/10"
                >
                  Log in
                </a>

                <Button
                  href="https://app.thelexbot.com/auth/signup"
                  className="w-full justify-center text-center"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
