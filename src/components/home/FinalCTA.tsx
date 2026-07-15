import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CrestHero } from '@/components/ui/CrestHero';

export function FinalCTA() {
  return (
    <section
      className="grain-overlay relative overflow-hidden py-20 lg:py-28"
      aria-labelledby="final-cta-heading"
    >
      {/* Background effects */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(242,41,168,0.08) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative text-center">
        <CrestHero size="small" />

        <h2
          id="final-cta-heading"
          className="mx-auto mt-8 max-w-3xl font-[family-name:var(--font-display)] text-2xl font-bold uppercase leading-tight tracking-wide text-white sm:text-3xl lg:text-4xl"
        >
          Need officials who can control the game without{' '}
          <span className="text-pink">draining the life out of it?</span>
        </h2>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/book" className="btn-primary group">
            Book Match Officials
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/join" className="btn-secondary">
            Join the Team
          </Link>
        </div>
      </div>
    </section>
  );
}
