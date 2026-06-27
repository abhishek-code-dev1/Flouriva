"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const banners = [
  {
    id: 1,
    title: "50% OFF",
    subtitle: "On First Order",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&w=400&q=80",
    bg: "from-amber-900 to-black"
  },
  {
    id: 2,
    title: "Free Delivery",
    subtitle: "Above ₹299",
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-4.0.3&w=400&q=80",
    bg: "from-emerald-900 to-black"
  },
  {
    id: 3,
    title: "New Arrivals",
    subtitle: "Try our latest",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&w=400&q=80",
    bg: "from-rose-900 to-black"
  }
];

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-4 overflow-hidden">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {banners.map((banner) => (
            <motion.div
              key={banner.id}
              whileTap={{ scale: 0.98 }}
              className={`snap-center shrink-0 w-[280px] md:w-[350px] h-32 md:h-40 rounded-xl bg-gradient-to-r ${banner.bg} relative overflow-hidden flex items-center p-4 shadow-lg cursor-pointer`}
            >
              <div className="z-10 flex flex-col w-2/3">
                <span className="text-bakery-gold text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1">Limited Offer</span>
                <h3 className="text-white text-xl md:text-2xl font-black leading-none mb-1">{banner.title}</h3>
                <p className="text-white/80 text-xs md:text-sm">{banner.subtitle}</p>
                <button className="mt-2 bg-white text-black text-[10px] md:text-xs font-bold px-3 py-1 rounded-full w-fit">Order Now</button>
              </div>
              <div className="absolute -right-4 top-0 h-full w-1/2 rounded-full overflow-hidden scale-110 opacity-90">
                <Image src={banner.image} alt={banner.title} fill sizes="(max-width: 768px) 150px, 200px" priority={true} className="object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
