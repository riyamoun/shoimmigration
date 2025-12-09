"use client";

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Student Visa - Australia',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150',
    quote: 'ShoImmigration made my dream of studying in Australia a reality. Their guidance throughout the process was exceptional. From university selection to visa approval, they were with me every step.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Skilled Migration - 189 Visa',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150',
    quote: 'Professional, efficient, and truly caring. The team helped me navigate the complex points system and my PR was granted in just 8 months. Highly recommended for skilled migration!',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Partner Visa - 820/801',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150',
    quote: 'After being rejected twice elsewhere, ShoImmigration took my case and got my partner visa approved. Their attention to detail and knowledge of immigration law is unmatched.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="success-stories" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Success Stories
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our clients who have 
            successfully achieved their Australian dream.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-dark rounded-3xl p-10 md:p-12 text-center"
          >
            {/* Quote Icon */}
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Quote className="w-8 h-8 text-gold" />
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-gold fill-gold" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-light italic">
              "{testimonials[activeIndex].quote}"
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gold mb-4"
              />
              <h4 className="text-white font-semibold text-lg">
                {testimonials[activeIndex].name}
              </h4>
              <p className="text-gold text-sm">
                {testimonials[activeIndex].role}
              </p>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-gold w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`p-1 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'ring-2 ring-gold ring-offset-2 ring-offset-slate-900' 
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

