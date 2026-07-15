import { Event } from '@/lib/types';

/**
 * EVENT DATA
 * ==========
 * Add real events here as they are confirmed.
 * Past events should have status: 'completed'.
 * Do not invent event partners or attendance figures.
 */
export const events: Event[] = [
  // No events have been confirmed yet.
  // When adding events, use this format:
  // {
  //   id: 'evt-01',
  //   slug: 'example-sevens-tournament-2025',
  //   name: 'Example Sevens Tournament',
  //   date: '2025-06-15',
  //   location: 'City, Region',
  //   venue: 'Venue Name',
  //   format: 'Sevens',
  //   status: 'upcoming',
  //   description: 'A brief description of the event.',
  //   image: '/assets/events/example.jpg',
  // },
];

export function getUpcomingEvents(): Event[] {
  const now = new Date().toISOString().split('T')[0];
  return events
    .filter((e) => e.status === 'upcoming' || e.status === 'confirmed')
    .filter((e) => e.date >= now)
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getPastEvents(): Event[] {
  return events
    .filter((e) => e.status === 'completed')
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug);
}

export function getAllEvents(): Event[] {
  return [...events].sort((a, b) => b.date.localeCompare(a.date));
}
