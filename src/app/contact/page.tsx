import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { generatePageMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import { Mail, Phone, MessageCircle, MapPin, Briefcase, Users } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'Contact Us',
  description: 'Get in touch with The Dysfunctional Referees regarding tournament officiating or joining the team.',
});

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="container-wide">
        <Breadcrumbs items={[{ label: 'Contact' }]} />
        
        <div className="mt-12 text-center md:text-left">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
            Contact <span className="text-metallic-gold">Us</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 md:mx-0 mx-auto">
            Whether you need officials for an upcoming tournament or want to join our network, we are ready to hear from you.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Quick Actions */}
          <div className="space-y-6">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase text-white mb-8">
              What do you need?
            </h2>

            <Link href="/book" className="group flex items-start gap-6 rounded-2xl border border-white/5 bg-navy/30 p-8 transition-colors hover:border-pink/30 hover:bg-navy/50">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-pink/10 text-pink">
                <Briefcase className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-wide text-white group-hover:text-pink transition-colors">
                  Book Officials
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  Submit an enquiry for your upcoming tournament, festival, or fixture. We'll assess the requirements and assemble the right team.
                </p>
              </div>
            </Link>

            <Link href="/join" className="group flex items-start gap-6 rounded-2xl border border-white/5 bg-navy/30 p-8 transition-colors hover:border-gold/30 hover:bg-navy/50">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold-bright">
                <Users className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-wide text-white group-hover:text-gold-bright transition-colors">
                  Join the Team
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  Looking for a supportive referee network with great assignments? Apply to join our pool of match officials.
                </p>
              </div>
            </Link>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase text-white mb-8">
              Direct Contact
            </h2>
            
            <div className="rounded-2xl border border-gold/10 bg-midnight p-8 sm:p-10">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-gray-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Email Enquiries</h3>
                    <a href={`mailto:${siteConfig.contact.email}`} className="mt-1 block text-lg font-medium text-white hover:text-pink transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {siteConfig.contact.telephone && (
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-gray-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-400">Telephone</h3>
                      <a href={`tel:${siteConfig.contact.telephone.replace(/\s+/g, '')}`} className="mt-1 block text-lg font-medium text-white hover:text-pink transition-colors">
                        {siteConfig.contact.telephone}
                      </a>
                    </div>
                  </div>
                )}

                {siteConfig.contact.whatsapp && (
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-gray-400">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-400">WhatsApp</h3>
                      <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="mt-1 block text-lg font-medium text-white hover:text-pink transition-colors">
                        {siteConfig.contact.whatsapp}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-gray-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Operating Area</h3>
                    <p className="mt-1 text-lg font-medium text-white">
                      Nationwide (UK)
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Primary hubs in London, South East, and Midlands.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-12 border-t border-white/5 pt-8">
                <h3 className="text-sm font-medium text-gray-400 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {Object.entries(siteConfig.social).map(([network, url]) => {
                    if (!url) return null;
                    return (
                      <a
                        key={network}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-colors hover:bg-pink hover:text-white"
                        aria-label={`Follow on ${network}`}
                      >
                        <span className="capitalize text-xs font-semibold">{network[0]}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
