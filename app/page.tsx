import type { Metadata } from "next";

import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import Features from "@/components/layouts/Features";
import TabbedComponent from "@/components/sections/TabbedComponent";
import Reviews from "@/components/layouts/Reviews";
import Footer from "@/components/layouts/Footer";

export const metadata: Metadata = {
  title: "AI Powered Legal Research Platform for Lawyers",
  description:
    "LexBot is an AI-powered legal research platform for lawyers and legal professionals. Search judgments, analyze case law, and draft legal documents faster with AI.",
};

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero />

        <Features />

        <TabbedComponent />

        <Reviews />
      </main>
    </>
  );
}
