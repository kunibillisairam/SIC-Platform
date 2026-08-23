import React from 'react';
import { FilePlus2, BrainCircuit, GitMerge, Layers, BarChart3, ChevronRight } from 'lucide-react';

export default function StoryStepper({ activePage, setActivePage }) {
  const steps = [
    { id: 'report', label: '1. Citizen Problem', icon: FilePlus2 },
    { id: 'analysis', label: '2. AI Intelligence', icon: BrainCircuit },
    { id: 'matching', label: '3. Smart Matching', icon: GitMerge },
    { id: 'projects', label: '4. Project Lifecycle', icon: Layers },
    { id: 'dashboard', label: '5. Impact Analytics', icon: BarChart3 },
  ];

  // Map page to current active step index
  const getStepIndex = (page) => {
    switch (page) {
      case 'report': return 0;
      case 'analysis': return 1;
      case 'matching': return 2;
      case 'projects': return 3;
      case 'dashboard': return 4;
      default: return -1;
    }
  };

  const currentIndex = getStepIndex(activePage);

  if (currentIndex === -1) return null; // Don't show on Home or About page

  return (
    <div className="bg-gov-bg border-b border-gov-border text-gov-text-primary py-3.5 px-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        
        <div className="flex items-center space-x-2 text-gov-text-secondary font-semibold shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-gov-primary"></span>
          <span className="text-gov-primary font-extrabold uppercase tracking-wider text-[11px]">SIH Demo Storyline:</span>
        </div>

        {/* Stepper buttons */}
        <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
          {steps.map((stg, idx) => {
            const Icon = stg.icon;
            const isCurrent = idx === currentIndex;
            const isPassed = idx < currentIndex;

            return (
              <React.Fragment key={stg.id}>
                <button
                  onClick={() => {
                    setActivePage(stg.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                    isCurrent
                      ? 'bg-gov-primary text-white shadow-sm ring-1 ring-gov-primary'
                      : isPassed
                      ? 'bg-white border border-gov-success text-gov-success hover:bg-slate-50'
                      : 'bg-white border border-gov-border text-gov-text-secondary hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isCurrent ? 'text-white' : isPassed ? 'text-gov-success' : 'text-gov-text-secondary'}`} />
                  <span className="whitespace-nowrap">{stg.label}</span>
                </button>

                {idx < steps.length - 1 && (
                  <ChevronRight className="w-3.5 h-3.5 text-gov-border shrink-0 hidden md:block" />
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </div>
  );
}

