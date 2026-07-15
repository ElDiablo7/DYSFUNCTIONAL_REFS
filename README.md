You are acting as a senior full-stack engineer, award-winning sports brand designer, technical SEO specialist, conversion copywriter and deployment engineer.

BUILD THE COMPLETE PRODUCTION WEBSITE NOW.

Do not merely produce a plan, wireframe, mock-up or partial example. Create the complete repository, write every required file, install dependencies, run all checks, test the build, fix all errors and leave the application ready to push to GitHub and deploy directly to Railway.

==================================================
PROJECT
==================================================

Brand name:
THE DYSFUNCTIONAL REFEREES

Established:
EST 2024

Business type:
A professional rugby referee network and match-official service.

Primary audiences:

1. Rugby tournament organisers seeking dependable match officials.
2. Rugby clubs, schools, universities, charities and businesses organising rugby matches or festivals.
3. Qualified or developing rugby referees interested in joining the network.
4. Event organisers requiring referee coordination, pitch management, officiating support or tournament advice.

The website must feel energetic, confident, premium and memorable.

The brand name has humour, but the service must appear organised, dependable, safe and highly professional.

Core brand line:

“THE NAME GETS A LAUGH. THE STANDARDS DON’T.”

Primary conversion message:

“Professional rugby match officials for tournaments, festivals, fixtures and special events.”

Do not claim qualifications, geographical coverage, client names, governing-body approval, insurance, safeguarding certification, tournament numbers or professional experience unless that information exists in the supplied content.

Never invent testimonials, reviews, awards, partners, accreditations or client logos.

==================================================
REFERENCE WEBSITE
==================================================

Use refsontour.com only as general market research.

Learn from its clear distinction between:

1. Services for tournament organisers.
2. Benefits for referees joining the network.
3. Event listings.
4. Community photography.
5. Booking and joining forms.

DO NOT copy:

- Their layout.
- Their text.
- Their imagery.
- Their slogans.
- Their navigation wording.
- Their code.
- Their page compositions.
- Their visual identity.
- Their event descriptions.
- Their brand positioning.

Do not mention Refs On Tour anywhere on the public website, in metadata, structured data, alt text, source comments or page copy.

The Dysfunctional Referees must have a completely original brand, structure and written voice.

==================================================
DESIGN DIRECTION
==================================================

Create an elite rugby and sports-agency aesthetic.

The finished website should look like a modern premium sports organisation, not a template, pub team page, children’s site or generic Squarespace brochure.

Visual personality:

- Bold.
- Slick.
- Highly polished.
- Confident.
- Fast.
- Modern British rugby energy.
- Professional with controlled humour.
- Premium sports broadcasting quality.
- Strong enough to support international growth.

Use the supplied 3D crest as the main visual centrepiece.

Place it at:

/public/assets/dysfunctional-referees-crest.png

Do not redraw, rename, recolour or replace the crest.

Brand colours:

- Hot referee pink: #F229A8
- Deep navy: #101A4B
- Midnight navy: #080D25
- Metallic gold base: #D4AF37
- Bright gold highlight: #FFD76A
- Deep gold shadow: #8C6414
- Warm ivory: #FAF8F1
- Pure white: #FFFFFF

Typography:

- Use a powerful condensed display font for major headings.
- Use a clean, highly readable sans-serif for body text.
- Load fonts through next/font.
- Suggested pairing: Oswald or Bebas Neue for display headings, Inter or Manrope for body copy.
- Maintain excellent readability and accessibility.

Gold must look like polished metal, not flat yellow.

Create reusable CSS utilities for metallic gold using layered gradients, highlights and restrained shadows.

Use the gold selectively for borders, buttons, icons, section labels and premium details.

Use pink as the unmistakable brand colour without turning every section into a solid pink wall.

==================================================
3D CREST AND SUN-GLINT EFFECT
==================================================

Make the supplied crest the hero object.

Display it with:

