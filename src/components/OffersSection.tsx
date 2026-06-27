"use client";

import { Gift, Truck, Percent } from "lucide-react";

export default function OffersSection() {
  return (
    <section id="offers" className="py-4 bg-bakery-brown/10 relative overflow-hidden">
      <div className="container mx-auto px-2 md:px-4">
        <h2 className="font-heading text-xl md:text-2xl text-bakery-light font-bold mb-3">
          Special <span className="text-bakery-gold">Offers</span>
        </h2>

        <div className="flex gap-3 overflow-x-auto snap-x hide-scrollbar pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {/* Offer 1 */}
          <div className="snap-start shrink-0 w-[240px] md:w-[280px] rounded-xl p-4 bg-gradient-to-r from-bakery-brown to-bakery-dark border border-bakery-gold/20 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <Percent className="w-5 h-5 text-bakery-gold" />
              <h3 className="font-heading text-lg font-bold text-bakery-light leading-none">20% OFF</h3>
            </div>
            <p className="text-bakery-gold text-xs font-medium mb-1">Birthday Cakes</p>
            <p className="text-[10px] text-bakery-cream/60">Code: BDAY20</p>
          </div>

          {/* Offer 2 */}
          <div className="snap-start shrink-0 w-[240px] md:w-[280px] rounded-xl p-4 bg-gradient-to-r from-[#D4AF37] to-[#A68A2A] border border-bakery-gold/30 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <Truck className="w-5 h-5 text-bakery-dark" />
              <h3 className="font-heading text-lg font-bold text-bakery-dark leading-none">Free Delivery</h3>
            </div>
            <p className="text-bakery-dark/80 text-xs font-medium mb-1">Above ₹500</p>
            <p className="text-[10px] text-bakery-dark/70">Applies automatically</p>
          </div>

          {/* Offer 3 */}
          <div className="snap-start shrink-0 w-[240px] md:w-[280px] rounded-xl p-4 bg-gradient-to-r from-bakery-brown to-bakery-dark border border-bakery-gold/20 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="w-5 h-5 text-bakery-gold" />
              <h3 className="font-heading text-lg font-bold text-bakery-light leading-none">Sweet Deals</h3>
            </div>
            <p className="text-bakery-gold text-xs font-medium mb-1">Buy 2 Get 1</p>
            <p className="text-[10px] text-bakery-cream/60">On Pastries</p>
          </div>
        </div>
      </div>
    </section>
  );
}
