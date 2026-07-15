import { siteConfig } from '@/config/site';

/**
 * SEO HELPER
 * ==========
 * Generates consistent metadata for all pages.
 * Place an SEO_NOTE comment where business information
 * needs to be inserted.
 */

export function generatePageMetadata({
  title,
  description,
  path = '',
  noIndex = false,
  image,
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  image?: string;
}) {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || siteConfig.seo.ogImage;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
      locale: 'en_GB',
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: `${title} | ${siteConfig.name}`,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
