import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import MegaNavbar from "@/components/MegaNavbar";
import Footer from "@/components/Footer";
import { FileText, Clock, CheckCircle, MessageSquare, Upload, Calendar, AlertCircle } from "lucide-react";

// Define stage mapping for timeline
const STAGE_MAP: Record<string, { step: number; label: string }> = {
  SUBMITTED: { step: 1, label: "Application Submitted" },
  DOCUMENTS_PENDING: { step: 2, label: "Documents Pending" },
  UNDER_REVIEW: { step: 3, label: "Under Review" },
  LODGED: { step: 4, label: "Case Lodged" },
  APPROVED: { step: 5, label: "Visa Approved" },
  REJECTED: { step: 5, label: "Visa Rejected" },
};

function getNextStep(status: string): string {
  switch (status) {
    case "SUBMITTED":
      return "Wait for initial assessment";
    case "DOCUMENTS_PENDING":
      return "Upload required documents";
    case "UNDER_REVIEW":
      return "Application is being reviewed";
    case "LODGED":
      return "Waiting for visa decision";
    case "APPROVED":
      return "Collect your visa";
    case "REJECTED":
      return "Contact agent for next steps";
    default:
      return "Contact your agent";
  }
}

function calculateProgress(status: string): number {
  const progressMap: Record<string, number> = {
    SUBMITTED: 20,
    DOCUMENTS_PENDING: 40,
    UNDER_REVIEW: 60,
    LODGED: 80,
    APPROVED: 100,
    REJECTED: 100,
  };
  return progressMap[status] || 0;
}

export default async function PortalPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  // Fetch user's applications from database
  const applications = await prisma.application.findMany({
    where: { userId: session.user.id },
    include: {
      documents: true,
    },
    orderBy: { createdAt: "desc" },
  });

  // Get the most recent application or null
  const latestApplication = applications[0] || null;

  // Build timeline from application status
  const buildTimeline = (status: string, createdAt: Date, updatedAt: Date) => {
    const currentStep = STAGE_MAP[status]?.step || 1;
    const steps = [
      { step: "Application Submitted", status: currentStep >= 1 ? (currentStep > 1 ? "completed" : "current") : "pending", date: createdAt.toLocaleDateString() },
      { step: "Documents Review", status: currentStep >= 2 ? (currentStep > 2 ? "completed" : "current") : "pending", date: currentStep >= 2 ? updatedAt.toLocaleDateString() : "Pending" },
      { step: "Under Review", status: currentStep >= 3 ? (currentStep > 3 ? "completed" : "current") : "pending", date: currentStep >= 3 ? updatedAt.toLocaleDateString() : "Pending" },
      { step: "Case Lodged", status: currentStep >= 4 ? (currentStep > 4 ? "completed" : "current") : "pending", date: currentStep >= 4 ? updatedAt.toLocaleDateString() : "Pending" },
      { step: "Visa Decision", status: currentStep >= 5 ? "completed" : "pending", date: currentStep >= 5 ? updatedAt.toLocaleDateString() : "Pending" },
    ];
    return steps;
  };

  const applicationStatus = latestApplication
    ? {
        stage: STAGE_MAP[latestApplication.status]?.label || latestApplication.status,
        progress: calculateProgress(latestApplication.status),
        lastUpdate: latestApplication.updatedAt.toLocaleDateString(),
        nextStep: getNextStep(latestApplication.status),
      }
    : {
        stage: "No Application",
        progress: 0,
        lastUpdate: "-",
        nextStep: "Submit your first application",
      };

  const timeline = latestApplication
    ? buildTimeline(latestApplication.status, latestApplication.createdAt, latestApplication.updatedAt)
    : [];

  // Count pending documents
  const pendingDocuments = latestApplication?.documents.filter(d => d.status === "PENDING").length || 0;

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

          {/* No Application Alert */}
          {!latestApplication && (
            <div className="mb-8 bg-amber-50 border border-amber-200 rounded-xl p-6 flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-800">No Applications Yet</h3>
                <p className="text-amber-700 text-sm mt-1">
                  You haven&apos;t submitted any visa applications yet. Contact our team to get started on your immigration journey.
                </p>
              </div>
            </div>
          )}

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
                  <p className="text-sm text-slate-600">Pending Docs</p>
                  <p className="font-bold text-slate-900">{pendingDocuments} Items</p>
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
                {timeline.length > 0 ? (
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
                ) : (
                  <p className="text-slate-500 text-center py-8">No application timeline available</p>
                )}
              </div>

              {/* Documents Section */}
              {latestApplication && latestApplication.documents.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-amber-500" />
                    Documents
                  </h2>
                  <div className="space-y-3">
                    {latestApplication.documents.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div>
                          <p className="font-medium text-slate-900">{doc.name}</p>
                          <p className="text-sm text-slate-500">{doc.type}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          doc.status === 'VERIFIED' ? 'bg-green-100 text-green-800' :
                          doc.status === 'UPLOADED' ? 'bg-blue-100 text-blue-800' :
                          doc.status === 'REJECTED' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {doc.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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

              {/* All Applications */}
              {applications.length > 1 && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-lg font-bold text-slate-900 mb-4">All Applications</h2>
                  <div className="space-y-2">
                    {applications.map((app) => (
                      <div key={app.id} className="p-3 bg-slate-50 rounded-lg">
                        <p className="font-medium text-slate-900">{app.targetCountry} - {app.visaType}</p>
                        <p className="text-sm text-slate-500">{app.status}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

