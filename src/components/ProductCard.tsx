"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { Plus, Star } from "lucide-react";
import Image from "next/image";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  isBestseller?: boolean;
}

function ProductCard({
  product,
  onSelect,
}: {
  product: Product;
  onSelect?: (id: string) => void;
}) {
  const handleClick = (e: React.MouseEvent) => {
    // If user clicked the "+" add-to-cart button specifically, we don't open the modal
    const target = e.target as HTMLElement;
    if (target.closest('.add-to-cart-btn')) {
      return;
    }
    if (onSelect) {
      onSelect(product.id);
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-bakery-brown/20 rounded-lg overflow-hidden border border-bakery-gold/10 hover:border-bakery-gold/40 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] flex flex-col h-full shadow-sm cursor-pointer group transition-all"
    >
      <div className="relative h-28 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          // Fine-tuned to load lower resolution images based on grid column widths
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.isBestseller && (
          <div className="absolute top-1 left-1 bg-bakery-gold text-bakery-dark text-[8px] font-bold px-1.5 py-0.5 rounded uppercase shadow-sm z-10">
            Best
          </div>
        )}
      </div>
      
      <div className="p-2 flex flex-col flex-grow">
        <h3 className="font-heading text-xs md:text-sm font-bold text-bakery-light leading-tight line-clamp-1 mb-1 group-hover:text-bakery-gold transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-1">
          <Star className="w-2.5 h-2.5 text-bakery-gold fill-bakery-gold" />
          <span className="text-[10px] text-bakery-cream font-medium">{product.rating}</span>
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-1">
          <div className="text-sm font-bold text-bakery-gold">
            ₹{product.price}
          </div>
          <button className="add-to-cart-btn w-6 h-6 rounded bg-bakery-gold/20 flex items-center justify-center text-bakery-gold hover:bg-bakery-gold hover:text-bakery-dark transition-colors">
            <Plus size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// Memoize to prevent re-renders unless the product reference or selection callbacks change
export default memo(ProductCard);
