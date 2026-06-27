"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { CakeSlice, Sparkles } from "lucide-react";

export default function LoaderAnimation({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Sequence duration before hiding loader
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Allow exit animation to finish
    }, 4500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bakery-dark overflow-hidden"
        >
          {/* Particles Background */}
          {[...Array(15)].map((_, i) => {
            // Deterministic pseudo-random values to avoid hydration mismatch
            const xPos = Math.sin(i) * 250;
            const dur = 3 + Math.abs(Math.cos(i)) * 3;
            const del = Math.abs(Math.sin(i * 2)) * 2;

            return (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: "100vh",
                  x: xPos,
                }}
                animate={{
                  opacity: [0, 0.5, 0],
                  y: "-100vh",
                  x: xPos,
                }}
                transition={{
                  duration: dur,
                  repeat: Infinity,
                  delay: del,
                }}
                className="absolute w-2 h-2 rounded-full bg-bakery-gold/40 blur-[1px]"
              />
            );
          })}

          <div className="relative flex flex-col items-center">
            {/* Cake / Logo Reveal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-bakery-gold/20 flex items-center justify-center bg-bakery-brown/50 glass relative overflow-hidden">
                <motion.div
                  initial={{ rotate: -10, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1.5 }}
                >
                  <CakeSlice className="w-16 h-16 md:w-24 md:h-24 text-bakery-gold" strokeWidth={1.5} />
                </motion.div>

                {/* Glow effect that increases */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0.8] }}
                  transition={{ delay: 1.5, duration: 2, ease: "easeInOut" }}
                  className="absolute inset-0 bg-bakery-gold/20 blur-xl rounded-full"
                />
              </div>

              {/* Sparkles around cake */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute -top-4 -right-4"
              >
                <Sparkles className="w-8 h-8 text-bakery-gold/80" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="absolute -bottom-4 -left-4"
              >
                <Sparkles className="w-6 h-6 text-bakery-gold/60" />
              </motion.div>
            </motion.div>

            {/* Text Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 1.2, ease: "easeOut" }}
              className="mt-8 text-center"
            >
              <h1 className="font-heading text-3xl md:text-5xl text-bakery-light tracking-wide font-medium">
                Welcome To Our Bakery
              </h1>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="h-[1px] bg-gradient-to-r from-transparent via-bakery-gold to-transparent mt-4 w-3/4 mx-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
