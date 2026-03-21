'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function ComplianceCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.remove('hidden-init')); }); },
      { threshold: 0.15 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  const trustItems = [
    { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', labelKey: 'compliance.cta.trust.0' },
    { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4', labelKey: 'compliance.cta.trust.1' },
    { icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3', labelKey: 'compliance.cta.trust.2' },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="relative rounded-3xl overflow-hidden p-12 md:p-16 reveal hidden-init" style={{ background: 'linear-gradient(135deg, #0B2C4A 0%, #0E3A60 50%, #1A7A8A 100%)' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #2A9BAD 0%, transparent 70%)', transform: 'translate(20%, -20%)' }} />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-8" style={{ background: 'radial-gradient(circle, #1A7A8A 0%, transparent 70%)', transform: 'translate(-20%, 20%)' }} />
            <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-[0.05] hidden lg:block">
              <svg width="280" height="280" viewBox="0 0 24 24" fill="white"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>
            </div>
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="section-label block mb-4 text-secondary/80">{t('compliance.cta.label')}</span>
            <h2 className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.03em', lineHeight: '1' }}>
              {t('compliance.cta.title1')}
              <br />
              <span className="italic font-light" style={{ color: '#2A9BAD' }}>{t('compliance.cta.titleItalic')}</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-lg">{t('compliance.cta.description')}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                {t('compliance.cta.cta.dossier')}
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/services" className="btn-outline text-sm">{t('compliance.cta.cta.services')}</Link>
            </div>

            <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t border-white/10">
              {trustItems?.map((item) => (
                <div key={item?.labelKey} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2A9BAD" strokeWidth="2"><path d={item?.icon} /></svg>
                  <span className="text-white/70 text-sm">{t(item?.labelKey)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
