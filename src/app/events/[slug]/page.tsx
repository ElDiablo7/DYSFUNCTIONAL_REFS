import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { EventJsonLd } from '@/components/seo/JsonLd';
import { generatePageMetadata } from '@/lib/seo';
import { getAllEvents, getEventBySlug } from '@/content/events';
import { siteConfig } from '@/config/site';
import { Calendar, MapPin, Trophy, Users, ArrowRight } from 'lucide-react';

export async function generateStaticParams() {
  return getAllEvents().map((event) => ({
    slug: event.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const event = getEventBySlug(params.slug);
  if (!event) return {};

  return generatePageMetadata({
    title: event.name,
    description: event.description || `The Dysfunctional Referees officiating at ${event.name}.`,
    path: `/events/${event.slug}`,
  });
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = getEventBySlug(params.slug);

  if (!event) {
    notFound();
  }

  // Determine if we have enough info to render valid EventJsonLd
  const hasFullEventData = event.venue && event.description;

  return (
    <>
      {hasFullEventData && (
        <EventJsonLd
          name={event.name}
          description={event.description}
          startDate={event.date}
          endDate={event.endDate || event.date}
          locationName={event.venue || event.location}
          locationAddress={event.location}
          url={`${siteConfig.url}/events/${event.slug}`}
        />
      )}
      
      <div className="py-20">
        <div className="container-narrow">
          <Breadcrumbs
            items={[
              { label: 'Events', href: '/events' },
              { label: event.name },
            ]}
          />

          <div className="mt-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="rounded-full bg-pink/10 px-4 py-1 text-sm font-medium text-pink">
                {event.format}
              </span>
              <span className={`rounded-full px-4 py-1 text-sm font-medium ${
                event.status === 'completed' ? 'bg-gray-800 text-gray-300' :
                event.status === 'cancelled' ? 'bg-red-900/50 text-red-300' :
                'bg-gold/10 text-gold-bright'
              }`}>
                {event.status.toUpperCase()}
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
              {event.name}
            </h1>
            
            <div className="mt-8 grid gap-4 sm:grid-cols-2 rounded-xl border border-white/10 bg-navy/30 p-6">
              <div className="flex items-start gap-3">
                <Calendar className="mt-0.5 h-5 w-5 text-gold" />
                <div>
                  <p className="text-sm font-medium text-gray-400">Date</p>
                  <p className="text-white mt-0.5">
                    {new Date(event.date).toLocaleDateString('en-GB', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                    {event.endDate && ` - ${new Date(event.endDate).toLocaleDateString('en-GB', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}`}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-gold" />
                <div>
                  <p className="text-sm font-medium text-gray-400">Location</p>
                  <p className="text-white mt-0.5">{event.venue ? `${event.venue}, ` : ''}{event.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 prose-brand max-w-none">
              <p className="text-lg leading-relaxed text-gray-300">{event.description}</p>
            </div>

            {event.refereeTeam && event.refereeTeam.length > 0 && (
              <div className="mt-12">
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wide text-white flex items-center gap-3">
                  <Users className="h-6 w-6 text-pink" />
                  Officiating Team
                </h2>
                <div className="section-divider mt-4 mb-6" />
                <ul className="grid gap-3 sm:grid-cols-2">
                  {event.refereeTeam.map((ref, index) => (
                    <li key={index} className="rounded-lg bg-white/5 p-4 text-white font-medium flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-gold" />
                      {ref}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-20 text-center rounded-2xl border border-gold/10 bg-gradient-to-br from-navy/30 to-midnight p-10">
              <Trophy className="mx-auto h-10 w-10 text-gold/50 mb-4" />
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase text-white">
                Hosting a similar event?
              </h3>
              <p className="mt-2 text-gray-400 max-w-md mx-auto">
                Secure a professional referee team for your next tournament or fixture.
              </p>
              <div className="mt-6">
                <Link href={`/book?event=${encodeURIComponent(event.name)}`} className="btn-primary inline-flex gap-2">
                  Enquire Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
