import React, { useState } from 'react';
import { Search, Filter, ArrowRight } from 'lucide-react';

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
    <div className="bg-gov-bg min-h-screen py-12 text-gov-text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-xl sm:text-2xl font-extrabold text-gov-text-primary tracking-tight">
            Explore Ground Problems & Active Projects
          </h1>
          <p className="text-gov-text-secondary text-sm">
            Browse verified community challenges submitted by citizens across India, matched with university innovation teams.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-lg p-4 border border-gov-border shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-gov-text-secondary absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by problem title, keyword, or district..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gov-border text-sm outline-none bg-white text-gov-text-primary focus:border-gov-primary"
            />
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-gov-text-secondary" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gov-border text-sm font-semibold bg-white text-gov-text-primary outline-none w-full sm:w-auto"
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
            <div key={prob.id} className="bg-white rounded-lg p-6 border border-gov-border shadow-sm space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-gov-primary border border-gov-border">
                    {prob.id}
                  </span>
                  <span className="text-xs font-bold text-gov-text-secondary">{prob.category}</span>
                </div>
                <h3 className="font-extrabold text-gov-text-primary text-base leading-snug">{prob.title}</h3>
                <p className="text-xs text-gov-text-secondary mt-2 line-clamp-3 leading-relaxed">{prob.desc}</p>
              </div>

              <div className="pt-4 border-t border-gov-border space-y-2 text-xs">
                <div className="flex items-center justify-between text-gov-text-secondary">
                  <span>Location:</span>
                  <strong className="text-gov-text-primary">{prob.location}</strong>
                </div>
                <div className="flex items-center justify-between text-gov-text-secondary">
                  <span>Matched Team:</span>
                  <strong className="text-gov-primary">{prob.matchedTeam}</strong>
                </div>
                <button
                  onClick={() => {
                    setActivePage('analysis');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full mt-2 py-2 bg-transparent hover:bg-slate-50 text-gov-primary border border-gov-primary font-bold text-xs rounded-lg transition-colors flex items-center justify-center space-x-1 cursor-pointer"
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
