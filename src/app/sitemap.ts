import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
const BASE_URL = process.env.BASE_URL
const posts:any = []
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url:  `${BASE_URL}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url:  `${BASE_URL}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url:  `${BASE_URL}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...posts.map((post:any)=>({
        url: `${BASE_URL}/blog/${post.slug}` ,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly" as any,
        priority: 0.9,
    }))
  ];
}
