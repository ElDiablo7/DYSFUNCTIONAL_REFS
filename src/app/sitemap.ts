import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { getAllServices } from '@/content/services';
import { getAllReferees } from '@/content/referees';
import { getUpcomingEvents, getPastEvents } from '@/content/events';
import { faqs } from '@/content/faq';

export default function sitemap(): MetadataRoute.Sitemap {
  const url = siteConfig.url;

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${url}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${url}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${url}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${url}/referees`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${url}/events`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${url}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${url}/insights`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${url}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${url}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${url}/book`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${url}/join`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamic service routes
  const serviceRoutes: MetadataRoute.Sitemap = getAllServices().map((service) => ({
    url: `${url}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Dynamic referee routes
  const refereeRoutes: MetadataRoute.Sitemap = getAllReferees().map((referee) => ({
    url: `${url}/referees/${referee.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Dynamic event routes
  const allEvents = [...getUpcomingEvents(), ...getPastEvents()];
  const eventRoutes: MetadataRoute.Sitemap = allEvents.map((event) => ({
    url: `${url}/events/${event.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Legal routes (lower priority)
  const legalRoutes: MetadataRoute.Sitemap = siteConfig.navigation.legal.map((item) => ({
    url: `${url}${item.href}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.3,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...refereeRoutes,
    ...eventRoutes,
    ...legalRoutes,
  ];
}
