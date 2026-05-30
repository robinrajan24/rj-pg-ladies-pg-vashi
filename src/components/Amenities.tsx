import React from 'react';
import { Wifi, Utensils, Wind, Bed, ShieldCheck, Bath, DoorClosed, Train, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface AmenityProps {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const amenitiesData: AmenityProps[] = [
  {
    id: 'wifi',
    title: 'High-Speed WiFi',
    description: 'Uninterrupted 24/7 high-speed fiber internet connection—ideal for work-from-home zoom calls, study portals, and streaming leisure.',
    icon: Wifi
  },
  {
    id: 'kitchen',
    title: 'Kitchen Facility',
    description: 'Fully functional, airy kitchen with gas stove, clean drinking water, and refrigerator, enabling delightful culinary freedom.',
    icon: Utensils
  },
  {
    id: 'ac',
    title: 'AC & Non-AC Choices',
    description: 'Choose between standard non-AC and premium air-conditioned bedrooms depending on your personal budget and comfort desires.',
    icon: Wind
  },
  {
    id: 'sharing',
    title: 'Single & Sharing Rooms',
    description: 'Bespoke occupancy choices, offering peaceful private single rooms or economical twin-sharing accommodations with friendly co-residents.',
    icon: Bed
  },
  {
    id: 'safe',
    title: 'Safe & Secure Stay',
    description: 'Strict ladies-only access policy, strong locks, secure gate parameters, and located inside a highly reliable neighborhood in Vashi.',
    icon: ShieldCheck
  },
  {
    id: 'bathroom',
    title: 'Two Modern Bathrooms',
    description: 'Two separate fully equipped hygienic washrooms with direct warm-water geysers to ensure seamless morning schedules.',
    icon: Bath
  },
  {
    id: 'cupboard',
    title: 'Personal Cupboard Storage',
    description: 'Each client enjoys a designated premium wardrobe cabinet with keys for safe, well-vetted, and sorted dress storage.',
    icon: DoorClosed
  },
  {
    id: 'station',
    title: 'Near Vashi Station',
    description: 'Outstanding localized transit with easy travel to Greater Mumbai. Quick walking distance to Vashi Train Station and Sion-Panvel Expressway, ensuring seamless commuting.',
    icon: Train
  }
];

export default function Amenities() {
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
    <section id="amenities" className="py-20 md:py-28 bg-cream border-t border-sand-light">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 bg-sand border border-taupe/40 px-3 py-1.5 rounded-full w-fit mx-auto">
            <Sparkles className="w-4 h-4 text-orange-accent" />
            <span className="font-sans text-xs tracking-wider text-warm-brown font-semibold uppercase">Daily Deliverables</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-charcoal-brown mb-4">
            Curated Amenities for Modern Living
          </h2>
          <p className="font-sans text-stone-500 font-light max-w-xl mx-auto">
            Practical features and safety standards curated meticulously to make you feel right at home, helping you direct focus on your career or studies.
          </p>
        </motion.div>

        {/* Modular Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {amenitiesData.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group p-6 bg-white rounded-2xl border border-sand shadow-xs hover:shadow-md hover:border-orange-accent/20 hover:bg-sand-light/10 transition-all duration-300 md:duration-500 flex flex-col justify-start text-left"
              >
                {/* Icon Container with custom brand gold tint */}
                <div className="w-12 h-12 rounded-xl bg-sand/55 flex items-center justify-center text-warm-brown mb-5 group-hover:scale-110 group-hover:bg-orange-accent/15 group-hover:text-orange-accent transition-all duration-300">
                  <IconComponent className="w-6 h-6 stroke-[1.5]" />
                </div>

                <h3 className="font-serif text-lg font-medium text-charcoal-brown mb-2.5">
                  {item.title}
                </h3>

                <p className="font-sans text-stone-500 text-xs leading-relaxed font-light mt-auto">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
