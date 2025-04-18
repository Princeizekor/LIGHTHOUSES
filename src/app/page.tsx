"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import FeaturedListings from "@/components/FeaturedListings";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedListings />
      <CTA />
    </main>
  );
}
