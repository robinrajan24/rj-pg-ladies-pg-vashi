import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, AlertCircle, Copy, Check, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.993c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
  </svg>
);

export default function Contact() {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [roomPreference, setRoomPreference] = useState<'single' | 'sharing' | 'not-sure' | ''>('');
  const [copiedText, setCopiedText] = useState<'email' | 'call1' | 'call2' | 'call3' | null>(null);

  const contactNumbers = [
    { label: 'Primary Host (Jacob)', num: '7710081264', id: 'call1', hasWhatsApp: true },
    { label: 'Backup Care', num: '9321215228', id: 'call2', hasWhatsApp: false },
    { label: 'Backup Facility', num: '8921843702', id: 'call3', hasWhatsApp: false }
  ];

  const handleCopy = (text: string, type: 'email' | 'call1' | 'call2' | 'call3') => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2500);
  };

  // Compile WhatsApp URL based on dynamic form parameters
  const getWhatsAppSubmitLink = () => {
    const defaultText = "Hi! I am interested in checking bed availability at RJ-PG Vashi.";
    let customizedText = `Hi RJ-PG! My name is ${userName || '[Name]'}. `;
    if (userPhone) customizedText += `My contact number is ${userPhone}. `;
    if (userAddress) customizedText += `My current address is ${userAddress}. `;

    if (roomPreference === 'single') customizedText += "I would like to inquire about AC/Non-AC Single Room availability.";
    else if (roomPreference === 'sharing') customizedText += "I would like to inquire about Double Sharing bed availability.";
    else customizedText += "I'd love to call you to check general room configurations and schedule a physical visit.";

    return `https://wa.me/917710081264?text=${encodeURIComponent(customizedText)}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-sand-light/25 border-t border-sand-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 bg-sand border border-taupe/40 px-3 py-1.5 rounded-full w-fit mx-auto">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="font-sans text-xs tracking-wider text-warm-brown font-semibold uppercase">Get In Touch</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-charcoal-brown mb-4">
            Begin Your Warm & Comforting Stay
          </h2>
          <p className="font-sans text-stone-500 font-light max-w-lg mx-auto">
            Ready to secure your spot or book a physical walk-through? Dial our active administrators directly or draft a pre-customized text on WhatsApp.
          </p>
        </motion.div>

        {/* Double Column Wrap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Column One: Instant Access Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >

            <h3 className="font-serif text-xl font-medium text-charcoal-brown mb-4 text-left">
              Direct Channels & Helpline
            </h3>

            {/* Helpline Dialers */}
            <div className="space-y-4">
              {contactNumbers.map((c) => (
                <div
                  key={c.id}
                  className={`bg-white p-5 rounded-2xl border border-sand shadow-2xs hover:shadow-xs transition-all duration-300 flex items-center justify-between group ${c.hasWhatsApp ? 'hover:border-[#25D366]/30' : 'hover:border-gold/30'}`}
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className={`w-10 h-10 rounded-xl bg-sand-light flex items-center justify-center text-warm-brown transition-colors ${c.hasWhatsApp ? 'group-hover:bg-[#25D366] group-hover:text-white' : 'group-hover:bg-charcoal-brown group-hover:text-gold'}`}>
                      {c.hasWhatsApp ? (
                        <WhatsAppIcon className="w-5 h-5 fill-current" />
                      ) : (
                        <Phone className="w-4 h-4 stroke-[2]" />
                      )}
                    </div>
                    <div>
                      <span className="font-sans text-[10px] tracking-widest text-gold font-bold uppercase block">
                        {c.label}
                      </span>
                      <a
                        href={`tel:${c.num}`}
                        className={`font-serif text-base font-semibold text-charcoal-brown transition-colors block mt-0.5 ${c.hasWhatsApp ? 'hover:text-[#25D366]' : 'hover:text-gold'}`}
                      >
                        +91 {c.num}
                      </a>
                    </div>
                  </div>

                  {/* Icon Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCopy(`+91${c.num}`, c.id as any)}
                      className="w-8 h-8 rounded-full bg-zinc-50 hover:bg-sand/40 flex items-center justify-center text-stone-400 hover:text-charcoal-brown transition-all"
                      title="Copy Number"
                    >
                      {copiedText === c.id ? (
                        <Check className="w-3.5 h-3.5 text-gold" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <a
                      href={`tel:${c.num}`}
                      className="w-8 h-8 rounded-full bg-sand-light hover:bg-gold flex items-center justify-center text-warm-brown hover:text-cream transition-all"
                      title="Dial Call"
                    >
                      <Phone className="w-3.5 h-3.5 stroke-[2]" />
                    </a>
                    {c.hasWhatsApp && (
                      <a
                        href={`https://wa.me/91${c.num}?text=Hi!%20I'm%20interested%20in%20inquiring%20about%20RJ-PG%20Vashi.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-sand-light hover:bg-[#25D366] flex items-center justify-center text-warm-brown hover:text-white transition-all"
                        title="Chat on WhatsApp"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                      </a>
                    )}
                  </div>

                </div>
              ))}
            </div>

            {/* Email Address details */}
            <div className="bg-white p-6 rounded-2xl border border-sand shadow-2xs hover:border-gold/30 hover:shadow-xs transition-all duration-300 flex items-center justify-between group">
              <div className="flex items-center gap-4 text-left">
                <div className="w-10 h-10 rounded-xl bg-sand-light group-hover:bg-charcoal-brown group-hover:text-gold flex items-center justify-center text-warm-brown transition-colors">
                  <Mail className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <span className="font-sans text-[10px] tracking-widest text-gold font-bold uppercase block">
                    Official Email Support
                  </span>
                  <a
                    href="mailto:laluamprayil@gmail.com"
                    className="font-sans text-sm font-medium text-charcoal-brown hover:text-warm-brown transition-colors block mt-0.5 break-all"
                  >
                    laluamprayil@gmail.com
                  </a>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => handleCopy('laluamprayil@gmail.com', 'email')}
                className="w-8 h-8 rounded-full bg-zinc-50 hover:bg-sand/40 flex items-center justify-center text-stone-400 hover:text-charcoal-brown transition-all"
                title="Copy Email Address"
              >
                {copiedText === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-gold" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Trust Banner info */}
            <div className="p-5 rounded-2xl bg-cream border border-sand flex gap-3 text-left">
              <AlertCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <p className="font-sans text-xs text-stone-500 leading-relaxed font-light">
                We recommend scheduling a visit to explore the property, amenities, and room options in person. Contact us to arrange a convenient time for your visit.
              </p>
            </div>

          </motion.div>

          {/* Column Two: Dynamic Request Draft Maker */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-sand shadow-sm text-left"
          >
            <h3 className="font-serif text-2xl font-medium text-charcoal-brown mb-2">
              Book Bed or Inquiry Draft
            </h3>
            <p className="font-sans text-stone-500 text-xs font-light leading-relaxed mb-6">
              Complete the quick helper parameters below. It compiles a professional, polite inquiry note and transfers you straight to WhatsApp to hit send with one tap.
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Field: Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-brown mb-2">
                  Your Full Name
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="e.g. Priyanjali Sharma"
                  className="w-full px-4 py-3 bg-zinc-50 border border-sand rounded-xl focus:bg-white focus:outline-hidden focus:border-gold text-xs transition-colors"
                />
              </div>

              {/* Field: Contact Details */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-brown mb-2">
                  Your Contact Details (Phone Number)
                </label>
                <input
                  type="tel"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-4 py-3 bg-zinc-50 border border-sand rounded-xl focus:bg-white focus:outline-hidden focus:border-gold text-xs transition-colors"
                />
              </div>

              {/* Field: Address */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-brown mb-2">
                  Your Current Address / Town
                </label>
                <input
                  type="text"
                  value={userAddress}
                  onChange={(e) => setUserAddress(e.target.value)}
                  placeholder="e.g. Sector 15, Vashi, Navi Mumbai"
                  className="w-full px-4 py-3 bg-zinc-50 border border-sand rounded-xl focus:bg-white focus:outline-hidden focus:border-gold text-xs transition-colors"
                />
              </div>

              {/* Field: Room preference */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-brown mb-2">
                  Occupancy Preference
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { key: 'single', label: 'Single Bed Room' },
                    { key: 'sharing', label: 'Sharing Bed Room' },
                    { key: 'not-sure', label: 'Inquire Options' },
                  ].map((pref) => (
                    <button
                      type="button"
                      key={pref.key}
                      onClick={() => setRoomPreference(pref.key as any)}
                      className={`py-3 px-2 text-[11px] font-sans font-medium rounded-xl border tracking-wide transition-all ${roomPreference === pref.key
                        ? 'bg-charcoal-brown text-cream border-charcoal-brown shadow-xs'
                        : 'bg-zinc-50 text-stone-500 hover:text-charcoal-brown border-sand hover:border-taupe/45'
                        }`}
                    >
                      {pref.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* WhatsApp Redirection Link */}
              <div className="pt-2">
                <a
                  href={getWhatsAppSubmitLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-cream font-sans text-xs tracking-wider uppercase font-semibold py-4 px-6 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Compile & Send via WhatsApp
                </a>
                {/* <p className="font-sans text-[10px] text-center text-stone-400 mt-3 font-light">
                  Forms generate a smart text template automatically. Direct WhatsApp redirect contains no server-side submissions—100% private.
                </p> */}
              </div>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
