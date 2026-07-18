import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { generatePageMetadata } from '@/lib/seo';
import { getAllReferees } from '@/content/referees';
import { MapPin, ArrowRight } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'Meet the Referees',
  description: 'Our team of professional rugby match officials across the UK.',
});

export default function RefereesIndexPage() {
  const referees = getAllReferees();

  return (
    <div className="py-20">
      <div className="container-wide">
        <Breadcrumbs items={[{ label: 'Referees' }]} />
        
        <div className="mt-12 text-center md:text-left">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
            Meet the <span className="text-metallic-gold">Referees</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 md:mx-0 mx-auto">
            A coordinated team of match officials with experience across all levels of the game. Professional, approachable, and ready for your next fixture.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {referees.map((referee) => (
            <Link
              key={referee.id}
              href={`/referees/${referee.slug}`}
              className="card group overflow-hidden"
            >
              <div className="relative h-56 bg-gradient-to-br from-navy to-midnight">
                {referee.image && referee.image !== '/assets/referees/placeholder.jpg' ? (
                  <Image
                    src={referee.image}
                    alt={`Photo of ${referee.name}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-pink/10">
                      <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-pink">
                        {referee.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-metallic-gold opacity-50 transition-opacity group-hover:opacity-100" />
              </div>

              <div className="p-6">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-wide text-white">
                  {referee.name}
                </h2>
                
                <p className="mt-1 text-sm font-medium text-pink">
                  {referee.role}
                </p>

                <div className="mt-3 flex items-center gap-1.5 text-sm text-gray-400">
                  <MapPin className="h-4 w-4 text-gold" />
                  {referee.region}
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {referee.formats.map((format) => (
                    <span
                      key={format}
                      className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-gray-300"
                    >
                      {format}
                    </span>
                  ))}
                </div>

                <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-400">
                  {referee.shortBio}
                </p>

                <div className="mt-6 flex items-center gap-1 text-sm font-medium text-pink transition-colors group-hover:text-pink-light">
                  View Profile
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-24 border-t border-white/10 pt-16 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wide text-white">
            Want to Join the Team?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            We are always looking for reliable match officials to join our network. Whether you are an experienced referee or looking to develop your skills.
          </p>
          <div className="mt-8">
            <Link href="/join" className="btn-secondary">
              Apply to Join
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
