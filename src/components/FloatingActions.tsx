"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 5, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:6307050806"
        className="relative w-14 h-14 bg-bakery-gold rounded-full flex items-center justify-center text-bakery-dark shadow-[0_0_20px_rgba(212,175,55,0.4)] group"
        aria-label="Call Us"
      >
        <Phone size={24} className="group-hover:animate-wiggle" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full border border-bakery-gold animate-ping opacity-50"></span>
      </motion.a>

    </div>
  );
}
