import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ComplianceHero from './components/ComplianceHero';
import CertificationsSection from './components/CertificationsSection';
import RegulatoryBadges from './components/RegulatoryBadges';
import QualityStandards from './components/QualityStandards';
import AuditDocumentation from './components/AuditDocumentation';
import ComplianceCTA from './components/ComplianceCTA';
import CorporateVerification from './components/CorporateVerification';

export default function CompliancePage() {
  return (
    <main className="bg-brand-bg overflow-x-hidden">
      <div className="noise-overlay" />
      <Header />
      <ComplianceHero />
      <CertificationsSection />
      <RegulatoryBadges />
      <QualityStandards />
      <AuditDocumentation />
      <CorporateVerification />
      <ComplianceCTA />
      <Footer />
    </main>
  );
}
