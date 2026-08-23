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
    <div className="bg-[#F5F7FA] min-h-screen py-8 text-[#17202A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div>
          <h1 className="text-2xl font-extrabold text-[#17202A] tracking-tight">
            Explore Ground Problems & Active Projects
          </h1>
          <p className="text-[#5B6875] text-xs sm:text-sm mt-1">
            Browse verified community challenges submitted by citizens across India, matched with university innovation teams.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="bg-white rounded-md p-4 border border-[#D9E0E7] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-[#5B6875] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by problem title, keyword, or district..."
              className="w-full pl-9 pr-3 py-2 rounded-md border border-[#D9E0E7] text-xs outline-none focus:border-[#164A7B]"
            />
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <Filter className="w-3.5 h-3.5 text-[#5B6875]" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 rounded-md border border-[#D9E0E7] text-xs font-bold bg-white text-[#17202A] outline-none w-full sm:w-auto"
            >
              <option value="All">All Categories</option>
              <option value="Water & Sanitation">Water & Sanitation</option>
              <option value="Agriculture & Rural Tech">Agriculture & Rural Tech</option>
              <option value="Healthcare & Hygiene">Healthcare & Hygiene</option>
            </select>
          </div>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredProblems.map((prob) => (
            <div key={prob.id} className="bg-white rounded-md p-5 border border-[#D9E0E7] shadow-xs space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#164A7B] text-white">
                    {prob.id}
                  </span>
                  <span className="text-xs font-semibold text-[#5B6875]">{prob.category}</span>
                </div>
                <h3 className="font-extrabold text-[#17202A] text-sm leading-snug">{prob.title}</h3>
                <p className="text-xs text-[#5B6875] mt-2 line-clamp-3 leading-normal">{prob.desc}</p>
              </div>

              <div className="pt-3 border-t border-[#D9E0E7] space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-[#5B6875]">
                  <span>Location:</span>
                  <strong className="text-[#17202A]">{prob.location}</strong>
                </div>
                <div className="flex items-center justify-between text-[#5B6875]">
                  <span>Matched Team:</span>
                  <strong className="text-[#164A7B]">{prob.matchedTeam}</strong>
                </div>
                <button
                  onClick={() => setActivePage('analysis')}
                  className="w-full mt-2 py-1.5 bg-[#F5F7FA] hover:bg-[#D9E0E7] text-[#17202A] font-bold text-xs rounded border border-[#D9E0E7] transition-colors flex items-center justify-center space-x-1"
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
