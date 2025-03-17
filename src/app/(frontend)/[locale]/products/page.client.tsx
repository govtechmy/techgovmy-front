"use client";
import { useProduct } from "./context";
import { Link } from "@/lib/i18n/routing";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@govtechmy/myds-react/icon";
import Image from "next/image";
import { Fragment } from "react";

interface ProductPageProps {}

export default function ProductPageClient({}: ProductPageProps) {
  const { data } = useProduct();

  const sidebar = data;

  return (
    <div className="w-full space-y-3 pb-9">
      {Object.entries(sidebar).map(([type, content], index) => (
        <Fragment key={index}>
          <p className="pt-8 pb-1 gap-4.5 text-body-xl font-semibold">{type}</p>

          <div className="grid md:grid-cols-8 lg:grid-cols-12 gap-6">
            {content.map((ct, idx2) => {
              const content = (
                <div
                  className={cn(
                    "p-3 gap-4 border border-otl-gray-200 rounded-md bg-bg-dialog flex items-center col-span-4",
                    type === "In Development" && "grayscale border-opacity-10 opacity-30",
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
                  <div className="flex-1">
                    <p className="text-body-md font-semibold">{ct.name}</p>
                    <p className="text-bg-black-500">{ct.url}</p>
                  </div>
                  {type !== "In Development" && <ChevronRightIcon className="size-4.5" />}
                </div>
              );

              if (type === "In Development") {
                return <Fragment key={`${ct.name}-${idx2}`}>{content}</Fragment>;
              }

              return (
                <Link
                  key={`${ct.name}-${idx2}`}
                  href={`/products/${ct.slug}`}
                  className="col-span-4"
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
