import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const ogImageUrl = `${siteConfig.url}/dmplay-most-popular-game-site-india.webp`;

  return [
    {
      url: siteConfig.url,
      lastModified: siteConfig.lastUpdated,
      changeFrequency: "daily",
      priority: 1.0,
      images: [ogImageUrl],
    },
    {
      url: `${siteConfig.url}/dm-play-login`,
      lastModified: siteConfig.lastUpdated,
      changeFrequency: "daily",
      priority: 0.9,
      images: [ogImageUrl],
    },
    {
      url: `${siteConfig.url}/dm-play-register`,
      lastModified: siteConfig.lastUpdated,
      changeFrequency: "daily",
      priority: 0.9,
      images: [ogImageUrl],
    },
    {
      url: `${siteConfig.url}/dm-play-withdrawal`,
      lastModified: siteConfig.lastUpdated,
      changeFrequency: "daily",
      priority: 0.9,
      images: [ogImageUrl],
    },
    {
      url: `${siteConfig.url}/dm-play-invitation-code`,
      lastModified: siteConfig.lastUpdated,
      changeFrequency: "daily",
      priority: 0.9,
      images: [ogImageUrl],
    },
    {
      url: `${siteConfig.url}/wingo-prediction-trick`,
      lastModified: siteConfig.lastUpdated,
      changeFrequency: "daily",
      priority: 0.9,
      images: [ogImageUrl],
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: siteConfig.lastUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [ogImageUrl],
    },
    {
      url: `${siteConfig.url}/responsible-gaming`,
      lastModified: siteConfig.lastUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [ogImageUrl],
    },
    {
      url: `${siteConfig.url}/privacy`,
      lastModified: siteConfig.lastUpdated,
      changeFrequency: "yearly",
      priority: 0.7,
      images: [ogImageUrl],
    },
    {
      url: `${siteConfig.url}/terms`,
      lastModified: siteConfig.lastUpdated,
      changeFrequency: "yearly",
      priority: 0.7,
      images: [ogImageUrl],
    },
  ];
}
