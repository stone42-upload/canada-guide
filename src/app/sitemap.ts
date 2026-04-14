import type { MetadataRoute } from 'next';
import data from '@/data.json';
import { slugify } from '@/lib/utils';
import type { SiteData } from '@/lib/types';

const siteData = data as SiteData;
const BASE_URL = 'https://canadaguide.ca';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  const stepRoutes: MetadataRoute.Sitemap = siteData.immigration_steps.map(
    (step) => ({
      url: `${BASE_URL}/etapes/${step.order}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })
  );

  const universityRoutes: MetadataRoute.Sitemap =
    siteData.universities_ranking.map((uni) => ({
      url: `${BASE_URL}/universites/${slugify(uni.name)}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  const SLUG_MAP: Record<string, string> = {
    py_beginner: 'beginner',
    py_data_science: 'data_science',
    py_automation: 'automation',
  };

  const pythonRoutes: MetadataRoute.Sitemap =
    siteData.python_masterclass.modules.map((mod) => ({
      url: `${BASE_URL}/python/${SLUG_MAP[mod.id] ?? mod.id}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  return [...staticRoutes, ...stepRoutes, ...universityRoutes, ...pythonRoutes];
}
