import React from 'react';
// @ts-ignore
import logoImage from '../assets/images/rj_pg_logo_1780038217898.png';

interface RJPgLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'image' | 'text-badge';
}

export default function RJPgLogo({ className = '', size = 'md', variant = 'image' }: RJPgLogoProps) {
  // Balanced professional sizes for the elegant square logo
  const sizes = {
    sm: 'h-10 w-10 md:h-12 md:w-12',
    md: 'h-14 w-14 md:h-16 md:w-16',
    lg: 'h-24 w-24 md:h-28 md:w-28'
  };

  if (variant === 'text-badge') {
    return (
      <div className={`inline-flex items-center gap-2.5 ${className}`}>
        {/* Rounded square orange badge */}
        <div className="h-9 w-9 md:h-10 md:w-10 rounded-lg bg-orange-accent flex items-center justify-center font-sans font-extrabold text-white text-sm md:text-base tracking-normal shadow-xs">
          RJ
        </div>
        {/* Inline text */}
        <span className="font-sans font-bold text-base md:text-lg tracking-wide text-charcoal-brown">
          RJ PG
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <img
        src={logoImage}
        alt="RJ PG Logo"
        referrerPolicy="no-referrer"
        className={`${sizes[size]} object-contain rounded-xl shadow-md border border-sand/30 bg-[#FAF6EE] transition-all duration-500 ease-out hover:scale-105 hover:shadow-lg`}
      />
    </div>
  );
}
