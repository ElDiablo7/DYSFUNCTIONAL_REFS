import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Cookie Policy',
  description: 'Information about how we use cookies on our website.',
});

export default function CookiesPage() {
  return (
    <div className="container-narrow py-20">
      <Breadcrumbs items={[{ label: 'Cookie Policy' }]} />
      
      <div className="mt-8 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
        <strong>Important Notice:</strong> This is a template document and does not constitute legal advice. It must be reviewed by a qualified legal professional before publication.
      </div>

      <article className="prose-brand mt-12">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
          Cookie Policy
        </h1>
        
        <p className="mt-6 text-sm text-gray-400">Last updated: {new Date().toLocaleDateString('en-GB')}</p>

        <h2>1. What are cookies?</h2>
        <p>
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
        </p>

        <h2>2. How we use cookies</h2>
        <p>
          We use essential cookies to ensure that our website functions properly. We may also use performance and analytics cookies to understand how visitors interact with our website, helping us to improve the user experience.
        </p>

        <h2>3. Types of cookies we use</h2>
        <ul>
          <li><strong>Strictly Necessary Cookies:</strong> These cookies are essential for you to browse the website and use its features, such as accessing secure areas of the site (e.g. the admin dashboard).</li>
          <li><strong>Analytical/Performance Cookies:</strong> These cookies allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it.</li>
        </ul>

        <h2>4. Managing cookies</h2>
        <p>
          Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.aboutcookies.org or www.allaboutcookies.org.
        </p>

        <h2>5. Changes to this policy</h2>
        <p>
          We may update this Cookie Policy from time to time. We encourage you to review this policy periodically to stay informed about how we use cookies.
        </p>
      </article>
    </div>
  );
}
