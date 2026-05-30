import React from 'react';
import { Home, Users, Briefcase, Compass, Sparkles, Check } from 'lucide-react';
import { motion } from 'motion/react';

export default function RJHomes() {
  const pillars = [
    {
      title: 'Families & Groups',
      description: 'Generous spaces, privacy, and full home comforts designed for family stays, reunions, or group travelers looking to stay together seamlessly.',
      icon: Users,
      badge: 'Spacious & Private'
    },
    {
      title: 'Working Professionals',
      description: 'A quiet, distraction-free atmosphere equipped with high-speed internet and workspaces, ideal for corporate relocations and business trips.',
      icon: Briefcase,
      badge: 'Work-Friendly'
    },
    {
      title: 'Travelers & Leisure',
      description: 'Centrally located with direct transit routes to airports, railway stations, and IT parks, providing a stress-free base for exploring Navi Mumbai.',
      icon: Compass,
      badge: 'Excellent Transit'
    }
  ];

  return (
    <section id="rj-homes" className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-sand-light">
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/2 left-[10%] w-[350px] h-[350px] bg-sand rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 right-[5%] w-[300px] h-[300px] bg-sand-light rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 bg-[#FAF6EE] border border-sand px-3 py-1.5 rounded-full w-fit mx-auto shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-orange-accent" />
            <span className="font-sans text-[10px] tracking-widest text-[#765C41] font-bold uppercase">
              Introducing RJ Homes
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-charcoal-brown mb-6">
            Homestay Accommodations for All Guests
          </h2>
          <p className="font-sans text-stone-500 font-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            While <strong>RJ-PG</strong> is built exclusively for ladies, <strong>RJ Homes</strong> welcomes families, professionals, travelers, and guests of all walks of life looking for a pleasant, well-maintained stay.
          </p>
        </div>

        {/* Focus Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto mb-16 p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-[#FCFAF6] to-[#FAF6EE] border border-sand shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-accent/5 rounded-full blur-xl pointer-events-none" />
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-charcoal-brown flex items-center justify-center text-orange-accent shrink-0 shadow-xs">
              <Home className="w-8 h-8 stroke-[1.5]" />
            </div>
            <div className="text-left flex-1">
              <span className="font-sans text-[10px] tracking-wider text-orange-accent font-bold uppercase block mb-1">
                The RJ Homes Promise
              </span>
              <p className="font-serif text-lg md:text-xl text-charcoal-brown leading-relaxed font-normal">
                "RJ Homes offers well-maintained homestay accommodations for families, professionals, travelers, and all guests seeking a pleasant stay."
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3-Column Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#FCFAF6]/60 backdrop-blur-xs p-8 rounded-2xl border border-sand/70 shadow-2xs hover:shadow-md hover:border-orange-accent/35 transition-all duration-300 flex flex-col text-left group"
              >
                {/* Icon & Badge Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-sand flex items-center justify-center text-orange-accent group-hover:bg-charcoal-brown group-hover:text-orange-accent transition-colors duration-300 shadow-3xs">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <span className="font-sans text-[9px] tracking-wider text-stone-500 font-bold uppercase bg-sand-light/40 border border-sand/50 px-2 py-0.5 rounded-full">
                    {pillar.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-serif text-lg font-medium text-charcoal-brown mb-2 group-hover:text-orange-accent transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-sans text-stone-500 text-xs leading-relaxed font-light mb-6 flex-1">
                  {pillar.description}
                </p>

                {/* Footer Check Indicator */}
                <div className="mt-auto pt-4 border-t border-sand-light flex items-center gap-2 text-[10px] uppercase tracking-wider font-semibold text-orange-accent">
                  <div className="w-4 h-4 rounded-full bg-sand-light/50 border border-orange-accent/20 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-orange-accent stroke-[3]" />
                  </div>
                  <span>Pleasant Homestay Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="https://wa.me/917710081264?text=Hi!%20I'm%20interested%20in%20booking%20a%20homestay%20at%20RJ%20Homes%20Vashi."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-accent hover:bg-orange-600 text-white font-sans text-xs font-semibold tracking-wider hover:scale-[1.03] transition-all duration-300 shadow-sm"
          >
            Inquire About RJ Homes Availability
          </a>
        </motion.div>

      </div>
    </section>
  );
}
