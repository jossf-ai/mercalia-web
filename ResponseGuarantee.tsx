'use client';

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const standardsData = [
  { number: '01', titleKey: 'compliance.quality.0.title', descKey: 'compliance.quality.0.description', metrics: [{ labelKey: 'compliance.quality.0.m0', value: '47' }, { labelKey: 'compliance.quality.0.m1', value: '14 días' }] },
  { number: '02', titleKey: 'compliance.quality.1.title', descKey: 'compliance.quality.1.description', metrics: [{ labelKey: 'compliance.quality.1.m0', value: '3-stage' }, { labelKey: 'compliance.quality.1.m1', value: '<0.8%' }] },
  { number: '03', titleKey: 'compliance.quality.2.title', descKey: 'compliance.quality.2.description', metrics: [{ labelKey: 'compliance.quality.2.m0', value: '28+' }, { labelKey: 'compliance.quality.2.m1', value: '100%' }] },
  { number: '04', titleKey: 'compliance.quality.3.title', descKey: 'compliance.quality.3.description', metrics: [{ labelKey: 'compliance.quality.3.m0', value: 'Real-time' }, { labelKey: 'compliance.quality.3.m1', value: '<2 hrs' }] },
];

export default function QualityStandards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.remove('hidden-init')); }); },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="reveal hidden-init">
            <span className="section-label block mb-3">{t('compliance.quality.label')}</span>
            <h2 className="font-display font-bold text-primary" style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.03em', lineHeight: '1' }}>
              {t('compliance.quality.title1')}
              <br />
              <span className="italic font-light text-secondary">{t('compliance.quality.titleItalic')}</span>
            </h2>
          </div>
          <p className="reveal hidden-init stagger-2 text-muted text-base leading-relaxed max-w-sm lg:text-right">{t('compliance.quality.description')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {standardsData?.map((std, i) => (
            <div key={std?.number} className={`reveal hidden-init bento-card p-8 ${i % 2 === 1 ? 'lg:mt-8' : ''}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-lg" style={{ background: 'rgba(11,44,74,0.06)', color: '#0B2C4A' }}>{std?.number}</div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-primary text-xl mb-3">{t(std?.titleKey)}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">{t(std?.descKey)}</p>
                  <div className="flex gap-6 pt-5 border-t border-brand-border">
                    {std?.metrics?.map((m) => (
                      <div key={m?.labelKey}>
                        <div className="font-display font-bold text-secondary text-xl">{m?.value}</div>
                        <div className="text-xs text-muted mt-0.5">{t(m?.labelKey)}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-4 reveal hidden-init" style={{ background: 'linear-gradient(135deg, rgba(11,44,74,0.04) 0%, rgba(26,122,138,0.06) 100%)', border: '1px solid rgba(26,122,138,0.15)' }}>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(26,122,138,0.1)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A7A8A" strokeWidth="1.8"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>
          </div>
          <div>
            <div className="font-semibold text-primary text-sm">{t('compliance.quality.annualAudit.title')}</div>
            <div className="text-muted text-xs mt-0.5">{t('compliance.quality.annualAudit.description')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
