import React from 'react';
import { BarChart3, TrendingUp, Building2, Users, CheckCircle2, MapPin, Award, Layers, DollarSign } from 'lucide-react';

export default function Dashboard({ setActivePage }) {
  const metrics = [
    { title: "Total Problems Reported", count: "1,420", change: "+12% this month", color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Matched R&D Projects", count: "890", change: "62% Match Rate", color: "text-indigo-600", bg: "bg-indigo-50" },
    { title: "Deployed Field Pilots", count: "340", change: "Active Solutions", color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "CSR Capital Mobilized", count: "₹4.8 Cr", change: "Private & Govt R&D", color: "text-amber-600", bg: "bg-amber-50" },
  ];

  const recentImpacts = [
    { title: "Smart Solar Grain Dryer", location: "Madurai, TN", team: "Thiagarajar Engg Team", impact: "2,400 Farmers Served", sector: "Agriculture" },
    { title: "IoT School Water Filtration", location: "Coimbatore, TN", team: "PSG Tech Team HydroShield", impact: "450 Students & 1,200 Villagers", sector: "Water" },
    { title: "E-Health Tele-Clinic Kiosk", location: "Wayanad, KL", team: "NIT Calicut Innovators", impact: "15 Village Panchayats", sector: "Healthcare" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2 border border-emerald-200">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Government & Executive Governance View</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Societal Impact & Innovation Analytics
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Real-time heatmaps, funding deployment, university R&D involvement, and measured social ROI across districts.
          </p>
        </div>

        {/* 4 Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <div key={m.title} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{m.title}</span>
              <p className={`text-3xl font-extrabold ${m.color}`}>{m.count}</p>
              <p className="text-xs font-semibold text-slate-600">{m.change}</p>
            </div>
          ))}
        </div>

        {/* Deployed Solutions & Impact Table */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-extrabold text-slate-900">
              Verified Deployed Solutions & Field Impact
            </h2>
            <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">
              Live Verified Data
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[10px]">
                  <th className="py-3 px-4">Solution Title</th>
                  <th className="py-3 px-4">Sector</th>
                  <th className="py-3 px-4">Location</th>
                  <th className="py-3 px-4">Innovator Team</th>
                  <th className="py-3 px-4">Measurable Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-semibold text-slate-800">
                {recentImpacts.map((imp) => (
                  <tr key={imp.title} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-bold text-blue-700">{imp.title}</td>
                    <td className="py-3.5 px-4">{imp.sector}</td>
                    <td className="py-3.5 px-4">{imp.location}</td>
                    <td className="py-3.5 px-4">{imp.team}</td>
                    <td className="py-3.5 px-4 text-emerald-600 font-bold">{imp.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
