import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';

export default function Footer({ setActivePage }) {
  return (
    <footer className="bg-[#0B2F50] text-slate-300 border-t border-[#164A7B] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          
          {/* Brand info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-md bg-[#164A7B] flex items-center justify-center text-white font-bold border border-white/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-base text-white tracking-tight">SIH26043</span>
                <span className="ml-2 text-[10px] px-2 py-0.5 rounded bg-[#164A7B] text-white font-bold border border-white/10">
                  THE OUTLIERS
                </span>
              </div>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed max-w-md">
              An intelligent collaboration platform connecting societal problems with universities, industry partners, and government agencies to convert ground-level challenges into measurable real-world impact.
            </p>
            <div className="flex items-center space-x-3 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#164A7B]/60 text-slate-200 border border-[#164A7B]">
                <Award className="w-3.5 h-3.5 text-[#C47A00]" />
                Smart India Hackathon 2026 Innovation Platform
              </span>
            </div>
          </div>

          {/* Module Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Demo Modules</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button onClick={() => setActivePage('report')} className="hover:text-white transition-colors">
                  Report a Problem
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('analysis')} className="hover:text-white transition-colors">
                  AI Intelligence
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('matching')} className="hover:text-white transition-colors">
                  Smart Matchmaker
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('projects')} className="hover:text-white transition-colors">
                  Project Lifecycle
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('dashboard')} className="hover:text-white transition-colors">
                  Impact Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Core Innovations */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Core Pillars</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#164A7B]"></span>
                <span>AI Problem Intelligence</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16865B]"></span>
                <span>Smart Multi-Stakeholder Matching</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C47A00]"></span>
                <span>8-Stage Problem-to-Impact Pipeline</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#164A7B]"></span>
                <span>Government Impact Analytics</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[#164A7B]/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-300 gap-3">
          <p>© 2026 Team THE OUTLIERS — Smart India Hackathon PS SIH26043.</p>
          <span className="text-slate-300">Centralized Societal Innovation Ecosystem</span>
        </div>
      </div>
    </footer>
  );
}
