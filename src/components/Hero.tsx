import React, { useState, useEffect } from 'react';
import RJPgLogo from './RJPgLogo';
import { Phone, MessageSquare, Menu, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.993c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
  </svg>
);
// @ts-ignore
import heroImage from '../assets/images/cozy_hero_room_1780052973260.png';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track page scroll to offer premium sticky navbar blur micro-interaction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'RJ Homes', href: '#rj-homes' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Contact', href: '#contact' },
  ];

  const whatsappUrl = "https://wa.me/917710081264?text=Hi!%20I'm%20interested%20in%20checking%20bed%20availability%20at%20RJ-PG%20Vashi.";
  const primaryCallUrl = "tel:7710081264";

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-cream">

      {/* 1. LAYERED BACKGROUND WITH RADIAL VIGNETTE AND BOTTOM BLEND (CREAM TRANSITION) */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cozy residential master bedroom at RJ-PG Vashi"
          className="w-full h-full object-cover scale-102 filter brightness-[0.70] contrast-[1.02]"
          referrerPolicy="no-referrer"
        />
        {/* Soft elegant vignette gradient cover */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-brown/50 via-charcoal-brown/20 to-[#FCFAF6] z-10"></div>
        {/* Horizontal overlay for rich atmosphere */}
        <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 40%, rgba(45,37,30,0.45) 100%) z-10"></div>
        {/* Seamless bottom fade mask to blend with the cream background of About us section */}
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#FCFAF6] via-[#FCFAF6]/80 to-transparent pointer-events-none z-20" />
      </div>

      {/* 2. TRANSLUCENT / STICKY HEADER WITH MICRO-INTERACTION SCROLL TRIGGER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#FCFAF6]/90 backdrop-blur-md border-b border-sand shadow-xs py-4'
          : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Brand Logo (using original image logo same as in footer) */}
          <a href="#" className="cursor-pointer flex items-center">
            <RJPgLogo size="sm" />
          </a>

          {/* Desktop Modular Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-sans text-xs tracking-wider font-semibold uppercase transition-all duration-300 hover:text-orange-accent hover:tracking-widest ${isScrolled ? 'text-stone-700' : 'text-white'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Call-to-action button right */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg bg-orange-accent hover:bg-orange-600 text-white font-sans text-xs font-semibold tracking-wider hover:scale-[1.03] transition-all duration-300 shadow-sm"
            >
              Book a Visit
            </a>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isScrolled
              ? 'bg-sand-light/60 border border-sand text-charcoal-brown'
              : 'bg-white/15 backdrop-blur-xs border border-white/20 text-white'
              }`}
            title="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Mobile menu slide-down viewport overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 right-0 top-full bg-[#FCFAF6] border-b border-sand shadow-lg flex flex-col p-6 space-y-4 md:hidden text-left z-40"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-sm font-semibold text-charcoal-brown tracking-wide border-b border-sand-light pb-2 block hover:text-orange-accent"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-3">
                <a
                  href="https://wa.me/917710081264?text=Hi!%20I'm%20interested%20in%20checking%20bed%20availability%20at%20RJ-PG%20Vashi."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-lg border border-[#25D366]/40 bg-white text-stone-700 font-sans text-xs font-semibold flex items-center justify-center gap-2 hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366] fill-current" />
                  Chat with Host
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-lg bg-orange-accent text-white font-sans text-xs font-semibold flex items-center justify-center"
                >
                  Book a Visit
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. CENTERED HERO GRAPHICS & ACTION PROMPTS */}
      <main className="flex-1 max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center relative z-30 pt-32 pb-24 md:pt-40">

        {/* Subtle upper metadata cap */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          className="mb-4 tracking-[0.15em] font-sans text-xs font-bold text-orange-accent uppercase"
        >
          RJ-PG & RJ Homes Co-living (For All)
        </motion.div>

        {/* Elegant display serif typography */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-tight mb-6 drop-shadow-xs"
        >
          A room that feels <br />
          <span className="text-orange-accent italic font-serif font-medium block mt-1 sm:mt-2">
            like home.
          </span>
        </motion.h1>

        {/* Descriptive organic subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-cream/95 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mb-10 drop-shadow-xs"
        >
          Comfortable, fully furnished stays with modular kitchen facilities. <br className="hidden sm:block" />
          <strong>RJ-PG</strong> offers premium co-living stays, and <strong>RJ Homes</strong> offers well-maintained homestay accommodations for families, professionals, travelers, and all guests seeking a pleasant stay.
        </motion.p>

        {/* Floating Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-xs sm:max-w-md"
        >
          {/* Main Solid White Action Button */}
          <a
            href="#gallery"
            className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-[#F4EFE6] text-charcoal-brown font-sans text-xs font-bold tracking-wider uppercase rounded-lg shadow-md transition-all duration-300 hover:scale-[1.03] text-center"
          >
            View Rooms
          </a>

          {/* Secondary Ghost Transparent Button */}
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/40 hover:border-white text-white font-sans text-xs font-bold tracking-wider uppercase rounded-lg transition-all duration-300 hover:bg-white/10 text-center"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Bullet indicators and trust markers at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-5 text-[11px] md:text-xs font-semibold uppercase tracking-wider text-charcoal-brown/85 font-sans px-4"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/75 backdrop-blur-xs rounded-full border border-sand/65 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>RJ-PG: Premium Co-Living</span>
          </div>
          <span className="hidden sm:inline text-charcoal-brown/25">|</span>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/75 backdrop-blur-xs rounded-full border border-sand/65 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <span>RJ Homes: For All Guests</span>
          </div>
          <span className="hidden sm:inline text-charcoal-brown/25">|</span>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/75 backdrop-blur-xs rounded-full border border-sand/65 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-accent" />
            <span>Near Vashi Station</span>
          </div>
        </motion.div>

      </main>

    </div>
  );
}
