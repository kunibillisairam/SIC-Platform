import React, { useState } from 'react';
import { Layers, CheckCircle2, Clock, ArrowRight, ShieldCheck, FileText, UserCheck, Cpu, Rocket, Award } from 'lucide-react';

export default function ProjectLifecycle({ setActivePage }) {
  const [activeStage, setActiveStage] = useState(5);

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
    <div className="bg-[#F5F7FA] min-h-screen py-8 text-[#17202A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div className="bg-[#0B2F50] text-white rounded-md p-6 border border-[#164A7B] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded bg-[#164A7B] text-slate-100 text-xs font-bold border border-white/10 mb-1">
              <Layers className="w-3.5 h-3.5" />
              <span>8-Stage Problem-to-Impact Pipeline</span>
            </div>
            <h1 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
              Project Execution Tracker
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm">
              Project #PRJ-2026-043: IoT Multi-Stage Turbidity & Water Quality Solution
            </p>
          </div>

          <button
            onClick={() => setActivePage('dashboard')}
            className="px-4 py-2 bg-[#16865B] hover:bg-[#116846] text-white font-bold text-xs rounded-md shadow-xs border border-white/20 transition-colors flex items-center space-x-1.5 shrink-0"
          >
            <span>View Impact Dashboard</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 8-Stage Interactive Timeline */}
        <div className="bg-white rounded-md p-6 border border-[#D9E0E7] shadow-xs space-y-4">
          <h2 className="text-sm font-extrabold text-[#17202A] uppercase tracking-wider">
            Lifecycle Stage Progress
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {stages.map((stg) => {
              const Icon = stg.icon;
              const isCompleted = stg.id < activeStage;
              const isCurrent = stg.id === activeStage;
              
              return (
                <button
                  key={stg.id}
                  onClick={() => setActiveStage(stg.id)}
                  className={`p-3 rounded-md text-left border transition-colors ${
                    isCurrent
                      ? 'bg-[#164A7B] text-white border-[#164A7B]'
                      : isCompleted
                      ? 'bg-[#16865B]/10 text-[#16865B] border-[#16865B]/30 hover:bg-[#16865B]/20'
                      : 'bg-[#F5F7FA] text-[#5B6875] border-[#D9E0E7] hover:bg-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase opacity-80">Stage 0{stg.id}</span>
                    {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-[#16865B]" />}
                  </div>
                  <Icon className="w-4 h-4 mb-1" />
                  <p className="font-extrabold text-xs leading-tight">{stg.name}</p>
                </button>
              );
            })}
          </div>

          {/* Selected Stage Detail Box */}
          <div className="p-4 rounded-md bg-[#F5F7FA] border border-[#D9E0E7] space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#164A7B] uppercase tracking-wider text-[11px]">
                Stage {stages[activeStage - 1].id}: {stages[activeStage - 1].name}
              </span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                stages[activeStage - 1].status === 'Completed'
                  ? 'bg-[#16865B] text-white'
                  : stages[activeStage - 1].status === 'In Progress'
                  ? 'bg-[#164A7B] text-white'
                  : 'bg-[#5B6875] text-white'
              }`}>
                {stages[activeStage - 1].status}
              </span>
            </div>
            <p className="font-bold text-[#17202A] text-sm">
              {stages[activeStage - 1].desc}
            </p>
            <p className="text-[#5B6875] pt-2 border-t border-[#D9E0E7]">
              Assigned Team: <strong>Team HydroShield (PSG Tech)</strong> | Faculty Guide: <strong>Dr. R. Sundaram</strong> | Sponsor: <strong>TATA CSR ($5,000)</strong>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
