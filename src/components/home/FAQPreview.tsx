'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQ } from '@/lib/types';
import Link from 'next/link';

interface FAQPreviewProps {
  faqs: FAQ[];
}

export function FAQPreview({ faqs }: FAQPreviewProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="relative py-20 lg:py-28" aria-labelledby="faq-heading">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.2em] text-pink">
              Common Questions
            </p>
            <h2
              id="faq-heading"
              className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl"
            >
              Frequently{' '}
              <span className="text-metallic-gold">Asked</span>
            </h2>
            <div className="section-divider mt-6" />
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="rounded-xl border border-white/5 bg-navy/30 transition-colors hover:border-gold/10"
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  aria-expanded={openId === faq.id}
                >
                  <span className="pr-4 font-medium text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-gold transition-transform duration-200 ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-5 leading-relaxed text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/faq" className="btn-secondary">
              View All FAQs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
