import React, { useState } from 'react';
import { Search, Filter, MapPin, Tag, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ExploreProblems({ setActivePage }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const sampleProblems = [
    {
      id: "PR-2026-8942",
      title: "Water contamination and leakage in rural school supply line",
      category: "Water & Sanitation",
      location: "Coimbatore, Tamil Nadu",
      urgency: "High",
      status: "AI Matched",
      matchedTeam: "Team HydroShield (PSG Tech)",
      desc: "Intermittent pipeline leaks and turbidity in 3 rural primary schools. Requires IoT sensor & low-cost filtration."
    },
    {
      id: "PR-2026-7410",
      title: "Post-harvest grain spoilage due to high humidity in village godowns",
      category: "Agriculture & Rural Tech",
      location: "Madurai, Tamil Nadu",
      urgency: "Critical",
      status: "Prototype Stage",
      matchedTeam: "Team AgroInnovate (Thiagarajar College)",
      desc: "Farmers facing 25% moisture loss in paddy storage. Requires low-cost solar grain dryer & humidity alerts."
    },
    {
      id: "PR-2026-6112",
      title: "Remote primary healthcare center lacking cold chain for vaccines",
      category: "Healthcare & Hygiene",
      location: "Wayanad, Kerala",
      urgency: "High",
      status: "Pilot Deployed",
      matchedTeam: "Team SolarMed (NIT Calicut)",
      desc: "Frequent power cuts damage vital immunization vaccines. Requires solar-thermal Peltier refrigeration."
    }
  ];

  const filteredProblems = sampleProblems.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Explore Ground Problems & Active Projects
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Browse verified community challenges submitted by citizens across India, matched with university innovation teams.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by problem title, keyword, or district..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-slate-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-white text-slate-800 outline-none w-full sm:w-auto"
            >
              <option value="All">All Categories</option>
              <option value="Water & Sanitation">Water & Sanitation</option>
              <option value="Agriculture & Rural Tech">Agriculture & Rural Tech</option>
              <option value="Healthcare & Hygiene">Healthcare & Hygiene</option>
            </select>
          </div>
        </div>

        {/* Problem Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProblems.map((prob) => (
            <div key={prob.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">
                    {prob.id}
                  </span>
                  <span className="text-xs font-bold text-slate-500">{prob.category}</span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-base leading-snug">{prob.title}</h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-3">{prob.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-500">
                  <span>Location:</span>
                  <strong className="text-slate-800">{prob.location}</strong>
                </div>
                <div className="flex items-center justify-between text-slate-500">
                  <span>Matched Team:</span>
                  <strong className="text-blue-700">{prob.matchedTeam}</strong>
                </div>
                <button
                  onClick={() => setActivePage('analysis')}
                  className="w-full mt-2 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-lg transition-colors flex items-center justify-center space-x-1"
                >
                  <span>View AI Analysis</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
