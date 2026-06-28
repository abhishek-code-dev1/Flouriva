"use client";

import React, { memo } from "react";
import Image from "next/image";

const categories = [
  { name: "Cakes", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&w=150&q=80" },
  { name: "Pastries", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&w=150&q=80" },
  { name: "Cookies", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&w=150&q=80" },
  { name: "Cupcakes", image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-4.0.3&w=150&q=80" },
  { name: "Bread", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&w=150&q=80" },
  { name: "Desserts", image: "https://images.unsplash.com/photo-1514849302-984523450cf4?ixlib=rb-4.0.3&w=150&q=80" },
  { name: "Specials", image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-4.0.3&w=150&q=80" },
  { name: "Wedding", image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-4.0.3&w=150&q=80" },
];

function CategorySlider({
  onSelectCategory,
}: {
  onSelectCategory?: (categoryName: string) => void;
}) {
  return (
    <section id="menu" className="py-2 bg-bakery-dark">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex gap-4 overflow-x-auto snap-x hide-scrollbar pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {categories.map((cat, i) => (
            <div
              key={i}
              onClick={() => onSelectCategory?.(cat.name)}
              className="flex flex-col items-center gap-1 shrink-0 snap-start cursor-pointer w-[70px] md:w-[80px] group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border border-bakery-gold/20 group-hover:border-bakery-gold/60 group-hover:shadow-[0_0_12px_rgba(212,175,55,0.2)] transition-all duration-300 shadow-sm relative">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 64px, 80px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] md:text-xs text-bakery-cream text-center font-medium leading-tight group-hover:text-bakery-gold transition-colors">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(CategorySlider);
