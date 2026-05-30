import React from 'react';
import RJPgLogo from './RJPgLogo';
import { Phone, MapPin, Mail, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.993c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerNavLinks = [
    { label: 'Introduction', href: '#about' },
    { label: 'Room Gallery', href: '#gallery' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Why Choose Us', href: '#why-choose' },
    { label: 'Google Maps Location', href: '#location' },
    { label: 'Helpline Help', href: '#contact' }
  ];

  return (
    <footer className="bg-charcoal-brown text-cream pt-16 pb-12 border-t border-charcoal-brown/50 relative overflow-hidden">
      {/* Decorative gradient shadows */}
      <div className="absolute bottom-0 right-[-10%] w-[380px] h-[380px] bg-gold/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-12 border-b border-cream/10">

          {/* Logo, Slogan, Core message */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <RJPgLogo className="mb-4" size="lg" />
            <p className="font-serif italic text-gold text-base tracking-wide mt-2 mb-4 pr-4">
              “Feel at Home. Stay with Comfort.”
            </p>
            <p className="font-sans text-xs text-sand-light/60 font-light leading-relaxed max-w-sm">
              We provide highly secure, premium, tidy, and collaborative co-living rooms exclusively for working ladies and girl students, ensuring they feel right at home with daily amenities in Vashi, Navi Mumbai.
            </p>
          </div>

          {/* Quick links navigation */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-sans text-[11px] font-semibold tracking-widest text-gold uppercase mb-6">
              Index Layout
            </h4>
            <ul className="space-y-3 font-sans text-xs">
              {footerNavLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sand-light/75 hover:text-white transition-colors flex items-center gap-1 group w-fit"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Full Address details */}
          <div className="lg:col-span-5 text-left space-y-5">
            <h4 className="font-sans text-[11px] font-semibold tracking-widest text-gold uppercase">
              Corporate Residence Address
            </h4>

            {/* Address point */}
            <div className="flex gap-4 items-start text-xs text-sand-light/80">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <p className="leading-relaxed font-light">
                Ground Floor, Saishradha Apartment,<br />
                Plot No. 314, Sector 31,<br />
                Vashi, Navi Mumbai – 400703
              </p>
            </div>

            {/* Technical list */}
            <div className="pt-2 space-y-2 text-xs">
              <div className="flex gap-4 items-center text-sand-light/80">
                <WhatsAppIcon className="w-4 h-4 text-gold shrink-0 fill-current" />
                <span className="font-serif font-semibold text-cream">
                  Primary: <a href="https://wa.me/917710081264" target="_blank" rel="noopener noreferrer" className="hover:text-gold hover:underline">7710081264</a>
                </span>
              </div>
              <div className="flex gap-4 items-center text-sand-light/70 pl-8">
                <span>
                  Backup Care: <a href="https://wa.me/919321215228" target="_blank" rel="noopener noreferrer" className="hover:text-gold hover:underline">9321215228</a>
                </span>
              </div>
              <div className="flex gap-4 items-center text-sand-light/70 pl-8">
                <span>
                  Backup Facility: <a href="https://wa.me/918921843702" target="_blank" rel="noopener noreferrer" className="hover:text-gold hover:underline">8921843702</a>
                </span>
              </div>
              <div className="flex gap-4 items-center text-sand-light/80 pt-1">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:laluamprayil@gmail.com" className="hover:underline hover:text-white">laluamprayil@gmail.com</a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom copyright statement */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-left text-sand-light/40 text-[10px] sm:text-xs">

          <p className="font-sans font-light">
            &copy; {currentYear} RJ-PG Ladies Accommodations Vashi, Navi Mumbai. All Rights Reserved.
          </p>

          <div className="flex gap-4 mt-4 sm:mt-0 font-sans font-light items-center uppercase tracking-wider text-[10px]">
            <span className="flex items-center gap-1.5 text-gold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Strict Ladies Vetted Access Secure
            </span>
            <span className="h-4 w-[1px] bg-cream/10"></span>
            <span className="flex items-center gap-1.5 text-gold">
              <Heart className="w-3.5 h-3.5" />
              Feels Like Home
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
