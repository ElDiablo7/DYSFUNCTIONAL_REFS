export interface Referee {
  id: string;
  slug: string;
  name: string;
  role: string;
  region: string;
  formats: RugbyFormat[];
  shortBio: string;
  fullBio: string;
  image: string;
  featured: boolean;
  available: boolean;
  qualifications?: string[];
  experience?: string;
  specialisms?: string[];
  languages?: string[];
  gallery?: string[];
  videoHighlights?: VideoItem[];
  upcomingAssignments?: EventAssignment[];
  order: number;
}

export type RugbyFormat = 'Sevens' | 'Fifteens' | 'Touch' | 'Mixed';
export type RefereeRole = 'Match Referee' | 'Assistant Referee' | 'TMO' | 'Referee Coach' | 'Pitch Manager';
export type EventStatus = 'upcoming' | 'confirmed' | 'completed' | 'cancelled';
export type EnquiryStatus = 'new' | 'contacted' | 'confirmed' | 'closed';

export interface Event {
  id: string;
  slug: string;
  name: string;
  date: string;
  endDate?: string;
  location: string;
  venue?: string;
  format: RugbyFormat;
  status: EventStatus;
  description: string;
  image?: string;
  refereeTeam?: string[];
  gallery?: string[];
}

export interface EventAssignment {
  eventId: string;
  eventName: string;
  date: string;
  role: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  fullContent: string;
  icon: string;
  features: string[];
  cta: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
  caption?: string;
}

export interface VideoItem {
  id: string;
  src: string;
  poster: string;
  title: string;
  duration?: string;
}

export type GalleryCategory = 'match-action' | 'tournaments' | 'referee-team' | 'behind-the-scenes' | 'video';

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  image?: string;
  tags: string[];
  readingTime: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BookingFormData {
  // Step 1: Organiser
  fullName: string;
  organisation: string;
  email: string;
  telephone: string;
  preferredContact: 'email' | 'telephone' | 'whatsapp';
  // Step 2: Event
  eventName: string;
  eventType: string;
  rugbyFormat: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  venue: string;
  townCity: string;
  postcode: string;
  numberOfPitches: number;
  approximateMatches: number;
  refereesRequired: number;
  // Step 3: Support
  matchOfficials: boolean;
  refereeCoordinator: boolean;
  pitchManager: boolean;
  refereeCoach: boolean;
  otherSupport: string;
  // Step 4: Additional
  message: string;
  privacyConsent: boolean;
  marketingConsent: boolean;
  honeypot: string;
}

export interface JoinFormData {
  fullName: string;
  email: string;
  telephone: string;
  location: string;
  formats: string[];
  currentLevel: string;
  experience: string;
  governingBody: string;
  travelAvailability: string;
  typicalAvailability: string;
  biography: string;
  videoUrl: string;
  socialProfile: string;
  privacyConsent: boolean;
  dataRetentionConsent: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organisation: string;
  quote: string;
  approved: boolean;
  image?: string;
}
