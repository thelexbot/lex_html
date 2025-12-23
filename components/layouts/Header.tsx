"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Scale, Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

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

          <nav className="hidden md:flex items-center gap-8 text-sm md:text-base font-medium text-secondary-foreground">
            <button
              onClick={() => scrollToId("features")}
              className="hover:text-foreground transition"
            >
              Features
            </button>
            <button
              onClick={() => scrollToId("use-cases")}
              className="hover:text-foreground transition"
            >
              Use cases
            </button>
            <button
              onClick={() => scrollToId("testimonials")}
              className="hover:text-foreground transition"
            >
              Testimonials
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-xl p-2 text-foreground hover:bg-muted transition"
            >
              {dark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <a
              href="https://app.thelexbot.com/login"
              className="rounded-xl text-sm md:text-base font-semibold text-foreground transition px-4 py-2.5 hover:bg-muted"
            >
              Log in
            </a>

            <Button
              className="text-sm md:text-base"
              href="https://app.thelexbot.com"
            >
              Get Started
            </Button>
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

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="md:hidden border-t border-foreground/20 bg-background"
        >
          <div className="px-6 py-6 flex flex-col gap-4 text-lg font-semibold">
            <button
              onClick={() => {
                scrollToId("features");
                setOpen(false);
              }}
              className="text-left"
            >
              Features
            </button>
            <button
              onClick={() => {
                scrollToId("use-cases");
                setOpen(false);
              }}
              className="text-left"
            >
              Use cases
            </button>
            <button
              onClick={() => {
                scrollToId("testimonials");
                setOpen(false);
              }}
              className="text-left"
            >
              Testimonials
            </button>

            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-foreground hover:bg-muted transition"
            >
              {dark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              {dark ? "Light mode" : "Dark mode"}
            </button>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="https://app.thelexbot.com/login"
                className="rounded-xl text-md font-semibold text-foreground transition px-4 py-2.5 hover:bg-muted"
              >
                Log in
              </a>

              <Button href="https://app.thelexbot.com/auth/signup">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
