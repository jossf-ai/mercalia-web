'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from '@/context/LanguageContext';

const reasonIcons = [
  <svg key="0" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  <svg key="1" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
  <svg key="2" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4l-5 5-4-4-6 6" /></svg>,
  <svg key="3" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  <svg key="4" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
];

export default function WhyMercalia() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const reveals = sectionRef?.current?.querySelectorAll('.reveal');
    if (!reveals) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.remove('hidden-init'); }),
      { threshold: 0.1 }
    );
    reveals?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  const reasons = [0, 1, 2, 3, 4]?.map((i) => ({
    icon: reasonIcons?.[i],
    title: t(`why.${i}.title`),
    description: t(`why.${i}.description`),
  }));

  return (
    <section className="py-24 bg-brand-bg overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative reveal hidden-init">
            <div className="relative rounded-2xl overflow-hidden h-[520px]">
              <AppImage src="https://img.rocket.new/generatedImages/rocket_gen_img_1b0cded1a-1772892391994.png" alt="Cargo ship at sea carrying bulk commodities through international shipping lane" fill className="object-cover" priority />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(11,44,74,0.6) 0%, rgba(26,122,138,0.2) 100%)' }} />
            </div>
            <div className="absolute -bottom-6 -right-6 md:right-8 bg-white rounded-2xl p-6 shadow-card-hover border border-brand-border animate-float" style={{ maxWidth: '220px' }}>
              <div className="text-4xl font-display font-bold text-primary mb-1">$2B+</div>
              <div className="text-sm font-semibold text-brand-fg">{t('why.stats.volume')}</div>
              <div className="text-xs text-brand-muted mt-1">{t('why.stats.since')}</div>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-full bg-brand-bgDark rounded-full h-1.5">
                  <div className="h-1.5 rounded-full bg-secondary" style={{ width: '78%' }} />
                </div>
                <span className="text-xs font-semibold text-secondary">78%</span>
              </div>
              <div className="text-xs text-brand-muted mt-1">{t('why.stats.growth')}</div>
            </div>
            <div className="absolute -top-4 -left-4 md:left-8 bg-primary rounded-xl px-5 py-3 shadow-lg">
              <div className="flex items-center gap-2">
                <svg width="18" height="18" fill="none" stroke="#2A9BAD" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
                <span className="text-white text-xs font-semibold tracking-wide">{t('why.badge')}</span>
              </div>
            </div>
          </div>

          <div>
            <span className="section-label block mb-4 reveal hidden-init">{t('why.label')}</span>
            <h2 className="font-display font-bold text-primary mb-6 reveal hidden-init stagger-1" style={{ fontSize: 'clamp(32px, 3.5vw, 46px)', letterSpacing: '-0.025em', lineHeight: '1.1' }}>
              {t('why.title1')}
              <br />
              <span className="italic font-light text-secondary">{t('why.titleItalic')}</span>
              <br />
              {t('why.title3')}
            </h2>
            <p className="text-brand-muted leading-relaxed mb-10 reveal hidden-init stagger-2">{t('why.description')}</p>

            <div className="space-y-6">
              {reasons?.map((reason, i) => (
                <div key={reason?.title} className={`flex gap-5 reveal hidden-init stagger-${Math.min(i + 3, 4)}`}>
                  <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-secondary mt-0.5" style={{ background: 'rgba(26, 122, 138, 0.08)', border: '1px solid rgba(26, 122, 138, 0.15)' }}>
                    {reason?.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-fg mb-1">{reason?.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{reason?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}