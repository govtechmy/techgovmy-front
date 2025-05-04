"use client";
import { useRouter } from "next/navigation";
import { Tag } from "@govtechmy/myds-react/tag";
import { ArrowBackIcon, ArrowOutgoingIcon } from "@govtechmy/myds-react/icon";
import ProductImages from "./product-images";
import Timeline from "./timeline";
import Image from "next/image";
import { Product } from "@/payload-types";
import { useTranslations } from "next-intl";
import { DateTime } from "luxon";

export default function ProductPageClient({ product }: { product: Product }) {
  const router = useRouter();
  const t = useTranslations("Product");

  return (
    <div className="mx-auto grid w-full grid-cols-4 gap-4.5 md:grid-cols-8 md:gap-6 lg:grid-cols-12">
      <div className="col-span-full mx-auto flex w-full max-w-[350px] flex-col items-center gap-6 py-6 md:max-w-full md:px-6 lg:mx-auto lg:grid lg:max-w-screen-xl lg:grid-cols-12 lg:px-4.5 lg:py-16 xl:px-0">
        <div className="flex h-full w-full flex-col gap-12 lg:col-span-6 lg:max-w-[628px]">
          <div
            onClick={() => router.push("/products")}
            className="flex w-fit items-center gap-2 text-txt-primary hover:cursor-pointer"
          >
            <ArrowBackIcon className="" />
            <p>{t("back")}</p>
          </div>

          <div className="hidden lg:block">
            <ProductImages
              images={product.images.map(
                (img) => (typeof img.image !== "string" && img.image?.url) || "",
              )}
            />
          </div>
        </div>
        <div className="hidden lg:col-span-1 lg:block"></div>
        <div className="flex h-full w-full flex-col gap-12 lg:col-span-5 lg:max-w-[519px]">
          <div
            onClick={() => router.push("/products")}
            className="hidden w-fit items-center gap-2 text-txt-primary hover:cursor-pointer lg:invisible"
          >
            <ArrowBackIcon className="" />
            <p>{t("back")}</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex size-[72px] items-center justify-center rounded-md border border-otl-gray-200 bg-bg-dialog-active p-2 shadow-card">
              <Image
                alt={`${product.name}-logo`}
                src={(typeof product.logo !== "string" && product.logo.url) || ""}
                width={56}
                height={56}
                className="absolute size-[56px] object-contain"
              />
            </div>

            <div className="space-y-3">
              <h1 className="text-heading-xs font-semibold">{product.name}</h1>
              <p className="text-sm text-txt-black-500">{product.description}</p>
              <Tag
                className="group w-fit bg-bg-white hover:cursor-pointer"
                variant="primary"
                size="small"
                mode="pill"
              >
                {product.url}
                <ArrowOutgoingIcon className="size-3 transition-transform group-hover:size-4" />
              </Tag>
            </div>

            <div className="block lg:hidden">
              <ProductImages
                images={product.images.map(
                  (img) => (typeof img.image !== "string" && img.image?.url) || "",
                )}
              />
            </div>

            <div className="hidden h-px bg-otl-divider lg:block" />

            <div className="space-y-1.5">
              <h6 className="text-body-sm font-semibold">{t("project-start")}</h6>
              <p className="text-sm text-txt-black-500">
                {DateTime.fromISO(product.project_start_date).toFormat("MMM yyyy")}
              </p>
            </div>

            <div className="h-px bg-otl-divider" />

            <div className="space-y-1.5">
              <h6 className="text-body-sm font-semibold">{t("project-status")}</h6>
              <Timeline
                items={product.status ? product.status?.map((stat) => stat.status) : []}
                active={product.status ? product.status.findIndex((stat) => stat.isActive) : 0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
