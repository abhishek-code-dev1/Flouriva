"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Check,
  ShoppingBag,
  Info,
  ZoomIn,
  ZoomOut,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
} from "lucide-react";
import { Product, products } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductDetailViewProps {
  product: Product;
  onNavigateToProduct?: (id: string) => void;
  isModalContext?: boolean;
}

export default function ProductDetailView({
  product,
  onNavigateToProduct,
  isModalContext = false,
}: ProductDetailViewProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [reviewForm, setReviewForm] = useState({ name: "", rating: 5, comment: "" });
  const [localReviews, setLocalReviews] = useState(product.reviewsList);
  const [activeTab, setActiveTab] = useState<"specs" | "reviews">("specs");

  // Reset states when product changes
  useEffect(() => {
    setActiveImageIndex(0);
    setLocalReviews(product.reviewsList);
    setZoomScale(1);
  }, [product]);

  // Handle WhatsApp Order Link (memoized)
  const getWhatsAppLink = useCallback(() => {
    const text = encodeURIComponent(
      `Hello Flouriva Bakery! I'd like to order the "${product.name}" (${product.specifications.weight}) priced at ₹${product.price}. Please let me know the availability.`
    );
    return `https://wa.me/916307050806?text=${text}`;
  }, [product.name, product.specifications.weight, product.price]);

  // Handle mock review submission (memoized)
  const handleReviewSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewForm.name || !reviewForm.comment) return;

    const newReview = {
      id: `r-local-${Date.now()}`,
      author: reviewForm.name,
      rating: reviewForm.rating,
      comment: reviewForm.comment,
      date: new Date().toISOString().split("T")[0],
    };

    setLocalReviews((prev) => [newReview, ...prev]);
    setReviewForm({ name: "", rating: 5, comment: "" });
  }, [reviewForm.name, reviewForm.rating, reviewForm.comment]);

  // Find related products (memoized)
  const relatedProducts = useMemo(() => {
    return products
      .filter(
        (p) =>
          p.id !== product.id &&
          (p.category === product.category ||
            p.tags.some((t) => product.tags.includes(t)))
      )
      .slice(0, 4);
  }, [product.id, product.category, product.tags]);

  // Lightbox Zoom handlers (memoized)
  const handleZoomIn = useCallback(() => setZoomScale((prev) => Math.min(prev + 0.5, 3)), []);
  const handleZoomOut = useCallback(() => setZoomScale((prev) => Math.max(prev - 0.5, 1)), []);
  const resetZoom = useCallback(() => setZoomScale(1), []);

  // Next/Prev gallery image (memoized)
  const handleNextImage = useCallback(() => {
    setActiveImageIndex((prev) => (prev + 1) % product.images.length);
  }, [product.images.length]);

  const handlePrevImage = useCallback(() => {
    setActiveImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  }, [product.images.length]);

  // Review statistics (memoized)
  const ratingStats = useMemo(() => {
    const avg = localReviews.length
      ? (localReviews.reduce((sum, r) => sum + r.rating, 0) / localReviews.length).toFixed(1)
      : product.rating.toFixed(1);

    const counts = [0, 0, 0, 0, 0];
    localReviews.forEach((r) => {
      const idx = Math.floor(r.rating) - 1;
      if (idx >= 0 && idx < 5) counts[idx]++;
    });

    return { averageRating: avg, starCounts: counts };
  }, [localReviews, product.rating]);

  const { averageRating, starCounts } = ratingStats;

  return (
    <div className="text-bakery-light pb-8">
      {/* Product Detail Main Block */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        
        {/* Left Column: Image Gallery & Lightbox Toggle */}
        <div className="flex flex-col gap-4">
          <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-bakery-brown/30 border border-bakery-gold/15 group">
            <Image
              src={product.images[activeImageIndex]}
              alt={`${product.name} - Image ${activeImageIndex + 1}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-all duration-300"
            />

            {/* Hover Actions */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none" />
            
            <button
              onClick={() => {
                resetZoom();
                setIsLightboxOpen(true);
              }}
              className="absolute top-3 right-3 p-2 rounded-full bg-bakery-dark/80 text-bakery-gold hover:bg-bakery-gold hover:text-bakery-dark transition-all duration-300 shadow-md border border-bakery-gold/20"
              aria-label="Open fullscreen image view"
            >
              <Maximize2 size={16} />
            </button>

            {/* Left/Right Navigation inside Main Gallery */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bakery-dark/80 text-bakery-gold hover:bg-bakery-gold hover:text-bakery-dark transition-colors border border-bakery-gold/20"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bakery-dark/80 text-bakery-gold hover:bg-bakery-gold hover:text-bakery-dark transition-colors border border-bakery-gold/20"
                  aria-label="Next image"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}

            {/* Image indicator dot */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-bakery-dark/80 px-2 py-0.5 rounded-full text-[10px] text-bakery-gold font-medium border border-bakery-gold/10">
              {activeImageIndex + 1} / {product.images.length}
            </div>
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2.5 overflow-x-auto py-1 hide-scrollbar">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    idx === activeImageIndex
                      ? "border-bakery-gold scale-95 shadow-md"
                      : "border-bakery-gold/10 hover:border-bakery-gold/40"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} Thumbnail ${idx + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Product Metadata, CTA & Tab Controls */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Header info: Category & Status */}
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-[10px] md:text-xs font-bold tracking-wider text-bakery-gold/80 uppercase">
                {product.category}
              </span>
              
              {/* Availability Badge */}
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                  product.availability === "in-stock"
                    ? "bg-emerald-950/40 text-emerald-400 border-emerald-500/20"
                    : product.availability === "pre-order"
                    ? "bg-amber-950/40 text-amber-400 border-amber-500/20"
                    : "bg-rose-950/40 text-rose-400 border-rose-500/20"
                }`}
              >
                {product.availability === "in-stock" && "In Stock"}
                {product.availability === "pre-order" && "Pre-order"}
                {product.availability === "out-of-stock" && "Out of Stock"}
              </span>
            </div>

            {/* Product Title */}
            <h1 className="font-heading text-2xl md:text-3xl font-black text-bakery-light tracking-tight leading-tight mb-2">
              {product.name}
            </h1>

            {/* Star Rating Overview */}
            <div className="flex items-center gap-1.5 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={`${
                      i < Math.round(Number(averageRating))
                        ? "text-bakery-gold fill-bakery-gold"
                        : "text-bakery-gold/20"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-bakery-cream font-semibold">
                {averageRating}
              </span>
              <span className="text-xs text-bakery-cream/50">
                ({localReviews.length} customer reviews)
              </span>
            </div>

            {/* Price tag */}
            <div className="text-2xl md:text-3xl font-black text-bakery-gold mb-4 flex items-baseline gap-2">
              ₹{product.price}
              <span className="text-xs text-bakery-cream/50 font-normal">
                Inclusive of all taxes
              </span>
            </div>

            {/* Description */}
            <p className="text-xs md:text-sm text-bakery-cream/90 leading-relaxed mb-6">
              {product.detailedDescription}
            </p>

            {/* Highlight Badges */}
            <div className="grid grid-cols-3 gap-2.5 mb-6">
              <div className="bg-bakery-brown/20 border border-bakery-gold/10 rounded-lg p-2.5 text-center flex flex-col items-center justify-center">
                <span className="w-5 h-5 rounded-full bg-bakery-gold/10 text-bakery-gold flex items-center justify-center text-[10px] font-black mb-1">
                  🌱
                </span>
                <span className="text-[10px] text-bakery-cream font-bold leading-tight">
                  {product.specifications.eggless ? "100% Eggless" : "Contains Egg"}
                </span>
              </div>
              <div className="bg-bakery-brown/20 border border-bakery-gold/10 rounded-lg p-2.5 text-center flex flex-col items-center justify-center">
                <span className="w-5 h-5 rounded-full bg-bakery-gold/10 text-bakery-gold flex items-center justify-center text-[10px] font-black mb-1">
                  ⭐
                </span>
                <span className="text-[10px] text-bakery-cream font-bold leading-tight">
                  Premium Ingredients
                </span>
              </div>
              <div className="bg-bakery-brown/20 border border-bakery-gold/10 rounded-lg p-2.5 text-center flex flex-col items-center justify-center">
                <span className="w-5 h-5 rounded-full bg-bakery-gold/10 text-bakery-gold flex items-center justify-center text-[10px] font-black mb-1">
                  🧁
                </span>
                <span className="text-[10px] text-bakery-cream font-bold leading-tight">
                  Freshly Baked
                </span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-bakery-gold/15">
            <div className="flex-1 flex gap-2">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-3 rounded-lg border transition-all ${
                  isLiked
                    ? "bg-rose-950/20 border-rose-500/40 text-rose-400"
                    : "border-bakery-gold/20 hover:border-bakery-gold/50 text-bakery-cream"
                }`}
                aria-label="Add to wishlist"
              >
                <Heart size={20} className={isLiked ? "fill-rose-500" : ""} />
              </button>
              
              <button
                className="flex-1 bg-bakery-brown/40 border border-bakery-gold text-bakery-gold hover:bg-bakery-gold hover:text-bakery-dark font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <ShoppingBag size={18} />
                Add to Cart
              </button>
            </div>
            
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] active:scale-95 text-center"
            >
              <MessageCircle size={18} className="fill-white" />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Tabs Section: Specifications and Reviews */}
      <div className="mt-10 border-b border-bakery-gold/15 flex gap-4">
        <button
          onClick={() => setActiveTab("specs")}
          className={`pb-2.5 text-xs font-bold uppercase tracking-wider relative transition-all ${
            activeTab === "specs" ? "text-bakery-gold" : "text-bakery-cream/50 hover:text-bakery-cream"
          }`}
        >
          Specifications
          {activeTab === "specs" && (
            <motion.div layoutId="activeTabUnderline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-bakery-gold" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-2.5 text-xs font-bold uppercase tracking-wider relative transition-all ${
            activeTab === "reviews" ? "text-bakery-gold" : "text-bakery-cream/50 hover:text-bakery-cream"
          }`}
        >
          Reviews ({localReviews.length})
          {activeTab === "reviews" && (
            <motion.div layoutId="activeTabUnderline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-bakery-gold" />
          )}
        </button>
      </div>

      {/* Tab Panels */}
      <div className="py-6">
        {activeTab === "specs" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl"
          >
            <div className="glass rounded-xl p-4 flex flex-col gap-3">
              <h3 className="font-heading font-bold text-bakery-gold border-b border-bakery-gold/10 pb-1.5 text-sm">
                Product Details
              </h3>
              <div className="grid grid-cols-3 text-xs leading-relaxed">
                <span className="text-bakery-cream/50 col-span-1 font-medium">Flavour:</span>
                <span className="text-bakery-cream col-span-2">{product.specifications.flavour}</span>
              </div>
              <div className="grid grid-cols-3 text-xs leading-relaxed">
                <span className="text-bakery-cream/50 col-span-1 font-medium">Weight Options:</span>
                <span className="text-bakery-cream col-span-2">{product.specifications.weight}</span>
              </div>
              <div className="grid grid-cols-3 text-xs leading-relaxed">
                <span className="text-bakery-cream/50 col-span-1 font-medium">Dietary Rule:</span>
                <span className="text-bakery-cream col-span-2">
                  {product.specifications.eggless ? "100% Vegetarian (Eggless)" : "Contains Egg"}
                </span>
              </div>
              <div className="grid grid-cols-3 text-xs leading-relaxed">
                <span className="text-bakery-cream/50 col-span-1 font-medium">Shelf Life:</span>
                <span className="text-bakery-cream col-span-2">{product.specifications.shelfLife}</span>
              </div>
              <div className="grid grid-cols-3 text-xs leading-relaxed">
                <span className="text-bakery-cream/50 col-span-1 font-medium">Serving Size:</span>
                <span className="text-bakery-cream col-span-2">{product.specifications.servingSize}</span>
              </div>
            </div>

            <div className="glass rounded-xl p-4 flex flex-col gap-2">
              <h3 className="font-heading font-bold text-bakery-gold border-b border-bakery-gold/10 pb-1.5 text-sm">
                Ingredients & Care
              </h3>
              <p className="text-xs text-bakery-cream/90 leading-relaxed">
                {product.specifications.ingredients}
              </p>
              <div className="mt-3 flex items-start gap-1.5 text-[10px] text-bakery-gold/75 bg-bakery-gold/5 p-2 rounded border border-bakery-gold/10">
                <Info size={12} className="shrink-0 mt-0.5" />
                <span>Keep refrigerated. Serve slightly chilled or at room temperature for the best flavor experience.</span>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "reviews" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row gap-6 max-w-5xl"
          >
            {/* Left: Ratings Summary */}
            <div className="lg:w-1/3 flex flex-col gap-4">
              <div className="glass rounded-xl p-4 flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-black text-bakery-gold leading-none mb-1">
                  {averageRating}
                </span>
                <div className="flex items-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={`${
                        i < Math.round(Number(averageRating))
                          ? "text-bakery-gold fill-bakery-gold"
                          : "text-bakery-gold/20"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-bakery-cream/50">
                  Based on {localReviews.length} reviews
                </span>
              </div>

              {/* Star Progress Chart */}
              <div className="glass rounded-xl p-4 flex flex-col gap-2.5">
                {[5, 4, 3, 2, 1].map((stars) => {
                  const count = starCounts[stars - 1] || 0;
                  const percent = localReviews.length
                    ? Math.round((count / localReviews.length) * 100)
                    : 0;
                  return (
                    <div key={stars} className="flex items-center gap-2 text-xs">
                      <span className="w-3 text-bakery-cream/70 font-semibold">{stars}</span>
                      <Star size={10} className="text-bakery-gold fill-bakery-gold shrink-0" />
                      <div className="flex-1 h-1.5 bg-bakery-brown rounded-full overflow-hidden border border-bakery-gold/5">
                        <div
                          className="h-full bg-bakery-gold rounded-full"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <span className="w-8 text-right text-[10px] text-bakery-cream/50">{percent}%</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Write a Review & Review List */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Write Review Form */}
              <form onSubmit={handleReviewSubmit} className="glass rounded-xl p-4 flex flex-col gap-3">
                <h4 className="text-xs font-bold text-bakery-gold uppercase tracking-wider">
                  Write a Customer Review
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                    required
                    className="bg-bakery-dark/80 border border-bakery-gold/20 rounded px-3 py-1.5 text-xs text-bakery-cream focus:outline-none focus:border-bakery-gold placeholder:text-bakery-cream/30"
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-bakery-cream/50">Your Rating:</span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                          className="text-bakery-gold hover:scale-110 transition-transform"
                        >
                          <Star
                            size={16}
                            className={`${
                              star <= reviewForm.rating
                                ? "fill-bakery-gold text-bakery-gold"
                                : "text-bakery-gold/20"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <textarea
                  placeholder="Share your experience with this item..."
                  value={reviewForm.comment}
                  onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                  required
                  rows={2}
                  className="bg-bakery-dark/80 border border-bakery-gold/20 rounded px-3 py-1.5 text-xs text-bakery-cream focus:outline-none focus:border-bakery-gold placeholder:text-bakery-cream/30 resize-none"
                />

                <button
                  type="submit"
                  className="w-fit ml-auto px-4 py-1.5 rounded bg-bakery-gold text-bakery-dark text-[10px] font-bold uppercase hover:bg-bakery-gold/80 transition-colors shadow"
                >
                  Submit Review
                </button>
              </form>

              {/* Review Feed */}
              <div className="flex flex-col gap-3">
                {localReviews.length === 0 ? (
                  <p className="text-xs text-bakery-cream/50 italic text-center py-4">No reviews yet. Be the first to write one!</p>
                ) : (
                  localReviews.map((rev) => (
                    <div key={rev.id} className="glass rounded-xl p-4 flex gap-3 border-l-2 border-l-bakery-gold">
                      {/* Avatar */}
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-bakery-brown to-bakery-gold/40 flex items-center justify-center text-bakery-gold font-bold text-xs shrink-0 select-none shadow">
                        {rev.author.slice(0, 2).toUpperCase()}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-bold text-bakery-light">{rev.author}</span>
                          <span className="text-[10px] text-bakery-cream/40">{rev.date}</span>
                        </div>
                        
                        <div className="flex gap-0.5 mb-1.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={10}
                              className={`${
                                i < rev.rating
                                  ? "text-bakery-gold fill-bakery-gold"
                                  : "text-bakery-gold/20"
                              }`}
                            />
                          ))}
                        </div>
                        
                        <p className="text-xs text-bakery-cream/80 leading-relaxed font-normal">
                          {rev.comment}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-12 pt-8 border-t border-bakery-gold/15">
          <h2 className="font-heading text-lg md:text-xl text-bakery-light font-bold mb-4">
            You Might Also <span className="text-bakery-gold">Like</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
            {relatedProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onSelect={(id) => {
                  if (onNavigateToProduct) {
                    onNavigateToProduct(id);
                  }
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Lightbox / Zoom Dialog Overlay */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          >
            {/* Header controls */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
              <span className="text-xs font-medium text-bakery-cream/65 truncate max-w-[70%]">
                {product.name} - Image {activeImageIndex + 1}
              </span>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handleZoomOut}
                  disabled={zoomScale <= 1}
                  className="p-2 rounded bg-white/10 hover:bg-white/20 text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  title="Zoom Out"
                >
                  <ZoomOut size={16} />
                </button>
                <button
                  onClick={handleZoomIn}
                  disabled={zoomScale >= 3}
                  className="p-2 rounded bg-white/10 hover:bg-white/20 text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  title="Zoom In"
                >
                  <ZoomIn size={16} />
                </button>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-2 rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="Close Lightbox"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Main Lightbox Body with Swiping/Nav */}
            <div className="relative w-full max-w-3xl aspect-square flex items-center justify-center overflow-hidden">
              
              {/* Prev Button */}
              {product.images.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    resetZoom();
                    handlePrevImage();
                  }}
                  className="absolute left-2 z-10 p-2.5 rounded-full bg-black/60 text-bakery-gold hover:bg-bakery-gold hover:text-bakery-dark border border-bakery-gold/20 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
              )}

              {/* Image Frame */}
              <motion.div
                style={{ scale: zoomScale }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="w-full h-full relative cursor-grab active:cursor-grabbing"
                drag={zoomScale > 1}
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              >
                <Image
                  src={product.images[activeImageIndex]}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>

              {/* Next Button */}
              {product.images.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    resetZoom();
                    handleNextImage();
                  }}
                  className="absolute right-2 z-10 p-2.5 rounded-full bg-black/60 text-bakery-gold hover:bg-bakery-gold hover:text-bakery-dark border border-bakery-gold/20 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              )}
            </div>

            {/* Instruction Footer */}
            <div className="absolute bottom-4 text-center">
              <p className="text-[10px] text-white/50">
                {zoomScale > 1 ? "Drag to explore. Click zoom buttons to adjust." : "Use Zoom controls above to view fine details."}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
