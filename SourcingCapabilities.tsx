import React from 'react';

const items = [
  'Crude Oil', 'LNG', 'Coal', 'Iron Ore', 'Copper', 'Aluminum', 'Wheat', 'Corn',
  'Soybeans', 'Sugar', 'Fertilizers', 'Petrochemicals', 'Zinc', 'Nickel', 'Potash',
];

export default function MarqueeSection() {
  return (
    <div className="bg-primary py-4 border-y border-white/10 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items]?.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-6">
            <span className="text-sm font-semibold text-white/80 uppercase tracking-widest">{item}</span>
            <span className="w-1 h-1 rounded-full bg-secondary opacity-70" />
          </span>
        ))}
      </div>
    </div>
  );
}