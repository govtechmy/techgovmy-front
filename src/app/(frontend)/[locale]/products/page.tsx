import ProductPageClient from "./page.client";

export default async function ProductPage({ params }: PageProps) {
  const prms = await params;

  return <ProductPageClient />;
}
