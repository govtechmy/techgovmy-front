"use client";

import { useParams } from "next/navigation";
import { createContext, useContext, ReactNode } from "react";

type ProductInfo = {
  name: string;
  slug: string;
  launch_date: string | undefined;
  status: string;
  url: string;
  icon: string;
};

const ProductContext = createContext<{ data: Record<string, ProductInfo[]>; active?: string }>({
  data: {},
  active: "",
});

export const useProduct = () => useContext(ProductContext);

export default function ProductProvider({ children, data }: { children: ReactNode; data: any }) {
  const params = useParams();
  const _active = params.productId as string;

  return (
    <ProductContext.Provider value={{ data, active: _active }}>{children}</ProductContext.Provider>
  );
}
