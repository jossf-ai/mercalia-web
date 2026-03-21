'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function ProductsCTA() {
  const { t } = useLanguage();

  const items = [
    { labelKey: 'products.cta.item.0.label', descKey: 'products.cta.item.0.desc', href: '/contact' },
    { labelKey: 'products.cta.item.1.label', descKey: 'products.cta.item.1.desc', href: '/contact' },
    { labelKey: 'products.cta.item.2.label', descKey: 'products.cta.item.2.desc', href: '/contact' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="relative rounded-3xl overflow-hidden py-16 px-8 md:px-14" style={{ background: 'linear-gradient(135deg, #071E33 0%, #0B2C4A 55%, #136070 100%)' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #1A7A8A 0%, transparent 70%)', transform: 'translate(25%, -25%)' }} />
            <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6" style={{ background: 'rgba(26,122,138,0.2)', border: '1px solid rgba(26,122,138,0.3)', color: '#2A9BAD', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                {t('products.cta.badge')}
              </span>
              <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(30px, 4vw, 48px)', letterSpacing: '-0.025em', lineHeight: '1.05' }}>
                {t('products.cta.title1')}
                <br />
                <span className="italic font-light" style={{ color: '#2A9BAD' }}>{t('products.cta.titleItalic')}</span>
              </h2>
              <p className="text-white/60 leading-relaxed text-lg max-w-md">{t('products.cta.description')}</p>
            </div>

            <div className="flex flex-col gap-4">
              {items?.map((item) => (
                <Link key={item?.labelKey} href={item?.href} className="flex items-center justify-between bg-white/6 hover:bg-white/12 border border-white/10 hover:border-secondary rounded-xl px-5 py-4 transition-all duration-300 group">
                  <div>
                    <div className="font-semibold text-white text-sm">{t(item?.labelKey)}</div>
                    <div className="text-white/45 text-xs mt-0.5">{t(item?.descKey)}</div>
                  </div>
                  <svg className="text-secondary group-hover:translate-x-1 transition-transform duration-200" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}