- Responsive sizing.
- Subtle three-dimensional floating movement.
- High-quality drop shadow.
- Controlled pink ambient glow.
- Gold reflective highlights.
- A diagonal sunlight glint moving across the badge.
- A slow premium hover movement.
- No excessive spinning.
- No distortion.
- No low-quality filters.

Create the glint using a masked pseudo-element or overlay that travels diagonally across the crest.

The glint should resemble sunlight briefly catching polished gold.

Animation requirements:

- Approximately 5 to 7 seconds between glints.
- The glint itself should be quick and crisp.
- It must not constantly flash.
- Disable or substantially reduce animation when prefers-reduced-motion is enabled.
- Maintain 60fps by animating transforms and opacity rather than expensive layout properties.

==================================================
TECHNICAL STACK
==================================================

Use:

- Current stable Next.js.
- App Router.
- TypeScript.
- Tailwind CSS.
- React Server Components by default.
- Client components only where interaction requires them.
- Framer Motion only for carefully controlled animation.
- Lucide React for interface icons.
- Zod for form validation.
- React Hook Form for complex forms.
- Next/Image for all suitable imagery.
- ESLint.
- Prettier.
- Accessible semantic HTML.

Do not use:

- A page-builder.
- WordPress.
- Wix.
- Squarespace.
- Huge animation libraries.
- Unnecessary dependencies.
- jQuery.
- Client-rendered pages where server-rendering is suitable.
- Placeholder lorem ipsum.
- Broken stock-image URLs.
- Hardcoded secrets.

Configure the project for deployment through:

GitHub repository → Railway deployment.

Include:

- package.json
- package-lock.json
- next.config.ts
- tsconfig.json
- eslint configuration
- postcss configuration
- Tailwind configuration if required by the installed Tailwind version
- .gitignore
- .env.example
- Dockerfile
- .dockerignore
- railway.json or railway.toml when useful
- README.md
- health-check route
- production start script

The project must build on Railway without relying on Vercel-only services.

Use process.env.PORT where required by the hosting environment.

==================================================
WEBSITE STRUCTURE
==================================================

Create one highly impressive long-scroll homepage supported by focused SEO subpages.

Required routes:

/
 /about
 /services
 /services/rugby-tournament-referees
 /services/rugby-match-officials
 /services/sevens-referees
 /services/fifteens-referees
 /services/pitch-management
 /services/referee-support
 /referees
 /referees/[slug]
 /events
 /events/[slug]
 /gallery
 /join
 /book
 /insights
 /insights/[slug]
 /faq
 /contact
 /privacy
 /cookies
 /terms
 /safeguarding
 /accessibility
 /admin
 /api/health

Add:

- Custom 404 page.
- Loading states where genuinely necessary.
- Error boundary.
- Breadcrumbs on internal pages.
- Sticky mobile booking button.
- Skip-to-content link.
- Accessible mobile menu.

==================================================
HEADER AND NAVIGATION
==================================================

Desktop navigation:

- Home
- Services
- Meet the Referees
- Events
- Gallery
- About
- Insights
- Contact

Primary header CTA:

BOOK MATCH OFFICIALS

Secondary CTA where space permits:

JOIN THE TEAM

Header requirements:

- Initially transparent over the hero.
- Changes to a dark, lightly blurred background after scrolling.
- Small crest at the left.
- Clear active-page indication.
- Keyboard accessible.
- Mobile menu must trap focus correctly.
- No oversized navigation clutter.

==================================================
HOMEPAGE
==================================================

Build the homepage in this order.

1. HERO

Large heading:

THE DYSFUNCTIONAL
REFEREES

Supporting line:

Professional rugby match officials for tournaments, festivals, fixtures and special events.

Brand line:

The name gets a laugh. The standards don’t.

Primary button:

Book Match Officials

Secondary button:

Meet the Referees

Supporting service labels:

SEVENS
FIFTEENS
TOURNAMENTS
FESTIVALS
SPECIAL EVENTS

Place the large 3D crest on the right on desktop and beneath the copy on mobile.

Background:

- Midnight navy.
- Very subtle rugby pitch markings.
- Soft spotlight behind the crest.
- Faint grain texture.
- Controlled pink and gold atmospheric lighting.

