import { siteConfig } from '@/config/site';
import { Users, Calendar, Shield } from 'lucide-react';

const trustItems = [
  {
    icon: Users,
    value: String(siteConfig.stats.refereeCount),
    label: 'Referees',
  },
  {
    icon: Calendar,
    value: `EST ${siteConfig.stats.established}`,
    label: 'Established',
  },
  {
    icon: Shield,
    value: siteConfig.stats.teamLabel,
    label: 'Approach',
  },
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-gold/10 bg-navy/50 py-8" aria-label="Key facts">
      <div className="container-wide">
        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3 text-center">
              <item.icon className="h-5 w-5 text-gold" aria-hidden="true" />
              <div>
                <p className="font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-wider text-white">
                  {item.value}
                </p>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
