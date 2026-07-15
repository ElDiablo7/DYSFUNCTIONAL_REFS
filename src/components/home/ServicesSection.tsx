import Link from 'next/link';
import { ArrowRight, Users, User, Zap, Shield, LayoutGrid, HeartHandshake, Trophy, GraduationCap } from 'lucide-react';
import type { Service } from '@/lib/types';

const iconMap: Record<string, React.ElementType> = {
  Users,
  User,
  Zap,
  Shield,
  LayoutGrid,
  HeartHandshake,
  Trophy,
  GraduationCap,
};

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="relative py-20 lg:py-28" aria-labelledby="services-heading">
      {/* Subtle background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(16,26,75,0.3) 50%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative">
        <div className="text-center">
          <p className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.2em] text-pink">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl"
          >
            Rugby Referee{' '}
            <span className="text-metallic-gold">Services</span>
          </h2>
          <div className="section-divider mt-6" />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 8).map((service) => {
            const IconComponent = iconMap[service.icon] || Shield;
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="card group flex flex-col p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink/10 text-pink transition-colors group-hover:bg-pink/20">
                  <IconComponent className="h-6 w-6" />
                </div>

                <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wide text-white">
                  {service.shortTitle}
                </h3>

                <p className="mt-2 flex-grow text-sm leading-relaxed text-gray-400">
                  {service.description.length > 120
                    ? service.description.substring(0, 120) + '...'
                    : service.description}
                </p>

                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-pink transition-colors group-hover:text-pink-light">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
