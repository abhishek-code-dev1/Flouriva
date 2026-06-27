"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySlider from "@/components/CategorySlider";
import ProductGrid from "@/components/ProductGrid";
import OffersSection from "@/components/OffersSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <main className="min-h-screen bg-bakery-dark">
      <Navbar />
      <Hero />
      <CategorySlider />
      <ProductGrid />
      <OffersSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <FloatingActions />
    </main>
  );
}