Do not sacrifice readability for effects.

2. TRUST STRIP

Show only verified information.

Known information:

- Established 2024.
- Twelve referee profile placeholders are required.

Initial trust items:

12 REFEREES
EST 2024
ONE COORDINATED TEAM

Make these data-driven so numbers can be changed easily.

3. INTRODUCTION

Heading:

Serious officials. Proper personalities.

Suggested copy:

The Dysfunctional Referees brings together a coordinated group of rugby officials for tournaments, festivals, fixtures and special events. We combine professional match control with the personality, communication and calm needed to keep rugby moving.

Add a supporting statement:

Organisers get one dependable point of contact. Referees get a team around them. Players get a game that is controlled, safe and worth remembering.

4. TWO AUDIENCE PATHWAYS

Create two large interactive panels.

Panel A:

FOR ORGANISERS

Copy:

Build the right officiating team for your tournament, festival or fixture without the usual last-minute scramble.

CTA:

Book Match Officials

Panel B:

FOR REFEREES

Copy:

Join a visible, supportive referee network built around opportunities, development and genuine team spirit.

CTA:

Join the Team

These panels must be visually different but clearly related.

5. SERVICES

Create premium cards for:

- Tournament referee teams.
- Individual match officials.
- Rugby sevens officials.
- Rugby fifteens officials.
- Pitch and match-flow management.
- Referee coordination.
- Referee coaching and peer support.
- Corporate and charity rugby events.

Each card must link to a dedicated relevant page.

Do not use generic one-sentence filler. Explain the organiser’s practical problem and how the service solves it.

6. FEATURED REFEREES

Show six featured referee cards from the data source.

Each card includes:

- Professional photograph or placeholder.
- Full name.
- Referee role.
- Rugby formats.
- Region or service area.
- Short biography.
- Profile button.
- Optional featured video indicator.

Do not expose private email addresses or personal telephone numbers.

Add a “Meet All Referees” CTA.

7. WHY ORGANISERS CHOOSE US

Use four clear benefits:

- One coordinated booking contact.
- Officials matched to the event.
- Clear pre-event communication.
- Calm, credible match management.

Do not claim guarantees that cannot legally be supported.

8. HOW BOOKING WORKS

Four-step visual process:

1. Tell us about the event.
2. We assess the officiating requirement.
3. We coordinate the appropriate referee team.
4. Your event receives one organised point of contact.

Include a booking CTA.

9. EVENT SECTION

Show upcoming events from the event data source.

Each event card:

- Event name.
- Date.
- Location.
- Rugby format.
- Status.
- Image.
- Details button.

Never invent event partners or attendance.

If no genuine events have been entered, show a refined empty state:

“New assignments will be announced here.”

10. MEDIA AND VIDEO SECTION

Create a cinematic horizontal section for:

- Match footage.
- Referee highlights.
- Behind-the-scenes images.
- Tournament galleries.

Use lazy loading.

Videos must not autoplay with sound.

Use poster images.

Provide clear accessible controls.

11. TESTIMONIAL AREA

Create the component and data model, but do not display fabricated testimonials.

When there are no approved testimonials, hide this section entirely.

12. FAQ PREVIEW

Include useful questions:

- How do I book rugby referees for a tournament?
- Can I request more than one referee?
- Do you provide officials for rugby sevens and fifteens?
- How far in advance should I book?
- Can referees apply to join the network?
- What information should I include in a booking enquiry?
- Can you help coordinate officials across multiple pitches?
- Do you cover corporate and charity rugby events?

Answers must be helpful, realistic and free from invented promises.

13. FINAL CTA

Heading:

Need officials who can control the game without draining the life out of it?

Buttons:

Book Match Officials
Join the Team

14. FOOTER

Include:

- Small crest.
- Short business description.
- Main navigation.
- Services navigation.
- Contact details from central config.
- Social links from central config.
- Privacy.
- Cookies.
- Terms.
- Safeguarding.
- Accessibility.
- Copyright with automatic year.
- Newsletter field only if a working integration is implemented.

