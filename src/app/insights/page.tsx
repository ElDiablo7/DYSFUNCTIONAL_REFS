import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { generatePageMetadata } from '@/lib/seo';
import { getAllInsights } from '@/content/insights';
import { Clock, User, ArrowRight } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'Insights & Articles',
  description: 'Articles, guides and insights on rugby refereeing and tournament organisation.',
});

export default function InsightsIndexPage() {
  const articles = getAllInsights();

  return (
    <div className="py-20">
      <div className="container-wide">
        <Breadcrumbs items={[{ label: 'Insights' }]} />
        
        <div className="mt-12 text-center md:text-left">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
            <span className="text-pink">Referee</span> Insights
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 md:mx-0 mx-auto">
            Practical advice, tournament planning guides, and perspectives from the middle of the pitch.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/insights/${article.slug}`}
              className="card group flex flex-col p-6"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h2 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-wide text-white group-hover:text-gold-bright transition-colors">
                {article.title}
              </h2>
              
              <p className="mt-4 flex-grow text-sm leading-relaxed text-gray-400 line-clamp-3">
                {article.excerpt}
              </p>
              
              <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {article.readingTime} min
                  </span>
                </div>
                <ArrowRight className="h-4 w-4 text-pink transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
