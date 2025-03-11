"use client";
import Image from "next/image";
import { useProduct } from "../context";
import { Tag } from "@govtechmy/myds-react/tag";
import { ArrowOutgoingIcon } from "@govtechmy/myds-react/icon";

interface ProductPageProps {}

export default function ProductPage({}: ProductPageProps) {
  const { data, active } = useProduct();

  const flatProduct = Object.values(data).flat();
  const currentProduct = flatProduct.find((cp) => cp.slug === active);

  if (!currentProduct) {
    return null;
  }

  return (
    <div className="grid grid-cols-4 gap-4.5 md:grid-cols-8 md:gap-6 lg:grid-cols-12 w-full mx-auto">
      <div className="col-start-2 col-span-full max-w-[845px] mx-auto w-full overflow-y-scroll max-h-[calc(100vh-6rem)] hide-scrollbar">
        <div className="flex gap-6 py-8 sticky top-0 z-10 bg-bg-white hide-scrollbar ">
          <div className="w-[72px] h-[72px] relative border border-otl-gray-200 shadow-card flex items-center justify-center rounded-md">
            <Image
              alt={currentProduct.name}
              src={currentProduct.icon}
              width={56}
              height={56}
              className="absolute object-contain"
            />
          </div>
          <div className="space-y-3">
            <h3 className="text-heading-xs font-semibold">{currentProduct.name}</h3>
            <Tag
              className="w-fit hover:cursor-pointer bg-bg-white group"
              variant="primary"
              size="small"
              mode="pill"
            >
              {currentProduct.url}
              <ArrowOutgoingIcon className="size-3 group-hover:size-4 transition-transform" />
            </Tag>
            <div className="flex items-center gap-3">
              <p className="text-body-sm text-bg-black-500">Since {currentProduct.launch_date}</p>

              <Tag className="w-fit" variant="success" size="small" mode="pill" dot={true}>
                {currentProduct.status}
              </Tag>
            </div>
          </div>
        </div>
        <div className="h-full w-full space-y-6">
          <div className="w-full lg:h-[485.4px] relative border border-otl-gray-200 rounded-md overflow-hidden">
            <Image
              alt="Product Image Carousel"
              src={"/static/product-carousel/image-slider.png"}
              fill={true}
              className="absolute object-center"
            />
          </div>
          <div className="py-6">
            <p className="text-bg-black-500">
              TO USE MARKDOWN HERE:::: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequate. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequate. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem
              ipsum dolor sit amet, consectetur adipiscing. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequate. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequate. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem
              ipsum dolor sit amet, consectetur adipiscing. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequate. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequate. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem
              ipsum dolor sit amet, consectetur adipiscing. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
