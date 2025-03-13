"use client";
import Image from "next/image";
import { useProduct } from "../context";
import { Tag } from "@govtechmy/myds-react/tag";
import { ArrowBackIcon, ArrowOutgoingIcon } from "@govtechmy/myds-react/icon";
import { useRouter } from "@/lib/i18n/routing";
import ProductImages from "./product-images";

interface ProductPageProps {}

export default function ProductPage({}: ProductPageProps) {
  const { data, active } = useProduct();
  const router = useRouter();

  const flatProduct = Object.values(data).flat();
  const currentProduct = flatProduct.find((cp) => cp.slug === active);

  if (!currentProduct) {
    return null;
  }

  return (
    <div className="grid grid-cols-4 gap-4.5 md:grid-cols-8 md:gap-6 lg:grid-cols-12 w-full mx-auto">
      <div className="lg:col-start-2 col-span-full col-start-1 lg:max-w-[845px] mx-auto w-full lg:overflow-y-scroll lg:max-h-[calc(100vh-6rem)] lg:hide-scrollbar">
        <div
          onClick={() => router.push("/products")}
          className="py-8 flex w-fit items-center gap-2 lg:hidden text-txt-primary hover:cursor-pointer"
        >
          <ArrowBackIcon className="" />
          <p>Back</p>
        </div>
        <div className="flex w-full gap-6 lg:py-8 pb-8 lg:sticky lg:top-0 lg:z-10 bg-bg-white lg:hide-scrollbar ">
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
          <ProductImages />
          <div className="py-6 max-w-[350px] md:max-w-[600px] lg:max-w-none w-full mx-auto">
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
