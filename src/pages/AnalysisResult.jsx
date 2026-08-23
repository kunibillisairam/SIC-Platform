import React from 'react';
import { BrainCircuit, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Tag, GitMerge, FileText, Layers } from 'lucide-react';

export default function AnalysisResult({ problemData, setActivePage }) {
  const data = problemData || {
    title: 'Water contamination and leakage in rural school supply line',
    category: 'Water & Sanitation',
    district: 'Coimbatore, Tamil Nadu',
    pincode: '641004',
    urgency: 'High',
    description: 'The drinking water pipeline supplying 3 primary schools in Panchayat Ward 4 has high turbidity and intermittent pipe leakage, leading to frequent school absenteeism and waterborne illnesses among 450+ children during monsoon.',
    impactScope: '450+ Students & 1,200 villagers',
  };

  return (
    <div className="bg-[#F5F7FA] min-h-screen py-8 text-[#17202A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Banner */}
        <div className="bg-[#0B2F50] text-white rounded-md p-6 border border-[#164A7B] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded bg-[#16865B] text-white text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>AI Analysis Complete • Problem #PR-2026-8942</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white">
              {data.title}
            </h1>
            <p className="text-slate-300 text-xs">
              Sector: <strong className="text-white">{data.category}</strong> | Location: <strong className="text-white">{data.district}</strong>
            </p>
          </div>

          <button
            onClick={() => setActivePage('matching')}
            className="shrink-0 px-4 py-2 bg-[#16865B] hover:bg-[#116846] text-white text-xs font-bold rounded-md transition-colors flex items-center space-x-1.5 border border-white/20"
          >
            <span>Proceed to Smart Matching</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 AI Modules Result Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Box 1: Categorization & Scope */}
          <div className="bg-white rounded-md p-5 border border-[#D9E0E7] shadow-xs space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded bg-[#164A7B] text-white flex items-center justify-center font-bold">
                <Tag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-extrabold text-[#17202A] text-sm">Categorization</h3>
                <p className="text-[11px] text-[#5B6875]">Domain Classification</p>
              </div>
            </div>
            <div className="pt-2 space-y-1.5 text-xs border-t border-[#D9E0E7]">
              <div className="flex justify-between py-0.5">
                <span className="text-[#5B6875]">Detected Sector:</span>
                <span className="font-bold text-[#17202A]">{data.category}</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="text-[#5B6875]">Tech Requirement:</span>
                <span className="font-bold text-[#17202A]">Sensors / Filtration R&D</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="text-[#5B6875]">Confidence Score:</span>
                <span className="font-bold text-[#16865B]">96.4% Match</span>
              </div>
            </div>
          </div>

          {/* Box 2: Priority Assessment */}
          <div className="bg-white rounded-md p-5 border border-[#D9E0E7] shadow-xs space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded bg-[#C47A00] text-white flex items-center justify-center font-bold">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-extrabold text-[#17202A] text-sm">Priority Score</h3>
                <p className="text-[11px] text-[#5B6875]">Impact vs Risk Matrix</p>
              </div>
            </div>
            <div className="pt-2 space-y-1.5 text-xs border-t border-[#D9E0E7]">
              <div className="flex justify-between items-center py-0.5">
                <span className="text-[#5B6875]">Calculated Severity:</span>
                <span className="px-2 py-0.5 rounded bg-[#C0392B]/10 text-[#C0392B] font-extrabold text-[10px]">
                  8.8 / 10 (HIGH)
                </span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="text-[#5B6875]">Affected Scope:</span>
                <span className="font-bold text-[#17202A]">{data.impactScope}</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="text-[#5B6875]">SDG Goal Alignment:</span>
                <span className="font-bold text-[#164A7B]">SDG 6 (Clean Water)</span>
              </div>
            </div>
          </div>

          {/* Box 3: Duplicate Detection */}
          <div className="bg-white rounded-md p-5 border border-[#D9E0E7] shadow-xs space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded bg-[#164A7B] text-white flex items-center justify-center font-bold">
                <GitMerge className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-extrabold text-[#17202A] text-sm">Duplicate Check</h3>
                <p className="text-[11px] text-[#5B6875]">Geospatial Clustering</p>
              </div>
            </div>
            <div className="pt-2 space-y-1.5 text-xs border-t border-[#D9E0E7]">
              <div className="flex justify-between py-0.5">
                <span className="text-[#5B6875]">Similar Reports:</span>
                <span className="font-bold text-[#17202A]">2 Reports nearby</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="text-[#5B6875]">Clustering Action:</span>
                <span className="font-bold text-[#164A7B]">Merged into Hub #COI-89</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="text-[#5B6875]">Resource Optimization:</span>
                <span className="font-bold text-[#16865B]">Saved 60% R&D overlap</span>
              </div>
            </div>
          </div>

        </div>

        {/* Detailed Extraction & Next Step recommendation */}
        <div className="bg-white rounded-md p-6 border border-[#D9E0E7] shadow-xs space-y-4">
          <h3 className="text-base font-extrabold text-[#17202A]">
            AI Key Requirements Extraction
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-md bg-[#F5F7FA] border border-[#D9E0E7]">
              <span className="font-bold text-[#17202A] block mb-1">Target Engineering Domains</span>
              <span className="text-[#5B6875]">Environmental Engineering, IoT Water Quality Sensors, Civil Hydraulics</span>
            </div>
            <div className="p-3.5 rounded-md bg-[#F5F7FA] border border-[#D9E0E7]">
              <span className="font-bold text-[#17202A] block mb-1">Recommended Solution Scope</span>
              <span className="text-[#5B6875]">Low-cost real-time turbidity sensor & solar-powered community filtration unit</span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#D9E0E7] flex justify-between items-center text-xs">
            <span className="font-semibold text-[#5B6875]">Next Stage: Automated University & Industry Matchmaking</span>
            <button
              onClick={() => setActivePage('matching')}
              className="px-4 py-2 bg-[#164A7B] hover:bg-[#0B2F50] text-white font-bold rounded-md shadow-xs transition-colors flex items-center space-x-1.5"
            >
              <span>View Smart Matching Results</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
