"use client";

import { motion } from 'framer-motion';
import { Send, Phone, Mail, ExternalLink, Calendar, Bell } from 'lucide-react';
import { useState } from 'react';
import { CountryData } from '@/data/countries';

interface CountrySidebarProps {
  country: CountryData;
}

const CountrySidebar = ({ country }: CountrySidebarProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visaType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! Our expert will contact you within 24 hours.');
  };

  return (
    <div className="space-y-6 lg:sticky lg:top-32">
      {/* Consultation Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900 rounded-2xl shadow-xl p-6 text-white"
      >
        <h3 className="font-serif text-2xl font-bold mb-2">
          Free {country.name} Visa Assessment
        </h3>
        <p className="text-white/70 text-sm mb-6">
          Get expert guidance from our MARA registered agents
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
            />
          </div>
          <div>
            <input
              type="email"
              required
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
            />
          </div>
          <div>
            <input
              type="tel"
              required
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
            />
          </div>
          <div>
            <select
              required
              value={formData.visaType}
              onChange={(e) => setFormData({...formData, visaType: e.target.value})}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
            >
              <option value="" className="text-slate-900">Select Visa Type</option>
              {country.subLinks.map((link) => (
                <option key={link.slug} value={link.slug} className="text-slate-900">
                  {link.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <textarea
              placeholder="Tell us about your situation (optional)"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gold hover:bg-gold-dark text-slate-900 font-bold py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 flex items-center justify-center gap-2 group"
          >
            Get Free Assessment
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-4 h-4 text-gold" />
            <span className="text-white/70">Or call us:</span>
            <a href="tel:+611234567890" className="text-gold font-semibold hover:underline">
              +61 1234 567 890
            </a>
          </div>
        </div>
      </motion.div>

      {/* Important Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white rounded-2xl shadow-lg p-6"
      >
        <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <ExternalLink className="w-5 h-5 text-gold" />
          Important Links
        </h3>
        <ul className="space-y-3">
          {country.importantLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-700 hover:text-gold transition-colors group"
              >
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Latest News */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-lg p-6"
      >
        <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Bell className="w-5 h-5 text-gold" />
          Latest Updates
        </h3>
        <ul className="space-y-4">
          {country.latestNews.map((news, idx) => (
            <li key={idx} className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
              <p className="text-slate-700 text-sm font-medium">{news.title}</p>
              <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                <Calendar className="w-3 h-3" />
                {news.date}
              </div>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Quick Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-gold/10 rounded-2xl p-6 border-2 border-gold/20"
      >
        <h3 className="font-serif text-lg font-bold text-slate-900 mb-3">
          Need Urgent Help?
        </h3>
        <p className="text-slate-600 text-sm mb-4">
          Our immigration experts are available 24/7 for urgent queries.
        </p>
        <a
          href="tel:+611234567890"
          className="flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold py-3 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
      </motion.div>
    </div>
  );
};

export default CountrySidebar;

