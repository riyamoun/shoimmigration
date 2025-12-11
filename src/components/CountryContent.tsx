"use client";

import { motion } from 'framer-motion';
import { CheckCircle2, FileText, DollarSign, Clock, Award, ChevronRight } from 'lucide-react';
import { CountryData } from '@/data/countries';

interface CountryContentProps {
  country: CountryData;
}

const CountryContent = ({ country }: CountryContentProps) => {
  return (
    <div className="space-y-12">
      {/* Overview Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="overview"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
            <FileText className="w-6 h-6 text-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-slate-900">Overview</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none text-slate-600">
            {country.detailedContent.overview.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="mb-4 leading-relaxed">
                {paragraph.startsWith('**') ? (
                  <strong className="text-slate-900">{paragraph.replace(/\*\*/g, '')}</strong>
                ) : paragraph.startsWith('- ') ? (
                  <span className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    {paragraph.replace('- ', '')}
                  </span>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Visa Types Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
            <Award className="w-6 h-6 text-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-slate-900">Visa Categories</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {country.subLinks.map((link, idx) => (
            <motion.div
              key={link.slug}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              id={link.slug}
              className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl hover:border-gold border-2 border-transparent transition-all cursor-pointer"
            >
              <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-gold transition-colors mb-2">
                {link.name}
              </h3>
              <p className="text-slate-600 text-sm mb-3">{link.description}</p>
              <div className="flex items-center text-gold text-sm font-semibold">
                Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Eligibility Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="eligibility"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-slate-900">Eligibility Requirements</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <ul className="space-y-4">
            {country.detailedContent.eligibility.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                </div>
                <span className="text-slate-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Points Table (if available) */}
      {country.detailedContent.pointsTable && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="points"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-gold" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-slate-900">Points Calculator</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Factor</th>
                  <th className="px-6 py-4 text-center font-semibold">Max Points</th>
                  <th className="px-6 py-4 text-left font-semibold hidden md:table-cell">Description</th>
                </tr>
              </thead>
              <tbody>
                {country.detailedContent.pointsTable.map((row, idx) => (
                  <tr 
                    key={idx}
                    className={`border-b border-slate-100 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}
                  >
                    <td className="px-6 py-4 font-medium text-slate-900">{row.factor}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-gold/10 text-gold font-bold px-3 py-1 rounded-full">
                        {row.maxPoints}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 hidden md:table-cell">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>
      )}

      {/* Process Steps */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="process"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
            <Clock className="w-6 h-6 text-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-slate-900">Application Process</h2>
        </div>
        <div className="space-y-4">
          {country.detailedContent.process.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex gap-4 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="w-10 h-10 bg-slate-900 text-gold rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {idx + 1}
              </div>
              <div className="flex-1">
                <p className="text-slate-700">{step.replace(/^Step \d+: /, '')}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Fees Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="fees"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
            <DollarSign className="w-6 h-6 text-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-slate-900">Visa Fees</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Fee Type</th>
                <th className="px-6 py-4 text-right font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody>
              {country.detailedContent.fees.map((fee, idx) => (
                <tr 
                  key={idx}
                  className={`border-b border-slate-100 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}
                >
                  <td className="px-6 py-4 text-slate-700">{fee.type}</td>
                  <td className="px-6 py-4 text-right font-bold text-gold">{fee.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 bg-gold/5 border-t border-gold/20">
            <p className="text-sm text-slate-600">
              <strong>Note:</strong> Fees are subject to change. Contact us for the latest fee structure.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Documents Required */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="documents"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
            <FileText className="w-6 h-6 text-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-slate-900">Documents Required</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {country.detailedContent.documents.map((doc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
              >
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-slate-700 text-sm">{doc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CountryContent;

