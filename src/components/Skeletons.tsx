import React from "react";

/**
 * Common pulse animation class wrapper
 */
const SkeletonPulse = ({ children, className = "" }: { children?: React.ReactNode; className?: string }) => (
  <div className={`animate-pulse ${className}`}>{children}</div>
);

/**
 * Skeleton loader for a single ProductCard component
 */
export function ProductCardSkeleton() {
  return (
    <div className="bg-bakery-brown/20 rounded-lg overflow-hidden border border-bakery-gold/5 flex flex-col h-full shadow-sm">
      {/* Image Area Skeleton */}
      <SkeletonPulse className="relative h-28 w-full bg-bakery-brown/40" />

      {/* Content Area Skeleton */}
      <div className="p-2 flex flex-col flex-grow gap-2">
        {/* Title line */}
        <SkeletonPulse className="h-3.5 bg-bakery-brown/40 rounded w-4/5" />
        
        {/* Star Rating line */}
        <SkeletonPulse className="h-2.5 bg-bakery-brown/30 rounded w-1/3" />

        {/* Price & Add button row */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <SkeletonPulse className="h-4 bg-bakery-brown/40 rounded w-1/3" />
          <SkeletonPulse className="w-6 h-6 bg-bakery-brown/40 rounded" />
        </div>
      </div>
    </div>
  );
}

/**
 * Skeleton loader for the entire ProductGrid section
 */
export function ProductGridSkeleton() {
  return (
    <section className="py-4 bg-bakery-dark">
      <div className="container mx-auto px-2 md:px-4">
        {/* Section Heading Skeleton */}
        <div className="mb-4">
          <SkeletonPulse className="h-6 bg-bakery-brown/30 rounded w-1/3 max-w-[200px]" />
        </div>

        {/* Grid of Product Cards Skeletons (6 items representing initial fold) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
          {[...Array(6)].map((_, idx) => (
            <ProductCardSkeleton key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Skeleton loader for the CategorySlider component
 */
export function CategorySliderSkeleton() {
  return (
    <section className="py-2 bg-bakery-dark">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex gap-4 overflow-x-hidden pb-2">
          {[...Array(8)].map((_, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 shrink-0 w-[70px] md:w-[80px]">
              {/* Category Circle Image Skeleton */}
              <SkeletonPulse className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-bakery-brown/30 border border-bakery-gold/5" />
              {/* Category Label Skeleton */}
              <SkeletonPulse className="h-2.5 bg-bakery-brown/30 rounded w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Generic section skeleton for large blocks below the fold
 */
export function SectionSkeleton({ heightClass = "h-48" }: { heightClass?: string }) {
  return (
    <div className="py-6 bg-bakery-dark relative">
      <div className="container mx-auto px-2 md:px-4">
        {/* Title skeleton */}
        <SkeletonPulse className="h-5 bg-bakery-brown/30 rounded w-1/4 max-w-[150px] mb-4" />
        
        {/* Section Box Content */}
        <SkeletonPulse className={`w-full rounded-xl bg-bakery-brown/10 border border-bakery-gold/5 ${heightClass}`} />
      </div>
    </div>
  );
}

/**
 * Skeleton for the ProductDetailModal overlay content
 */
export function ProductDetailModalSkeleton() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
      {/* Backdrop blur */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal Layout Skeleton */}
      <div className="relative w-full max-w-5xl h-[88vh] md:h-[85vh] bg-bakery-dark/95 border border-bakery-gold/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10">
        {/* Header */}
        <div className="py-3 px-4 border-b border-bakery-gold/10 flex items-center justify-between">
          <SkeletonPulse className="h-4 bg-bakery-brown/30 rounded w-1/6" />
          <SkeletonPulse className="w-6 h-6 bg-bakery-brown/30 rounded-full" />
        </div>

        {/* Dual column body */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Left Column: Image Gallery */}
          <div className="flex flex-col gap-4">
            <SkeletonPulse className="aspect-square w-full rounded-xl bg-bakery-brown/30" />
            <div className="flex gap-2.5 overflow-x-hidden">
              {[...Array(3)].map((_, i) => (
                <SkeletonPulse key={i} className="w-20 h-20 rounded-lg bg-bakery-brown/20 shrink-0" />
              ))}
            </div>
          </div>

          {/* Right Column: Meta */}
          <div className="flex flex-col gap-4 justify-between">
            <div className="flex flex-col gap-3">
              <SkeletonPulse className="h-3 bg-bakery-brown/30 rounded w-1/5" />
              <SkeletonPulse className="h-7 bg-bakery-brown/30 rounded w-3/4" />
              <SkeletonPulse className="h-4 bg-bakery-brown/20 rounded w-1/3" />
              <SkeletonPulse className="h-8 bg-bakery-brown/30 rounded w-1/4 mt-2" />
              <div className="flex flex-col gap-2 mt-4">
                <SkeletonPulse className="h-3 bg-bakery-brown/20 rounded w-full" />
                <SkeletonPulse className="h-3 bg-bakery-brown/20 rounded w-full" />
                <SkeletonPulse className="h-3 bg-bakery-brown/20 rounded w-5/6" />
              </div>
            </div>
            {/* Buttons */}
            <div className="flex gap-3 pt-4 border-t border-bakery-gold/10">
              <SkeletonPulse className="w-12 h-10 bg-bakery-brown/30 rounded" />
              <SkeletonPulse className="flex-1 h-10 bg-bakery-brown/30 rounded" />
              <SkeletonPulse className="flex-1 h-10 bg-bakery-brown/30 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
