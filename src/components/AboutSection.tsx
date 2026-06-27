"use client";

import Image from "next/image";
import { Award, Clock, Users, Heart } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { icon: <Clock size={16} />, value: "25+", label: "Years" },
    { icon: <Heart size={16} />, value: "50k", label: "Cakes" },
    { icon: <Users size={16} />, value: "100k", label: "Customers" },
    { icon: <Award size={16} />, value: "15", label: "Awards" },
  ];

  return (
    <section id="about" className="py-6 bg-bakery-dark relative overflow-hidden">
      <div className="container mx-auto px-2 md:px-4">
        <div className="grid md:grid-cols-2 gap-4 items-center">
          
          <div className="flex flex-col gap-3">
            <div>
              <h2 className="font-heading text-xl md:text-2xl text-bakery-light font-bold mb-2">
                Our <span className="text-bakery-gold">Story</span>
              </h2>
              <p className="text-[10px] md:text-xs text-bakery-cream/80">
                Since 1998, we've been crafting sweet memories. What started as a small family kitchen has grown into a beloved bakery, but our commitment to quality, traditional recipes, and baking with love remains unchanged.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-2">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-2 rounded-lg bg-bakery-brown/10 border border-bakery-gold/10">
                  <div className="text-bakery-gold mb-1">{stat.icon}</div>
                  <div className="font-heading text-sm font-bold text-bakery-light">{stat.value}</div>
                  <div className="text-[8px] text-bakery-gold uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-2">
              <div className="relative h-32 md:h-40 rounded-xl overflow-hidden mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&w=300&q=80"
                  alt="Baking Process"
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 md:h-40 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-4.0.3&w=300&q=80"
                  alt="Our Bakery"
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
