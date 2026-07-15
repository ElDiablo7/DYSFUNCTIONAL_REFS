import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ServiceJsonLd } from '@/components/seo/JsonLd';
import { generatePageMetadata } from '@/lib/seo';
import { getAllServices, getServiceBySlug } from '@/content/services';
import { siteConfig } from '@/config/site';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  return getAllServices().map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return generatePageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getAllServices()
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  return (
    <>
      <ServiceJsonLd
        name={service.title}
        description={service.description}
        url={`${siteConfig.url}/services/${service.slug}`}
      />
      <div className="py-20">
        <div className="container-narrow">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: service.title },
            ]}
          />

          <div className="mt-12">
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            
            <p className="mt-6 text-xl leading-relaxed text-gray-300">
              {service.description}
            </p>

            <div className="mt-10 rounded-2xl border border-white/10 bg-navy/30 p-8">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-wide text-gold-bright">
                Key Features
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <article className="prose-brand mt-16 max-w-none">
              <ReactMarkdown>{service.fullContent}</ReactMarkdown>
            </article>

            <div className="mt-16 text-center">
              <Link href="/book" className="btn-primary inline-flex gap-2 text-lg">
                {service.cta}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="container-wide mt-24">
          <div className="border-t border-white/10 pt-16">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wide text-white">
              Other <span className="text-metallic-gold">Services</span>
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {relatedServices.map((related) => (
                <Link
                  key={related.id}
                  href={`/services/${related.slug}`}
                  className="card group p-6"
                >
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase text-white group-hover:text-pink transition-colors">
                    {related.shortTitle}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-gray-400">
                    {related.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
