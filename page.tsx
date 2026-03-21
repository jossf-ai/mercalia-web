'use client';

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const certData = [
  { code: 'ISO 9001:2015', body: 'Bureau Veritas', year: '2024', status: 'Active' as const, color: '#1A7A8A', span: 'lg:col-span-2', nameKey: 'compliance.certs.0.name', descKey: 'compliance.certs.0.description' },
  { code: 'ISO 14001:2015', body: 'SGS Group', year: '2024', status: 'Active' as const, color: '#0B2C4A', span: '', nameKey: 'compliance.certs.1.name', descKey: 'compliance.certs.1.description' },
  { code: 'ISO 45001:2018', body: 'DNV GL', year: '2023', status: 'Renewed' as const, color: '#C9A84C', span: '', nameKey: 'compliance.certs.2.name', descKey: 'compliance.certs.2.description' },
  { code: 'OHSAS 18001', body: 'Intertek', year: '2024', status: 'Active' as const, color: '#1A7A8A', span: '', nameKey: 'compliance.certs.3.name', descKey: 'compliance.certs.3.description' },
  { code: 'ISO 28000:2022', body: "Lloyd\'s Register", year: '2024', status: 'Active' as const, color: '#0B2C4A', span: 'lg:col-span-2', nameKey: 'compliance.certs.4.name', descKey: 'compliance.certs.4.description' },
];

const certBodies = [
  { name: 'SGS', fullName: 'SGS S.A.', color: '#C9A84C' },
  { name: 'Bureau Veritas', fullName: 'Bureau Veritas / Veritas Qualitas', color: '#1A7A8A' },
];

export default function CertificationsSection() {
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
    <section ref={sectionRef} className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="reveal hidden-init">
            <span className="section-label block mb-3">{t('compliance.certs.label')}</span>
            <h2 className="font-display font-bold text-primary" style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.03em', lineHeight: '1' }}>
              {t('compliance.certs.title1')}
              <br />
              <span className="italic font-light text-secondary">{t('compliance.certs.titleItalic')}</span>
            </h2>
          </div>
          <p className="reveal hidden-init stagger-2 text-muted text-base leading-relaxed max-w-sm">{t('compliance.certs.description')}</p>
        </div>

        {/* Certification Bodies Highlight */}
        <div className="reveal hidden-init mb-8 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center" style={{ background: 'rgba(42,155,173,0.06)', border: '1px solid rgba(42,155,173,0.18)' }}>
          <div className="flex-shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A9BAD" strokeWidth="1.8">
              <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-white/70 text-sm leading-relaxed mb-3">{t('compliance.certs.producerNote')}</p>
            <div className="flex flex-wrap gap-3">
              {certBodies.map((body) => (
                <span key={body.name} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background: `${body.color}15`, color: body.color, border: `1px solid ${body.color}30` }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /><polyline points="9 12 11 14 15 10" /></svg>
                  {body.fullName}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certData.map((cert, i) => (
            <div key={cert.code} className={`bento-card p-7 flex flex-col gap-4 reveal hidden-init ${cert.span || ''}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex items-start justify-between gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${cert.color}15`, border: `1.5px solid ${cert.color}30` }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={cert.color} strokeWidth="1.8"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /><polyline points="9 12 11 14 15 10" /></svg>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: cert.status === 'Active' ? 'rgba(26,122,138,0.1)' : 'rgba(201,168,76,0.1)', color: cert.status === 'Active' ? '#1A7A8A' : '#C9A84C', border: `1px solid ${cert.status === 'Active' ? 'rgba(26,122,138,0.25)' : 'rgba(201,168,76,0.25)'}` }}>
                    {cert.status === 'Active' ? t('compliance.certs.status.active') : t('compliance.certs.status.renewed')}
                  </span>
                  <span className="text-xs text-muted">{cert.year}</span>
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-primary text-xl mb-1">{cert.code}</div>
                <div className="text-sm font-semibold text-brand-fg mb-3">{t(cert.nameKey)}</div>
                <p className="text-muted text-sm leading-relaxed">{t(cert.descKey)}</p>
              </div>
              <div className="mt-auto pt-4 border-t border-brand-border flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8BA3B5" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                <span className="text-xs text-muted">{t('compliance.certs.issuedBy')} {cert.body}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
