"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { productAPI } from "@/lib/server";

const storeUrl = process.env.NEXT_PUBLIC_STORE_URL || "#store";

interface ProductVariant {
  sizeLabel: string;
  brimfulCapacity?: string;
  neckSize?: string;
  totalHeight?: string;
  diameter?: string;
  labelHeight?: string;
  standardWeight?: string;
}

interface Product {
  _id: string;
  name: string;
  description?: string;
  materialOfConstruction: string;
  capType: string;
  imageUrl: string;
  imagePublicId?: string;
  variants: ProductVariant[];
}

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Fetching products from backend...");
        const response = await productAPI.getProducts();
        console.log("Products response:", response);

        // Handle different response structures
        const productsArray = response.products || response || [];

        if (Array.isArray(productsArray) && productsArray.length > 0) {
          // Take only first 4 products
          setProducts(productsArray.slice(0, 4));
          setLoading(false);
          console.log("Products loaded successfully:", productsArray.length);
        } else {
          console.warn("No products returned from API");
          setLoading(false); // Stop loading even if no products
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
        console.error(
          "Error details:",
          error instanceof Error ? error.message : error
        );
        // Retry after 3 seconds if failed
        setTimeout(fetchProducts, 3000);
      }
    };

    fetchProducts();
  }, []);
  return (
    <section id="products" className="py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header - stack on mobile */}
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Our Products
            </p>
            <h2 className="mt-2 text-balance font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Industrial Packaging Solutions
            </h2>
            <p className="mt-2 text-base font-semibold text-foreground sm:text-lg">
              Barrier packaging engineered for safety, compliance, and
              performance.
            </p>
            <p className="mt-3 max-w-2xl text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
              HDPE and multilayer barrier packaging for agrochemicals,
              pesticides, lubricants, and specialty products.
            </p>
          </div>
          <Button
            variant="outline"
            className="hidden shrink-0 bg-transparent sm:inline-flex"
            asChild
          >
            <a href={`${storeUrl}/products`} target="_blank" rel="noreferrer">
              View Full Catalog
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Products grid - 2 cols on mobile, 2 on tablet, 4 on desktop */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 lg:grid-cols-4">
          {loading
            ? // Loading skeleton
              Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col overflow-hidden rounded-lg border border-border bg-background sm:rounded-xl"
                >
                  <div className="aspect-square animate-pulse bg-muted sm:aspect-4/3" />
                  <div className="flex flex-1 flex-col p-3 sm:p-4">
                    <div className="h-4 animate-pulse rounded bg-muted sm:h-5" />
                    <div className="mt-2 h-3 animate-pulse rounded bg-muted" />
                    <div className="mt-3 h-8 animate-pulse rounded bg-muted" />
                  </div>
                </div>
              ))
            : products.map((product) => (
                <div
                  key={product._id}
                  className="group flex flex-col overflow-hidden rounded-lg border border-border bg-background transition-all hover:border-accent/50 hover:shadow-lg sm:rounded-xl"
                >
                  {/* Image */}
                  <div className="aspect-square overflow-hidden bg-muted sm:aspect-4/3">
                    <img
                      src={product.imageUrl || "/placeholder.svg"}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-3 sm:p-4">
                    <div className="flex-1">
                      <h3 className="font-serif text-sm font-semibold text-foreground sm:text-lg">
                        {product.name}
                      </h3>
                      <p className="mt-1 hidden text-sm text-muted-foreground sm:block">
                        {product.description || product.materialOfConstruction}
                      </p>
                      <p className="mt-1 text-xs font-medium text-accent sm:mt-3">
                        {product.materialOfConstruction} •{" "}
                        {product.variants?.length || 0} variant
                        {product.variants?.length !== 1 ? "s" : ""}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-3 w-full justify-between text-foreground"
                      asChild
                    >
                      <a
                        href={`${storeUrl}/products/${product._id}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-6 sm:hidden">
          <Button variant="outline" className="w-full bg-transparent" asChild>
            <a href={`${storeUrl}/products`} target="_blank" rel="noreferrer">
              View Full Catalog
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
