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
  BrainCircuit,
  GitMerge,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

import React, { useState } from 'react';
import { 
  Menu, 
  X,
  ShieldCheck,
  ChevronRight,
  Plus
} from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'problems', label: 'Problems', target: 'explore' },
    { id: 'analysis', label: 'AI Analysis' },
    { id: 'matching', label: 'Smart Matching' },
    { id: 'projects', label: 'Projects' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'explore', label: 'Explore', target: 'explore' },
    { id: 'about', label: 'About' },
  ];

  const handleNavClick = (item) => {
    setActivePage(item.target || item.id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getIsActive = (item) => {
    const targetPage = item.target || item.id;
    return activePage === targetPage;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gov-border shadow-sm text-gov-text-primary">
      {/* Top Govt / SIH Banner (Level 1) */}
      <div className="bg-gov-primary-dark py-2 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-medium text-slate-200">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-white tracking-wider">SIH26043</span>
            <span className="text-slate-400">|</span>
            <span className="font-medium text-slate-350">Societal Innovation Collaboration Platform</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="font-bold text-emerald-400 text-xs tracking-wider">
              THE OUTLIERS
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar (Level 2) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo & Name */}
          <div 
            onClick={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-gov-primary flex items-center justify-center text-white shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-lg tracking-tight text-gov-primary-dark">
                  SIH26043
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-gov-primary-dark text-white font-bold">
                  THE OUTLIERS
                </span>
              </div>
              <p className="text-[10px] text-gov-text-secondary font-medium hidden sm:block">
                Societal Innovation Collaboration Platform
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = getIsActive(item);
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`px-3 py-2 text-sm font-semibold transition-colors relative ${
                    isActive 
                      ? 'text-gov-primary' 
                      : 'text-gov-text-secondary hover:text-gov-primary-dark hover:bg-slate-50 rounded-lg'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gov-primary"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA Action Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => {
                setActivePage('report');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-1.5 px-4 py-2 bg-gov-primary hover:bg-gov-primary-dark text-white text-xs font-bold rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Report a Problem</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gov-text-secondary hover:text-gov-primary-dark hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gov-border px-4 pt-2 pb-4 space-y-1 shadow-inner">
          {navItems.map((item) => {
            const isActive = getIsActive(item);
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-slate-100 text-gov-primary font-bold'
                    : 'text-gov-text-secondary hover:bg-slate-50 hover:text-gov-primary-dark'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-75" />
              </button>
            );
          })}
          {/* Mobile CTA */}
          <div className="pt-2 border-t border-gov-border mt-2">
            <button
              onClick={() => {
                setActivePage('report');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full flex items-center justify-center space-x-1.5 px-4 py-2.5 bg-gov-primary hover:bg-gov-primary-dark text-white text-sm font-bold rounded-lg transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Report a Problem</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

