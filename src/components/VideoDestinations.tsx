"use client";

import { motion } from 'framer-motion';
import { countries } from '@/data/countries';
import VideoCountryCard from './VideoCountryCard';

const VideoDestinations = () => {
  return (
    <section id="destinations" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Explore Destinations
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Choose Your <span className="text-gold">Destination</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Discover immigration opportunities in the world's most sought-after countries. 
            Click on any destination to explore visa options, requirements, and processes.
          </p>
        </motion.div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country, index) => (
            <VideoCountryCard 
              key={country.slug} 
              country={country} 
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-white/70 mb-6">
            Not sure which country is right for you?
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-slate-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/25"
          >
            Get Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoDestinations;

