import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import MegaNavbar from "@/components/MegaNavbar";
import Footer from "@/components/Footer";
import { FileText, Clock, CheckCircle, MessageSquare, Upload, Calendar } from "lucide-react";

export default async function PortalPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  // Mock application data - in production, fetch from database
  const applicationStatus = {
    stage: "Document Review",
    progress: 40,
    lastUpdate: new Date().toLocaleDateString(),
    nextStep: "Upload remaining documents",
  };

  const timeline = [
    { step: "Application Submitted", status: "completed", date: "Dec 15, 2024" },
    { step: "Initial Assessment", status: "completed", date: "Dec 17, 2024" },
    { step: "Document Review", status: "current", date: "In Progress" },
    { step: "Case Lodged", status: "pending", date: "Pending" },
    { step: "Visa Decision", status: "pending", date: "Pending" },
  ];

  return (
    <>
      <MegaNavbar />
      <section className="py-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-6 pt-10">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Welcome back, {session.user?.name || "Valued Client"}!
            </h1>
            <p className="text-slate-600">Track your visa application progress and manage your documents.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Current Stage</p>
                  <p className="font-bold text-slate-900">{applicationStatus.stage}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Progress</p>
                  <p className="font-bold text-slate-900">{applicationStatus.progress}%</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Last Update</p>
                  <p className="font-bold text-slate-900">{applicationStatus.lastUpdate}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Messages</p>
                  <p className="font-bold text-slate-900">2 New</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Application Timeline */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-500" />
                  Application Timeline
                </h2>
                <div className="space-y-4">
                  {timeline.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        item.status === 'completed' ? 'bg-green-500 text-white' :
                        item.status === 'current' ? 'bg-amber-500 text-white animate-pulse' :
                        'bg-slate-200 text-slate-400'
                      }`}>
                        {item.status === 'completed' ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <span className="text-sm font-bold">{idx + 1}</span>
                        )}
                      </div>
                      <div className="flex-1 pb-4 border-b border-slate-100 last:border-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className={`font-semibold ${
                              item.status === 'pending' ? 'text-slate-400' : 'text-slate-900'
                            }`}>
                              {item.step}
                            </p>
                            {item.status === 'current' && (
                              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                                In Progress
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-slate-500">{item.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
                    <Upload className="w-5 h-5 text-amber-500" />
                    <span className="text-slate-700">Upload Documents</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
                    <MessageSquare className="w-5 h-5 text-amber-500" />
                    <span className="text-slate-700">Message Agent</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
                    <Calendar className="w-5 h-5 text-amber-500" />
                    <span className="text-slate-700">Book Consultation</span>
                  </button>
                </div>
              </div>

              {/* Next Step Card */}
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl shadow-lg p-6 text-white">
                <h3 className="font-bold mb-2">Next Step</h3>
                <p className="text-white/90 text-sm mb-4">{applicationStatus.nextStep}</p>
                <button className="w-full bg-white text-amber-600 font-semibold py-2 rounded-lg hover:bg-amber-50 transition-colors">
                  Take Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

