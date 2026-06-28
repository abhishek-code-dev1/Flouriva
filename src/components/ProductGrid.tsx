"use client";

import React, { memo } from "react";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

function ProductGrid({
  onSelectProduct,
}: {
  onSelectProduct?: (id: string) => void;
}) {
  return (
    <section id="cakes" className="py-4 bg-bakery-dark relative">
      <div className="container mx-auto px-2 md:px-4">
        <h2 className="font-heading text-xl md:text-2xl text-bakery-light font-bold mb-3">
          Bestselling <span className="text-bakery-gold">Delights</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} onSelect={onSelectProduct} />
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <button className="px-4 py-1.5 text-xs rounded-full border border-bakery-gold text-bakery-gold font-medium hover:bg-bakery-gold hover:text-bakery-dark transition-colors">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}

export default memo(ProductGrid);
