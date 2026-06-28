"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

// Above the fold components are loaded statically for instant paint
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySlider from "@/components/CategorySlider";
import ProductGrid from "@/components/ProductGrid";

// Skeleton screen loaders for smooth transition & CLS prevention
import {
  SectionSkeleton,
  ProductDetailModalSkeleton
} from "@/components/Skeletons";

// Below the fold sections are dynamically imported to defer JS loading
const OffersSection = dynamic(() => import("@/components/OffersSection"), {
  loading: () => <SectionSkeleton heightClass="h-28" />,
  ssr: false,
});

const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  loading: () => <SectionSkeleton heightClass="h-48" />,
  ssr: false,
});

const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => <SectionSkeleton heightClass="h-64" />,
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

const FloatingActions = dynamic(() => import("@/components/FloatingActions"), {
  ssr: false,
});

// Conditionally rendered overlay components are dynamically imported
const CategoryProductsView = dynamic(() => import("@/components/CategoryProductsView"), {
  ssr: false,
});

const ProductDetailModal = dynamic(() => import("@/components/ProductDetailModal"), {
  loading: () => <ProductDetailModalSkeleton />,
  ssr: false,
});

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

  // Handle product select (memoized to prevent child re-renders)
  const handleProductSelect = useCallback((id: string) => {
    setSelectedProductId(id);
    const newUrl = `${window.location.pathname}?product=${id}`;
    window.history.pushState({ product: id }, "", newUrl);
  }, []);

  // Handle modal close (memoized to prevent child re-renders)
  const handleCloseModal = useCallback(() => {
    setSelectedProductId(null);
    const newUrl = window.location.pathname;
    window.history.pushState({}, "", newUrl);
  }, []);

  // Handle category select (memoized to prevent child re-renders)
  const handleCategorySelect = useCallback((categoryName: string) => {
    setSelectedCategoryName(categoryName);
  }, []);

  // Handle category drawer close (memoized to prevent child re-renders)
  const handleCloseCategoryDrawer = useCallback(() => {
    setSelectedCategoryName(null);
  }, []);

  return (
    <main className="min-h-screen bg-bakery-dark">
      <Navbar />
      <Hero />
      <CategorySlider onSelectCategory={handleCategorySelect} />
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
            onClose={handleCloseCategoryDrawer}
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