==================================================
REFEREE DIRECTORY
==================================================

Create a responsive referee directory designed to support twelve initial profiles and future growth.

Filters:

- Rugby format.
- Region.
- Role.
- Availability status.
- Featured.

Search:

- Referee name.
- Location.
- Specialism.

Do not create filters with no data.

Profile card requirements:

- Image.
- Name.
- Primary role.
- Region.
- Formats.
- Short introduction.
- Link to full profile.

Profile pages must include:

- Full name.
- Headshot.
- Role.
- Short introduction.
- Full biography.
- Areas covered.
- Rugby formats.
- Qualifications, only when supplied.
- Experience, only when supplied.
- Specialisms.
- Languages, where relevant.
- Image gallery.
- Video highlights.
- Upcoming assignments, where public.
- Central booking CTA.
- Share metadata.
- Breadcrumbs.

Create twelve placeholder records with neutral names:

Referee One
Referee Two
...
Referee Twelve

Clearly mark these in code as content placeholders requiring replacement before launch.

Do not display fake career histories.

Create all profile content in one maintainable source:

/content/referees.ts

or a similarly clear typed content structure.

==================================================
EVENTS
==================================================

Build:

- Upcoming events.
- Previous events.
- Individual event pages.
- Date, format and region filters.
- Calendar-friendly date display.
- Event image.
- Public description.
- Venue details where supplied.
- Referee team list where approved.
- Related gallery.
- Booking CTA.

Use Event structured data only when the page contains genuine, complete event information.

Past events must not appear as upcoming.

==================================================
GALLERY AND VIDEO
==================================================

Create a filterable gallery:

- Match action.
- Tournaments.
- Referee team.
- Behind the scenes.
- Video.

Requirements:

- Responsive image grid.
- Accessible lightbox.
- Keyboard controls.
- Esc key closes modal.
- Proper alt text.
- Width and height attributes.
- Responsive image sizes.
- Lazy loading.
- No layout shifting.
- Video poster images.
- VideoObject structured data only when required properties are available.

==================================================
BOOKING FORM
==================================================

Build a polished multi-step booking form.

Fields:

Step 1, organiser:

- Full name.
- Organisation.
- Email.
- Telephone.
- Preferred contact method.

Step 2, event:

- Event name.
- Event type.
- Rugby format.
- Event date.
- Start time.
- End time.
- Venue.
- Town or city.
- Postcode.
- Number of pitches.
- Approximate number of matches.
- Approximate number of referees required.

Step 3, support:

- Match officials.
- Referee coordinator.
- Pitch manager.
- Referee coach or advisor.
- Other support.

Step 4, additional information:

- Message.
- Optional schedule upload.
- Optional supporting-document upload.
- Privacy consent.
- Marketing consent as a separate optional checkbox.

Validation:

- Zod server-side validation.
- Client-side validation for usability.
- File type restrictions.
- File size restrictions.
- Honeypot field.
- Rate limiting.
- Sanitisation.
- Clear error messages.
- Accessible labels.
- Success confirmation.
- No secrets exposed in client code.

Send booking enquiries to an address configured through:

CONTACT_TO_EMAIL

Use Resend when RESEND_API_KEY is configured.

Also store submissions in the database when DATABASE_URL is configured.

The website must still build when optional integration variables are absent.

In development mode, safely log the payload without sensitive file contents.

==================================================
JOIN FORM
==================================================

Create a referee application form.

Fields:

- Full name.
- Email.
- Telephone.
- General location.
- Rugby formats.
- Current referee level or qualification.
- Refereeing experience.
- Governing body or society, optional.
- Travel availability.
- Typical availability.
- Short biography.
- Headshot upload.
- Qualification evidence upload, optional.
- CV upload, optional.
- Video URL, optional.
- Social profile, optional.
- Privacy consent.
- Permission to retain application data.

Do not publicly display applications.

Use secure server-side handling.

==================================================
MEDIA UPLOAD AND ADMIN AREA
==================================================

Create an optional protected admin area at:

/admin

The public website must work without the admin configuration.

