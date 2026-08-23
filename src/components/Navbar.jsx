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

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Building2 },
    { id: 'report', label: 'Report Problem', icon: FilePlus2 },
    { id: 'analysis', label: 'AI Intelligence', icon: BrainCircuit },
    { id: 'matching', label: 'Smart Matching', icon: GitMerge },
    { id: 'projects', label: 'Projects', icon: FolderKanban },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'explore', label: 'Explore', icon: Search },
    { id: 'about', label: 'About', icon: Info },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2] text-[#17202A] border-b border-[#E5DFC5] shadow-xs">
      {/* Top Banner */}
      <div className="bg-[#EFE9DD] py-1.5 px-4 text-xs border-b border-[#E5DFC5]">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-medium">
          <div className="flex items-center space-x-2 text-[#17202A]">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#164A7B] text-white">
              SIH26043
            </span>
            <span className="hidden sm:inline text-[#5B6875]">|</span>
            <span className="text-[#17202A] font-semibold">Societal Innovation Collaboration Platform</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-[#16865B] font-bold bg-white/80 px-2 py-0.5 rounded border border-[#E5DFC5]">
              TEAM THE OUTLIERS
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Brand Logo & Title */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-md bg-[#164A7B] flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-sm tracking-tight text-[#17202A]">
                  SIH26043
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#164A7B] text-white font-bold">
                  THE OUTLIERS
                </span>
              </div>
              <p className="text-[11px] text-[#5B6875] font-medium line-clamp-1">
                Societal Innovation Collaboration Platform
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                    isActive 
                      ? 'bg-[#164A7B] text-white' 
                      : 'text-[#17202A] hover:bg-[#EFE9DD]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* CTA Action Button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => handleNavClick('report')}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-[#16865B] hover:bg-[#116846] text-white text-xs font-bold rounded-md transition-colors shadow-xs"
            >
              <FilePlus2 className="w-3.5 h-3.5" />
              <span>Report Problem</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md text-[#17202A] hover:bg-[#EFE9DD]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF7F2] border-b border-[#E5DFC5] px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-xs font-bold ${
                  isActive
                    ? 'bg-[#164A7B] text-white'
                    : 'text-[#17202A] hover:bg-[#EFE9DD]'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <Icon className="w-4 h-4 text-[#5B6875]" />
                  <span>{item.label}</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-[#5B6875]" />
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
