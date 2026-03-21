'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from '@/context/LanguageContext';

const categoryData = [
  { id: 'energy', category: 'Energy', image: "https://images.unsplash.com/photo-1704130092069-30ae33e2def0", alt: 'Oil refinery complex with industrial towers and pipelines illuminated at night', span: 'large', items: ['Crude Oil (WTI, Brent, Urals)', 'LNG & LPG', 'Thermal Coal', 'Metallurgical Coke', 'Diesel & Fuel Oil', 'Petroleum Products'] },
  { id: 'metals', category: 'Metals', image: "https://img.rocket.new/generatedImages/rocket_gen_img_13aaa5201-1772892392955.png", alt: 'Steel manufacturing facility with heavy industrial equipment and molten metal processing', span: 'medium', items: ['Iron Ore', 'Steel Billets & Coils', 'Copper Cathodes', 'Aluminum Ingots', 'Zinc & Lead', 'Nickel'] },
  { id: 'agricultural', category: 'Agricultural', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b7dc0b11-1771569850091.png", alt: 'Vast golden wheat field at harvest time with blue sky and agricultural machinery', span: 'medium', items: ['Wheat & Corn', 'Soybeans & Meal', 'Raw & Refined Sugar', 'Rice', 'Sunflower Oil', 'Cotton'] },
  { id: 'chemicals', category: 'Chemicals', image: "https://img.rocket.new/generatedImages/rocket_gen_img_12ee6a64f-1772183061752.png", alt: 'Chemical processing plant with large storage tanks and industrial infrastructure', span: 'medium', items: ['Urea & Ammonia', 'Potash (MOP/SOP)', 'DAP & MAP', 'Polyethylene', 'Methanol', 'Sulfur'] },
  { id: 'minerals', category: 'Minerals', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1882c91e2-1768553561139.png", alt: 'Open pit mining operation with large excavation equipment and mineral deposits', span: 'medium', items: ['Bauxite', 'Limestone & Dolomite', 'Silica Sand', 'Titanium Ore', 'Manganese Ore', 'Chrome Ore'] },
  { id: 'timber', category: 'Forest Products', image: "https://images.unsplash.com/photo-1615046858970-24147d5d95b5", alt: 'Stacked timber logs at industrial lumber yard with forest in background', span: 'small', items: ['Hardwood & Softwood Logs', 'Wood Pulp', 'Plywood & MDF', 'Wood Chips', 'Biomass Pellets'] },
];

const catNameKeys = ['products.cat.0.name', 'products.cat.1.name', 'products.cat.2.name', 'products.cat.3.name', 'products.cat.4.name', 'products.cat.5.name'];
const catDescKeys = ['products.cat.0.description', 'products.cat.1.description', 'products.cat.2.description', 'products.cat.3.description', 'products.cat.4.description', 'products.cat.5.description'];

export default function ProductsGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const filterTabs = [t('products.grid.filter.all'), 'Energy', 'Metals', 'Agricultural', 'Chemicals', 'Minerals', 'Forest Products'];

  useEffect(() => {
    const reveals = sectionRef?.current?.querySelectorAll('.reveal');
    if (!reveals) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.remove('hidden-init'); }),
      { threshold: 0.06 }
    );
    reveals?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  const filtered = activeFilter === 'All' || activeFilter === t('products.grid.filter.all')
    ? categoryData
    : categoryData?.filter((c) => c?.category === activeFilter);

  return (
    <section className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <span className="section-label block mb-3 reveal hidden-init">{t('products.grid.label')}</span>
            <h2 className="font-display font-bold text-primary reveal hidden-init stagger-1" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.025em', lineHeight: '1.1' }}>
              {t('products.grid.title1')}
              <br />
              <span className="italic font-light text-secondary">{t('products.grid.titleItalic')}</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 reveal hidden-init stagger-2">
            {filterTabs?.map((tab) => (
              <button key={tab} onClick={() => setActiveFilter(tab)} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${activeFilter === tab ? 'bg-primary text-white shadow-sm' : 'bg-brand-bgDark text-brand-muted hover:bg-brand-border hover:text-brand-fg'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {filtered?.map((cat, i) => {
            const isLarge = cat?.span === 'large' || filtered?.length === 1;
            const colSpan = isLarge ? 'md:col-span-8' : 'md:col-span-4';
            const catIndex = categoryData?.findIndex(c => c?.id === cat?.id);

            return (
              <div key={cat?.id} className={`product-card ${colSpan} reveal hidden-init stagger-${Math.min(i + 1, 4)}`} style={{ minHeight: isLarge ? '480px' : '360px' }}>
                <AppImage src={cat?.image} alt={cat?.alt} fill className="object-cover" />
                <div className="overlay" />
                <div className="absolute inset-0 z-10 p-6 md:p-8 flex flex-col justify-end">
                  <span className="self-start mb-3 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider" style={{ background: 'rgba(26,122,138,0.25)', border: '1px solid rgba(26,122,138,0.4)', color: '#2A9BAD' }}>{cat?.category}</span>
                  <h3 className="font-display font-bold text-white mb-2" style={{ fontSize: isLarge ? '28px' : '22px', letterSpacing: '-0.02em' }}>{t(catNameKeys?.[catIndex])}</h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-4 max-w-sm">{t(catDescKeys?.[catIndex])}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat?.items?.slice(0, isLarge ? 6 : 4)?.map((item) => (
                      <span key={item} className="px-2.5 py-1 rounded-md text-xs font-medium" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}>{item}</span>
                    ))}
                  </div>
                  <Link href="/contact" className="mt-5 self-start flex items-center gap-2 text-sm font-semibold text-secondary hover:text-white transition-colors">
                    {t('products.grid.inquire')}
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center reveal hidden-init">
          <p className="text-brand-muted text-sm">
            {t('products.grid.note')}{' '}
            <Link href="/contact" className="text-secondary font-semibold hover:underline">{t('products.grid.contact')}</Link>{' '}
            {t('products.grid.noteLink')}
          </p>
        </div>
      </div>
    </section>
  );
}