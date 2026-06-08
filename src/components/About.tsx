import React from 'react';
import { ShieldCheck, Sparkles, MapPin, Coffee } from 'lucide-react';
import { motion } from 'motion/react';
// @ts-ignore
import aboutLivingImage from '../assets/images/cozy_living_room_vashi_1780055062520.png';

export default function About() {
  return (
    <section id="about" className="pt-10 pb-20 md:pt-14 md:pb-28 bg-[#FCFAF6] relative overflow-hidden text-stone-800">
      {/* Subtle organic drop-shadow decorative blurs */}
      <div className="absolute top-[30%] right-[-10%] w-[380px] h-[380px] bg-sand-light rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-15%] w-[380px] h-[380px] bg-sand rounded-full mix-blend-multiply filter blur-3xl opacity-35 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Core Double Column Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Image with Floating Overlap Badge */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative pb-8 lg:pb-0"
          >
            <div className="relative">
              {/* Backing stylized shadow ring */}
              <div className="absolute -inset-4 rounded-3xl bg-transparent border border-sand-light/50 -z-10" />

              {/* Image Frame with elegant proportions */}
              <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-[4/3] w-full border border-sand bg-white relative">
                <img
                  src={aboutLivingImage}
                  alt="Beautiful warm cozy living room interior with flat screen TV, sofa and comfortable ambient lighting at RJ-PG"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating "Safe Haven" overlap card precisely placed to protrude slightly */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute right-4 bottom-[-16px] sm:right-6 sm:bottom-[-20px] lg:right-[-12px] max-w-[280px] sm:max-w-[320px] bg-charcoal-brown p-5 rounded-2xl shadow-lg border border-white/10 text-left z-20 transition-all duration-300 hover:shadow-xl animate-fade-in"
              >
                <h4 className="font-serif font-semibold text-orange-accent text-sm sm:text-base mb-1">
                  Safe Haven
                </h4>
                <p className="font-sans text-[11px] sm:text-xs text-cream/90 font-light leading-relaxed">
                  Tailored with top-tier security & comfort for independent professionals, students, & co-living residents.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Introductory Story Header, Narratives, and 2x2 Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Introductory Story pill badge */}
            <div className="inline-flex items-center gap-2 mb-4 bg-[#FAF6EE] border border-sand px-3 py-1.5 rounded-full w-fit shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-orange-accent" />
              <span className="font-sans text-[10px] tracking-widest text-[#765C41] font-bold uppercase">
                Introductory Story
              </span>
            </div>

            {/* Title matching mockup precisely */}
            <h2 className="font-serif text-3.5xl md:text-4.5xl lg:text-5xl font-medium tracking-tight text-charcoal-brown leading-tight mb-6">
              A Warm, Trustworthy Stay in Navi Mumbai
            </h2>

            {/* Paragraph copy with specified text adjustments */}
            <div className="font-sans text-stone-500 font-light text-sm md:text-base leading-relaxed mb-6 space-y-4">
              <p>
                Welcome to <strong>RJ-PG & RJ Homes</strong>, your trusted accommodation destination in Vashi, Navi Mumbai.
              </p>
              <p className="border-l-2 border-orange-accent/40 pl-4 py-0.5">
                <strong>RJ-PG</strong> provides a safe, comfortable, and welcoming co-living stay for working professionals and students.
              </p>
              <p className="border-l-2 border-orange-accent/40 pl-4 py-0.5">
                <strong>RJ Homes</strong> offers well-maintained homestay accommodations for families, professionals, travelers, and all guests seeking a pleasant stay.
              </p>
              <p>
                Located at  Saishradha Apartment Plot No. 314, Sector 31, Vashi, Navi Mumbai, we combine modern amenities with a peaceful residential atmosphere to ensure a comfortable and enjoyable experience.
              </p>
            </div>

            <p className="font-sans text-stone-500 font-light text-sm md:text-base leading-relaxed mb-8">
              Conveniently located at Plot No. 314, Sector 31, Vashi, Navi Mumbai, RJ-PG offers excellent connectivity to <strong>Vashi Railway Station</strong> and the <strong>Sion-Panvel Highway</strong>. It is an ideal accommodation choice for working professionals and students seeking a safe, comfortable, and peaceful environment to live, study, and grow.
            </p>

            {/* 2x2 Feature Grid inside About Us Column as in mockup */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-sand-light">

              {/* Pillar 1: Safe Environment */}
              <div className="flex gap-4 items-start hover:translate-x-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#FAF6EE] border border-sand flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-orange-accent" />
                </div>
                <div className="text-left">
                  <h4 className="font-serif font-medium text-charcoal-brown text-sm mb-1">
                    Safe Environment
                  </h4>
                  <p className="font-sans text-[11px] leading-relaxed text-stone-500 font-light">
                    We prioritize security with standard ground floor access, secure main gates, and gated security. Situated in Vashi's upscale Sector, our residents enjoy verified resident vetting, strict neighborhood safety, and absolute peace of mind—ideal for independent corporate workers, active student learners, and families looking for trust.
                  </p>
                </div>
              </div>

              {/* Pillar 2: Peaceful Atmosphere */}
              <div className="flex gap-4 items-start hover:translate-x-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#FAF6EE] border border-sand flex items-center justify-center shrink-0">
                  <Coffee className="w-5 h-5 text-orange-accent" />
                </div>
                <div className="text-left">
                  <h4 className="font-serif font-medium text-charcoal-brown text-sm mb-1">
                    Peaceful Atmosphere
                  </h4>
                  <p className="font-sans text-[11px] leading-relaxed text-stone-500 font-light">
                    Enjoy a serene, restorative residential sanctuary tucked away from commercial traffic and noise. Featuring high cross-ventilation, expansive window frames, and abundant natural sunlight, our spaces offer a peaceful, fresh-air environment. It is the ultimate restorative haven for late-night study sessions, remote work focus, or unwinding in complete silence.
                  </p>
                </div>
              </div>

              {/* Pillar 3: Good Connectivity */}
              <div className="flex gap-4 items-start hover:translate-x-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#FAF6EE] border border-sand flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-orange-accent" />
                </div>
                <div className="text-left">
                  <h4 className="font-serif font-medium text-charcoal-brown text-sm mb-1">
                    Good Connectivity
                  </h4>
                  <p className="font-sans text-[11px] leading-relaxed text-stone-500 font-light">
                    Enjoy seamless connectivity to leading corporate offices, IT parks, engineering and professional colleges, hospitals, shopping malls, Vashi Railway Station, and the Sion-Panvel Highway. Conveniently located in Vashi, RJ-PG also offers easy access to Navi Mumbai International Airport and Chhatrapati Shivaji Maharaj International Airport, making it a perfect choice for students and working professionals.
                  </p>
                </div>
              </div>

              {/* Pillar 4: Comfortable Stay */}
              <div className="flex gap-4 items-start hover:translate-x-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#FAF6EE] border border-sand flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-orange-accent" />
                </div>
                <div className="text-left">
                  <h4 className="font-serif font-medium text-charcoal-brown text-sm mb-1">
                    Comfortable Stay
                  </h4>
                  <p className="font-sans text-[11px] leading-relaxed text-stone-500 font-light">
                    Experience premium residential comfort featuring cozy bed setups, private lockable wardrobes, and modern western washrooms. Our fully equipped modular kitchen, focus on high sanitary standards, regular maintenance, and warm, homely ambiance make you feel completely supported, relaxed, and right at home throughout your entire stay.
                  </p>
                </div>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
