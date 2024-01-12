import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
 const BASE_URL  = process.env.BASE_URL
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}