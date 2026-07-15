import Link from 'next/link';
import { CrestHero } from '@/components/ui/CrestHero';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Page Not Found',
  description: 'The requested page could not be found.',
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center py-20 text-center">
      <CrestHero size="small" />
      
      <h1 className="mt-12 font-[family-name:var(--font-display)] text-5xl font-bold uppercase tracking-wide text-white sm:text-6xl lg:text-7xl">
        404
      </h1>
      
      <p className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wide text-pink sm:text-3xl">
        Sent to the sin bin
      </p>
      
      <p className="mt-6 max-w-md text-gray-400">
        It looks like the page you are looking for has been shown a card. It might have been moved or deleted.
      </p>
      
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link href="/" className="btn-primary">
          Return to Pitch
        </Link>
        <Link href="/services" className="btn-secondary">
          View Services
        </Link>
      </div>
    </div>
  );
}
