"use client";

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, Clock, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';
import { CountryData } from '@/data/countries';

interface VideoCountryCardProps {
  country: CountryData;
  index: number;
}

const VideoCountryCard = ({ country, index }: VideoCountryCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible || isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible, isHovered]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/country/${country.slug}`}>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
        >
          {/* Video Background */}
          <video
            ref={videoRef}
            src={country.videoUrl}
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay - dims by default, lights up on hover */}
          <div className={`absolute inset-0 transition-all duration-500 ${
            isHovered || isVisible 
              ? 'bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent' 
              : 'bg-slate-900/70'
          }`} />

          {/* Flag Badge */}
          <div className="absolute top-4 left-4 text-4xl z-10">
            {country.flag}
          </div>

          {/* Stats Overlay - shows on hover */}
          <div className={`absolute top-4 right-4 z-10 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <div className="glass-dark rounded-lg px-3 py-2 text-white text-sm">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-gold" />
                <span>{country.stats.successRate} Success</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            {/* Country Name */}
            <h3 className="font-serif text-3xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
              {country.name}
            </h3>

            {/* Tagline */}
            <p className="text-gold font-medium mb-3">{country.tagline}</p>

            {/* Description */}
            <p className={`text-white/80 text-sm mb-4 transition-all duration-300 ${
              isHovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
            } overflow-hidden`}>
              {country.shortDesc}
            </p>

            {/* Quick Stats */}
            <div className={`flex gap-4 mb-4 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex items-center gap-1 text-white/70 text-xs">
                <Clock className="w-3 h-3" />
                <span>{country.stats.processingTime}</span>
              </div>
              <div className="flex items-center gap-1 text-white/70 text-xs">
                <Users className="w-3 h-3" />
                <span>{country.stats.visasIssued}</span>
              </div>
            </div>

            {/* Visa Types Preview */}
            <div className="flex flex-wrap gap-2 mb-4">
              {country.subLinks.slice(0, 3).map((link) => (
                <span 
                  key={link.slug}
                  className="bg-white/10 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full"
                >
                  {link.name}
                </span>
              ))}
              {country.subLinks.length > 3 && (
                <span className="text-white/60 text-xs py-1">
                  +{country.subLinks.length - 3} more
                </span>
              )}
            </div>

            {/* CTA */}
            <div className={`flex items-center gap-2 text-gold font-semibold transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}>
              Explore {country.name}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>

          {/* Border Glow on Hover */}
          <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 ${
            isHovered ? 'border-gold/50' : 'border-transparent'
          }`} />
        </div>
      </Link>
    </motion.div>
  );
};

export default VideoCountryCard;

