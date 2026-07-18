import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';
import type { Referee } from '@/lib/types';

interface FeaturedRefereesProps {
  referees: Referee[];
}

export function FeaturedReferees({ referees }: FeaturedRefereesProps) {
  return (
    <section className="relative py-20 lg:py-28" aria-labelledby="referees-heading">
      <div className="container-wide">
        <div className="text-center">
          <p className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.2em] text-pink">
            The Team
          </p>
          <h2
            id="referees-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl"
          >
            Meet the{' '}
            <span className="text-metallic-gold">Referees</span>
          </h2>
          <div className="section-divider mt-6" />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {referees.slice(0, 6).map((referee) => (
            <Link
              key={referee.id}
              href={`/referees/${referee.slug}`}
              className="card group overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-navy to-midnight">
                {referee.image && referee.image !== '/assets/referees/placeholder.jpg' ? (
                  <Image
                    src={referee.image}
                    alt={`Photo of ${referee.name}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-pink/10">
                      <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-pink">
                        {referee.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                )}
                {/* Gold accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-metallic-gold opacity-50" />
              </div>

              <div className="p-6">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wide text-white">
                  {referee.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-pink">
                  {referee.role}
                </p>

                <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
                  <MapPin className="h-3 w-3" />
                  {referee.region}
                </div>

                {/* Formats */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {referee.formats.map((format) => (
                    <span
                      key={format}
                      className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-gray-300"
                    >
                      {format}
                    </span>
                  ))}
                </div>

                <p className="mt-3 line-clamp-2 text-sm text-gray-400">
                  {referee.shortBio}
                </p>

                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-pink transition-colors group-hover:text-pink-light">
                  View Profile
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/referees" className="btn-secondary">
            Meet All Referees
          </Link>
        </div>
      </div>
    </section>
  );
}
