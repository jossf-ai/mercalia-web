import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductsHero from './components/ProductsHero';
import ProductsGrid from './components/ProductsGrid';
import SourcingCapabilities from './components/SourcingCapabilities';
import ProductsCTA from './components/ProductsCTA';

export default function ProductsPage() {
  return (
    <main className="bg-brand-bg overflow-x-hidden">
      <div className="noise-overlay" />
      <Header />
      <ProductsHero />
      <ProductsGrid />
      <SourcingCapabilities />
      <ProductsCTA />
      <Footer />
    </main>
  );
}