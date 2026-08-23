import React, { useState } from 'react';
import { 
  Building2, 
  FilePlus2, 
  Search, 
  FolderKanban, 
  BarChart3, 
  Info, 
  Menu, 
  X,
  Sparkles,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Building2 },
    { id: 'report', label: 'Report Problem', icon: FilePlus2 },
    { id: 'explore', label: 'Explore Problems', icon: Search },
    { id: 'projects', label: 'Projects', icon: FolderKanban },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'about', label: 'About', icon: Info },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-xl">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 py-1.5 px-4 text-xs border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-medium">
          <div className="flex items-center space-x-2 text-slate-300">
            <span className="text-slate-200 font-medium">Societal Innovation Collaboration Platform</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-300">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              ACTIVE PLATFORM
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo & Name */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200 border border-blue-400/30">
              <ShieldCheck className="w-6 h-6 text-blue-100" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-base tracking-tight text-white group-hover:text-blue-300 transition-colors">
                  SIC Platform
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium line-clamp-1">
                Societal Innovation Collaboration Platform
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* CTA Action Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => handleNavClick('report')}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-bold rounded-lg shadow-md hover:from-emerald-600 hover:to-teal-700 transition-all transform hover:-translate-y-0.5 border border-emerald-400/30"
            >
              <FilePlus2 className="w-4 h-4" />
              <span>Report Problem</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-slate-400" />
                  <span>{item.label}</span>
                </div>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
