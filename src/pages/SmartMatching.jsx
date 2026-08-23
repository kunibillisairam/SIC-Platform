import React from 'react';
import { GitMerge, Building2, GraduationCap, CheckCircle2, ArrowRight, Star, ShieldCheck, Sparkles } from 'lucide-react';

export default function SmartMatching({ setActivePage }) {
  const universityMatches = [
    {
      name: "PSG College of Technology, Coimbatore",
      type: "University / R&D Hub",
      dept: "Department of Environmental & Civil Engineering",
      score: "94% Match",
      reasons: ["Active water filtration research lab", "15km from problem site", "Faculty available for guide role"],
      recommendedTeam: "Team HydroShield (4th Year B.Tech Civil/IoT)"
    },
    {
      name: "Amrita Vishwa Vidyapeetham",
      type: "University / Innovation Center",
      dept: "Center for Wireless Networks & Applications",
      score: "89% Match",
      reasons: ["IoT Sensor patent pending", "Prior rural water deployment experience"],
      recommendedTeam: "Team AquaPulse (M.Tech Embedded Systems)"
    }
  ];

  const industryPartners = [
    {
      name: "TATA CSR Clean Water Initiative",
      type: "CSR Funder & Mentor",
      focus: "Rural Drinking Water Infrastructure",
      score: "96% Match",
      reasons: ["Budget aligned ($5,000 grant)", "Provides field validation kit and hardware mentors"]
    },
    {
      name: "L&T Water Technology Division",
      type: "Industry Mentor & Scaler",
      focus: "Smart Pipe Leak Detection & Sensors",
      score: "91% Match",
      reasons: ["Tech stack mentorship", "Commercial deployment pathway available"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold mb-2 border border-teal-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Multi-Parameter Smart Matchmaker</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Recommended Solutions & Partners
            </h1>
            <p className="text-slate-600 text-sm mt-1">
              Problem #PR-2026-8942 matched with optimal academic teams, faculty guides, and CSR partners.
            </p>
          </div>

          <button
            onClick={() => setActivePage('projects')}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow flex items-center space-x-2 shrink-0"
          >
            <span>Create & Track Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Section 1: Academic & Student Team Matches */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-extrabold text-slate-900">
              Matched Universities & Student Innovation Teams
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {universityMatches.map((uni) => (
              <div key={uni.name} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 uppercase">
                      {uni.type}
                    </span>
                    <h3 className="font-extrabold text-slate-900 text-lg mt-1">{uni.name}</h3>
                    <p className="text-xs text-slate-500 font-semibold">{uni.dept}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold shrink-0 border border-emerald-200">
                    {uni.score}
                  </span>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-700">Matching Rationale:</span>
                  {uni.reasons.map((r, i) => (
                    <div key={i} className="flex items-center text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 shrink-0" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Recommended Team:</span>
                  <span className="font-extrabold text-blue-700">{uni.recommendedTeam}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Industry & CSR Partners */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center space-x-2">
            <Building2 className="w-6 h-6 text-teal-600" />
            <h2 className="text-xl font-extrabold text-slate-900">
              Recommended Industry & CSR Funding Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industryPartners.map((ind) => (
              <div key={ind.name} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded bg-teal-100 text-teal-800 uppercase">
                      {ind.type}
                    </span>
                    <h3 className="font-extrabold text-slate-900 text-lg mt-1">{ind.name}</h3>
                    <p className="text-xs text-slate-500 font-semibold">{ind.focus}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-extrabold shrink-0 border border-teal-200">
                    {ind.score}
                  </span>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-700">Partnership Rationale:</span>
                  {ind.reasons.map((r, i) => (
                    <div key={i} className="flex items-center text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 mr-2 shrink-0" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to Project Creation */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-blue-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div>
            <h3 className="font-extrabold text-lg">Ready to Form Collaborative Project?</h3>
            <p className="text-xs text-slate-300">Convert this match into an active tracked project in the 8-stage lifecycle.</p>
          </div>
          <button
            onClick={() => setActivePage('projects')}
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-xs rounded-xl shadow flex items-center space-x-2"
          >
            <span>Launch Project Lifecycle</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
