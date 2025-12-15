'use client';

import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  visaType: string;
  targetCountry: string;
  message: string | null;
  status: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/leads');
      if (!response.ok) throw new Error('Failed to fetch leads');
      const data = await response.json();
      setLeads(data);
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load leads');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'CONTACTED':
        return 'bg-green-100 text-green-800';
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
      case 'CLOSED':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 p-8">
        <div className="text-center">
          <p className="text-gray-600">Loading leads...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-navy mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Total Leads: {leads.length}</p>
        </div>

        {error && (
          <Card className="mb-6 border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <p className="text-red-800">{error}</p>
            </CardContent>
          </Card>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 text-sm">New Leads</p>
              <p className="text-3xl font-bold text-navy">
                {leads.filter((l) => l.status === 'PENDING').length}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 text-sm">Contacted</p>
              <p className="text-3xl font-bold text-green-600">
                {leads.filter((l) => l.status === 'CONTACTED').length}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 text-sm">Closed</p>
              <p className="text-3xl font-bold text-gray-600">
                {leads.filter((l) => l.status === 'CLOSED').length}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 text-sm">This Month</p>
              <p className="text-3xl font-bold text-blue-600">
                {
                  leads.filter((l) => {
                    const leadDate = new Date(l.createdAt);
                    const now = new Date();
                    return (
                      leadDate.getMonth() === now.getMonth() &&
                      leadDate.getFullYear() === now.getFullYear()
                    );
                  }).length
                }
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Leads Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Leads</CardTitle>
          </CardHeader>
          <CardContent>
            {leads.length === 0 ? (
              <p className="text-gray-600 text-center py-8">No leads yet</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Phone</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Visa Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Country</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((lead) => (
                      <tr key={lead.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{lead.name}</td>
                        <td className="py-3 px-4 text-blue-600">{lead.email}</td>
                        <td className="py-3 px-4">{lead.phone}</td>
                        <td className="py-3 px-4">{lead.visaType}</td>
                        <td className="py-3 px-4">{lead.targetCountry}</td>
                        <td className="py-3 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(lead.status)}`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{formatDate(lead.createdAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
