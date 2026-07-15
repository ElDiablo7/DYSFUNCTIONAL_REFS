import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Instagram, Facebook, Twitter, Linkedin, Youtube, Mail, Phone } from 'lucide-react';

const socialIcons: Record<string, React.ElementType> = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  youtube: Youtube,
};

export function Footer() {
  const year = new Date().getFullYear();

  const activeSocials = Object.entries(siteConfig.social).filter(
    ([, url]) => url && url.length > 0,
  );

  return (
    <footer className="border-t border-white/5 bg-midnight" role="contentinfo">
      <div className="container-wide py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/assets/dysfunctional-referees-crest.png"
                alt=""
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <span className="font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wider text-white">
                <span className="text-pink">Dysfunctional</span>{' '}
                <span className="text-metallic-gold">Refs</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {siteConfig.description}
            </p>
            <p className="mt-2 text-xs text-gray-500">EST {siteConfig.established}</p>

            {/* Social Links */}
            {activeSocials.length > 0 && (
              <div className="mt-6 flex gap-3">
                {activeSocials.map(([platform, url]) => {
                  const IconComponent = socialIcons[platform];
                  if (!IconComponent) return null;
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-white/5 p-2.5 text-gray-400 transition-all hover:bg-pink/10 hover:text-pink"
                      aria-label={`Follow us on ${platform}`}
                    >
                      <IconComponent className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wider text-gold-bright">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {siteConfig.navigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wider text-gold-bright">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {siteConfig.navigation.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wider text-gold-bright">
              Contact
            </h3>
            <div className="mt-4 space-y-3">
              {siteConfig.contact.email && (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-pink"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.contact.email}
                </a>
              )}
              {siteConfig.contact.telephone && (
                <a
                  href={`tel:${siteConfig.contact.telephone}`}
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-pink"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.contact.telephone}
                </a>
              )}
            </div>

            <h3 className="mt-8 font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wider text-gold-bright">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {siteConfig.navigation.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/5 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-gray-500">
              &copy; {year} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/book" className="btn-primary !px-4 !py-2 text-xs">
                Book Match Officials
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
