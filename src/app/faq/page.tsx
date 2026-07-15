'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FAQJsonLd } from '@/components/seo/JsonLd';
import { getAllFAQs } from '@/content/faq';
import { ChevronDown, MessageCircle } from 'lucide-react';

export default function FAQPage() {
  const faqs = getAllFAQs();
  const [openId, setOpenId] = useState<string | null>(null);

  // Group FAQs by category if they have one (this implementation assumes they do or groups under 'General')
  const groupedFaqs = faqs.reduce((acc, faq) => {
    const category = faq.category || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(faq);
    return acc;
  }, {} as Record<string, typeof faqs>);

  return (
    <>
      <FAQJsonLd faqs={faqs} />
      
      <div className="py-20">
        <div className="container-narrow">
          <Breadcrumbs items={[{ label: 'FAQ' }]} />
          
          <div className="mt-12 text-center md:text-left">
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
              Frequently Asked <span className="text-metallic-gold">Questions</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 md:mx-0 mx-auto">
              Everything you need to know about booking match officials, our services, and how we operate.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {Object.entries(groupedFaqs).map(([category, categoryFaqs]) => (
              <div key={category}>
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wide text-pink mb-6">
                  {category}
                </h2>
                <div className="space-y-4">
                  {categoryFaqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="rounded-xl border border-white/5 bg-navy/30 transition-colors hover:border-gold/10"
                    >
                      <button
                        onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                        className="flex w-full items-center justify-between px-6 py-5 text-left"
                        aria-expanded={openId === faq.id}
                      >
                        <span className="pr-4 font-medium text-white sm:text-lg">
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
                        <div className="px-6 pb-6 pt-2">
                          <p className="leading-relaxed text-gray-400">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 rounded-2xl border border-gold/10 bg-gradient-to-br from-navy/50 to-midnight p-10 text-center">
            <MessageCircle className="mx-auto h-12 w-12 text-gold/50 mb-4" />
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wide text-white">
              Still have questions?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Can't find the answer you're looking for? Get in touch with our team directly and we'll be happy to help.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
