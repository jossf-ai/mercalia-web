import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from './components/ContactHero';
import InquiryForm from './components/InquiryForm';
import SalesContact from './components/SalesContact';
import OfficeLocations from './components/OfficeLocations';
import ResponseGuarantee from './components/ResponseGuarantee';

export default function ContactPage() {
  return (
    <main className="bg-brand-bg overflow-x-hidden">
      <div className="noise-overlay" />
      <Header />
      <ContactHero />
      {/* Inquiry Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Left: form */}
            <div className="lg:col-span-3">
              <span className="section-label block mb-4 text-secondary/80">Send a Message</span>
              <h2
                className="font-display font-bold text-primary mb-3"
                style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.03em', lineHeight: '1' }}
              >
                Submit an{' '}
                <span className="italic font-light" style={{ color: '#1A7A8A' }}>Inquiry</span>
              </h2>
              <p className="text-brand-muted text-sm leading-relaxed mb-8 max-w-md">
                Fill in the form below and our team will match you with the right specialist for your commodity category and region.
              </p>
              <InquiryForm />
            </div>

            {/* Right: side info */}
            <div className="lg:col-span-2 flex flex-col gap-6 lg:pt-16">
              {/* Why contact us */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: 'linear-gradient(135deg, #0B2C4A 0%, #0E3A60 100%)' }}
              >
                <h3 className="font-display font-bold text-white text-lg mb-4">Why Work With Us?</h3>
                <ul className="flex flex-col gap-3">
                  {[
                    'Access to 40+ global commodity markets',
                    'End-to-end logistics & documentation',
                    'OFAC, AML & GDPR compliant operations',
                    'Dedicated account manager assigned',
                    'Transparent pricing, no hidden fees',
                  ]?.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/75">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response badge */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: 'rgba(26,122,138,0.06)', border: '1px solid rgba(26,122,138,0.15)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
                  <span className="text-xs font-semibold text-secondary uppercase tracking-widest">Response Guarantee</span>
                </div>
                <p className="font-display font-bold text-primary text-3xl mb-1">&lt; 24h</p>
                <p className="text-brand-muted text-sm">All inquiries acknowledged within one business day — guaranteed.</p>
              </div>

              {/* Emergency line */}
              <div
                className="p-6 rounded-2xl"
                style={{ border: '1px solid var(--border)' }}
              >
                <p className="text-xs font-semibold text-brand-muted uppercase tracking-widest mb-2">Director de Ventas LATAM</p>
                <a
                  href="tel:+543425246765"
                  className="font-display font-bold text-primary text-xl hover:text-secondary transition-colors"
                >
                  +54 3425246765
                </a>
                <p className="text-brand-muted text-xs mt-1">Available 24/7 for critical sourcing situations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SalesContact />
      <OfficeLocations />
      <ResponseGuarantee />
      <Footer />
    </main>
  );
}
