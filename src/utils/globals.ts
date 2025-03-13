export async function fetchGlobal(locale: string, globalSlug: string) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/globals/${globalSlug}?locale=${locale}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch global: ${globalSlug}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching global:", error);
      return null;
    }
}
  