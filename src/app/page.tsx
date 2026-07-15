import Link from 'next/link';
import { CrestHero } from '@/components/ui/CrestHero';
import { OrganizationJsonLd, WebSiteJsonLd, FAQJsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';
import { getFeaturedReferees } from '@/content/referees';
import { getAllServices } from '@/content/services';
import { getUpcomingEvents } from '@/content/events';
import { getAllFAQs } from '@/content/faq';
import { getApprovedTestimonials } from '@/content/testimonials';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustStrip } from '@/components/home/TrustStrip';
import { IntroSection } from '@/components/home/IntroSection';
import { AudiencePathways } from '@/components/home/AudiencePathways';
import { ServicesSection } from '@/components/home/ServicesSection';
import { FeaturedReferees } from '@/components/home/FeaturedReferees';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { HowItWorks } from '@/components/home/HowItWorks';
import { EventsSection } from '@/components/home/EventsSection';
import { FAQPreview } from '@/components/home/FAQPreview';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function HomePage() {
  const featuredReferees = getFeaturedReferees();
  const services = getAllServices();
  const upcomingEvents = getUpcomingEvents();
  const faqs = getAllFAQs();
  const testimonials = getApprovedTestimonials();

  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      {faqs.length > 0 && <FAQJsonLd faqs={faqs} />}

      <HeroSection />
      <TrustStrip />
      <IntroSection />
      <AudiencePathways />
      <ServicesSection services={services} />
      <FeaturedReferees referees={featuredReferees} />
      <WhyChooseUs />
      <HowItWorks />
      <EventsSection events={upcomingEvents} />

      {/* Testimonials - hidden when no approved testimonials exist */}
      {testimonials.length > 0 && (
        <section className="py-20">
          <div className="container-wide">
            <h2 className="heading-section text-center text-white">
              What Organisers Say
            </h2>
          </div>
        </section>
      )}

      <FAQPreview faqs={faqs.slice(0, 6)} />
      <FinalCTA />
    </>
  );
}
