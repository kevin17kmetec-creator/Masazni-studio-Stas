import React from 'react';

export const SectionTitle = ({ title, scriptText, align = 'left' }: { title: string, scriptText: string, align?: 'left' | 'right' | 'center' }) => (
  <div className={`relative mb-12 ${align === 'right' ? 'text-right' : align === 'center' ? 'text-center' : 'text-left'}`}>
    <span className={`absolute -top-12 ${align === 'right' ? 'right-0' : align === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0'} text-7xl md:text-9xl font-script text-white/[0.05] select-none z-0 whitespace-nowrap`}>
      {scriptText}
    </span>
    <h2 className="text-4xl md:text-6xl font-serif text-gold-gradient relative z-10 pt-4 tracking-wide">
      {title}
    </h2>
  </div>
);
