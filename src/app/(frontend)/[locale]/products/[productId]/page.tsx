"use client";
import Image from "next/image";
import { Tag } from "@govtechmy/myds-react/tag";
import { ArrowBackIcon, ArrowOutgoingIcon } from "@govtechmy/myds-react/icon";
import { useRouter } from "@/lib/i18n/routing";
import ProductImages from "./product-images";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { dummy } from "./dummy";

interface ProductPageProps {}

export const revalidate = 60;

export default function ProductPage({}: ProductPageProps) {
  const router = useRouter();

  const currentProduct: any = null;

  if (!currentProduct) {
    return null;
  }

  return (
    <div className="mx-auto grid w-full grid-cols-4 gap-4.5 md:grid-cols-8 md:gap-6 lg:grid-cols-12">
      <div className="lg:hide-scrollbar col-span-full col-start-1 mx-auto w-full lg:col-start-2 lg:max-h-[calc(100vh-6rem)] lg:max-w-[845px] lg:overflow-y-scroll">
        <div
          onClick={() => router.push("/products")}
          className="flex w-fit items-center gap-2 py-8 text-txt-primary hover:cursor-pointer lg:hidden"
        >
          <ArrowBackIcon className="" />
          <p>Back</p>
        </div>
        <div className="lg:hide-scrollbar flex w-full gap-6 bg-bg-white pb-8 lg:sticky lg:top-0 lg:z-10 lg:py-8">
          <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-md border border-otl-gray-200 shadow-card">
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
              className="group w-fit bg-bg-white hover:cursor-pointer"
              variant="primary"
              size="small"
              mode="pill"
            >
              {currentProduct.url}
              <ArrowOutgoingIcon className="size-3 transition-transform group-hover:size-4" />
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
          <div className="mx-auto w-full max-w-[350px] py-6 md:max-w-[600px] lg:max-w-none">
            <RichText
              data={dummy as any}
              className="article [&_em]:text-dim-500 flex flex-col gap-6 [&_blockquote]:flex [&_blockquote]:flex-col [&_blockquote]:gap-3 [&_em]:text-base [&_p]:whitespace-pre-line"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
