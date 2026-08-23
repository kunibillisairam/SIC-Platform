import React, { useState } from 'react';
import { 
  BarChart3, 
  Filter,
  Check
} from 'lucide-react';

export default function Dashboard({ setActivePage }) {
  const [sectorFilter, setSectorFilter] = useState('All');

  const metrics = [
    { title: "Total Problems Reported", count: "1,420", change: "+12% this month", color: "text-gov-primary" },
    { title: "Matched R&D Projects", count: "890", change: "62% Match Rate", color: "text-gov-primary" },
    { title: "Deployed Field Pilots", count: "340", change: "Active Real Solutions", color: "text-gov-success" },
    { title: "CSR Capital Mobilized", count: "₹4.8 Cr", change: "Private & Govt R&D", color: "text-gov-warning" },
  ];

  const recentImpacts = [
    { title: "Smart Solar Grain Dryer", location: "Madurai, TN", team: "Thiagarajar Engg Team", impact: "2,400 Farmers Served", sector: "Agriculture", status: "Deployed" },
    { title: "IoT School Water Filtration", location: "Coimbatore, TN", team: "PSG Tech Team HydroShield", impact: "450 Students & 1,200 Villagers", sector: "Water", status: "Field Pilot" },
    { title: "E-Health Tele-Clinic Kiosk", location: "Wayanad, KL", team: "NIT Calicut Innovators", impact: "15 Village Panchayats", sector: "Healthcare", status: "Deployed" },
    { title: "Biomass Pellet Micro-Combustor", location: "Tiruchirappalli, TN", team: "NIT Trichy Clean Energy", impact: "800 Rural Households", sector: "Energy", status: "Field Pilot" },
  ];

  const filteredImpacts = recentImpacts.filter(i => sectorFilter === 'All' || i.sector === sectorFilter);

  return (
    <div className="bg-gov-bg min-h-screen py-10 sm:py-14 text-gov-text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="bg-gov-primary-dark text-white rounded-lg p-6 sm:p-8 border border-gov-border shadow-sm space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-white/10 text-slate-200 text-xs font-bold border border-white/20">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Government & Administrative Governance View</span>
          </div>
          <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight">
            Societal Impact & Governance Analytics
          </h1>
          <p className="text-slate-350 text-sm sm:text-base max-w-3xl">
            Real-time heatmaps, CSR funding deployment, university R&D involvement, and measured social ROI across districts.
          </p>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <div key={m.title} className="bg-white rounded-lg p-6 border border-gov-border shadow-sm space-y-2 hover:shadow-md transition-shadow">
              <span className="text-xs font-bold text-gov-text-secondary uppercase tracking-wider">{m.title}</span>
              <p className={`text-3xl font-black ${m.color}`}>{m.count}</p>
              <p className="text-xs font-medium text-gov-text-secondary">{m.change}</p>
            </div>
          ))}
        </div>

        {/* Impact Breakdown Table */}
        <div className="bg-white rounded-lg p-6 sm:p-8 border border-gov-border shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gov-border pb-4">
            <div>
              <h2 className="text-base font-extrabold text-gov-text-primary">
                Verified Deployed Solutions & Field Social Impact
              </h2>
              <p className="text-xs text-gov-text-secondary font-medium">
                Tracking solutions from initial problem post through to active field pilots and measured community ROI.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gov-text-secondary" />
              <select
                value={sectorFilter}
                onChange={(e) => setSectorFilter(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-gov-border text-xs font-bold bg-white text-gov-text-primary outline-none"
              >
                <option value="All">All Sectors</option>
                <option value="Water">Water & Sanitation</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Energy">Energy</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto border border-gov-border rounded-lg">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gov-border text-gov-text-secondary font-bold uppercase text-[10px] bg-gov-bg">
                  <th className="py-3 px-4">Solution Title</th>
                  <th className="py-3 px-4">Sector</th>
                  <th className="py-3 px-4">Location</th>
                  <th className="py-3 px-4">Innovator Team</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Measurable Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gov-border font-medium text-gov-text-primary bg-white">
                {filteredImpacts.map((imp) => (
                  <tr key={imp.title} className="hover:bg-slate-50">
                    <td 
                      onClick={() => setActivePage('projects')}
                      className="py-3.5 px-4 font-bold text-gov-primary hover:underline cursor-pointer"
                    >
                      {imp.title}
                    </td>
                    <td className="py-3.5 px-4 text-gov-text-secondary">{imp.sector}</td>
                    <td className="py-3.5 px-4 text-gov-text-secondary">{imp.location}</td>
                    <td className="py-3.5 px-4 text-gov-text-secondary">{imp.team}</td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded border text-[9px] font-bold uppercase ${
                        imp.status === 'Deployed' 
                          ? 'bg-gov-success/10 text-gov-success border-gov-success/20' 
                          : 'bg-gov-primary/10 text-gov-primary border-gov-primary/20'
                      }`}>
                        {imp.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right text-gov-success font-bold">{imp.impact}</td>
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
