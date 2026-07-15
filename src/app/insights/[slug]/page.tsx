import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ArticleJsonLd } from '@/components/seo/JsonLd';
import { generatePageMetadata } from '@/lib/seo';
import { getAllInsights, getInsightBySlug } from '@/content/insights';
import { siteConfig } from '@/config/site';
import { Clock, User, CalendarDays } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  return getAllInsights().map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getInsightBySlug(params.slug);
  if (!article) return {};

  return generatePageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${article.slug}`,
  });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getInsightBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getAllInsights()
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <>
      <ArticleJsonLd
        title={article.title}
        description={article.excerpt}
        authorName={article.author}
        datePublished={article.publishedAt}
        dateModified={article.updatedAt || article.publishedAt}
        url={`${siteConfig.url}/insights/${article.slug}`}
        images={article.image ? [article.image] : []}
      />
      
      <div className="py-20">
        <div className="container-narrow">
          <Breadcrumbs
            items={[
              { label: 'Insights', href: '/insights' },
              { label: article.title },
            ]}
          />

          <article className="mt-12">
            <header className="mb-12">
              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map(tag => (
                  <span key={tag} className="rounded-full bg-pink/10 px-3 py-1 text-xs font-medium text-pink">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl leading-tight">
                {article.title}
              </h1>
              
              <div className="mt-8 flex flex-wrap items-center gap-6 border-y border-white/10 py-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gold" />
                  {article.author}
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-gold" />
                  {new Date(article.publishedAt).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gold" />
                  {article.readingTime} min read
                </div>
              </div>
            </header>

            <div className="prose-brand max-w-none">
              <p className="lead text-xl text-gray-300 font-medium mb-10">
                {article.excerpt}
              </p>
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
            
            <div className="mt-16 rounded-2xl border border-gold/20 bg-gradient-to-br from-navy/30 to-midnight p-8 sm:p-10 text-center">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase text-white">
                Planning a Tournament?
              </h3>
              <p className="mt-3 text-gray-400 max-w-xl mx-auto">
                Take the stress out of your officiating requirements. Let us provide a coordinated, professional referee team for your event.
              </p>
              <div className="mt-8">
                <Link href="/book" className="btn-primary">
                  Book Match Officials
                </Link>
              </div>
            </div>
          </article>
        </div>

        {relatedArticles.length > 0 && (
          <div className="container-wide mt-24">
            <div className="border-t border-white/10 pt-16">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wide text-white mb-8">
                More <span className="text-metallic-gold">Insights</span>
              </h2>
              <div className="grid gap-6 sm:grid-cols-3">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    href={`/insights/${related.slug}`}
                    className="card group p-6"
                  >
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase text-white group-hover:text-pink transition-colors">
                      {related.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm text-gray-400">
                      {related.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
