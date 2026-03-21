'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function ComplianceHero() {
  const { t } = useLanguage();

  const stats = [
    { value: '12+', labelKey: 'compliance.hero.stat.0.label' },
    { value: '40+', labelKey: 'compliance.hero.stat.1.label' },
    { value: '100%', labelKey: 'compliance.hero.stat.2.label' },
    { value: '15+', labelKey: 'compliance.hero.stat.3.label' },
  ];

  return (
    <section className="page-hero relative pt-32 pb-20 overflow-hidden" style={{ minHeight: '52vh', display: 'flex', alignItems: 'center' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #1A7A8A 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-8" style={{ background: 'radial-gradient(circle, #2A9BAD 0%, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-[0.04] hidden lg:block">
          <svg width="400" height="400" viewBox="0 0 24 24" fill="white"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="flex items-center gap-2 mb-8">
          <Link href="/homepage" className="text-white/40 text-sm hover:text-white/70 transition-colors">{t('compliance.hero.breadcrumb.home')}</Link>
          <span className="text-white/30 text-sm">/</span>
          <span className="text-sm font-medium" style={{ color: '#00c8d4' }}>{t('compliance.hero.breadcrumb.compliance')}</span>
        </div>

        <div className="max-w-3xl">
          <span className="section-label block mb-4" style={{ color: '#00c8d4', opacity: 0.85 }}>{t('compliance.hero.label')}</span>
          <h1 className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(44px, 6vw, 72px)', letterSpacing: '-0.03em', lineHeight: '0.95' }}>
            {t('compliance.hero.title1')}
            <br />
            {t('compliance.hero.title2')}{' '}
            <span className="italic font-light" style={{ color: '#00c8d4' }}>{t('compliance.hero.titleItalic')}</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-8">{t('compliance.hero.description')}</p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/services" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5" style={{ border: '1.5px solid rgba(0,200,212,0.4)', color: '#00c8d4', background: 'rgba(0,200,212,0.06)' }}>{t('compliance.hero.cta.services')}</Link>
          </div>
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
