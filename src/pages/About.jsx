import React from 'react';
import { ShieldCheck, Users, Award, Target, BrainCircuit, GitMerge, Layers, BarChart3 } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SIH26043 • Smart India Hackathon 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            Team THE OUTLIERS
          </h1>
          <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
            We are building the <strong>Societal Innovation Collaboration Platform</strong> — a nationwide engine that bridges the gap between ground-level community challenges and university R&D, CSR funding, and government execution.
          </p>
        </div>

        {/* 3 Innovations Section */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-xl font-extrabold text-slate-900">
            Our 3 Main Innovations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold mb-3">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">1. AI Problem Intelligence</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated NLP context extraction, severity scoring, and geospatial duplicate clustering to streamline raw community reports.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold mb-3">
                <GitMerge className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">2. Smart Matchmaker</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Multi-parameter matching algorithm pairing ground problems with student innovation teams, faculty guides, and CSR sponsors.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">3. 8-Stage Lifecycle</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Transparent execution tracking from initial Problem post to Prototype, Field Pilot, Deployment, and measured Social Impact.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
