"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ArrowLeft, Cookie } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

interface CategoryProductsViewProps {
  categoryName: string | null;
  onClose: () => void;
  onSelectProduct: (productId: string) => void;
}

export default function CategoryProductsView({
  categoryName,
  onClose,
  onSelectProduct,
}: CategoryProductsViewProps) {
  // Filter products by category
  const categoryProducts = products.filter(
    (p) => p.category.toLowerCase() === categoryName?.toLowerCase()
  );

  // Disable background scrolling when drawer is active
  useEffect(() => {
    if (categoryName) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [categoryName]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!categoryName) return null;

  return (
    <div className="fixed inset-0 z-40 flex justify-end overflow-hidden">
      {/* Semi-transparent backdrop blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-xs"
      />

      {/* Slide-out Drawer Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 220 }}
        className="relative w-full max-w-lg md:max-w-xl h-full bg-bakery-dark/95 border-l border-bakery-gold/20 shadow-2xl flex flex-col z-10 glass"
      >
        {/* Drawer Sticky Header */}
        <div className="sticky top-0 bg-bakery-dark/95 border-b border-bakery-gold/15 py-4 px-4 md:px-6 flex items-center justify-between z-20 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="mr-1 text-bakery-cream hover:text-bakery-gold transition-colors md:hidden"
              aria-label="Back"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h2 className="font-heading text-lg md:text-xl font-bold text-bakery-light tracking-wide flex items-center gap-1.5">
                {categoryName} <span className="text-bakery-gold text-xs font-sans font-normal bg-bakery-gold/10 px-2 py-0.5 rounded-full">
                  {categoryProducts.length} items
                </span>
              </h2>
              <p className="text-[10px] text-bakery-cream/50 mt-0.5 font-sans font-medium uppercase tracking-wider">
                Flouriva Menu Collection
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-bakery-brown/50 border border-bakery-gold/20 text-bakery-gold hover:bg-bakery-gold hover:text-bakery-dark transition-all duration-300 shadow-md hidden md:block"
            aria-label="Close category panel"
          >
            <X size={16} />
          </button>
        </div>

        {/* Drawer Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar-section">
          {categoryProducts.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center p-6 gap-3">
              <div className="w-12 h-12 rounded-full bg-bakery-gold/10 flex items-center justify-center text-bakery-gold">
                <Cookie className="animate-pulse" size={24} />
              </div>
              <h3 className="font-heading text-bakery-light text-base font-bold">Baking Shortly!</h3>
              <p className="text-xs text-bakery-cream/50 max-w-xs leading-relaxed">
                We are currently crafting new delicacies for "{categoryName}". Check back shortly for our fresh releases!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 md:gap-4 pb-12">
              {categoryProducts.map((product) => (
                <div key={product.id} className="h-full">
                  <ProductCard
                    product={product}
                    onSelect={onSelectProduct}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
