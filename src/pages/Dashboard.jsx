import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Building2, 
  Users, 
  CheckCircle2, 
  MapPin, 
  Award, 
  Layers, 
  DollarSign,
  Filter,
  ShieldCheck,
  Zap,
  Sparkles
} from 'lucide-react';

export default function Dashboard({ setActivePage }) {
  const [sectorFilter, setSectorFilter] = useState('All');

  const metrics = [
    { title: "Total Problems Reported", count: "1,420", change: "+12% this month", color: "text-blue-600", bg: "bg-blue-50 border-blue-100" },
    { title: "Matched R&D Projects", count: "890", change: "62% Match Rate", color: "text-indigo-600", bg: "bg-indigo-50 border-indigo-100" },
    { title: "Deployed Field Pilots", count: "340", change: "Active Real Solutions", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100" },
    { title: "CSR Capital Mobilized", count: "₹4.8 Cr", change: "Private & Govt R&D", color: "text-amber-600", bg: "bg-amber-50 border-amber-100" },
  ];

  const recentImpacts = [
    { title: "Smart Solar Grain Dryer", location: "Madurai, TN", team: "Thiagarajar Engg Team", impact: "2,400 Farmers Served", sector: "Agriculture", status: "Deployed" },
    { title: "IoT School Water Filtration", location: "Coimbatore, TN", team: "PSG Tech Team HydroShield", impact: "450 Students & 1,200 Villagers", sector: "Water", status: "Field Pilot" },
    { title: "E-Health Tele-Clinic Kiosk", location: "Wayanad, KL", team: "NIT Calicut Innovators", impact: "15 Village Panchayats", sector: "Healthcare", status: "Deployed" },
    { title: "Biomass Pellet Micro-Combustor", location: "Tiruchirappalli, TN", team: "NIT Trichy Clean Energy", impact: "800 Rural Households", sector: "Energy", status: "Field Pilot" },
  ];

  const filteredImpacts = recentImpacts.filter(i => sectorFilter === 'All' || i.sector === sectorFilter);

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-extrabold border border-emerald-400/30">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Government & Administrative Governance View</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Societal Impact & Governance Analytics
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl">
            Real-time heatmaps, CSR funding deployment, university R&D involvement, and measured social ROI across districts.
          </p>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <div key={m.title} className={`bg-white rounded-2xl p-6 border shadow-sm space-y-2 hover:shadow-md transition-shadow ${m.bg}`}>
              <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">{m.title}</span>
              <p className={`text-3xl font-extrabold ${m.color}`}>{m.count}</p>
              <p className="text-xs font-semibold text-slate-600">{m.change}</p>
            </div>
          ))}
        </div>

        {/* Impact Breakdown Table */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-lg font-extrabold text-slate-900">
                Verified Deployed Solutions & Field Social Impact
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Tracking solutions from initial problem post through to active field pilots and measured community ROI.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <select
                value={sectorFilter}
                onChange={(e) => setSectorFilter(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold bg-white text-slate-800 outline-none"
              >
                <option value="All">All Sectors</option>
                <option value="Water">Water & Sanitation</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Energy">Energy</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[10px]">
                  <th className="py-3 px-4">Solution Title</th>
                  <th className="py-3 px-4">Sector</th>
                  <th className="py-3 px-4">Location</th>
                  <th className="py-3 px-4">Innovator Team</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Measurable Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-semibold text-slate-800">
                {filteredImpacts.map((imp) => (
                  <tr key={imp.title} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-bold text-blue-700">{imp.title}</td>
                    <td className="py-3.5 px-4">{imp.sector}</td>
                    <td className="py-3.5 px-4">{imp.location}</td>
                    <td className="py-3.5 px-4">{imp.team}</td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                        imp.status === 'Deployed' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {imp.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right text-emerald-600 font-extrabold">{imp.impact}</td>
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
