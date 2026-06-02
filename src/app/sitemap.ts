import type { MetadataRoute } from "next"
import { tutorials, siteConfig } from "@/lib/tutorials"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1 },
    { url: `${siteConfig.url}/tutorials`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${siteConfig.url}/learning-paths`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${siteConfig.url}/sandbox`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.6 },
  ]

  const tutorialRoutes = tutorials.map((tutorial) => ({
    url: `${siteConfig.url}/tutorials/${tutorial.slug}`,
    lastModified: new Date(tutorial.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...tutorialRoutes]
}
