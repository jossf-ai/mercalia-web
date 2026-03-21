'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactHero() {
  const { t } = useLanguage();

  const stats = [
    { value: '< 24h', labelKey: 'contact.hero.stat.0.label' },
    { value: '3', labelKey: 'contact.hero.stat.1.label' },
    { value: '40+', labelKey: 'contact.hero.stat.2.label' },
    { value: '24/7', labelKey: 'contact.hero.stat.3.label' },
  ];

  return (
    <section className="page-hero relative pt-32 pb-20 overflow-hidden" style={{ minHeight: '46vh', display: 'flex', alignItems: 'center' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #1A7A8A 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-8" style={{ background: 'radial-gradient(circle, #2A9BAD 0%, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-[0.04] hidden lg:block">
          <svg width="380" height="380" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="flex items-center gap-2 mb-8">
          <Link href="/homepage" className="text-white/40 text-sm hover:text-white/70 transition-colors">{t('contact.hero.breadcrumb.home')}</Link>
          <span className="text-white/30 text-sm">/</span>
          <span className="text-secondary text-sm font-medium">{t('contact.hero.breadcrumb.contact')}</span>
        </div>

        <div className="max-w-3xl">
          <span className="section-label block mb-4 text-secondary/80">{t('contact.hero.label')}</span>
          <h1 className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(44px, 6vw, 72px)', letterSpacing: '-0.03em', lineHeight: '0.95' }}>
            {t('contact.hero.title1')}
            <br />
            <span className="italic font-light" style={{ color: '#2A9BAD' }}>{t('contact.hero.titleItalic')}</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-xl">{t('contact.hero.description')}</p>
        </div>

        <div className="flex flex-wrap gap-6 mt-14 pt-10 border-t border-white/10">
          {stats?.map((stat) => (
            <div key={stat?.labelKey} className="flex flex-col gap-1">
              <span className="font-display font-bold text-white text-3xl">{stat?.value}</span>
              <span className="text-white/40 text-xs uppercase tracking-widest">{t(stat?.labelKey)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
