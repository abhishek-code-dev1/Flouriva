"use client";

import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ProductDetailView from "@/components/ProductDetailView";
import { products } from "@/data/products";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ProductPageClientProps {
  productId: string;
}

export default function ProductPageClient({ productId }: ProductPageClientProps) {
  const router = useRouter();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <main className="min-h-screen bg-bakery-dark flex flex-col justify-between">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center flex-1 flex flex-col items-center justify-center">
          <h1 className="font-heading text-3xl font-bold text-bakery-gold mb-4">Product Not Found</h1>
          <p className="text-bakery-cream mb-6 text-sm">We couldn't find the item you are looking for.</p>
          <Link href="/" className="px-6 py-2 bg-bakery-gold text-bakery-dark font-bold text-xs rounded-full hover:bg-bakery-gold/80 transition-colors">
            Return Home
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const handleNavigateToProduct = (id: string) => {
    router.push(`/product/${id}`);
  };

  return (
    <main className="min-h-screen bg-bakery-dark flex flex-col justify-between">
      <Navbar />
      
      {/* Product Detail Content Section */}
      <div className="container mx-auto px-4 pt-24 pb-12 flex-1">
        {/* Breadcrumb / Back Link */}
        <div className="mb-6 flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs text-bakery-cream/60 hover:text-bakery-gold transition-colors font-medium"
          >
            <ArrowLeft size={14} />
            Back to Menu
          </Link>
        </div>

        {/* Product Details Component */}
        <ProductDetailView
          product={product}
          onNavigateToProduct={handleNavigateToProduct}
          isModalContext={false}
        />
      </div>

      <Footer />
      <FloatingActions />
    </main>
  );
}
