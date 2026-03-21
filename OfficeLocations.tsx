'use client';

import React, { useEffect, useRef } from 'react';

export default function CorporateVerification() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.remove('hidden-init');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  const entityDetails = [
    { labelEs: 'Nombre Legal', labelEn: 'Legal Name', value: 'MERCALIA Connect Group LLC' },
    { labelEs: 'Jurisdicción', labelEn: 'Jurisdiction', value: 'New Mexico, USA' },
    { labelEs: 'Número de Registro', labelEn: 'Registration Number', value: '0008002716 *' },
    { labelEs: 'Representante Legal', labelEn: 'Managing Member', value: 'Jose S. Gardiol, Managing Member' },
    { labelEs: 'Estado del Informe BOI', labelEn: 'Compliance Status', value: 'Presentado y Vigente (2026) · BOI Report Filed (2026)' },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal hidden-init">
          <span className="section-label block mb-4">Corporate Verification & Compliance</span>
          <h2
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', letterSpacing: '-0.03em', lineHeight: '1.1' }}
          >
            Validación de Identidad Corporativa
            <br />
            <span className="italic font-light" style={{ color: '#2A9BAD' }}>Corporate Identity Validation</span>
          </h2>
        </div>

        {/* Main Card */}
        <div
          className="relative rounded-3xl overflow-hidden reveal hidden-init"
          style={{ background: 'linear-gradient(145deg, #0B2C4A 0%, #0E3A60 60%, #0B2C4A 100%)', border: '1px solid rgba(42,155,173,0.2)' }}
        >
          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, #2A9BAD 0%, transparent 70%)', transform: 'translate(20%, -20%)' }}
            />
            <div
              className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-8"
              style={{ background: 'radial-gradient(circle, #1A7A8A 0%, transparent 70%)', transform: 'translate(-20%, 20%)' }}
            />
            {/* Seal watermark */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-[0.04] hidden lg:block">
              <svg width="260" height="260" viewBox="0 0 24 24" fill="white">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 p-10 md:p-14">
            {/* Bilingual Description */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Spanish */}
              <div
                className="rounded-2xl p-6"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(42,155,173,0.15)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ background: 'rgba(42,155,173,0.15)', color: '#2A9BAD' }}>
                    Español
                  </span>
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-3">Validación de Identidad Corporativa</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Este documento ha sido emitido y firmado digitalmente por la dirección de MERCALIA Connect Group LLC. La inclusión del sello de autoridad y el código QR garantiza la integridad de la información aquí contenida.
                </p>
              </div>

              {/* English */}
              <div
                className="rounded-2xl p-6"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(42,155,173,0.15)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ background: 'rgba(42,155,173,0.15)', color: '#2A9BAD' }}>
                    English
                  </span>
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-3">Corporate Identity Validation</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  This document has been issued and digitally signed by the management of MERCALIA Connect Group LLC. The inclusion of the Seal of Authority and QR code guarantees the integrity of the information provided.
                </p>
              </div>
            </div>

            {/* Entity Details Table */}
            <div className="mb-10">
              <h4 className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-5">
                Datos de la Entidad / Entity Details
              </h4>
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(42,155,173,0.2)' }}>
                {entityDetails?.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-0 px-6 py-4 items-center"
                    style={{
                      borderBottom: index < entityDetails?.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                      background: index % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:gap-2">
                      <span className="text-white/40 text-xs">{item?.labelEs}</span>
                      <span className="text-white/25 text-xs hidden md:inline">/</span>
                      <span className="text-white/40 text-xs">{item?.labelEn}</span>
                    </div>
                    <div className="md:col-span-2 flex items-center gap-3">
                      {index === 4 ? (
                        <div className="flex items-center gap-2">
                          <span
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                            style={{ background: 'rgba(34,197,94,0.15)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)' }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                            {item?.value}
                          </span>
                        </div>
                      ) : (
                        <span className="text-white font-medium text-sm">{item?.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notices Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Confidentiality Notice */}
              <div
                className="rounded-2xl p-5 flex gap-4"
                style={{ background: 'rgba(42,155,173,0.08)', border: '1px solid rgba(42,155,173,0.2)' }}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2A9BAD" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-2">Confidencialidad</p>
                  <p className="text-white/65 text-sm leading-relaxed">
                    La información validada mediante este código es de carácter privado y está destinada únicamente a las partes firmantes.
                  </p>
                </div>
              </div>

              {/* Security / FinCEN Compliance */}
              <div
                className="rounded-2xl p-5 flex gap-4"
                style={{ background: 'rgba(42,155,173,0.08)', border: '1px solid rgba(42,155,173,0.2)' }}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2A9BAD" strokeWidth="2">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-2">Seguridad / Security</p>
                  <p className="text-white/65 text-sm leading-relaxed">
                    Mercalia Connect Group LLC cumple con los estándares de reporte de transparencia del Departamento del Tesoro de los EE. UU. (FinCEN).
                  </p>
                </div>
              </div>
            </div>

            {/* Digital Signature Badge */}
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2A9BAD" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-white/50 text-xs">Digitally Signed</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2A9BAD" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                  <path d="M3 17h4v4H3zM10 10h4v4h-4z" />
                </svg>
                <span className="text-white/50 text-xs">QR Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2A9BAD" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span className="text-white/50 text-xs">Seal of Authority</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2A9BAD" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                </svg>
                <span className="text-white/50 text-xs">FinCEN Compliant · 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
