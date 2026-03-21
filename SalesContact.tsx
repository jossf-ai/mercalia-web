'use client';

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const badges = [
  { acronym: 'AML', fullName: 'Anti-Money Laundering', region: 'Global', category: 'Financial', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z' },
  { acronym: 'KYC', fullName: 'Know Your Customer', region: 'Global', category: 'Financial', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { acronym: 'GDPR', fullName: 'General Data Protection Regulation', region: 'EU', category: 'Data Privacy', icon: 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z' },
  { acronym: 'OFAC', fullName: 'Office of Foreign Assets Control', region: 'USA', category: 'Sanctions', icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z' },
  { acronym: 'FCPA', fullName: 'Foreign Corrupt Practices Act', region: 'USA', category: 'Anti-Bribery', icon: 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z' },
  { acronym: 'REACH', fullName: 'Registration, Evaluation, Authorisation of Chemicals', region: 'EU', category: 'Environmental', icon: 'M17 8C8 10 5.9 16.17 3.82 19.82L5.71 21l1-1.9C7 20.5 8.5 21 10 21c3.56 0 5.5-2.5 7-5 1.5 2.5 3.44 5 7 5v-2c-2.5 0-4-2.5-5.5-5 1.5-2.5 3-5 5.5-5V7c-3.56 0-5.5 2.5-7 5-1.5-2.5-3.44-5-7-5V9c2.5 0 4 2.5 5.5 5-1.5 2.5-3 5-5.5 5-1 0-1.5-.5-2-1l1.5-2.82C9.5 17 11 14 17 8z' },
  { acronym: 'CITES', fullName: 'Convention on International Trade in Endangered Species', region: 'Global', category: 'Environmental', icon: 'M12 2a10 10 0 100 20A10 10 0 0012 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z' },
  { acronym: 'WTO', fullName: 'World Trade Organization Compliance', region: 'Global', category: 'Trade', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' },
];

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Financial: { bg: 'rgba(11,44,74,0.08)', text: '#0B2C4A', border: 'rgba(11,44,74,0.2)' },
  'Data Privacy': { bg: 'rgba(26,122,138,0.08)', text: '#1A7A8A', border: 'rgba(26,122,138,0.2)' },
  Sanctions: { bg: 'rgba(201,168,76,0.08)', text: '#9A7A2A', border: 'rgba(201,168,76,0.2)' },
  'Anti-Bribery': { bg: 'rgba(11,44,74,0.08)', text: '#0B2C4A', border: 'rgba(11,44,74,0.2)' },
  Environmental: { bg: 'rgba(42,155,173,0.08)', text: '#2A9BAD', border: 'rgba(42,155,173,0.2)' },
  Trade: { bg: 'rgba(26,122,138,0.08)', text: '#1A7A8A', border: 'rgba(26,122,138,0.2)' },
};

export default function RegulatoryBadges() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.remove('hidden-init')); }); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24" style={{ background: 'linear-gradient(180deg, #EDF0F4 0%, #F5F7FA 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <span className="section-label block mb-3 reveal hidden-init">{t('compliance.reg.label')}</span>
          <h2 className="font-display font-bold text-primary reveal hidden-init stagger-1" style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.03em', lineHeight: '1' }}>
            {t('compliance.reg.title1')}{' '}
            <span className="italic font-light text-secondary">{t('compliance.reg.titleItalic')}</span>
          </h2>
          <p className="text-muted text-base leading-relaxed max-w-lg mx-auto mt-4 reveal hidden-init stagger-2">{t('compliance.reg.description')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((badge, i) => {
            const colors = categoryColors[badge.category] || categoryColors['Financial'];
            return (
              <div key={badge.acronym} className="reveal hidden-init bg-white rounded-2xl p-6 border border-brand-border hover:border-secondary hover:shadow-lg transition-all duration-300 group" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300" style={{ background: colors.bg, border: `1.5px solid ${colors.border}` }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill={colors.text}><path d={badge.icon} /></svg>
                </div>
                <div className="font-display font-bold text-primary text-2xl mb-1 group-hover:text-secondary transition-colors duration-300">{badge.acronym}</div>
                <div className="text-xs text-muted leading-snug mb-4">{badge.fullName}</div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}>{badge.category}</span>
                  <span className="text-xs text-muted">{badge.region}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
