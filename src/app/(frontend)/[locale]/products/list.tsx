"use client";

import { Link } from "@/lib/i18n/routing";
import { Button, ButtonIcon } from "@govtechmy/myds-react/button";
import { ArrowForwardIcon } from "@govtechmy/myds-react/icon";
import Image from "next/image";
import { useProductContext } from "./context";
import { useTranslations } from "next-intl";

export default function ProductList() {
  const { filteredProducts } = useProductContext();
  const t = useTranslations("Product");

  const products = filteredProducts;

  if (products.length === 0) {
    return <p className="text-body-xs text-txt-black-500">{t("not-found")}</p>;
  }

  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
      {products.map((product, index) => (
        <div key={`${product.slug}-${index}`} className="flex w-full flex-col gap-6">
          <div className="relative h-[217.4px] w-full overflow-hidden rounded-lg border border-otl-gray-200 md:h-[178.8px] md:w-[288px] lg:h-[155.3px] lg:w-[250px] xl:h-[200px] xl:w-[322px]">
            <Image
              alt={product.name}
              src={
                typeof product.images[0].image !== "string" &&
                product.images[0].image &&
                product.images[0].image.url
                  ? product.images[0].image.url
                  : ""
              }
              fill={true}
              className="absolute"
            />
          </div>

          <div className="flex grow flex-col gap-2">
            <h6 className="text-body-xl font-semibold">{product.name}</h6>
            <p className="line-clamp-3 text-body-md text-txt-black-500">{product.description}</p>

            <div className="flex-1 content-end pt-3">
              <Link href={`/products/${product.slug}`}>
                <Button
                  className="border-bg-black-900 bg-bg-black-800 hover:bg-bg-black-800/80"
                  size={"small"}
                >
                  More Details
                  <ButtonIcon>
                    <ArrowForwardIcon />
                  </ButtonIcon>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
