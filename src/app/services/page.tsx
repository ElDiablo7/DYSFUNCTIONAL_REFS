import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { generatePageMetadata } from '@/lib/seo';
import { getAllServices } from '@/content/services';
import { Users, User, Zap, Shield, LayoutGrid, HeartHandshake, Trophy, ArrowRight } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'Rugby Referee Services',
  description: 'Professional rugby match officials for tournaments, festivals, fixtures and special events. One booking, one coordinated team.',
});

const iconMap: Record<string, React.ElementType> = {
  Users, User, Zap, Shield, LayoutGrid, HeartHandshake, Trophy,
};

export default function ServicesIndexPage() {
  const services = getAllServices();

  return (
    <div className="py-20">
      <div className="container-wide">
        <Breadcrumbs items={[{ label: 'Services' }]} />
        
        <div className="mt-12 text-center md:text-left">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
            Rugby Referee <span className="text-metallic-gold">Services</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 md:mx-0 mx-auto">
            From single match officials to complete coordinated teams for multi-pitch tournaments. Book exactly what your event needs.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Shield;
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="card group flex flex-col p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-pink/10 text-pink transition-colors group-hover:bg-pink/20">
                  <IconComponent className="h-7 w-7" />
                </div>

                <h2 className="mt-6 font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-wide text-white">
                  {service.title}
                </h2>

                <p className="mt-3 flex-grow text-sm leading-relaxed text-gray-400">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-1 text-sm font-medium text-pink transition-colors group-hover:text-pink-light">
                  View Service Details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-gray-500">
          The Dysfunctional Referees is an independent referee coordination service. Our services are supplementary and are not affiliated with, endorsed by, or a replacement for official match appointments made by the WRU, RFU, World Rugby, or any other governing body.
        </p>

        <div className="mt-20 rounded-2xl border border-gold/20 bg-gradient-to-br from-navy/50 to-midnight p-10 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wide text-white">
            Not sure what you need?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Tell us about your event, and we will recommend the right combination of officials and support staff to keep it running smoothly.
          </p>
          <div className="mt-8">
            <Link href="/book" className="btn-primary">
              Discuss Your Requirements
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
