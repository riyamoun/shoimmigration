"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Heart, Building2, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    title: 'Student Visa',
    description: 'Study at world-class universities in Australia. Complete support from application to arrival.',
    features: ['University Selection', 'Application Support', 'Visa Processing'],
  },
  {
    icon: Briefcase,
    title: 'Skilled Migration',
    description: 'Skilled worker visas for professionals. Fast-track your career in Australia.',
    features: ['Skills Assessment', 'Points Calculation', 'EOI Lodgement'],
  },
  {
    icon: Heart,
    title: 'Partner Visa',
    description: 'Reunite with your loved ones. Comprehensive partner and spouse visa services.',
    features: ['Relationship Evidence', 'Documentation', 'Interview Prep'],
  },
  {
    icon: Building2,
    title: 'Business Visa',
    description: 'Invest and establish your business in Australia\'s thriving economy.',
    features: ['Business Planning', 'Investment Guidance', 'Compliance Support'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Our Expert Services
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Comprehensive immigration solutions tailored to your unique journey. 
            From students to skilled professionals, we guide you every step of the way.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-gold cursor-pointer"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                <service.icon className="w-8 h-8 text-gold group-hover:text-slate-900 transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 text-slate-900 font-semibold group-hover:text-gold transition-colors"
              >
                Learn More 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
