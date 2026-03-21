/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a2332',
          light: '#0E3A60',
          dark: '#0d1a27',
        },
        secondary: {
          DEFAULT: '#00c8d4',
          light: '#33d6e0',
          dark: '#1A7A8A',
        },
        accent: {
          DEFAULT: '#8BA3B5',
          light: '#B0C4D3',
        },
        brand: {
          bg: '#F5F7FA',
          bgDark: '#EDF0F4',
          fg: '#1a2332',
          muted: '#6b7280',
          border: '#D1DCE5',
          gold: '#C9A84C',
          cyan: '#00c8d4',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['80px', { lineHeight: '0.92', letterSpacing: '-0.03em' }],
        'display-lg': ['64px', { lineHeight: '0.95', letterSpacing: '-0.025em' }],
        'display-md': ['48px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['36px', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
      },
      animation: {
        'float': 'float-slow 8s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'gradient-shift': 'gradient-shift 12s ease infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-12px) rotate(0.5deg)' },
          '66%': { transform: 'translateY(-6px) rotate(-0.5deg)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(26, 122, 138, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(26, 122, 138, 0.6)' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundSize: {
        '200': '200% 200%',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(26, 35, 50, 0.08)',
        'card-hover': '0 20px 60px rgba(26, 35, 50, 0.14)',
        'hero': '0 32px 80px rgba(26, 35, 50, 0.4)',
        'glow': '0 0 40px rgba(0, 200, 212, 0.4)',
        'glow-cyan': '0 0 32px rgba(0, 200, 212, 0.35)',
      },
    },
  },
  plugins: [],
};