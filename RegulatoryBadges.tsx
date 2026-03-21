'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const auditRawData = [
  { id: 'AUD-2024-001', titleKey: 'compliance.audit.0.title', type: 'Quality', period: 'Q4 2024', auditor: 'Bureau Veritas', status: 'Passed' as const, findingsKey: 'compliance.audit.0.findings', scopeKey: 'compliance.audit.0.scope' },
  { id: 'AUD-2024-002', titleKey: 'compliance.audit.1.title', type: 'Financial', period: 'Q3 2024', auditor: 'Deloitte Risk Advisory', status: 'Passed' as const, findingsKey: 'compliance.audit.1.findings', scopeKey: 'compliance.audit.1.scope' },
  { id: 'AUD-2024-003', titleKey: 'compliance.audit.2.title', type: 'Security', period: 'Q2 2024', auditor: "Lloyd\'s Register", status: 'Passed' as const, findingsKey: 'compliance.audit.2.findings', scopeKey: 'compliance.audit.2.scope' },
  { id: 'AUD-2025-001', titleKey: 'compliance.audit.3.title', type: 'Environmental', period: 'Q1 2025', auditor: 'SGS Group', status: 'In Review' as const, findingsKey: 'compliance.audit.3.findings', scopeKey: 'compliance.audit.3.scope' },
  { id: 'AUD-2025-002', titleKey: 'compliance.audit.4.title', type: 'Data Privacy', period: 'Q2 2025', auditor: 'PwC Legal', status: 'Scheduled' as const, findingsKey: 'compliance.audit.4.findings', scopeKey: 'compliance.audit.4.scope' },
];

const typeColors: Record<string, string> = {
  Quality: '#0B2C4A', Financial: '#1A7A8A', Security: '#C9A84C', Environmental: '#2A9BAD', 'Data Privacy': '#8BA3B5',
};

export default function AuditDocumentation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const { t } = useLanguage();

  const statusConfig = {
    Passed: { bg: 'rgba(26,122,138,0.1)', text: '#1A7A8A', border: 'rgba(26,122,138,0.25)', dot: '#1A7A8A', labelKey: 'compliance.audit.status.passed' },
    'In Review': { bg: 'rgba(201,168,76,0.1)', text: '#9A7A2A', border: 'rgba(201,168,76,0.25)', dot: '#C9A84C', labelKey: 'compliance.audit.status.inReview' },
    Scheduled: { bg: 'rgba(139,163,181,0.1)', text: '#6B7E8F', border: 'rgba(139,163,181,0.25)', dot: '#8BA3B5', labelKey: 'compliance.audit.status.scheduled' },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.remove('hidden-init')); }); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const summaryData = [
    { value: '3', labelKey: 'compliance.audit.summary.0.label', subKey: 'compliance.audit.summary.0.sub' },
    { value: '100%', labelKey: 'compliance.audit.summary.1.label', subKey: 'compliance.audit.summary.1.sub' },
    { value: 'Jun 2025', labelKey: 'compliance.audit.summary.2.label', subKey: 'compliance.audit.summary.2.sub' },
  ];

  return (
    <section ref={sectionRef} className="py-24" style={{ background: 'linear-gradient(180deg, #EDF0F4 0%, #F5F7FA 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="reveal hidden-init">
            <span className="section-label block mb-3">{t('compliance.audit.label')}</span>
            <h2 className="font-display font-bold text-primary" style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.03em', lineHeight: '1' }}>
              {t('compliance.audit.title1')}
              <br />
              <span className="italic font-light text-secondary">{t('compliance.audit.titleItalic')}</span>
            </h2>
          </div>
          <div className="reveal hidden-init stagger-2 flex flex-col gap-2 items-start md:items-end">
            <p className="text-muted text-sm leading-relaxed max-w-xs md:text-right">{t('compliance.audit.note')}</p>
          </div>
        </div>

        <div className="space-y-3">
          {auditRawData.map((doc, i) => {
            const sc = statusConfig[doc.status];
            const isOpen = expanded === doc.id;
            return (
              <div key={doc.id} className="reveal hidden-init bg-white rounded-2xl border border-brand-border overflow-hidden transition-all duration-300 hover:border-secondary/40" style={{ transitionDelay: `${i * 70}ms` }}>
                <button className="w-full text-left px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4" onClick={() => setExpanded(isOpen ? null : doc.id)}>
                  <div className="flex-shrink-0 w-2 h-2 rounded-full hidden sm:block" style={{ background: typeColors[doc.type] || '#1A7A8A' }} />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <span className="font-semibold text-primary text-sm">{t(doc.titleKey)}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                      <span className="font-mono">{doc.id}</span>
                      <span>·</span><span>{doc.period}</span>
                      <span>·</span><span>{doc.auditor}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5" style={{ background: sc.bg, color: sc.text, border: `1px solid ${sc.border}` }}>
                      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: sc.dot }} />
                      {t(sc.labelKey)}
                    </span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8BA3B5" strokeWidth="2" className="transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>
                <div className="overflow-hidden transition-all duration-400" style={{ maxHeight: isOpen ? '200px' : '0px' }}>
                  <div className="px-6 pb-6 pt-0 border-t border-brand-border">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div>
                        <div className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">{t('compliance.audit.scope')}</div>
                        <div className="text-sm text-brand-fg">{t(doc.scopeKey)}</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">{t('compliance.audit.findings')}</div>
                        <div className="text-sm text-brand-fg">{t(doc.findingsKey)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4 reveal hidden-init">
          {summaryData.map((item) => (
            <div key={item.labelKey} className="bg-white rounded-xl p-5 border border-brand-border text-center">
              <div className="font-display font-bold text-primary text-2xl">{item.value}</div>
              <div className="text-xs font-semibold text-brand-fg mt-1">{t(item.labelKey)}</div>
              <div className="text-xs text-muted mt-0.5">{t(item.subKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
