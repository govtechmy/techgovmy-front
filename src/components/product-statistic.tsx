import { Product, SiteInfo } from "@/payload-types";

export default function ProductStatistic({
  siteInfo,
  products,
}: {
  siteInfo: SiteInfo;
  products: Product[];
}) {
  const total = products.length || 0;
  const completed =
    products.filter(
      (product) =>
        product.status?.find((status) => status.isActive && status.phase_index === "1") || false,
    ).length || 0;

  const under_dev =
    products.filter(
      (product) =>
        product.status?.find((status) => status.isActive && status.phase_index === "0") || false,
    ).length || 0;

  return (
    <div className="flex w-full flex-wrap items-start gap-6 md:flex-nowrap">
      <div className="flex-1 space-y-3">
        <p className="text-heading-lg font-semibold text-txt-govtech-600">{total}</p>
        <p className="text-body-md font-medium text-txt-black-500">
          {siteInfo.products.all_product}
        </p>
      </div>
      <div className="flex-1 space-y-3">
        <p className="text-heading-lg font-semibold text-txt-govtech-600">{completed}</p>
        <p className="text-body-md font-medium text-txt-black-500">{siteInfo.products.completed}</p>
      </div>
      <div className="flex-1 space-y-3">
        <p className="text-heading-lg font-semibold text-txt-govtech-600">{under_dev}</p>
        <p className="text-body-md font-medium text-txt-black-500">{siteInfo.products.under_dev}</p>
      </div>
    </div>
  );
}
