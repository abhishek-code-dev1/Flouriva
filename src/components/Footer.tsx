"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bakery-dark border-t border-bakery-gold/20 pt-6 pb-20 md:pb-6 relative z-10">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b border-bakery-gold/10 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-heading text-lg font-bold text-bakery-gold">F</span>
            <span className="font-heading text-lg font-bold text-bakery-light tracking-wide">
              Flouriva
            </span>
          </div>
          
          <div className="flex gap-4 text-xs text-bakery-cream">
            <Link href="#menu" className="hover:text-bakery-gold transition-colors">Menu</Link>
            <Link href="#cakes" className="hover:text-bakery-gold transition-colors">Cakes</Link>
            <Link href="#offers" className="hover:text-bakery-gold transition-colors">Offers</Link>
          </div>
          
          <div className="flex gap-3 text-bakery-gold text-xs">
            <a href="#" className="hover:text-bakery-light transition-colors">FB</a>
            <a href="#" className="hover:text-bakery-light transition-colors">IG</a>
            <a href="#" className="hover:text-bakery-light transition-colors">TW</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] text-bakery-cream/50">
          <p>&copy; {new Date().getFullYear()} Flouriva. All rights reserved.</p>
          <div className="flex gap-3">
            <Link href="#" className="hover:text-bakery-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-bakery-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
