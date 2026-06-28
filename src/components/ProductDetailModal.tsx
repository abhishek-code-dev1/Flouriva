"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Product, products } from "@/data/products";
import ProductDetailView from "./ProductDetailView";

interface ProductDetailModalProps {
  productId: string | null;
  onClose: () => void;
  onNavigateToProduct: (id: string) => void;
}

export default function ProductDetailModal({
  productId,
  onClose,
  onNavigateToProduct,
}: ProductDetailModalProps) {
  // Find product by id
  const product = products.find((p) => p.id === productId);

  // Disable background scrolling when modal is active
  useEffect(() => {
    if (productId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [productId]);

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

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
      {/* Dark Blur Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* Modal Card Content Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="relative w-full max-w-5xl h-[88vh] md:h-[85vh] bg-bakery-dark/95 border border-bakery-gold/25 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 glass"
      >
        {/* Modal Sticky Header */}
        <div className="sticky top-0 bg-bakery-dark/95 border-b border-bakery-gold/15 py-3 px-4 flex items-center justify-between z-20 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-bakery-gold/20 flex items-center justify-center text-[10px] font-heading font-bold text-bakery-gold">
              F
            </span>
            <span className="font-heading text-xs font-bold text-bakery-cream tracking-wide">
              Flouriva Selection
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-bakery-brown/50 border border-bakery-gold/20 text-bakery-gold hover:bg-bakery-gold hover:text-bakery-dark transition-all duration-300 shadow-md"
            aria-label="Close detail modal"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar-section">
          <ProductDetailView
            product={product}
            onNavigateToProduct={onNavigateToProduct}
            isModalContext={true}
          />
        </div>
      </motion.div>
    </div>
  );
}
