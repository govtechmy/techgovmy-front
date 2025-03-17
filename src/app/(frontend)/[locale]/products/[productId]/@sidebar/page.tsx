"use client";
import { Link } from "@/lib/i18n/routing";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, Fragment } from "react";
import { useProduct } from "../../context";

interface ProductPageSidebarProps {}

const ProductPageSidebar: FC<ProductPageSidebarProps> = ({}) => {
  const { data, active } = useProduct();
  const sidebar = data;

  return (
    <div className="hidden lg:block w-full lg:w-[300px] lg:min-h-fit">
      <div className="overflow-y-scroll overflow-x-visible max-h-[calc(100vh-6rem)] hide-scrollbar flex flex-col gap-3 pb-12 lg:w-[302px] px-2">
        {Object.entries(sidebar).map(([type, content], index) => (
          <Fragment key={index}>
            <p className="pt-8 pb-1 gap-4.5 text-body-xl font-semibold">{type}</p>
            {content.map((ct, idx2) => {
              const content = (
                <div
                  className={cn(
                    "p-3 gap-4 w-full border border-otl-gray-200 rounded-md bg-bg-dialog flex items-center",
                    type === "In Development" && "grayscale border-opacity-10 opacity-30",
                    active === ct.slug &&
                      type !== "In Development" &&
                      "ring ring-fr-primary border border-otl-primary-300",
                  )}
                >
                  <div className="relative flex w-12 h-12 items-center justify-center bg-bg-dialog-active border border-otl-gray-200 rounded-xs shadow-card">
                    <Image
                      alt={ct.name}
                      src={ct.icon}
                      width={32}
                      height={32}
                      className="absolute"
                    />
                  </div>
                  <div>
                    <p className="text-body-md font-semibold">{ct.name}</p>
                    <p className="text-bg-black-500">{ct.url}</p>
                  </div>
                </div>
              );

              if (type === "In Development") {
                return <Fragment key={`${ct.name}-${idx2}`}>{content}</Fragment>;
              }

              return (
                <Link key={`${ct.name}-${idx2}`} href={`/products/${ct.slug}`}>
                  {content}
                </Link>
              );
            })}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProductPageSidebar;
