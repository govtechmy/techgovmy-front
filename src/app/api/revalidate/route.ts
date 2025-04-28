import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache'
import { getPayload } from "payload";
import config from "@payload-config";


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { path } = body;

    // get all product id because we need to revalidate all product pages
    const payload = await getPayload({ config });
    const products = await payload.find({
      collection: 'products',
      limit: 1000,
    });

    const productIds = products.docs.map(product => product.id);

    if (path === null || path === undefined) {
      return NextResponse.json({ message: 'Missing path' }, { status: 400 });
    }

    if (path === "") { // revalidate EVERYTHING
        revalidatePath("/")
        revalidatePath("/about-us")
        revalidatePath("/contact-us")
        revalidatePath("/products")
        for (const productId of productIds) {
            revalidatePath(`/products/${productId}`);
        }
    } else {
        revalidatePath(path)
    }

    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating', error: err }, { status: 500 });
  }
}
