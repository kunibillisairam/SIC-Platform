import React from 'react';
import { ShieldCheck, Info, Mail, Phone, Globe } from 'lucide-react';

export default function Footer({ setActivePage }) {
  return (
    <footer className="bg-slate-100 text-slate-650 border-t border-slate-200 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Platform Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-gov-primary flex items-center justify-center text-white shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-base text-slate-900 tracking-tight">
                Societal Innovation Platform
              </span>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              An intelligent, nationwide collaboration platform connecting societal challenges with university research departments, CSR funding, and government policy groups.
            </p>
          </div>

          {/* Column 2: Platform Navigation */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => { setActivePage('report'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="text-slate-600 hover:text-blue-600 hover:underline transition-colors text-left cursor-pointer"
                >
                  Report a Problem
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('explore'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="text-slate-600 hover:text-blue-600 hover:underline transition-colors text-left cursor-pointer"
                >
                  Explore Problems
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('matching'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="text-slate-600 hover:text-blue-600 hover:underline transition-colors text-left cursor-pointer"
                >
                  Smart Matchmaker
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="text-slate-600 hover:text-blue-600 hover:underline transition-colors text-left cursor-pointer"
                >
                  Project Lifecycle
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePage('dashboard'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
                  className="text-slate-600 hover:text-blue-600 hover:underline transition-colors text-left cursor-pointer"
                >
                  Impact Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Help */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">
              Contact & Info
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>support@sih-platform.gov.in</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>+91 11-2301-xxxx</span>
              </li>
              <li className="flex items-center space-x-2">
                <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Block */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© 2026 Societal Innovation Collaboration Platform. All rights reserved.</p>
          
          <div className="flex items-center space-x-1.5 bg-slate-200/60 px-3 py-1 rounded border border-slate-300 text-slate-600">
            <Info className="w-3.5 h-3.5 text-slate-500" />
            <span>Prototype Demonstration Platform</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
