"use client";

import { motion } from "framer-motion";
import ProductCard, { Product } from "./ProductCard";

const products: Product[] = [
  {
    id: "1",
    name: "Chocolate Truffle Cake",
    description: "Rich, dense chocolate sponge layered with smooth chocolate ganache.",
    price: 850,
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    isBestseller: true,
  },
  {
    id: "2",
    name: "Red Velvet Cake",
    description: "Classic red velvet sponge with signature cream cheese frosting.",
    price: 950,
    rating: 4.8,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    isBestseller: true,
  },
  {
    id: "3",
    name: "Black Forest Cake",
    description: "Layers of chocolate sponge, whipped cream, and fresh cherries.",
    price: 750,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "4",
    name: "Pineapple Cake",
    description: "Light vanilla sponge layered with fresh cream and pineapple chunks.",
    price: 650,
    rating: 4.6,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "6",
    name: "Fresh Cream Pastry",
    description: "Delightful single-serve pastry with seasonal fruits and light cream.",
    price: 150,
    rating: 4.8,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "7",
    name: "Walnut Brownies",
    description: "Fudgy, gooey chocolate brownies loaded with premium walnuts.",
    price: 250,
    rating: 4.9,
    reviews: 320,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    isBestseller: true,
  },
  {
    id: "8",
    name: "Assorted Cupcakes",
    description: "Box of 6 cupcakes in vanilla, chocolate, and strawberry flavors.",
    price: 450,
    rating: 4.7,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

export default function ProductGrid() {
  return (
    <section id="cakes" className="py-4 bg-bakery-dark relative">
      <div className="container mx-auto px-2 md:px-4">
        <h2 className="font-heading text-xl md:text-2xl text-bakery-light font-bold mb-3">
          Bestselling <span className="text-bakery-gold">Delights</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
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
