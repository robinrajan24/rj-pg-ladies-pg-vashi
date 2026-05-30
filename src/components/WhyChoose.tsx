import React from 'react';
import { Check, ShieldAlert, Heart, Wind, GraduationCap, MapPin, Moon, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface ReasonItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const keyReasons: ReasonItem[] = [
  {
    id: 'safety',
    title: 'Safe Environment',
    subtitle: 'Absolute Peace of Mind',
    description: 'We prioritize the safety of our residents above all else. With standard ground floor access in Saishradha Apartments, secure entries, a female-friendly residential neighborhood, and reliable vetting of all entrants, we guarantee a shelter you can fully trust.',
    icon: ShieldAlert
  },
  {
    id: 'comfort',
    title: 'Comfortable Rooms',
    subtitle: 'Your Cozy Sanctuary',
    description: 'Every bed layout, mattress, and storage unit is selected to build a cozy, high-quality, neat sanctuary where you can unwind. Our premium bathrooms and laundry spaces are maintained with precision hygiene standards.',
    icon: Heart
  },
  {
    id: 'ventilation',
    title: 'Good Ventilation',
    subtitle: 'Fresh Air & Natural Light',
    description: 'Unlike compressed city shelters, RJ-PG units boast excellent cross-ventilation, massive window frames, and ample natural sunlight. No stuffy atmosphere here—enjoy clean air, light, and a refreshing residential aesthetic morning or evening.',
    icon: Wind
  },
  {
    id: 'demographics',
    title: 'Ideal for Professionals & Students',
    subtitle: 'Inspiring Cohorts',
    description: 'Designed exclusively for ambitious student minds and independent office workers in Navi Mumbai. We champion a premium community of like-minded women, encouraging focused work routines and mutual co-living harmony.',
    icon: GraduationCap
  },
  {
    id: 'station',
    title: 'Near Vashi Station',
    subtitle: 'Zero Travel Frustrations',
    description: 'Avoid exhaustive local traffic! We are situated exceptionally close to Vashi Railway Station and the Sion-Panvel expressway. Commuting to corporate towers, colleges, shopping plazas, or South Mumbai becomes simple and cheap.',
    icon: MapPin
  },
  {
    id: 'peaceful',
    title: 'Peaceful Stay',
    subtitle: 'Restorative Quietness',
    description: 'Tucked away from pure commercial honking, yet minutes away from grocery and shopping centers, RJ-PG provides a restorative, serene, noise-free atmosphere that aids deep, sound rest and intensive late-night academic sessions.',
    icon: Moon
  }
];

export default function WhyChoose() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="why-choose" className="py-20 md:py-28 bg-sand-light/25 border-t border-sand-light">
      <div className="max-w-7xl mx-auto px-6">

        {/* Intro Grid Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-start"
          >
            <div className="inline-flex items-center gap-2 mb-4 bg-sand border border-taupe/40 px-3 py-1.5 rounded-full w-fit">
              <Sparkles className="w-4 h-4 text-orange-accent" />
              <span className="font-sans text-xs tracking-wider text-warm-brown font-semibold uppercase">The RJ-PG Standard</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-charcoal-brown leading-tight">
              Why Discerning Women Choose RJ-PG
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-7 flex items-end"
          >
            <p className="font-sans text-stone-500 font-light text-base lg:text-lg leading-relaxed border-l-2 border-orange-accent/40 pl-6">
              When living in Mumbai, a housing option shouldn’t just be a renting agreement—it should be a security system, a support net, and a peaceful hub. At RJ-PG, we strive to exceed expectations with regular maintenance, pristine safety parameters, and immediate station access.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {keyReasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.id}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl border border-sand/70 shadow-2xs hover:shadow-md hover:border-orange-accent/35 transition-all duration-300 flex flex-col text-left group"
              >
                {/* Accent Top Bar */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sand-light flex items-center justify-center text-orange-accent group-hover:bg-charcoal-brown group-hover:text-orange-accent transition-colors duration-300">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-charcoal-brown">
                      {reason.title}
                    </h3>
                    <p className="font-sans text-[10px] tracking-widest text-warm-brown font-semibold uppercase mt-0.5">
                      {reason.subtitle}
                    </p>
                  </div>
                </div>

                <p className="font-sans text-stone-500 text-xs leading-relaxed font-light mb-6">
                  {reason.description}
                </p>

                {/* Micro-checkbox highlight */}
                <div className="mt-auto flex items-center gap-2 text-[10px] uppercase tracking-wider font-semibold text-orange-accent">
                  <div className="w-4 h-4 rounded-full bg-sand-light/50 border border-orange-accent/20 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-orange-accent stroke-[3]" />
                  </div>
                  Verified Quality Pillar
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
