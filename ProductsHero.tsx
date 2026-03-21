'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function HomeCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const reveals = sectionRef?.current?.querySelectorAll('.reveal');
    if (!reveals) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.remove('hidden-init'); }),
      { threshold: 0.2 }
    );
    reveals?.forEach(el => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  const trustItems = [t('homeCTA.trust.0'), t('homeCTA.trust.1'), t('homeCTA.trust.2')];

  return (
    <section className="py-24 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="relative rounded-3xl overflow-hidden py-20 px-8 md:px-16 text-center reveal hidden-init" style={{ background: 'linear-gradient(145deg, #1a2332 0%, #0B2C4A 50%, #0d3a4a 100%)', border: '1px solid rgba(0,200,212,0.15)', boxShadow: '0 0 80px rgba(0,200,212,0.08)' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-12" style={{ background: 'radial-gradient(circle, #00c8d4 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #1A7A8A 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />
            <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            {/* Top cyan accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #00c8d4 40%, #00c8d4 60%, transparent)' }} />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8" style={{ background: 'rgba(0,200,212,0.12)', border: '1px solid rgba(0,200,212,0.3)', color: '#00c8d4', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#00c8d4' }} />
              {t('homeCTA.badge')}
            </span>

            <h2 className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(36px, 5vw, 60px)', letterSpacing: '-0.03em', lineHeight: '1.0' }}>
              {t('homeCTA.title1')}
              <br />
              <span className="italic font-light" style={{ color: '#00c8d4' }}>{t('homeCTA.titleItalic')}</span>
            </h2>

            <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-lg mx-auto">{t('homeCTA.description')}</p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'linear-gradient(135deg, #00c8d4, #1A7A8A)', color: '#1a2332', boxShadow: '0 8px 32px rgba(0,200,212,0.3)' }}
              >
                {t('homeCTA.cta.start')}
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-1"
                style={{ border: '1.5px solid rgba(0,200,212,0.4)', background: 'rgba(0,200,212,0.06)' }}
              >
                {t('homeCTA.cta.services')}
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 justify-center">
              {trustItems?.map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/50 text-sm">
                  <svg width="14" height="14" fill="none" stroke="#00c8d4" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}