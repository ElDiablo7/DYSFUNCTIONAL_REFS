import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { generatePageMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site';

export const metadata = generatePageMetadata({
  title: 'Accessibility Statement',
  description: 'Our commitment to digital accessibility.',
});

export default function AccessibilityPage() {
  return (
    <div className="container-narrow py-20">
      <Breadcrumbs items={[{ label: 'Accessibility Statement' }]} />
      
      <div className="mt-8 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
        <strong>Important Notice:</strong> This is a template document and does not constitute legal advice. It must be reviewed by a qualified legal professional before publication.
      </div>

      <article className="prose-brand mt-12">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
          Accessibility Statement
        </h1>
        
        <p className="mt-6 text-sm text-gray-400">Last updated: {new Date().toLocaleDateString('en-GB')}</p>

        <h2>1. Commitment to Accessibility</h2>
        <p>
          The Dysfunctional Referees is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
        </p>

        <h2>2. Conformance Status</h2>
        <p>
          The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. We strive to conform to WCAG 2.2 level AA.
        </p>

        <h2>3. Accessibility Features</h2>
        <p>This website includes the following accessibility features:</p>
        <ul>
          <li>Keyboard navigation support</li>
          <li>"Skip to content" link for screen reader and keyboard users</li>
          <li>Appropriate color contrast ratios</li>
          <li>Alternative text for meaningful images</li>
          <li>Support for "prefers-reduced-motion" user settings</li>
          <li>Semantic HTML structure</li>
        </ul>

        <h2>4. Feedback and Reporting Issues</h2>
        <p>
          We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers, please let us know so we can address them.
        </p>
        <p>
          You can contact us at: <a href={`mailto:${siteConfig.contact.email}`} className="text-pink hover:underline">{siteConfig.contact.email}</a>
        </p>
      </article>
    </div>
  );
}
