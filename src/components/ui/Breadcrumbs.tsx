import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: item.href } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <Link href="/" className="transition-colors hover:text-pink">
          Home
        </Link>
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-2">
            <ChevronRight className="separator h-3.5 w-3.5" />
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className="transition-colors hover:text-pink">
                {item.label}
              </Link>
            ) : (
              <span className="current">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
