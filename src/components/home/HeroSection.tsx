import Link from 'next/link';
import { CrestHero } from '@/components/ui/CrestHero';
import { siteConfig } from '@/config/site';
import { ArrowRight } from 'lucide-react';

const serviceLabels = ['SEVENS', 'FIFTEENS', 'TOURNAMENTS', 'FESTIVALS', 'SPECIAL EVENTS'];

export function HeroSection() {
  return (
    <section
      className="grain-overlay pitch-markings relative flex min-h-screen items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background effects */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 70% 50%, rgba(242,41,168,0.08) 0%, transparent 50%), radial-gradient(ellipse at 30% 80%, rgba(212,175,55,0.05) 0%, transparent 40%)',
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10 pb-20 pt-32">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Copy */}
          <div className="max-w-2xl text-center lg:text-left">
            {/* Brand label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5">
              <span className="text-metallic-gold text-xs font-semibold uppercase tracking-widest">
                EST {siteConfig.established}
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="text-white">The</span>{' '}
              <span className="text-pink">Dysfunctional</span>
              <br />
              <span className="text-metallic-gold">Referees</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl">
              {siteConfig.description}
            </p>

            <p className="mt-3 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.25em] text-gold-bright">
              {siteConfig.tagline}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link href={siteConfig.cta.primary.href} className="btn-primary group">
                {siteConfig.cta.primary.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/referees" className="btn-secondary">
                Meet the Referees
              </Link>
            </div>

            {/* Service labels */}
            <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
              {serviceLabels.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-[family-name:var(--font-display)] text-xs uppercase tracking-wider text-gray-400"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Crest */}
          <div className="flex-shrink-0">
            <CrestHero size="large" />
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to top, #080D25, transparent)',
        }}
        aria-hidden="true"
      />
    </section>
  );
}
