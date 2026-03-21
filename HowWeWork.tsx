'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface StatItem {
  value: number;
  suffix: string;
  labelKey: string;
  descKey: string;
}

const stats: StatItem[] = [
  { value: 4, suffix: '', labelKey: 'stats.0.label', descKey: 'stats.0.description' },
  { value: 150, suffix: '+', labelKey: 'stats.1.label', descKey: 'stats.1.description' },
  { value: 18, suffix: '+', labelKey: 'stats.2.label', descKey: 'stats.2.description' },
];

function useCountUp(target: number, duration: number = 1800, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ stat, active }: { stat: StatItem; active: boolean }) {
  const count = useCountUp(stat.value, 1800, active);
  const { t } = useLanguage();
  return (
    <div className="flex flex-col gap-2 py-10 px-8 border-r border-brand-border last:border-r-0 text-center group hover:bg-[#1a2332]/5 transition-colors duration-300 rounded-lg">
      <div className="stat-number group-hover:text-[#00c8d4] transition-colors duration-300">
        {count}{stat.suffix}
      </div>
      <div className="font-semibold text-brand-fg text-base mt-1">{t(stat.labelKey)}</div>
      <div className="text-brand-muted text-sm leading-relaxed">{t(stat.descKey)}</div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white border-b border-brand-border" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <span className="section-label block mb-3">{t('stats.label')}</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary" style={{ letterSpacing: '-0.02em' }}>
            {t('stats.title')}
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-brand-border border border-brand-border rounded-2xl overflow-hidden shadow-card">
          {stats.map((stat) => (
            <StatCard key={stat.labelKey} stat={stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}