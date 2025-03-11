export async function fetchGlobal(locale: string, globalSlug: string) {
    try {
      const response = await fetch(`http://127.0.0.1:3000/api/globals/${globalSlug}?locale=${locale}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch global: ${globalSlug}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching global:", error);
      return null;
    }
}
  