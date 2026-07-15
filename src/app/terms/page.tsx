import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Terms & Conditions',
  description: 'Terms and conditions for using our website and services.',
});

export default function TermsPage() {
  return (
    <div className="container-narrow py-20">
      <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />
      
      <div className="mt-8 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
        <strong>Important Notice:</strong> This is a template document and does not constitute legal advice. It must be reviewed by a qualified legal professional before publication.
      </div>

      <article className="prose-brand mt-12">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
          Terms & Conditions
        </h1>
        
        <p className="mt-6 text-sm text-gray-400">Last updated: {new Date().toLocaleDateString('en-GB')}</p>

        <h2>1. Introduction</h2>
        <p>
          These terms and conditions govern your use of our website and the provision of our rugby officiating services. By accessing our website or booking our services, you agree to be bound by these terms.
        </p>

        <h2>2. Service Provision</h2>
        <p>
          We provide rugby match officials for tournaments, festivals, fixtures, and special events. While we make every effort to fulfill all accepted bookings, assignments are subject to the availability of appropriate officials.
        </p>

        <h2>3. Booking Process</h2>
        <p>
          Submitting a booking enquiry does not constitute a confirmed contract. A booking is only confirmed once we have formally accepted it and the appropriate arrangements have been made in writing.
        </p>

        <h2>4. Cancellations</h2>
        <p>
          Event organisers must notify us of cancellations as soon as reasonably possible. We reserve the right to charge for services if a cancellation occurs with insufficient notice.
        </p>

        <h2>5. Health and Safety</h2>
        <p>
          Event organisers remain responsible for the overall health and safety of their events. Our officials will enforce the laws of the game and manage the match environment, but ultimate responsibility for event safety, including medical provision, rests with the organiser.
        </p>

        <h2>6. Liability</h2>
        <p>
          Our liability is limited to the provision of officiating services. We are not liable for indirect or consequential losses arising from your event.
        </p>
      </article>
    </div>
  );
}
