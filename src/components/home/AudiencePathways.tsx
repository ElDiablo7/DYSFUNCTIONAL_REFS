import Link from 'next/link';
import { ArrowRight, Briefcase, Users } from 'lucide-react';

export function AudiencePathways() {
  return (
    <section className="relative py-20" aria-labelledby="pathways-heading">
      <div className="container-wide">
        <h2 id="pathways-heading" className="sr-only">
          Get Started
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* For Organisers */}
          <div className="group relative overflow-hidden rounded-2xl border border-pink/20 bg-gradient-to-br from-pink/10 to-midnight p-8 transition-all duration-500 hover:border-pink/40 hover:shadow-[0_0_40px_rgba(242,41,168,0.15)] sm:p-10">
            <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 translate-y-[-1/3] rounded-full bg-pink/5 blur-3xl transition-all group-hover:bg-pink/10" aria-hidden="true" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-pink/10 text-pink">
                <Briefcase className="h-7 w-7" />
              </div>

              <p className="mt-4 font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.2em] text-pink">
                For Organisers
              </p>

              <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
                Book Match Officials
              </h3>

              <p className="mt-4 leading-relaxed text-gray-300">
                Build the right officiating team for your tournament, festival or
                fixture without the usual last-minute scramble.
              </p>

              <Link
                href="/book"
                className="btn-primary mt-8 group/btn inline-flex"
              >
                Book Match Officials
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* For Referees */}
          <div className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/5 to-midnight p-8 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] sm:p-10">
            <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 translate-y-[-1/3] rounded-full bg-gold/5 blur-3xl transition-all group-hover:bg-gold/10" aria-hidden="true" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Users className="h-7 w-7" />
              </div>

              <p className="mt-4 font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.2em] text-gold-bright">
                For Referees
              </p>

              <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
                Join the Team
              </h3>

              <p className="mt-4 leading-relaxed text-gray-300">
                Join a visible, supportive referee network built around
                opportunities, development and genuine team spirit.
              </p>

              <Link
                href="/join"
                className="btn-secondary mt-8 inline-flex"
              >
                Join the Team
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
