import { Testimonial } from '@/lib/types';

/**
 * TESTIMONIAL DATA
 * =================
 * Only add real, approved testimonials here.
 * Never fabricate or invent testimonials.
 * The testimonials section is hidden when this array is empty.
 */
export const testimonials: Testimonial[] = [
  // No approved testimonials yet.
  // When adding real testimonials, use this format:
  // {
  //   id: 'test-01',
  //   name: 'Real Person Name',
  //   role: 'Tournament Organiser',
  //   organisation: 'Real Organisation',
  //   quote: 'Their actual words about working with us.',
  //   approved: true,
  //   image: '/assets/testimonials/person.jpg',
  // },
];

export function getApprovedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.approved);
}
