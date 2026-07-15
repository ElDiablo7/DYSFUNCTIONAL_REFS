import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Safeguarding Policy',
  description: 'Our commitment to safeguarding and welfare in rugby.',
});

export default function SafeguardingPage() {
  return (
    <div className="container-narrow py-20">
      <Breadcrumbs items={[{ label: 'Safeguarding Policy' }]} />
      
      <div className="mt-8 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
        <strong>Important Notice:</strong> This is a template document and does not constitute legal advice. It must be reviewed by a qualified legal professional before publication. Ensure this aligns with relevant national governing body requirements.
      </div>

      <article className="prose-brand mt-12">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
          Safeguarding Policy
        </h1>
        
        <p className="mt-6 text-sm text-gray-400">Last updated: {new Date().toLocaleDateString('en-GB')}</p>

        <h2>1. Our Commitment</h2>
        <p>
          The Dysfunctional Referees is committed to ensuring that all participants, particularly children, young people, and vulnerable adults, can enjoy rugby in a safe, positive, and supportive environment.
        </p>

        <h2>2. Principles</h2>
        <ul>
          <li>The welfare of the child or vulnerable adult is paramount.</li>
          <li>All participants have the right to protection from abuse.</li>
          <li>All allegations or suspicions of abuse will be taken seriously and responded to swiftly and appropriately.</li>
        </ul>

        <h2>3. Working with Young People</h2>
        <p>
          When officiating at age-grade or schools tournaments, our officials adhere to the safeguarding guidelines established by the relevant national governing body. Officials are expected to maintain professional boundaries and appropriate conduct at all times.
        </p>

        <h2>4. Reporting Concerns</h2>
        <p>
          If any participant, organiser, or official has a safeguarding concern during an event, it should be reported immediately to the designated event safeguarding officer or tournament director.
        </p>

        <h2>5. Recruitment and Vetting</h2>
        <p>
          We expect all officials in our network to comply with governing body requirements regarding vetting, training, and certification when working with age-grade rugby.
        </p>
      </article>
    </div>
  );
}
