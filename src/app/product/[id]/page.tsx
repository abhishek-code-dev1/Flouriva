import { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductPageClient from "./ProductPageClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return {
      title: "Product Not Found | Flouriva",
      description: "The requested bakery item could not be found.",
    };
  }

  return {
    title: `${product.name} | Premium Bakery Flouriva`,
    description: `${product.description} Freshly baked, eggless available. Order online today.`,
    openGraph: {
      title: `${product.name} - Flouriva Bakery`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return <ProductPageClient productId={id} />;
}