Admin capabilities:

- Sign in.
- View booking enquiries.
- View referee applications.
- Add, edit, hide and reorder referee profiles.
- Add profile photos.
- Add gallery images.
- Add video URLs and poster images.
- Add, edit and archive events.
- Edit central contact details.
- Mark enquiries as new, contacted, confirmed or closed.

Security:

- No hardcoded password.
- Use environment variables.
- HTTP-only secure session cookie.
- SameSite protection.
- Server-side route protection.
- Rate-limit login attempts.
- Never expose administration data to public API responses.
- Do not store uploaded media on Railway’s temporary local filesystem.

Implement a storage adapter.

Preferred production storage:

- Cloudinary, S3-compatible object storage or Railway-compatible storage bucket.

Environment variables:

ADMIN_EMAIL
ADMIN_PASSWORD_HASH
DATABASE_URL
CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET

If media storage is not configured, disable uploads gracefully and show an admin configuration notice.

Seed the public site from typed local data so the initial website can launch before the database is configured.

==================================================
SEO STRATEGY
==================================================

The aim is to compete strongly for genuine rugby-officiating searches.

Primary keyword themes:

- rugby referees for hire
- book a rugby referee
- rugby match officials
- rugby tournament referees
- rugby sevens referees
- rugby fifteens referees
- tournament match officials
- rugby festival referees
- rugby referee team
- rugby referee services
- rugby pitch management
- referee coordination for rugby tournaments
- grassroots rugby referees
- corporate rugby match officials
- charity rugby match referees

Do not stuff keywords.

Do not create hidden text.

Do not place competitor names in metadata.

Do not create hundreds of thin location pages.

Do not create fake reviews.

Do not buy or manufacture backlinks.

Do not use spammy automatic content.

Every indexed page must have a clear purpose and useful original content.

Technical SEO requirements:

- Server-render important page content.
- Unique page title for every route.
- Unique meta description for every route.
- Canonical URL.
- Metadata base using NEXT_PUBLIC_SITE_URL.
- Open Graph metadata.
- Social-sharing images.
- Twitter card metadata.
- Correct heading hierarchy.
- Exactly one clear primary H1 per page.
- Descriptive internal links.
- Semantic landmarks.
- Crawlable navigation.
- app/robots.ts.
- app/sitemap.ts.
- Web manifest.
- Favicon and app icons.
- Breadcrumb navigation.
- Canonical handling for filters.
- Noindex admin, preview and success pages.
- Proper 404 status.
- Clean URL slugs.
- Image alt text.
- Image sitemap support if appropriate.
- RSS feed for insights if straightforward.
- Article publication and modification dates.
- Author information on insights.
- Pagination or sensible loading for large archives.

Structured data:

- Organization on the homepage.
- WebSite.
- Service on genuine service pages.
- Person on genuine referee profiles.
- BreadcrumbList.
- Event on genuine event pages.
- Article or BlogPosting on insight pages.
- VideoObject for genuine indexed videos.
- FAQ markup only when the questions and answers are visibly displayed.
- LocalBusiness only if a real public business address and service information are supplied.

Use JSON-LD components with typed data.

Never add properties that are absent from the visible page.

Create:

/lib/seo.ts
/components/seo/JsonLd.tsx

Add clear comments explaining where the final business information must be inserted.

==================================================
SEO CONTENT HUB
==================================================

Create the Insights system and prepare six substantial launch articles.

Do not publish unsupported legal, medical or governing-body claims.

Article topics:

1. How to book rugby referees for a tournament.
2. How many referees does a rugby tournament need?
3. Planning match officials across multiple rugby pitches.
4. Rugby sevens and fifteens officiating requirements.
5. A tournament organiser’s referee checklist.
6. Supporting referee welfare during long tournament days.

Each article should:

- Directly answer the search question.
- Be written for humans first.
- Use original wording.
- Include useful subheadings.
- Include a concise introduction.
- Include practical steps.
- Link naturally to relevant service pages.
- Include a booking CTA.
- Avoid keyword stuffing.
- Avoid false claims.
- Include an author and review date.
- Include Article structured data.
- Be easy to update.

