import React, { useState } from 'react';
import { Layers, CheckCircle2, Clock, AlertCircle, ArrowRight, ShieldCheck, FileText, UserCheck, Cpu, Rocket, Award } from 'lucide-react';

export default function ProjectLifecycle({ setActivePage }) {
  const [activeStage, setActiveStage] = useState(5); // Stage 5: Prototype

  const stages = [
    { id: 1, name: "Problem Post", status: "Completed", icon: FileText, desc: "Issue reported by local Panchayat citizen." },
    { id: 2, name: "Validation", status: "Completed", icon: ShieldCheck, desc: "AI analyzed context & verified by District Officer." },
    { id: 3, name: "Team Formation", status: "Completed", icon: UserCheck, desc: "PSG Tech Team HydroShield & faculty matched." },
    { id: 4, name: "Proposal", status: "Completed", icon: FileText, desc: "R&D grant proposal approved by TATA CSR ($5,000)." },
    { id: 5, name: "Prototype", status: "In Progress", icon: Cpu, desc: "IoT sensor & low-cost multi-stage filter unit built." },
    { id: 6, name: "Pilot Testing", status: "Upcoming", icon: Clock, desc: "Field pilot installation at 3 primary schools." },
    { id: 7, name: "Deployment", status: "Upcoming", icon: Rocket, desc: "Full Panchayat pipe network integration." },
    { id: 8, name: "Impact Metric", status: "Upcoming", icon: Award, desc: "Long-term health monitoring & water quality index." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold mb-2 border border-amber-200">
              <Layers className="w-3.5 h-3.5" />
              <span>8-Stage Problem-to-Impact Pipeline</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Project Execution Tracker
            </h1>
            <p className="text-slate-600 text-sm mt-1">
              Project #PRJ-2026-043: IoT Multi-Stage Turbidity & Water Quality Solution
            </p>
          </div>

          <button
            onClick={() => setActivePage('dashboard')}
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl shadow flex items-center space-x-2 shrink-0"
          >
            <span>View Government Impact Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 8-Stage Interactive Timeline */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-lg font-extrabold text-slate-900">
            Lifecycle Stage Progress
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {stages.map((stg) => {
              const Icon = stg.icon;
              const isCompleted = stg.id < activeStage;
              const isCurrent = stg.id === activeStage;
              
              return (
                <button
                  key={stg.id}
                  onClick={() => setActiveStage(stg.id)}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    isCurrent
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-300'
                      : isCompleted
                      ? 'bg-emerald-50 text-emerald-900 border-emerald-200 hover:border-emerald-300'
                      : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-extrabold uppercase opacity-80">Stage 0{stg.id}</span>
                    {isCompleted && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                    {isCurrent && <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>}
                  </div>
                  <Icon className="w-5 h-5 mb-1" />
                  <p className="font-extrabold text-xs leading-tight">{stg.name}</p>
                </button>
              );
            })}
          </div>

          {/* Selected Stage Detail Box */}
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-blue-700 uppercase tracking-wider">
                Stage {stages[activeStage - 1].id}: {stages[activeStage - 1].name}
              </span>
              <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                stages[activeStage - 1].status === 'Completed'
                  ? 'bg-emerald-100 text-emerald-800'
                  : stages[activeStage - 1].status === 'In Progress'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-slate-200 text-slate-700'
              }`}>
                {stages[activeStage - 1].status}
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-800">
              {stages[activeStage - 1].desc}
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Assigned Team: <strong>Team HydroShield (PSG Tech)</strong> | Faculty Guide: <strong>Dr. R. Sundaram</strong> | Sponsor: <strong>TATA CSR ($5,000)</strong>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
