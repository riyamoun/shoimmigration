"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, Award, Globe, Users } from 'lucide-react';

const stats = [
  { icon: ShieldCheck, value: '98%', label: 'Success Rate' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Globe, value: 'MARA', label: 'Registered' },
  { icon: Users, value: '5000+', label: 'Happy Clients' },
];

const TrustBar = () => {
  return (
    <section className="relative z-20 -mt-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <div className="glass rounded-2xl shadow-2xl p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-300">
                  <stat.icon className="w-7 h-7 text-gold group-hover:text-slate-900 transition-colors duration-300" />
                </div>
                <span className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-1">
                  {stat.value}
                </span>
                <span className="text-slate-600 font-medium text-sm uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TrustBar;