Create content as MDX or typed content files.

==================================================
LOCAL AND REGIONAL SEO
==================================================

Do not assume a specific headquarters address.

Create a configurable service-area system.

Add fields in site config:

businessName
legalName
email
telephone
whatsapp
address
serviceAreas
socialLinks
defaultSeo
siteUrl

Do not publish an address until genuine information is entered.

Create a reusable service-area page template but leave it noindexed until unique, verified local content is supplied.

Never mass-produce doorway pages that merely swap town names.

Include a README checklist covering:

- Google Business Profile.
- Bing Places.
- Consistent name, address and telephone details.
- Google Search Console.
- Bing Webmaster Tools.
- Sitemap submission.
- Genuine sports-directory listings.
- Rugby club and tournament partnerships.
- Local press and community coverage.
- Earning links through useful resources and genuine partnerships.

==================================================
PERFORMANCE
==================================================

Performance targets:

- Lighthouse Performance target of 90 or higher.
- Accessibility target of 95 or higher.
- Best Practices target of 95 or higher.
- SEO target of 95 or higher.
- LCP target below 2.5 seconds.
- INP target below 200 milliseconds.
- CLS target below 0.1.

Implementation:

- Use next/image.
- Generate modern image formats.
- Add correct image sizes.
- Prioritise only the hero image.
- Lazy-load below-the-fold media.
- Avoid massive client bundles.
- Avoid hydration for static content.
- Dynamically load the gallery lightbox.
- Minimise third-party scripts.
- Self-host fonts using next/font.
- Prevent animation-driven layout shifts.
- Compress assets.
- Cache static assets.
- Do not use a full-screen loading animation.
- Do not autoplay large hero video on mobile.

==================================================
ACCESSIBILITY
==================================================

Meet WCAG 2.2 AA wherever practical.

Requirements:

- Keyboard-accessible navigation.
- Visible focus styles.
- Correct labels.
- Form error summaries.
- Accessible contrast.
- Reduced-motion support.
- Alt text.
- Decorative images marked appropriately.
- Skip link.
- Semantic buttons and links.
- No clickable divs.
- Modal focus management.
- Captions or text alternatives for important video.
- Do not communicate status through colour alone.
- Minimum comfortable touch-target sizes.

==================================================
PRIVACY, COOKIES AND SAFEGUARDING
==================================================

Create editable starter pages for:

- Privacy.
- Cookies.
- Terms.
- Safeguarding.
- Accessibility.

Clearly label these as templates requiring professional review.

Do not claim that they constitute legal advice.

Only show a cookie consent banner if non-essential analytics or marketing cookies are enabled.

Essential-only operation should not display a pointless intrusive banner.

Do not use images of children without documented permission.

Do not expose referee personal information beyond approved profile fields.

==================================================
ANALYTICS
==================================================

Prepare optional analytics support.

Preferred:

- Plausible or another privacy-conscious analytics platform.

Optional:

- Google Analytics 4 only after consent where required.

Track useful events:

- Booking form started.
- Booking form submitted.
- Join form started.
- Join form submitted.
- Referee profile viewed.
- Telephone clicked.
- Email clicked.
- WhatsApp clicked.
- Video played.
- Main CTA clicked.

Do not enable analytics unless the necessary environment variable is configured.

==================================================
CONTENT AND BRAND VOICE
==================================================

Tone:

- Direct.
- Sharp.
- Warm.
- Experienced.
- Confident.
- Slightly cheeky.
- Never childish.
- Never arrogant.
- Never disrespectful toward players, clubs or officials.

Approved style examples:

“The name gets a laugh. The standards don’t.”

“Serious officials. Proper personalities.”

“Good rugby needs good control.”

“One booking. One coordinated team.”

“Calm heads for busy match days.”

Avoid:

- Empty corporate jargon.
- Claims of being the best without evidence.
- Repetitive rugby puns.
- Aggressive competitor references.
- Fake urgency.
- Excessive exclamation marks.
- Overly long paragraphs.

