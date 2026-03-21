'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from '@/context/LanguageContext';

export default function SourcingCapabilities() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const reveals = sectionRef?.current?.querySelectorAll('.reveal');
    if (!reveals) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.remove('hidden-init'); }),
      { threshold: 0.08 }
    );
    reveals?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  const regions = [
    { nameKey: 'products.sourcing.region.0', commodities: 'Copper, Soybeans, Iron Ore, Lithium, Sugar', flag: '🌎' },
    { nameKey: 'products.sourcing.region.1', commodities: 'Crude Oil, LNG, Phosphates, Diamonds, Cotton', flag: '🌍' },
    { nameKey: 'products.sourcing.region.2', commodities: 'Wheat, Coal, Steel, Potash, Ammonia', flag: '🌍' },
    { nameKey: 'products.sourcing.region.3', commodities: 'Palm Oil, Rice, Nickel, Tin, Rubber', flag: '🌏' },
    { nameKey: 'products.sourcing.region.4', commodities: 'Corn, LNG, Lumber, Copper, Soybeans', flag: '🌎' },
    { nameKey: 'products.sourcing.region.5', commodities: 'Iron Ore, Coal, LNG, Bauxite, Wheat', flag: '🌏' },
  ];

  const deliveryMethods = [
    { nameKey: 'products.sourcing.delivery.0', descKey: 'products.sourcing.delivery.0.desc', icon: '🚢' },
    { nameKey: 'products.sourcing.delivery.1', descKey: 'products.sourcing.delivery.1.desc', icon: '⛴️' },
    { nameKey: 'products.sourcing.delivery.2', descKey: 'products.sourcing.delivery.2.desc', icon: '📦' },
    { nameKey: 'products.sourcing.delivery.3', descKey: 'products.sourcing.delivery.3.desc', icon: '🚂' },
  ];

  return (
    <section className="py-24 bg-brand-bgDark" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-label block mb-3 reveal hidden-init">{t('products.sourcing.label')}</span>
            <h2 className="font-display font-bold text-primary mb-8 reveal hidden-init stagger-1" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.025em', lineHeight: '1.1' }}>
              {t('products.sourcing.title1')}
              <br />
              <span className="italic font-light text-secondary">{t('products.sourcing.titleItalic')}</span>
            </h2>

            <div className="space-y-3">
              {regions?.map((region, i) => (
                <div key={region?.nameKey} className={`bg-white rounded-xl p-4 border border-brand-border hover:border-secondary hover:shadow-card transition-all duration-300 flex items-start gap-4 reveal hidden-init stagger-${Math.min(i + 2, 4)}`}>
                  <span className="text-2xl flex-shrink-0">{region?.flag}</span>
                  <div>
                    <div className="font-semibold text-brand-fg text-sm">{t(region?.nameKey)}</div>
                    <div className="text-brand-muted text-xs mt-0.5 leading-relaxed">{region?.commodities}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="relative rounded-2xl overflow-hidden h-64 mb-8 reveal hidden-init">
              <AppImage src="https://img.rocket.new/generatedImages/rocket_gen_img_101939d18-1772892391504.png" alt="Large bulk cargo ship at sea loaded with commodities during international shipping" fill className="object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(11,44,74,0.6) 0%, rgba(26,122,138,0.2) 100%)' }} />
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-widest mb-1">{t('products.sourcing.deliveryReach')}</div>
                  <div className="font-display text-2xl font-bold text-white">{t('products.sourcing.deliveryTitle')}</div>
                </div>
              </div>
            </div>

            <span className="section-label block mb-4 reveal hidden-init">{t('products.sourcing.delivery.label')}</span>
            <div className="grid grid-cols-2 gap-3">
              {deliveryMethods?.map((method, i) => (
                <div key={method?.nameKey} className={`bg-white rounded-xl p-5 border border-brand-border hover:border-secondary transition-all duration-300 reveal hidden-init stagger-${i + 1}`}>
                  <span className="text-2xl mb-3 block">{method?.icon}</span>
                  <div className="font-semibold text-brand-fg text-sm">{t(method?.nameKey)}</div>
                  <div className="text-brand-muted text-xs mt-0.5">{t(method?.descKey)}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-primary rounded-2xl p-6 reveal hidden-init stagger-4">
              <div className="text-white/50 text-xs uppercase tracking-widest mb-3">{t('products.sourcing.incoterms')}</div>
              <div className="flex flex-wrap gap-2">
                {['FOB', 'CIF', 'CFR', 'DAP', 'DDP', 'EXW', 'FCA', 'CPT']?.map((term) => (
                  <span key={term} className="px-3 py-1 rounded-lg text-xs font-bold text-secondary" style={{ background: 'rgba(26,122,138,0.15)', border: '1px solid rgba(26,122,138,0.25)' }}>{term}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}