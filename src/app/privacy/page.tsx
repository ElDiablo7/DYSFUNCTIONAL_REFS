import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description: 'How we collect, use, and protect your personal information.',
});

export default function PrivacyPage() {
  return (
    <div className="container-narrow py-20">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
      
      <div className="mt-8 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
        <strong>Important Notice:</strong> This is a template document and does not constitute legal advice. It must be reviewed by a qualified legal professional before publication.
      </div>

      <article className="prose-brand mt-12">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
          Privacy Policy
        </h1>
        
        <p className="mt-6 text-sm text-gray-400">Last updated: {new Date().toLocaleDateString('en-GB')}</p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect information that you provide directly to us when using our services, including when you:
        </p>
        <ul>
          <li>Submit a booking enquiry</li>
          <li>Apply to join our referee network</li>
          <li>Contact us via email or telephone</li>
        </ul>
        <p>
          This may include your name, contact details, organisation information, and payment information.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Process and manage your booking enquiries</li>
          <li>Coordinate match officials for your events</li>
          <li>Evaluate referee applications</li>
          <li>Communicate with you regarding our services</li>
          <li>Comply with our legal obligations</li>
        </ul>

        <h2>3. Information Sharing</h2>
        <p>
          We do not sell your personal information. We may share your information with our match officials as necessary to provide our services, or with third-party service providers who assist us in operating our business.
        </p>

        <h2>4. Data Storage and Security</h2>
        <p>
          We implement appropriate technical and organisational measures to protect your personal data against unauthorised or unlawful processing, accidental loss, destruction, or damage.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          Under data protection law, you have rights including:
        </p>
        <ul>
          <li><strong>Your right of access</strong> - You have the right to ask us for copies of your personal information.</li>
          <li><strong>Your right to rectification</strong> - You have the right to ask us to rectify personal information you think is inaccurate.</li>
          <li><strong>Your right to erasure</strong> - You have the right to ask us to erase your personal information in certain circumstances.</li>
        </ul>

        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at our registered email address.
        </p>
      </article>
    </div>
  );
}
