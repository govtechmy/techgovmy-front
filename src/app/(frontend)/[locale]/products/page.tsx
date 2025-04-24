import { cn } from "@/lib/utils";
import ProductFilter from "./filter";
import ProductList from "./list";

export const revalidate = 60;

export default async function ProductPage() {
  return (
    <>
      <section
        className={cn(
          "mx-auto grid h-[700px] w-full grid-cols-4 gap-4.5 px-10 md:h-[700px] md:grid-cols-8 md:gap-6 md:px-[84px] lg:h-[500px] lg:grid-cols-12",
          // Image background
          "bg-[url('/static/images/products/img-bg-hero-mobile.svg')] bg-cover bg-center bg-no-repeat md:bg-[url('/static/images/products/img-bg-hero-tablet.svg')] lg:bg-[url('/static/images/products/img-bg-hero-desktop.svg')]",
        )}
      >
        <div className="col-span-full flex w-full max-w-[350px] flex-col items-center gap-6 py-16 md:max-w-[600px] lg:mx-auto lg:max-w-screen-xl lg:flex-row">
          <div className="z-10 w-full space-y-4.5 lg:max-w-[628px]">
            <h1 className="font-heading text-heading-lg font-semibold">
              GovTech Malaysia Products
            </h1>
            <p className="text-body-md text-txt-black-500">
              Our solutions make government services more accessible, efficient, and user-friendly
              for everyone.
            </p>

            <div className="flex w-full flex-wrap items-start gap-6 md:flex-nowrap">
              <div className="flex-1 space-y-3">
                <p className="text-heading-lg font-semibold text-txt-govtech-600">9</p>
                <p className="text-body-md font-medium text-txt-black-500">Projek Keseluruhan</p>
              </div>
              <div className="flex-1 space-y-3">
                <p className="text-heading-lg font-semibold text-txt-govtech-600">3</p>
                <p className="text-body-md font-medium text-txt-black-500">Siap Dibangunkan</p>
              </div>
              <div className="flex-1 space-y-3">
                <p className="text-heading-lg font-semibold text-txt-govtech-600">6</p>
                <p className="text-body-md font-medium text-txt-black-500">Dalam Pembangunan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={cn(
          "mx-auto mb-9 grid w-full flex-1 grid-cols-4 gap-4.5 bg-bg-white px-4.5 md:grid-cols-8 md:gap-6 md:px-6 lg:grid-cols-12",
        )}
      >
        <div
          className={cn(
            "col-span-full mx-auto w-full max-w-[390px] py-6 md:max-w-[600px] lg:max-w-screen-xl",
          )}
        >
          <div className="space-y-12 lg:px-[109px]">
            <ProductFilter />
            <ProductList />
          </div>
        </div>
      </section>
    </>
  );
}
