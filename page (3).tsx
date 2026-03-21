'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const serviceIcons = [
  <svg key="0" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
  <svg key="1" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4l-5 5-4-4-6 6" /></svg>,
  <svg key="2" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 3v5h-7V8zM5.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM18.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" /></svg>,
  <svg key="3" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  <svg key="4" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>,
  <svg key="5" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
];

export default function ServicesOverview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const cards = sectionRef?.current?.querySelectorAll('.reveal');
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.remove('hidden-init'); }); },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    cards?.forEach((card) => observer?.observe(card));
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="py-24 bg-brand-bg" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="section-label block mb-3 reveal hidden-init">{t('servicesOverview.label')}</span>
            <h2 className="font-display font-bold text-primary reveal hidden-init stagger-1" style={{ fontSize: 'clamp(36px, 4vw, 52px)', letterSpacing: '-0.025em', lineHeight: '1.05' }}>
              {t('servicesOverview.title1')}
              <br />
              <span className="italic font-light text-secondary">{t('servicesOverview.titleItalic')}</span>
            </h2>
          </div>
          <Link href="/services" className="btn-primary-dark self-start md:self-end reveal hidden-init stagger-2">
            {t('servicesOverview.allServices')}
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Large card */}
          <div className="bento-card md:col-span-2 p-8 md:p-10 reveal hidden-init stagger-1" style={{ minHeight: '280px' }}>
            <div className="relative h-full flex flex-col justify-between">
              <span className="service-number">01</span>
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-secondary mb-6" style={{ background: 'rgba(11, 44, 74, 0.06)' }}>
                  {serviceIcons?.[0]}
                </div>
                <h3 className="font-display text-2xl font-bold text-primary mb-3" style={{ letterSpacing: '-0.015em' }}>{t('servicesOverview.0.title')}</h3>
                <p className="text-brand-muted leading-relaxed">{t('servicesOverview.0.description')}</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-secondary text-sm font-semibold">
                <span>{t('servicesOverview.learnMore')}</span>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </div>
          </div>

          <div className="bento-card p-7 reveal hidden-init stagger-2" style={{ minHeight: '280px' }}>
            <div className="relative h-full flex flex-col justify-between">
              <span className="service-number">02</span>
              <div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-secondary mb-5" style={{ background: 'rgba(11, 44, 74, 0.06)' }}>{serviceIcons?.[1]}</div>
                <h3 className="font-display text-xl font-bold text-primary mb-2" style={{ letterSpacing: '-0.015em' }}>{t('servicesOverview.1.title')}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{t('servicesOverview.1.description')}</p>
              </div>
            </div>
          </div>

          <div className="bento-card p-7 reveal hidden-init stagger-2" style={{ minHeight: '240px' }}>
            <div className="relative h-full flex flex-col justify-between">
              <span className="service-number">03</span>
              <div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-secondary mb-5" style={{ background: 'rgba(11, 44, 74, 0.06)' }}>{serviceIcons?.[2]}</div>
                <h3 className="font-display text-xl font-bold text-primary mb-2" style={{ letterSpacing: '-0.015em' }}>{t('servicesOverview.2.title')}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{t('servicesOverview.2.description')}</p>
              </div>
            </div>
          </div>

          <div className="bento-card p-7 reveal hidden-init stagger-3" style={{ minHeight: '240px' }}>
            <div className="relative h-full flex flex-col">
              <span className="service-number">04</span>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-secondary mb-5" style={{ background: 'rgba(11, 44, 74, 0.06)' }}>{serviceIcons?.[3]}</div>
              <h3 className="font-display text-xl font-bold text-primary mb-2" style={{ letterSpacing: '-0.015em' }}>{t('servicesOverview.3.title')}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{t('servicesOverview.3.description')}</p>
            </div>
          </div>

          <div className="bento-card p-7 reveal hidden-init stagger-4" style={{ minHeight: '240px', background: 'linear-gradient(135deg, #0B2C4A, #136070)' }}>
            <div className="relative h-full flex flex-col">
              <span className="absolute top-0 right-4 font-display text-7xl font-bold text-white/5 leading-none pointer-events-none">05</span>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white mb-5" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>{serviceIcons?.[4]}</div>
              <h3 className="font-display text-xl font-bold text-white mb-2" style={{ letterSpacing: '-0.015em' }}>{t('servicesOverview.4.title')}</h3>
              <p className="text-white/65 text-sm leading-relaxed">{t('servicesOverview.4.description')}</p>
            </div>
          </div>

          {/* Proyectos en Curso - new card spanning full width */}
          <div className="bento-card md:col-span-3 p-8 reveal hidden-init stagger-4" style={{ minHeight: '200px', background: 'linear-gradient(135deg, rgba(11,44,74,0.04), rgba(26,122,138,0.08))', border: '1px solid rgba(26,122,138,0.2)' }}>
            <div className="relative h-full flex flex-col md:flex-row md:items-start gap-6">
              <span className="absolute top-0 right-6 font-display text-7xl font-bold text-secondary/5 leading-none pointer-events-none">06</span>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-secondary flex-shrink-0" style={{ background: 'rgba(26, 122, 138, 0.1)', border: '1px solid rgba(26,122,138,0.2)' }}>{serviceIcons?.[5]}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-display text-xl font-bold text-primary" style={{ letterSpacing: '-0.015em' }}>{t('servicesOverview.5.title')}</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: 'rgba(26,122,138,0.12)', color: '#1A7A8A', border: '1px solid rgba(26,122,138,0.25)' }}>{t('servicesOverview.5.badge')}</span>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">{t('servicesOverview.5.description')}</p>
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ background: 'rgba(11,44,74,0.06)', color: '#0B2C4A', border: '1px solid rgba(11,44,74,0.12)' }}>
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    PATAGONIA TROUT
                  </span>
                  <span className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ background: 'rgba(11,44,74,0.06)', color: '#0B2C4A', border: '1px solid rgba(11,44,74,0.12)' }}>
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    HARINERA PATAGÓNICA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}