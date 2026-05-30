import React from 'react';
import { MapPin, Navigation, Train, Building, CheckCircle, Sparkles, Briefcase, GraduationCap, Hospital, ShoppingBag, Plane } from 'lucide-react';
import { motion } from 'motion/react';

export default function Location() {
  const addressString = "Ground Floor, Saishradha Apartment, Plot No. 314, Sector 31, Vashi, Navi Mumbai - 400703";
  const mapEmbedUrl = "https://maps.google.com/maps?q=19.067122,72.990574&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="location" className="py-20 md:py-28 bg-cream border-t border-sand-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Side: Address Details and Transit Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center animate-once"
          >

            <div className="inline-flex items-center gap-2 mb-4 bg-sand border border-taupe/40 px-3 py-1.5 rounded-full w-fit">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="font-sans text-xs tracking-wider text-warm-brown font-semibold uppercase">The Neighborhood</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-charcoal-brown mb-6">
              Our Strategic Location in Vashi
            </h2>

            <p className="font-sans text-stone-500 font-light text-sm md:text-base leading-relaxed mb-8">
              Conveniently located on Saishradha Apartment, Plot No. 314, Sector 31, Vashi, Navi Mumbai – 400703, RJ-PG offers easy access to transportation, educational institutions, business hubs, hospitals, and shopping destinations. Our complete address is provided below:
            </p>

            {/* Premium Address Card */}
            <div className="bg-white p-6 rounded-2xl border border-sand shadow-xs mb-8 flex gap-4 text-left">
              <div className="w-10 h-10 rounded-full bg-sand-light flex items-center justify-center text-gold shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold text-charcoal-brown uppercase tracking-wider mb-1">Physical Address</h4>
                <p className="font-sans text-stone-600 text-sm leading-relaxed font-light">
                  Ground Floor, Saishradha Apartment,<br />
                  Plot No. 314, Sector 31,<br />
                  Vashi, Navi Mumbai – 400703
                </p>
              </div>
            </div>

            {/* Transit and Walkability Pointers */}
            <h4 className="font-serif text-charcoal-brown font-semibold text-sm uppercase tracking-wider mb-4">Proximity & Commute Times:</h4>

            <div className="space-y-4">
              <div className="flex gap-3 text-left">
                <Train className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-sans text-xs font-semibold text-charcoal-brown">Vashi Railway Station</h5>
                  <p className="font-sans text-stone-500 text-xs font-light">
                    Just a 5-6 minute drive or a comfortable flat straight walk. Easy connectivity to Belapur, Kurla, CST, Thane, and Panvel.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 text-left">
                <Navigation className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-sans text-xs font-semibold text-charcoal-brown">Sion-Panvel Highway</h5>
                  <p className="font-sans text-stone-500 text-xs font-light">
                    Immediate 2-minute highway accessibility. Provides easy boarding for outstation/regional buses and private cabs.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 text-left">
                <Briefcase className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-sans text-xs font-semibold text-charcoal-brown">Corporate Offices & IT Parks</h5>
                  <p className="font-sans text-stone-500 text-xs font-light">
                    Seamless transit and close proximity to major corporate business offices, business hubs, and Navi Mumbai tech parks.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 text-left">
                <GraduationCap className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-sans text-xs font-semibold text-charcoal-brown">Engineering & Professional Colleges</h5>
                  <p className="font-sans text-stone-500 text-xs font-light">
                    Ideally situated near leading engineering and professional colleges, making it a perfect choice for dedicated student living.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 text-left">
                <Hospital className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-sans text-xs font-semibold text-charcoal-brown">Hospitals & Healthcare</h5>
                  <p className="font-sans text-stone-500 text-xs font-light">
                    Minutes away from premium multispecialty hospitals, clinics, and pharmacies for any medical requirements.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 text-left">
                <ShoppingBag className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-sans text-xs font-semibold text-charcoal-brown">Shopping Malls & Supermarkets</h5>
                  <p className="font-sans text-stone-500 text-xs font-light">
                    Quick access to Inorbit Mall, retail centers, local organic food markets, and everyday shopping amenities.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 text-left">
                <Plane className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-sans text-xs font-semibold text-charcoal-brown">International Airports</h5>
                  <p className="font-sans text-stone-500 text-xs font-light">
                    Convenient travel accessibility to both Navi Mumbai International Airport and Chhatrapati Shivaji Maharaj International Airport.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Side: Embedded Google Maps Layout */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-sand/60 bg-white aspect-video lg:aspect-square lg:max-h-[540px]">
              {/* Cover aesthetic borders */}
              <div className="absolute inset-0 border-[6px] border-white rounded-3xl pointer-events-none z-10 shadow-inner"></div>

              {/* Real Map iFrame embed */}
              <iframe
                title="RJ-PG Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full relative z-0"
              ></iframe>

              {/* Bottom directions link */}
              <a
                href="https://maps.app.goo.gl/txBA6nAnq7Xkqtp79"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 left-6 right-6 bg-charcoal-brown hover:bg-gold text-cream text-[11px] font-semibold text-center tracking-wider uppercase py-3.5 px-6 rounded-xl shadow-lg z-20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5 animate-pulse" />
                Open in Google Maps App
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
