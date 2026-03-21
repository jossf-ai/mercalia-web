'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function ProductsHero() {
  const { t } = useLanguage();

  const stats = [
    { value: '150+', labelKey: 'products.hero.stat.0.label', subKey: 'products.hero.stat.0.sub' },
    { value: '40+', labelKey: 'products.hero.stat.1.label', subKey: 'products.hero.stat.1.sub' },
    { value: 'Bulk', labelKey: 'products.hero.stat.2.label', subKey: 'products.hero.stat.2.sub' },
    { value: '24h', labelKey: 'products.hero.stat.3.label', subKey: 'products.hero.stat.3.sub' },
  ];

  return (
    <section
      className="page-hero relative pt-32 pb-20 overflow-hidden"
      style={{ minHeight: '52vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(145deg, #1a2332 0%, #0B2C4A 40%, #0E3A60 70%, #0d3a4a 100%)' }}
    >
      {/* Letterhead watermark — sello de agua globe */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[560px] h-[560px] opacity-[0.07] select-none">
          <Image
            src="/assets/images/Mercalia_Letterhead_Final_Design-1773240065278.jpg"
            alt="Mercalia watermark globe"
            fill
            className="object-cover rounded-full"
            style={{ mixBlendMode: 'screen', filter: 'grayscale(100%) brightness(2)' }}
            priority={false}
          />
        </div>
      </div>

      {/* Parallax background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #00c8d4 0%, transparent 65%)' }} />
        <div className="absolute bottom-1/4 left-1/3 w-[380px] h-[380px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #1A7A8A 0%, transparent 70%)' }} />
        <div className="absolute top-0 left-0 w-[260px] h-[260px] rounded-full opacity-[0.08]" style={{ background: 'radial-gradient(circle, #00c8d4 0%, transparent 70%)' }} />
      </div>

      {/* Animated orbit graphic */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.12] pointer-events-none hidden lg:block">
        <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="300" cy="300" r="280" stroke="#00c8d4" strokeWidth="1" strokeDasharray="4 8" className="animate-spin-slow" style={{ transformOrigin: '300px 300px' }} />
          <circle cx="300" cy="300" r="220" stroke="#1A7A8A" strokeWidth="0.5" strokeDasharray="2 6" className="animate-spin-slow" style={{ animationDirection: 'reverse', transformOrigin: '300px 300px', animationDuration: '25s' }} />
          <circle cx="300" cy="300" r="160" stroke="#00c8d4" strokeWidth="0.5" strokeDasharray="3 9" className="animate-spin-slow" style={{ transformOrigin: '300px 300px', animationDuration: '35s' }} />
          <circle cx="300" cy="300" r="100" stroke="#1A7A8A" strokeWidth="0.5" />
          {[0, 60, 120, 180, 240, 300]?.map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x = 300 + 220 * Math.cos(rad);
            const y = 300 + 220 * Math.sin(rad);
            return <circle key={i} cx={x} cy={y} r="5" fill="#00c8d4" opacity="0.9" />;
          })}
          {[0, 45, 90, 135, 180, 225, 270, 315]?.map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x = 300 + 160 * Math.cos(rad);
            const y = 300 + 160 * Math.sin(rad);
            return <circle key={i} cx={x} cy={y} r="3" fill="#8BA3B5" opacity="0.6" />;
          })}
          <line x1="300" y1="300" x2={300 + 220 * Math.cos(0)} y2={300 + 220 * Math.sin(0)} stroke="#00c8d4" strokeWidth="0.5" opacity="0.4" />
          <line x1="300" y1="300" x2={300 + 220 * Math.cos(2.09)} y2={300 + 220 * Math.sin(2.09)} stroke="#00c8d4" strokeWidth="0.5" opacity="0.4" />
          <line x1="300" y1="300" x2={300 + 220 * Math.cos(4.19)} y2={300 + 220 * Math.sin(4.19)} stroke="#00c8d4" strokeWidth="0.5" opacity="0.4" />
        </svg>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="flex items-center gap-2 mb-8">
          <Link href="/homepage" className="text-white/40 text-sm hover:text-white/70 transition-colors">{t('products.hero.breadcrumb.home')}</Link>
          <span className="text-white/30 text-sm">/</span>
          <span className="text-sm font-medium" style={{ color: '#00c8d4' }}>{t('products.hero.breadcrumb.products')}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Cyan accent line + label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px" style={{ background: '#00c8d4' }} />
              <span className="section-label" style={{ color: '#00c8d4', opacity: 0.9 }}>{t('products.hero.label')}</span>
            </div>

            <h1 className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(44px, 6vw, 72px)', letterSpacing: '-0.03em', lineHeight: '0.95' }}>
              {t('products.hero.title1')}{' '}
              <span className="italic font-light" style={{ color: '#00c8d4' }}>{t('products.hero.titleItalic')}</span>
              <br />
              Portfolio
            </h1>
            <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-lg">{t('products.hero.description')}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'linear-gradient(135deg, #00c8d4, #1A7A8A)', color: '#1a2332', boxShadow: '0 8px 32px rgba(0,200,212,0.3)' }}
            >
              {t('products.hero.cta')}
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats?.map((stat) => (
              <div key={stat?.labelKey} className="rounded-2xl p-5" style={{ background: 'rgba(0,200,212,0.07)', border: '1px solid rgba(0,200,212,0.2)' }}>
                <div className="font-display text-3xl font-bold mb-1" style={{ color: '#00c8d4' }}>{stat?.value}</div>
                <div className="text-white/80 text-sm font-semibold">{t(stat?.labelKey)}</div>
                <div className="text-white/40 text-xs mt-0.5">{t(stat?.subKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #F5F7FA)' }} />
    </section>
  );
}