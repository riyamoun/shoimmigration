"use client";

import { motion } from 'framer-motion';
import { Clock, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { CountryData } from '@/data/countries';
import Link from 'next/link';

interface CountryHeroProps {
  country: CountryData;
}

const CountryHero = ({ country }: CountryHeroProps) => {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
      {/* Video Background */}
      <video
        src={country.videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#destinations" className="hover:text-gold transition-colors">Destinations</Link>
            <span>/</span>
            <span className="text-gold">{country.name}</span>
          </div>

          {/* Flag & Title */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{country.flag}</span>
            <div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white">
                {country.name} <span className="text-gold">Immigration</span>
              </h1>
              <p className="text-xl text-gold mt-2">{country.tagline}</p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3">
              <TrendingUp className="w-6 h-6 text-gold" />
              <div>
                <div className="text-2xl font-bold text-white">{country.stats.successRate}</div>
                <div className="text-xs text-white/60">Success Rate</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3">
              <Clock className="w-6 h-6 text-gold" />
              <div>
                <div className="text-2xl font-bold text-white">{country.stats.processingTime}</div>
                <div className="text-xs text-white/60">Processing Time</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3">
              <Users className="w-6 h-6 text-gold" />
              <div>
                <div className="text-2xl font-bold text-white">{country.stats.visasIssued}</div>
                <div className="text-xs text-white/60">Visas Issued Yearly</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-3 mt-8">
            {country.subLinks.map((link) => (
              <Link
                key={link.slug}
                href={`#${link.slug}`}
                className="group flex items-center gap-2 bg-gold/20 hover:bg-gold text-white hover:text-slate-900 px-4 py-2 rounded-lg transition-all duration-300"
              >
                {link.name}
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountryHero;

