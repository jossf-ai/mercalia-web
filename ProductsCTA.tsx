'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from '@/context/LanguageContext';

const commodities = [
{ image: "https://img.rocket.new/generatedImages/rocket_gen_img_126ca760f-1772104392217.png", alt: 'Soybean field with green pods ready for harvest in agricultural landscape', tagKey: 'Oleaginosas', nameKey: 'commodities.0.name', catKey: 'Principal' },
{ image: "https://images.unsplash.com/photo-1725954925451-4a572502cbe0", alt: 'Yellow corn maize field with ripe ears at harvest time', tagKey: 'Granos', nameKey: 'commodities.1.name', catKey: 'Principal' },
{ image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e088f9c7-1772541951004.png", alt: 'Raw sugar cane stalks and refined sugar crystals in industrial setting', tagKey: 'Azúcar', nameKey: 'commodities.2.name', catKey: 'Principal' },
{ image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e3d4fd04-1772288088633.png", alt: 'Golden soybean oil in glass container with soybeans scattered around', tagKey: 'Aceites', nameKey: 'commodities.3.name', catKey: 'Principal' },
{ image: "https://images.unsplash.com/photo-1677125683463-77deee2958ac", alt: 'Fresh coffee beans roasted and raw in burlap sack at plantation', tagKey: 'Café', nameKey: 'commodities.4.name', catKey: 'Principal' },
{ image: "https://img.rocket.new/generatedImages/rocket_gen_img_10c75a36d-1773234368179.png", alt: 'Fresh fish and seafood catch with animal protein products in industrial facility', tagKey: 'Proteínas', nameKey: 'commodities.5.name', catKey: 'Principal' }];


const commodityNames: Record<string, {es: string;en: string;}> = {
  'commodities.0.name': { es: 'Soja', en: 'Soybeans' },
  'commodities.1.name': { es: 'Maíz Amarillo', en: 'Yellow Corn' },
  'commodities.2.name': { es: 'Azúcar IC45 — VHP 600/1200', en: 'Sugar IC45 — VHP 600/1200' },
  'commodities.3.name': { es: 'Aceite de Soja', en: 'Soybean Oil' },
  'commodities.4.name': { es: 'Café', en: 'Coffee' },
  'commodities.5.name': { es: 'Proteínas Animales', en: 'Animal Proteins' }
};

export default function CommoditiesShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t, lang } = useLanguage();

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    if (!reveals) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {if (e.isIntersecting) e.target.classList.remove('hidden-init');}),
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-label block mb-3 reveal hidden-init">{t('commodities.label')}</span>
            <h2 className="font-display font-bold text-primary reveal hidden-init stagger-1" style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.025em', lineHeight: '1.08' }}>
              {t('commodities.title1')}
              <br />
              {t('commodities.title2')}{' '}
              <span className="italic font-light text-secondary">{t('commodities.titleItalic')}</span>
            </h2>
            <p className="text-brand-muted text-sm mt-3 reveal hidden-init stagger-2">{t('commodities.primaryLabel')}</p>
          </div>
          <Link href="/products" className="btn-primary-dark self-start md:self-end reveal hidden-init stagger-2">
            {t('commodities.fullPortfolio')}
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 reveal hidden-init">
          {/* Primary large card - Soja */}
          <div className="product-card md:col-span-5 h-80 md:h-[440px]">
            <AppImage src={commodities[0].image} alt={commodities[0].alt} fill className="object-cover" />
            <div className="overlay" />
            <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
              <div className="flex items-center gap-2 mb-3">
                <span className="tag-badge self-start" style={{ background: 'rgba(26,122,138,0.2)', borderColor: 'rgba(26,122,138,0.4)', color: '#2A9BAD' }}>{commodities[0].tagKey}</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: 'rgba(26,122,138,0.35)', color: '#fff', border: '1px solid rgba(26,122,138,0.5)' }}>★ PRINCIPAL</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white" style={{ letterSpacing: '-0.02em' }}>{commodityNames[commodities[0].nameKey][lang]}</h3>
              <p className="text-white/60 text-sm mt-1">{commodities[0].catKey}</p>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-5">
            {[commodities[1], commodities[2]].map((c) =>
            <div key={c.nameKey} className="product-card flex-1 h-52 md:h-auto">
                <AppImage src={c.image} alt={c.alt} fill className="object-cover" />
                <div className="overlay" />
                <div className="absolute inset-0 z-10 p-5 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="tag-badge self-start" style={{ background: 'rgba(26,122,138,0.2)', borderColor: 'rgba(26,122,138,0.4)', color: '#2A9BAD' }}>{c.tagKey}</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: 'rgba(26,122,138,0.35)', color: '#fff', border: '1px solid rgba(26,122,138,0.5)' }}>★ PRINCIPAL</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white" style={{ letterSpacing: '-0.015em' }}>{commodityNames[c.nameKey][lang]}</h3>
                </div>
              </div>
            )}
          </div>

          <div className="md:col-span-3 flex flex-col gap-5">
            {[commodities[3], commodities[4], commodities[5]].map((c) =>
            <div key={c.nameKey} className="product-card flex-1 h-40 md:h-auto">
                <AppImage src={c.image} alt={c.alt} fill className="object-cover" />
                <div className="overlay" />
                <div className="absolute inset-0 z-10 p-4 flex flex-col justify-end">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-secondary text-xs font-semibold uppercase tracking-wider">{c.tagKey}</span>
                    <span className="text-xs font-bold" style={{ color: '#2A9BAD' }}>★</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-white" style={{ letterSpacing: '-0.01em' }}>{commodityNames[c.nameKey][lang]}</h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}