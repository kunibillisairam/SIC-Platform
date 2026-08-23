import React from 'react';
import { ShieldCheck, Github, ExternalLink, Heart, Globe, Award } from 'lucide-react';

export default function Footer({ setActivePage }) {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Col 1: Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight">SIC Platform</span>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              An intelligent collaboration platform connecting societal problems with universities, industry partners, and government agencies to convert ground-level challenges into measurable real-world impact.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Societal Innovation Platform
              </span>
            </div>
          </div>

          {/* Col 2: Core Platform Modules */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Demo Modules</h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => setActivePage('report')} className="hover:text-blue-400 transition-colors">
                  Report a Problem
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('explore')} className="hover:text-blue-400 transition-colors">
                  Explore Problems
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('matching')} className="hover:text-blue-400 transition-colors">
                  Smart Matchmaker
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('projects')} className="hover:text-blue-400 transition-colors">
                  Project Lifecycle
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('dashboard')} className="hover:text-blue-400 transition-colors">
                  Impact Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Innovations */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Core Innovations</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span>AI Problem Intelligence & Priority</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Duplicate Detection & Clustering</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Multi-Stakeholder Smart Matching</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                <span>8-Stage Problem-to-Impact Pipeline</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-4">
          <p>© 2026 Societal Innovation Collaboration Platform.</p>
          <div className="flex items-center space-x-6">
            <span className="text-slate-400">Centralized Societal Innovation Ecosystem</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
