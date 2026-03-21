'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

import Image from 'next/image';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef?.current) {
        const y = window.scrollY * 0.4;
        parallaxRef.current.style.transform = `translateY(${y}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const badges = [
    t('hero.badge.iso'),
    t('hero.badge.ofac'),
    t('hero.badge.aml'),
    t('hero.badge.llc'),
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #1a2332 0%, #0B2C4A 40%, #0E3A60 70%, #0d3a4a 100%)' }}
    >
      {/* Letterhead watermark — sello de agua globe */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[680px] h-[680px] opacity-[0.07] select-none">
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
      <div ref={parallaxRef} className="absolute inset-0 pointer-events-none" style={{ willChange: 'transform' }}>
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #00c8d4 0%, transparent 65%)' }} />
        <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #1A7A8A 0%, transparent 70%)' }} />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full opacity-[0.08]" style={{ background: 'radial-gradient(circle, #00c8d4 0%, transparent 70%)' }} />
      </div>

      {/* Animated orbit graphic */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.12] pointer-events-none hidden lg:block">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-24">
        {/* Logo watermark above headline — removed (logo already in Header) */}

        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="w-8 h-px" style={{ background: '#00c8d4' }} />
            <span className="section-label" style={{ color: '#00c8d4', opacity: 0.9 }}>{t('hero.label')}</span>
          </div>

          <h1
            className="font-display text-white leading-[0.92] mb-8 opacity-0 animate-fade-in"
            style={{ fontSize: 'clamp(52px, 7vw, 88px)', letterSpacing: '-0.03em', animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            {t('hero.line1')}
            <br />
            <span className="italic font-light" style={{ color: '#00c8d4' }}>{t('hero.line2')}</span>{' '}
            {t('hero.line3')}
            <br />
            <span style={{ color: '#8BA3B5', fontSize: '0.65em', fontStyle: 'italic', fontWeight: 300 }}>
              {t('hero.line4')}
            </span>
          </h1>

          <p className="text-white/65 text-lg md:text-xl leading-relaxed mb-10 max-w-xl opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            {t('hero.description')}
          </p>

          <div className="flex flex-wrap gap-4 mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.65s', animationFillMode: 'forwards' }}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'linear-gradient(135deg, #00c8d4, #1A7A8A)', color: '#1a2332', boxShadow: '0 8px 32px rgba(0,200,212,0.3)' }}
            >
              {t('hero.cta.services')}
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-1"
              style={{ border: '1.5px solid rgba(0,200,212,0.4)', background: 'rgba(0,200,212,0.06)' }}
            >
              {t('hero.cta.products')}
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            {badges?.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold" style={{ background: 'rgba(0,200,212,0.1)', border: '1px solid rgba(0,200,212,0.25)', color: '#00c8d4', letterSpacing: '0.05em' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#00c8d4' }} />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-white/60 text-xs font-medium tracking-widest uppercase">{t('hero.scroll')}</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #F5F7FA)' }} />
    </section>
  );
}