import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache'


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { path } = body;

    if (path === null || path === undefined) {
      return NextResponse.json({ message: 'Missing path' }, { status: 400 });
    }

    if (path === "") { // revalidate EVERYTHING
        revalidatePath("/")
        revalidatePath("/about-us")
        revalidatePath("/contact-us")
        revalidatePath("/products")
    } else {
        revalidatePath(path)
    }

    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating', error: err }, { status: 500 });
  }
}
