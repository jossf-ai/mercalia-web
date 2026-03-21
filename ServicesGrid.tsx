import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ServicesOverview from './components/ServicesOverview';
import CommoditiesShowcase from './components/CommoditiesShowcase';
import WhyMercalia from './components/WhyMercalia';
import HomeCTA from './components/HomeCTA';
import MarqueeSection from './components/MarqueeSection';

export default function Homepage() {
  return (
    <main className="bg-brand-bg overflow-x-hidden">
      <div className="noise-overlay" />
      <Header />
      <HeroSection />
      <MarqueeSection />
      <StatsSection />
      <ServicesOverview />
      <CommoditiesShowcase />
      <WhyMercalia />
      <HomeCTA />
      <Footer />
    </main>
  );
}