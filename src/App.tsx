/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import RJHomes from './components/RJHomes';
import Gallery from './components/Gallery';
import Amenities from './components/Amenities';
import WhyChoose from './components/WhyChoose';
import Location from './components/Location';
import Contact from './components/Contact';
import StickyWhatsApp from './components/StickyWhatsApp';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream flex flex-col justify-between selection:bg-taupe selection:text-charcoal-brown antialiased">
      {/* 1. Nav & Hero Banners */}
      <Hero />

      {/* 2. Short Premium Story Intro */}
      <About />

      {/* 3. Dedicated RJ Homes Showcase */}
      <RJHomes />

      {/* 4. Category Grid Room Gallery */}
      <Gallery />

      {/* 4. Daily Curated Amenities */}
      <Amenities />

      {/* 5. Vetted Quality Pillars */}
      <WhyChoose />

      {/* 6. Strategic Transit Location Map */}
      <Location />

      {/* 7. Action Contact Helpline Dialers & Forms */}
      <Contact />

      {/* 8. Sticky Floating WhatsApp CTA */}
      <StickyWhatsApp />

      {/* 9. Premium Brand Footer */}
      <Footer />
    </div>
  );
}

