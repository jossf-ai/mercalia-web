import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'MercaliaConnect — Global Commodity Trading & Consulting',
  description: 'MERCALIA Connect Group LLC connects industrial buyers with global raw material suppliers. Bulk commodities, international trade, and compliance-ready solutions.',
  icons: {
    icon: [
      { url: '/assets/images/app_logo.png', type: 'image/x-icon' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
</body>
    </html>
  );
}