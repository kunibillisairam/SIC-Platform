import React, { useState, useEffect } from 'react';
import { 
  BrainCircuit, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Tag, 
  GitMerge, 
  Layers, 
  Loader2, 
  Sparkles,
  Info,
  MapPin,
  Users,
  Building2,
  RefreshCw,
  ArrowDown,
  FileText,
  Compass,
  Check
} from 'lucide-react';

export default function AnalysisResult({ problemData, setActivePage }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  // Use submitted data or fallback to the prompt's exact example values
  const data = {
    title: problemData?.title || 'Seasonal drinking water shortage in a rural community',
    category: 'Water Resources',
    priority: problemData?.severity || 'HIGH',
    severityScore: 87,
    peopleAffected: problemData?.peopleAffected || '4,800',
    location: problemData?.location || 'Example District, Jharkhand',
    identifiedProblem: 'Seasonal groundwater/water availability issue',
    possibleAreas: [
      'Water Resources',
      'Civil Engineering',
      'Environmental Engineering',
      'IoT Monitoring'
    ],
    similarReportsCount: 7,
    locationsAffectedCount: 3,
  };

  const steps = [
    'Understanding problem...',
    'Identifying domain...',
    'Checking similar problems...',
    'Calculating priority...',
    'Finding suitable expertise...'
  ];

  useEffect(() => {
    setIsAnalyzing(true);
    setCurrentStepIndex(0);

    const interval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => setIsAnalyzing(false), 500);
          return prev;
        }
      });
    }, 600);

    return () => clearInterval(interval);
  }, [problemData]);

  const handleSkip = () => {
    setIsAnalyzing(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Prototype Disclaimer Banner */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3.5 flex items-start space-x-3 text-amber-900 text-xs sm:text-sm">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Prototype Demonstration:</strong> This page shows the automated AI problem understanding, severity calculation, and semantic deduplication results.
          </div>
        </div>

        {/* Processing Animation View */}
        {isAnalyzing ? (
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-8 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 space-y-3 max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center mx-auto shadow-lg shadow-blue-500/30 animate-pulse">
                <BrainCircuit className="w-9 h-9 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                AI Problem Analysis
              </h2>
              <p className="text-slate-400 text-sm">
                Processing report details, extracting core intent, and checking semantic duplicates...
              </p>
            </div>

            {/* Progress Bar */}
            <div className="relative z-10 max-w-md mx-auto space-y-2">
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden border border-slate-700">
                <div 
                  className="bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-400 h-2.5 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((currentStepIndex + 1) / steps.length) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                <span>Analyzing input...</span>
                <span>{Math.round(((currentStepIndex + 1) / steps.length) * 100)}%</span>
              </div>
            </div>

            {/* Processing Steps Checklist */}
            <div className="relative z-10 max-w-md mx-auto space-y-3 text-left bg-slate-950/70 p-5 rounded-2xl border border-slate-800/80">
              {steps.map((stepText, idx) => {
                const isCompleted = idx < currentStepIndex || (idx === currentStepIndex && currentStepIndex === steps.length - 1 && !isAnalyzing);
                const isCurrent = idx === currentStepIndex && isAnalyzing;

                return (
                  <div key={stepText} className="flex items-center space-x-3">
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    ) : isCurrent ? (
                      <Loader2 className="w-5 h-5 text-blue-400 animate-spin shrink-0" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-slate-700 shrink-0"></div>
                    )}
                    <span className={`text-sm font-semibold transition-colors ${
                      isCompleted ? 'text-emerald-300' : isCurrent ? 'text-white font-bold' : 'text-slate-500'
                    }`}>
                      {stepText}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="relative z-10 pt-2">
              <button
                onClick={handleSkip}
                className="text-xs text-slate-400 hover:text-white underline transition-colors cursor-pointer"
              >
                Skip animation & view dashboard
              </button>
            </div>

          </div>
        ) : (
          /* Main AI Analysis Result Dashboard */
          <div className="space-y-8">
            
            {/* Header Title Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>AI Problem Analysis Complete</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                  "{data.title}"
                </h1>
                <p className="text-slate-400 text-xs sm:text-sm">
                  System evaluation and semantic clustering results for judges & stakeholders.
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsAnalyzing(true)}
                  className="px-3.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl border border-slate-700 transition-colors flex items-center space-x-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Re-analyze</span>
                </button>
                <button
                  onClick={() => setActivePage('matching')}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-bold rounded-xl shadow-lg border border-blue-400/30 flex items-center space-x-2 cursor-pointer"
                >
                  <span>Find Best Matches</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Key Metrics Overview Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              
              {/* Box 1: Problem Category */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm space-y-1.5">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  Problem Category
                </span>
                <span className="text-base sm:text-lg font-extrabold text-slate-900 block truncate">
                  {data.category}
                </span>
                <span className="text-[11px] text-blue-600 font-semibold block">Primary Domain</span>
              </div>

              {/* Box 2: Priority */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm space-y-1.5">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  Priority
                </span>
                <span className="inline-block px-3 py-1 rounded-lg bg-rose-100 text-rose-800 font-black text-sm uppercase border border-rose-200">
                  {data.priority}
                </span>
                <span className="text-[11px] text-slate-500 font-medium block">Urgent Action</span>
              </div>

              {/* Box 3: Severity Score */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm space-y-1.5">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  Severity Score
                </span>
                <span className="text-xl sm:text-2xl font-black text-amber-600 block">
                  {data.severityScore}/100
                </span>
                <span className="text-[11px] text-slate-500 font-medium block">Impact Index</span>
              </div>

              {/* Box 4: People Affected */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm space-y-1.5">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  People Affected
                </span>
                <span className="text-xl sm:text-2xl font-black text-blue-700 block">
                  {data.peopleAffected}
                </span>
                <span className="text-[11px] text-slate-500 font-medium block">Estimated Population</span>
              </div>

              {/* Box 5: Location */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm space-y-1.5 col-span-2 sm:col-span-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  Location
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-slate-900 block leading-tight">
                  {data.location}
                </span>
                <span className="text-[11px] text-slate-500 font-medium block">Geographic Region</span>
              </div>

            </div>

            {/* AI Understanding Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">
                    AI Understanding
                  </h2>
                  <p className="text-xs text-slate-500">
                    Extracted problem core and mapped technical resolution domains.
                  </p>
                </div>
              </div>

              {/* Identified Problem & Possible Areas Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Identified Problem */}
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Identified Problem
                  </span>
                  <p className="text-base font-extrabold text-slate-900 leading-snug">
                    {data.identifiedProblem}
                  </p>
                  <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                    The NLP engine processed the citizen description, identifying seasonal groundwater depletion, drinking water scarcity, and distance to water sources as the primary failure points.
                  </p>
                </div>

                {/* Possible Areas */}
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Possible Areas
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {data.possibleAreas.map((area) => (
                      <span 
                        key={area}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white font-bold text-xs shadow-sm"
                      >
                        <Check className="w-3.5 h-3.5 text-blue-200" />
                        <span>{area}</span>
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                    Cross-referenced with academic discipline taxonomy to target universities with active R&D capabilities in these specific fields.
                  </p>
                </div>

              </div>
            </div>

            {/* Similar Problems Detected & Deduplication Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                  <GitMerge className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">
                    Similar Problems Detected & Deduplication
                  </h2>
                  <p className="text-xs text-slate-500">
                    Semantic similarity matching and geospatial report clustering.
                  </p>
                </div>
              </div>

              {/* Stat Counters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-indigo-50/70 border border-indigo-200 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-indigo-800 uppercase block">Similar Reports Detected</span>
                    <span className="text-2xl font-black text-indigo-950">{data.similarReportsCount} reports</span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                </div>

                <div className="bg-teal-50/70 border border-teal-200 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-teal-800 uppercase block">Locations Affected</span>
                    <span className="text-2xl font-black text-teal-950">{data.locationsAffectedCount} locations</span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Visual Deduplication Flow */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="text-center space-y-1">
                  <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest block">
                    Visual Deduplication Flow
                  </span>
                  <h3 className="text-lg font-extrabold text-white">
                    Clustering Multiple Citizen Submissions into 1 Problem Cluster
                  </h3>
                </div>

                {/* Flow Diagram */}
                <div className="max-w-md mx-auto flex flex-col items-center space-y-3">
                  
                  {/* Step 1 Box: 7 Citizen Reports */}
                  <div className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-center shadow-lg">
                    <div className="flex items-center justify-center space-x-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      <span className="font-extrabold text-base text-white">
                        7 Citizen Reports
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Submitted across 3 nearby panchayat villages within a 12km radius.
                    </p>
                  </div>

                  {/* Downward Arrow */}
                  <div className="flex items-center justify-center text-emerald-400 py-1">
                    <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                      <ArrowDown className="w-5 h-5 text-emerald-400 animate-bounce" />
                    </div>
                  </div>

                  {/* Step 2 Box: 1 Problem Cluster */}
                  <div className="w-full bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border-2 border-emerald-500/60 rounded-xl p-5 text-center shadow-xl shadow-emerald-500/10">
                    <div className="flex items-center justify-center space-x-2">
                      <GitMerge className="w-6 h-6 text-emerald-400" />
                      <span className="font-black text-lg text-emerald-300">
                        1 Problem Cluster
                      </span>
                    </div>
                    <span className="mt-1 inline-block text-[10px] font-bold px-2.5 py-0.5 rounded bg-emerald-900/80 text-emerald-200 border border-emerald-700">
                      Cluster #JHK-WATER-087
                    </span>
                    <p className="text-[11px] text-slate-300 mt-2">
                      Prevents redundant solver efforts and unifies R&D funding for maximum community impact.
                    </p>
                  </div>

                </div>
              </div>

            </div>

            {/* Bottom Call To Action Button */}
            <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-xl font-extrabold">
                  Proceed to Smart Matchmaking
                </h3>
                <p className="text-xs text-slate-300 max-w-xl">
                  Connect this unified problem cluster with registered university research labs, student innovation teams, and CSR sponsors.
                </p>
              </div>

              <button
                onClick={() => setActivePage('matching')}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-600 text-white font-extrabold text-base rounded-xl shadow-xl border border-blue-400/30 flex items-center justify-center space-x-3 transition-all transform hover:-translate-y-0.5 cursor-pointer shrink-0"
              >
                <span>Find Best Matches</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
