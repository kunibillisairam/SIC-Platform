import React from 'react';
import { ShieldCheck, BrainCircuit, GitMerge, Layers } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen py-8 text-[#17202A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div className="bg-[#0B2F50] text-white rounded-md p-6 border border-[#164A7B] shadow-xs space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded bg-[#164A7B] text-slate-100 text-xs font-bold border border-white/10">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SIH26043 • Smart India Hackathon 2026</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold">
            Team THE OUTLIERS
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            We are building the <strong>Societal Innovation Collaboration Platform</strong> — a nationwide engine that bridges the gap between ground-level community challenges and university R&D, CSR funding, and government execution.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="bg-white rounded-md p-6 border border-[#D9E0E7] shadow-xs space-y-4">
          <h2 className="text-base font-extrabold text-[#17202A] uppercase tracking-wider">
            Our 3 Core Pillars
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded bg-[#F5F7FA] border border-[#D9E0E7] space-y-2">
              <div className="w-8 h-8 rounded bg-[#164A7B] text-white flex items-center justify-center font-bold mb-2">
                <BrainCircuit className="w-4 h-4" />
              </div>
              <h3 className="font-extrabold text-[#17202A] text-sm">1. AI Problem Intelligence</h3>
              <p className="text-xs text-[#5B6875] leading-normal">
                Automated NLP context extraction, severity scoring, and geospatial duplicate clustering to streamline raw community reports.
              </p>
            </div>

            <div className="p-4 rounded bg-[#F5F7FA] border border-[#D9E0E7] space-y-2">
              <div className="w-8 h-8 rounded bg-[#16865B] text-white flex items-center justify-center font-bold mb-2">
                <GitMerge className="w-4 h-4" />
              </div>
              <h3 className="font-extrabold text-[#17202A] text-sm">2. Smart Matchmaker</h3>
              <p className="text-xs text-[#5B6875] leading-normal">
                Multi-parameter matching algorithm pairing ground problems with student innovation teams, faculty guides, and CSR sponsors.
              </p>
            </div>

            <div className="p-4 rounded bg-[#F5F7FA] border border-[#D9E0E7] space-y-2">
              <div className="w-8 h-8 rounded bg-[#C47A00] text-white flex items-center justify-center font-bold mb-2">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="font-extrabold text-[#17202A] text-sm">3. 8-Stage Lifecycle</h3>
              <p className="text-xs text-[#5B6875] leading-normal">
                Transparent execution tracking from initial Problem post to Prototype, Field Pilot, Deployment, and measured Social Impact.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
