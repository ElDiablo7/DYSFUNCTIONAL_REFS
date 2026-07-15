import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { generatePageMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site';

export const metadata = generatePageMetadata({
  title: 'About Us',
  description: 'We combine professional match control with the personality, communication and calm needed to keep rugby moving.',
});

export default function AboutPage() {
  return (
    <div className="container-narrow py-20">
      <Breadcrumbs items={[{ label: 'About' }]} />
      
      <article className="prose-brand mt-12">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5">
          <span className="text-metallic-gold text-xs font-semibold uppercase tracking-widest">
            EST {siteConfig.established}
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
          About The Dysfunctional Referees
        </h1>

        <p className="mt-8 text-xl leading-relaxed text-pink">
          The name gets a laugh. The standards don't.
        </p>

        <p className="mt-6 text-lg">
          The Dysfunctional Referees was established to solve a specific problem in grassroots and tournament rugby: finding reliable, high-quality match officials shouldn't be the hardest part of organising an event.
        </p>

        <h2 className="mt-12 text-2xl">Our Mission</h2>
        <p>
          We bring together a coordinated group of rugby officials for tournaments, festivals, fixtures, and special events. Our mission is simple: provide professional match control with the personality, communication, and calm needed to keep rugby moving.
        </p>
        <p>
          Good rugby needs good control. But control doesn't mean draining the life out of the game. We believe the best referees are those who manage the match safely and fairly while understanding the context of the fixture—whether it's a competitive league game or a social charity sevens tournament.
        </p>

        <h2 className="mt-12 text-2xl">Our Values</h2>
        
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-navy/30 p-6">
            <h3 className="mt-0 text-xl font-bold text-gold-bright">Reliability</h3>
            <p className="mt-2 text-sm">When you book us, we turn up. One coordinated team means no last-minute scrambles to find replacements.</p>
          </div>
          
          <div className="rounded-xl border border-white/10 bg-navy/30 p-6">
            <h3 className="mt-0 text-xl font-bold text-gold-bright">Communication</h3>
            <p className="mt-2 text-sm">Clear dialogue with organisers before the event, and clear dialogue with captains on the pitch.</p>
          </div>
          
          <div className="rounded-xl border border-white/10 bg-navy/30 p-6">
            <h3 className="mt-0 text-xl font-bold text-gold-bright">Professionalism</h3>
            <p className="mt-2 text-sm">We take the responsibility seriously, even if we don't take ourselves too seriously.</p>
          </div>
          
          <div className="rounded-xl border border-white/10 bg-navy/30 p-6">
            <h3 className="mt-0 text-xl font-bold text-gold-bright">Team Spirit</h3>
            <p className="mt-2 text-sm">We are a network that supports, coaches, and develops each other to improve our collective standard.</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 rounded-2xl border border-gold/20 bg-gradient-to-b from-navy/50 to-midnight p-10 text-center sm:flex-row sm:justify-start sm:text-left">
          <div className="flex-1">
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase text-white">Work With Us</h3>
            <p className="mt-2 text-sm text-gray-400">Organising an event? Looking for a supportive team to join?</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/book" className="btn-primary">
              Book Officials
            </Link>
            <Link href="/join" className="btn-secondary">
              Join the Team
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
