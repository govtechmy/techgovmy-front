"use client";

import { Product } from "@/payload-types";
import { createContext, useContext, useState, ReactNode } from "react";

type ProductType = Product["type"] | "all";

// Context value
interface ProductContextType {
  filter: ProductType;
  setFilter: (type: ProductType) => void;
  products: Product[];
  filteredProducts: Product[];
}

// Create context
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Provider props
export function ProductProvider({
  children,
  products,
}: {
  children: ReactNode;
  products: Product[];
}) {
  const [filter, setFilter] = useState<ProductType>("all");

  const filteredProducts =
    filter !== "all" ? products.filter((product) => product.type === filter) : products;

  return (
    <ProductContext.Provider value={{ filter, setFilter, products, filteredProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

// Hook to use context easily
export function useProductContext() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used inside ProductProvider");
  }
  return context;
}
