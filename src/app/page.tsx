"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySlider from "@/components/CategorySlider";
import ProductGrid from "@/components/ProductGrid";
import OffersSection from "@/components/OffersSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ProductDetailModal from "@/components/ProductDetailModal";
import CategoryProductsView from "@/components/CategoryProductsView";

export default function Home() {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState<string | null>(null);

  // Sync URL query to state
  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const pId = params.get("product");
      setSelectedProductId(pId);
    };

    // Run on mount
    handleUrlChange();

    // Listen to popstate (back/forward browser navigation)
    window.addEventListener("popstate", handleUrlChange);
    return () => window.removeEventListener("popstate", handleUrlChange);
  }, []);

  // Handle product select
  const handleProductSelect = (id: string) => {
    setSelectedProductId(id);
    const newUrl = `${window.location.pathname}?product=${id}`;
    window.history.pushState({ product: id }, "", newUrl);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setSelectedProductId(null);
    const newUrl = window.location.pathname;
    window.history.pushState({}, "", newUrl);
  };

  return (
    <main className="min-h-screen bg-bakery-dark">
      <Navbar />
      <Hero />
      <CategorySlider onSelectCategory={setSelectedCategoryName} />
      <ProductGrid onSelectProduct={handleProductSelect} />
      <OffersSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <FloatingActions />

      {/* Category Products Drawer Overlay */}
      <AnimatePresence>
        {selectedCategoryName && (
          <CategoryProductsView
            categoryName={selectedCategoryName}
            onClose={() => setSelectedCategoryName(null)}
            onSelectProduct={handleProductSelect}
          />
        )}
      </AnimatePresence>

      {/* Product Details Modal Overlay */}
      <AnimatePresence>
        {selectedProductId && (
          <ProductDetailModal
            productId={selectedProductId}
            onClose={handleCloseModal}
            onNavigateToProduct={handleProductSelect}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