==================================================
CENTRAL CONFIGURATION
==================================================

Create:

/config/site.ts

It must contain all easily edited business information:

- Brand name.
- Legal business name.
- Establishment year.
- Email.
- Telephone.
- WhatsApp.
- Address.
- Service areas.
- Social profiles.
- Navigation.
- Main CTA.
- Default metadata.
- Contact recipient.
- Social image.
- Number of referees.

No contact details should be scattered across components.

==================================================
DATABASE
==================================================

Use Prisma with PostgreSQL only if DATABASE_URL is configured.

Provide schema and migrations for:

- Referee.
- RefereeMedia.
- Event.
- EventMedia.
- BookingEnquiry.
- RefereeApplication.
- AdminSession or secure authentication records where required.
- Insight metadata if database management is implemented.

The application must still compile when running with local seeded content.

Provide:

prisma/schema.prisma
prisma/seed.ts

Add safe sample content that is clearly marked as placeholder data.

Never seed fake reviews.

==================================================
TESTING AND QUALITY CONTROL
==================================================

Before declaring completion, run:

npm install
npm run lint
npm run typecheck
npm run build

Create scripts for all three checks.

Add basic Playwright or equivalent smoke tests covering:

- Homepage loads.
- Navigation works.
- Referee directory loads.
- Booking form validates.
- Join form validates.
- 404 works.
- Mobile menu works.
- Admin route is protected.
- Robots and sitemap load.
- Health endpoint returns status 200.

Check:

- No TypeScript errors.
- No hydration errors.
- No console errors.
- No broken internal links.
- No missing images.
- No horizontal mobile overflow.
- No inaccessible empty buttons.
- No fake public data.
- No exposed environment secrets.
- No unfinished lorem ipsum.
- No “coming soon” blocks except genuine empty states.
- No references to the competitor website.

==================================================
RAILWAY DEPLOYMENT
==================================================

Optimise the repository for GitHub-to-Railway deployment.

Include a production Dockerfile using a supported Node LTS image and a multi-stage build.

Ensure:

- Dependencies are installed reproducibly.
- Build completes inside the image.
- Production dependencies are minimal.
- The server listens on 0.0.0.0.
- Railway’s PORT value is respected.
- A health check uses /api/health.
- Static files and public assets are present.
- Next.js standalone mode is correctly configured when used.

Create .env.example containing:

NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_BUSINESS_NAME="The Dysfunctional Referees"
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
RESEND_API_KEY=
DATABASE_URL=
ADMIN_EMAIL=
ADMIN_PASSWORD_HASH=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=
NEXT_PUBLIC_GA_MEASUREMENT_ID=

Do not put real values in the repository.

README deployment instructions:

1. Create GitHub repository.
2. Push the finished code.
3. Create a Railway project from the GitHub repository.
4. Add required environment variables.
5. Add Railway PostgreSQL if the admin database is required.
6. Run Prisma migrations as the pre-deploy command.
7. Configure the health-check path.
8. Generate the Railway domain.
9. Connect the final custom domain.
10. Set NEXT_PUBLIC_SITE_URL to the final HTTPS domain.
11. Redeploy.
12. Test robots.txt and sitemap.xml.
13. Add the property to Google Search Console.
14. Submit the sitemap.
15. Request indexing of the core pages.

Include the exact build and start commands in the README.

==================================================
FINAL DELIVERY FORMAT
==================================================

When finished:

1. Show the final project tree.
2. State which pages were created.
3. List the installed packages.
4. List required and optional environment variables.
5. Report the result of lint, type checking and production build.
6. Explain how to replace the twelve referee placeholders.
7. Explain how to add photos and videos.
8. Explain how to connect the booking email.
9. Explain how to deploy from GitHub to Railway.
10. Identify any information still required from the business owner.

Do not stop midway.

Do not ask broad design questions.

Use sensible defaults.

Where genuine business facts are unavailable, create a clearly identified central placeholder rather than inventing information.

The finished result must be visually exceptional, technically clean, mobile-first, original, search-friendly and ready for real deployment.
