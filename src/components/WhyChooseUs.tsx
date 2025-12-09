"use client";

import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Clock, Users, Award } from 'lucide-react';

const features = [
  { icon: Shield, text: 'MARA Registered Migration Agents' },
  { icon: Users, text: 'Personalised Migration Strategy' },
  { icon: Clock, text: 'Fast & Efficient Processing' },
  { icon: Award, text: '98% Visa Approval Success Rate' },
  { icon: CheckCircle2, text: 'Complete Documentation Support' },
  { icon: Shield, text: 'Transparent Pricing - No Hidden Fees' },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800"
                alt="Happy migrants in Australia"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-8 -right-8 bg-slate-900 text-white p-6 rounded-2xl shadow-xl"
              >
                <div className="text-4xl font-serif font-bold text-gold">15+</div>
                <div className="text-sm text-white/80">Years of Excellence</div>
              </motion.div>
            </div>
            {/* Background Decorations */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-gold/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-900/5 rounded-2xl -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
              Expert Guidance for Your{' '}
              <span className="text-gold">Migration Journey</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              At ShoImmigration, we understand that moving to a new country is a life-changing decision. 
              Our team of MARA-registered agents brings over 15 years of expertise to ensure your 
              visa application has the best chance of success.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-slate-700 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-10"
            >
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl"
              >
                Schedule Free Consultation
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
