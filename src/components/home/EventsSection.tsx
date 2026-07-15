import Link from 'next/link';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import type { Event } from '@/lib/types';

interface EventsSectionProps {
  events: Event[];
}

export function EventsSection({ events }: EventsSectionProps) {
  return (
    <section
      className="relative border-y border-gold/10 bg-navy/30 py-20 lg:py-28"
      aria-labelledby="events-heading"
    >
      <div className="container-wide">
        <div className="text-center">
          <p className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.2em] text-pink">
            Where We&apos;ll Be
          </p>
          <h2
            id="events-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl"
          >
            Upcoming{' '}
            <span className="text-metallic-gold">Events</span>
          </h2>
          <div className="section-divider mt-6" />
        </div>

        {events.length > 0 ? (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
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

                <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wide text-white">
                  {event.name}
                </h3>

                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="h-4 w-4 text-gold" />
                    {new Date(event.date).toLocaleDateString('en-GB', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="h-4 w-4 text-gold" />
                    {event.location}
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-pink">
                  View Details
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-14 text-center">
            <div className="mx-auto max-w-md rounded-2xl border border-gold/10 bg-midnight/50 p-10">
              <Calendar className="mx-auto h-12 w-12 text-gold/30" />
              <p className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold uppercase tracking-wide text-gray-300">
                New assignments will be announced here.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Follow us for updates on upcoming tournaments and events.
              </p>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link href="/events" className="btn-secondary">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
