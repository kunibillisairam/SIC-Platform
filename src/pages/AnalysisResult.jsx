import React, { useState, useEffect } from 'react';
import { 
  BrainCircuit, 
  CheckCircle2, 
  ArrowRight, 
  GitMerge, 
  Loader2, 
  Sparkles,
  Info,
  MapPin,
  Users,
  RefreshCw,
  ArrowDown,
  FileText,
  Check
} from 'lucide-react';

export default function AnalysisResult({ problemData, setActivePage }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  // Use submitted data or fallback to the prompt's exact example values
  const data = {
    title: problemData?.title || 'Seasonal drinking water shortage in a rural community',
    category: 'Water Resources',
    priority: problemData?.urgency || 'HIGH',
    severityScore: 87,
    peopleAffected: problemData?.impactScope || '4,800',
    location: problemData?.district || 'Example District, Jharkhand',
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
    <div className="bg-gov-bg min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Prototype Disclaimer Banner */}
        <div className="bg-white border border-gov-warning rounded-lg p-3.5 flex items-start space-x-3 text-gov-text-primary text-xs sm:text-sm shadow-sm">
          <Info className="w-5 h-5 text-gov-warning shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Prototype Demonstration:</strong> This page shows the automated AI problem understanding, severity calculation, and semantic deduplication results.
          </div>
        </div>

        {/* Processing Animation View */}
        {isAnalyzing ? (
          <div className="bg-white text-gov-text-primary rounded-lg p-8 sm:p-12 border border-gov-border shadow-sm space-y-8 text-center relative overflow-hidden">
            <div className="relative z-10 space-y-3 max-w-xl mx-auto">
              <div className="w-14 h-14 rounded-lg bg-gov-primary/10 flex items-center justify-center mx-auto text-gov-primary">
                <BrainCircuit className="w-8 h-8" />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-gov-primary-dark">
                AI Problem Analysis
              </h2>
              <p className="text-gov-text-secondary text-sm">
                Processing report details, extracting core intent, and checking semantic duplicates...
              </p>
            </div>

            {/* Progress Bar */}
            <div className="relative z-10 max-w-md mx-auto space-y-2">
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-gov-border">
                <div 
                  className="bg-gov-primary h-2.5 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((currentStepIndex + 1) / steps.length) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-[11px] font-semibold text-gov-text-secondary">
                <span>Analyzing input...</span>
                <span>{Math.round(((currentStepIndex + 1) / steps.length) * 100)}%</span>
              </div>
            </div>

            {/* Processing Steps Checklist */}
            <div className="relative z-10 max-w-md mx-auto space-y-3 text-left bg-gov-bg p-5 rounded-lg border border-gov-border">
              {steps.map((stepText, idx) => {
                const isCompleted = idx < currentStepIndex || (idx === currentStepIndex && currentStepIndex === steps.length - 1 && !isAnalyzing);
                const isCurrent = idx === currentStepIndex && isAnalyzing;

                return (
                  <div key={stepText} className="flex items-center space-x-3">
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-gov-success shrink-0" />
                    ) : isCurrent ? (
                      <Loader2 className="w-5 h-5 text-gov-primary animate-spin shrink-0" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-slate-350 shrink-0"></div>
                    )}
                    <span className={`text-sm font-semibold transition-colors ${
                      isCompleted ? 'text-gov-success' : isCurrent ? 'text-gov-primary-dark font-bold' : 'text-gov-text-secondary'
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
                className="text-xs text-gov-primary hover:underline transition-colors cursor-pointer font-bold"
              >
                Skip animation & view dashboard
              </button>
            </div>

          </div>
        ) : (
          /* Main AI Analysis Result Dashboard */
          <div className="space-y-8">
            
            {/* Header Title Card */}
            <div className="bg-gov-primary-dark text-white rounded-lg p-6 sm:p-8 border border-gov-border shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-gov-success text-white text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>AI Problem Analysis Complete</span>
                </div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-white">
                  "{data.title}"
                </h1>
                <p className="text-slate-300 text-xs sm:text-sm">
                  System evaluation and semantic clustering results for judges & stakeholders.
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsAnalyzing(true)}
                  className="px-3.5 py-2.5 bg-transparent hover:bg-white/10 text-slate-200 text-xs font-semibold rounded-lg border border-slate-500 transition-colors flex items-center space-x-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Re-analyze</span>
                </button>
                <button
                  onClick={() => setActivePage('matching')}
                  className="px-6 py-2.5 bg-gov-success hover:bg-emerald-800 text-white text-xs font-bold rounded-lg shadow-sm flex items-center space-x-2 cursor-pointer border border-gov-success"
                >
                  <span>Find Best Matches</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Key Metrics Overview Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              
              {/* Box 1: Problem Category */}
              <div className="bg-white rounded-lg p-4 sm:p-5 border border-gov-border shadow-sm space-y-1.5">
                <span className="text-[10px] font-bold text-gov-text-secondary uppercase tracking-wider block">
                  Problem Category
                </span>
                <span className="text-sm sm:text-base font-extrabold text-gov-text-primary block truncate">
                  {data.category}
                </span>
                <span className="text-[11px] text-gov-primary font-semibold block">Primary Domain</span>
              </div>

              {/* Box 2: Priority */}
              <div className="bg-white rounded-lg p-4 sm:p-5 border border-gov-border shadow-sm space-y-1.5">
                <span className="text-[10px] font-bold text-gov-text-secondary uppercase tracking-wider block">
                  Priority
                </span>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded bg-gov-danger text-white font-bold text-xs uppercase">
                    {data.priority}
                  </span>
                </div>
                <span className="text-[11px] text-gov-text-secondary font-medium block">Urgent Action</span>
              </div>

              {/* Box 3: Severity Score */}
              <div className="bg-white rounded-lg p-4 sm:p-5 border border-gov-border shadow-sm space-y-1.5">
                <span className="text-[10px] font-bold text-gov-text-secondary uppercase tracking-wider block">
                  Severity Score
                </span>
                <span className="text-xl sm:text-2xl font-black text-gov-warning block">
                  {data.severityScore}/100
                </span>
                <span className="text-[11px] text-gov-text-secondary font-medium block">Impact Index</span>
              </div>

              {/* Box 4: People Affected */}
              <div className="bg-white rounded-lg p-4 sm:p-5 border border-gov-border shadow-sm space-y-1.5">
                <span className="text-[10px] font-bold text-gov-text-secondary uppercase tracking-wider block">
                  People Affected
                </span>
                <span className="text-xl sm:text-2xl font-black text-gov-primary block">
                  {data.peopleAffected}
                </span>
                <span className="text-[11px] text-gov-text-secondary font-medium block">Estimated Population</span>
              </div>

              {/* Box 5: Location */}
              <div className="bg-white rounded-lg p-4 sm:p-5 border border-gov-border shadow-sm space-y-1.5 col-span-2 sm:col-span-1">
                <span className="text-[10px] font-bold text-gov-text-secondary uppercase tracking-wider block">
                  Location
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-gov-text-primary block leading-tight">
                  {data.location}
                </span>
                <span className="text-[11px] text-gov-text-secondary font-medium block">Geographic Region</span>
              </div>

            </div>

            {/* AI Understanding Section */}
            <div className="bg-white rounded-lg p-6 sm:p-8 border border-gov-border shadow-sm space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-gov-border">
                <div className="w-10 h-10 rounded-lg bg-gov-primary/10 text-gov-primary flex items-center justify-center">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-gov-text-primary">
                    AI Understanding
                  </h2>
                  <p className="text-xs text-gov-text-secondary">
                    Extracted problem core and mapped technical resolution domains.
                  </p>
                </div>
              </div>

              {/* Identified Problem & Possible Areas Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Identified Problem */}
                <div className="bg-gov-bg rounded-lg p-5 border border-gov-border space-y-2">
                  <span className="text-xs font-bold text-gov-text-secondary uppercase tracking-wider block">
                    Identified Problem
                  </span>
                  <p className="text-base font-extrabold text-gov-text-primary leading-snug">
                    {data.identifiedProblem}
                  </p>
                  <p className="text-xs text-gov-text-secondary pt-1 leading-relaxed">
                    The NLP engine processed the citizen description, identifying seasonal groundwater depletion, drinking water scarcity, and distance to water sources as the primary failure points.
                  </p>
                </div>

                {/* Possible Areas */}
                <div className="bg-gov-bg rounded-lg p-5 border border-gov-border space-y-3">
                  <span className="text-xs font-bold text-gov-text-secondary uppercase tracking-wider block">
                    Possible Areas
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {data.possibleAreas.map((area) => (
                      <span 
                        key={area}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-white border border-gov-primary text-gov-primary font-bold text-xs shadow-sm"
                      >
                        <Check className="w-3.5 h-3.5 text-gov-primary" />
                        <span>{area}</span>
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gov-text-secondary pt-1 leading-relaxed">
                    Cross-referenced with academic discipline taxonomy to target universities with active R&D capabilities in these specific fields.
                  </p>
                </div>

              </div>
            </div>

            {/* Similar Problems Detected & Deduplication Section */}
            <div className="bg-white rounded-lg p-6 sm:p-8 border border-gov-border shadow-sm space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-gov-border">
                <div className="w-10 h-10 rounded-lg bg-gov-primary/10 text-gov-primary flex items-center justify-center">
                  <GitMerge className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-gov-text-primary">
                    Similar Problems Detected & Deduplication
                  </h2>
                  <p className="text-xs text-gov-text-secondary">
                    Semantic similarity matching and geospatial report clustering.
                  </p>
                </div>
              </div>

              {/* Stat Counters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gov-bg border border-gov-border rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-gov-text-secondary uppercase block">Similar Reports Detected</span>
                    <span className="text-xl font-black text-gov-text-primary">{data.similarReportsCount} reports</span>
                  </div>
                  <div className="w-10 h-10 rounded bg-gov-primary text-white flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                </div>

                <div className="bg-gov-bg border border-gov-border rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-gov-text-secondary uppercase block">Locations Affected</span>
                    <span className="text-xl font-black text-gov-text-primary">{data.locationsAffectedCount} locations</span>
                  </div>
                  <div className="w-10 h-10 rounded bg-gov-primary text-white flex items-center justify-center font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Visual Deduplication Flow */}
              <div className="bg-gov-bg text-gov-text-primary border border-gov-border rounded-lg p-6 sm:p-8 space-y-6">
                <div className="text-center space-y-1">
                  <span className="text-xs font-extrabold text-gov-primary uppercase tracking-widest block">
                    Visual Deduplication Flow
                  </span>
                  <h3 className="text-base font-extrabold text-gov-text-primary">
                    Clustering Multiple Citizen Submissions into 1 Problem Cluster
                  </h3>
                </div>

                {/* Flow Diagram */}
                <div className="max-w-md mx-auto flex flex-col items-center space-y-3">
                  
                  {/* Step 1 Box: 7 Citizen Reports */}
                  <div className="w-full bg-white border border-gov-border rounded-lg p-4 text-center shadow-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <Users className="w-5 h-5 text-gov-primary" />
                      <span className="font-extrabold text-base text-gov-text-primary">
                        7 Citizen Reports
                      </span>
                    </div>
                    <p className="text-[11px] text-gov-text-secondary mt-1">
                      Submitted across 3 nearby panchayat villages within a 12km radius.
                    </p>
                  </div>

                  {/* Downward Arrow */}
                  <div className="flex items-center justify-center text-gov-primary py-1">
                    <div className="w-8 h-8 rounded-full bg-gov-primary/10 border border-gov-primary/30 flex items-center justify-center">
                      <ArrowDown className="w-4 h-4 text-gov-primary" />
                    </div>
                  </div>

                  {/* Step 2 Box: 1 Problem Cluster */}
                  <div className="w-full bg-white border-2 border-gov-success rounded-lg p-5 text-center shadow-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <GitMerge className="w-6 h-6 text-gov-success" />
                      <span className="font-black text-lg text-gov-success">
                        1 Problem Cluster
                      </span>
                    </div>
                    <span className="mt-1 inline-block text-[10px] font-bold px-2.5 py-0.5 rounded bg-gov-success text-white">
                      Cluster #JHK-WATER-087
                    </span>
                    <p className="text-[11px] text-gov-text-secondary mt-2">
                      Prevents redundant solver efforts and unifies R&D funding for maximum community impact.
                    </p>
                  </div>

                </div>
              </div>

            </div>

            {/* Bottom Call To Action Button */}
            <div className="bg-gov-primary-dark text-white rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-gov-border shadow-sm">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-lg font-extrabold">
                  Proceed to Smart Matchmaking
                </h3>
                <p className="text-xs text-slate-300 max-w-xl">
                  Connect this unified problem cluster with registered university research labs, student innovation teams, and CSR sponsors.
                </p>
              </div>

              <button
                onClick={() => setActivePage('matching')}
                className="w-full sm:w-auto px-6 py-3 bg-gov-success hover:bg-emerald-800 text-white font-extrabold text-sm rounded-lg shadow-sm border border-gov-success flex items-center justify-center space-x-3 transition-colors cursor-pointer shrink-0"
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
