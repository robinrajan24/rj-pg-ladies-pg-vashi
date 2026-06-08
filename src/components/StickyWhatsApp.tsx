import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.993c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
  </svg>
);

export default function StickyWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Dismiss the tooltip after 10 seconds of load to avoid distracting the user
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const waLink = "https://wa.me/917710081264?text=Hi!%20I'm%20interested%20in%20inquiring%20about%20co-living%20bed%20availability%20at%20RJ-PG%20Vashi.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5 pointer-events-none">
      
      {/* Interactive Floating Tooltip Bubble */}
      {showTooltip && (
        <div className="bg-charcoal-brown text-cream px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-3 border border-charcoal-brown/50 pointer-events-auto animate-bounce max-w-[260px]">
          <div className="flex flex-col text-left">
            <span className="font-serif text-xs font-semibold text-gold">Inquire Bed Vacancies</span>
            <span className="font-sans text-[10px] text-zinc-300 font-light mt-0.5">Host is active on WhatsApp</span>
          </div>
          <button 
            onClick={() => setShowTooltip(false)}
            className="w-4 h-4 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
            title="Dismiss notification bubble"
          >
            <X className="w-2.5 h-2.5" />
          </button>
        </div>
      )}

      {/* Floating Action Circle Button */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 shadow-2xl flex items-center justify-center text-white hover:scale-105 pointer-events-auto transition-all duration-300 group cursor-pointer"
        title="Chat on WhatsApp"
      >
        {/* Breathing glowing rings around button */}
        <span className="absolute inset-0 rounded-full bg-emerald-600/35 animate-ping opacity-75"></span>
        <span className="absolute inset-[-4px] rounded-full border border-dashed border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors"></span>

        <WhatsAppIcon className="w-6 h-6 fill-current" />
        
        {/* Desktop expansion trigger on hover */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 bg-white border border-sand text-charcoal-brown font-semibold uppercase tracking-widest text-[9px] py-1.5 px-3 rounded-md shadow-md transition-all duration-300 whitespace-nowrap">
          WhatsApp Host
        </span>
      </a>

    </div>
  );
}
