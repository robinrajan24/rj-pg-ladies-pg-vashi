import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// @ts-ignore
import roomTripleImage from '../assets/images/1.jpeg';
// @ts-ignore
import roomTwinImage from '../assets/images/4.jpeg';

// @ts-ignore
import roomSingleImage from '../assets/images/5.jpeg';
// @ts-ignore
import kitchen1Image from '../assets/images/2.jpeg';
// @ts-ignore
import kitchen2Image from '../assets/images/6.jpeg';
// @ts-ignore
import bathroom1Image from '../assets/images/3.jpeg';
// @ts-ignore
import bathroom2Image from '../assets/images/7.jpeg';

const galleryData: GalleryItem[] = [
  {
    id: 'room-triple',
    url: roomTripleImage,
    alt: '',
    category: 'Rooms',
    title: 'Rooms'
  },
  {
    id: 'room-twin',
    url: roomTwinImage,
    alt: '',
    category: 'Rooms',
    title: 'Rooms'
  },
  {
    id: 'room-single',
    url: roomSingleImage,
    alt: '',
    category: 'Rooms',
    title: 'Rooms'
  },
  {
    id: 'kitchen-1',
    url: kitchen1Image,
    alt: '',
    category: 'Kitchen',
    title: 'Kitchen'
  },
  {
    id: 'kitchen-2',
    url: kitchen2Image,
    alt: '',
    category: 'Kitchen',
    title: 'Kitchen'
  },
  {
    id: 'bathroom-1',
    url: bathroom1Image,
    alt: '',
    category: 'Bathroom',
    title: 'Bathroom'
  },
  {
    id: 'bathroom-2',
    url: bathroom2Image,
    alt: '',
    category: 'Bathroom',
    title: 'Bathroom'
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState<'All' | 'Rooms' | 'Kitchen' | 'Bathroom'>('All');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredData = filter === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === filter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    const currentList = filteredData;
    const prevIndex = (selectedPhotoIndex - 1 + currentList.length) % currentList.length;
    setSelectedPhotoIndex(prevIndex);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    const currentList = filteredData;
    const nextIndex = (selectedPhotoIndex + 1) % currentList.length;
    setSelectedPhotoIndex(nextIndex);
  };

  const categories: ('All' | 'Rooms' | 'Kitchen' | 'Bathroom')[] = [
    'All', 'Rooms', 'Kitchen', 'Bathroom'
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-sand-light/40 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Gallery Title & Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 bg-sand border border-taupe/40 px-3 py-1.5 rounded-full w-fit mx-auto">
            <Sparkles className="w-4 h-4 text-orange-accent" />
            <span className="font-sans text-xs tracking-wider text-warm-brown font-semibold uppercase">Explore Our Spaces</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-charcoal-brown mb-4">
            A Glimpse of True Home Comfort
          </h2>
          <p className="font-sans text-stone-500 font-light max-w-lg mx-auto">
            A tidy collection of rooms, spacious cupboards, well-maintained sanitation areas, and a homelike kitchen made for high-energy rest and focus.
          </p>
        </motion.div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full font-sans text-xs tracking-wide font-medium transition-all duration-300 border ${isActive
                  ? 'bg-charcoal-brown text-cream border-charcoal-brown shadow-sm'
                  : 'bg-white text-stone-500 hover:text-charcoal-brown border-sand hover:border-taupe/60 shadow-xs'
                  }`}
              >
                {cat === 'All' ? 'All Spaces' : cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid items using CSS absolute/fixed layouts */}
        <motion.div
          layout

          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white border border-sand shadow-xs hover:shadow-md transition-all duration-300"
                onClick={() => setSelectedPhotoIndex(index)}
              >

                {/* Image Wrap */}
                <div className="aspect-4/3 overflow-hidden relative">
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-750 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Dark overlay curtain */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-brown/50 via-charcoal-brown/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex justify-between items-center w-full">
                      <p className="text-white text-xs font-semibold tracking-wider uppercase font-sans">
                        View Full Screen
                      </p>
                      <div className="w-8 h-8 rounded-full bg-cream/90 flex items-center justify-center text-charcoal-brown shadow-xs">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-label Details */}
                <div className="p-5 border-t border-sand-light">
                  <span className="font-sans text-[10px] tracking-widest text-gold font-bold uppercase block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif font-medium text-charcoal-brown text-base hover:text-warm-brown transition-colors">
                    {item.title}
                  </h3>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {selectedPhotoIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-100 bg-charcoal-brown/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
              onClick={() => setSelectedPhotoIndex(null)}
            >
              {/* Close Button top-right */}
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="absolute top-6 right-6 z-110 w-12 h-12 rounded-full bg-cream/10 hover:bg-cream/25 text-cream flex items-center justify-center transition-all duration-300 cursor-pointer"
                title="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Left Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-6 z-110 w-12 h-12 rounded-full bg-cream/10 hover:bg-cream/25 text-cream flex items-center justify-center transition-all duration-300 cursor-pointer"
                title="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Primary Image View Container */}
              <div
                className="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  key={filteredData[selectedPhotoIndex].id}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={filteredData[selectedPhotoIndex].url}
                  alt={filteredData[selectedPhotoIndex].alt}
                  className="rounded-xl object-contain max-h-[70vh] w-full border border-cream/10 shadow-2xl"
                  referrerPolicy="no-referrer"
                />

                {/* Image Details Caption Panel */}
                <div className="mt-4 text-center text-cream">
                  <span className="font-sans text-[10px] tracking-widest text-gold font-bold uppercase block mb-1">
                    {filteredData[selectedPhotoIndex].category}
                  </span>
                  <h4 className="font-serif text-lg font-medium">
                    {filteredData[selectedPhotoIndex].title}
                  </h4>
                  <p className="font-sans text-xs text-cream/60 font-light mt-1 px-4 max-w-xl mx-auto">
                    {filteredData[selectedPhotoIndex].alt}
                  </p>
                </div>
              </div>

              {/* Navigation Right Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-6 z-110 w-12 h-12 rounded-full bg-cream/10 hover:bg-cream/25 text-cream flex items-center justify-center transition-all duration-300 cursor-pointer"
                title="Next Photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
