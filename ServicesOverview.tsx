'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const officesData = [
  { id: 'hq', labelKey: 'contact.offices.0.label', city: 'Albuquerque', country: 'United States', flag: '🇺🇸', address: 'New Mexico, USA', registration: 'LLC Reg. #0008002716', timezone: 'MST (UTC−7)', hoursKey: 'contact.offices.0.hours', typeKey: 'contact.offices.0.type', accent: '#0B2C4A' },
  { id: 'latam', labelKey: 'contact.offices.1.label', city: 'Buenos Aires', country: 'Argentina', flag: '🇦🇷', address: 'Buenos Aires, Argentina', registration: 'Regional Hub', timezone: 'ART (UTC−3)', hoursKey: 'contact.offices.1.hours', typeKey: 'contact.offices.1.type', accent: '#1A7A8A' },
  { id: 'eu', labelKey: 'contact.offices.2.label', city: 'Madrid', country: 'Spain', flag: '🇪🇸', address: 'Madrid, Spain', registration: 'EU Liaison Office', timezone: 'CET (UTC+1)', hoursKey: 'contact.offices.2.hours', typeKey: 'contact.offices.2.type', accent: '#2A9BAD' },
];

export default function OfficeLocations() {
  const [active, setActive] = useState('hq');
  const { t } = useLanguage();
  const activeOffice = officesData?.find((o) => o?.id === active) ?? officesData?.[0];

  return (
    <section className="py-20" style={{ background: '#F5F7FA' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-12">
          <span className="section-label block mb-3 text-secondary/80">{t('contact.offices.label')}</span>
          <h2 className="font-display font-bold text-primary" style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.03em', lineHeight: '1' }}>
            {t('contact.offices.title1')}{' '}
            <span className="italic font-light" style={{ color: '#1A7A8A' }}>{t('contact.offices.titleItalic')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-3">
            {officesData?.map((office) => (
              <button key={office?.id} onClick={() => setActive(office?.id)} className={`text-left p-5 rounded-xl border transition-all duration-300 ${active === office?.id ? 'bg-white border-secondary shadow-md' : 'bg-white/60 border-brand-border hover:border-accent hover:bg-white'}`}>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl">{office?.flag}</span>
                  <div>
                    <p className="font-semibold text-primary text-sm">{t(office?.labelKey)}</p>
                    <p className="text-brand-muted text-xs">{office?.city}, {office?.country}</p>
                  </div>
                  {active === office?.id && <span className="ml-auto w-2 h-2 rounded-full bg-secondary flex-shrink-0" />}
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden h-full" style={{ border: '1px solid var(--border)' }}>
              <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${activeOffice?.accent}, #2A9BAD)` }} />
              <div className="bg-white p-8 h-full flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <span className="text-5xl">{activeOffice?.flag}</span>
                  <div>
                    <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-1">{t(activeOffice?.typeKey)}</p>
                    <h3 className="font-display font-bold text-primary text-3xl leading-tight">{activeOffice?.city}</h3>
                    <p className="text-brand-muted text-sm">{activeOffice?.country}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '📍', labelKey: 'contact.offices.detail.address', value: activeOffice?.address },
                    { icon: '🏛️', labelKey: 'contact.offices.detail.registration', value: activeOffice?.registration },
                    { icon: '🕐', labelKey: 'contact.offices.detail.timezone', value: activeOffice?.timezone },
                    { icon: '🗓️', labelKey: 'contact.offices.detail.hours', value: t(activeOffice?.hoursKey) },
                  ]?.map((item) => (
                    <div key={item?.labelKey} className="p-4 rounded-xl" style={{ background: 'rgba(26,122,138,0.04)', border: '1px solid rgba(26,122,138,0.1)' }}>
                      <p className="text-xs text-brand-muted uppercase tracking-widest mb-1">{t(item?.labelKey)}</p>
                      <p className="text-sm font-semibold text-primary leading-snug">{item?.value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex-1 min-h-[120px] rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(11,44,74,0.04), rgba(26,122,138,0.06))', border: '1px dashed rgba(26,122,138,0.2)' }}>
                  <div className="text-center">
                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-secondary/40 mx-auto mb-2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    <p className="text-xs text-brand-muted">{activeOffice?.city}, {activeOffice?.country}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
