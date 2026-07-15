import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { generatePageMetadata } from '@/lib/seo';
import { getUpcomingEvents, getPastEvents } from '@/content/events';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'Events & Assignments',
  description: 'Upcoming tournaments and fixtures featuring The Dysfunctional Referees.',
});

export default function EventsIndexPage() {
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

  return (
    <div className="py-20">
      <div className="container-wide">
        <Breadcrumbs items={[{ label: 'Events' }]} />
        
        <div className="mt-12 text-center md:text-left">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
            Events & <span className="text-metallic-gold">Assignments</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 md:mx-0 mx-auto">
            Where to find us blowing the whistle next. We officiate at tournaments, festivals, and special fixtures across the UK.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wide text-white mb-8 flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink"></span>
            </span>
            Upcoming Events
          </h2>

          {upcomingEvents.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.slug}`}
                  className="card group p-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-pink/10 px-3 py-0.5 text-xs font-medium text-pink">
                      {event.format}
                    </span>
                    <span className="rounded-full bg-gold/10 px-3 py-0.5 text-xs font-medium text-gold-bright">
                      {event.status}
                    </span>
                  </div>

                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-wide text-white group-hover:text-pink transition-colors">
                    {event.name}
                  </h3>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="h-4 w-4 text-gold" />
                      {new Date(event.date).toLocaleDateString('en-GB', {
                        weekday: 'short',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                      {event.endDate && ` - ${new Date(event.endDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}`}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <MapPin className="h-4 w-4 text-gold" />
                      {event.location}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-1 text-sm font-medium text-pink">
                    Event Details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/5 bg-navy/30 p-12 text-center">
              <Calendar className="mx-auto h-12 w-12 text-gray-600" />
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold uppercase text-white">
                New assignments will be announced here
              </h3>
              <p className="mt-2 text-gray-400 max-w-md mx-auto">
                Our upcoming fixtures and tournament schedules are currently being finalised.
              </p>
              <div className="mt-8">
                <Link href="/book" className="btn-primary">
                  Book Officials for Your Event
                </Link>
              </div>
            </div>
          )}
        </div>

        {pastEvents.length > 0 && (
          <div className="mt-24 border-t border-white/10 pt-16">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wide text-gray-400 mb-8">
              Past Events
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {pastEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.slug}`}
                  className="rounded-xl border border-white/5 bg-navy/20 p-5 hover:border-gold/20 transition-colors group"
                >
                  <h3 className="font-[family-name:var(--font-display)] text-base font-bold uppercase tracking-wide text-gray-300 group-hover:text-white transition-colors">
                    {event.name}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="h-3 w-3" />
                    {new Date(event.date).toLocaleDateString('en-GB', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
