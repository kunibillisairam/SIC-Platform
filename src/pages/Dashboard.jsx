import React, { useState } from 'react';
import { 
  BarChart3, 
  Filter,
  CheckCircle2
} from 'lucide-react';

export default function Dashboard({ setActivePage }) {
  const [sectorFilter, setSectorFilter] = useState('All');

  const metrics = [
    { title: "Total Problems Reported", count: "1,420", change: "+12% this month", color: "text-[#164A7B]" },
    { title: "Matched R&D Projects", count: "890", change: "62% Match Rate", color: "text-[#164A7B]" },
    { title: "Deployed Field Pilots", count: "340", change: "Active Real Solutions", color: "text-[#16865B]" },
    { title: "CSR Capital Mobilized", count: "₹4.8 Cr", change: "Private & Govt R&D", color: "text-[#C47A00]" },
  ];

  const recentImpacts = [
    { title: "Smart Solar Grain Dryer", location: "Madurai, TN", team: "Thiagarajar Engg Team", impact: "2,400 Farmers Served", sector: "Agriculture", status: "Deployed" },
    { title: "IoT School Water Filtration", location: "Coimbatore, TN", team: "PSG Tech Team HydroShield", impact: "450 Students & 1,200 Villagers", sector: "Water", status: "Field Pilot" },
    { title: "E-Health Tele-Clinic Kiosk", location: "Wayanad, KL", team: "NIT Calicut Innovators", impact: "15 Village Panchayats", sector: "Healthcare", status: "Deployed" },
    { title: "Biomass Pellet Micro-Combustor", location: "Tiruchirappalli, TN", team: "NIT Trichy Clean Energy", impact: "800 Rural Households", sector: "Energy", status: "Field Pilot" },
  ];

  const filteredImpacts = recentImpacts.filter(i => sectorFilter === 'All' || i.sector === sectorFilter);

  return (
    <div className="bg-[#F5F7FA] min-h-screen py-8 text-[#17202A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div className="bg-[#0B2F50] text-white rounded-md p-6 border border-[#164A7B] shadow-xs space-y-2">
          <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded bg-[#16865B] text-white text-xs font-bold mb-1">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Government & Administrative Governance View</span>
          </div>
          <h1 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
            Societal Impact & Governance Analytics
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl">
            Real-time heatmaps, CSR funding deployment, university R&D involvement, and measured social ROI across districts.
          </p>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div key={m.title} className="bg-white rounded-md p-5 border border-[#D9E0E7] shadow-xs space-y-1">
              <span className="text-[11px] font-bold text-[#5B6875] uppercase tracking-wider">{m.title}</span>
              <p className={`text-2xl sm:text-3xl font-extrabold ${m.color}`}>{m.count}</p>
              <p className="text-xs font-semibold text-[#5B6875]">{m.change}</p>
            </div>
          ))}
        </div>

        {/* Impact Table */}
        <div className="bg-white rounded-md p-6 border border-[#D9E0E7] shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#D9E0E7] pb-3">
            <div>
              <h2 className="text-base font-extrabold text-[#17202A] uppercase tracking-wider">
                Verified Deployed Solutions & Field Social Impact
              </h2>
              <p className="text-xs text-[#5B6875]">
                Tracking solutions from initial problem post through to active field pilots and measured community ROI.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="w-3.5 h-3.5 text-[#5B6875]" />
              <select
                value={sectorFilter}
                onChange={(e) => setSectorFilter(e.target.value)}
                className="px-3 py-1 rounded-md border border-[#D9E0E7] text-xs font-bold bg-white text-[#17202A] outline-none"
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
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-[#F5F7FA] border-b border-[#D9E0E7] text-[#5B6875] font-bold uppercase text-[10px]">
                  <th className="py-2.5 px-3">Solution Title</th>
                  <th className="py-2.5 px-3">Sector</th>
                  <th className="py-2.5 px-3">Location</th>
                  <th className="py-2.5 px-3">Innovator Team</th>
                  <th className="py-2.5 px-3">Status</th>
                  <th className="py-2.5 px-3 text-right">Measurable Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D9E0E7] font-semibold text-[#17202A]">
                {filteredImpacts.map((imp) => (
                  <tr key={imp.title} className="hover:bg-[#F5F7FA]">
                    <td className="py-3 px-3 font-bold text-[#164A7B]">{imp.title}</td>
                    <td className="py-3 px-3">{imp.sector}</td>
                    <td className="py-3 px-3">{imp.location}</td>
                    <td className="py-3 px-3">{imp.team}</td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        imp.status === 'Deployed' ? 'bg-[#16865B] text-white' : 'bg-[#164A7B] text-white'
                      }`}>
                        {imp.status}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right text-[#16865B] font-extrabold">{imp.impact}</td>
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
