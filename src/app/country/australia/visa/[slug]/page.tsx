"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { getVisaBySlug, australiaVisas } from "@/data/australia-visas";
import { 
  FileText, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  AlertTriangle,
  Briefcase,
  GraduationCap,
  ArrowRight,
  ArrowLeft,
  Globe,
  Users,
  Shield
} from "lucide-react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export default function VisaDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const visa = getVisaBySlug(slug);

  if (!visa) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Visa Not Found</h1>
          <p className="text-gray-600 mb-6">The visa you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href="/country/australia" 
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
          >
            <ArrowLeft size={20} />
            Back to Australia
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Temporary":
        return <Clock className="text-blue-600" size={24} />;
      case "Permanent":
        return <Shield className="text-green-600" size={24} />;
      case "Employer Sponsored":
        return <Briefcase className="text-purple-600" size={24} />;
      case "Provisional":
        return <Globe className="text-orange-600" size={24} />;
      default:
        return <FileText className="text-gray-600" size={24} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Temporary":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Permanent":
        return "bg-green-100 text-green-800 border-green-200";
      case "Employer Sponsored":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Provisional":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <Link 
            href="/country/australia" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition"
          >
            <ArrowLeft size={18} />
            Back to Australia Immigration
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className={`px-4 py-2 rounded-full border font-medium ${getCategoryColor(visa.category)}`}>
                {visa.category}
              </span>
              <span className="text-white/80">Subclass {visa.subclass}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {visa.name}
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl">
              Subclass {visa.subclass} - Complete guide to eligibility, requirements, and application process
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid md:grid-cols-3 gap-4"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="text-red-600" size={24} />
                  <span className="text-sm text-gray-500">Processing Time</span>
                </div>
                <p className="text-lg font-semibold text-gray-800">{visa.processingTime.split("|")[0].trim()}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="text-green-600" size={24} />
                  <span className="text-sm text-gray-500">Visa Cost</span>
                </div>
                <p className="text-lg font-semibold text-gray-800">{visa.cost.primary.split("(")[0].trim()}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="text-blue-600" size={24} />
                  <span className="text-sm text-gray-500">Validity</span>
                </div>
                <p className="text-lg font-semibold text-gray-800">{visa.validity}</p>
              </div>
            </motion.div>

            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                {getCategoryIcon(visa.category)}
                Overview
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                {visa.overview.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="mb-4" dangerouslySetInnerHTML={{ 
                    __html: paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\n- /g, '<br/>• ')
                  }} />
                ))}
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <CheckCircle className="text-green-600" />
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {visa.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="text-green-600" size={14} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Eligibility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Users className="text-blue-600" />
                Eligibility Requirements
              </h2>
              <ul className="space-y-4">
                {visa.eligibility.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 font-semibold text-red-600">
                      {idx + 1}
                    </div>
                    <span className="text-gray-700 pt-1">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Application Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <ArrowRight className="text-purple-600" />
                Application Process
              </h2>
              <div className="space-y-6">
                {visa.process.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center text-white font-bold">
                        {idx + 1}
                      </div>
                      {idx < visa.process.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-200 mt-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <p className="text-gray-700">{step.replace(/^Step \d+: /, '')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Documents Required */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FileText className="text-orange-600" />
                Documents Required
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {visa.documents.map((doc, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100"
                  >
                    <FileText className="text-gray-400" size={18} />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Important Notes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-amber-50 rounded-xl p-8 border border-amber-200"
            >
              <h2 className="text-2xl font-bold text-amber-800 mb-6 flex items-center gap-3">
                <AlertTriangle className="text-amber-600" />
                Important Notes
              </h2>
              <ul className="space-y-3">
                {visa.importantNotes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-amber-900">{note}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Cost Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <DollarSign className="text-green-600" />
                Visa Costs
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">Primary Applicant</span>
                  <span className="text-lg font-bold text-gray-900">{visa.cost.primary}</span>
                </div>
                {visa.cost.secondary && (
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Additional Adult</span>
                    <span className="text-lg font-bold text-gray-900">{visa.cost.secondary}</span>
                  </div>
                )}
                {visa.cost.child && (
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Child (under 18)</span>
                    <span className="text-lg font-bold text-gray-900">{visa.cost.child}</span>
                  </div>
                )}
              </div>
              <p className="mt-4 text-sm text-gray-500">
                * Visa fees are subject to change. Additional costs may include health examinations, police clearances, skills assessments, and English tests.
              </p>
            </motion.div>

            {/* Work Rights & PR Pathway */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Briefcase className="text-blue-600" size={20} />
                  Work Rights
                </h3>
                <p className="text-gray-700">{visa.workRights}</p>
              </div>
              
              <div className={`rounded-xl p-6 shadow-lg border ${visa.pathwayToPR ? 'bg-green-50 border-green-200' : 'bg-gray-100 border-gray-200'}`}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <GraduationCap className={visa.pathwayToPR ? 'text-green-600' : 'text-gray-600'} size={20} />
                  Pathway to PR
                </h3>
                <p className={visa.pathwayToPR ? 'text-green-800' : 'text-gray-700'}>
                  {visa.pathwayToPR 
                    ? 'Yes - This visa can lead to permanent residence in Australia.'
                    : 'No direct pathway to permanent residence from this visa.'}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-6 text-white shadow-xl"
              >
                <h3 className="text-xl font-bold mb-4">Need Help with Your Application?</h3>
                <p className="text-white/90 mb-6">
                  Our expert immigration consultants can guide you through the {visa.name} application process.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} />
                    Free eligibility assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} />
                    Document checklist
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} />
                    Application review
                  </li>
                </ul>
                <Link 
                  href="#consultation"
                  className="block w-full bg-white text-red-600 font-semibold py-3 rounded-lg text-center hover:bg-gray-100 transition"
                >
                  Book Free Consultation
                </Link>
              </motion.div>

              {/* Other Visas */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-4">Other Australian Visas</h3>
                <ul className="space-y-3">
                  {australiaVisas
                    .filter(v => v.slug !== slug)
                    .slice(0, 5)
                    .map((v) => (
                      <li key={v.slug}>
                        <Link 
                          href={`/country/australia/visa/${v.slug}`}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition group"
                        >
                          <div>
                            <span className="font-medium text-gray-800 group-hover:text-red-600 transition">
                              Subclass {v.subclass}
                            </span>
                            <p className="text-sm text-gray-500">{v.name}</p>
                          </div>
                          <ArrowRight size={18} className="text-gray-400 group-hover:text-red-600 transition" />
                        </Link>
                      </li>
                    ))}
                </ul>
              </motion.div>

              {/* Processing Time */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Clock size={20} className="text-red-600" />
                  Processing Time
                </h3>
                <div className="space-y-3">
                  {visa.processingTime.split("|").map((time, idx) => (
                    <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-gray-700">{time.trim()}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-gray-500">
                  Processing times may vary. Check the official website for current times.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Consultation Form */}
        <motion.div
          id="consultation"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Get Expert Help with Your {visa.name}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced immigration consultants will assess your eligibility and guide you through every step of the application process.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <LeadForm 
              country="Australia" 
              visaType={`Subclass ${visa.subclass} - ${visa.name}`} 
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
