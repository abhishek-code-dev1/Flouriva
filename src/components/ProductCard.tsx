"use client";

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

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-bakery-brown/10 rounded-lg overflow-hidden border border-bakery-gold/10 hover:border-bakery-gold/30 flex flex-col h-full shadow-sm">
      <div className="relative h-28 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 15vw"
          className="object-cover"
        />
        {product.isBestseller && (
          <div className="absolute top-1 left-1 bg-bakery-gold text-bakery-dark text-[8px] font-bold px-1.5 py-0.5 rounded uppercase shadow-sm">
            Best
          </div>
        )}
      </div>
      
      <div className="p-2 flex flex-col flex-grow">
        <h3 className="font-heading text-xs md:text-sm font-bold text-bakery-light leading-tight line-clamp-1 mb-1">
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
          <button className="w-6 h-6 rounded bg-bakery-gold/20 flex items-center justify-center text-bakery-gold hover:bg-bakery-gold hover:text-bakery-dark transition-colors">
            <Plus size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
