export const revalidate = async (slug: string) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/revalidate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: process.env.REVALIDATE_SECRET_TOKEN,
          path: `/${slug}`,
        }),
      });
    } catch (error) {
      console.error('Error revalidating from Global:', error);
    }
  };
  