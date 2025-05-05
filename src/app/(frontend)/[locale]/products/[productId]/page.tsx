import { getPayload } from "payload";
import config from "@payload-config";
import { notFound } from "next/navigation";
import ProductPageClient from "./page.client";

export async function generateStaticParams() {
  const payload = await getPayload({ config });
  const products = await payload.find({
    collection: "products",
    pagination: false,
  });

  return products.docs.map((pro) => ({ productId: pro.slug }));
}

export default async function ProductPage({ params }: ServerPageProps<"productId">) {
  const { locale, productId } = await params;
  const payload = await getPayload({ config });

  const _product = await payload.find({
    collection: "products",
    locale: locale as "ms-MY" | "en-GB",
    limit: 1,
    where: {
      slug: {
        equals: productId,
      },
    },
  });

  const product = _product.docs[0];

  if (!product) {
    notFound();
  }

  return <ProductPageClient product={product} />;
}
