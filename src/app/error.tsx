'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { CrestHero } from '@/components/ui/CrestHero';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center py-20 text-center">
      <CrestHero size="small" />
      
      <h1 className="mt-12 font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
        Knock-on
      </h1>
      
      <p className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-wide text-pink sm:text-2xl">
        Something went wrong
      </p>
      
      <p className="mt-6 max-w-md text-gray-400">
        We encountered an unexpected error. The referee has blown the whistle, but we can restart play.
      </p>
      
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <button onClick={() => reset()} className="btn-primary">
          Try Again
        </button>
        <Link href="/" className="btn-secondary">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
