import { FAQ } from '@/lib/types';

export const faqs: FAQ[] = [
  {
    id: 'faq-01',
    question: 'How do I book rugby referees for a tournament?',
    answer: 'Use the booking form on our website or contact us directly by email. Let us know the date, location, format, number of pitches, and approximate number of matches. We will assess the officiating requirement and come back to you with a plan.',
    category: 'booking',
  },
  {
    id: 'faq-02',
    question: 'Can I request more than one referee?',
    answer: 'Absolutely. Most tournaments need multiple officials, and that is what we are built for. Tell us how many pitches you are running and the expected match schedule, and we will recommend the right team size.',
    category: 'booking',
  },
  {
    id: 'faq-03',
    question: 'Do you provide officials for rugby sevens and fifteens?',
    answer: 'Yes. We have referees experienced in both sevens and fifteens formats, as well as officials comfortable with touch, mixed-ability, and social rugby variants. Just let us know the format when you get in touch.',
    category: 'services',
  },
  {
    id: 'faq-04',
    question: 'How far in advance should I book?',
    answer: 'As early as possible. Popular tournament weekends fill up quickly, and the sooner you confirm, the more options we have when assembling your referee team. We recommend at least four to six weeks for tournaments and two weeks for individual fixtures where possible.',
    category: 'booking',
  },
  {
    id: 'faq-05',
    question: 'Can referees apply to join the network?',
    answer: 'Yes. We are always interested in hearing from qualified or developing referees who want to be part of a supportive, well-organised officiating team. Use the Join form on our website to introduce yourself.',
    category: 'referees',
  },
  {
    id: 'faq-06',
    question: 'What information should I include in a booking enquiry?',
    answer: 'The more detail you can provide, the better. Key information includes the event date, location, rugby format, number of pitches, approximate number of matches, and any specific requirements like pitch management or referee development support.',
    category: 'booking',
  },
  {
    id: 'faq-07',
    question: 'Can you help coordinate officials across multiple pitches?',
    answer: 'Yes. Multi-pitch coordination is one of our core strengths. We can provide dedicated pitch managers who keep your tournament schedule running smoothly across all playing areas.',
    category: 'services',
  },
  {
    id: 'faq-08',
    question: 'Do you cover corporate and charity rugby events?',
    answer: 'We do. Corporate days and charity fixtures benefit from referees who understand that safety and enjoyment are just as important as the scoreline. We provide officials who keep the event well-controlled without draining the fun.',
    category: 'services',
  },
];

export function getAllFAQs(): FAQ[] {
  return faqs;
}

export function getFAQsByCategory(category: string): FAQ[] {
  return faqs.filter((f) => f.category === category);
}
