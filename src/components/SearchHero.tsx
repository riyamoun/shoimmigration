"use client";

import { motion } from 'framer-motion';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { countries } from '@/data/countries';
import Link from 'next/link';

const SearchHero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.subLinks.some(link => link.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-medium">
            Trusted by 5000+ Happy Clients Worldwide
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
        >
          Global Immigration
          <br />
          <span className="text-gold">Experts</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12"
        >
          Your trusted partner for immigration to Canada, Australia, UK, USA & beyond. 
          MARA registered agents with 98% success rate.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="glass rounded-2xl p-2 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  className="w-full pl-12 pr-4 py-4 bg-transparent text-slate-900 placeholder-slate-400 outline-none text-lg"
                />
              </div>
              <button className="bg-gold hover:bg-gold-dark text-slate-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
                <Search className="w-5 h-5" />
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>
          </div>

          {/* Search Suggestions */}
          {showSuggestions && searchQuery && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl overflow-hidden z-50">
              {filteredCountries.length > 0 ? (
                <ul>
                  {filteredCountries.slice(0, 5).map((country) => (
                    <li key={country.slug}>
                      <Link
                        href={`/country/${country.slug}`}
                        className="flex items-center gap-3 px-6 py-4 hover:bg-slate-50 transition-colors"
                      >
                        <span className="text-2xl">{country.flag}</span>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">{country.name}</div>
                          <div className="text-sm text-slate-500">{country.tagline}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-6 py-4 text-slate-500">No destinations found</div>
              )}
            </div>
          )}
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          <span className="text-white/60 text-sm">Popular:</span>
          {countries.slice(0, 5).map((country) => (
            <Link
              key={country.slug}
              href={`/country/${country.slug}`}
              className="flex items-center gap-1 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm transition-colors"
            >
              <span>{country.flag}</span>
              {country.name}
            </Link>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16"
        >
          {[
            { value: '98%', label: 'Success Rate' },
            { value: '15+', label: 'Years Experience' },
            { value: '5000+', label: 'Happy Clients' },
            { value: '9', label: 'Countries' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-gold">{stat.value}</div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#destinations" className="block">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gold rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default SearchHero;

