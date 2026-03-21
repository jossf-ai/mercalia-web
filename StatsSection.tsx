'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const guaranteeIcons = [
  <svg key="0" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
  <svg key="1" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
  <svg key="2" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>,
];

export default function ResponseGuarantee() {
  const { t } = useLanguage();

  const guarantees = [0, 1, 2]?.map((i) => ({
    timeframe: t(`contact.response.${i}.timeframe`),
    label: t(`contact.response.${i}.label`),
    description: t(`contact.response.${i}.description`),
    icon: guaranteeIcons?.[i],
    highlight: i === 0,
  }));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label block mb-4 text-secondary/80">{t('contact.response.label')}</span>
            <h2 className="font-display font-bold text-primary mb-6" style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.03em', lineHeight: '0.95' }}>
              {t('contact.response.title1')}
              <br />
              <span className="italic font-light" style={{ color: '#1A7A8A' }}>{t('contact.response.titleItalic')}</span>
            </h2>
            <p className="text-brand-muted leading-relaxed mb-8 max-w-md">{t('contact.response.description')}</p>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(11,44,74,0.06), rgba(26,122,138,0.08))', border: '1px solid rgba(26,122,138,0.2)' }}>
              <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-semibold text-primary">{t('contact.response.sla')}</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {guarantees?.map((g, i) => (
              <div key={i} className={`relative p-6 rounded-2xl transition-all duration-300 ${g?.highlight ? 'text-white' : 'bg-white hover:shadow-md'}`} style={g?.highlight ? { background: 'linear-gradient(135deg, #0B2C4A 0%, #1A7A8A 100%)', border: 'none' } : { border: '1px solid var(--border)' }}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${g?.highlight ? 'bg-white/15 text-white' : 'text-secondary'}`} style={!g?.highlight ? { background: 'rgba(26,122,138,0.08)' } : {}}>
                    {g?.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <span className={`font-display font-bold text-xl ${g?.highlight ? 'text-white' : 'text-primary'}`}>{g?.timeframe}</span>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${g?.highlight ? 'bg-white/20 text-white' : 'text-secondary'}`} style={!g?.highlight ? { background: 'rgba(26,122,138,0.1)' } : {}}>{g?.label}</span>
                    </div>
                    <p className={`text-sm leading-relaxed ${g?.highlight ? 'text-white/75' : 'text-brand-muted'}`}>{g?.description}</p>
                  </div>
                </div>
                {g?.highlight && (
                  <div className="absolute top-4 right-4 opacity-20">
                    <svg width="40" height="40" fill="none" stroke="white" strokeWidth="1" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
