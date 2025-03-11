"use client";
import Image from "next/image";
import { useProduct } from "./context";
import { useRouter } from "@/lib/i18n/routing";
import { useEffect } from "react";

interface ProductPageProps {}

export default function ProductPage({}: ProductPageProps) {
  const { data, active } = useProduct();
  const router = useRouter();

  useEffect(() => {
    if (!active) {
      router.replace(`/products/${data["Active"][0].slug}`);
    }
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4.5 md:grid-cols-8 md:gap-6 lg:grid-cols-12 w-full mx-auto">
      <div className="col-start-4 col-span-8 max-w-[845px] px-6 mx-auto w-full">Loading...</div>
    </div>
  );
}
