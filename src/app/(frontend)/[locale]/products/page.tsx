import { cn } from "@/lib/utils";
import ProductFilter from "./filter";
import ProductList from "./list";
import config from "@payload-config";
import { getPayload } from "payload";
import ProductStatistic from "@/components/product-statistic";
import { ProductProvider } from "./context";

export default async function ProductPage({ params }: ServerPageProps) {
  const { locale } = await params;
  const payload = await getPayload({ config });

  const siteInfo = await payload.findGlobal({
    slug: "site-info",
    locale: locale as "en-GB" | "ms-MY",
    depth: 3,
  });

  const products = await payload.find({
    collection: "products",
    locale: locale as "en-GB" | "ms-MY",
    pagination: false,
  });

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
          <div className="z-10 w-full space-y-4.5 lg:max-w-[628px] lg:pl-[109px]">
            <h1 className="font-heading text-heading-lg font-semibold">
              {siteInfo.products["hero-title"]}
            </h1>
            <p className="text-body-md text-txt-black-500">
              {siteInfo.products["hero-description"]}
            </p>

            <ProductStatistic siteInfo={siteInfo} products={products.docs} />
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
            <ProductProvider products={products.docs}>
              <ProductFilter />
              <ProductList />
            </ProductProvider>
          </div>
        </div>
      </section>
    </>
  );
}
