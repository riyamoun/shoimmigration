"use client";

import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    targetCountry: '',
    visaType: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          targetCountry: formData.targetCountry,
          visaType: formData.visaType,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || 'Failed to submit application');
        return;
      }

      toast.success(data.message || 'Thank you! We will contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        targetCountry: '',
        visaType: '',
        message: '',
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
              Start Your{' '}
              <span className="text-gold">Journey Today</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Ready to take the first step towards your new life? Fill out the form for a free 
              assessment or contact us directly. Our expert team is here to help.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Call Us</h4>
                  <p className="text-slate-600">+61 2 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Email Us</h4>
                  <p className="text-slate-600">info@shoimmigration.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Visit Us</h4>
                  <p className="text-slate-600">123 Immigration Street, Sydney NSW 2000</p>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="mt-10 p-6 bg-white rounded-2xl shadow-lg">
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100" 
                  alt="MARA Logo"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-semibold text-slate-900">MARA Registered</h4>
                  <p className="text-sm text-slate-600">Migration Agents Registration Authority</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-10"
            >
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">
                Free Visa Assessment
              </h3>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                      placeholder="+61 xxx xxx xxx"
                    />
                  </div>
                </div>

                {/* Country & Visa Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Target Country</label>
                    <select
                      required
                      value={formData.targetCountry}
                      onChange={(e) => setFormData({...formData, targetCountry: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select Country</option>
                      <option value="Australia">Australia</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="newzealand">New Zealand</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Visa Type</label>
                    <select
                      required
                      value={formData.visaType}
                      onChange={(e) => setFormData({...formData, visaType: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select Visa Type</option>
                      <option value="student">Student Visa</option>
                      <option value="skilled">Skilled Migration</option>
                      <option value="partner">Partner Visa</option>
                      <option value="business">Business Visa</option>
                      <option value="tourist">Tourist Visa</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your situation..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gold hover:bg-gold-dark text-slate-900 font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Processing...' : 'Get Free Assessment'}
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <p className="text-xs text-slate-500 text-center mt-4">
                By submitting, you agree to our Privacy Policy. We'll respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
