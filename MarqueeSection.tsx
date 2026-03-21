'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface FormState {
  name: string;
  company: string;
  commodity: string;
  message: string;
  email: string;
}

export default function InquiryForm() {
  const [form, setForm] = useState<FormState>({ name: '', company: '', commodity: '', message: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { t } = useLanguage();

  const commodityKeys = [0, 1, 2, 3, 4, 5, 6, 7].map(i => `contact.form.commodity.${i}`);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://formspree.io/f/xdawvanv', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          commodity: form.commodity,
          message: form.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
    } catch (err) {
      setError('There was an error sending your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputBase = 'w-full bg-white border rounded-lg px-4 py-3.5 text-sm text-brand-fg placeholder-brand-muted outline-none transition-all duration-200';
  const inputStyle = (field: string) =>
    `${inputBase} ${focused === field ? 'border-secondary shadow-[0_0_0_3px_rgba(26,122,138,0.12)]' : 'border-brand-border hover:border-accent'}`;

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #0B2C4A, #1A7A8A)' }}>
          <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <h3 className="font-display font-bold text-primary text-2xl mb-3">{t('contact.form.success.title')}</h3>
        <p className="text-brand-muted text-sm max-w-xs leading-relaxed">
          {t('contact.form.success.message')} <strong className="text-brand-fg">{form.name}</strong>{t('contact.form.success.detail')} <strong className="text-secondary">{t('contact.form.success.hours')}</strong>.
        </p>
        <button onClick={() => { setSubmitted(false); setForm({ name: '', company: '', commodity: '', message: '', email: '' }); }} className="mt-8 text-sm font-semibold text-secondary hover:text-primary transition-colors underline underline-offset-4">
          {t('contact.form.success.another')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-semibold text-brand-fg uppercase tracking-widest">
            {t('contact.form.name')} <span className="text-secondary">*</span>
          </label>
          <input id="name" name="name" type="text" required placeholder={t('contact.form.namePlaceholder')} value={form.name} onChange={handleChange} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} className={inputStyle('name')} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-xs font-semibold text-brand-fg uppercase tracking-widest">
            {t('contact.form.company')} <span className="text-secondary">*</span>
          </label>
          <input id="company" name="company" type="text" required placeholder="Your Company LLC" value={form.company} onChange={handleChange} onFocus={() => setFocused('company')} onBlur={() => setFocused(null)} className={inputStyle('company')} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-semibold text-brand-fg uppercase tracking-widest">
          Email <span className="text-secondary">*</span>
        </label>
        <input id="email" name="email" type="email" required placeholder="your@email.com" value={form.email} onChange={handleChange} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} className={inputStyle('email')} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="commodity" className="text-xs font-semibold text-brand-fg uppercase tracking-widest">
          {t('contact.form.commodity')} <span className="text-secondary">*</span>
        </label>
        <div className="relative">
          <select id="commodity" name="commodity" required value={form.commodity} onChange={handleChange} onFocus={() => setFocused('commodity')} onBlur={() => setFocused(null)} className={`${inputStyle('commodity')} appearance-none pr-10 cursor-pointer`}>
            <option value="" disabled>{t('contact.form.commodityPlaceholder')}</option>
            {commodityKeys.map((key) => (
              <option key={key} value={t(key)}>{t(key)}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-brand-muted"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-semibold text-brand-fg uppercase tracking-widest">
          {t('contact.form.message')} <span className="text-secondary">*</span>
        </label>
        <textarea id="message" name="message" required rows={5} placeholder={t('contact.form.messagePlaceholder')} value={form.message} onChange={handleChange} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} className={`${inputStyle('message')} resize-none`} />
      </div>

      {error && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{error}</p>
      )}

      <p className="text-xs text-brand-muted leading-relaxed">{t('contact.form.privacy')}</p>

      <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
        {loading ? 'Sending...' : t('contact.form.submit')}
        {!loading && <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>}
      </button>
    </form>
  );
}
