import React from 'react';
import { ShieldCheck, BrainCircuit, GitMerge, Layers } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-gov-bg min-h-screen py-12 text-gov-text-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="bg-gov-primary-dark text-white rounded-lg p-8 border border-gov-border shadow-sm space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-white/10 text-slate-200 text-xs font-bold border border-white/15">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Societal Innovation Collaboration Platform</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-white">
            About The Platform
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            We are building the <strong>Societal Innovation Collaboration Platform</strong> — a nationwide engine that bridges the gap between ground-level community challenges and university R&D, CSR funding, and government execution.
          </p>
        </div>

        {/* 3 Innovations Section */}
        <div className="bg-white rounded-lg p-8 border border-gov-border shadow-sm space-y-6">
          <h2 className="text-base font-extrabold text-gov-text-primary">
            Our 3 Main Innovations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-lg bg-gov-bg border border-gov-border space-y-2">
              <div className="w-10 h-10 rounded bg-gov-primary text-white flex items-center justify-center font-bold mb-3">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-gov-text-primary text-sm">1. AI Problem Intelligence</h3>
              <p className="text-xs text-gov-text-secondary leading-relaxed">
                Automated NLP context extraction, severity scoring, and geospatial duplicate clustering to streamline raw community reports.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-gov-bg border border-gov-border space-y-2">
              <div className="w-10 h-10 rounded bg-gov-primary text-white flex items-center justify-center font-bold mb-3">
                <GitMerge className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-gov-text-primary text-sm">2. Smart Matchmaker</h3>
              <p className="text-xs text-gov-text-secondary leading-relaxed">
                Multi-parameter matching algorithm pairing ground problems with student innovation teams, faculty guides, and CSR sponsors.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-gov-bg border border-gov-border space-y-2">
              <div className="w-10 h-10 rounded bg-gov-success text-white flex items-center justify-center font-bold mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-gov-text-primary text-sm">3. 8-Stage Lifecycle</h3>
              <p className="text-xs text-gov-text-secondary leading-relaxed">
                Transparent execution tracking from initial Problem post to Prototype, Field Pilot, Deployment, and measured Social Impact.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
