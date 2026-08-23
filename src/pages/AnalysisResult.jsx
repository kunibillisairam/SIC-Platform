import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  GitMerge, 
  Loader2, 
  Info,
  MapPin,
  Users,
  ArrowDown,
  FileText,
  Check,
  Calendar,
  AlertCircle
} from 'lucide-react';

export default function AnalysisResult({ problemData, setActivePage }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  // Fallback values matching prompt requirements
  const data = {
    id: problemData?.id || 'PR-2026-8942',
    title: problemData?.title || 'Seasonal drinking water shortage in a rural community',
    category: 'Water Resources',
    priority: problemData?.urgency || 'High',
    severityScore: 87,
    peopleAffected: problemData?.impactScope || '4,800',
    location: problemData?.district || 'Example District, Jharkhand',
    submissionDate: '2026-08-23',
    status: 'Analysis Complete',
    identifiedProblem: 'Seasonal groundwater/water availability issue',
    possibleCauses: 'Seasonal aquifer depletion, pipeline leakage, and high suspended solids in reservoir supply line.',
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
    'Parsing structured report text...',
    'Matching primary engineering domains...',
    'Querying geospatial database for overlaps...',
    'Running severity rule-matrix index...',
    'Structuring collaboration recommendations...'
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
          setTimeout(() => setIsAnalyzing(false), 300);
          return prev;
        }
      });
    }, 450);

    return () => clearInterval(interval);
  }, [problemData]);

  const handleSkip = () => {
    setIsAnalyzing(false);
  };

  return (
    <div className="bg-gov-bg min-h-screen py-10 text-gov-text-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Disclaimer Banner */}
        <div className="bg-white border border-gov-border rounded-lg p-3.5 flex items-start space-x-3 text-xs sm:text-sm shadow-sm">
          <Info className="w-5 h-5 text-gov-primary shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-gov-primary-dark">Prototype Decision-Support Mockup</p>
            <p className="text-gov-text-secondary text-xs">
              Prototype analysis based on semantic similarity and rule/ML-based scoring. This is a demonstration interface representing automated sorting.
            </p>
          </div>
        </div>

        {/* Processing Simulation view */}
        {isAnalyzing ? (
          <div className="bg-white text-gov-text-primary rounded-lg p-8 sm:p-12 border border-gov-border shadow-sm space-y-8 text-center">
            <div className="max-w-xl mx-auto space-y-3">
              <Loader2 className="w-8 h-8 text-gov-primary animate-spin mx-auto" />
              <h2 className="text-lg font-bold text-gov-primary-dark">
                Running Automated Intake Parsing
              </h2>
              <p className="text-gov-text-secondary text-xs">
                Extracting entities, checking geospatial duplicate cluster logs, and indexing domain expertise...
              </p>
            </div>

            {/* Checklist items */}
            <div className="max-w-md mx-auto space-y-3 text-left bg-gov-bg p-5 rounded-lg border border-gov-border text-xs font-medium">
              {steps.map((stepText, idx) => {
                const isCompleted = idx < currentStepIndex;
                const isCurrent = idx === currentStepIndex;

                return (
                  <div key={stepText} className="flex items-center space-x-3">
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-gov-success shrink-0" />
                    ) : isCurrent ? (
                      <Loader2 className="w-4 h-4 text-gov-primary animate-spin shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-gov-border shrink-0"></div>
                    )}
                    <span className={
                      isCompleted ? 'text-gov-success font-bold' : isCurrent ? 'text-gov-primary-dark font-bold' : 'text-gov-text-secondary'
                    }>
                      {stepText}
                    </span>
                  </div>
                );
              })}
            </div>

            <div>
              <button
                onClick={handleSkip}
                className="text-xs text-gov-primary hover:underline font-bold cursor-pointer"
              >
                Skip simulation & view report summary
              </button>
            </div>
          </div>
        ) : (
          /* Main Decision Support Layout */
          <div className="space-y-6">
            
            {/* Header / Summary Box */}
            <div className="bg-white rounded-lg p-6 border border-gov-border shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gov-border pb-4">
                <div>
                  <span className="text-[10px] text-gov-text-secondary uppercase font-bold tracking-wider">
                    Enterprise Decision-Support System
                  </span>
                  <h1 className="text-xl font-bold text-gov-primary-dark mt-0.5">
                    Problem Analysis Report
                  </h1>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-1 rounded bg-gov-primary/10 text-gov-primary border border-gov-primary/20 text-xs font-bold uppercase">
                    ID: {data.id}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-gov-success/10 text-gov-success border border-gov-success/20 text-xs font-bold uppercase">
                    {data.status}
                  </span>
                </div>
              </div>

              {/* Compact Problem Summary Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-gov-text-secondary block font-semibold">Problem Title:</span>
                  <span className="text-gov-text-primary font-bold">{data.title}</span>
                </div>
                <div>
                  <span className="text-gov-text-secondary block font-semibold">Geographical Location:</span>
                  <span className="text-gov-text-primary font-bold flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-gov-text-secondary shrink-0" />
                    {data.location}
                  </span>
                </div>
                <div>
                  <span className="text-gov-text-secondary block font-semibold">Submission Date:</span>
                  <span className="text-gov-text-primary font-bold flex items-center gap-1 mt-0.5">
                    <Calendar className="w-3.5 h-3.5 text-gov-text-secondary shrink-0" />
                    {data.submissionDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Analysis Summary Blocks */}
            <div className="bg-white rounded-lg p-6 border border-gov-border shadow-sm space-y-4">
              <h2 className="text-xs uppercase font-extrabold tracking-wider text-gov-text-secondary border-b border-slate-100 pb-2">
                Analysis Summary
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-gov-bg border border-gov-border rounded p-4">
                  <span className="text-[10px] uppercase font-bold text-gov-text-secondary block">Category</span>
                  <span className="text-sm font-extrabold text-gov-text-primary block mt-1">{data.category}</span>
                </div>
                
                <div className="bg-gov-bg border border-gov-border rounded p-4">
                  <span className="text-[10px] uppercase font-bold text-gov-text-secondary block">Priority</span>
                  <span className="text-sm font-extrabold text-gov-danger block mt-1 uppercase">{data.priority}</span>
                </div>

                <div className="bg-gov-bg border border-gov-border rounded p-4">
                  <span className="text-[10px] uppercase font-bold text-gov-text-secondary block">Severity Index</span>
                  <span className="text-sm font-extrabold text-gov-warning block mt-1">{data.severityScore}/100</span>
                </div>

                <div className="bg-gov-bg border border-gov-border rounded p-4">
                  <span className="text-[10px] uppercase font-bold text-gov-text-secondary block">Affected Population</span>
                  <span className="text-sm font-extrabold text-gov-primary block mt-1">{data.peopleAffected}</span>
                </div>
              </div>
            </div>

            {/* Problem Understanding Section */}
            <div className="bg-white rounded-lg p-6 border border-gov-border shadow-sm space-y-4">
              <h2 className="text-xs uppercase font-extrabold tracking-wider text-gov-text-secondary border-b border-slate-100 pb-2">
                Problem Understanding
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gov-bg border border-gov-border rounded p-4 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-gov-text-secondary block">Identified Problem</span>
                  <p className="text-xs font-semibold text-gov-text-primary leading-relaxed">{data.identifiedProblem}</p>
                </div>

                <div className="bg-gov-bg border border-gov-border rounded p-4 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-gov-text-secondary block">Possible Causes</span>
                  <p className="text-xs font-semibold text-gov-text-primary leading-relaxed">{data.possibleCauses}</p>
                </div>

                <div className="bg-gov-bg border border-gov-border rounded p-4 space-y-2">
                  <span className="text-[10px] uppercase font-bold text-gov-text-secondary block">Relevant Domains</span>
                  <div className="flex flex-wrap gap-1.5">
                    {data.possibleAreas.map(area => (
                      <span key={area} className="px-2 py-0.5 rounded bg-white border border-gov-border text-[10px] text-gov-primary font-bold">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Similar Reports Section */}
            <div className="bg-white rounded-lg p-6 border border-gov-border shadow-sm space-y-6">
              <div>
                <h2 className="text-xs uppercase font-extrabold tracking-wider text-gov-text-secondary border-b border-slate-100 pb-2">
                  Similar Reports & Deduplication
                </h2>
                <p className="text-xs text-gov-text-secondary mt-2">
                  Semantic comparison shows **{data.similarReportsCount} similar reports** submitted across **{data.locationsAffectedCount} locations** in the district database.
                </p>
              </div>

              {/* Deduplication Flow Diagram */}
              <div className="bg-gov-bg border border-gov-border rounded-lg p-5 max-w-sm mx-auto text-center space-y-3">
                
                {/* Inputs block */}
                <div className="bg-white border border-gov-border rounded p-3 font-semibold text-xs text-gov-text-primary shadow-sm">
                  {data.similarReportsCount} Citizen Submissions
                </div>

                {/* Arrow */}
                <div className="flex justify-center text-gov-text-secondary">
                  <ArrowDown className="w-4 h-4" />
                </div>

                {/* Consolidated Cluster block */}
                <div className="bg-white border-2 border-gov-success rounded p-3 font-bold text-xs text-gov-success shadow-sm">
                  1 Consolidated Problem Cluster
                </div>

              </div>
            </div>

            {/* Recommended Action Section */}
            <div className="bg-white rounded-lg p-6 border border-gov-border shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-gov-primary-dark uppercase tracking-wide">
                  Recommended Action
                </h3>
                <p className="text-xs text-gov-text-secondary">
                  Analyze available solver capacities and CSR grants aligned to the identified domains.
                </p>
              </div>

              <button
                onClick={() => setActivePage('matching')}
                className="w-full sm:w-auto px-6 py-2.5 bg-gov-primary hover:bg-gov-primary-dark text-white font-bold text-xs rounded-lg shadow-sm border border-gov-primary transition-colors cursor-pointer flex items-center justify-center space-x-1.5 shrink-0"
              >
                <span>Proceed to Smart Matching</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
