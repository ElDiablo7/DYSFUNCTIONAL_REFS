import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PersonJsonLd } from '@/components/seo/JsonLd';
import { generatePageMetadata } from '@/lib/seo';
import { getAllReferees, getRefereeBySlug } from '@/content/referees';
import { siteConfig } from '@/config/site';
import { MapPin, Shield, Star, Award, MessageSquare, ArrowRight } from 'lucide-react';

export async function generateStaticParams() {
  return getAllReferees().map((referee) => ({
    slug: referee.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const referee = getRefereeBySlug(params.slug);
  if (!referee) return {};

  return generatePageMetadata({
    title: `${referee.name} | ${referee.role}`,
    description: referee.shortBio,
    path: `/referees/${referee.slug}`,
  });
}

export default function RefereeProfilePage({ params }: { params: { slug: string } }) {
  const referee = getRefereeBySlug(params.slug);

  if (!referee) {
    notFound();
  }

  return (
    <>
      <PersonJsonLd
        name={referee.name}
        jobTitle={referee.role}
        description={referee.shortBio}
        url={`${siteConfig.url}/referees/${referee.slug}`}
      />
      
      <div className="py-20">
        <div className="container-wide">
          <Breadcrumbs
            items={[
              { label: 'Referees', href: '/referees' },
              { label: referee.name },
            ]}
          />

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Sidebar / Photo */}
            <div className="lg:col-span-4">
              <div className="card overflow-hidden sticky top-24">
                <div className="relative aspect-square bg-gradient-to-br from-navy to-midnight">
                  {referee.image && referee.image !== '/assets/referees/placeholder.jpg' ? (
                    <Image
                      src={referee.image}
                      alt={`Photo of ${referee.name}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-pink/10">
                        <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-pink">
                          {referee.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-metallic-gold" />
                </div>
                
                <div className="p-6 bg-navy/30">
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="h-5 w-5 text-gold" />
                    <span className="font-medium">{referee.region}</span>
                  </div>
                  
                  {referee.available ? (
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm text-green-400">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                      Available for booking
                    </div>
                  ) : (
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-gray-500/20 bg-gray-500/10 px-3 py-1 text-sm text-gray-400">
                      <div className="h-2 w-2 rounded-full bg-gray-500" />
                      Currently unavailable
                    </div>
                  )}

                  <div className="mt-8 space-y-4">
                    <Link href="/book" className="btn-primary w-full justify-center">
                      Enquire to Book
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8">
              <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
                {referee.name}
              </h1>
              <p className="mt-2 text-xl font-medium text-pink">
                {referee.role}
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-white/5 bg-navy/20 p-5">
                  <div className="flex items-center gap-2 text-gold-bright">
                    <Shield className="h-5 w-5" />
                    <h3 className="font-[family-name:var(--font-display)] font-bold uppercase tracking-wider">Formats</h3>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {referee.formats.map((format) => (
                      <span key={format} className="rounded-md bg-white/5 px-3 py-1 text-sm text-gray-300">
                        {format}
                      </span>
                    ))}
                  </div>
                </div>

                {referee.specialisms && referee.specialisms.length > 0 && (
                  <div className="rounded-xl border border-white/5 bg-navy/20 p-5">
                    <div className="flex items-center gap-2 text-gold-bright">
                      <Star className="h-5 w-5" />
                      <h3 className="font-[family-name:var(--font-display)] font-bold uppercase tracking-wider">Specialisms</h3>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {referee.specialisms.map((spec, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="h-1.5 w-1.5 rounded-full bg-pink" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-12">
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wide text-white">
                  Biography
                </h2>
                <div className="section-divider mt-4 mb-6" />
                <div className="prose-brand max-w-none">
                  {referee.fullBio.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {referee.qualifications && referee.qualifications.length > 0 && (
                <div className="mt-12">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wide text-white">
                    Qualifications & Experience
                  </h2>
                  <div className="section-divider mt-4 mb-6" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    {referee.qualifications.map((qual, i) => (
                      <div key={i} className="flex items-start gap-3 rounded-lg border border-white/5 bg-navy/10 p-4">
                        <Award className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                        <span className="text-sm text-gray-300">{qual}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mt-16 rounded-2xl border border-pink/20 bg-pink/5 p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase text-white">
                    Book {referee.name.split(' ')[0]}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 max-w-md">
                    Request this official for your next fixture. All bookings are handled centrally to ensure complete coverage.
                  </p>
                </div>
                <Link href={`/book?referee=${referee.slug}`} className="btn-primary mt-6 sm:mt-0 whitespace-nowrap">
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
