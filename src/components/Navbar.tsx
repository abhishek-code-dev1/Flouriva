"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "Cakes", href: "#cakes" },
  { name: "Offers", href: "#offers" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }} // Faster delay
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-bakery-dark/95 backdrop-blur-md border-b border-bakery-gold/20 shadow-lg py-2"
          : "bg-bakery-dark/80 py-3"
      }`}
    >
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-bakery-gold/20 flex items-center justify-center group-hover:bg-bakery-gold/40 transition-colors">
              <span className="font-heading text-lg font-bold text-bakery-gold">F</span>
            </div>
            <span className="font-heading text-xl font-bold text-bakery-light tracking-wide">
              Flouriva
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-bakery-cream hover:text-bakery-gold text-xs font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-bakery-gold transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="tel:6307050806"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bakery-brown/50 border border-bakery-gold/30 text-bakery-gold hover:bg-bakery-gold hover:text-bakery-dark transition-all duration-300 text-xs font-medium"
            >
              <Phone size={14} />
              Call
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-bakery-light hover:text-bakery-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 top-[50px] bg-bakery-dark/95 backdrop-blur-xl border-t border-bakery-gold/20 flex flex-col px-6 py-6 overflow-hidden z-30"
          >
            <nav className="flex flex-col gap-4 items-center mt-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-heading text-xl text-bakery-light hover:text-bakery-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
