import type { MetadataRoute } from 'next'
import { routes } from '@/lib/routes'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.APP_URL || 'https://techgovmy-front-git-staging-my-digital-gnu.vercel.app'
  const allowedPaths = Object.values(routes);
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: allowedPaths,
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/_next/',
          '/static/',
          '/*.json$',
          '/*.xml$',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}