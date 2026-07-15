'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  // Focus trap for mobile menu
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isMobileMenuOpen) return;
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
      if (e.key === 'Tab') {
        const menu = document.getElementById('mobile-menu');
        if (!menu) return;
        const focusable = menu.querySelectorAll<HTMLElement>(
          'a, button, input, [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [isMobileMenuOpen],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-midnight/90 shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="container-wide flex items-center justify-between py-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="relative z-10 flex items-center gap-3 transition-transform hover:scale-105"
          aria-label="The Dysfunctional Referees - Home"
        >
          <Image
            src="/assets/dysfunctional-referees-crest.png"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11"
            priority
          />
          <span className="hidden font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wider text-white sm:block">
            <span className="text-pink">Dysfunctional</span>{' '}
            <span className="text-metallic-gold">Refs</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {siteConfig.navigation.main.map((item) => (
            <div key={item.href} className="relative">
              {item.label === 'Services' ? (
                <div
                  className="group relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-pink'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </Link>

                  {/* Services dropdown */}
                  <div
                    className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                      isServicesOpen
                        ? 'visible translate-y-0 opacity-100'
                        : 'invisible -translate-y-2 opacity-0'
                    }`}
                  >
                    <div className="glass w-64 rounded-xl p-2 shadow-2xl">
                      {siteConfig.navigation.services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={`block rounded-lg px-3 py-2.5 text-sm transition-colors ${
                            isActive(service.href)
                              ? 'bg-pink/10 text-pink'
                              : 'text-gray-300 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-pink'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={siteConfig.cta.secondary.href}
            className="rounded-lg border border-gold/30 px-4 py-2 text-sm font-medium text-gold-bright transition-all hover:border-gold hover:bg-gold/10"
          >
            {siteConfig.cta.secondary.label}
          </Link>
          <Link href={siteConfig.cta.primary.href} className="btn-primary !px-5 !py-2.5 text-sm">
            {siteConfig.cta.primary.label}
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="relative z-10 rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={`fixed inset-0 top-0 z-40 bg-midnight/98 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isMobileMenuOpen
            ? 'visible translate-x-0 opacity-100'
            : 'invisible translate-x-full opacity-0'
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pb-8 pt-24">
          <div className="flex flex-col gap-1">
            {siteConfig.navigation.main.map((item) => (
              <div key={item.href}>
                {item.label === 'Services' ? (
                  <>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-lg font-medium transition-colors ${
                        isActive(item.href) ? 'text-pink' : 'text-gray-200 hover:text-white'
                      }`}
                      aria-expanded={isServicesOpen}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="ml-4 border-l border-gold/20 pl-4">
                        <Link
                          href="/services"
                          className="block py-2 text-sm text-gray-400 transition-colors hover:text-white"
                        >
                          All Services
                        </Link>
                        {siteConfig.navigation.services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className={`block py-2 text-sm transition-colors ${
                              isActive(service.href)
                                ? 'text-pink'
                                : 'text-gray-400 hover:text-white'
                            }`}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block rounded-lg px-4 py-3 text-lg font-medium transition-colors ${
                      isActive(item.href) ? 'text-pink' : 'text-gray-200 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile CTAs */}
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href={siteConfig.cta.primary.href}
              className="btn-primary w-full text-center"
            >
              {siteConfig.cta.primary.label}
            </Link>
            <Link
              href={siteConfig.cta.secondary.href}
              className="btn-secondary w-full text-center"
            >
              {siteConfig.cta.secondary.label}
            </Link>
          </div>

          {/* Mobile Contact */}
          {siteConfig.contact.email && (
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm text-gray-400">Get in touch</p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-1 text-sm text-pink transition-colors hover:text-pink-light"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
