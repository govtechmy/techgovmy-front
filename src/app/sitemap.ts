import { MetadataRoute } from 'next';
import { routing } from '@/lib/i18n/routing';
import { getPayload } from 'payload';
import config from '@payload-config';
import { routes } from '@/lib/routes';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.APP_URL || 'https://techgovmy-front-git-staging-my-digital-gnu.vercel.app';
  const payload = await getPayload({ config });

  // Get all products
  const products = await payload.find({
    collection: 'products',
    depth: 0,
  });

  const routeArray = Object.values(routes);

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add static routes for each locale
  for (const locale of routing.locales) {
    for (const route of routeArray) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: route === '' ? 1 : 0.8,
      });
    }

    // Add product routes
    for (const product of products.docs) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/products/${product.slug}`,
        lastModified: new Date(product.updatedAt),
        changeFrequency: 'yearly',
        priority: 0.7,
      });
    }
  }

  return sitemapEntries;
} 