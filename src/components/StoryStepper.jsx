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

  if (currentIndex === -1) return null;

  return (
    <div className="bg-[#EFE9DD] border-b border-[#E5DFC5] text-[#17202A] py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        
        <div className="flex items-center space-x-2 font-semibold shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#16865B]"></span>
          <span className="text-[#17202A] font-bold uppercase tracking-wider text-[11px]">SIH Demo Storyline:</span>
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
                  className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-xs font-bold transition-colors shrink-0 ${
                    isCurrent
                      ? 'bg-[#164A7B] text-white'
                      : isPassed
                      ? 'bg-white text-[#16865B] border border-[#E5DFC5]'
                      : 'bg-white/60 text-[#5B6875] border border-[#E5DFC5]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="whitespace-nowrap">{stg.label}</span>
                </button>

                {idx < steps.length - 1 && (
                  <ChevronRight className="w-3.5 h-3.5 text-[#5B6875] shrink-0 hidden md:block" />
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </div>
  );
}
