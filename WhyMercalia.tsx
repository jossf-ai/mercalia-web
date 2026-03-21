'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const salesTeam = [
  { name: 'Jose S. Gardiol', titleKey: 'contact.sales.0.title', email: 'jg@mercaliacg.com', phone: '+54 3425246765', phoneLabel: 'WhatsApp LATAM', regionKey: 'contact.sales.region.0', initials: 'JG', isWhatsApp: true },
  { name: 'Global Sales Desk', titleKey: 'contact.sales.1.title', email: 'contact@mercaliacg.com', phone: null, phoneLabel: null, regionKey: 'contact.sales.region.1', initials: 'GS', isWhatsApp: false },
  { name: 'Compliance & Legal', titleKey: 'contact.sales.2.title', email: 'compliance@mercaliacg.com', phone: null, phoneLabel: null, regionKey: 'contact.sales.region.2', initials: 'CL', isWhatsApp: false },
];

export default function SalesContact() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-12">
          <span className="section-label block mb-3 text-secondary/80">{t('contact.sales.label')}</span>
          <h2 className="font-display font-bold text-primary" style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.03em', lineHeight: '1' }}>
            {t('contact.sales.title1')}{' '}
            <span className="italic font-light" style={{ color: '#1A7A8A' }}>{t('contact.sales.titleItalic')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {salesTeam?.map((contact, i) => (
            <div key={contact?.name} className="bento-card p-7 flex flex-col gap-5" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-display font-bold text-sm" style={{ background: 'linear-gradient(135deg, #0B2C4A, #1A7A8A)' }}>{contact?.initials}</div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: 'rgba(26,122,138,0.08)', color: '#1A7A8A', border: '1px solid rgba(26,122,138,0.2)' }}>{t(contact?.regionKey)}</span>
              </div>

              <div>
                <p className="font-display font-bold text-primary text-lg leading-tight">{contact?.name}</p>
                <p className="text-brand-muted text-sm mt-0.5">{t(contact?.titleKey)}</p>
              </div>

              <div className="flex flex-col gap-3 mt-auto">
                <a href={`mailto:${contact?.email}`} className="flex items-center gap-3 text-sm text-brand-fg hover:text-secondary transition-colors group">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-secondary/10" style={{ background: 'rgba(26,122,138,0.06)' }}>
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-secondary"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </span>
                  <span className="truncate">{contact?.email}</span>
                </a>
                {contact?.isWhatsApp && contact?.phone && (
                <a href={`https://wa.me/${contact?.phone?.replace(/[\s+]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-brand-fg hover:text-secondary transition-colors group">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-secondary/10" style={{ background: 'rgba(26,122,138,0.06)' }}>
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" className="text-secondary"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </span>
                  <span>{contact?.phone} <span className="text-xs text-brand-muted">(WhatsApp LATAM)</span></span>
                </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
