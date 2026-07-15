import Link from 'next/link';
import { ClipboardList, Search, Users, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Tell Us About the Event',
    description: 'Share the date, location, format, number of pitches, and approximate match schedule.',
  },
  {
    icon: Search,
    step: '02',
    title: 'We Assess the Requirement',
    description: 'We work out how many officials are needed and what combination of roles suits the event.',
  },
  {
    icon: Users,
    step: '03',
    title: 'We Coordinate the Team',
    description: 'We assemble the right referee team, briefed and ready for the assignment.',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'One Organised Contact',
    description: 'Your event receives one point of contact for all officiating matters, from booking to match day.',
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-20 lg:py-28" aria-labelledby="how-heading">
      <div className="container-wide">
        <div className="text-center">
          <p className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.2em] text-pink">
            Simple Process
          </p>
          <h2
            id="how-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl"
          >
            How{' '}
            <span className="text-metallic-gold">Booking Works</span>
          </h2>
          <div className="section-divider mt-6" />
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connector line (hidden on first and on mobile) */}
              {index < steps.length - 1 && (
                <div className="pointer-events-none absolute right-0 top-8 hidden h-px w-full translate-x-1/2 lg:block" style={{ background: 'linear-gradient(90deg, rgba(212,175,55,0.3), rgba(212,175,55,0.1))' }} aria-hidden="true" />
              )}

              <div className="relative">
                <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-navy">
                  {step.step}
                </span>
                <div className="mx-auto -mt-4 flex h-14 w-14 items-center justify-center rounded-xl border border-gold/20 bg-midnight text-gold">
                  <step.icon className="h-6 w-6" />
                </div>
              </div>

              <h3 className="mt-5 font-[family-name:var(--font-display)] text-base font-bold uppercase tracking-wide text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link href="/book" className="btn-primary group inline-flex">
            Book Match Officials
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
