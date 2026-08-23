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
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>AI Analysis Complete • Problem #PR-2026-8942</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              {data.title}
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm">
              Submitted in Sector: <strong className="text-slate-200">{data.category}</strong> | Location: <strong className="text-slate-200">{data.district}</strong>
            </p>
          </div>

          <button
            onClick={() => setActivePage('matching')}
            className="shrink-0 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-bold rounded-xl shadow-lg border border-blue-400/30 flex items-center space-x-2"
          >
            <span>Proceed to Smart Matching</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 AI Modules Result Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Box 1: Categorization & Scope */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Tag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-base">Categorization</h3>
                <p className="text-xs text-slate-500">NLP Domain Classification</p>
              </div>
            </div>
            <div className="pt-2 space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Detected Sector:</span>
                <span className="font-bold text-slate-900">{data.category}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Tech Requirement:</span>
                <span className="font-bold text-slate-900">Sensors / Filtration R&D</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Confidence Score:</span>
                <span className="font-bold text-emerald-600">96.4% Match</span>
              </div>
            </div>
          </div>

          {/* Box 2: Priority Assessment */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-base">Priority Score</h3>
                <p className="text-xs text-slate-500">Impact vs Risk Matrix</p>
              </div>
            </div>
            <div className="pt-2 space-y-2 text-xs">
              <div className="flex justify-between items-center py-1 border-b border-slate-100">
                <span className="text-slate-500">Calculated Severity:</span>
                <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-extrabold">
                  8.8 / 10 (HIGH)
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Affected Scope:</span>
                <span className="font-bold text-slate-900">{data.impactScope}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">SDG Goal Alignment:</span>
                <span className="font-bold text-blue-600">SDG 6 (Clean Water)</span>
              </div>
            </div>
          </div>

          {/* Box 3: Duplicate Detection */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                <GitMerge className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-base">Duplicate Check</h3>
                <p className="text-xs text-slate-500">Geospatial Clustering</p>
              </div>
            </div>
            <div className="pt-2 space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Similar Reports:</span>
                <span className="font-bold text-slate-900">2 Reports nearby</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Clustering Action:</span>
                <span className="font-bold text-blue-600">Merged into Hub #COI-89</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Resource Optimization:</span>
                <span className="font-bold text-emerald-600">Saved 60% R&D overlap</span>
              </div>
            </div>
          </div>

        </div>

        {/* Detailed Extraction & Next Step recommendation */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-lg font-extrabold text-slate-900">
            AI Key Requirements Extraction
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-extrabold text-slate-800 block mb-1">Target Engineering Domains</span>
              <span className="text-slate-600">Environmental Engineering, IoT Water Quality Sensors, Civil Hydraulics</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-extrabold text-slate-800 block mb-1">Recommended Solution Scope</span>
              <span className="text-slate-600">Low-cost real-time turbidity sensor & solar-powered community filtration unit</span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
            <span className="text-xs font-semibold text-slate-500">Next Stage: Automated University & Industry Matchmaking</span>
            <button
              onClick={() => setActivePage('matching')}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center space-x-1.5"
            >
              <span>View Smart Matching Results</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
