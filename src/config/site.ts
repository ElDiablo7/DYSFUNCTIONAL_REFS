export const siteConfig = {
  name: 'The Dysfunctional Referees',
  legalName: 'The Dysfunctional Referees', // TODO: Replace with registered business name
  shortName: 'Dysfunctional Refs',
  established: 2024,
  description: 'Professional rugby match officials for tournaments, festivals, fixtures and special events.',
  tagline: 'The name gets a laugh. The standards don\'t.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://dysfunctionalreferees.com',
  
  contact: {
    email: 'info@dysfunctionalreferees.com', // TODO: Replace with real email
    telephone: '', // TODO: Add real phone number
    whatsapp: '', // TODO: Add WhatsApp number
    address: {
      street: '', // TODO: Add when available
      city: '', // TODO: Add when available
      region: '', // TODO: Add when available
      postcode: '', // TODO: Add when available
      country: 'United Kingdom',
    },
  },

  social: {
    instagram: '', // TODO: Add Instagram URL
    facebook: '', // TODO: Add Facebook URL
    twitter: '', // TODO: Add Twitter/X URL
    linkedin: '', // TODO: Add LinkedIn URL
    youtube: '', // TODO: Add YouTube URL
    tiktok: '', // TODO: Add TikTok URL
  },

  stats: {
    refereeCount: 12,
    established: 2024,
    teamLabel: 'One Coordinated Team',
  },

  serviceAreas: [
    // TODO: Add actual service areas
    // { name: 'South East England', slug: 'south-east' },
  ] as { name: string; slug: string }[],

  navigation: {
    main: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Meet the Referees', href: '/referees' },
      { label: 'Events', href: '/events' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'About', href: '/about' },
      { label: 'Insights', href: '/insights' },
      { label: 'Contact', href: '/contact' },
    ],
    services: [
      { label: 'Tournament Referee Teams', href: '/services/rugby-tournament-referees' },
      { label: 'Match Officials', href: '/services/rugby-match-officials' },
      { label: 'Sevens Referees', href: '/services/sevens-referees' },
      { label: 'Fifteens Referees', href: '/services/fifteens-referees' },
      { label: 'Pitch Management', href: '/services/pitch-management' },
      { label: 'Referee Support', href: '/services/referee-support' },
    ],
    legal: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'Terms', href: '/terms' },
      { label: 'Safeguarding', href: '/safeguarding' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  },

  cta: {
    primary: { label: 'Book Match Officials', href: '/book' },
    secondary: { label: 'Join the Team', href: '/join' },
  },

  seo: {
    titleTemplate: '%s | The Dysfunctional Referees',
    defaultTitle: 'The Dysfunctional Referees | Professional Rugby Match Officials',
    defaultDescription: 'Professional rugby match officials for tournaments, festivals, fixtures and special events. The name gets a laugh. The standards don\'t.',
    ogImage: '/og-image.jpg',
  },
} as const;

export type SiteConfig = typeof siteConfig;
